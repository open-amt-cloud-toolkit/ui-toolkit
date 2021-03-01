/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react'

import { ProfileGrid, ProfileGridProps } from '../reactjs/components/ProfileEditor/ProfileGrid'
import { shallow } from 'enzyme'

import { mocked } from 'ts-jest/utils'
import { HttpClient } from '../reactjs/components/services/HttpClient'

jest.mock('../reactjs/components/services/HttpClient')

describe('Profile grid component', () => {
  it('should load the component without crashing ', () => {
    const profileGridProps: ProfileGridProps = {
      rpsServer: 'localhost:8081',
      updateProfileGrid: false,
      rpsKey: 'APIKEYFORRPS123!'
    }

    const wrapper = shallow(<ProfileGrid {...profileGridProps} />)

    console.info('wrapper ', wrapper.debug())
    expect(wrapper.find('PcsGrid')).toHaveLength(1)
  })

  it('should list all the profiles on page load', () => {
    const profileGridProps: ProfileGridProps = {
      rpsServer: 'localhost:8081',
      updateProfileGrid: false,
      rpsKey: 'APIKEYFORRPS123!'
    }

    const response = [{
      ProfileName: 'profile1',
      GenerateRandomPassword: true,
      RandomPasswordLength: 8,
      Activation: 'ccmactivate'
    }, {
      ProfileName: 'profile2',
      GenerateRandomPassword: true,
      RandomPasswordLength: 8,
      Activation: 'ccmactivate'
    }]

    mocked(HttpClient.get).mockImplementation(async () => await Promise.resolve(response))

    const wrapper = shallow(<ProfileGrid {...profileGridProps} />)
    const wrapperInstance = wrapper.instance() as ProfileGrid
    const params = {}
    wrapperInstance.onGridReady(params)
    wrapper.setState({ rowData: response })
    wrapper.instance().forceUpdate()

    expect(wrapper.state('rowData')).toHaveLength(2)
    wrapper.setProps({
      updateProfileGrid: true
    })
  })
})
