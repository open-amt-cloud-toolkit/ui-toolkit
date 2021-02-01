import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DomainContext } from './context/BasicContextProvider'
import { translateText } from './Methods'
import { isFalsy, nameValidation } from './Utilities'
import { HttpClient } from '../services/HttpClient'

import '../NetworkEditor/NetworkEditor.scss'

export interface NetworkProfileFormProps {
  close?: any
  rpsServer?: string | null
  createNotification?: any
  selectedNetwork?: any
  isEdit?: boolean
  showProfileError?: boolean
}

export interface NetworkProfileFormStates {
  networkDetails?: any
  networkName_blur?: boolean
  networkConfigError?: string
}

export class NetworkProfileForm extends React.Component<
NetworkProfileFormProps,
NetworkProfileFormStates
> {
  constructor (props) {
    super(props)
    this.state = {
      networkName_blur: false,
      networkDetails: {
        networkName: isFalsy(this.props.isEdit)
          ? this.props.selectedNetwork[0].profileName
          : '',
        dhcpEnabled: isFalsy(this.props.isEdit)
          ? this.props.selectedNetwork[0].dhcpEnabled
          : true
      }
    }
  }

  componentDidUpdate (prevProps): void {
    if (prevProps !== this.props && isFalsy(this.props.isEdit)) {
      if (this.props.selectedNetwork.length === 1) {
        this.setState((prevState) => ({
          ...prevState,
          networkDetails: {
            networkName: this.props.selectedNetwork[0].profileName,
            dhcpEnabled: this.props.selectedNetwork[0].dhcpEnabled
          }
        }))
      } else {
        this.props.close()
      }
    }
  }

  handleSubmit = async (e): Promise<any> => {
    e.preventDefault()
    let response
    const { rpsKey } = this.context.data
    const payload = {
      profileName: this.state.networkDetails.networkName,
      dhcpEnabled: this.state.networkDetails.dhcpEnabled
    }
    if (isFalsy(this.props.isEdit)) {
      response = await HttpClient.patch(
        `${String(this.props.rpsServer)}/api/v1/admin/networkconfigs/edit`,
        JSON.stringify({ payload: payload }),
        rpsKey
      )
    } else {
      response = await HttpClient.post(
        `${String(this.props.rpsServer)}/api/v1/admin/networkconfigs/create`,
        JSON.stringify({ payload: payload }),
        rpsKey,
        false
      )
    }

    if (
      response ===
      `NETWORK Config ${String(this.state.networkDetails.networkName)} successfully inserted` ||
      response ===
      `UPDATE Successful for NETWORK Config: ${String(this.state.networkDetails.networkName)}`
    ) {
      this.props.createNotification(true, response, payload)
    } else if (isFalsy(this.props.showProfileError)) {
      this.setState({
        networkConfigError: response
      })
    } else {
      this.props.createNotification(false, response)
    }
  }

  handleChange = (e): void => {
    e.persist()
    this.setState((prevState) => ({
      networkDetails: {
        ...prevState.networkDetails,
        [e.target.name]: e.target.value
      }
    }))
  }

  handleClick = (e): void => {
    e.persist()
    this.setState((prevState) => ({
      networkDetails: {
        ...prevState.networkDetails,
        [e.target.name]: e.target.checked
      }
    }))
  }

  handleOnBlur = (e): void => this.setState({ [`${String(e.target.name)}_blur`]: true })

  render (): React.ReactNode {
    const { close, isEdit } = this.props
    const {
      networkDetails: { networkName, dhcpEnabled }
    } = this.state
    const isValid = nameValidation(networkName)
    const styles = isFalsy(this.props.showProfileError)
      ? 'inlineblock pr10 labelWidth'
      : 'network-label'
    const lineHeight = isFalsy(this.props.showProfileError) ? 'p5 lineheight' : 'p5'
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="network-header">
          <div className="inlineblock">
            {isFalsy(isEdit)
              ? translateText('network.editNetwork')
              : translateText('network.newNetwork')}
          </div>
          <div className="inlineblock floatright cursor" onClick={close}>
            {' '}
            <FontAwesomeIcon icon="window-close" size="xs" />
            &nbsp;&nbsp; {translateText('profiles.close')}
          </div>
        </div>
        <div className="p10">
          <div className={lineHeight}>
            <label className={styles}>
              {translateText('network.networkName')} *
            </label>
            <input
              type="text"
              name="networkName"
              onChange={this.handleChange}
              onBlur={this.handleOnBlur}
              value={networkName}
              disabled={isEdit}
            />
            {isFalsy(this.state.networkName_blur) && !isFalsy(nameValidation(networkName)) && (
              <label className="network-error">
                {' '}
                * {translateText('network.errors.networkNameValidation')}
              </label>
            )}
          </div>
          <div className={lineHeight}>
            <label className={styles}>
              {translateText('network.dhcpEnabled')}
            </label>
            <input
              className="checkbox-input"
              type="checkbox"
              name="dhcpEnabled"
              onChange={this.handleClick}
              checked={dhcpEnabled}
              value={dhcpEnabled}
            />
          </div>
          <div className="p5">
            <button
              className="cursor network-submit"
              type="submit"
              disabled={
                isFalsy(isEdit)
                  ? dhcpEnabled === this.props.selectedNetwork[0].dhcpEnabled
                  : !isFalsy(isValid)
              }
            >
              {isFalsy(isEdit)
                ? translateText('network.save')
                : translateText('network.create')}
            </button>
          </div>
          {isFalsy(this.state.networkConfigError) && (
            <label className="network-error">* {this.state.networkConfigError}</label>
          )}
        </div>
      </form>
    )
  }
}

NetworkProfileForm.contextType = DomainContext
