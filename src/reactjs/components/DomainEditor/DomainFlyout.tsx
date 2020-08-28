/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from "react";
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
}

export interface domainFlyoutState {
  name?: string;
  domainSuffix?: string;
  provisioningCert?: any;
  provisioningCertStorageFormat?: string;
  provisioningCertPassword?: string;
  name_blur?: string;
  domainSuffix_blur?: string;
  provisioningCert_blur?: any;
  provisioningCertStorageFormat_blur?: string;
  provisioningCertPassword_blur?: string;
  isFileFormat?: boolean;
  invalidFile?: boolean;
  fileName?: string;
  showPassword?: boolean
}

export class DomainFlyout extends React.Component<
  domainFlyoutProps,
  domainFlyoutState
  > {
  certRef: any;
  constructor(props: domainGridProps) {
    super(props);
    this.state = {
      name: "",
      domainSuffix: "",
      provisioningCert: "",
      provisioningCertStorageFormat: "",
      provisioningCertPassword: "",
      isFileFormat: true,
      invalidFile: false,
      fileName: '',
      showPassword: false
    };
    this.certRef = React.createRef()
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { rpsKey } = this.context.data;
    let payload = {
      Name: this.state.name,
      DomainSuffix: this.state.domainSuffix,
      ProvisioningCertStorageFormat: "string",
      ProvisioningCert: this.state.provisioningCert,
      ProvisioningCertPassword: this.state.provisioningCertPassword,
    };
    const response = await HttpClient.post(`${this.props.rpsServer}/api/v1/admin/domains/create`, JSON.stringify({ payload: payload }), rpsKey, false);
    if (response === `Domain ${payload.Name} successfully inserted`) {
      this.props.notificationCallback(true, response);
    } else {
      this.props.notificationCallback(false, response);
    }
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleBlur = (e) => this.setState({ [`${e.target.name}_blur`]: true });

  handleClick = (e) => this.setState({ provisioningCert_blur: true })


  readCertFile = e => {
    e.preventDefault()
    const fileName = e.target.files[0].name
    if (validateFileExtensions(e.target.value)) {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const text = (e.target.result)
        this.setState({
          provisioningCert: Buffer.from(text).toString("base64"),
          invalidFile: false,
          fileName: fileName
        })
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
    let { close } = this.props;
    let {
      name,
      domainSuffix,
      provisioningCert,
      provisioningCertStorageFormat,
      provisioningCertPassword,
      name_blur,
      domainSuffix_blur,
      provisioningCert_blur,
      provisioningCertStorageFormat_blur,
      provisioningCertPassword_blur,
      isFileFormat,
      invalidFile
    } = this.state;

    let isDisabled =
      name && domainSuffix && provisioningCert && provisioningCertPassword && !invalidFile;

    let isValid =
      nameValidation(name) && passwordValidation(provisioningCertPassword);
    return (
      <Flyout className="domain">
        <form onSubmit={this.handleSubmit}>
          <div className="domain-header">
            <div className="inlineblock">
              {translateText("domain.newDomain")}
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
              />
              {name_blur && !nameValidation(name) && (
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
              />
              {domainSuffix_blur && !domainSuffix && (
                <label className="domain-error">
                  * {translateText("domain.error.domainSuffixValidation")}
                </label>
              )}
            </div>
            <div className="p5">
              <label className="domain-label">
                {translateText("domain.provisioningCert")} *
              </label>
              <p className="cert-file-name">{this.state.fileName ? this.state.fileName : 'Choose File'}</p>
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
              <label htmlFor="cert-file" onClick={this.handleClick} className="cert-file-label">Browse</label>

              {provisioningCert_blur && !provisioningCert && !invalidFile && (
                <label className="domain-error">
                  * {translateText("domain.error.provisioningCertValidation")}
                </label>
              )}
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
                !passwordValidation(provisioningCertPassword) && (
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
                className="cursor"
                type="submit"
                disabled={!(isDisabled && isValid)}
              >
                {translateText("domain.create")}
              </button>
            </div>
          </div>
        </form>
      </Flyout>
    );
  }
}

DomainFlyout.contextType = DomainContext;
