/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react'
import { mount } from 'enzyme'
import { mocked } from 'ts-jest/utils'
import { HttpClient } from '../reactjs/components/services/HttpClient'

import { PowerState } from '../reactjs/components/shared/PowerState'

jest.mock('../reactjs/components/services/HttpClient')
describe('Power state spec', () => {
  it('should fetch the power state when device is powered on', () => {
    const response = { powerstate: 2 }
    mocked(HttpClient.post).mockImplementation(async () => await Promise.resolve(response))

    const wrapper = mount(<PowerState
      deviceId={'12345678-9abc-defg-ijklmnopq'}
      server={'localhost:9300'}
      handlePowerStatus={() => { }}
      updateParent={() => { }} />, {
      context: {
        data: {
          mpsKey: 'APIKEYFORMPS123!'
        }
      }
    })
    wrapper.setState({ powerState: 2 })
    expect(wrapper.state('powerState')).toEqual(2)
    wrapper.unmount()
  })

  it('should fetch the power state when device is in sleep mode', () => {
    const response = { powerstate: 4 }
    mocked(HttpClient.post).mockImplementation(async () => await Promise.resolve(response))

    const wrapper = mount(<PowerState
      deviceId={'12345678-9abc-defg-ijklmnopq'}
      server={'localhost:9300'}
      handlePowerStatus={() => { }}
      updateParent={() => { }} />, {
      context: {
        data: {
          mpsKey: 'APIKEYFORMPS123!'
        }
      }
    })
    wrapper.setState({ powerState: 4 })

    expect(wrapper.state('powerState')).toEqual(4)
    wrapper.unmount()
  })

  it('should fetch and set the power state when device is powered off', () => {
    const response = { powerstate: 8 }
    mocked(HttpClient.post).mockImplementation(async () => await Promise.resolve(response))

    const wrapper = mount(<PowerState
      deviceId={'12345678-9abc-defg-ijklmnopq'}
      server={'localhost:9300'}
      handlePowerStatus={() => { }}
      updateParent={() => { }} />, {
      context: {
        data: {
          mpsKey: 'APIKEYFORMPS123!'
        }
      }
    })
    wrapper.setState({
      powerState: 8
    })
    expect(wrapper.state('powerState')).toEqual(8)
    wrapper.unmount()
  })

  it('should fetch and set the power state to 100 when state is unknown', () => {
    const response = {}
    mocked(HttpClient.post).mockImplementation(async () => await Promise.resolve(response))

    const wrapper = mount(<PowerState
      deviceId={'12345678-9abc-defg-ijklmnopq'}
      server={'localhost:9300'}
      handlePowerStatus={() => { }}
      updateParent={() => { }} />, {
      context: {
        data: {
          mpsKey: 'APIKEYFORMPS123!'
        }
      }
    })
    wrapper.setState({
      powerState: 100
    })
    expect(wrapper.state('powerState')).toEqual(100)
    wrapper.unmount()
  })
})
