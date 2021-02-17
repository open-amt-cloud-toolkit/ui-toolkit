/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import { PowerOptions, PowerOptionProps } from '../reactjs/components/shared/PowerOptions'
import { shallow } from 'enzyme'
import React from 'react'

describe('Test PowerOptions function component', () => {
  it('Test PowerOptions map', () => {
    const powerProps: PowerOptionProps = {
      availableOptions: [{ label: 'reset to bios', value: '101' }],
      isSelected: true,
      onChange: jest.fn()
    }

    const wrapper = shallow(<PowerOptions {...powerProps} />)
    expect(typeof wrapper).toEqual('object')
  })
})
