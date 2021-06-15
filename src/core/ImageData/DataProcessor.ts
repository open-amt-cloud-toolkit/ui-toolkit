/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/

import { IStateProcessor, IDataProcessor, ILogger, ICommunicator } from '../Interfaces'
import { StateProcessorFactory } from '../StateProcessorFactory'
import { Desktop } from '../Desktop'
import { isTruthy } from '../Utilities/UtilityMethods'

/**
 * DataProcessor provides the functionality for processing different states of RFB leveraging
 * the different StateProcessors
 */
export class DataProcessor implements IDataProcessor {
  acc: any
  remoteFrameBufferStateManager: IStateProcessor
  stateProcessorFac: StateProcessorFactory
  parent: Desktop
  logger: ILogger
  constructor (logger: ILogger, comm: ICommunicator, parent: Desktop) {
    this.acc = ''
    this.stateProcessorFac = new StateProcessorFactory(comm, parent, this.updateRFBState.bind(this))
    this.parent = parent
    this.logger = logger
  }

  /**
   * processData is called from ICommunicator on new data coming over the wire
   * @param data is the current data block received on the web socket
   */
  processData (data: any): any {
    if (!isTruthy(data)) return
    // Append to accumulator
    if (this.acc == null) {
      this.acc = new Uint8Array(data)
    } else {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      const tmp = new Uint8Array(this.acc.byteLength + data.byteLength)
      tmp.set(this.acc, 0)
      tmp.set(new Uint8Array(data), this.acc.byteLength)
      this.acc = tmp
    }
    // this.acc += data
    let cmdSize = 0
    // this.logger.verbose(`Process Data ACC length:  ${this.acc.byteLength}`)
    while (this.acc.length > 0) {
      const stateProcessor: IStateProcessor = this.stateProcessorFac.getProcessor(this.parent.state)
      const prevState = this.parent.state
      cmdSize = stateProcessor.processState(this.acc)
      this.logger.verbose(`State  ${prevState}  Processed. cmdSize returned ${cmdSize}`)
      if (cmdSize === 0) return
      // console.log('before acc ', this.acc)
      this.acc = this.acc.substring(cmdSize)
      // this.logger.verbose(`remaining acc  ${this.acc.length} command size: ${cmdSize} new parent state: ${this.parent.state}`)
    }
  }

  updateRFBState (state: number): void {
    this.parent.state = state
  }
}
