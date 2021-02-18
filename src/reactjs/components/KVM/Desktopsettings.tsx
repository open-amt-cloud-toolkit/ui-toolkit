/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import * as React from 'react'
import { EncodingOptions } from './Encodingoptions'

export interface IDesktopSettings {
  changeDesktopSettings: (settings: any) => void
  getConnectState: () => number
}

export class DesktopSettings extends React.Component<IDesktopSettings> {
  desktopsettings = {
    encoding: 1
  }

  constructor (props: IDesktopSettings) {
    super(props)
    this.changeEncoding = this.changeEncoding.bind(this)
  }

  changeEncoding (encoding: number): void {
    this.desktopsettings.encoding = encoding
    this.props.changeDesktopSettings(this.desktopsettings)
  }

  render (): React.ReactNode {
    return (
      <EncodingOptions changeEncoding={this.changeEncoding} getConnectState={this.props.getConnectState}/>
    )
  }
}
