/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/

import { IDataProcessor, IKvmDataCommunicator, ILogger, LogLevel, DataProcessor, Desktop, AMTKvmDataRedirector, AMTDesktop, Protocol, ConsoleLogger } from '../../../core'
import { MouseHelper, KeyBoardHelper } from '../../../core/Utilities'
import { Header } from './Header'
import { PureCanvas } from './PureCanvas'
import { isFalsy } from '../shared/Utilities'
import React from 'react'

import './UI.scss'

export interface KVMProps {
  deviceId: string | null
  mpsServer: string | null
  mouseDebounceTime: number
  canvasHeight: string
  canvasWidth: string
  autoConnect?: boolean
  authToken: string
}

export class KVM extends React.Component<KVMProps, { kvmstate: number, encodingOption: number }> {
  module: Desktop | any
  dataProcessor: IDataProcessor | any
  redirector: IKvmDataCommunicator | any
  mouseHelper: MouseHelper | any
  logger: ILogger
  keyboard: KeyBoardHelper | any
  desktopSettingsChange = false
  ctx: CanvasRenderingContext2D
  fr: FileReader
  constructor (props: KVMProps) {
    super(props)
    this.state = { kvmstate: 0, encodingOption: 1 }
    this.logger = new ConsoleLogger(LogLevel.ERROR)
    this.saveContext = this.saveContext.bind(this)
    this.startKVM = this.startKVM.bind(this)
    this.stopKVM = this.stopKVM.bind(this)
    this.handleConnectClick = this.handleConnectClick.bind(this)
    this.getRenderStatus = this.getRenderStatus.bind(this)
    this.OnConnectionStateChange = this.OnConnectionStateChange.bind(this)
    this.changeDesktopSettings = this.changeDesktopSettings.bind(this)
  }

  saveContext (ctx: CanvasRenderingContext2D): void {
    this.logger.debug('save context called')
    this.ctx = ctx
    this.init()
  }

  init (): void {
    const deviceUuid: string = this.props.deviceId != null ? this.props.deviceId : ''
    const server: string = this.props.mpsServer != null ? this.props.mpsServer.replace('http', 'ws') : ''
    this.module = new AMTDesktop(this.logger, this.ctx)
    this.redirector = new AMTKvmDataRedirector(this.logger, Protocol.KVM, new FileReader(), deviceUuid, 16994, '', '', 0, 0, this.props.authToken, server)
    this.dataProcessor = new DataProcessor(this.logger, this.redirector, this.module)
    this.mouseHelper = new MouseHelper(this.module, this.redirector, this.props.mouseDebounceTime < 200 ? 200 : this.props.mouseDebounceTime) // anything less than 200 ms causes timeout
    this.keyboard = new KeyBoardHelper(this.module, this.redirector)

    this.redirector.onProcessData = this.module.processData.bind(this.module)
    this.redirector.onStart = this.module.start.bind(this.module)
    this.redirector.onNewState = this.module.onStateChange.bind(this.module)
    this.redirector.onSendKvmData = this.module.onSendKvmData.bind(this.module)
    this.redirector.onStateChanged = this.OnConnectionStateChange.bind(this)
    this.redirector.onError = this.onRedirectorError.bind(this)
    this.module.onSend = this.redirector.send.bind(this.redirector)
    this.module.onProcessData = this.dataProcessor.processData.bind(this.dataProcessor)
    this.module.bpp = this.state.encodingOption
  }

  cleanUp (): void {
    this.module = null
    this.redirector = null
    this.dataProcessor = null
    this.mouseHelper = null
    this.keyboard = null
    this.ctx.clearRect(0, 0, this.ctx.canvas.height, this.ctx.canvas.width)
  }

  componentWillUnmount (): void {
    this.stopKVM()
  }

  onRedirectorError (): void {
    this.reset()
  }

  reset (): void {
    this.cleanUp()
    this.init()
  }

  OnConnectionStateChange (redirector: any, state: number): any {
    this.setState({ kvmstate: state })
    if (this.desktopSettingsChange && state === 0) {
      this.desktopSettingsChange = false
      setTimeout(() => this.startKVM(), 2000) // Introduced delay to start KVM
    }
  }

  changeDesktopSettings (settings: any): void {
    if (this.state.kvmstate === 2) {
      this.desktopSettingsChange = true
      this.module.bpp = settings.encoding
      this.stopKVM()
    } else {
      this.setState({
        encodingOption: parseInt(settings.encoding)
      })
      this.module.bpp = parseInt(settings.encoding)
    }
  }

  startKVM (): void {
    if (typeof this.redirector !== 'undefined') {
      // console.log("startKVM")
      this.redirector.start(WebSocket)
    }
    if (typeof this.keyboard !== 'undefined') this.keyboard.GrabKeyInput()
  }

  stopKVM (): void {
    if (typeof this.redirector !== 'undefined') this.redirector.stop()
    if (typeof this.keyboard !== 'undefined') this.keyboard.UnGrabKeyInput()
    this.reset()
  }

  getRenderStatus (): any {
    return this.module.state // used to check if canvas is in the middle of rendering a complete frame.
  }

  handleConnectClick (e): void {
    e.persist()
    if (this.state.kvmstate === 0) {
      this.startKVM()
    } else if (this.state.kvmstate === 1) {
      // Take Action
    } else if (this.state.kvmstate === 2) {
      this.stopKVM()
    } else {
      // Take Action
    }
  }

  componentDidUpdate (prevProps): void {
    if (prevProps.deviceId !== this.props.deviceId) {
      this.stopKVM()
    }
  }

  render (): React.ReactNode {
    return (
       <div className="canvas-container">
         {!isFalsy(this.props.autoConnect)
           ? <Header key="kvm_header" handleConnectClick={this.handleConnectClick} getConnectState={() => this.state.kvmstate} kvmstate={this.state.kvmstate} changeDesktopSettings={this.changeDesktopSettings} deviceId={this.props.deviceId} server={this.props.mpsServer}
         />
           : ''}
         <PureCanvas key="kvm_comp" contextRef={ctx => this.saveContext(ctx)} canvasHeight={this.props.canvasHeight} canvasWidth={this.props.canvasWidth}
           mouseMove={event => { if (typeof this.mouseHelper !== 'undefined') this.mouseHelper.mousemove(event) }}
           mouseDown={event => { if (typeof this.mouseHelper !== 'undefined') this.mouseHelper.mousedown(event) }}
           mouseUp={event => { if (typeof this.mouseHelper !== 'undefined') this.mouseHelper.mouseup(event) }}
         />
       </div>
    )
  }
}
