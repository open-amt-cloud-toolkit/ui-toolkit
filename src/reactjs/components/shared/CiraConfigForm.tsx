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
import isMatch from 'lodash/isMatch'
import './CiraConfigForm.scss';

export interface formProps {
  handleSubmit?: any;
  close?: any;
  rpsServer?: any;
  mpsServer?: any;
  notificationCallback?: any;
  showProfileError?: any;
  isEdit?: boolean;
  selectedCiraConfigs?: any
}

export interface formState {
  ciraConfig?: any;
  configName?: any;
  mpsServerAddress?: any;
  configName_blur?: boolean;
  mpsPort_blur?: boolean;
  username_blur?: boolean;
  password_blur?: boolean;
  commonName_blur?: boolean;
  mpsServerAddress_blur?: boolean;
  profileConfigError?: any;
  mpsRootCertificate?: any;
  isAutoLoad?: boolean;
  mpsRootCertificate_blur?: boolean;
  isCertLoaded?: boolean;
  isError?: boolean;
  mpsCertErrorMsg?: string;
  showPassword?: boolean;
  oldCiraConfig?: any
}

/**
 * Form component for creating CIRA config scripts
 */
export class CiraConfigForm extends React.Component<formProps, formState> {
  constructor(props: formProps) {
    super(props);
    this.state = {
      oldCiraConfig: props.isEdit ? { ...props.selectedCiraConfigs[0] } : {},
      ciraConfig: props.isEdit ? { ...props.selectedCiraConfigs[0] } : {},
      isAutoLoad: props.isEdit ? false : true,
      isCertLoaded: false,
      isError: false,
      showPassword: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props && this.props.isEdit) {
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

  trimRootCert = (cert) => cert.replace("-----BEGIN CERTIFICATE-----", "")
    .replace("-----END CERTIFICATE-----", "")
    .replace(/\s/g, "")

  handleChange = (e) => {
    e.persist()
    const value = e.target.name === 'serverAddressFormat' || e.target.name === 'mpsPort' ? JSON.parse(e.target.value) : e.target.name === 'mpsRootCertificate' ? this.trimRootCert(e.target.value) : e.target.value;
    this.setState(prevState => ({
      ciraConfig: {
        ...prevState.ciraConfig,
        [e.target.name]: value
      }
    }));
  }

  handleBlur = (e) => this.setState({ [`${e.target.name}_blur`]: true });

  loadMpsCertificate = async () => {
    const { mpsKey } = this.context.data;
    const serverUrl = `${this.props.mpsServer}/admin`;
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
        ciraConfig: {
          ...this.state.ciraConfig,
          mpsRootCertificate: this.trimRootCert(resp),
        },
        isCertLoaded: true
      })
    } else {
      this.setState({
        isError: true,
        mpsCertErrorMsg: translateText("cira.errors.mpsCertFetchError")
      })
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { rpsKey } = this.context.data;
    let payload = {
      ...this.state.ciraConfig,
      commonName: this.state.ciraConfig.serverAddressFormat === 201 ? '' : this.state.ciraConfig.commonName,
      proxyDetails: "",
      authMethod: 2,
    };
    if (!this.props.isEdit) {
      HttpClient.post(
        `${this.props.rpsServer}/api/v1/admin/ciraconfigs/create`,
        JSON.stringify({ payload: payload }),
        rpsKey,
        false
      ).then(response => {
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
      });
    }
    else {
      HttpClient.patch(
        `${this.props.rpsServer}/api/v1/admin/ciraconfigs/edit`,
        JSON.stringify({ payload: payload }),
        rpsKey
      ).then(response => {
        if (response === `UPDATE Successful for CIRA Config: ${payload.configName}`) {
          this.props.notificationCallback(true, response, payload);
        } else {
          this.props.notificationCallback(false, response);
        }
      });
    }
  };

  toggleFormat = (status) => this.setState({
    isAutoLoad: status,
    isError: false,
    isCertLoaded: false,
  });

  handleShowPassword = () => this.setState({ showPassword: !this.state.showPassword })

