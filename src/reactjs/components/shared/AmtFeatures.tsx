/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import * as React from 'react'
import { getAmtFeatures, setAmtFeatures } from '../services/AmtFeaturesServices'
import { Checkbox } from '../shared/Checkbox'
import SnackBar from '../shared/SnackBar'
import { translateText, translateDynamicText } from './Methods'

import './amtfeatures.scss'
import { DomainContext } from './context/BasicContextProvider'

/**
 * interface for input props to AMTFeatures class
 * deviceId -- guid of the AMT device
 * server -- MPS server address(IP:port)
 * feature -- Indicates which control is being accessed(KVM, SOL)
 * handleFeatureStatus -- callback function to update the SnackBar messages
 * getConnectState -- callback function to get the KVM or SOL connection state
 */
export interface AmtFeatureProps {
  deviceId: string | null
  server: string | null
  feature: string
  handleFeatureStatus: (value: string) => void
  getConnectState: () => number
}

export interface AmtFeatureState {
  checked: boolean
  userConsent: string
  useKVM: boolean
  useSOL: boolean
  useIDER: boolean
  redirection: boolean
  showMessage: boolean
  message: string
  type: string
}

/** Generic class to get and set the AMT features like KVM, SOL
 * feature prop for this class determines whether we are on KVM or SOL page
 */
export class AmtFeatures extends React.Component<AmtFeatureProps, AmtFeatureState> {
  constructor (props) {
    super(props)
    this.state = {
      checked: false,
      userConsent: '',
      useKVM: false,
      useSOL: false,
      useIDER: false,
      redirection: false,
      showMessage: false,
      message: '',
      type: ''
    }
  }

  componentDidMount (): void {
    this.fetchAmtFeatures()
  }

  /** Get the AMT Device features  */
  fetchAmtFeatures = (): any => {
    const mpsServer: string = this.props.server != null ? this.props.server : ''
    getAmtFeatures(this.props.deviceId, mpsServer, this.context.data.mpsKey)
      .then(data => {
        if (data.statuscode === 200) {
          this.setState({
            userConsent: data.payload.userConsent,
            useKVM: data.payload.KVM,
            useSOL: data.payload.SOL,
            useIDER: data.payload.IDER,
            redirection: data.payload.redirection
          }, () => this.updateCheckboxStatus())
        } else {
          this.props.handleFeatureStatus('failed')
        }
      })

      .catch(() => console.info('error'))
  }

  /**
     * Bind the checkbox status based on the feature and the feature response from the AMT device
     */
  updateCheckboxStatus = (): void => {
    const { feature } = this.props
    const { useKVM, useSOL, useIDER, redirection } = this.state
    if (redirection && ((feature === translateText('amtFeatures.features.kvm') && useKVM) || (feature === translateText('amtFeatures.features.sol') && useSOL) || (feature === 'IDER' && useIDER))) {
      this.setState({
        checked: true
      })
      this.props.handleFeatureStatus('enabled')
    } else {
      this.props.handleFeatureStatus('notEnabled')
    }
  }

  /** Set AMT features on click of checkbox */
  setAmtFeature = (): any => {
    const { deviceId, feature, server, handleFeatureStatus } = this.props
    const { useKVM, useIDER, useSOL, checked } = this.state
    const featureStatusText = checked ? translateText('amtFeatures.enabled') : translateText('amtFeatures.disabled')
    const mpsServer: string = server != null ? server : ''
    handleFeatureStatus('enabled')
    const translate = {
      feature: feature,
      featureText: featureStatusText
    }
    setAmtFeatures(deviceId, 'none', useKVM, useSOL, useIDER, mpsServer, this.context.data.mpsKey)
      .then(data => {
        if (data.statuscode === 200) {
          this.setState({
            showMessage: true,
            message: translateDynamicText('amtFeatures.messages.featureSuccess', translate),
            type: translateText('amtFeatures.messageTypes.success')
          })
        } else {
          this.setState({
            showMessage: true,
            checked: !checked,
            message: translateDynamicText('amtFeatures.messages.updateFailed', translate),
            type: translateText('amtFeatures.messageTypes.error')
          })
        }
        setTimeout(
          () => {
            this.setState({
              showMessage: false
            })
            // shows feature not enabled message if checkbox value is not true
            if (!this.state.checked) this.props.handleFeatureStatus('notEnabled')
          },
          4000
        )
      })
      .catch(error => console.info('error', error))
  }

  /**
     * Update the checkbox status and the feature(KVM, SOL) on click of checkbox before making the Rest API
     * request to Set the AMT features
     */
  handleCheckboxChange = (event): void => {
    switch (this.props.feature) {
      case 'KVM':
        this.setState({
          checked: event.target.checked,
          useKVM: event.target.checked
        }, () => this.setAmtFeature())
        break
      case 'SOL':
        this.setState({
          checked: event.target.checked,
          useSOL: event.target.checked
        }, () => this.setAmtFeature())
        break
      case 'IDER':
        this.setState({
          checked: event.target.checked,
          useIDER: event.target.checked
        }, () => this.setAmtFeature())
        break
      default:
        this.setState({
          checked: event.target.checked
        })
    }
  }

  render (): React.ReactNode {
    const { feature } = this.props
    const { showMessage, message, type } = this.state

    return (
      <React.Fragment>
        {showMessage && <SnackBar
          message={message}
          type={type}
        />}
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            className='checkbox-class'
            disableCheckbox={this.props.getConnectState() === 2}
          />
          <span className={`label-text ${this.props.getConnectState() === 2 ? 'grey-label' : ''}`}>{feature} {translateText('amtFeatures.enabled')}</span>
        </label>
      </React.Fragment>
    )
  }
}

AmtFeatures.contextType = DomainContext
