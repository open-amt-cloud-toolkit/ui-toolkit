/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react';
import { shallow } from 'enzyme';
import { NetworkEditor, NetworkEditorProps, NetworkEditorState } from '../reactjs/components/NetworkEditor/NetworkEditor'
import { HttpClient } from '../reactjs/components/services/HttpClient';

describe('Network editor component', ()=> {

    const networkEditorProps: NetworkEditorProps =  {
        rpsServer: 'https://localhost:8081'
    }

    it('should load the component without crashing', ()=> {
        const wrapper = shallow(<NetworkEditor {...networkEditorProps} />);
        expect(typeof wrapper).toBe('object');

    })

    it('should update the component state on selection of network profile from the grid', ()=> {
        const wrapper = shallow(<NetworkEditor {...networkEditorProps} />);

        const networkDetails = [{
            profileName: 'NetworkProfile1',
            dhcpEnabled: true
        }]

        const instance = wrapper.instance() as NetworkEditor;
        instance.getSelectedNetwork(networkDetails);
        expect(wrapper.state('selectedNetwork')).toEqual([{profileName: 'NetworkProfile1', dhcpEnabled: true}]);
    })

    it('should show the edit and delete button on selecting the network profile on the grid', ()=> {
        const wrapper = shallow(<NetworkEditor {...networkEditorProps} />);
        const networkEditorState = {
            selectedNetwork: [{
                profileName: 'NetworkProfile1',
                dhcpEnabled: true
            }]
        }
        wrapper.setState(networkEditorState);

        expect(wrapper.find('Button')).toHaveLength(3)
    })

    it('should load the popup on click of delete button', () => {
        const wrapper = shallow(<NetworkEditor {...networkEditorProps} />);
        const networkEditorState = {
            selectedNetwork: [{
                profileName: 'NetworkProfile1',
                dhcpEnabled: true
            }]
        }
        wrapper.setState(networkEditorState);
        const instance = wrapper.instance() as NetworkEditor;
        instance.togglePopup();

        expect(wrapper.state('showPopup')).toEqual(true);
    })

    it('should open the flyout on click of new button', () => {
        const wrapper = shallow(<NetworkEditor {...networkEditorProps} />);

        const instance = wrapper.instance() as NetworkEditor;
        instance.handleChange();

        expect(wrapper.state('openFlyout')).toEqual(true);
        expect(wrapper.state('isEdit')).toEqual(false);
    })

    it('should open the flyout on click of edit button', () => {
        const wrapper = shallow(<NetworkEditor {...networkEditorProps} />);
        const networkEditorState = {
            selectedNetwork: [{
                profileName: 'NetworkProfile1',
                dhcpEnabled: true
            }]
        }
        wrapper.setState(networkEditorState);
        const instance = wrapper.instance() as NetworkEditor;
        instance.handleEdit();

        expect(wrapper.state('openFlyout')).toEqual(true);
        expect(wrapper.state('isEdit')).toEqual(true);
    })

    it('should call the delete network rest api on click of confirm button', async () => {
        HttpClient.delete = jest.fn(()=> Promise.resolve('NETWORK Config NetworkProfile1 successfully deleted'))
        const wrapper = shallow(<NetworkEditor {...networkEditorProps} />);
        const networkEditorState = {
            selectedNetwork: [{
                profileName: 'NetworkProfile1',
                dhcpEnabled: true
            }]
        }

        wrapper.setState(networkEditorState);
        const instance = wrapper.instance() as NetworkEditor;
       console.info(wrapper.state())
        instance.context = {
            data: {
                rpsKey: 'APIKEYFORRPS123!'
            }
        }
        
        instance.confirmDelete();

    })

    it('should show the success message on create or edit network configs', ()=> {
        const wrapper = shallow(<NetworkEditor {...networkEditorProps} />);
        const message = `NETWORK Config NetworkProfile1 created successfully`;

        const instance = wrapper.instance() as NetworkEditor;
        instance.createNotification(true, message);

        expect(wrapper.state('showMessage')).toEqual(true);
        expect(wrapper.state('type')).toEqual('success');
        expect(wrapper.state('updateNetworkGrid')).toEqual(true);
    })

    it('should show the error message on create or edit network configs', ()=> {
        const wrapper = shallow(<NetworkEditor {...networkEditorProps} />);
        const message = `Failed to update NETWORK Config`;

        const instance = wrapper.instance() as NetworkEditor;
        instance.createNotification(false, message);

        expect(wrapper.state('showMessage')).toEqual(true);
        expect(wrapper.state('type')).toEqual('error');
    })


})
