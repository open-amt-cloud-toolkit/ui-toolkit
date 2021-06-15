/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/

import { ICommunicator, IStateProcessor, IRLEDecoder } from '../Interfaces'
import { TypeConverter } from '../Converter'
import { Desktop } from '../Desktop'
import { ImageHelper, CommsHelper, isTruthy } from '../Utilities'

/**
 * Handle encoded RFB packets. Supported encodings, RAW, ZRLE.
 */

class Encoding implements IStateProcessor {
  wsSocket: ICommunicator
  next: IStateProcessor

  parent: Desktop
  rleDecoder: IRLEDecoder
  updateRFBState: any
  constructor (comm: ICommunicator, parent: Desktop, rleDecoder: IRLEDecoder, updateRFBState: (state: number, byteLength: number) => void) {
    this.wsSocket = comm
    this.parent = parent
    this.rleDecoder = rleDecoder
    this.updateRFBState = updateRFBState
  }

  processState (acc: any): any { // acc is the accumulated byte encoded string so far
    // console.log(TypeConverter.rstr2hex(acc))
    const accview = new DataView(acc.buffer)
    let cmdSize = 0
    if (acc.length >= 12) {
      const x = accview.getUint16(0)
      const y = accview.getUint16(2)
      const width = accview.getUint16(4)
      const height = accview.getUint16(6)
      const s = width * height
      const encoding = accview.getUint32(8)

      // console.log(x, y, width, height, s, encoding)
      if (encoding < 17) {
        if ((width < 1) || (width > 64) || (height < 1) || (height > 64)) {
          this.parent.logger.error(`Invalid tile size (${width},${height}), disconnecting.`)
          throw new Error('Invalid tile size')
        }

        // Set the spare bitmap to the rigth size if it's not already. This allows us to recycle the spare most if not all the time.
        if (this.parent.sparew !== width || this.parent.spareh !== height) {
          this.parent.sparew = this.parent.sparew2 = width
          this.parent.spareh = this.parent.spareh2 = height

          if (this.parent.rotation === 1 || this.parent.rotation === 3) {
            this.parent.sparew2 = height
            this.parent.spareh2 = width
          }
          const xspacecachename = `${this.parent.sparew2}x${this.parent.spareh2}`
          this.parent.spare = this.parent.sparecache[xspacecachename]
          // console.log(this.parent.spare)
          if (!isTruthy(this.parent.spare)) {
            this.parent.sparecache[xspacecachename] = this.parent.spare = this.parent.canvasCtx.createImageData(this.parent.sparew2, this.parent.spareh2)
            const j = (this.parent.sparew2 * this.parent.spareh2) << 2
            for (let i = 3; i < j; i += 4) { this.parent.spare.data[i] = 0xFF } // Set alpha channel to opaque.
          }
          // console.log(this.parent.sparecache[xspacecachename])
        }
      }

      if (encoding === 0xFFFFFF21) {
        // Desktop Size (0xFFFFFF21, -223)
        this.parent.logger.verbose('Desktop size')
        this.parent.canvasCtx.canvas.width = this.parent.ScreenWidth = this.parent.rwidth = this.parent.width = width
        this.parent.canvasCtx.canvas.height = this.parent.ScreenHeight = this.parent.rheight = this.parent.height = height
        this.wsSocket.send(String.fromCharCode(3, 0, 0, 0, 0, 0) + TypeConverter.ShortToStr(this.parent.width) + TypeConverter.ShortToStr(this.parent.height)) // FramebufferUpdateRequest
        cmdSize = 12
        if (this.parent.onScreenSizeChange != null) {
          this.parent.onScreenSizeChange(this.parent.ScreenWidth, this.parent.ScreenHeight)
        }
        // this.parent.Debug("New desktop width: " + this.parent.width + ", height: " + this.parent.height);
      } else if (encoding === 0) {
        // RAW encoding

        let ptr = 12; const cs = 12 + (s * this.parent.bpp)
        // console.log('RAW encoding ', acc.length, cs)
        if (acc.byteLength < cs) return 0 // Check we have all the data needed and we can only draw 64x64 tiles.
        cmdSize = cs
        // console.log('encoding cmdSize', encoding, this.cmdSize)

        // CRITICAL LOOP, optimize this as much as possible
        // for (let i = 0; i < s; i++) {
        //   ImageHelper.setPixel(this.parent, acc.charCodeAt(ptr++) + ((this.parent.bpp === 2) ? (acc.charCodeAt(ptr++) << 8) : 0), i)
        // }
        if (this.parent.bpp === 2) {
          for (let i = 0; i < s; i++) {
            ImageHelper.setPixel(this.parent, accview.getUint16(ptr, true), i)
            ptr += 2
          }
        } else {
          for (let i = 0; i < s; i++) {
            ImageHelper.setPixel(this.parent, acc[ptr++], i)
          }
        }
        ImageHelper.putImage(this.parent, x, y)
      } else if (encoding === 16) {
        // ZRLE encoding
        if (acc.byteLength < 16) return 0
        const datalen = accview.getUint32(12)
        if (acc.byteLength < (16 + datalen)) return 0
        // console.debug("RECT ZRLE (" + x + "," + y + "," + width + "," + height + ") LEN = " + datalen);
        // console.debug("RECT ZRLE LEN: " + TypeConverter.ReadShortX(acc, 17) + ", DATA: " + TypeConverter.rstr2hex(acc.substring(16)));

        // Process the ZLib header if this is the first block
        const ptr = 16; const delta = 5; const dx = 0
        // console.log(TypeConverter.rstr2hex(acc))
        // 0000000000400040000000100000000A789C626400000000FFFF00400000004000400000001000000008626400000000FFFF
        if ((datalen > 5) && (acc[ptr] === 0) && (accview.getUint16(ptr + 1, true) === (datalen - delta))) {
          // This is an uncompressed ZLib data block
          this.rleDecoder.Decode(acc, ptr + 5, x, y, width, height, s, datalen)
        } else {
          // This is compressed ZLib data, decompress and process it.
          // console.log('acclength=',acc.length,'ptr=',ptr,'datalen=',datalen,'dx=',dx)
          // const zlibstring = acc.substring(ptr, ptr + datalen - dx)
          // // console.log(zlibstring)
          // const arr = this.parent.inflate.inflate(zlibstring)
          // // console.log('unzipped stream', arr)
          // if (arr.length > 0) {
          //   this.rleDecoder.Decode(arr, 0, x, y, width, height, s, arr.length)
          // } else {
          //   this.parent.logger.error('Invalid deflate data.')
          //   throw new Error('invalid deflate data')
          // }
          const str = this.parent.inflate.inflate(this.arrToStr(new Uint8Array(acc.buffer.slice(ptr, ptr + datalen - dx))))
          if (str.length > 0) {
            this.rleDecoder.Decode(this.strToArr(str), 0, x, y, width, height, s, str.length)
          } else {
            console.log('Invalid deflate data')
          }
        }

        cmdSize = 16 + datalen
      } else {
        this.parent.logger.error(`Unknown Encoding: ${encoding} , HEX: ${TypeConverter.rstr2hex(acc)}`)
        throw new Error(`Unknown Encoding: ${encoding}`)
      }
      // console.log('state ', this.parent.state, 'acc ', acc.length)
      if (--this.parent.state === 100) {
        this.parent.logger.debug('Frame completed. Update state and request new frame')
        this.updateRFBState(4)
        const sendRefreshCallback = (): any => CommsHelper.sendRefresh(this.parent, this.wsSocket)
        if (this.parent.frameRateDelay === 0) {
          CommsHelper.sendRefresh(this.parent, this.wsSocket) // Ask for new frame
        } else {
          setTimeout(sendRefreshCallback, this.parent.frameRateDelay) // Hold x miliseconds before asking for a new frame
        }
      }
    }
    // return cmdSize
    if (cmdSize === 0) return cmdSize
    if (cmdSize !== acc.byteLength) {
      acc = new Uint8Array(acc.buffer.slice(cmdSize))
    } else {
      acc = null
    }
  }

  arrToStr (arr: any): string {
    return String.fromCharCode.apply(null, arr)
  }

  strToArr (str: any): any {
    const arr = new Uint8Array(str.length)
    for (let i = 0, j = str.length; i < j; ++i) {
      arr[i] = str.charCodeAt(i)
    }
    return arr
  }
}

export { Encoding }
