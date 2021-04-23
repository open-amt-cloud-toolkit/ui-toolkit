/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import { AmtTerminal } from '../../../core/AMTTerminal'
import Style from 'styled-components'
import { AMTRedirector, Protocol } from '../../../core/AMTRedirector'
import { ConsoleLogger } from '../../../core/ConsoleLogger'
import { LogLevel } from '../../../core/ILogger'
import { TerminalDataProcessor } from '../../../core/TerminalDataProcessor'
import { Terminal } from 'xterm'
import Term from './Terminal'
import 'xterm/css/xterm.css'
import './sol.scss'

const StyledDiv = Style.div`
display : inline-block;
padding : 0px 5px;
`

const HeaderStrip = Style.div`
background-color: darkgray;
padding: 5px;
font-size: 13px;
text-align: center;
`

export interface SOLProps {
  deviceId: string | null
  mpsServer: string | null
  autoConnect?: boolean
}

export interface SOLStates {
  isConnected: boolean
  SOLstate: number
  powerState: number
  showSuccess: boolean
  message: string
  isSelected: boolean
  type: string
  solNotEnabled: string
  deviceOnSleep: string
  isPowerStateLoaded: boolean
}

/** container class for SOL */
export class Sol extends React.Component<SOLProps, SOLStates> {
  redirector: any
  terminal: any
  logger: any
  dataProcessor: any
  callback: any
  term: any
  fr: FileReader
  constructor (props: SOLProps) {
    super(props)
    this.logger = new ConsoleLogger(LogLevel.ERROR)
    this.state = {
      isConnected: false,
      SOLstate: 0,
      powerState: 0,
      showSuccess: false,
      message: '',
      isSelected: true,
      type: '',
      solNotEnabled: '',
      deviceOnSleep: '',
      isPowerStateLoaded: false
    }
  }

  init = (): void => {
    const server: string = this.props.mpsServer != null ? this.props.mpsServer.replace('http', 'ws') : ''
    const deviceUuid: string = this.props.deviceId != null ? this.props.deviceId : ''
    this.terminal = new AmtTerminal()
    this.redirector = new AMTRedirector(
      this.logger,
      Protocol.SOL,
      new FileReader(),
      deviceUuid,
      16994,
      '',
      '',
      0,
      0,
      `${server}/relay`
    )
    this.dataProcessor = new TerminalDataProcessor(this.terminal)
    this.terminal.onSend = this.redirector.send.bind(this.redirector)
    this.redirector.onNewState = this.terminal.StateChange.bind(this.terminal)
    this.redirector.onStateChanged = this.onTerminalStateChange.bind(this)
    this.redirector.onProcessData = this.dataProcessor.processData.bind(this.dataProcessor)
    this.dataProcessor.processDataToXterm = this.handleWriteToXterm.bind(this)
    this.dataProcessor.clearTerminal = this.handleClearTerminal.bind(this)
    this.term = new Terminal({
      cursorStyle: 'block',
      fontWeight: 'bold',
      rows: 30,
      cols: 100
    })
  }

  cleanUp = (): void => {
    this.terminal = null
    this.redirector = null
    this.dataProcessor = null
    this.term = null
  }

  componentDidMount (): void {
    this.init()
  }

  /** write the processed data from webscoket in to xterm */

  handleWriteToXterm = (str): any => this.term.write(str)

  handleClearTerminal = (): any => this.term.reset()

  /** capture the data on xterm key press */
  handleKeyPress = (domEvent): any => this.terminal.TermSendKeys(domEvent)

  handleKeyDownPress = (domEvent): any => this.terminal.handleKeyDownEvents(domEvent)

  startSOL = (): void => {
    if (typeof this.redirector !== 'undefined') {
      this.redirector.start(WebSocket)
    }
  }

  stopSOL = (): void => {
    if (typeof this.redirector !== 'undefined') {
      this.redirector.stop()
    }
    this.handleClearTerminal()
    this.cleanUp()
    this.init()
  }

  handleSOLConnect = (e): void => {
    e.persist()
    if (this.state.SOLstate === 0) {
      this.startSOL()
    } else {
      this.stopSOL()
    }
  }

  onTerminalStateChange = (redirector, state: number): void => this.setState({ SOLstate: state })

  /** callback functions from child components to update the state values */
  handleFeatureStatus = (value): void => {
    this.setState({
      solNotEnabled: value
    })
  }

  getSOLState = (): any => this.state.SOLstate === 3 ? 2 : 0

  render (): React.ReactNode {
    const { SOLstate } = this.state
    return (
      <React.Fragment>
        <HeaderStrip>
          <StyledDiv>
            <button onClick={this.handleSOLConnect}>{SOLstate === 3 ? 'Disconnect' : 'Connect'}</button>
          </StyledDiv>
        </HeaderStrip>
        {SOLstate === 3 && this.term && <Term handleKeyPress={this.handleKeyPress} handleKeyDownPress={this.handleKeyDownPress} xterm={this.term} />}
      </React.Fragment>
    )
  }
}

