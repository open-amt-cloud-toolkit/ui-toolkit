/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react'
import isMatch from 'lodash/isMatch'
import { Flyout } from '../shared/flyout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { translateText } from '../shared/Methods'
import { domainGridProps } from './DomainGrid'
import { isFalsy, nameValidation, passwordValidation, validateFileExtensions } from '../shared/Utilities'
import { DomainContext } from '../shared/context/BasicContextProvider'
import { HttpClient } from '../services/HttpClient'

export interface domainFlyoutProps {
  close?: any
  rpsServer?: string | null
  notificationCallback?: any
  selectedDomain?: any
  isEdit?: boolean
}

export interface domainFlyoutState {
  nameBlur?: string
  domainSuffixBlur?: string
  provisioningCertBlur?: any
  provisioningCertPasswordBlur?: string
  invalidFile?: boolean
  fileName?: string
  showPassword?: boolean
  domainFormDetails?: any
}

export class DomainFlyout extends React.Component<
domainFlyoutProps,
domainFlyoutState
> {
  certRef: any
  constructor (props: domainGridProps) {
    super(props)
    this.state = {
      invalidFile: false,
      fileName: '',
      showPassword: false,
      domainFormDetails: {
        name: isFalsy(this.props.isEdit) ? this.props.selectedDomain[0].name : '',
        domainSuffix: isFalsy(this.props.isEdit) ? this.props.selectedDomain[0].domainSuffix : '',
        provisioningCert: isFalsy(this.props.isEdit) ? this.props.selectedDomain[0].provisioningCert : '',
        provisioningCertPassword: ''
      }
    }
    this.certRef = React.createRef()
  }

  componentDidUpdate (prevProps): void {
    if (prevProps !== this.props && isFalsy(this.props.isEdit)) {
      if (this.props.selectedDomain.length === 1) {
        this.populateFormFields()
      } else {
        this.props.close()
      }
    }
  }

  populateFormFields = (): void => {
    const { name, domainSuffix, provisioningCertPassword, provisioningCert } = this.props.selectedDomain[0]
    this.setState({
      domainFormDetails: {
        name: name,
        domainSuffix: domainSuffix,
        provisioningCert: provisioningCert,
        provisioningCertPassword: provisioningCertPassword
      }
    })
  }

  handleSubmit = async (e): Promise<any> => {
    e.preventDefault()
    const { rpsKey } = this.context.data
    let response
    const payload = {
      Name: this.state.domainFormDetails.name,
      DomainSuffix: this.state.domainFormDetails.domainSuffix,
      ProvisioningCertStorageFormat: 'string',
      ProvisioningCert: this.state.domainFormDetails.provisioningCert,
      ProvisioningCertPassword: this.state.domainFormDetails.provisioningCertPassword
    }
    const server: string = this.props.rpsServer != null ? this.props.rpsServer : ''
    if (isFalsy(this.props.isEdit)) {
      // Rest api for Save
      response = await HttpClient.patch(`${server}/api/v1/admin/domains/edit`, JSON.stringify({ payload: payload }), rpsKey)
    } else {
      response = await HttpClient.post(`${server}/api/v1/admin/domains/create`, JSON.stringify({ payload: payload }), rpsKey, false)
    }
    if (response === `Domain ${String(payload.Name)} successfully inserted` || response === `Domain ${String(payload.Name)} successfully updated`) {
      this.props.notificationCallback(true, response)
    } else {
      this.props.notificationCallback(false, response)
    }
  }

  handleChange = (e): void => {
    const formState = Object.assign({}, this.state)
    formState.domainFormDetails[e.target.name] = e.target.value
    this.setState(formState)
  }

  handleBlur = (e): void => this.setState({ [`${String(e.target.name)}Blur`]: true })

  handleClick = (e): void => this.setState({ provisioningCertBlur: true })

  readCertFile = (e: any): any => {
    e.preventDefault()
    const fileName = e.target.files[0].name
    if (validateFileExtensions(e.target.value)) {
      const reader = new FileReader()
      reader.onload = async (e: any) => {
        const text: any = (e.target.result)
        this.setState((prevState) => ({
          ...prevState,
          domainFormDetails: {
            ...prevState.domainFormDetails,
            provisioningCert: Buffer.from(text).toString('base64')
          },
          invalidFile: false,
          fileName: fileName
        }))
      }
      reader.readAsArrayBuffer(e.target.files[0])
    } else {
      this.setState({
        invalidFile: true,
        fileName: fileName
      })
    }
  }

  handleShowPassword = (): void => this.setState({ showPassword: !isFalsy(this.state.showPassword) })

  render (): React.ReactNode {
    const { close, isEdit } = this.props
    const {
      domainFormDetails,
      nameBlur,
      domainSuffixBlur,
      provisioningCertBlur,
      provisioningCertPasswordBlur,
      invalidFile
    } = this.state
    const isDisabled = !!isFalsy(domainFormDetails.name) && !!isFalsy(domainFormDetails.domainSuffix) && !!isFalsy(domainFormDetails.provisioningCertPassword) && !!isFalsy(domainFormDetails.provisioningCert) && !isFalsy(invalidFile)

    const isValid =
    isFalsy(nameValidation(domainFormDetails.name)) && passwordValidation(domainFormDetails.provisioningCertPassword)
    return (
      <Flyout className="domain">
        <form onSubmit={this.handleSubmit}>
          <div className="domain-header">
            <div className="inlineblock">
              {isFalsy(isEdit) ? translateText('domain.editDomain') : translateText('domain.newDomain')}
            </div>
            <div className="inlineblock floatright cursor" onClick={close}>
              <FontAwesomeIcon icon="window-close" size="xs" />
              &nbsp;&nbsp; {translateText('domain.close')}
            </div>
          </div>
          <div className="p10">
            <div className="p5">
              <label className="domain-label">
                {translateText('domain.name')} *
              </label>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder={translateText('domain.namePlaceHolder')}
                value={this.state.domainFormDetails.name}
                disabled={isEdit}
              />
              {isFalsy(nameBlur) && !isFalsy(nameValidation(domainFormDetails.name)) && (
                <label className="domain-error">
                  * {translateText('domain.error.nameValidation')}
                </label>
              )}
            </div>
            <div className="p5">
              <label className="domain-label">
                {translateText('domain.domainSuffix')} *
              </label>
              <input
                type="text"
                name="domainSuffix"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder={translateText('domain.domainSuffixPlaceHolder')}
                value={this.state.domainFormDetails.domainSuffix}
              />
              {isFalsy(domainSuffixBlur) && !isFalsy(domainFormDetails.domainSuffix) && (
                <label className="domain-error">
                  * {translateText('domain.error.domainSuffixValidation')}
                </label>
              )}
            </div>
            <div className="p5">
              <label className="domain-label">
                {translateText('domain.provisioningCert')} *
              </label>
              <p className="cert-file-name">{isFalsy(this.state.fileName) ? this.state.fileName : 'Provisioning cert'}</p>
              <input
                id="cert-file"
                type="file"
                ref={this.certRef}
                name="provisioningCert"
                onChange={this.readCertFile}
                onBlur={this.handleBlur}
                placeholder={translateText('domain.provisioningCertTextPlaceHolder')}
                accept=".pfx"
                className="cert-file-input"
              />
              <label htmlFor="cert-file" onClick={this.handleClick} className="cert-file-label">{isFalsy(isEdit) ? translateText('domain.browseNew') : translateText('domain.browse')}</label>
              {isFalsy(provisioningCertBlur) && invalidFile && (
                <label className="domain-error">
                  * {translateText('domain.error.invalidFileType')}
                </label>
              )
              }
            </div>
            <div className="p5">
              <label className="domain-label">
                {translateText('domain.provisioningCertPassword')} *
              </label>
              <input
                type={isFalsy(this.state.showPassword) ? 'text' : 'password'}
                name="provisioningCertPassword"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder={translateText('domain.provisioningCertPasswordPlaceHolder')}
              /> &nbsp;&nbsp;
              {isFalsy(this.state.showPassword) ? <FontAwesomeIcon icon="eye-slash" size="xs" onClick={this.handleShowPassword} /> : <FontAwesomeIcon icon="eye" size="xs" onClick={this.handleShowPassword} />}
              {isFalsy(provisioningCertPasswordBlur) &&
                !isFalsy(passwordValidation(domainFormDetails.provisioningCertPassword)) && (
                <label className="domain-error">
                    *{' '}
                  {translateText(
                    'domain.error.provisioningCertPasswordValidation'
                  )}
                </label>
              )}
            </div>
            <div className="p5">
              <button
                className="cursor domain-submit"
                type="submit"
                disabled={isFalsy(isEdit) ? !(isDisabled && isFalsy(isValid) && !isFalsy(isMatch(this.state.domainFormDetails, this.props.selectedDomain[0]))) : !(isDisabled && isFalsy(isValid))}
              >
                {isFalsy(isEdit) ? translateText('domain.save') : translateText('domain.create')}
              </button>
            </div>
          </div>
        </form>
      </Flyout>
    )
  }
}

DomainFlyout.contextType = DomainContext
