/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react'
import { CiraGrid } from './CiraGrid'
import { Button } from '../shared/btn/Btn'
import { CiraConfigFlyout } from './CiraConfigFlyout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { translateText } from '../shared/Methods'
import { Popup } from '../shared/popup/Popup'
import { encodeSpecialCharacters, isFalsy } from '../shared/Utilities'

import './CiraEditor.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import SnackBar from '../shared/SnackBar'
import { Consumer, DomainContext } from '../shared/context/BasicContextProvider'
import { HttpClient } from '../services/HttpClient'

// adds all the solid-svg icons into the library to prevent eplicit imports
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon])
library.add(...iconList)

export interface CiraEditorProps {
  rpsServer: string | null
  mpsServer: string | null
}

export interface CiraEditorState {
  openFlyout?: boolean
  showPopup?: boolean
  showMessage?: boolean
  message?: string
  type?: string
  updateCiraGrid?: any
  selectedCiraConfigs: any
  isEdit: boolean
}

/**
 * Wrapper component for rendering CIRA grid and header for CIRA config scripts control
 */
export class CiraEditor extends React.Component<
CiraEditorProps,
CiraEditorState
> {
  constructor (props: CiraEditorProps) {
    super(props)
    this.state = {
      openFlyout: false,
      showPopup: false,
      showMessage: false,
      message: '',
      type: '',
      updateCiraGrid: false,
      selectedCiraConfigs: '',
      isEdit: false
    }
  }

  togglePopup = (): void => {
    this.setState({
      showPopup: !isFalsy(this.state.showPopup)
    })
  }

  confirmDelete = async (): Promise<any> => {
    const { rpsKey } = this.context.data
    this.togglePopup()
    const configName = encodeSpecialCharacters(this.state.selectedCiraConfigs[0].configName)
    const server: string = this.props.rpsServer != null ? this.props.rpsServer : ''
    const response = await HttpClient.delete(`${server}/api/v1/admin/ciraconfigs/${configName}`, rpsKey)
    if (response.status === 204) {
      this.setState({
        showMessage: true,
        message: `CIRA Config ${String(this.state.selectedCiraConfigs[0].configName)} deleted`,
        type: 'success',
        updateCiraGrid: !isFalsy(this.state.updateCiraGrid),
        selectedCiraConfigs: ''
      })
    } else {
      const message = response.data.message ?? response.data.error
      this.setState({
        showMessage: true,
        message: message,
        type: 'error'
      })
    }
    this.showNotification()
  }

  showNotification = (): ReturnType<typeof setTimeout> => setTimeout(() => {
    this.setState({
      showMessage: false
    })
  }, 4000)

  getSelectedCiraConfigs = (ciraConfigs): void => {
    // set the cira configs in a state and use for delete
    this.setState({
      selectedCiraConfigs: ciraConfigs
    })
  }

  // open/close create CIRA config flyout
  handleChange = (): void => this.setState({ openFlyout: !isFalsy(this.state.openFlyout), isEdit: false })

  handleEdit = (): void => this.setState({ openFlyout: !isFalsy(this.state.openFlyout), isEdit: true })

  // callback function for handling CIRA config creation message display
  createNotification = (success, message): void => {
    if (isFalsy(success)) {
      this.setState({
        showMessage: true,
        message: message,
        type: 'success',
        updateCiraGrid: !isFalsy(this.state.updateCiraGrid),
        selectedCiraConfigs: '',
        openFlyout: false
      })
    } else {
      this.setState({
        showMessage: true,
        message: message,
        type: 'error',
        openFlyout: false
      })
    }
    // Clears the message on the UI after 4 seconds
    this.showNotification()
  }

  render (): React.ReactNode {
    const {
      selectedCiraConfigs,
      showPopup,
      openFlyout,
      showMessage,
      message,
      type,
      updateCiraGrid,
      isEdit
    } = this.state
    return (
      <React.Fragment>
        {isFalsy(showMessage) && <SnackBar message={message} type={type} />}
        <div className="cira-toolbar">
          {selectedCiraConfigs.length > 0 && (
            <Button className="cira-button btn-delete" onClick={this.togglePopup}>
              <FontAwesomeIcon icon="trash" size="xs" />
              &nbsp;&nbsp;{translateText('cira.delete')}
            </Button>
          )}
          {selectedCiraConfigs.length > 0 && (
            <Button className="cira-button btn-edit" onClick={this.handleEdit}>
              <FontAwesomeIcon icon="edit" size="xs" />
              &nbsp;&nbsp;{translateText('cira.edit')}
            </Button>
          )}
          <Button className='cira-button btn-create' onClick={this.handleChange}>
            <FontAwesomeIcon icon="plus-circle" size="xs" />
            &nbsp;&nbsp;{translateText('cira.new')}
          </Button>
        </div>
        <Consumer>
          {({ data }) => <CiraGrid
            rpsServer={this.props.rpsServer}
            updateCiraGrid={updateCiraGrid}
            getSelectedCiraConfigs={this.getSelectedCiraConfigs}
            rpsKey={data.rpsKey}
          />}
        </Consumer>
        {isFalsy(openFlyout) && (
          <CiraConfigFlyout
            close={this.handleChange}
            rpsServer={this.props.rpsServer}
            mpsServer={this.props.mpsServer}
            createNotification={this.createNotification}
            isEdit={isEdit}
            selectedCiraConfigs={selectedCiraConfigs}
          />
        )}
        {isFalsy(showPopup) && (
          <Popup
            text={`Do you want to delete ${String(selectedCiraConfigs[0].configName)} CIRA Config?`}
            closePopup={this.togglePopup}
            confirm={this.confirmDelete}
            className="profile-popup"
          />
        )}
      </React.Fragment>
    )
  }
}

CiraEditor.contextType = DomainContext
