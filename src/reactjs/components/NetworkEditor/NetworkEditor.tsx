/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { Button } from '../shared/btn/Btn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { translateText } from '../shared/Methods'
import { NetworkGrid } from './NetworkGrid'

import './NetworkEditor.scss'
import { NetworkFlyout } from './NetworkFlyout'
import { Popup } from '../shared/popup/Popup'
import {
  Consumer,
  DomainContext
} from '../shared/context/BasicContextProvider'
import { HttpClient } from '../services/HttpClient'
import { encodeSpecialCharacters, isFalsy } from '../shared/Utilities'
import SnackBar from '../shared/SnackBar'
// adds all the solid-svg icons into the library to prevent eplicit imports
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon])
library.add(...iconList)

export interface NetworkEditorProps {
  rpsServer: string | null
}

export interface NetworkEditorState {
  openFlyout: boolean
  showPopup: boolean
  selectedNetwork: any
  isEdit?: boolean
  showMessage?: boolean
  message?: string
  type?: string
  updateNetworkGrid?: boolean
}

export class NetworkEditor extends React.Component<
NetworkEditorProps,
NetworkEditorState
> {
  constructor (props: NetworkEditorProps) {
    super(props)
    this.state = {
      openFlyout: false,
      showPopup: false,
      selectedNetwork: '',
      isEdit: false
    }
  }

  getSelectedNetwork = (network): void => {
    this.setState({
      selectedNetwork: network
    })
  }

  handleChange = (): void => {
    this.setState({
      openFlyout: !this.state.openFlyout,
      isEdit: false
    })
  }

  handleEdit = (): void =>
    this.setState({ openFlyout: !this.state.openFlyout, isEdit: true })

  togglePopup = (): void => {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  createNotification = (success, response): void => {
    console.info('in editor', success, response)
    if (isFalsy(success)) {
      this.setState({
        showMessage: true,
        message: response,
        type: 'success',
        updateNetworkGrid: !isFalsy(this.state.updateNetworkGrid),
        selectedNetwork: '',
        openFlyout: false
      })
    } else {
      this.setState({
        showMessage: true,
        message: response,
        type: 'error',
        openFlyout: false
      })
    }
    this.showNotification()
  }

  showNotification = (): ReturnType<typeof setTimeout> =>
    setTimeout(() => {
      this.setState({
        showMessage: false
      })
    }, 4000)

  confirmDelete = async (): Promise<any> => {
    const { rpsKey } = this.context.data
    const networkName = encodeSpecialCharacters(
      this.state.selectedNetwork[0].profileName
    )
    const server: string = this.props.rpsServer != null ? this.props.rpsServer : ''
    const response = await HttpClient.delete(
      `${server}/api/v1/admin/networkconfigs/${networkName}`,
      rpsKey
    )
    if (response === `NETWORK Config ${networkName} successfully deleted`) {
      this.setState({
        showPopup: !this.state.showPopup,
        showMessage: true,
        message: response,
        type: 'success',
        updateNetworkGrid: !isFalsy(this.state.updateNetworkGrid),
        selectedNetwork: ''
      })
    } else {
      this.setState({
        showPopup: !this.state.showPopup,
        showMessage: true,
        message: response,
        type: 'error'
      })
    }
    this.showNotification()
  }

  render (): React.ReactNode {
    const { openFlyout, showPopup, selectedNetwork, isEdit, showMessage, message, type } = this.state
    return (
      <React.Fragment>
        {isFalsy(showMessage) && <SnackBar message={message} type={type} />}
        <div className="network-toolbar">
          {selectedNetwork.length > 0 && (
            <Button
              className="network-button btn-delete"
              onClick={this.togglePopup}
            >
              <FontAwesomeIcon icon="trash" size="xs" />
              &nbsp;&nbsp;{translateText('network.delete')}
            </Button>
          )}
          {selectedNetwork.length > 0 && (
            <Button
              className="network-button btn-edit"
              onClick={this.handleEdit}
            >
              <FontAwesomeIcon icon="edit" size="xs" />
              &nbsp;&nbsp;{translateText('network.edit')}
            </Button>
          )}
          <Button
            className="network-button btn-create"
            onClick={this.handleChange}
          >
            <FontAwesomeIcon icon="plus-circle" size="xs" />
            &nbsp;&nbsp;{translateText('network.new')}
          </Button>
        </div>
        {openFlyout && (
          <NetworkFlyout
            close={this.handleChange}
            rpsServer={this.props.rpsServer}
            createNotification={this.createNotification}
            selectedNetwork={selectedNetwork}
            isEdit={isEdit}
          />
        )}
        <Consumer>
          {({ data }) => (
            <NetworkGrid
              rpsServer={this.props.rpsServer}
              getSelectedNetwork={this.getSelectedNetwork}
              rpsKey={data.rpsKey}
              updateNetworkGrid={this.state.updateNetworkGrid}
            />
          )}
        </Consumer>
        {showPopup && (
          <Popup
            text={`Do you want to delete ${String(selectedNetwork[0].profileName)} network configuration ?`}
            closePopup={this.togglePopup}
            confirm={this.confirmDelete}
            className="network-popup"
          />
        )}
      </React.Fragment>
    )
  }
}

NetworkEditor.contextType = DomainContext
