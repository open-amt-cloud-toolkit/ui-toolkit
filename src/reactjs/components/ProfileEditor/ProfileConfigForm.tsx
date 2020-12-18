/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translateText } from "../shared/Methods";
import isFilter from "lodash/filter";
import isMatch from "lodash/isMatch";
import {
  nameValidation,
  passwordLengthValidation,
  passwordValidation,
} from "../shared/Utilities";

export interface ProfileConigFormProps {
  stateVariables: any;
  propValiables: any;
  isActivationSelected: any;
  handleShowPassword: any;
  notificationCallback: any;
  handleSubmit: any;
  toggleCiraPopup: any;
  handleOnBlur: any;
  handleClick: any;
  handleChange: any;
  toggleNetworkPopup: any;
  handleShowMEBXPassword: any;
}

export interface ProfileConfigFormState {
  staticIP: boolean;
}
/*to do */
export class ProfileConfigForm extends React.Component<
  ProfileConigFormProps,
  ProfileConfigFormState
> {
  render() {
    const { isEdit, onClose } = this.props.propValiables;
    const {
      ciraConfigs,
      networkProfiles,
      profileFormDetails,
      showMEBXPassword,
      showPassword,
      profileName_blur,
      amtPassword_blur,
      randomPasswordLength_blur,
      randomMEBXPasswordLength_blur,
      mebxPassword_blur,
      oldProfileFormDetails,
    } = this.props.stateVariables;
    const {
      profileName,
      generateRandomPassword,
      generateRandomMEBxPassword,
      amtPassword,
      randomPasswordLength,
      randomMEBXPasswordLength,
      networkConfigName,
      ciraConfigName,
      activation,
      staticIP,
      mebxPassword,
    } = profileFormDetails;
    const networkOptions = staticIP
      ? isFilter(networkProfiles, { dhcpEnabled: true })
      : isFilter(networkProfiles, { dhcpEnabled: false });
    const profilenameValidation = nameValidation(profileName);
    const amtPasswordValidation = passwordValidation(amtPassword);
    const mebxPasswordValidation = passwordValidation(mebxPassword);
    const randomPasswordValidation = passwordLengthValidation(
      randomPasswordLength
    );
    const randomMEBXPasswordValidation = passwordLengthValidation(
      randomMEBXPasswordLength
    );
    const isValidAMTPassword =
      generateRandomPassword && randomPasswordValidation
        ? true
        : amtPassword && amtPasswordValidation
        ? true
        : false;
    const isValidMEBXPassword = generateRandomMEBxPassword && randomMEBXPasswordValidation ? true : mebxPassword && mebxPasswordValidation ? true : false;

    const isValidProfileName = profileName && profilenameValidation;

    const isValid = isValidProfileName && isValidAMTPassword && isValidMEBXPassword && activation;
    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSubmit}>
          <div className="profile-header">
            <div className="inlineblock">
              {isEdit
                ? translateText("profiles.editProfile")
                : translateText("profiles.newProfileDetails")}
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
                onChange={this.props.handleChange}
                onBlur={this.props.handleOnBlur}
                value={profileName}
                disabled={isEdit}
              />
              {profileName_blur && !profilenameValidation && (
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
                className="checkbox-input"
                type="checkbox"
                name="generateRandomPassword"
                onChange={this.props.handleClick}
                checked={generateRandomPassword}
                disabled={amtPassword}
                value={generateRandomPassword}
              />
            </div>
            {!generateRandomPassword && (
              <div className="p5">
                <label className="profile-label">
                  {translateText("profiles.amtPassword")}
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="amtPassword"
                  onChange={this.props.handleChange}
                  onBlur={this.props.handleOnBlur}
                />{" "}
                &nbsp;&nbsp;
                {showPassword ? (
                  <FontAwesomeIcon
                    icon="eye-slash"
                    size="xs"
                    onClick={this.props.handleShowPassword}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="eye"
                    size="xs"
                    onClick={this.props.handleShowPassword}
                  />
                )}
                {amtPassword_blur && !amtPassword && (
                  <label className="profile-error">
                    {" "}
                    * {translateText("profiles.errors.amtPassword")}
                  </label>
                )}
                {amtPassword_blur && !amtPasswordValidation && (
                  <label className="profile-error">
                    {" "}
                    * {translateText("profiles.errors.amtPasswordValidation")}
                  </label>
                )}
              </div>
            )}
            {generateRandomPassword && (
              <div className="p5">
                <label className="profile-random-password profile-label">
                  {translateText("profiles.randomPasswordLength")}{" "}
                  {generateRandomPassword ? "*" : ""}
                </label>
                <input
                  type="text"
                  style={{ width: "50px" }}
                  name="randomPasswordLength"
                  value={amtPassword ? "" : randomPasswordLength}
                  onChange={this.props.handleChange}
                  disabled={amtPassword}
                  onBlur={this.props.handleOnBlur}
                />
                {randomPasswordLength_blur &&
                  !amtPassword &&
                  !randomPasswordValidation && (
                    <label className="profile-error">
                      {" "}
                      *{" "}
                      {translateText(
                        "profiles.errors.randomPasswordValidation"
                      )}{" "}
                    </label>
                  )}
              </div>
            )}
            <div className="p5">
              <label className="profile-generate-password profile-label">
                {translateText("profiles.generateRandomMEBxPassword")}
              </label>
              <input
                className="checkbox-input"
                type="checkbox"
                name="generateRandomMEBxPassword"
                onChange={this.props.handleClick}
                checked={generateRandomMEBxPassword}
                disabled={mebxPassword}
                value={generateRandomMEBxPassword}
              />
            </div>
            {!generateRandomMEBxPassword && (
              <div className="p5">
                <label className="profile-label">
                  {translateText("profiles.mebxPassword")}
                </label>
                <input
                  type={showMEBXPassword ? "text" : "password"}
                  name="mebxPassword"
                  onChange={this.props.handleChange}
                  onBlur={this.props.handleOnBlur}
                />{" "}
                &nbsp;&nbsp;
                {showMEBXPassword ? (
                  <FontAwesomeIcon
                    icon="eye-slash"
                    size="xs"
                    onClick={this.props.handleShowMEBXPassword}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="eye"
                    size="xs"
                    onClick={this.props.handleShowMEBXPassword}
                  />
                )}
                {mebxPassword_blur && !mebxPassword && (
                  <label className="profile-error">
                    {" "}
                    * {translateText("profiles.errors.mebxPassword")}
                  </label>
                )}
                {mebxPassword_blur && !mebxPasswordValidation && (
                  <label className="profile-error">
                    {" "}
                    * {translateText("profiles.errors.mebxPasswordValidation")}
                  </label>
                )}
              </div>
            )}

            {generateRandomMEBxPassword && (
              <div className="p5">
                <label className="profile-random-password profile-label">
                  {translateText("profiles.randomMEBXPasswordLength")}{" "}
                  {generateRandomPassword ? "*" : ""}
                </label>
                <input
                  type="text"
                  style={{ width: "50px" }}
                  name="randomMEBXPasswordLength"
                  value={mebxPassword ? "" : randomMEBXPasswordLength}
                  onChange={this.props.handleChange}
                  disabled={mebxPassword}
                  onBlur={this.props.handleOnBlur}
                />
                {randomMEBXPasswordLength_blur &&
                  !mebxPassword &&
                  !randomMEBXPasswordValidation && (
                    <label className="profile-error">
                      {" "}
                      *{" "}
                      {translateText(
                        "profiles.errors.randomMEBXPasswordValidation"
                      )}{" "}
                    </label>
                  )}
              </div>
            )}
            <div className="p5">
              <label className="profile-generate-password profile-label">
                {translateText("profiles.dhcpEnabled")}
              </label>
              <input
                className="checkbox-input"
                type="checkbox"
                name="staticIP"
                onChange={this.props.handleClick}
                checked={staticIP}
                value={staticIP}
              />
            </div>
            <div className="p5">
              <label className="profile-config-script">
                {translateText("profiles.networkProile")}
              </label>
              <select
                className="profile-select"
                name="networkConfigName"
                onChange={this.props.handleChange}
                value={networkConfigName}
              >
                <option value="">Choose</option>
                {networkOptions &&
                  networkOptions.map(({ profileName }) => (
                    <option value={profileName} key={profileName}>
                      {profileName}
                    </option>
                  ))}
              </select>
              <label
                className="newConfig cursor"
                onClick={this.props.toggleNetworkPopup}
              >
                <FontAwesomeIcon icon="plus-circle" size="xs" />{" "}
                {translateText("profiles.newNetwork")}
              </label>
            </div>

            {staticIP && (
              <div className="p5">
                <label className="profile-config-script">
                  {translateText("profiles.ciraConfiguration")}
                </label>
                <select
                  className="profile-select"
                  name="ciraConfigName"
                  onChange={this.props.handleChange}
                  value={ciraConfigName}
                >
                  <option value="">Choose</option>
                  {ciraConfigs &&
                    ciraConfigs.map(({ configName }) => (
                      <option value={configName} key={configName}>
                        {configName}
                      </option>
                    ))}
                </select>
                <label
                  className="newConfig cursor"
                  onClick={this.props.toggleCiraPopup}
                >
                  <FontAwesomeIcon icon="plus-circle" size="xs" />{" "}
                  {translateText("profiles.newCira")}
                </label>
              </div>
            )}
            <div className="p5">
              <label className="profile-label">
                {translateText("profiles.activation")} *
              </label>
              <select
                name="activation"
                className="profile-select"
                value={activation}
                onChange={this.props.handleChange}
              >
                <option value="" key="select">
                  select activation mode
                </option>
                <option value="acmactivate" key="acmactivate">
                  Admin Control Mode
                </option>
                <option value="ccmactivate" key="ccmactivate">
                  Client Control Mode
                </option>
              </select>
            </div>
            <div className="p5">
              <button
                type="submit"
                className="cursor profile-submit"
                disabled={
                  isEdit
                    ? !(
                        isValid &&
                        !isMatch(profileFormDetails, oldProfileFormDetails)
                      )
                    : !isValid
                }
              >
                {isEdit
                  ? translateText("profiles.save")
                  : translateText("profiles.create")}
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
