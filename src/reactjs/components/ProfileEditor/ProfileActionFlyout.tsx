/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from "react";
import { Flyout } from "../shared/flyout/flyout";
import { camelCaseReshape } from "../shared/Utilities";
import { RenderChildPopup } from "../shared/popup/Popup";
import { CiraConfigForm } from "../shared/CiraConfigForm";
import { HttpClient } from "../services/HttpClient";
import { ciraDataModal } from "../CIRAEditor/CiraGridConfig";
import { networkDataModal } from "../NetworkEditor/NetworkGridConfig";
import { ProfileConfigForm } from "./ProfileConfigForm";
import { NetworkProfileForm } from "../shared/NetworkProfileForm";
import isFilter from "lodash/filter";
import omit from "lodash/omit";
require("./Profile.scss");

export interface profileFlyoutProps {
  onClose: any;
  rpsServer: any;
  mpsServer: string;
  createProfileNotification: any;
  rpsKey: string;
  slectedProfiles?: any;
  isEdit: boolean;
  profilesList?: any;
}

export interface profileFlyoutState {
  profileName?: any;
  amtPassword?: any;
  generateRandomPassword?: any;
  randomPasswordLength?: any;
  ciraConfigName?: any;
  activation?: any;
  onBlurError?: any;
  randomPasswordLength_blur?: any;
  amtPassword_blur?: any;
  profileName_blur?: any;
  showCiraPopup?: any;
  ciraConfigs?: any;
  showPassword?: boolean;
  oldProfileFormDetails?: any;
  profileFormDetails?: any;
  networkProfileName?: any;
  networkProfiles?: any;
  showNetworkPopup?: boolean;
  showMEBXPassword?: boolean;
}

