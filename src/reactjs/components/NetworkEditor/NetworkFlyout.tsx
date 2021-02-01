/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react'
import { Flyout } from '../shared/flyout'
import { NetworkProfileForm } from '../shared/NetworkProfileForm'

export interface NetworkFlyoutProps {
  close?: any
  rpsServer?: any
  createNotification?: any
  selectedNetwork?: any
  isEdit?: boolean
}

export class NetworkFlyout extends React.Component<NetworkFlyoutProps, {}> {
  render (): React.ReactNode {
    const {
      close,
      rpsServer,
      isEdit,
      selectedNetwork,
      createNotification
    } = this.props
    return (
      <Flyout className="network-flyout">
        <NetworkProfileForm
          close={close}
          rpsServer={rpsServer}
          selectedNetwork={selectedNetwork}
          createNotification={createNotification}
          isEdit={isEdit}
        />
      </Flyout>
    )
  }
}
