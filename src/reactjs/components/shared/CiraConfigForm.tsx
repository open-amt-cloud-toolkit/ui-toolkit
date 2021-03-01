/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { translateText } from './Methods'

import {
  nameValidation,
  ipAddressValidation,
  portValidation,
  passwordValidation,
  commonNameValidation,
  isFalsy
} from './Utilities'

import '../CIRAEditor/CiraEditor.scss'
import { DomainContext } from './context/BasicContextProvider'
import { HttpClient } from '../services/HttpClient'
import { ToggleBtn } from './btn/ToggleBtn'
import isMatch from 'lodash/isMatch'
import './CiraConfigForm.scss'

export interface formProps {
  handleSubmit?: any
  close?: any
  rpsServer?: string | null
  mpsServer?: string | null
  notificationCallback?: any
  showProfileError?: boolean
  isEdit?: boolean
  selectedCiraConfigs?: any
}

export interface formState {
  ciraConfig?: any
  configName?: any
  mpsServerAddress?: any
  configName_blur?: boolean
  mpsPort_blur?: boolean
  username_blur?: boolean
  password_blur?: boolean
  commonName_blur?: boolean
  mpsServerAddress_blur?: boolean
  profileConfigError?: any
  mpsRootCertificate?: any
  isAutoLoad?: boolean
  mpsRootCertificate_blur?: boolean
  isCertLoaded?: boolean
  isError?: boolean
  mpsCertErrorMsg?: string
  showPassword?: boolean
  oldCiraConfig?: any
  mpsServerAddresserror?: boolean
}

/**
 * Form component for creating CIRA config scripts
 */
export class CiraConfigForm extends React.Component<formProps, formState> {
  constructor (props: formProps) {
    super(props)
    this.state = {
      oldCiraConfig: isFalsy(props.isEdit) ? { ...props.selectedCiraConfigs[0] } : {},
      ciraConfig: isFalsy(props.isEdit) ? { ...props.selectedCiraConfigs[0] } : {},
      isAutoLoad: !isFalsy(props.isEdit),
      isCertLoaded: false,
      isError: false,
      showPassword: false,
      mpsServerAddresserror: false
    }
  }

  componentDidUpdate (prevProps): void {
    if (prevProps !== this.props && isFalsy(this.props.isEdit)) {
      if (this.props.selectedCiraConfigs.length === 1) {
        this.setState(prevState => ({
          ...prevState,
          oldCiraConfig: {
            ...this.props.selectedCiraConfigs[0]
          },
          ciraConfig: {
            ...this.props.selectedCiraConfigs[0]
          }
        }))
      } else {
        this.props.close()
      }
    }
  }

  trimRootCert = (cert): any => cert.replace('-----BEGIN CERTIFICATE-----', '')
    .replace('-----END CERTIFICATE-----', '')
    .replace(/\s/g, '')

  handleChange = (e): void => {
    e.persist()
    const value = e.target.name === 'serverAddressFormat' || e.target.name === 'mpsPort' ? JSON.parse(e.target.value) : e.target.name === 'mpsRootCertificate' ? this.trimRootCert(e.target.value) : e.target.value
    this.setState(prevState => ({
      ciraConfig: {
        ...prevState.ciraConfig,
        [e.target.name]: value
      }
    }))
  }

  handleBlur = (e): void => this.setState({ [`${String(e.target.name)}_blur`]: true })