  render() {
    let { close } = this.props;
    let { ciraConfig: { commonName, configName, mpsServerAddress, password, mpsPort, username, serverAddressFormat, mpsRootCertificate }, isCertLoaded, isAutoLoad } = this.state;
    let isDisabled =
      serverAddressFormat === 3
        ? commonName
        : (true &&
          configName &&
          serverAddressFormat &&
          mpsServerAddress &&
          password &&
          mpsPort &&
          username &&
          mpsRootCertificate);
    let isValid =
      nameValidation(configName) &&
      ipAddressValidation(serverAddressFormat, mpsServerAddress) &&
      portValidation(mpsPort) &&
      nameValidation(username) &&
      mpsRootCertificate &&
      passwordValidation(password) &&
      (serverAddressFormat === 3
        ? !commonNameValidation(commonName)
        : true);
    let styles = this.props.showProfileError
      ? "inlineblock pr10 labelWidth"
      : "cira-label";
    let lineHeight = this.props.showProfileError ? "p5 lineheight" : "p5"
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="cira-header">
            <div className="inlineblock">
              {this.props.isEdit ? translateText("cira.editCIRAConfig") : translateText("cira.newCIRAConfig")}
            </div>
            <div className="inlineblock floatright cursor" onClick={close}>
              <FontAwesomeIcon icon="window-close" size="xs" />
              &nbsp;&nbsp; {translateText("cira.close")}
            </div>
          </div>
          <div className="p10">
            <div className={lineHeight}>
              <label className={styles}>
                {translateText("cira.configName")} *
              </label>
              <input
                type="text"
                name="configName"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={configName}
                disabled={this.props.isEdit}
              />
              {this.state.configName_blur && !nameValidation(configName) && (
                <label className="cira-error">
                  {" "}
                  * {translateText("cira.errors.configNameValidation")}
                </label>
              )}
            </div>
            <div className={lineHeight}>
              <label className={styles}>
                {translateText("cira.addressFormat")} *
              </label>
              <label>
                <input
                  type="radio"
                  value={3}
                  name="serverAddressFormat"
                  onClick={this.handleChange}
                  checked={serverAddressFormat === 3 ? true : false}
                />
                {translateText("cira.ipv4")}
              </label>
              {/* <label>
                <input
                  type="radio"
                  value={6}
                  name="serverAddressFormat"
                  onClick={this.handleChange}
                />
                {translateText("cira.ipv6")}
              </label> */}
              <label className="radio-btn">
                <input
                  type="radio"
                  value={201}
                  name="serverAddressFormat"
                  onClick={this.handleChange}
                  checked={serverAddressFormat === 201 ? true : false}
                />
                {translateText("cira.fqdn")}
              </label>
            </div>
            {serverAddressFormat && (
              <div className={lineHeight}>
                <label className={styles}>
                  {translateText("cira.mpsServerAddress")} *
                </label>
                <input
                  type="text"
                  name="mpsServerAddress"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  value={mpsServerAddress}
                />
                {this.state.mpsServerAddress_blur &&
                  !ipAddressValidation(serverAddressFormat, mpsServerAddress) && (
                    <label className="cira-error">
                      *{" "}
                      {serverAddressFormat === 3
                        ? translateText("cira.errors.ipv4AddressValidation")
                        : serverAddressFormat === 6
                          ? translateText("cira.errors.ipv6AddressValidation")
                          : serverAddressFormat === 201
                            ? translateText("cira.errors.fqdnAddressValidation")
                            : ""}
                    </label>
                  )}
              </div>
            )}

            <div className={lineHeight}>
              <label className={styles}>{translateText("cira.port")} *</label>
              <input
                type="text"
                name="mpsPort"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={mpsPort}
              />
              {this.state.mpsPort_blur && !portValidation(mpsPort) && (
                <label className="cira-error">
                  *{translateText("cira.errors.portValidation")}
                </label>
              )}
            </div>
            <div className={lineHeight}>
              <label className={styles}>
                {translateText("cira.userName")} *
              </label>
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={username}
              />
              {this.state.username_blur && !nameValidation(username) && (
                <label className="cira-error">
                  * {translateText("cira.errors.userNameValidation")}
                </label>
              )}
            </div>
            <div className={lineHeight}>
              <label className={styles}>
                {translateText("cira.password")} *
              </label>
              <input
                type={this.state.showPassword ? "text" : "password"}
                name="password"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={password}
              />&nbsp;&nbsp;
              {this.state.showPassword ? <FontAwesomeIcon icon="eye-slash" size="xs" onClick={this.handleShowPassword} /> : <FontAwesomeIcon icon="eye" size="xs" onClick={this.handleShowPassword} />}
              {this.state.password_blur && !passwordValidation(password) && (
                <label className="cira-error">
                  *{translateText("cira.errors.passwordValidation")}
                </label>
              )}
            </div>
            {serverAddressFormat === 3 && (
              <div className={lineHeight}>
                <label className={styles}>
                  {translateText("cira.commonName")} *
                </label>
                <input
                  type="text"
                  name="commonName"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  value={commonName}
                />
                {this.state.commonName_blur &&
                  commonNameValidation(commonName) && (
                    <label className="cira-error">
                      *{translateText("cira.errors.commonNameValidation")}
                    </label>
                  )}
              </div>
            )}
            <div className={lineHeight}>
              <label className={styles}>
                {translateText("cira.mpsRootCertFormat")} *
              </label>
              <div className={this.props.showProfileError ? "inlineblock" : ""}>
                <ToggleBtn
                  switchStatus={this.toggleFormat}
                  isChecked={isAutoLoad}
                />
                &nbsp;&nbsp;&nbsp;
                <span className={this.props.showProfileError ? "position" : "vasuper"}>
                  {" "}
                  <label>
                    {isAutoLoad
                      ? translateText("cira.autoLoad")
                      : translateText("cira.manual")}

                  </label>
                </span>
              </div>
            </div>
            <div className={lineHeight}>
              <label className={styles}>
                {translateText("cira.mpsRootCetificate")} *
              </label>
              {isAutoLoad ?
                <button className={this.props.showProfileError ? "" : 'load-mps-button'} disabled={!mpsServerAddress || this.state.isError} type="button" onClick={this.loadMpsCertificate}>
                  <FontAwesomeIcon icon="file-upload" size="lg" /> &nbsp;
                  {translateText("cira.load")}</button> : <textarea
                  className="textareawidth"
                  name="mpsRootCertificate"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  value={mpsRootCertificate}
                />}
              {!mpsRootCertificate && this.state.mpsRootCertificate_blur && (
                <label className="cira-error">
                  * {translateText("cira.errors.loadMpsError")}
                </label>
              )}
              {isCertLoaded && (
                <label className='cira-success'>{translateText("cira.mpsLoaded")}</label>
              )}
              {this.state.isError && (
                <label className='cira-error'> * {this.state.mpsCertErrorMsg}</label>
              )}
            </div>
            <div className={lineHeight}>
              {this.state.profileConfigError && (
                <label className="cira-error">
                  * {this.state.profileConfigError}
                </label>
              )}
              <button
                className="cursor cira-submit"
                type="submit"
                disabled={this.props.isEdit ? !(isDisabled && isValid && !isMatch(this.state.ciraConfig, this.state.oldCiraConfig)) : !(isDisabled && isValid)}
              >
                {this.props.isEdit ? translateText("cira.save") : translateText("cira.create")}
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

CiraConfigForm.contextType = DomainContext;
