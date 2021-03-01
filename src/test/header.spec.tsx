/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react'
import { IHeaderProps, Header } from '../reactjs/components/KVM/Header'
import { shallow } from 'enzyme'
import { HttpClient } from '../reactjs/components/services/HttpClient'

describe('Testing Header', () => {
  it('Test render() in Header', () => {
    // Initialization of IHeaderProps
    const headerprops: IHeaderProps = {
      kvmstate: 1,
      deviceId: 'abcd-11',
      server: '9300',
      handleConnectClick: (testFunc2),
      changeDesktopSettings: (testFunc3),
      getConnectState: (testFunc1)
    }

    const he = shallow(<Header {...headerprops} />)

    // Output
    expect(he.find('ConnectButton').prop('handleConnectClick')).toBe(testFunc2)
    expect(he.find('ConnectButton').prop('kvmstate')).toBe(1)
    expect(he.find('DesktopSettings').prop('changeDesktopSettings')).toBe(testFunc3)
    expect(he.find('DesktopSettings').prop('getConnectState')).toBe(testFunc1)
    var ret = expect(he).toMatchSnapshot()
    console.info('ret', ret)
  })

  it('should load the AMT features component when power state gets loaded', () => {
    const headerProps: IHeaderProps = {
      kvmstate: 1,
      deviceId: 'abcd-11',
      server: '9300',
      handleConnectClick: (testFunc2),
      changeDesktopSettings: (testFunc3),
      getConnectState: (testFunc1)
    }

    const wrapper = shallow(<Header {...headerProps} />)
    const instance = wrapper.instance() as Header

    instance.updatePowerStatus()
    expect(wrapper.state('isPowerStateLoaded')).toBe(true)
    expect(wrapper.find('AmtFeatures')).toHaveLength(1)
  })

  it('should get the updated power status and amt feature status on load', () => {
    const headerProps: IHeaderProps = {
      kvmstate: 1,
      deviceId: 'abcd-11',
      server: '9300',
      handleConnectClick: (testFunc2),
      changeDesktopSettings: (testFunc3),
      getConnectState: (testFunc1)
    }

    const wrapper = shallow(<Header {...headerProps} />)
    const instance = wrapper.instance() as Header

    instance.handleFeatureStatus('notEnabled')
    instance.handlePowerStatus('sleep')

    expect(wrapper.state('kvmNotEnabled')).toBe('notEnabled')
    expect(wrapper.state('deviceOnSleep')).toBe('sleep')
  })

  it('should not allow power actions while connected to KVM', async () => {
    const headerProps: IHeaderProps = {
      kvmstate: 2,
      deviceId: 'abcd-11',
      server: '9300',
      handleConnectClick: (testFunc2),
      changeDesktopSettings: (testFunc3),
      getConnectState: (testFunc1)
    }

    const wrapper = shallow(<Header {...headerProps} />)
    const instance = wrapper.instance() as Header
    instance.context = {
      data: {
        mpsKey: 'APIKEYFORRPS123!'
      }
    }
    const powerActionEvent = {
      detail: 0,
      target: {
        value: '8'
      }
    }
    instance.handlePowerOptions(powerActionEvent).catch(() => console.info('error occured'))
    expect(wrapper.state('message')).toEqual('Power Off not allowed while kvm is connected')
    expect(wrapper.state('type')).toEqual('warning')
  })

  it('should get the power action success result from the server', async () => {
    const headerProps: IHeaderProps = {
      kvmstate: 1,
      deviceId: 'abcd-11',
      server: '9300',
      handleConnectClick: (testFunc2),
      changeDesktopSettings: (testFunc3),
      getConnectState: (testFunc1)
    }

    HttpClient.post = jest.fn(async () => await Promise.resolve({
      Body: {
        ReturnValueStr: 'SUCCESS'
      }
    }))

    const wrapper = shallow(<Header {...headerProps} />)
    const instance = wrapper.instance() as Header
    instance.context = {
      data: {
        mpsKey: 'APIKEYFORRPS123!'
      }
    }
    const powerActionEvent = {
      detail: 0,
      target: {
        value: '8'
      }
    }
    instance.handlePowerOptions(powerActionEvent).catch(() => console.info('error occured'))
    instance.forceUpdate()
    expect(HttpClient.post).toHaveBeenCalled()
  })

  it('should get the power action failure result from the server', async () => {
    const headerProps: IHeaderProps = {
      kvmstate: 1,
      deviceId: 'abcd-11',
      server: '9300',
      handleConnectClick: (testFunc2),
      changeDesktopSettings: (testFunc3),
      getConnectState: (testFunc1)
    }

    HttpClient.post = jest.fn(async () => await Promise.resolve({
      Body: {
        ReturnValueStr: 'FAILURE',
        errorDescription: 'Device not connected'
      }
    }))

    const wrapper = shallow(<Header {...headerProps} />)
    const instance = wrapper.instance() as Header
    instance.context = {
      data: {
        mpsKey: 'APIKEYFORRPS123!'
      }
    }
    const powerActionEvent = {
      detail: 0,
      target: {
        value: '8'
      }
    }
    instance.handlePowerOptions(powerActionEvent).catch(() => console.info('error occured'))
    instance.forceUpdate()
    expect(HttpClient.post).toHaveBeenCalled()
  })
})

function testFunc1 (): number {
  return 1
}

class TestClass {
  encoding: number
}

var value1 = 0

function testFunc2 (v: TestClass): void {
  value1 = v.encoding
}

function testFunc3 (v: TestClass): void {
  value1 = v.encoding
}
