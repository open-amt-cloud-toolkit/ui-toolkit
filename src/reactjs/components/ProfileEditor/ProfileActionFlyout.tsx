/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react'
import { Flyout } from '../shared/flyout/flyout'
import { camelCaseReshape, isFalsy } from '../shared/Utilities'
import { RenderChildPopup } from '../shared/popup/Popup'
import { CiraConfigForm } from '../shared/CiraConfigForm'
import { HttpClient } from '../services/HttpClient'
import { ciraDataModal } from '../CIRAEditor/CiraGridConfig'
import { networkDataModal } from '../NetworkEditor/NetworkGridConfig'
import { ProfileConfigForm } from './ProfileConfigForm'
import { NetworkProfileForm } from '../shared/NetworkProfileForm'
import omit from 'lodash/omit'
require('./Profile.scss')

export interface profileFlyoutProps {
  onClose: any
  rpsServer: string | null
  mpsServer: string | null
  createProfileNotification: any
  rpsKey: string
  slectedProfiles?: any
  isEdit: boolean
  profilesList?: any
}

export interface profileFlyoutState {
  profileName?: any
  amtPassword?: any
  generateRandomPassword?: any
  randomPasswordLength?: any
  ciraConfigName?: any
  activation?: any
  onBlurError?: any
  randomPasswordLengthBlur?: any
  amtPasswordBlur?: any
  profileNameBlur?: any
  showCiraPopup?: boolean
  ciraConfigs?: any
  showPassword?: boolean
  oldProfileFormDetails?: any
  profileFormDetails?: any
  networkProfileName?: any
  networkProfiles?: any
  showNetworkPopup?: boolean
  showMEBXPassword?: boolean
}

