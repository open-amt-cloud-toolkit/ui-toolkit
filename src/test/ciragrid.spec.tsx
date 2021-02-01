/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react'

import {
  CiraGrid,
  CiraGridProps
} from '../reactjs/components/CIRAEditor/CiraGrid'
import { shallow } from 'enzyme'

import { mocked } from 'ts-jest/utils'
import { HttpClient } from '../reactjs/components/services/HttpClient'

jest.mock('../reactjs/components/services/HttpClient')

describe('CIRA grid component', () => {
  it('should load the component without crashing ', () => {
    const ciraGridProps: CiraGridProps = {
      rpsServer: 'localhost:8081',
      updateCiraGrid: false,
      rpsKey: 'APIKEYFORRPS123!'
    }

    const wrapper = shallow(<CiraGrid {...ciraGridProps} />)

    expect(wrapper.find('PcsGrid')).toHaveLength(1)
  })

  it('should list all the profiles on page load', () => {
    const ciraGridProps: CiraGridProps = {
      rpsServer: 'localhost:8081',
      updateCiraGrid: false,
      rpsKey: 'APIKEYFORRPS123!'
    }

    const response = [
      {
        ConfigName: 'ciraconfig1',
        MPSServerAddress: 'localhost',
        MPSPort: 4433,
        Username: 'admin',
        Password: 'P@ssw0rd',
        CommonName: 'localhost',
        ServerAddressFormat: 201,
        AuthMethod: 2,
        MPSRootCertificate: 'rootcert',
        ProxyDetails: ''
      },
      {
        ConfigName: 'config1',
        MPSServerAddress: 'localhost',
        MPSPort: 4433,
        Username: 'admin',
        Password: 'P@ssw0rd',
        CommonName: 'localhost',
        ServerAddressFormat: 201,
        MPSRootCertificate: '',
        ProxyDetails: '',
        AuthMethod: 2
      },
      {
        ConfigName: 'Config11',
        MPSServerAddress: '168.0.0.0',
        MPSPort: '4433',
        Username: 'admin',
        Password: 'P@ssword123',
        CommonName: 'Common',
        ServerAddressFormat: 3,
        MPSRootCertificate: '',
        ProxyDetails: '',
        AuthMethod: 2
      }
    ]

    mocked(HttpClient.get).mockImplementation(async () => await Promise.resolve(response))

    const wrapper = shallow(<CiraGrid {...ciraGridProps} />)
    const wrapperInstance = wrapper.instance() as CiraGrid
    const params = {}
    wrapperInstance.onGridReady(params)
    wrapper.setState({ rowData: response })
    wrapper.instance().forceUpdate()

    expect(wrapper.state('rowData')).toHaveLength(3)

    wrapper.setProps({
      updateCiraGrid: true
    })
  })

  it('should return the soft selcted id ', () => {
    const ciraGridProps: CiraGridProps = {
      rpsServer: 'localhost:8081',
      updateCiraGrid: false,
      rpsKey: 'APIKEYFORRPS123!'
    }

    const wrapper = shallow(<CiraGrid {...ciraGridProps} />)
    const instance = wrapper.instance() as CiraGrid

    const result = instance.getSoftSelectId('10')
    expect(result).toEqual('10')
  })
})
