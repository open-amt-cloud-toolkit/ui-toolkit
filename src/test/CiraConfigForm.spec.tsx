/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react'
import { shallow } from 'enzyme'
import {
  CiraConfigForm,
  formProps
} from '../reactjs/components/shared/CiraConfigForm'
import { HttpClient } from '../reactjs/components/services/HttpClient'

const CiraConfigProps: formProps = {
  handleSubmit: jest.fn(),
  close: jest.fn(),
  isEdit: true,
  selectedCiraConfigs: [{
    configName: 'ciraconfig1',
    mpsServerAddress: '13.67.36.192',
    mpsPort: 4433,
    username: 'admin',
    password: 'Intel@123',
    commonName: '13.67.36.192',
    mpsRootCertificate: 'rootCert',
    serverAddressFormat: 3,
    authMethod: 2,
    proxyDetails: ''
  }],
  rpsServer: 'localhost:8081',
  mpsServer: 'localhost:3000',
  notificationCallback: jest.fn()
}

describe('Test Cira Config Form Component', () => {
  beforeEach(() => {
    HttpClient.get = jest.fn(async () => await Promise.resolve([{ ConfigName: 'ciraconfig1', MPSServerAddress: 'localhost', MPSPort: 4433, Username: 'admin', Password: 'P@ssw0rd', CommonName: 'localhost', ServerAddressFormat: 201, AuthMethod: 2, MPSRootCertificate: 'rootcert', ProxyDetails: '' }]))
  })
  it('load cira config form component with crashing', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    expect(wrapper.find('form')).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('Test configName Validations', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    wrapper.setState({
      configName: 'test123'
    })
    expect(wrapper.state('configName')).toEqual('test123')
  })

  it('Test mpsServerType Validations', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    wrapper.setState({
      mpsServerType: 3
    })
    expect(wrapper.state('mpsServerType')).toEqual(3)
  })

  it('Test mpsServer Validations', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    wrapper.setState({
      mpsServer: '10.20.30.40'
    })
    expect(wrapper.state('mpsServer')).toEqual('10.20.30.40')
  })

  it('Test port Validations', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    wrapper.setState({
      port: 3333
    })
    expect(wrapper.state('port')).toEqual(3333)
  })

  it('Test userName Validations', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    wrapper.setState({
      userName: 'test123'
    })
    expect(wrapper.state('userName')).toEqual('test123')
  })

  it('Test password Validations', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    wrapper.setState({
      password: 'test@123'
    })
    expect(wrapper.state('password')).toEqual('test@123')
  })

  it('Test commonName Validations', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    wrapper.setState({
      commonName: 'localhost'
    })
    expect(wrapper.state('commonName')).toEqual('localhost')
  })
  it('Test methods in cira config  form', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    const myInstance = wrapper.instance() as CiraConfigForm

    expect(typeof myInstance.handleChange).toBe('function')
    expect(typeof myInstance.handleBlur).toBe('function')
    expect(typeof myInstance.handleSubmit).toBe('function')
  })
  it('should load the profile details on edit', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    const formDetails = wrapper.state('ciraConfig')
    console.log(formDetails)
    expect(formDetails).toEqual({
      configName: 'ciraconfig1',
      mpsServerAddress: '13.67.36.192',
      mpsPort: 4433,
      username: 'admin',
      password: 'Intel@123',
      commonName: '13.67.36.192',
      mpsRootCertificate: 'rootCert',
      serverAddressFormat: 3,
      authMethod: 2,
      proxyDetails: ''
    })
  })
  it('should call create REST api on form submit', async () => {
    HttpClient.post = jest.fn(async () => await Promise.resolve('CIRA Config ciraconfig1 successfully inserted'))
    const CiraConfigProps: formProps = {
      handleSubmit: jest.fn(),
      close: jest.fn(),
      isEdit: false,
      rpsServer: 'localhost:8081',
      mpsServer: 'localhost:8081',
      notificationCallback: jest.fn()
    }
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)

    const formDetails = {
      ciraConfig: {
        configName: 'ciraconfig1',
        mpsServerAddress: '13.67.36.192',
        mpsPort: 4433,
        username: 'admin',
        password: 'Intel@123',
        commonName: '13.67.36.192',
        mpsRootCertificate: 'rootCert',
        serverAddressFormat: 3
      }
    }
    wrapper.setState(formDetails)
    const myInstance = wrapper.instance() as CiraConfigForm
    myInstance.context = {
      data: {
        rpsKey: 'APIKEYFORRPS123!'
      }
    }

    const submitEvent = {
      preventDefault: () => { }
    }
    myInstance.handleSubmit(submitEvent).catch(() => console.info('error occured'))
    expect(HttpClient.post).toHaveBeenCalled()
  })

  it('should call the Edit REST api on form submit', async () => {
    HttpClient.patch = jest.fn(async () => await Promise.resolve('UPDATE Successful for CIRA Config: ciraconfig1'))
    const CiraConfigProps: formProps = {
      handleSubmit: jest.fn(),
      close: jest.fn(),
      isEdit: true,
      rpsServer: 'localhost:8081',
      mpsServer: 'localhost:3000',
      notificationCallback: jest.fn(),
      selectedCiraConfigs: [{
        configName: 'ciraconfig1',
        mpsServerAddress: '13.67.36.192',
        mpsPort: 4433,
        username: 'admin',
        password: 'Intel@123',
        commonName: '13.67.36.192',
        mpsRootCertificate: 'rootCert',
        serverAddressFormat: 3,
        authMethod: 2,
        proxyDetails: ''
      }]
    }
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)

    const formDetails = {
      ciraConfig: {
        configName: 'ciraconfig1',
        mpsServerAddress: '13.67.36.192',
        mpsPort: 4433,
        username: 'admin',
        password: 'Intel@123',
        commonName: '13.67.36.192',
        mpsRootCertificate: 'rootCert',
        serverAddressFormat: 3,
        authMethod: 2,
        proxyDetails: ''
      }
    }

    wrapper.setState(formDetails)
    const myInstance = wrapper.instance() as CiraConfigForm
    myInstance.context = {
      data: {
        rpsKey: 'APIKEYFORRPS123!'
      }
    }

    const submitEvent = {
      preventDefault: () => { }
    }
    myInstance.handleSubmit(submitEvent).catch(() => console.info('error occured'))
    expect(HttpClient.patch).toHaveBeenCalled()
  })

  it('should set the blur flag in component state on input blur', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    const instance = wrapper.instance() as CiraConfigForm

    const event = {
      target: {
        name: 'configName'
      }
    }
    instance.handleBlur(event)
    expect(wrapper.state('configName_blur')).toEqual(true)
  })

  it('should toggle the mps certificate loading method between auto and manual on click', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    const instance = wrapper.instance() as CiraConfigForm

    instance.toggleFormat(true)
    expect(wrapper.state('isAutoLoad')).toEqual(true)
    expect(wrapper.state('isError')).toEqual(false)
  })

  it('should handle the hide/show password field on click of icon', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    const instance = wrapper.instance() as CiraConfigForm

    instance.handleShowPassword()
    expect(wrapper.state('showPassword')).toEqual(true)
  })

  it('should trim the additional strings from root certificate', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    const instance = wrapper.instance() as CiraConfigForm

    const cert = '-----BEGIN CERTIFICATE-----mpsrootcert-----END CERTIFICATE-----'
    const changeEvent = {
      persist: jest.fn(),
      target: {
        name: 'mpsRootCertificate',
        value: cert
      }
    }

    instance.handleChange(changeEvent)
    const { mpsRootCertificate } = wrapper.state('ciraConfig')
    expect(mpsRootCertificate).toEqual('mpsrootcert')
  })

  it('should load the mps root certificate from the server on click of load button', async () => {
    window.fetch = jest.fn()
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)
    const instance = wrapper.instance() as CiraConfigForm
    wrapper.setState({
      ciraConfig: {
        mpsServerAddress: 'localhost'
      }
    })
    instance.context = {
      data: {
        mpsKey: 'APIKEYFORMPS123!'
      }
    }
    instance.loadMpsCertificate().catch(() => console.info('error occured'))
  })

  it('should update the state variables when props get updated', () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />)

    wrapper.setProps({
      isEdit: true,
      selectedCiraConfigs: [{
        configName: 'ciraconfig2',
        mpsServerAddress: '13.67.36.192',
        mpsPort: 4433,
        username: 'admin',
        password: 'Intel@123',
        commonName: '13.67.36.192',
        mpsRootCertificate: 'rootCert2',
        serverAddressFormat: 3,
        authMethod: 2,
        proxyDetails: ''
      }]
    })
    const { configName } = wrapper.state('ciraConfig')
    expect(configName).toEqual('ciraconfig2')
  })
})
