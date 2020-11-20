/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from "react";
import { Flyout } from "../shared/flyout";
import "./CiraEditor.scss";
import { CiraConfigForm } from "../shared/CiraConfigForm";

export interface CiraCongigProps {
  close?: any;
  rpsServer?: any;
  createNotification?: any;
}

/**
 * Wrapper component for rendering flyout and create CIRA config form
 */
export class CiraConfigFlyout extends React.Component<CiraCongigProps> {
  render() {
    return (
      <Flyout className="cira-config">
        <CiraConfigForm
          notificationCallback={this.props.createNotification}
          close={this.props.close}
          rpsServer={this.props.rpsServer}
          
        />
      </Flyout>
    );
  }
}
