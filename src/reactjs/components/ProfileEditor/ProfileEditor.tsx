/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from "react";

import { ProfileGrid } from "./ProfileGrid";
import { ProfileActionFlyout } from "./ProfileActionFlyout";
import { Popup } from "../shared/popup/Popup";
import SnackBar from "../shared/SnackBar";
import { Button } from "../shared/btn/Btn";
import { translateText } from "../shared/Methods";
//importing all icons -- to be changed later
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { encodeSpecialCharacters } from "../shared/Utilities";
import { Consumer, DomainContext } from "../shared/context/BasicContextProvider";
import { HttpClient } from "../services/HttpClient";

//adds all the solid-svg icons into the library to prevent eplicit imports
const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);
library.add(...iconList);

export interface ProfileProps {
  rpsServer: string;
}

export interface ProfileStates {
  selectedDevices: any;
  openFlyout: boolean;
  showPopup: boolean;
  showMessage: boolean;
  message: any;
  type: string;
  updateProfileGrid: boolean;
}

/**
 * Wrapper component for Profile control to display the profile grids and header toolbar
 */
export class Profile extends React.Component<ProfileProps, ProfileStates> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      selectedDevices: "",
      openFlyout: false,
      showPopup: false,
      showMessage: false,
      message: "",
      type: "",
      updateProfileGrid: false,
    };
  }

  getSelectedDevices = (selectedDevices) => {
    this.setState({ selectedDevices: selectedDevices });
  };

  //Toggle the display of popup
  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };

  //callback function to handle the create profile notification
  createProfile = (success, response) => {
    if (success) {
      this.setState({
        showMessage: true,
        message: response,
        type: `success`,
        updateProfileGrid: !this.state.updateProfileGrid,
        selectedDevices: "",
        openFlyout: false,
      });
    } else {
      this.setState({
        showMessage: true,
        message: response,
        type: `error`,
        openFlyout: false,
      });
    }
    this.showNotification();
  };

  showNotification = () =>
    setTimeout(() => {
      this.setState({
        showMessage: false,
      });
    }, 4000);

  //call delete profile rest api and display notifications using snackbar
  confirmDelete = async () => {
    let {rpsKey} = this.context.data;
    console.info('context', rpsKey);
    this.togglePopup();
    let profileName = encodeSpecialCharacters(
      this.state.selectedDevices[0].ProfileName
    );
    const response = await HttpClient.delete(`${this.props.rpsServer}/api/v1/admin/profiles/${profileName}`, rpsKey)
    // const response = await fetch(
    //   `${this.props.rpsServer}/api/v1/admin/profiles/${profileName}`,
    //   {
    //     method: "DELETE",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       "X-RPS-API-KEY": "APIKEYFORRPS123!",
    //     },
    //   }
    // )
      // .then((data) => data.text())
      // .catch((error) => console.info("error", error));

    if (
      response ===
      `Profile ${this.state.selectedDevices[0].ProfileName} successfully deleted`
    ) {
      this.setState({
        showMessage: true,
        message: response,
        type: `success`,
        updateProfileGrid: !this.state.updateProfileGrid,
        selectedDevices: "",
      });
    } else {
      this.setState({
        showMessage: true,
        message: response,
        type: `error`,
      });
    }
    this.showNotification();
  };

  // open/close create profile flyout
  handleChange = () => this.setState({ openFlyout: !this.state.openFlyout });

  render() {
    let {
      selectedDevices,
      openFlyout,
      showMessage,
      showPopup,
      message,
      type,
    } = this.state;
    return (
      <React.Fragment>
        {showMessage && <SnackBar message={message} type={type} />}
        <div className="profile-toolbar">
          {selectedDevices.length > 0 && (
            <Button
              className="profile-button btn-delete"
              cta={this.togglePopup}
            >
              <FontAwesomeIcon icon="trash" size="xs" />
              &nbsp;&nbsp;{translateText("profiles.delete")}
            </Button>
          )}
          <Button className="profile-button btn-create" cta={this.handleChange}>
            {" "}
            <FontAwesomeIcon icon="plus-circle" size="xs" />
            &nbsp;&nbsp; {translateText("profiles.new")}{" "}
          </Button>
        </div>
        <Consumer>
          {
            ({data}) =><ProfileGrid
            rpsServer={this.props.rpsServer}
            getSelectedDevices={(items) => this.getSelectedDevices(items)}
            updateProfileGrid={this.state.updateProfileGrid}
            rpsKey={data.rpsKey}
          />}
        </Consumer>
        {openFlyout && (
          <Consumer>
          { ({data})=><ProfileActionFlyout
            onClose={this.handleChange}
            rpsServer={this.props.rpsServer}
            createProfileNotification={this.createProfile}
            rpsKey={data.rpsKey}
          />}
          </Consumer>
        )}
        {showPopup && (
          <Popup
            text={`Do you want to delete ${selectedDevices[0].ProfileName} profile?`}
            closePopup={this.togglePopup}
            confirm={this.confirmDelete}
            className="profile-popup"
          />
        )}
      </React.Fragment>
    );
  }
}

Profile.contextType = DomainContext;
