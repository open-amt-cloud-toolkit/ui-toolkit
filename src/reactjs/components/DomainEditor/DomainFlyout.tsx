/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from "react";
import isMatch from 'lodash/isMatch';
import { Flyout } from "../shared/flyout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translateText } from "../shared/Methods";
import { domainGridProps } from "./DomainGrid";
import { nameValidation, passwordValidation, validateFileExtensions } from "../shared/Utilities";
import { DomainContext } from "../shared/context/BasicContextProvider";
import { HttpClient } from "../services/HttpClient";


export interface domainFlyoutProps {
  close?: any;
  rpsServer?: any;
  notificationCallback?: any;
  selectedDomain?: any;
  isEdit?: boolean;
}

export interface domainFlyoutState {
  name_blur?: string;
  domainSuffix_blur?: string;
  provisioningCert_blur?: any;
  provisioningCertPassword_blur?: string;
  invalidFile?: boolean;
  fileName?: string;
  showPassword?: boolean;
  domainFormDetails?: any;
}

export class DomainFlyout extends React.Component<
  domainFlyoutProps,
  domainFlyoutState
  > {
  certRef: any;
  constructor(props: domainGridProps) {
    super(props);
    this.state = {
      invalidFile: false,
      fileName: '',
      showPassword: false,
      domainFormDetails: {
        name: (this.props.isEdit) ? this.props.selectedDomain[0].name : "",
        domainSuffix: (this.props.isEdit) ? this.props.selectedDomain[0].domainSuffix : "",
        provisioningCert: (this.props.isEdit) ? this.props.selectedDomain[0].provisioningCert : "",
        provisioningCertPassword: "",
      }
    };
    this.certRef = React.createRef()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props && this.props.isEdit) {
      if (this.props.selectedDomain.length === 1) {
        this.populateFormFields()
      } else {
        this.props.close()
      }
    }

  }

  populateFormFields = () => {
    const { name, domainSuffix, provisioningCertPassword, provisioningCert } = this.props.selectedDomain[0];
    this.setState({
      domainFormDetails: {
        name: name,
        domainSuffix: domainSuffix,
        provisioningCert: provisioningCert,
        provisioningCertPassword: provisioningCertPassword
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { rpsKey } = this.context.data;
    let response;
    let payload = {
      Name: this.state.domainFormDetails.name,
      DomainSuffix: this.state.domainFormDetails.domainSuffix,
      ProvisioningCertStorageFormat: "string",
      ProvisioningCert: this.state.domainFormDetails.provisioningCert,
      ProvisioningCertPassword: this.state.domainFormDetails.provisioningCertPassword,
    };
    if (this.props.isEdit) {
      //Rest api for Save 
      response = await HttpClient.patch(`${this.props.rpsServer}/api/v1/admin/domains/edit`, JSON.stringify({ payload: payload }), rpsKey);
    } else {
       response = await HttpClient.post(`${this.props.rpsServer}/api/v1/admin/domains/create`, JSON.stringify({ payload: payload }), rpsKey, false);
    }
      if (response === `Domain ${payload.Name} successfully inserted` || response === `Domain ${payload.Name} successfully updated`) {
        this.props.notificationCallback(true, response);
      } else {
        this.props.notificationCallback(false, response);
      }


  };

  handleChange = (e) => {
    let formState = Object.assign({}, this.state);
    formState.domainFormDetails[e.target.name] = e.target.value;
    this.setState(formState)
  };

  handleBlur = (e) => this.setState({ [`${e.target.name}_blur`]: true });

  handleClick = (e) => this.setState({ provisioningCert_blur: true })

  readCertFile = e => {
    e.preventDefault()
    const fileName = e.target.files[0].name
    if (validateFileExtensions(e.target.value)) {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const text = (e.target.result)
        this.setState((prevState) => ({
          ...prevState,
          domainFormDetails: {
            ...prevState.domainFormDetails,
            provisioningCert: Buffer.from(text).toString("base64")
          },
          invalidFile: false,
          fileName: fileName
        }));
      };
      reader.readAsArrayBuffer(e.target.files[0])
    } else {
      this.setState({
        invalidFile: true,
        fileName: fileName
      })
    }

  }

  handleShowPassword = () => this.setState({ showPassword: !this.state.showPassword })

  render() {
    let { close, isEdit } = this.props;
    let {
      domainFormDetails,
      name_blur,
      domainSuffix_blur,
      provisioningCert_blur,
      provisioningCertPassword_blur,
      invalidFile
    } = this.state;
    let isDisabled = !!domainFormDetails.name && !!domainFormDetails.domainSuffix && !!domainFormDetails.provisioningCertPassword && !!domainFormDetails.provisioningCert && !invalidFile;

    let isValid =
      nameValidation(domainFormDetails.name) && passwordValidation(domainFormDetails.provisioningCertPassword);
    return (
      <Flyout className="domain">
        <form onSubmit={this.handleSubmit}>
          <div className="domain-header">
            <div className="inlineblock">
              {isEdit ? translateText("domain.editDomain") : translateText("domain.newDomain")}
            </div>
            <div className="inlineblock floatright cursor" onClick={close}>
              <FontAwesomeIcon icon="window-close" size="xs" />
              &nbsp;&nbsp; {translateText("domain.close")}
            </div>
          </div>
          <div className="p10">
            <div className="p5">
              <label className="domain-label">
                {translateText("domain.name")} *
              </label>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder={translateText("domain.namePlaceHolder")}
                value={this.state.domainFormDetails.name}
                disabled={isEdit}
              />
              {name_blur && !nameValidation(domainFormDetails.name) && (
                <label className="domain-error">
                  * {translateText("domain.error.nameValidation")}
                </label>
              )}
            </div>
            <div className="p5">
              <label className="domain-label">
                {translateText("domain.domainSuffix")} *
              </label>
              <input
                type="text"
                name="domainSuffix"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder={translateText("domain.domainSuffixPlaceHolder")}
                value={this.state.domainFormDetails.domainSuffix}
              />
              {domainSuffix_blur && !domainFormDetails.domainSuffix && (
                <label className="domain-error">
                  * {translateText("domain.error.domainSuffixValidation")}
                </label>
              )}
            </div>
            <div className="p5">
              <label className="domain-label">
                {translateText("domain.provisioningCert")} *
              </label>
              <p className="cert-file-name">{this.state.fileName ? this.state.fileName : 'Provisioning cert'}</p>
              <input
                id="cert-file"
                type="file"
                ref={this.certRef}
                name="provisioningCert"
                onChange={this.readCertFile}
                onBlur={this.handleBlur}
                placeholder={translateText("domain.provisioningCertTextPlaceHolder")}
                accept=".pfx"
                className="cert-file-input"
              />
              <label htmlFor="cert-file" onClick={this.handleClick} className="cert-file-label">{isEdit ? translateText("domain.browseNew") : translateText("domain.browse")}</label>
              {provisioningCert_blur && invalidFile && (
                <label className="domain-error">
                  * {translateText("domain.error.invalidFileType")}
                </label>
              )
              }
            </div>
            <div className="p5">
              <label className="domain-label">
                {translateText("domain.provisioningCertPassword")} *
              </label>
              <input
                type={this.state.showPassword ? "text" : "password"}
                name="provisioningCertPassword"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder={translateText("domain.provisioningCertPasswordPlaceHolder")}
              /> &nbsp;&nbsp;
              {this.state.showPassword ? <FontAwesomeIcon icon="eye-slash" size="xs" onClick={this.handleShowPassword} /> : <FontAwesomeIcon icon="eye" size="xs" onClick={this.handleShowPassword} />}
              {provisioningCertPassword_blur &&
                !passwordValidation(domainFormDetails.provisioningCertPassword) && (
                  <label className="domain-error">
                    *{" "}
                    {translateText(
                      "domain.error.provisioningCertPasswordValidation"
                    )}
                  </label>
                )}
            </div>
            <div className="p5">
              <button
                className="cursor domain-submit"
                type="submit"
                disabled={isEdit ? !(isDisabled && isValid && !isMatch(this.state.domainFormDetails, this.props.selectedDomain[0])) : !(isDisabled && isValid)}
              >
                {isEdit ? translateText("domain.save") : translateText("domain.create")}
              </button>
            </div>
          </div>
        </form>
      </Flyout>
    );
  }
}

DomainFlyout.contextType = DomainContext;
