/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import Style from 'styled-components'
import { isFalsy } from '../shared/Utilities'

const TerminalContainer = Style.div`
   display:block;
   text-align:center;
`
const XTerm = Style.div`
   display:inline-block;
`

export interface IPropTerminal {
  handleKeyPress: any
  xterm: any
  handleKeyDownPress: any
}

class Term extends React.Component<IPropTerminal> {
  componentDidMount (): void {
    const element = document.getElementById('xterm') ?? ''
    const { xterm, handleKeyPress } = this.props
    if (isFalsy(element)) {
      xterm.open(element)
      xterm.onData(data => handleKeyPress(data))
      xterm.attachCustomKeyEventHandler(e => {
        e.stopPropagation()
        e.preventDefault()
        if (isFalsy(e.ctrlKey) && isFalsy(e.shiftKey) && (e.keyCode === 67)) {
          return navigator.clipboard.writeText(xterm.getSelection())
        } else if (isFalsy(e.ctrlKey) && isFalsy(e.shiftKey) && (e.keyCode === 86)) {
          return navigator.clipboard.readText()
            .then(text => handleKeyPress(text)
            )
        } else if (e.code === 'Space') {
          return handleKeyPress(e.key)
        }
      })
    }
  }

  render (): React.ReactNode {
    return (
      <TerminalContainer>
        <XTerm id="xterm" />
      </TerminalContainer>
    )
  }
}

export default Term
