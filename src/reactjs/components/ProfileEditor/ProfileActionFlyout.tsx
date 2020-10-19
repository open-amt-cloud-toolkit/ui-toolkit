/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from "react";
import { Flyout } from "../shared/flyout/flyout";
import {
  passwordLengthValidation,
  nameValidation,
  passwordValidation,
} from "../shared/Utilities";
import { translateText } from "../shared/Methods";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RenderChildPopup } from "../shared/popup/Popup";
import { CiraConfigForm } from "../shared/CiraConfigForm";
import { HttpClient } from "../services/HttpClient";

require("./Profile.scss");

export interface profileFlyoutProps {
  onClose: any;
  rpsServer: any;
  createProfileNotification: any;
  rpsKey: string;
}

export interface profileFlyoutState {
  profileName?: any;
  amtPassword?: any;
  generateRandomPassword?: any;
  randomPasswordLength?: any;
  configName?: any;
  activation?: any;
  onBlurError?: any;
  randomPasswordLength_blur?: any;
  amtPassword_blur?: any;
  profileName_blur?: any;
  showCiraPopup?: any;
  ciraConfigs?: any;
  showPassword?: boolean
}

export class ProfileActionFlyout extends React.Component<
  profileFlyoutProps,
  profileFlyoutState
  > {
  constructor(props: profileFlyoutProps) {
    super(props);
    this.state = {
      profileName: "",
      amtPassword: "",
      generateRandomPassword: true,
      randomPasswordLength: "",
      configName: null,
      activation: "",
      onBlurError: false,
      showCiraPopup: false,
      ciraConfigs: [],
      showPassword: false
    };
  }

  componentDidMount() {
    this.getCIRAConfigs();
  }

  //fetches all the CIRA config scripts from the server
  getCIRAConfigs = () =>
    HttpClient.get(
      `${this.props.rpsServer}/api/v1/admin/ciraconfigs`, this.props.rpsKey
    ).then((data) => {
      this.setState({
        ciraConfigs: data,
      });
    });

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleClick = (e) => this.setState({ [e.target.name]: e.target.checked });

  handleOnBlur = (e) => this.setState({ [`${e.target.name}_blur`]: true });

  toggleCiraPopup = (e) => {
    e.preventDefault();
    this.setState({ showCiraPopup: !this.state.showCiraPopup });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      profileName: this.state.profileName,
      amtPassword: this.state.amtPassword,
      generateRandomPassword: this.state.generateRandomPassword,
      passwordLength: this.state.amtPassword && !this.state.generateRandomPassword ? null : parseInt(this.state.randomPasswordLength),
      ciraConfigName: this.state.configName,
      activation: this.state.activation,
    };
    let response = await HttpClient.post(`${this.props.rpsServer}/api/v1/admin/profiles/create`, JSON.stringify({ payload: payload }), this.props.rpsKey, false);
    if (
      response === `Profile ${this.state.profileName} successfully inserted`
    ) {
      this.props.createProfileNotification(true, response);
    } else {
      this.props.createProfileNotification(false, response);
    }
  };

  //callback function for handling the CIRA config script creation
  notificationCallback = (status, response, payload) => {
    if (status) {
      this.setState(
        {
          showCiraPopup: false,
          configName: payload.configName,
        },
        () => this.getCIRAConfigs()
      );
    }
  };

  handleShowPassword = () => this.setState({ showPassword: !this.state.showPassword })

  render() {
    let { onClose } = this.props;
    let isProfileNameValid = nameValidation(this.state.profileName);
    let isValidPassword =
      this.state.generateRandomPassword ||
      passwordValidation(this.state.amtPassword);
    let isValidPasswordLength = this.state.generateRandomPassword
      ? passwordLengthValidation(this.state.randomPasswordLength)
      : true;
    let isDisabled =
      isProfileNameValid && isValidPassword && isValidPasswordLength && this.state.activation;
    return (
      <React.Fragment>
        {this.state.showCiraPopup && (
          <RenderChildPopup className="">
            <CiraConfigForm
              close={this.toggleCiraPopup}
              rpsServer={this.props.rpsServer}
              notificationCallback={this.notificationCallback}
              showProfileError={true}
            />
          </RenderChildPopup>
        )}
        <Flyout className="profile-actions">
          <form onSubmit={this.handleSubmit}>
            <div className="profile-header">
              <div className="inlineblock">
                {translateText("profiles.newProfileDetails")}
              </div>
              <div className="inlineblock floatright cursor" onClick={onClose}>
                {" "}
                <FontAwesomeIcon icon="window-close" size="xs" />
                &nbsp;&nbsp; {translateText("profiles.close")}
              </div>
            </div>
            <div className="p10">
              <div className="p5">
                <label className="profile-label">
                  {translateText("profiles.profileName")} *
                </label>
                <input
                  type="text"
                  name="profileName"
                  onChange={this.handleChange}
                  onBlur={this.handleOnBlur}
                />
                {this.state.profileName_blur &&
                  !nameValidation(this.state.profileName) && (
                    <label className="profile-error">
                      {" "}
                      * {translateText("profiles.errors.profileNameValidation")}
                    </label>
                  )}
              </div>
              <div className="p5">
                <label className="profile-generate-password profile-label">
                  {translateText("profiles.generateRandomPassword")}
                </label>
                <input
                  type="checkbox"
                  name="generateRandomPassword"
                  onChange={this.handleClick}
                  checked={this.state.generateRandomPassword}
                  disabled={this.state.amtPassword}
                />
              </div>
              {!this.state.generateRandomPassword && (
                <div className="p5">
                  <label className="profile-label">
                    {translateText("profiles.amtPassword")}
                  </label>
                  <input
                    type={this.state.showPassword ? "text" : "password"}
                    name="amtPassword"
                    onChange={this.handleChange}
                    autoFocus
                    onBlur={this.handleOnBlur}
                  /> &nbsp;&nbsp;
                  {this.state.showPassword ? <FontAwesomeIcon icon="eye-slash" size="xs" onClick={this.handleShowPassword} /> : <FontAwesomeIcon icon="eye" size="xs" onClick={this.handleShowPassword} />}

                  {this.state.amtPassword_blur && !this.state.amtPassword && (
                    <label className="profile-error">
                      {" "}
                      * {translateText("profiles.errors.amtPassword")}
                    </label>
                  )}
                  {this.state.amtPassword_blur &&
                    !passwordValidation(this.state.amtPassword) && (
                      <label className="profile-error">
                        {" "}
                        *{" "}
                        {translateText("profiles.errors.amtPasswordValidation")}
                      </label>
                    )}
                </div>
              )}
              {this.state.generateRandomPassword && <div className="p10">
                <label className="profile-random-password profile-label">
                  {translateText("profiles.randomPasswordLength")}{" "}
                  {this.state.generateRandomPassword ? "*" : ""}
                </label>
                <input
                  type="text"
                  style={{ width: "50px" }}
                  name="randomPasswordLength"
                  value={
                    this.state.amtPassword
                      ? ""
                      : this.state.randomPasswordLength
                  }
                  onChange={this.handleChange}
                  disabled={this.state.amtPassword}
                  onBlur={this.handleOnBlur}
                />
                {this.state.randomPasswordLength_blur &&
                  !this.state.amtPassword &&
                  !passwordLengthValidation(
                    this.state.randomPasswordLength
                  ) && (
                    <label className="profile-error">
                      {" "}
                      *{" "}
                      {translateText(
                        "profiles.errors.randomPasswordValidation"
                      )}{" "}
                    </label>
                  )}
              </div>}
              <div className="p5">
                <label className="profile-config-script">
                  {translateText("profiles.ciraConfiguration")}
                </label>
                <select
                  className="profile-select"
                  name="configName"
                  onChange={this.handleChange}
                  value={this.state.configName}
                >
                  <option value="">Choose</option>
                  {this.state.ciraConfigs &&
                    this.state.ciraConfigs.map(({ ConfigName }) => (
                      <option value={ConfigName} key={ConfigName}>
                        {ConfigName}
                      </option>
                    ))}
                </select>
                <label
                  className="newConfig cursor"
                  onClick={this.toggleCiraPopup}
                >
                  <FontAwesomeIcon icon="plus-circle" size="xs" /> New CIRA
                </label>
              </div>
              <div className="p5">
                <label className="profile-label">
                  {translateText("profiles.activation")} *
                </label>
                {/* <input
                  type="text"
                  name="activation"
                  onChange={this.handleChange}
                /> */}
                <select
                  name="activation"
                  className="profile-select"
                  onChange={this.handleChange}>
                  <option value="" key="select">select activation mode</option>
                  <option value="acmactivate" key="acmactivate">Admin Control Mode</option>
                  <option value="ccmactivate" key="ccmactivate">Client Control Mode</option>
                </select>
              </div>
              <div className="p5">
                <button type="submit" className="cursor profile-submit" disabled={!isDisabled}>
                  {translateText("profiles.create")}
                </button>
              </div>
            </div>
          </form>
        </Flyout>
      </React.Fragment>
    );
  }
}
