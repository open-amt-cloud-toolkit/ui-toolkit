/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react'
import { shallow } from 'enzyme'
import { Checkbox } from '../reactjs/components/shared/Checkbox'

describe('Checkbox', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Checkbox
      className={'checkbox-class'}
      checked={false}
      disableCheckbox={false}/>).dive()

    expect(wrapper).toMatchSnapshot()
    console.info('wrapper', wrapper.debug())
    // expect(wrapper.find('styled.input')).toHaveLength(1)
  })
})
