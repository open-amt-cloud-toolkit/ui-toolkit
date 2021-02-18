/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { AMTRedirector } from '../../core/AMTRedirector'
import { ILogger } from '../../core/ILogger'
// import { FileReader } from '../../core/FileReader'
// import { TypeConverter } from "../../core/converter";

export enum Protocol {
  SOL = 1,
  KVM = 2,
  IDER = 3
}
/**
   * AMTRedirector provides all communication over WebSockets
   */
export class AMTRedirector1 extends AMTRedirector {
  state: number
  socket: any
  host: string
  port: number
  user: string
  pass: string
  tls: number
  authUri: string
  tlsv1only: number
  connectState: number
  protocol: Protocol
  amtAccumulator: string
  amtSequence: number
  amtKeepAliveTimer: any

  fileReader: FileReader
  fileReaderInUse: boolean
  fileReaderAcc: any[]
  randomNonceChars: string
  RedirectStartSol: string
  RedirectStartKvm: string
  RedirectStartIder: string
  urlvars: any
  inDataCount: number
  server: any
  logger: ILogger
  startvariable: number
  stopvariable: number
  onProcessData: (data: string) => void
  onStart: () => void
  onNewState: (state: number) => void
  onStateChanged: (redirector: any, state: number) => void
  onError: () => void

  constructor (logger: ILogger, protocol: number, fr: FileReader, host: string, port: number, user: string, pass: string, tls: number, tls1only: number, server?: string) {
    super(logger, protocol, fr, host, port, user, pass, tls, tls1only, server)
    this.fileReader = fr
    this.randomNonceChars = 'abcdef0123456789'
    this.host = host
    this.port = port
    this.user = user
    this.pass = pass
    this.tls = tls
    this.tlsv1only = tls1only
    this.protocol = protocol
    this.RedirectStartSol = String.fromCharCode(0x10, 0x00, 0x00, 0x00, 0x53, 0x4F, 0x4C, 0x20)
    this.RedirectStartKvm = String.fromCharCode(0x10, 0x01, 0x00, 0x00, 0x4b, 0x56, 0x4d, 0x52)
    this.RedirectStartIder = String.fromCharCode(0x10, 0x00, 0x00, 0x00, 0x49, 0x44, 0x45, 0x52)
    this.urlvars = {}
    this.server = server
    this.amtAccumulator = ''
    this.authUri = ''
    this.logger = logger
    this.startvariable = 0
    this.stopvariable = 0
  }

  /**
     * gets Ws Location and starts a websocket for listening
     * @param c is base type for WebSocket
     */
  start<T> (c: new(path: string) => T): void { // Using this generic signature allows us to pass the WebSocket type from unit tests or in producion from a web browser
    this.startvariable = 5
  }

  onSocketConnected (): void {
  }

  /**
     * Called when there is new data on the websocket
     * @param e data received over the websocket
     */
  onMessage (e: any): void {
  }

  hex_md5 (str: string): string {
    return ''
  }

  socketSend (data: string): void { // xxSend
  }

  /**
     * Send sends data over the websocket to the server.
     * @param data data to send to server
     */
  send (data: string): void { // send
  }

  sendAmtKeepAlive (): void {
  }

  generateRandomNonce (length: number): any {
    const r = ''
    return r
  }

  onSocketClosed (e: Event): void {
  }

  onStateChange (newstate: number): void {
  }

  stop (): void {
    this.stopvariable = 7
  }
}
