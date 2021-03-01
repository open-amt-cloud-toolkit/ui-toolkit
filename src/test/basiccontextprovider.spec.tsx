/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { shallow } from 'enzyme'
import React from 'react'
import { Provider, Consumer } from '../reactjs/components/shared/context/BasicContextProvider'

describe('Test context provider', () => {
  it('should load the provider component without crashing', () => {
    const props = {
      data: {
        mpsKey: 'APIKEYFORSERVER'
      }
    }
    const wrapper = shallow(<Provider {...props} />)

    expect(typeof wrapper).toBe('object')
  })

  it('should load the consumer component without crashing', () => {
    const props = {
      children: '<></>'
    }
    const wrapper = Consumer(props)

    expect(typeof wrapper).toBe('object')
  })
})
