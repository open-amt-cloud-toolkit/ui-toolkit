/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { shallow } from 'enzyme'
import * as React from 'react'
import { ToggleBtn } from '../reactjs/components/shared/btn/ToggleBtn'

describe('toggle button tests', () => {
  let btnProps, wrapper
  beforeEach(() => {
    btnProps = {
      isChecked: true,
      switchStatus: () => jest.fn()
    }

    wrapper = shallow(<ToggleBtn {...btnProps} />)
  })
  it('should load the component without crashing', () => {
    expect(typeof wrapper).toBe('object')
  })

  it('should toggle the status on clicking the toggle button', () => {
    const instance = wrapper.instance() as ToggleBtn
    instance._handleChange()

    expect(wrapper.state('isChecked')).toBe(false)
  })
})
