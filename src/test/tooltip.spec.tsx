/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { shallow } from 'enzyme'
import * as React from 'react'
import { Tooltip } from '../reactjs/components/shared/Tooltip'

describe('Test tooltip component', () => {
  it('should load the component without crashing', () => {
    const wrapper = shallow(<Tooltip message='show message' styles={{ display: 'inline-block' }}/>)

    expect(typeof wrapper).toBe('object')
  })
})
