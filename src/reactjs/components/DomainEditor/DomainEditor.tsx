/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from "react";
import { DomainGrid } from "./DomainGrid";
import { Button } from "../shared/btn/Btn";
import { translateText } from "../shared/Methods";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popup } from "../shared/popup/Popup";
import SnackBar from "../shared/SnackBar";
import { encodeSpecialCharacters } from "../shared/Utilities";
import {DomainFlyout} from './DomainFlyout';

import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import "./DomainEditor.scss";
import { Consumer, DomainContext } from "../shared/context/BasicContextProvider";
import { Domain } from "domain";
import { HttpClient } from "../services/HttpClient";

//adds all the solid-svg icons into the library to prevent eplicit imports
const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);
library.add(...iconList);

export interface domainProps {
  rpsServer: string;
}

export interface domainState {
  openFlyout?: boolean;
  updateDomainGrid?: boolean;
  selectedDomain?: any;
  showPopup?: boolean;
  showMessage?: boolean;
  message?: string;
  type?: string;
}

export class DomainEditor extends React.Component<domainProps, domainState> {
  constructor(props: domainProps) {
    super(props);
    this.state = {
      openFlyout: false,
      updateDomainGrid: false,
      selectedDomain: "",
      showPopup: false,
      showMessage: false,
      message: "",
      type: "",
    };
  }

  getSelectedDomain = (domain) =>
    this.setState({
      selectedDomain: domain,
    });

  togglePopup = () => this.setState({ showPopup: !this.state.showPopup });

  handleChange = () => this.setState({ openFlyout: !this.state.openFlyout });

  confirmDelete = async () => {
    const { rpsKey } = this.context.data;
    let domainName = encodeSpecialCharacters(this.state.selectedDomain[0].Name);
    const response = await HttpClient.delete(`${this.props.rpsServer}/api/v1/admin/domains/${domainName}`, rpsKey);

    if (response === `Domain ${domainName} successfully deleted`) {
      this.setState({
        showMessage: true,
        message: response,
        type: `success`,
        updateDomainGrid: !this.state.updateDomainGrid,
        selectedDomain: "",
        showPopup: !this.state.showPopup,
      });
    } else {
      this.setState({
        showMessage: true,
        message: response,
        showPopup: !this.state.showPopup,
        type: `error`,
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

  //callback function for handling CIRA config creation message display
  notificationCallback = (success, message) => {
    if (success) {
      this.setState({
        showMessage: true,
        message: message,
        type: `success`,
        updateDomainGrid: !this.state.updateDomainGrid,
        selectedDomain: "",
        openFlyout: false,
      });
    } else {
      this.setState({
        showMessage: true,
        message: message,
        type: `error`,
        openFlyout: false,
      });
    }
    //Clears the message on the UI after 4 seconds
    this.showNotification();
  };

  render() {
    let {
      updateDomainGrid,
      selectedDomain,
      showPopup,
      showMessage,
      openFlyout,
      message,
      type,
    } = this.state;
    return (
      <>
        {showMessage && <SnackBar message={message} type={type} />}
        <div className="domain-toolbar">
        {selectedDomain.length > 0 && (
            <Button className="btn-delete" cta={this.togglePopup}>
              <FontAwesomeIcon icon="trash" size="xs" />
              &nbsp;&nbsp;{translateText("domain.delete")}
            </Button>
          )}
          <Button className="btn-create" cta={this.handleChange}>
            <FontAwesomeIcon icon="plus-circle" size="xs" />
            &nbsp;&nbsp;{translateText("domain.new")}
          </Button>
        </div>
        <Consumer>
        { ({data}) =><DomainGrid
          rpsServer={this.props.rpsServer}
          updateDomainGrid={updateDomainGrid}
          getSelectedDomain={this.getSelectedDomain}
          rpsKey={data.rpsKey}
        />}
        </Consumer>
        {openFlyout && (
          <DomainFlyout
            close={this.handleChange}
            rpsServer={this.props.rpsServer}
            notificationCallback={this.notificationCallback}
          />
        )}
        {showPopup && (
          <Popup
            text={`Do you want to delete ${selectedDomain[0].Name} domain?`}
            closePopup={this.togglePopup}
            confirm={this.confirmDelete}
            className="profile-popup"
          />
        )}
      </>
    );
  }
}

DomainEditor.contextType = DomainContext;
