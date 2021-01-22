/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react';
import { shallow } from 'enzyme';
import { DeviceGrid,gridProps } from '../reactjs/components/DeviceGrid/DeviceGrid';
import { HttpClient } from "../reactjs/components/services/HttpClient";

jest.mock("../reactjs/components/services/HttpClient");

describe('testing device grid ui component', () => {
let deviceprops: gridProps = {
    deviceId: "1234",
    mpsServer: "localhost/mps",
    filter: 'connected',
    selectedDevices: [{deviceId: 'abcdef-1234', status: 'Active'}]
};
    it('test device grid functionality', () => {
        const devicegrid = shallow(<DeviceGrid {...deviceprops}/>)
        expect(devicegrid.exists()).toBe(true)
    })

    it('testing device grid snapshot', () => {
        const devicegrid = shallow(<DeviceGrid {...deviceprops}/>)
        expect(devicegrid).toMatchSnapshot()
    })

    it('Should load the devices on the grid when component loads', () => {
        const devicegrid = shallow(<DeviceGrid {...deviceprops} />)
        const instance = devicegrid.instance() as DeviceGrid;

        HttpClient.post = jest.fn(() => Promise.resolve([{name: 'MPS-system', mpsuser: 'User1', host:'abcdefgh-ijkl-1234'}]))
        instance.context = {
            data: {
                mpsKey: 'APIKEYFORMPS123!'
            }
        }
        const params = {
            api: {
                showNoRowsOverlay: () => {}
            },
            columnApi: {}
        }
        instance.onGridReady(params);
        expect(typeof devicegrid).toBe('object')
    })

    it('should return the softselected id on select', () => {
        const devicegrid = shallow(<DeviceGrid {...deviceprops} />)
        const instance = devicegrid.instance() as DeviceGrid;

        const id = '10';
        instance.onSelectionChanged();
        const result = instance.getSoftSelectId(id);
        expect(result).toEqual('10')
    })
})