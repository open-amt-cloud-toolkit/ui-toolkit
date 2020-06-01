/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import * as React from 'react'
import { ConnectButton } from './Connectbutton'
import { DesktopSettings } from './Desktopsettings'
import AuditLogConnect from './AuditLogConnect';
require("./Header.scss");

export interface IHeaderProps {
  kvmstate: number,
  deviceId: string,
  server: string,
  handleConnectClick: (e: any) => void
  changeDesktopSettings: (settings: any) => void
  getConnectState: () => number
}

export class Header extends React.Component<IHeaderProps> {

  constructor(props: IHeaderProps) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <AuditLogConnect deviceId={this.props.deviceId} server={this.props.server}/>
        <ConnectButton handleConnectClick={this.props.handleConnectClick} kvmstate={this.props.kvmstate} />
        <DesktopSettings changeDesktopSettings={this.props.changeDesktopSettings} getConnectState={this.props.getConnectState}/>
      </div >
    )
  }
}