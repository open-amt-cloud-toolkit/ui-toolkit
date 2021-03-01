/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react'
import { mount } from 'enzyme'
import { mocked } from 'ts-jest/utils'
import { HttpClient } from '../reactjs/components/services/HttpClient'

import { AmtFeatures, AmtFeatureProps } from '../reactjs/components/shared/AmtFeatures'
import { Provider } from '../reactjs/components/shared/context/BasicContextProvider'

jest.mock('../reactjs/components/services/HttpClient')
describe('Amt features spec', () => {
  let data
  beforeEach(() => {
    data = {
      mpsKey: 'APIKEYFORMPS123!'
    }
  })
  it('should fetch the AMT features on load', () => {
    const response = { statuscode: 200, payload: { userConsent: 'none', redirection: true, KVM: true, SOL: false, IDER: false } }
    mocked(HttpClient.post).mockImplementation(async () => await Promise.resolve(response))

    const wrapper = mount(<Provider data={data}><AmtFeatures
      deviceId={'12345678-9abc-defg-hijk'}
      server={'localhost:9300'}
      feature={'KVM'}
      handleFeatureStatus={() => { }}
      getConnectState={() => { return 2 }}
    /></Provider>
    )
    wrapper.setState({
      userConsent: 'none',
      useKVM: true,
      useSOL: false,
      useIDER: false
    })

    expect(wrapper.state('userConsent')).toEqual('none')
    expect(wrapper.state('useKVM')).toEqual(true)
  })

  it('should enable the AMT feature by calling the rest api', () => {
    const response = { statuscode: 200, payload: { userConsent: 'none', redirection: false, KVM: false, SOL: false, IDER: false } }
    mocked(HttpClient.post).mockImplementation(async () => await Promise.resolve(response))

    const wrapper = mount(<AmtFeatures
      deviceId={'12345678-9abc-defg-hijk'}
      server={'localhost:9300'}
      feature={'KVM'}
      handleFeatureStatus={() => { }}
      getConnectState={() => { return 2 }}
    />, {
      context: {
        data: {
          mpsKey: 'APIKEYFORMPS123!'
        }
      }
    })
    const checkboxChangeEvent = {
      target: {
        checked: true
      }
    }

    const checkboxInput = wrapper.find('input')
    checkboxInput.simulate('change', checkboxChangeEvent)

    expect(wrapper.state('checked')).toEqual(true)
  })

  it('fails to update the feature ', () => {
    const response = { status: 400, error: 'Incorrect URI or Bad Request', errorDescription: 'Failed AMT features BatchEnum Exec for guid : 12345678-9abc-defg-hijk' }

    mocked(HttpClient.post).mockImplementation(async () => await Promise.resolve(response))
    const wrapper = mount(<Provider data={data}><AmtFeatures
      deviceId={'12345678-9abc-defg-hijk'}
      server={'localhost:9300'}
      feature={'KVM'}
      handleFeatureStatus={() => { }}
      getConnectState={() => { return 2 }}
    /></Provider>)

    const checkboxChangeEvent = {
      target: {
        checked: true
      }
    }

    wrapper.setState({
      showMessage: true,
      message: 'Failed to update the KVM feature!',
      checked: true
    })
    const checkboxInput = wrapper.find('input')
    checkboxInput.simulate('change', checkboxChangeEvent)

    expect(wrapper.state('checked')).toEqual(true)
    expect(wrapper.state('showMessage')).toEqual(true)
    expect(wrapper.state('message')).toEqual('Failed to update the KVM feature!')
  })

  it('should handle the checkbox change for SOL and IDER controls', () => {
    HttpClient.post = jest.fn(async () => await Promise.resolve({ statusCode: 200, payload: { redirection: true, SOL: true } }))
    const amtProps: AmtFeatureProps = {
      deviceId: 'abcdef-1234-ghijkl',
      feature: 'SOL',
      handleFeatureStatus: jest.fn(),
      server: 'localhost:3000',
      getConnectState: jest.fn()
    }

    const wrapper = mount(<AmtFeatures {...amtProps} />, {
      context: {
        data: {
          mpsKey: 'APIKEYFORMPS123!'
        }
      }
    })
    const instance = wrapper.instance() as AmtFeatures
    const handleEvent = {
      target: {
        checked: true
      }
    }
    instance.handleCheckboxChange(handleEvent)
    expect(wrapper.state('useSOL')).toBe(true)
    expect(wrapper.state('checked')).toBe(true)
    wrapper.unmount()
  })
})
