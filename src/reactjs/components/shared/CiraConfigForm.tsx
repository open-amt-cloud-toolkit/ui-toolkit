/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translateText } from "./Methods";
import {
  nameValidation,
  ipAddressValidation,
  portValidation,
  passwordValidation,
  commonNameValidation,
} from "./Utilities";

import "../CIRAEditor/CiraEditor.scss";
import { DomainContext } from "./context/BasicContextProvider";
import { HttpClient } from "../services/HttpClient";
import { ToggleBtn } from "./btn/ToggleBtn";

import './CiraConfigForm.scss';

export interface formProps {
  handleSubmit?: any;
  close?: any;
  rpsServer?: any;
  notificationCallback?: any;
  showProfileError?: any;
}

export interface formState {
  configName?: any;
  mpsServer?: any;
  port?: any;
  userName?: any;
  password?: any;
  commonName?: any;
  mpsServerType?: any;
  configName_blur?: boolean;
  port_blur?: boolean;
  userName_blur?: boolean;
  password_blur?: boolean;
  commonName_blur?: boolean;
  mpsServer_blur?: boolean;
  profileConfigError?: any;
  mpsRootCertificate?: any;
  isAutoLoad?: boolean;
  mpsRootCertificate_blur?: boolean;
  isCertLoaded?: boolean;
  isError?: boolean;
  mpsCertErrorMsg?: string;
  showPassword?: boolean
}

/**
 * Form component for creating CIRA config scripts
 */
export class CiraConfigForm extends React.Component<formProps, formState> {
  constructor(props: formProps) {
    super(props);
    this.state = {
      configName: "",
      mpsServer: "",
      port: "",
      userName: "",
      password: "",
      commonName: "",
      mpsRootCertificate: "",
      isAutoLoad: true,
      isCertLoaded: false,
      isError: false,
      showPassword: false
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleBlur = (e) => this.setState({ [`${e.target.name}_blur`]: true });

  mpsCertValidation = cert => {
    return cert ? true : false;
  }

  loadMpsCertificate = async () => {
    const { mpsServer } = this.state;
    const { hostname, host } = window.location;
    const { mpsKey } = this.context.data;
    const mpsPort = host.split(':')[1];
    console.info(mpsPort)
    if (mpsServer === hostname) {
      const serverUrl = `https://${hostname}:${mpsPort}/admin`;
      const resp = await fetch(serverUrl, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-MPS-API-Key": mpsKey
        },
        body: JSON.stringify({
          apikey: 'xxxxx',
          method: "MPSRootCertificate",
          payload: {}
        })
      }).then(response => response.text())
        .catch(error => console.info(error))

      if (resp) {
        this.setState({
          mpsRootCertificate: resp,
          isCertLoaded: true
        })
      } else {
        this.setState({
          isError: true,
          mpsCertErrorMsg: translateText("cira.errors.mpsCertFetchError")
        })
      }
    } else {
      this.setState({
        isError: true,
        mpsCertErrorMsg: translateText("cira.errors.mpsServerMismatchError")
      })
    }

  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { rpsKey } = this.context.data;
    let payload = {
      configName: this.state.configName,
      mpsServerAddress: this.state.mpsServer,
      mpsPort: JSON.parse(this.state.port),
      username: this.state.userName,
      password: this.state.password,
      commonName: this.state.commonName,
      serverAddressFormat: JSON.parse(this.state.mpsServerType),
      mpsRootCertificate: this.state.mpsRootCertificate
        .replace("-----BEGIN CERTIFICATE-----", "")
        .replace("-----END CERTIFICATE-----", "")
        .replace(/\s/g, ""),
      proxyDetails: "",
      authMethod: 2,
    };

    const response = await HttpClient.post(
      `${this.props.rpsServer}/api/v1/admin/ciraconfigs/create`,
      JSON.stringify({ payload: payload }),
      rpsKey,
      false
    );
    if (
      response === `CIRA Config ${payload.configName} successfully inserted`
    ) {
      this.props.notificationCallback(true, response, payload);
    } else if (this.props.showProfileError) {
      this.setState({
        profileConfigError: response,
      });
    } else {
      this.props.notificationCallback(false, response);
    }
  };

  toggleFormat = (status) => this.setState({
    isAutoLoad: status,
    isError: false,
    isCertLoaded: false,
    mpsRootCertificate_blur: false
  });

  handleShowPassword = () => this.setState({ showPassword: !this.state.showPassword })

