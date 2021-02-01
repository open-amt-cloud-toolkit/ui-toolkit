/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { translateText } from '../shared/Methods'
import isMatch from 'lodash/isMatch'
import {
  isFalsy,
  nameValidation,
  passwordLengthValidation,
  passwordValidation
} from '../shared/Utilities'

export interface ProfileConigFormProps {
  stateVariables: any
  propValiables: any
  isActivationSelected: any
  handleShowPassword: any
  notificationCallback: any
  handleSubmit: any
  toggleCiraPopup: any
  handleOnBlur: any
  handleClick: any
  handleChange: any
  toggleNetworkPopup: any
  handleShowMEBXPassword: any
}
/* to do */
export class ProfileConfigForm extends React.Component<ProfileConigFormProps> {
  render (): React.ReactNode {
    const { isEdit, onClose } = this.props.propValiables
    const {
      ciraConfigs,
      profileFormDetails,
      showMEBXPassword,
      showPassword,
      profileNameBlur,
      amtPasswordBlur,
      randomPasswordLengthBlur,
      randomMEBXPasswordLengthBlur,
      mebxPasswordBlur,
      oldProfileFormDetails
    } = this.props.stateVariables
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
      mebxPassword
    } = profileFormDetails
    const profilenameValidation = nameValidation(profileName)
    const amtPasswordValidation = passwordValidation(amtPassword)
    const mebxPasswordValidation = passwordValidation(mebxPassword)
    const randomPasswordValidation = passwordLengthValidation(
      randomPasswordLength
    )
    const randomMEBXPasswordValidation = passwordLengthValidation(
      randomMEBXPasswordLength
    )
    const isValidAMTPassword =
      isFalsy(generateRandomPassword) && isFalsy(randomPasswordValidation)
        ? true
        : !!(amtPassword && amtPasswordValidation)
    const isValidMEBXPassword: boolean = activation === 'ccmactivate' ? true : (isFalsy(generateRandomMEBxPassword) && isFalsy(randomMEBXPasswordValidation) ? true : !!(mebxPassword && mebxPasswordValidation))

    const isValidProfileName: boolean = isFalsy(profileName) && profilenameValidation

