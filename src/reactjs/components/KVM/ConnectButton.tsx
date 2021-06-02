/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react'
import './ConnectButton.scss'

export interface ConnectProps {
  kvmstate: number
  handleConnectClick: (e: any) => void
}

export class ConnectButton extends React.Component<ConnectProps, {}> {
  render (): React.ReactNode {
    return (
      <button className="button" onClick={this.props.handleConnectClick}>
        {this.props.kvmstate === 1 ? 'Connecting KVM' : (this.props.kvmstate === 2 ? 'Disconnect KVM' : 'Connect KVM')}
      </button>
    )
  }
}