  loadMpsCertificate = async (): Promise<any> => {
    const server: string = this.props.mpsServer != null ? this.props.mpsServer : ''
    const mpsServerIP = server.split('//')[1].split(':')[0]
    if (this.state.ciraConfig.mpsServerAddress === mpsServerIP) {
      const { mpsKey } = this.context.data
      const serverUrl = `${server}/admin`
      const resp = await fetch(serverUrl, {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-MPS-API-Key': mpsKey
        },
        body: JSON.stringify({
          apikey: 'xxxxx',
          method: 'MPSRootCertificate',
          payload: {}
        })
      }).then(async response => await response.text())
        .catch(error => console.info(error))

      if (isFalsy(resp)) {
        this.setState({
          ciraConfig: {
            ...this.state.ciraConfig,
            mpsRootCertificate: this.trimRootCert(resp)
          },
          isCertLoaded: true,
          mpsServerAddresserror: false
        })
      } else {
        this.setState({
          isError: true,
          mpsCertErrorMsg: translateText('cira.errors.mpsCertFetchError'),
          mpsServerAddresserror: false
        })
      }
    } else {
      this.setState({
        ciraConfig: {
          ...this.state.ciraConfig,
          mpsRootCertificate: ''
        },
        mpsServerAddresserror: true,
        isCertLoaded: false
      })
    }
  }

  handleSubmit = async (e): Promise<any> => {
    e.preventDefault()
    const { rpsKey } = this.context.data
    const payload = {
      ...this.state.ciraConfig,
      commonName: this.state.ciraConfig.serverAddressFormat === 201 ? '' : this.state.ciraConfig.commonName,
      proxyDetails: '',
      authMethod: 2
    }
    const server: string = this.props.rpsServer != null ? this.props.rpsServer : ''
    if (!isFalsy(this.props.isEdit)) {
      HttpClient.post(
        `${server}/api/v1/admin/ciraconfigs/create`,
        JSON.stringify({ payload: payload }),
        rpsKey,
        false
      ).then(response => {
        if (
          response === `CIRA Config ${String(payload.configName)} successfully inserted`
        ) {
          this.props.notificationCallback(true, response, payload)
        } else if (isFalsy(this.props.showProfileError)) {
          this.setState({
            profileConfigError: response
          })
        } else {
          this.props.notificationCallback(false, response)
        }
      }).catch(() => console.info('error occured'))
    } else {
      HttpClient.patch(
        `${server}/api/v1/admin/ciraconfigs/edit`,
        JSON.stringify({ payload: payload }),
        rpsKey
      ).then(response => {
        if (response === `UPDATE Successful for CIRA Config: ${String(payload.configName)}`) {
          this.props.notificationCallback(true, response, payload)
        } else {
          this.props.notificationCallback(false, response)
        }
      }).catch(() => console.info('error occured'))
    }
  }

  toggleFormat = (status): void => this.setState({
    isAutoLoad: status,
    isError: false,
    isCertLoaded: false
  })

  handleShowPassword = (): void => this.setState({ showPassword: !isFalsy(this.state.showPassword) })

  render (): React.ReactNode {
    const { close } = this.props
    const { ciraConfig: { commonName, configName, mpsServerAddress, password, mpsPort, username, serverAddressFormat, mpsRootCertificate }, isCertLoaded, isAutoLoad } = this.state
    const isDisabled: boolean =
      serverAddressFormat === 3
        ? commonName
        : (true &&
          configName &&
          serverAddressFormat &&
          mpsServerAddress &&
          password &&
          mpsPort &&
          username &&
          mpsRootCertificate)
    const isValid =
      isFalsy(nameValidation(configName)) &&
      ipAddressValidation(serverAddressFormat, mpsServerAddress) &&
      portValidation(mpsPort) &&
      nameValidation(username) &&
      mpsRootCertificate &&
      passwordValidation(password) &&
      (serverAddressFormat === 3
        ? !isFalsy(commonNameValidation(commonName))
        : true)
    const styles = isFalsy(this.props.showProfileError)
      ? 'inlineblock pr10 labelWidth'
      : 'cira-label'
    const lineHeight = isFalsy(this.props.showProfileError) ? 'p5 lineheight' : 'p5'
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="cira-header">
            <div className="inlineblock">
              {isFalsy(this.props.isEdit) ? translateText('cira.editCIRAConfig') : translateText('cira.newCIRAConfig')}
            </div>
            <div className="inlineblock floatright cursor" onClick={close}>
              <FontAwesomeIcon icon="window-close" size="xs" />
              &nbsp;&nbsp; {translateText('cira.close')}
            </div>
          </div>
          <div className='p10'>
            <div className={lineHeight}>
              <label className={styles}>
                {translateText('cira.configName')} *
              </label>
              <input
                type='text'
                name='configName'
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={configName}
                disabled={this.props.isEdit}
              />
              {isFalsy(this.state.configName_blur) && !isFalsy(nameValidation(configName)) && (
                <label className="cira-error">
                  {' '}
                  * {translateText('cira.errors.configNameValidation')}
                </label>
              )}
            </div>
            <div className={lineHeight}>
              <label className={styles}>
                {translateText('cira.addressFormat')} *
              </label>
              <label>
                <input
                  type='radio'
                  value={3}
                  name='serverAddressFormat'
                  onClick={this.handleChange}
                  checked={serverAddressFormat === 3}
                />
                {translateText('cira.ipv4')}
              </label>
              {/* <label>
                <input
                  type='radio'
                  value={6}
                  name='serverAddressFormat'
                  onClick={this.handleChange}
                />
                {translateText('cira.ipv6')}
              </label> */}
              <label className='radio-btn'>
                <input
                  type='radio'
                  value={201}
                  name='serverAddressFormat'
                  onClick={this.handleChange}
                  checked={serverAddressFormat === 201}
                />
                {translateText('cira.fqdn')}
              </label>
            </div>
            {isFalsy(serverAddressFormat) && (
              <div className={lineHeight}>
                <label className={styles}>
                  {translateText('cira.mpsServerAddress')} *
                </label>
                <input
                  type='text'
                  name='mpsServerAddress'
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  value={mpsServerAddress}
                />
                {isFalsy(this.state.mpsServerAddress_blur) &&
                  !isFalsy(ipAddressValidation(serverAddressFormat, mpsServerAddress)) && (
                  <label className="cira-error">
                      *{' '}
                    {serverAddressFormat === 3
                      ? translateText('cira.errors.ipv4AddressValidation')
                      : serverAddressFormat === 6
                        ? translateText('cira.errors.ipv6AddressValidation')
                        : serverAddressFormat === 201
                          ? translateText('cira.errors.fqdnAddressValidation')
                          : ''}
                  </label>
                )}
              </div>
            )}

            <div className={lineHeight}>
              <label className={styles}>{translateText('cira.port')} *</label>
              <input
                type='text'
                name='mpsPort'
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={mpsPort}
              />
              {isFalsy(this.state.mpsPort_blur) && !isFalsy(portValidation(mpsPort)) && (
                <label className="cira-error">
                  *{translateText('cira.errors.portValidation')}
                </label>
              )}
            </div>
            <div className={lineHeight}>
              <label className={styles}>
                {translateText('cira.userName')} *
              </label>
              <input
                type='text'
                name='username'
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={username}
              />
              {isFalsy(this.state.username_blur) && !isFalsy(nameValidation(username)) && (
                <label className="cira-error">
                  * {translateText('cira.errors.userNameValidation')}
                </label>
              )}
            </div>
            <div className={lineHeight}>
              <label className={styles}>
                {translateText('cira.password')} *
              </label>
              <input
                type={isFalsy(this.state.showPassword) ? 'text' : 'password'}
                name="password"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={password}
              />&nbsp;&nbsp;
              {isFalsy(this.state.showPassword) ? <FontAwesomeIcon icon="eye-slash" size="xs" onClick={this.handleShowPassword} /> : <FontAwesomeIcon icon="eye" size="xs" onClick={this.handleShowPassword} />}
              {isFalsy(this.state.password_blur) && !isFalsy(passwordValidation(password)) && (
                <label className="cira-error">
                  *{translateText('cira.errors.passwordValidation')}
                </label>
              )}
            </div>
            {serverAddressFormat === 3 && (
              <div className={lineHeight}>
                <label className={styles}>
                  {translateText('cira.commonName')} *
                </label>
                <input
                  type='text'
                  name='commonName'
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  value={commonName}
                />
                {isFalsy(this.state.commonName_blur) &&
                  commonNameValidation(commonName) && (
                  <label className="cira-error">
                      *{translateText('cira.errors.commonNameValidation')}
                  </label>
                )}
              </div>
            )}
            <div className={lineHeight}>
              <label className={styles}>
                {translateText('cira.mpsRootCertFormat')} *
              </label>
              <div className={isFalsy(this.props.showProfileError) ? 'inlineblock' : ''}>
                <ToggleBtn
                  switchStatus={this.toggleFormat}
                  isChecked={isAutoLoad}
                />
                &nbsp;&nbsp;&nbsp;
                <span className={isFalsy(this.props.showProfileError) ? 'position' : 'vasuper'}>
                  {' '}
                  <label>
                    {isFalsy(isAutoLoad)
                      ? translateText('cira.autoLoad')
                      : translateText('cira.manual')}

                  </label>
                </span>
              </div>
            </div>
            <div className={lineHeight}>
              <label className={styles}>
                {translateText('cira.mpsRootCetificate')} *
              </label>
              {isFalsy(isAutoLoad)
                ? <button className={isFalsy(this.props.showProfileError) ? '' : 'load-mps-button'} disabled={!isFalsy(mpsServerAddress) || this.state.isError} type="button" onClick={this.loadMpsCertificate}>
                  <FontAwesomeIcon icon="file-upload" size="lg" /> &nbsp;
                  {translateText('cira.load')}</button> : <textarea
                  className="textareawidth"
                  name="mpsRootCertificate"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  value={mpsRootCertificate}
                />}
              {!isFalsy(mpsRootCertificate) && this.state.mpsRootCertificate_blur && (
                <label className="cira-error">
                  * {translateText('cira.errors.loadMpsError')}
                </label>
              )}
              {isFalsy(isCertLoaded) && (
                <label className='cira-success'>{translateText('cira.mpsLoaded')}</label>
              )}
              {isFalsy(this.state.isError) && (
                <label className='cira-error'> * {this.state.mpsCertErrorMsg}</label>
              )}
              {isFalsy(this.state.mpsServerAddresserror) && <label className='cira-error'> * {translateText('cira.errors.mpsServerMismatchError')}</label>

              }
            </div>
            <div className={lineHeight}>
              {isFalsy(this.state.profileConfigError) && (
                <label className="cira-error">
                  * {this.state.profileConfigError}
                </label>
              )}
              <button
                className="cursor cira-submit"
                type="submit"
                disabled={isFalsy(this.props.isEdit) ? !(isFalsy(isDisabled) && isValid && !isFalsy(isMatch(this.state.ciraConfig, this.state.oldCiraConfig))) : !(isDisabled && isValid)}
              >
                {isFalsy(this.props.isEdit) ? translateText('cira.save') : translateText('cira.create')}
              </button>
            </div>
          </div>
        </form>
      </>
    )
  }
}

CiraConfigForm.contextType = DomainContext
