/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react'
import { DomainGrid } from './DomainGrid'
import { Button } from '../shared/btn/Btn'
import { translateText } from '../shared/Methods'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Popup } from '../shared/popup/Popup'
import SnackBar from '../shared/SnackBar'
import { encodeSpecialCharacters, isFalsy } from '../shared/Utilities'
import { DomainFlyout } from './DomainFlyout'

import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import './DomainEditor.scss'
import { Consumer, DomainContext } from '../shared/context/BasicContextProvider'
import { HttpClient } from '../services/HttpClient'

// adds all the solid-svg icons into the library to prevent eplicit imports
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon])
library.add(...iconList)

export interface domainProps {
  rpsServer: string | null
}

export interface domainState {
  openFlyout?: boolean
  updateDomainGrid?: boolean
  selectedDomain?: any
  showPopup?: boolean
  showMessage?: boolean
  message?: string
  type?: string
  isEdit?: boolean
}

export class DomainEditor extends React.Component<domainProps, domainState> {
  constructor (props: domainProps) {
    super(props)
    this.state = {
      openFlyout: false,
      updateDomainGrid: false,
      selectedDomain: '',
      showPopup: false,
      showMessage: false,
      message: '',
      type: '',
      isEdit: false
    }
  }

  getSelectedDomain = (domain): void =>
    this.setState({
      selectedDomain: domain
    })

  togglePopup = (): void => this.setState({ showPopup: !isFalsy(this.state.showPopup) })

  handleChange = (): void => this.setState({ openFlyout: !isFalsy(this.state.openFlyout), isEdit: false })

  handleEdit = (): void => this.setState({ openFlyout: !isFalsy(this.state.openFlyout), isEdit: true })

  confirmDelete = async (): Promise<any> => {
    const { rpsKey } = this.context.data
    const domainName = encodeSpecialCharacters(this.state.selectedDomain[0].name)
    const server: string = this.props.rpsServer != null ? this.props.rpsServer : ''
    const response = await HttpClient.delete(`${server}/api/v1/admin/domains/${domainName}`, rpsKey)

    if (response === `Domain ${domainName} successfully deleted`) {
      this.setState({
        showMessage: true,
        message: response,
        type: 'success',
        updateDomainGrid: !isFalsy(this.state.updateDomainGrid),
        selectedDomain: '',
        showPopup: !isFalsy(this.state.showPopup)
      })
    } else {
      this.setState({
        showMessage: true,
        message: response,
        showPopup: !isFalsy(this.state.showPopup),
        type: 'error'
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

  // callback function for handling CIRA config creation message display
  notificationCallback = (success, message): void => {
    if (isFalsy(success)) {
      this.setState({
        showMessage: true,
        message: message,
        type: 'success',
        updateDomainGrid: !isFalsy(this.state.updateDomainGrid),
        selectedDomain: '',
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
      updateDomainGrid,
      selectedDomain,
      showPopup,
      showMessage,
      openFlyout,
      message,
      type
    } = this.state
    return (
      <>
        {isFalsy(showMessage) && <SnackBar message={message} type={type} />}
        <div className="domain-toolbar">
          {selectedDomain.length > 0 && (
            <Button className="domain-button btn-delete" onClick={this.togglePopup}>
              <FontAwesomeIcon icon="trash" size="xs" />
              &nbsp;&nbsp;{translateText('domain.delete')}
            </Button>
          )}
          {selectedDomain.length > 0 && (
            <Button className="domain-button btn-edit" onClick={this.handleEdit}>
              <FontAwesomeIcon icon="edit" size="xs" />
              &nbsp;&nbsp;{translateText('domain.edit')}
            </Button>
          )}
          <Button className="domain-button btn-create" onClick={this.handleChange}>
            <FontAwesomeIcon icon="plus-circle" size="xs" />
            &nbsp;&nbsp;{translateText('domain.new')}
          </Button>
        </div>
        <Consumer>
          { ({ data }) => <DomainGrid
            rpsServer={this.props.rpsServer}
            updateDomainGrid={updateDomainGrid}
            getSelectedDomain={this.getSelectedDomain}
            rpsKey={data.rpsKey}
          />}
        </Consumer>
        {isFalsy(openFlyout) && (
          <DomainFlyout
            close={this.handleChange}
            rpsServer={this.props.rpsServer}
            notificationCallback={this.notificationCallback}
            selectedDomain={this.state.selectedDomain}
            isEdit={this.state.isEdit}
          />
        )}
        {isFalsy(showPopup) && (
          <Popup
            text={`Do you want to delete ${String(selectedDomain[0].name)} domain?`}
            closePopup={this.togglePopup}
            confirm={this.confirmDelete}
            className="profile-popup"
          />
        )}
      </>
    )
  }
}

DomainEditor.contextType = DomainContext