    const isValid = isValidProfileName && isValidAMTPassword && isValidMEBXPassword && activation
    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSubmit}>
          <div className="profile-header">
            <div className="inlineblock">
              {isFalsy(isEdit)
                ? translateText('profiles.editProfile')
                : translateText('profiles.newProfileDetails')}
            </div>
            <div className="inlineblock floatright cursor" onClick={onClose}>
              {' '}
              <FontAwesomeIcon icon="window-close" size="xs" />
              &nbsp;&nbsp; {translateText('profiles.close')}
            </div>
          </div>
          <div className="p10">
            <div className="p5">
              <label className="profile-label">
                {translateText('profiles.profileName')} *
              </label>
              <input
                type="text"
                name="profileName"
                onChange={this.props.handleChange}
                onBlur={this.props.handleOnBlur}
                value={profileName}
                disabled={isEdit}
              />
              {isFalsy(profileNameBlur) && !isFalsy(profilenameValidation) && (
                <label className="profile-error">
                  {' '}
                  * {translateText('profiles.errors.profileNameValidation')}
                </label>
              )}
            </div>
            <div className="p5">
              <label className="profile-label">
                {translateText('profiles.activation')} *
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
              <label className="profile-generate-password profile-label">
                {translateText('profiles.generateRandomPassword')}
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
            {!isFalsy(generateRandomPassword) && (
              <div className="p5">
                <label className="profile-label">
                  {translateText('profiles.amtPassword')}
                </label>
                <input
                  type={isFalsy(showPassword) ? 'text' : 'password'}
                  name="amtPassword"
                  onChange={this.props.handleChange}
                  onBlur={this.props.handleOnBlur}
                />{' '}
                &nbsp;&nbsp;
                {isFalsy(showPassword) ? (
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
                {isFalsy(amtPasswordBlur) && !isFalsy(amtPassword) && (
                  <label className="profile-error">
                    {' '}
                    * {translateText('profiles.errors.amtPassword')}
                  </label>
                )}
                {isFalsy(amtPasswordBlur) && !isFalsy(amtPasswordValidation) && (
                  <label className="profile-error">
                    {' '}
                    * {translateText('profiles.errors.amtPasswordValidation')}
                  </label>
                )}
              </div>
            )}
            {isFalsy(generateRandomPassword) && (
              <div className="p5">
                <label className="profile-random-password profile-label">
                  {translateText('profiles.randomPasswordLength')}{' '}
                  {isFalsy(generateRandomPassword) ? '*' : ''}
                </label>
                <input
                  type="text"
                  style={{ width: '50px' }}
                  name="randomPasswordLength"
                  value={isFalsy(amtPassword) ? '' : randomPasswordLength}
                  onChange={this.props.handleChange}
                  disabled={amtPassword}
                  onBlur={this.props.handleOnBlur}
                />
                {isFalsy(randomPasswordLengthBlur) &&
                  !isFalsy(amtPassword) &&
                  !isFalsy(randomPasswordValidation) && (
                  <label className="profile-error">
                    {' '}
                      *{' '}
                    {translateText(
                      'profiles.errors.randomPasswordValidation'
                    )}{' '}
                  </label>
                )}
              </div>
            )}
            { activation !== 'ccmactivate' && <div className="p5">
              <label className="profile-generate-password profile-label">
                {translateText('profiles.generateRandomMEBxPassword')}
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
            </div>}
            {activation !== 'ccmactivate' && !isFalsy(generateRandomMEBxPassword) && (
              <div className="p5">
                <label className="profile-label">
                  {translateText('profiles.mebxPassword')}
                </label>
                <input
                  type={isFalsy(showMEBXPassword) ? 'text' : 'password'}
                  name="mebxPassword"
                  onChange={this.props.handleChange}
                  onBlur={this.props.handleOnBlur}
                />{' '}
                &nbsp;&nbsp;
                {isFalsy(showMEBXPassword) ? (
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
                {isFalsy(mebxPasswordBlur) && !isFalsy(mebxPassword) && (
                  <label className="profile-error">
                    {' '}
                    * {translateText('profiles.errors.mebxPassword')}
                  </label>
                )}
                {isFalsy(mebxPasswordBlur) && !isFalsy(mebxPasswordValidation) && (
                  <label className="profile-error">
                    {' '}
                    * {translateText('profiles.errors.mebxPasswordValidation')}
                  </label>
                )}
              </div>
            )}

            {isFalsy(generateRandomMEBxPassword) && activation !== 'ccmactivate' && (
              <div className="p5">
                <label className="profile-random-password profile-label">
                  {translateText('profiles.randomMEBXPasswordLength')}{' '}
                  {isFalsy(generateRandomPassword) ? '*' : ''}
                </label>
                <input
                  type="text"
                  style={{ width: '50px' }}
                  name="randomMEBXPasswordLength"
                  value={isFalsy(mebxPassword) ? '' : randomMEBXPasswordLength}
                  onChange={this.props.handleChange}
                  disabled={mebxPassword}
                  onBlur={this.props.handleOnBlur}
                />
                {isFalsy(randomMEBXPasswordLengthBlur) &&
                  !isFalsy(mebxPassword) &&
                  !isFalsy(randomMEBXPasswordValidation) && (
                  <label className="profile-error">
                    {' '}
                      *{' '}
                    {translateText(
                      'profiles.errors.randomMEBXPasswordValidation'
                    )}{' '}
                  </label>
                )}
              </div>
            )}
            <div className="p5" onChange={this.props.handleChange}>
              <label className="profile-generate-password profile-label">
                {/* {translateText("profiles.dhcpEnabled")} */}
                Network Configuration
              </label>
              <input
                type="radio"
                value="dhcp_enabled"
                name="networkConfigName"
                onClick={this.props.handleChange}
                checked={networkConfigName === 'dhcp_enabled'}
              />DHCP
              <input
                type="radio"
                value="dhcp_disabled"
                name="networkConfigName"
                onClick={this.props.handleChange}
                checked={networkConfigName === 'dhcp_disabled'}
              />Static
            </div>
            {/* <div className="p5">
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
            </div> */}

            {networkConfigName !== 'dhcp_disabled' && (
              <div className="p5">
                <label className="profile-config-script">
                  {translateText('profiles.ciraConfiguration')}
                </label>
                <select
                  className="profile-select"
                  name="ciraConfigName"
                  onChange={this.props.handleChange}
                  value={ciraConfigName}
                >
                  <option value="">Choose</option>
                  {ciraConfigs?.map(({ configName }) => (
                    <option value={configName} key={configName}>
                      {configName}
                    </option>
                  ))}
                </select>
                <label
                  className="newConfig cursor"
                  onClick={this.props.toggleCiraPopup}
                >
                  <FontAwesomeIcon icon="plus-circle" size="xs" />{' '}
                  {translateText('profiles.newCira')}
                </label>
              </div>
            )}
            <div className="p5">
              <button
                type="submit"
                className="cursor profile-submit"
                disabled={
                  isFalsy(isEdit)
                    ? !(
                      isFalsy(isValid) &&
                      !isFalsy(isMatch(profileFormDetails, oldProfileFormDetails))
                    )
                    : !isFalsy(isValid)
                }
              >
                {isFalsy(isEdit)
                  ? translateText('profiles.save')
                  : translateText('profiles.create')}
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    )
  }
}
