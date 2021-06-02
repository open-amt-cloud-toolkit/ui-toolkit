/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import Term, { IPropTerminal } from '../reactjs/components/SerialOverLAN/Terminal'
import { Terminal } from 'xterm'

import React from 'react'
import { shallow } from 'enzyme'

describe('Test Term class', () => {
  it('Test render() in Term class', () => {
    const t = new Terminal({
      cursorStyle: 'block',
      fontWeight: 'bold',
      rows: 30,
      cols: 100
    })

    const handleKeyPress = (domEvent): any => jest.fn()
    const handleKeyDownPress = (domEvent): any => jest.fn()
    // Initialization of ConnectProps
    const terminal: IPropTerminal = {
      handleKeyPress: (handleKeyPress),
      xterm: (t),
      handleKeyDownPress: (handleKeyDownPress)
    }

    const term = shallow(<Term { ...terminal } />)

    // Output
    console.log(term.debug())
    expect(term).toMatchSnapshot()
  })
})
