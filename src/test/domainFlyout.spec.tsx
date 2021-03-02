/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import * as React from 'react'
import { shallow } from 'enzyme'
import {
  DomainFlyout,
  domainFlyoutProps
} from '../reactjs/components/DomainEditor/DomainFlyout'
import {
  passwordValidation,
  nameValidation
} from '../reactjs/components/shared/Utilities'
import { HttpClient } from '../reactjs/components/services/HttpClient'

describe('Test domain Flyout', () => {
  it('Test flyout with out crashing', () => {
    const domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: 'localhost:8081',
      notificationCallback: jest.fn()
    }
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('load form component without crashing', () => {
    const domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: 'localhost:8081',
      notificationCallback: jest.fn()
    }
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />)
    expect(wrapper.find('form')).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('Test name Validations', () => {
    const domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: 'localhost:8081',
      notificationCallback: jest.fn()
    }
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />)
    wrapper.setState({
      name: 'test123'
    })
    expect(wrapper.state('name')).toEqual('test123')
  })
  it('domain name validation in positive case', () => {
    expect(nameValidation('Test')).toEqual(true)
  })
  it('domain name validation in negative case', () => {
    expect(nameValidation('Test @1')).toEqual(false)
  })

  it('Test password Validations', () => {
    const domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: 'localhost:8081',
      notificationCallback: jest.fn()
    }
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />)
    wrapper.setState({
      password: 'test@123'
    })
    expect(wrapper.state('password')).toEqual('test@123')
  })
  it('Test Password regex validation in positive case', () => {
    expect(passwordValidation('Intel@123')).toEqual(true)
  })
  it('password length should be 8 to 31', () => {
    expect(passwordValidation('Intel@1')).toEqual(false)
  })

  it('Test methods in domain functions', () => {
    const domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: 'localhost:8081',
      notificationCallback: jest.fn()
    }
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />)
    const myInstance = wrapper.instance() as DomainFlyout

    expect(typeof myInstance.handleChange).toBe('function')
    expect(typeof myInstance.handleBlur).toBe('function')
    expect(typeof myInstance.handleSubmit).toBe('function')
  })

  it('should load the form values on edit of a domain', () => {
    const domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: 'localhost:8081',
      notificationCallback: jest.fn(),
      isEdit: true,
      selectedDomain: [{
        profileName: 'domain1',
        domainSuffix: 'd2.com',
        provisioningCert: 'StringCert',
        provisioningCertPassword: 'Amtpass@123'
      }]
    }

    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />)

    expect(typeof wrapper.state('domainFormDetails')).toBe('object')
    expect(wrapper.state('domainFormDetails')).toEqual({ name: 'domain1', domainSuffix: 'd2.com', provisioningCert: 'StringCert', provisioningCertPassword: '' })
  })

  it('should update the component state when there is change in props', () => {
    const domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: 'localhost:8081',
      notificationCallback: jest.fn(),
      isEdit: true,
      selectedDomain: [{
        profileName: 'domain1',
        domainSuffix: 'd2.com',
        provisioningCert: 'StringCert',
        provisioningCertPassword: 'Amtpass@123'
      }]
    }

    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />)
    const selectedDomainDetails = {
      selectedDomain: [{
        profileName: 'domain2',
        domainSuffix: 'd3.com',
        provisioningCert: 'StringCert',
        provisioningCertPassword: 'Amtpass@123'
      }]
    }
    wrapper.setProps(selectedDomainDetails)
    wrapper.instance().forceUpdate()
    expect(wrapper.state('domainFormDetails')).toEqual({ profileName: 'domain2', domainSuffix: 'd3.com', provisioningCert: 'StringCert', provisioningCertPassword: 'Amtpass@123' })
  })

  it('should toggle the password field visibility on icon click', () => {
    const domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: 'localhost:8081',
      notificationCallback: jest.fn()
    }
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />)
    const myInstance = wrapper.instance() as DomainFlyout
    wrapper.setState({
      password: 'test@123'
    })

    expect(wrapper.state('showPassword')).toEqual(false)

    myInstance.handleShowPassword()
    wrapper.instance().forceUpdate()
    expect(wrapper.state('showPassword')).toEqual(true)
  })

  it('should call handlechange method and update the state values on input edit', () => {
    const domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: 'localhost:8081',
      notificationCallback: jest.fn()
    }
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />)
    const myInstance = wrapper.instance() as DomainFlyout
    wrapper.setState({
      domainFormDetails: {
        name: ''
      }
    })
    const handleChangeParams = {
      target: {
        name: 'name',
        value: 'domain3'
      }
    }
    myInstance.handleChange(handleChangeParams)
    expect(wrapper.state('domainFormDetails')).toEqual({ name: 'domain3' })
  })

  it('should call the create domain rest api on submitting the form', async () => {
    HttpClient.post = jest.fn(async () => await Promise.resolve('Domain domain9 successfully inserted'))
    const domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: 'localhost:8081',
      notificationCallback: jest.fn()
    }
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />)
    const myInstance = wrapper.instance() as DomainFlyout

    const domainState = {
      domainFormDetails: {
        name: 'domain9',
        domainSuffix: 'd4.com',
        provisioningCert: 'LengthycertString',
        provisioningCertPassword: 'Amtpass@123'
      }
    }
    const submitEvent = {
      preventDefault: () => {}
    }
    wrapper.setState(domainState)
    myInstance.forceUpdate()
    myInstance.context = {
      data: {
        rpsKey: 'APIKEYFORRPS123!'
      }
    }

    myInstance.handleSubmit(submitEvent).catch(() => console.info('error occured'))
    expect(HttpClient.post).toHaveBeenCalled()
  })

  it('should call the edit domain rest api on editing the form', async () => {
    HttpClient.patch = jest.fn(async () => await Promise.resolve('Domain domain9 successfully updated'))
    const domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: 'localhost:8081',
      notificationCallback: jest.fn(),
      isEdit: true,
      selectedDomain: [{ name: 'domain9', domainSuffix: 'd3.com', provisioningCert: 'StringCert', provisioningCertPassword: 'Amtpass@123' }]
    }
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />)
    const myInstance = wrapper.instance() as DomainFlyout
    const submitEvent = {
      preventDefault: () => {}
    }
    myInstance.forceUpdate()
    myInstance.context = {
      data: {
        rpsKey: 'APIKEYFORRPS123!'
      }
    }

    myInstance.handleSubmit(submitEvent).catch(() => console.info('error occured'))
    expect(HttpClient.patch).toHaveBeenCalled()
  })

  it('should call the handleblur method on removing focus from input ', () => {
    const domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: 'localhost:8081',
      notificationCallback: jest.fn()
    }
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />)
    const myInstance = wrapper.instance() as DomainFlyout
    wrapper.setState({
      domainFormDetails: {
        name: ''
      }
    })
    const blurEvent = {
      target: {
        name: 'name'
      }
    }
    myInstance.handleBlur(blurEvent)
    expect(wrapper.state('nameBlur')).toEqual(true)
  })

  it('should set the provisioning cert blur flag on clicking outside cert field input', () => {
    const domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: 'localhost:8081',
      notificationCallback: jest.fn()
    }
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />)
    const myInstance = wrapper.instance() as DomainFlyout
    const event = {}
    myInstance.handleClick(event)

    expect(wrapper.state('provisioningCertBlur')).toBe(true)
  })
})
