/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import * as React from 'react'
import { ConnectButton } from './Connectbutton'
import { DesktopSettings } from './Desktopsettings'
import { powerActions } from '../services/PowerActionServices'
import { availablePowerActions, getActionById } from '../shared/PowerActions'
import { PowerOptions } from '../shared/PowerOptions'
import { AmtFeatures } from '../shared/AmtFeatures'
import SnackBar from '../shared/SnackBar'
import Style from 'styled-components'
import { PowerState } from '../shared/PowerState'
import { translateText } from '../shared/Methods'
import { DomainContext } from '../shared/context/BasicContextProvider'
import { isFalsy } from '../shared/Utilities'
require('./Header.scss')

const StyledLabel = Style.label`
font-size : 15px;
margin-left: 30px;
`

const StyledDiv = Style.div`
display : inline-block;
padding : 0px 5px;
`
export interface IHeaderProps {
  kvmstate: number
  deviceId: string | null
  server: string | null
  handleConnectClick: (e: any) => void
  changeDesktopSettings: (settings: any) => void
  getConnectState: () => number
}

export interface PowerStates {
  powerState: number
  showSuccess: boolean
  message: string
  isSelected: boolean
  type: string
  kvmNotEnabled: string
  deviceOnSleep: string
  isPowerStateLoaded: boolean
}

export class Header extends React.Component<IHeaderProps, PowerStates> {
  constructor (props: IHeaderProps) {
    super(props)
    this.state = {
      powerState: 0,
      showSuccess: false,
      message: '',
      isSelected: true,
      type: '',
      kvmNotEnabled: '',
      deviceOnSleep: '',
      isPowerStateLoaded: false
    }
  }

  /** send power actions to AMT device */
  handlePowerOptions = async (e): Promise<any> => {
    const server: string = this.props.server != null ? this.props.server : ''
    if (e.detail === 0) {
      const { mpsKey } = this.context.data
      const powerAction: string = getActionById(parseInt(e.target.value))
      if (this.props.kvmstate === 2 && (e.target.value === '8' || e.target.value === '5')) {
        this.setState({
          showSuccess: true,
          type: 'warning',
          message: `${powerAction} not allowed while kvm is connected`,
          isSelected: !this.state.isSelected
        })
      } else {
        powerActions(
          this.props.deviceId,
          e.target.value,
          server.substr(0, server.indexOf('/')),
          mpsKey
        ).then(response => {
          if (
            response.Body !== undefined &&
            response.Body.ReturnValueStr === 'SUCCESS'
          ) {
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
              message: (response.Body !== undefined && response.Body.ReturnValue !== 0) ? `${powerAction} ${String(response.Body.ReturnValueStr)}` : response.errorDescription || 'Sorry! there was some technical difficulties',
              isSelected: !this.state.isSelected
            })
          }
        }).catch(error => this.setState({
          showSuccess: true,
          type: 'error',
          message: (isFalsy(error.ajaxError.response) && String(error.ajaxError.response.error)) || 'Power Action Failed',
          isSelected: !this.state.isSelected
        }))
      }
    }
    setTimeout(
      () =>
        this.setState({
          showSuccess: false,
          isSelected: !this.state.isSelected
        }),
      4000
    )
  }

  /** callback functions from child components to update the state values */
  handleFeatureStatus = (value): void => {
    this.setState({
      kvmNotEnabled: value
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

  render (): JSX.Element {
    const {
      showSuccess,
      message,
      type,
      kvmNotEnabled,
      deviceOnSleep
    } = this.state
    const { deviceId, server } = this.props
    const mpsServer: string = server != null ? server : ''
    return (
      <React.Fragment>
        {kvmNotEnabled === 'failed' && deviceOnSleep === 'poweron' ? <SnackBar message={translateText('amtFeatures.messages.failedKvmFetch')} type='error' /> : ''}
        {kvmNotEnabled === 'failed' && deviceOnSleep === 'sleep' ? <SnackBar message={translateText('amtFeatures.messages.failedKvmFetchAndNotPoweredUp')} type='warning' /> : ''}
        {kvmNotEnabled === 'failed' && deviceOnSleep === 'failed' ? <SnackBar message={translateText('amtFeatures.messages.failedKvmFetchAndFailedPowerFetch')} type='error' /> : ''}
        {kvmNotEnabled === 'notEnabled' && deviceOnSleep === 'sleep' ? <SnackBar message={translateText('amtFeatures.messages.kvmNotEnabledAndNotPoweredUp')} type={'warning'} /> : ''}
        {kvmNotEnabled === 'notEnabled' && deviceOnSleep === 'failed' ? <SnackBar message={translateText('amtFeatures.messages.kvmNotEnabledAndFailedPowerFetch')} type={'warning'} /> : ''}
        {kvmNotEnabled === 'enabled' && deviceOnSleep === 'sleep' ? <SnackBar message={translateText('amtFeatures.messages.notPoweredUp')} type={'warning'} /> : ''}
        {kvmNotEnabled === 'enabled' && deviceOnSleep === 'failed' ? <SnackBar message={translateText('amtFeatures.messages.failedPowerFetch')} type={'error'} /> : ''}
        {kvmNotEnabled === 'notEnabled' && deviceOnSleep === 'poweron' ? <SnackBar message={translateText('amtFeatures.messages.kvmNotEnabled')} type={'warning'} /> : ''}

        {showSuccess && <SnackBar message={message} type={type} />}
        <div className="header">
          <StyledDiv>
            <StyledLabel>
              {this.state.isPowerStateLoaded && (
                <AmtFeatures
                  deviceId={deviceId}
                  server={mpsServer.substr(
                    0,
                    mpsServer.indexOf('/')
                  )}
                  feature={'KVM'}
                  handleFeatureStatus={this.handleFeatureStatus}
                  getConnectState={this.props.getConnectState}
                />
              )}
            </StyledLabel>
          </StyledDiv>
          <ConnectButton
            handleConnectClick={this.props.handleConnectClick}
            kvmstate={this.props.kvmstate}
          />
          <DesktopSettings
            changeDesktopSettings={this.props.changeDesktopSettings}
            getConnectState={this.props.getConnectState}
          />
          <StyledDiv>
            <StyledLabel>Power Actions: </StyledLabel>
            <PowerOptions
              availableOptions={availablePowerActions}
              onChange={this.handlePowerOptions}
              isSelected={this.state.isSelected}
            />
          </StyledDiv>
          <StyledLabel>Power Status :</StyledLabel>{' '}
          <PowerState
            deviceId={this.props.deviceId}
            server={mpsServer.substr(0, mpsServer.indexOf('/'))}
            handlePowerStatus={this.handlePowerStatus}
            updateParent={this.updatePowerStatus}
          />
        </div>
      </React.Fragment>
    )
  }
}

Header.contextType = DomainContext
