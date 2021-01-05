/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react';
import { shallow } from 'enzyme';

import { NetworkFlyout, NetworkFlyoutProps} from '../reactjs/components/NetworkEditor/NetworkFlyout';

describe('Network config flyout', ()=> {
    const networkFlyoutProps: NetworkFlyoutProps = {
        rpsServer: "https://localhost:8081",
        isEdit: true,
        selectedNetwork: [{
            profileName: 'profile1',
            dhcpEnabled: true
        }],
        close: jest.fn(),
        createNotification: jest.fn()
    };

    it('should render the component without crashing', () => {
        const wrapper = shallow(<NetworkFlyout {...networkFlyoutProps} />);

        expect(typeof wrapper).toBe('object');
    })
})