export class ProfileActionFlyout extends React.Component<
profileFlyoutProps,
profileFlyoutState
> {
  constructor (props: profileFlyoutProps) {
    super(props)
    this.state = {
      onBlurError: false,
      showCiraPopup: false,
      ciraConfigs: [],
      showPassword: false,
      showMEBXPassword: false,
      oldProfileFormDetails: props.isEdit
        ? {
          ...props.slectedProfiles[0],
          amtPassword: '',
          mebxPassword: '',
          generateRandomPassword:
            isFalsy(props.slectedProfiles[0].generateRandomPassword) || '',
          randomPasswordLength:
            (isFalsy(props.slectedProfiles[0].randomPasswordLength) &&
              JSON.stringify(
                props.slectedProfiles[0].randomPasswordLength
              )) ||
            '',
          randomMEBXPasswordLength:
            (isFalsy(props.slectedProfiles[0].randomMeBxPasswordLength) &&
              JSON.stringify(
                props.slectedProfiles[0].randomMeBxPasswordLength
              )) ||
            '',
          generateRandomMEBxPassword:
          isFalsy(props.slectedProfiles[0].generateRandomMeBxPassword) || '',
          networkConfigName: props.slectedProfiles[0].networkConfigName
        }
        : {},
      profileFormDetails: props.isEdit
        ? {
          ...props.slectedProfiles[0],
          amtPassword: '',
          mebxPassword: '',
          generateRandomPassword:
          isFalsy(props.slectedProfiles[0].generateRandomPassword) || '',
          randomPasswordLength:
            (isFalsy(props.slectedProfiles[0].randomPasswordLength) &&
              JSON.stringify(
                props.slectedProfiles[0].randomPasswordLength
              )) ||
            '',
          randomMEBXPasswordLength:
            (isFalsy(props.slectedProfiles[0].randomMeBxPasswordLength) &&
              JSON.stringify(
                props.slectedProfiles[0].randomMeBxPasswordLength
              )) ||
            '',
          generateRandomMEBxPassword:
          isFalsy(props.slectedProfiles[0].generateRandomMeBxPassword) || ''
        }
        : {},
      showNetworkPopup: false
    }
  }

  componentDidMount (): void {
    this.getCIRAConfigs().catch(() => console.info('error occured'))
    this.getNetworkProfiles().catch(() => console.info('error occured'))
  }

  componentDidUpdate (prevProps): void {
    if (prevProps !== this.props && this.props.isEdit) {
      if (this.props.slectedProfiles.length === 1) {
        const {
          ciraConfigName,
          networkConfigName,
          generateRandomPassword,
          randomPasswordLength,
          generateRandomMeBxPassword,
          randomMeBxPasswordLength
        } = this.props.slectedProfiles[0]
        this.setState((prevState) => ({
          oldProfileFormDetails: {
            ...this.props.slectedProfiles[0],
            ciraConfigName,
            networkConfigName: isFalsy(networkConfigName) ? networkConfigName : '',
            amtPassword: '',
            mebxPassword: '',
            generateRandomPassword: isFalsy(generateRandomPassword) || '',
            randomPasswordLength:
              (isFalsy(randomPasswordLength) && JSON.stringify(randomPasswordLength)) ||
              '',
            generateRandomMEBxPassword: isFalsy(generateRandomMeBxPassword) || '',
            randomMEBXPasswordLength:
              (isFalsy(randomMeBxPasswordLength) &&
                JSON.stringify(randomMeBxPasswordLength)) ||
              ''
          },
          profileFormDetails: {
            ...this.props.slectedProfiles[0],
            ciraConfigName,
            networkConfigName: isFalsy(networkConfigName) ? networkConfigName : '',
            amtPassword: '',
            mebxPassword: '',
            generateRandomPassword: isFalsy(generateRandomPassword) || '',
            randomPasswordLength:
              (isFalsy(randomPasswordLength) && JSON.stringify(randomPasswordLength)) ||
              '',
            generateRandomMEBxPassword: isFalsy(generateRandomMeBxPassword) || '',
            randomMEBXPasswordLength:
              (isFalsy(randomMeBxPasswordLength) &&
                JSON.stringify(randomMeBxPasswordLength)) ||
              ''
          }
        }))
      } else {
        this.props.onClose()
      }
    }
  }

  // fetches all the CIRA config scripts from the server
  getCIRAConfigs = async (): Promise<any> => {
    const server: string = this.props.rpsServer != null ? this.props.rpsServer : ''
    return await HttpClient.get(
      `${server}/api/v1/admin/ciraconfigs`,
      this.props.rpsKey
    ).then((data) => {
      this.setState({
        ciraConfigs: data.map((config) =>
          camelCaseReshape(config, ciraDataModal)
        )
      })
    })
  }

  // fetches all the Network profiles from the serevr
  getNetworkProfiles = async (): Promise<any> => {
    const server: string = this.props.rpsServer != null ? this.props.rpsServer : ''
    return await HttpClient.get(
      `${server}/api/v1/admin/networkconfigs`,
      this.props.rpsKey
    ).then((data) =>
      this.setState(
        {
          networkProfiles: data.map((network) =>
            camelCaseReshape(network, networkDataModal)
          )
        },
        () => {
          if (this.props.isEdit) {
            const {
              profileFormDetails,
              oldProfileFormDetails
            } = this.state
            this.setState({
              profileFormDetails: {
                ...profileFormDetails
              },
              oldProfileFormDetails: {
                ...oldProfileFormDetails
              }
            })
          }
        }
      )
    )
  }

  handleChange = (e): void => {
    e.persist()
    this.setState((prevState) => ({
      profileFormDetails: {
        ...prevState.profileFormDetails,
        [e.target.name]: e.target.value
      }
    }))
  }

  handleClick = (e): void => {
    e.persist()
    this.setState((prevState) => ({
      profileFormDetails: {
        ...prevState.profileFormDetails,
        [e.target.name]: e.target.checked
      }
    }))
  }

  handleOnBlur = (e): void => this.setState({ [`${String(e.target.name)}Blur`]: true })

  toggleCiraPopup = (e): void => {
    e.preventDefault()
    this.setState({ showCiraPopup: !isFalsy(this.state.showCiraPopup) })
  }

  /* removeing  ciraConfigName and networkConfigName properties from the object if there is no value */
  removeUnAssignedProperties = (obj): any => {
    const newObj = {}
    Object.keys(obj).forEach((key) => {
      if (key === 'ciraConfigName' || key === 'networkConfigName') {
        if (isFalsy(obj[key])) {
          newObj[key] = obj[key]
        }
      } else {
        newObj[key] = obj[key]
      }
    })
    return newObj
  }

  // Omits MEBx related fields from the request payload for client control mode of activation
  removeMEBxFieldsforCCM = (obj): any => {
    return obj.activation === 'ccmactivate' ? omit(obj, 'generateRandomMEBxPassword', 'randomMEBXPasswordLength', 'mebxPasswordLength', 'mebxPassword') : obj
  }

  handleSubmit = async (e): Promise<any> => {
    e.preventDefault()
    let response
    const obj = {
      ...this.state.profileFormDetails,
      passwordLength:
        isFalsy(this.state.profileFormDetails.amtPassword) &&
          !isFalsy(this.state.profileFormDetails.generateRandomPassword)
          ? null
          : parseInt(this.state.profileFormDetails.randomPasswordLength),
      mebxPasswordLength:
      isFalsy(this.state.profileFormDetails.mebxPassword) &&
          !isFalsy(this.state.profileFormDetails.generateRandomMEBxPassword)
        ? null
        : parseInt(this.state.profileFormDetails.randomMEBXPasswordLength),
      ciraConfigName: this.state.profileFormDetails.networkConfigName !== 'dhcp_disabled'
        ? this.state.profileFormDetails.ciraConfigName
        : ''
    }
    const payload = this.removeUnAssignedProperties(this.removeMEBxFieldsforCCM(obj))
    const server: string = this.props.rpsServer != null ? this.props.rpsServer : ''
    if (this.props.isEdit) {
      // Rest api to update the profile
      response = await HttpClient.patch(
        `${server}/api/v1/admin/profiles/edit`,
        JSON.stringify({ payload: payload }),
        this.props.rpsKey
      )
    } else {
      response = await HttpClient.post(
        `${server}/api/v1/admin/profiles/create`,
        JSON.stringify({ payload: payload }),
        this.props.rpsKey,
        false
      )
    }
    if (
      response ===
      `Profile ${String(this.state.profileFormDetails.profileName)} successfully inserted` ||
      response ===
      `Profile ${String(this.state.profileFormDetails.profileName)} successfully updated`
    ) {
      this.props.createProfileNotification(true, response)
    } else {
      this.props.createProfileNotification(false, response)
    }
  }

  // callback function for handling the CIRA config script creation
  notificationCallback = (status, response, payload): void => {
    if (isFalsy(status)) {
      this.setState(
        {
          showCiraPopup: false,
          profileFormDetails: {
            ...this.state.profileFormDetails,
            ciraConfigName: payload.configName
          }
        },
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        async () => await this.getCIRAConfigs()
      )
    }
  }

  createNotification = (status, response, payload): void => {
    if (isFalsy(status)) {
      this.setState(
        {
          showNetworkPopup: !isFalsy(this.state.showNetworkPopup),
          profileFormDetails: {
            ...this.state.profileFormDetails,
            networkConfigName: payload.profileName
          }
        }
      )
    }
  }

  handleShowPassword = (): void =>
    this.setState({ showPassword: !isFalsy(this.state.showPassword) })

  handleShowMEBXPassword = (): void =>
    this.setState({ showMEBXPassword: !isFalsy(this.state.showMEBXPassword) })

  isActivationSelected = (activation): any => (isFalsy(activation))

  toggleNetworkPopup = (): void =>
    this.setState({
      showNetworkPopup: !isFalsy(this.state.showNetworkPopup)
    })

  render (): React.ReactNode {
    const { showCiraPopup, showNetworkPopup } = this.state
    return (
      <React.Fragment>
        {isFalsy(showCiraPopup) && (
          <RenderChildPopup className="">
            <CiraConfigForm
              close={this.toggleCiraPopup}
              rpsServer={this.props.rpsServer}
              mpsServer={this.props.mpsServer}
              notificationCallback={this.notificationCallback}
              showProfileError={true}
            />
          </RenderChildPopup>
        )}
        {isFalsy(showNetworkPopup) && (
          <RenderChildPopup className="">
            <NetworkProfileForm
              close={this.toggleNetworkPopup}
              rpsServer={this.props.rpsServer}
              mpsServer={this.props.mpsServer}
              createNotification={this.createNotification}
              showProfileError={true}
            />
          </RenderChildPopup>
        )}
        <Flyout className="profile-actions">
          <ProfileConfigForm
            stateVariables={this.state}
            propValiables={this.props}
            isActivationSelected={this.isActivationSelected}
            handleShowPassword={this.handleShowPassword}
            notificationCallback={this.notificationCallback}
            handleSubmit={this.handleSubmit}
            toggleCiraPopup={this.toggleCiraPopup}
            handleOnBlur={this.handleOnBlur}
            handleClick={this.handleClick}
            handleChange={this.handleChange}
            toggleNetworkPopup={this.toggleNetworkPopup}
            handleShowMEBXPassword={this.handleShowMEBXPassword}
            rpsServer={this.props.rpsServer}
            mpsServer={this.props.mpsServer}
          />
        </Flyout>
      </React.Fragment>
    )
  }
}
