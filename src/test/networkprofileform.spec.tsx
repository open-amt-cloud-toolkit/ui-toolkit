/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
import { shallow } from 'enzyme'

import { NetworkProfileForm, NetworkProfileFormProps, NetworkProfileFormStates} from '../reactjs/components/shared/NetworkProfileForm'
import { HttpClient } from '../reactjs/components/services/HttpClient';


describe('Network profile create form', ()=> {
    const networkProfileFormProps: NetworkProfileFormProps =  {
        close: () => {},
        createNotification: () => {},
        rpsServer: 'https://localhost:8081'
    }

    it('should load the component without crashing', ()=> {
        const wrapper = shallow(<NetworkProfileForm {...networkProfileFormProps} />)

        expect(typeof wrapper).toBe('object')
    })

    it('should call the handle change method on editing the network name field', ()=> {
        const wrapper = shallow(<NetworkProfileForm {...networkProfileFormProps} />)
        const networkFormState = {
            networkDetails: {
                networkName: ''
            }
        }
        wrapper.setState(networkFormState);
        const instance = wrapper.instance() as NetworkProfileForm;
        const changeEvent = {
            persist: ()=> {},
            target: {
                name: 'networkName',
                value: 'NetworkProfile1'
            }
        };

        expect(wrapper.state('networkDetails')).toEqual({networkName: ''});
        instance.handleChange(changeEvent);
        expect(wrapper.state('networkDetails')).toEqual({networkName: 'NetworkProfile1'})
    })

    it('should call the handle click method on checkbox click', ()=> {
        const wrapper = shallow(<NetworkProfileForm {...networkProfileFormProps} />)
        const networkFormState = {
            networkDetails: {
                dhcpEnabled: false
            }
        }
        wrapper.setState(networkFormState);
        const instance = wrapper.instance() as NetworkProfileForm;
        const clickEvent = {
            persist: ()=> {},
            target: {
                name: 'dhcpEnabled',
                checked: true
            }
        };
        expect(wrapper.state('networkDetails')).toEqual({dhcpEnabled: false});
        instance.handleClick(clickEvent);
        expect(wrapper.state('networkDetails')).toEqual({dhcpEnabled: true })
    })

    it('should call the handle blur function on blur of input field ', ()=> {
        const wrapper = shallow(<NetworkProfileForm {...networkProfileFormProps} />)
        const networkFormState = {
           networkName_blur: false
        }
        wrapper.setState(networkFormState);
        const instance = wrapper.instance() as NetworkProfileForm;

        const blurEvent = {
            persist: ()=> {},
            target: {
                name: 'networkName'
            }
        };
        expect(wrapper.state('networkName_blur')).toEqual(false);
        instance.handleOnBlur(blurEvent);
        expect(wrapper.state('networkName_blur')).toEqual(true)
    })

    it('should call the create network profile rest api on form submit', ()=> {
        HttpClient.post = jest.fn(()=> Promise.resolve('NETWORK Config NetworkProfile1 successfully inserted'))
        const wrapper = shallow(<NetworkProfileForm {...networkProfileFormProps} />)
        const networkFormState = {
            networkDetails: {
                networkName: 'NetworkProfile1',
                dhcpEnabled: true
            }
        }
        wrapper.setState(networkFormState);
        const instance = wrapper.instance() as NetworkProfileForm;
        const submitEvent  = {
            preventDefault: jest.fn()
        }
        instance.forceUpdate()
        instance.context = {
          data: {
            rpsKey: 'APIKEYFORRPS123!'
          }
        }

        instance.handleSubmit(submitEvent);
        expect(HttpClient.post).toHaveBeenCalled();
    })
})

describe('Network profile edit form', () => {
    const networkProfileFormProps: NetworkProfileFormProps =  {
        close: () => {},
        createNotification: () => {},
        rpsServer: 'https://localhost:8081',
        isEdit: true,
        selectedNetwork: [{
            profileName: 'NetworkProfile1',
            dhcpEnabled: true,
            ipSyncEnabled: true,
            staticIpShared: true
        }]
    }

    it('should load the form values on edit', () => {
        const wrapper = shallow(<NetworkProfileForm {...networkProfileFormProps} />);

        expect(wrapper.state('networkDetails')).toEqual({networkName: 'NetworkProfile1', dhcpEnabled: true})
    })

    it('should update the component state on change of selected network props', () => {
        const wrapper = shallow(<NetworkProfileForm {...networkProfileFormProps} />)
        const instance = wrapper.instance() as NetworkProfileForm;
        const selectedNetworkDetails = {
            selectedNetwork: [{
                profileName: 'NetworkProfile3',
                dhcpEnabled: false,
                ipSyncEnabled: true,
                staticIpShared: true 
            }]
        }
        wrapper.setProps(selectedNetworkDetails);
        instance.forceUpdate();
        expect(wrapper.state('networkDetails')).toEqual({networkName: 'NetworkProfile3', dhcpEnabled: false})
    })

    it('should call the edit rest api on form submit', () => {
        HttpClient.patch = jest.fn(()=> Promise.resolve('NETWORK Config NetworkProfile1 successfully updated'))
        const wrapper = shallow(<NetworkProfileForm {...networkProfileFormProps} />)
        const networkFormState = {
            networkDetails: {
                networkName: 'NetworkProfile2',
                dhcpEnabled: false
            }
        }
        wrapper.setState(networkFormState);
        const instance = wrapper.instance() as NetworkProfileForm;
        const submitEvent  = {
            preventDefault: jest.fn()
        }
        instance.forceUpdate()
        instance.context = {
          data: {
            rpsKey: 'APIKEYFORRPS123!'
          }
        }

        instance.handleSubmit(submitEvent);
        expect(HttpClient.patch).toHaveBeenCalled()
    })
})