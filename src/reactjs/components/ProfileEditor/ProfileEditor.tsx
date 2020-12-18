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
  selectedProfile: any;
  openFlyout: boolean;
  showPopup: boolean;
  showMessage: boolean;
  message: any;
  type: string;
  updateProfileGrid: boolean;
  isEdit: boolean; 
}

/**
 * Wrapper component for Profile control to display the profile grids and header toolbar
 */
export class Profile extends React.Component<ProfileProps, ProfileStates> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      selectedProfile: "",
      openFlyout: false,
      showPopup: false,
      showMessage: false,
      message: "",
      type: "",
      updateProfileGrid: false,
      isEdit: false, 
    };
  }

  getselectedProfile = (selectedProfile) => {
    this.setState({ selectedProfile: selectedProfile });
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
        selectedProfile: "",
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
    this.togglePopup();
    let profileName = encodeSpecialCharacters(
      this.state.selectedProfile[0].profileName
    );
    const response = await HttpClient.delete(`${this.props.rpsServer}/api/v1/admin/profiles/${profileName}`, rpsKey)

    if (
      response ===
      `Profile ${this.state.selectedProfile[0].profileName} successfully deleted`
    ) {
      this.setState({
        showMessage: true,
        message: response,
        type: `success`,
        updateProfileGrid: !this.state.updateProfileGrid,
        selectedProfile: "",
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

  handleEdit = () => {
    this.setState({
      openFlyout: !this.state.openFlyout,
      isEdit: true
    })
  }

  // open/close create profile flyout
  handleChange = () => this.setState({ openFlyout: !this.state.openFlyout, isEdit: false});

 
  render() {
    let {
      selectedProfile,
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
          {selectedProfile.length > 0 && (
            <Button
              className="profile-button btn-delete"
              onClick={this.togglePopup}
            >
              <FontAwesomeIcon icon="trash" size="xs" />
              &nbsp;&nbsp;{translateText("profiles.delete")}
            </Button>
          )}
          {selectedProfile.length > 0 && (
            <Button
              className="profile-button btn-edit"
              onClick={this.handleEdit}
            >
              <FontAwesomeIcon icon="edit" size="xs" />
              &nbsp;&nbsp;{translateText("profiles.edit")}
            </Button>
          )}
          <Button className="profile-button btn-create" onClick={this.handleChange}>
            {" "}
            <FontAwesomeIcon icon="plus-circle" size="xs" />
            &nbsp;&nbsp; {translateText("profiles.new")}{" "}
          </Button>
        </div>
        <Consumer>
          {
            ({data}) =><ProfileGrid
            rpsServer={this.props.rpsServer}
            getselectedProfile={(items) => this.getselectedProfile(items)}
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
            slectedProfiles={this.state.selectedProfile}
            isEdit={this.state.isEdit}
          />}
          </Consumer>
        )}
        {showPopup && (
          <Popup
            text={`Do you want to delete ${selectedProfile[0].profileName} profile?`}
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
