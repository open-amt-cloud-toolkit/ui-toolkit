/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import * as React from 'react'
require('./Encodingoptions.scss')

export interface IEncodingOptions {
  changeEncoding: (encoding: number) => void
  getConnectState: () => number
}

export class EncodingOptions extends React.Component<IEncodingOptions, { value: number }> {
  constructor (props: IEncodingOptions) {
    super(props)
    this.state = { value: 1 }
    this.onEncodingChange = this.onEncodingChange.bind(this)
  }

  onEncodingChange (e): void {
    // e.persist();
    this.setState({ value: e.target.value })
    this.props.changeEncoding(e.target.value)
  }

  render (): React.ReactNode {
    return (
      <span className="encoding">
        <label >Encoding:</label>
        <select value={this.state.value} className= {this.props.getConnectState() === 2 ? 'reldisabled' : ''} onChange={this.onEncodingChange} disabled={this.props.getConnectState() === 2}>
          <option value="1">RLE 8</option>
          <option value="2">RLE 16</option>
        </select>
      </span>
    )
  }
}
