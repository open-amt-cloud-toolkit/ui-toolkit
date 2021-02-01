/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react'
import { isFalsy } from '../Utilities'
import './ToggleBtn.scss'

export interface toggleBtnProps {
  isChecked?: boolean
  switchStatus?: any
}

export interface toggleBtnState {
  isChecked?: boolean
}

export class ToggleBtn extends React.Component<toggleBtnProps, toggleBtnState> {
  certRef: any
  constructor (props: toggleBtnProps) {
    super(props)
    this.state = {
      isChecked: false
    }
    this.certRef = React.createRef()
  }

  componentWillMount (): void {
    this.setState({ isChecked: this.props.isChecked })
  }

  _handleChange = (): any => {
    this.setState({ isChecked: !isFalsy(this.state.isChecked) }, () => {
      this.props.switchStatus(this.state.isChecked)
    })
  }

  render (): React.ReactNode {
    return (
      <label className="inline-block">
        <input
          ref={this.certRef}
          checked={this.state.isChecked}
          onChange={this._handleChange}
          className="switch"
          type="checkbox"
        />
        <div>
          <div></div>
        </div>
      </label>
    )
  }
}
