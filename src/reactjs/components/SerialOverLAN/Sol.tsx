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
import { PowerOptions } from '../shared/PowerOptions'
import { Terminal } from 'xterm'
import Term from './Terminal'
import { availablePowerActions, getActionById } from '../shared/PowerActions'
import 'xterm/css/xterm.css'
import './sol.scss'
import { powerActions } from '../services/PowerActionServices'
import SnackBar from '../shared/SnackBar'
import { AmtFeatures } from '../shared/AmtFeatures'
import { PowerState } from '../shared/PowerState'
import { translateText } from '../shared/Methods'
import { DomainContext } from '../shared/context/BasicContextProvider'
import { isFalsy } from '../shared/Utilities'

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

const StyledLabel = Style.label`
font-size : 15px;
margin-left: 30px;
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

  /** send power actions to AMT device */
  handlePowerOptions = async (e): Promise<any> => {
    if (e.detail === 0) {
      const { mpsKey } = this.context.data
      const powerAction: string = getActionById(parseInt(e.target.value))
      if (this.state.SOLstate === 3 && (e.target.value === '8' || e.target.value === '5')) {
        this.setState({
          showSuccess: true,
          type: 'warning',
          message: `${powerAction} not allowed while termina1 is connected`,
          isSelected: !this.state.isSelected
        })
      } else {
        powerActions(this.props.deviceId, e.target.value, this.props.mpsServer, mpsKey, true).then(response => {
          const resBody = response.Body
          if (resBody !== undefined && resBody.ReturnValueStr === 'SUCCESS') {
            this.setState({
              showSuccess: true,
              type: 'success',
              message: `${powerAction} success`,
              isSelected: !this.state.isSelected
            })
          } else {
            this.setState({
              showSuccess: true,
              type: 'error',
              message: (resBody !== undefined && resBody.ReturnValue !== 0) ? `${powerAction} ${String(resBody.ReturnValueStr)}` : response.errorDescription || 'Sorry! there was some technical difficulties',
              isSelected: !this.state.isSelected
            })
          }
          setTimeout(() => this.setState({
            showSuccess: false,
            isSelected: !this.state.isSelected
          }), 4000)
        }).catch(error => {
          console.log(error)
          this.setState({
            showSuccess: true,
            type: 'error',
            message: (isFalsy(error.ajaxError.response) && String(error.ajaxError.response.error)) || 'Power Action Failed',
            isSelected: !this.state.isSelected
          })
          setTimeout(() => this.setState({
            showSuccess: false,
            isSelected: !this.state.isSelected
          }), 4000)
        })
      }
    }
  }

  /** callback functions from child components to update the state values */
  handleFeatureStatus = (value): void => {
    this.setState({
      solNotEnabled: value
    })
  }

  handlePowerStatus = (value): void => {
    this.setState({
      deviceOnSleep: value
    })
  }

  updatePowerStatus = (): void => {
    this.setState({
      isPowerStateLoaded: true
    })
  }

  getSOLState = (): any => this.state.SOLstate === 3 ? 2 : 0

  render (): React.ReactNode {
    const { SOLstate, showSuccess, message, type, deviceOnSleep, solNotEnabled, isPowerStateLoaded } = this.state
    return (
      <React.Fragment>
        {solNotEnabled === 'failed' && deviceOnSleep === 'poweron' ? <SnackBar message={translateText('amtFeatures.messages.failedSolFetch')} type='error' /> : ''}
        {solNotEnabled === 'failed' && deviceOnSleep === 'sleep' ? <SnackBar message={translateText('amtFeatures.messages.failedSolFetchAndNotPoweredUp')} type='warning' /> : ''}
        {solNotEnabled === 'failed' && deviceOnSleep === 'failed' ? <SnackBar message={translateText('amtFeatures.messages.failedSolFetchAndFailedPowerFetch')} type='error' /> : ''}
        {solNotEnabled === 'notEnabled' && deviceOnSleep === 'sleep' ? <SnackBar message={translateText('amtFeatures.messages.solNotEnabledAndNotPoweredUp')} type={'warning'} /> : ''}
        {solNotEnabled === 'notEnabled' && deviceOnSleep === 'failed' ? <SnackBar message={translateText('amtFeatures.messages.solNotEnabledAndFailedPowerFetch')} type={'warning'} /> : ''}
        {solNotEnabled === 'enabled' && deviceOnSleep === 'sleep' ? <SnackBar message={translateText('amtFeatures.messages.notPoweredUp')} type={'warning'} /> : ''}
        {solNotEnabled === 'enabled' && deviceOnSleep === 'failed' ? <SnackBar message={translateText('amtFeatures.messages.failedPowerFetch')} type={'error'} /> : ''}
        {solNotEnabled === 'notEnabled' && deviceOnSleep === 'poweron' ? <SnackBar message={translateText('amtFeatures.messages.solNotEnabled')} type={'warning'} /> : ''}
        {showSuccess && <SnackBar message={message} type={type} />}
        <HeaderStrip>
          <StyledDiv>
            <StyledLabel>
              {isPowerStateLoaded && <AmtFeatures
                deviceId={this.props.deviceId}
                server={this.props.mpsServer}
                feature={'SOL'}
                handleFeatureStatus={this.handleFeatureStatus}
                getConnectState={this.getSOLState}
              />}
            </StyledLabel>
          </StyledDiv>
          <StyledDiv>
            <button onClick={this.handleSOLConnect}>{SOLstate === 3 ? 'Disconnect' : 'Connect'}</button>
          </StyledDiv>
          <StyledDiv>
            <StyledLabel>Power Status :</StyledLabel>
            <PowerState
              deviceId={this.props.deviceId}
              server={this.props.mpsServer}
              handlePowerStatus={this.handlePowerStatus}
              updateParent={this.updatePowerStatus}
            />
          </StyledDiv>
          <StyledDiv>
            <StyledLabel>Power Actions:{' '}</StyledLabel>
            <PowerOptions availableOptions={availablePowerActions} onChange={this.handlePowerOptions} isSelected={this.state.isSelected} />
          </StyledDiv>
        </HeaderStrip>
        {SOLstate === 3 && this.term && <Term handleKeyPress={this.handleKeyPress} handleKeyDownPress={this.handleKeyDownPress} xterm={this.term} />}
      </React.Fragment>
    )
  }
}

Sol.contextType = DomainContext
