/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { mocked } from 'ts-jest/utils';
import { HttpClient } from '../reactjs/components/services/HttpClient';
import { DomainContext, Provider } from '../reactjs/components/shared/context/BasicContextProvider'

import { PowerState, PowerStateProps } from '../reactjs/components/shared/PowerState';

jest.mock('../reactjs/components/services/HttpClient');
describe('Power state spec', () => {
    let data;
    beforeEach(()=> {
        data = {
            mpsKey: 'APIKEYFORMPS123!'
        }
    })
    it('should fetch the power state when device is powered on', () => {
        
        const response = { "powerstate": 2 }
        mocked(HttpClient.post).mockImplementation(() => Promise.resolve(response));

        const wrapper = shallow(<Provider data={data}><PowerState
            deviceId={'12345678-9abc-defg-ijklmnopq'}
            server={'localhost:9300'}
            handlePowerStatus={() => { }}
            updateParent={() => { }} /></Provider>)
        wrapper.setState({ powerState: 2 })
        expect(wrapper.state('powerState')).toEqual(2)
    })

    it('should fetch the power state when device is in sleep mode', () => {
        const response = { "powerstate": 4 }
        mocked(HttpClient.post).mockImplementation(() => Promise.resolve(response));

        const wrapper = shallow(<Provider data={data}><PowerState
            deviceId={'12345678-9abc-defg-ijklmnopq'}
            server={'localhost:9300'}
            handlePowerStatus={() => { }}
            updateParent={() => { }} /></Provider>)
        wrapper.setState({ powerState: 4 });

        expect(wrapper.state('powerState')).toEqual(4)
    })
})