  render() {
    let { close } = this.props;
    let {
      commonName,
      configName,
      mpsServer,
      password,
      port,
      userName,
      mpsServerType,
      mpsRootCertificate,
      isCertLoaded,
      isAutoLoad
    } = this.state;
    let isDisabled =
      mpsServerType === "3"
        ? commonName
        : (true &&
          configName &&
          mpsServerType &&
          mpsServer &&
          password &&
          port &&
          userName &&
          mpsRootCertificate);
    let isValid =
      nameValidation(configName) &&
      ipAddressValidation(mpsServerType, mpsServer) &&
      portValidation(port) &&
      nameValidation(userName) &&
      this.mpsCertValidation(mpsRootCertificate) &&
      passwordValidation(password) &&
      (mpsServerType === "3"
        ? !commonNameValidation(commonName)
        : true);
    let styles = this.props.showProfileError
      ? "inlineblock pr10"
      : "cira-label";
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="cira-header">
            <div className="inlineblock">
              {translateText("cira.newCIRAConfig")}
            </div>
            <div className="inlineblock floatright cursor" onClick={close}>
              <FontAwesomeIcon icon="window-close" size="xs" />
              &nbsp;&nbsp; {translateText("cira.close")}
            </div>
          </div>
          <div className="p10">
            <div className="p5">
              <label className={styles}>
                {translateText("cira.configName")} *
              </label>
              <input
                type="text"
                name="configName"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.configName_blur && !nameValidation(configName) && (
                <label className="cira-error">
                  {" "}
                  * {translateText("cira.errors.configNameValidation")}
                </label>
              )}
            </div>
            <div className="p5">
              <label className={styles}>
                {translateText("cira.addressFormat")} *
              </label>
              <label>
                <input
                  type="radio"
                  value={3}
                  name="mpsServerType"
                  onClick={this.handleChange}
                />
                {translateText("cira.ipv4")}
              </label>
              {/* <label>
                <input
                  type="radio"
                  value={6}
                  name="mpsServerType"
                  onClick={this.handleChange}
                />
                {translateText("cira.ipv6")}
              </label> */}
              <label className="radio-btn">
                <input
                  type="radio"
                  value={201}
                  name="mpsServerType"
                  onClick={this.handleChange}
                />
                {translateText("cira.fqdn")}
              </label>
            </div>
            {this.state.mpsServerType && (
              <div className="p5">
                <label className={styles}>
                  {translateText("cira.mpsServerAddress")} *
                </label>
                <input
                  type="text"
                  name="mpsServer"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {this.state.mpsServer_blur &&
                  !ipAddressValidation(mpsServerType, mpsServer) && (
                    <label className="cira-error">
                      *{" "}
                      {mpsServerType === "3"
                        ? translateText("cira.errors.ipv4AddressValidation")
                        : mpsServerType === "6"
                          ? translateText("cira.errors.ipv6AddressValidation")
                          : mpsServerType === "201"
                            ? translateText("cira.errors.fqdnAddressValidation")
                            : ""}
                    </label>
                  )}
              </div>
            )}

            <div className="p5">
              <label className={styles}>{translateText("cira.port")} *</label>
              <input
                type="text"
                name="port"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.port_blur && !portValidation(port) && (
                <label className="cira-error">
                  *{translateText("cira.errors.portValidation")}
                </label>
              )}
            </div>
            <div className="p5">
              <label className={styles}>
                {translateText("cira.userName")} *
              </label>
              <input
                type="text"
                name="userName"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.userName_blur && !nameValidation(userName) && (
                <label className="cira-error">
                  * {translateText("cira.errors.userNameValidation")}
                </label>
              )}
            </div>
            <div className="p5">
              <label className={styles}>
                {translateText("cira.password")} *
              </label>
              <input
                type={this.state.showPassword ? "text" : "password"}
                name="password"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />&nbsp;&nbsp;
              {this.state.showPassword ? <FontAwesomeIcon icon="eye-slash" size="xs" onClick={this.handleShowPassword} /> : <FontAwesomeIcon icon="eye" size="xs" onClick={this.handleShowPassword} />}
              {this.state.password_blur && !passwordValidation(password) && (
                <label className="cira-error">
                  *{translateText("cira.errors.passwordValidation")}
                </label>
              )}
            </div>
            {mpsServerType === "3" && (
              <div className="p5">
                <label className={styles}>
                  {translateText("cira.commonName")} *
                </label>
                <input
                  type="text"
                  name="commonName"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {this.state.commonName_blur &&
                  commonNameValidation(commonName) && (
                    <label className="cira-error">
                      *{translateText("cira.errors.commonNameValidation")}
                    </label>
                  )}
              </div>
            )}
            <div className="p5">
              <label className={styles}>
                {translateText("cira.mpsRootCertFormat")} *
              </label>
              <div>
                <ToggleBtn
                  switchStatus={this.toggleFormat}
                  isChecked={isAutoLoad}
                />
                &nbsp;&nbsp;&nbsp;
                <span className="vasuper">
                  {" "}
                  <label>
                    {isAutoLoad
                      ? translateText("cira.autoLoad")
                      : translateText("cira.manual")}

                  </label>
                </span>
              </div>
            </div>
            <div className="p5">
              <label className={styles}>
                {translateText("cira.mpsRootCetificate")} *
              </label>
              {isAutoLoad ?
                <button className='load-mps-button' disabled={!mpsServer || this.state.isError} type="button" onClick={this.loadMpsCertificate}>
                  <FontAwesomeIcon icon="file-upload" size="lg" /> &nbsp;
                  {translateText("cira.load")}</button> : <textarea
                  className="textareawidth"
                  name="mpsRootCertificate"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />}
              {this.state.mpsRootCertificate_blur && !this.mpsCertValidation(this.state.mpsRootCertificate) && (
                <label className="cira-error">
                  * {translateText("cira.errors.loadMpsError")}
                </label>
              )}
              {isCertLoaded && (
                <label className='cira-success'>{translateText("cira.mpsLoaded")}</label>
              )}
              {this.state.isError && (
                <label className='cira-error'> * {this.state.mpsCertErrorMsg}</label>
              )

              }
            </div>
            <div className="p5">
              {this.state.profileConfigError && (
                <label className="cira-error">
                  * {this.state.profileConfigError}
                </label>
              )}
              <button
                className="cursor"
                type="submit"
                disabled={!(isDisabled && isValid)}
              >
                {translateText("cira.create")}
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

CiraConfigForm.contextType = DomainContext;
