/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react'
import { shallow } from 'enzyme'

import { NetworkGrid, NetworkGridProps } from '../reactjs/components/NetworkEditor/NetworkGrid'
import { HttpClient } from '../reactjs/components/services/HttpClient'

describe('Network grid ', () => {
  const networkGridProps: NetworkGridProps = {
    rpsKey: 'APIKEYFORRPS123!',
    rpsServer: 'https://localhost:3000',
    getSelectedNetwork: jest.fn(),
    updateNetworkGrid: false
  }

  it('should load the component without crashing', () => {
    const wrapper = shallow(<NetworkGrid {...networkGridProps} />)

    expect(typeof wrapper).toBe('object')
  })

  it('should load the grid ready event on load of the component', () => {
    HttpClient.get = jest.fn(async () => await Promise.resolve([{ DHCPEnabled: false, IPSyncEnabled: true, ProfileName: 'profile6', StaticIPShared: true }]))
    const wrapper = shallow(<NetworkGrid {...networkGridProps} />)
    const instance = wrapper.instance() as NetworkGrid

    const gridParams = {
      api: jest.fn(),
      ColumnApi: jest.fn()
    }
    instance.onGridReady(gridParams)
    expect(HttpClient.get).toHaveBeenCalled()
  })

  it('should update the grid on props change', () => {
    HttpClient.get = jest.fn(async () => await Promise.resolve([{ DHCPEnabled: false, IPSyncEnabled: true, ProfileName: 'profile2', StaticIPShared: true }]))
    const wrapper = shallow(<NetworkGrid {...networkGridProps} />)
    const props = {
      updateNetworkGrid: true
    }
    wrapper.setProps(props)

    expect(HttpClient.get).toHaveBeenCalled()
  })

  it('should update parent component with new network details on change of row selection', () => {
    const wrapper = shallow(<NetworkGrid {...networkGridProps} />)
    const instance = wrapper.instance() as NetworkGrid
    instance.gridApi = {
      getSelectedRows: jest.fn()
    }
    instance.onSelectionChanged()
  })
})