export class ProfileActionFlyout extends React.Component<
  profileFlyoutProps,
  profileFlyoutState
  > {
  constructor(props: profileFlyoutProps) {
    super(props);
    this.state = {
      onBlurError: false,
      showCiraPopup: false,
      ciraConfigs: [],
      showPassword: false,
      showMEBXPassword: false,
      oldProfileFormDetails: props.isEdit
        ? {
          ...props.slectedProfiles[0],
          amtPassword: "",
          mebxPassword: "",
          generateRandomPassword:
            props.slectedProfiles[0].generateRandomPassword || "",
          randomPasswordLength:
            (props.slectedProfiles[0].randomPasswordLength &&
              JSON.stringify(
                props.slectedProfiles[0].randomPasswordLength
              )) ||
            "",
          randomMEBXPasswordLength:
            (props.slectedProfiles[0].randomMeBxPasswordLength &&
              JSON.stringify(
                props.slectedProfiles[0].randomMeBxPasswordLength
              )) ||
            "",
          generateRandomMEBxPassword:
            props.slectedProfiles[0].generateRandomMeBxPassword || "",
          networkConfigName: props.slectedProfiles[0].networkConfigName
        }
        : {},
      profileFormDetails: props.isEdit
        ? {
          ...props.slectedProfiles[0],
          amtPassword: "",
          mebxPassword: "",
          generateRandomPassword:
            props.slectedProfiles[0].generateRandomPassword || "",
          randomPasswordLength:
            (props.slectedProfiles[0].randomPasswordLength &&
              JSON.stringify(
                props.slectedProfiles[0].randomPasswordLength
              )) ||
            "",
          randomMEBXPasswordLength:
            (props.slectedProfiles[0].randomMeBxPasswordLength &&
              JSON.stringify(
                props.slectedProfiles[0].randomMeBxPasswordLength
              )) ||
            "",
          generateRandomMEBxPassword:
            props.slectedProfiles[0].generateRandomMeBxPassword || "",
        }
        : {},
      showNetworkPopup: false,
    };
  }

  componentDidMount() {
    this.getCIRAConfigs();
    this.getNetworkProfiles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props && this.props.isEdit) {
      if (this.props.slectedProfiles.length === 1) {
        const {
          ciraConfigName,
          networkConfigName,
          generateRandomPassword,
          randomPasswordLength,
          generateRandomMeBxPassword,
          randomMeBxPasswordLength,
        } = this.props.slectedProfiles[0];
        const { networkProfiles } = this.state;
        this.setState((prevState) => ({
          oldProfileFormDetails: {
            ...this.props.slectedProfiles[0],
            ciraConfigName,
            networkConfigName: networkConfigName || "",
            amtPassword: "",
            mebxPassword: "",
            generateRandomPassword: generateRandomPassword || "",
            randomPasswordLength:
              (randomPasswordLength && JSON.stringify(randomPasswordLength)) ||
              "",
            generateRandomMEBxPassword: generateRandomMeBxPassword || "",
            randomMEBXPasswordLength:
              (randomMeBxPasswordLength &&
                JSON.stringify(randomMeBxPasswordLength)) ||
              "",
          },
          profileFormDetails: {
            ...this.props.slectedProfiles[0],
            ciraConfigName,
            networkConfigName: networkConfigName || "",
            amtPassword: "",
            mebxPassword: "",
            generateRandomPassword: generateRandomPassword || "",
            randomPasswordLength:
              (randomPasswordLength && JSON.stringify(randomPasswordLength)) ||
              "",
            generateRandomMEBxPassword: generateRandomMeBxPassword || "",
            randomMEBXPasswordLength:
              (randomMeBxPasswordLength &&
                JSON.stringify(randomMeBxPasswordLength)) ||
              "",
          },
        }));
      } else {
        this.props.onClose();
      }
    }
  }

  //fetches all the CIRA config scripts from the server
  getCIRAConfigs = () =>
    HttpClient.get(
      `${this.props.rpsServer}/api/v1/admin/ciraconfigs`,
      this.props.rpsKey
    ).then((data) => {
      this.setState({
        ciraConfigs: data.map((config) =>
          camelCaseReshape(config, ciraDataModal)
        ),
      });
    });

  //fetches all the Network profiles from the serevr
  getNetworkProfiles = () =>
    HttpClient.get(
      `${this.props.rpsServer}/api/v1/admin/networkconfigs`,
      this.props.rpsKey
    ).then((data) =>
      this.setState(
        {
          networkProfiles: data.map((network) =>
            camelCaseReshape(network, networkDataModal)
          ),
        },
        () => {
          if (this.props.isEdit) {
            const {
              networkProfiles,
              profileFormDetails,
              oldProfileFormDetails,
            } = this.state;
            this.setState({
              profileFormDetails: {
                ...profileFormDetails,
              },
              oldProfileFormDetails: {
                ...oldProfileFormDetails,
              },
            });
          }
        }
      )
    );

  handleChange = (e) => {
    e.persist();
    this.setState((prevState) => ({
      profileFormDetails: {
        ...prevState.profileFormDetails,
        [e.target.name]: e.target.value,
      },
    }));
  };

  handleClick = (e) => {
    e.persist();
    this.setState((prevState) => ({
      profileFormDetails: {
        ...prevState.profileFormDetails,
        [e.target.name]: e.target.checked,
      },
    }));
  };

  handleOnBlur = (e) => this.setState({ [`${e.target.name}_blur`]: true });

  toggleCiraPopup = (e) => {
    e.preventDefault();
    this.setState({ showCiraPopup: !this.state.showCiraPopup });
  };
  /*removeing  ciraConfigName and networkConfigName properties from the object if there is no value*/
  removeUnAssignedProperties = (obj) => {
    let newObj = {};
    Object.keys(obj).forEach((key) => {
      if (key === "ciraConfigName" || key === "networkConfigName") {
        if (obj[key]) {
          newObj[key] = obj[key];
        }
      } else {
        newObj[key] = obj[key];
      }
    });
    return newObj;
  };

  //Omits MEBx related fields from the request payload for client control mode of activation
  removeMEBxFieldsforCCM = obj => {
    return obj.activation === 'ccmactivate' ? omit(obj, 'generateRandomMEBxPassword', 'randomMEBXPasswordLength', 'mebxPasswordLength', 'mebxPassword') : obj;
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    let obj = {
      ...this.state.profileFormDetails,
      passwordLength:
        this.state.profileFormDetails.amtPassword &&
          !this.state.profileFormDetails.generateRandomPassword
          ? null
          : parseInt(this.state.profileFormDetails.randomPasswordLength),
      mebxPasswordLength:
        this.state.profileFormDetails.mebxPassword &&
          !this.state.profileFormDetails.generateRandomMEBxPassword
          ? null
          : parseInt(this.state.profileFormDetails.randomMEBXPasswordLength),
      ciraConfigName: this.state.profileFormDetails.networkConfigName !== "dhcp_disabled"
        ? this.state.profileFormDetails.ciraConfigName
        : ""
    };
    const payload = this.removeUnAssignedProperties(this.removeMEBxFieldsforCCM(obj));
    if (this.props.isEdit) {
      //Rest api to update the profile
      response = await HttpClient.patch(
        `${this.props.rpsServer}/api/v1/admin/profiles/edit`,
        JSON.stringify({ payload: payload }),
        this.props.rpsKey
      );
    } else {
      response = await HttpClient.post(
        `${this.props.rpsServer}/api/v1/admin/profiles/create`,
        JSON.stringify({ payload: payload }),
        this.props.rpsKey,
        false
      );
    }
    if (
      response ===
      `Profile ${this.state.profileFormDetails.profileName} successfully inserted` ||
      response ===
      `Profile ${this.state.profileFormDetails.profileName} successfully updated`
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
          profileFormDetails: {
            ...this.state.profileFormDetails,
            ciraConfigName: payload.configName,
          },
        },
        () => this.getCIRAConfigs()
      );
    }
  };

  createNotification = (status, response, payload) => {
    if (status) {
      this.setState(
        {
          showNetworkPopup: !this.state.showNetworkPopup,
          profileFormDetails: {
            ...this.state.profileFormDetails,
            networkConfigName: payload.profileName,
          },
        }
      );
    }
  };

  handleShowPassword = () =>
    this.setState({ showPassword: !this.state.showPassword });

  handleShowMEBXPassword = () =>
    this.setState({ showMEBXPassword: !this.state.showMEBXPassword });

  isActivationSelected = (activation) => (activation ? true : false);

  toggleNetworkPopup = () =>
    this.setState({
      showNetworkPopup: !this.state.showNetworkPopup,
    });

  render() {
    let { showCiraPopup, showNetworkPopup } = this.state;

    return (
      <React.Fragment>
        {showCiraPopup && (
          <RenderChildPopup className="">
            <CiraConfigForm
              close={this.toggleCiraPopup}
              rpsServer={this.props.rpsServer}
              mpsServer={this.props.mpsServer}
              notificationCallback={this.notificationCallback}
              showProfileError={true}
            />
          </RenderChildPopup>
        )}
        {showNetworkPopup && (
          <RenderChildPopup className="">
            <NetworkProfileForm
              close={this.toggleNetworkPopup}
              rpsServer={this.props.rpsServer}
              mpsServer={this.props.mpsServer}
              createNotification={this.createNotification}
              showProfileError={true}
            />
          </RenderChildPopup>
        )}
        <Flyout className="profile-actions">
          <ProfileConfigForm
            stateVariables={this.state}
            propValiables={this.props}
            isActivationSelected={this.isActivationSelected}
            handleShowPassword={this.handleShowPassword}
            notificationCallback={this.notificationCallback}
            handleSubmit={this.handleSubmit}
            toggleCiraPopup={this.toggleCiraPopup}
            handleOnBlur={this.handleOnBlur}
            handleClick={this.handleClick}
            handleChange={this.handleChange}
            toggleNetworkPopup={this.toggleNetworkPopup}
            handleShowMEBXPassword={this.handleShowMEBXPassword}
            rpsServer={this.props.rpsServer}
            mpsServer={this.props.mpsServer}
          />
        </Flyout>
      </React.Fragment>
    );
  }
}
