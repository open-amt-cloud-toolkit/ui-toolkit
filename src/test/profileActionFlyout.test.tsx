/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react';
import { shallow } from 'enzyme';
import { mocked } from "ts-jest/utils";
import { ProfileActionFlyout, profileFlyoutProps } from '../reactjs/components/ProfileEditor/ProfileActionFlyout';
import { HttpClient } from "../reactjs/components/services/HttpClient";

//jest.mock("../reactjs/components/services/HttpClient");
describe('profile action flyout', () => {

    beforeEach(() => {
        HttpClient.get = jest.fn(() => Promise.resolve([{ ConfigName: "ciraconfig1", MPSServerAddress: "localhost", MPSPort: 4433, Username: "admin", Password: "P@ssw0rd", CommonName: "localhost", ServerAddressFormat: 201, AuthMethod: 2, MPSRootCertificate: "rootcert", ProxyDetails: "", }]))
    })
    let profileActionFlyoutProps: profileFlyoutProps = {
        onClose: jest.fn(),
        rpsServer: "localhost:8081",
        mpsServer:'localhost:3000',
        createProfileNotification: jest.fn(),
        rpsKey: 'APIKEYFORRPS123!',
        isEdit: false,
        slectedProfiles: [{
            profileName: 'profile1',
            generateRandomPassword: true,
            randomPasswordLength: 10,
            ciraConfigName: 'config1',
            activation: 'ccmactivate'
        }]


    }
    it('Test profile name', () => {
        let profileActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = profileActionFlyout.instance() as ProfileActionFlyout;
        myInstance.setState({
            profileName: 'Test123456'
        })
        expect(myInstance.state.profileName).toBe('Test123456')
    })
    it('Test amt password', () => {
        let profileActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = profileActionFlyout.instance() as ProfileActionFlyout;
        myInstance.setState({
            amtPassword: 'Test!@1234'
        })
        expect(myInstance.state.amtPassword).toBe('Test!@1234')
    })
    it('Test generate random password', () => {
        let profileActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = profileActionFlyout.instance() as ProfileActionFlyout;
        myInstance.setState({
            generateRandomPassword: true
        })
        expect(myInstance.state.generateRandomPassword).toBe(true)
    })
    it('Test password length', () => {
        let profileActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = profileActionFlyout.instance() as ProfileActionFlyout;
        myInstance.setState({
            randomPasswordLength: 9
        })
        expect(myInstance.state.randomPasswordLength).toBe(9)
    })
    it('Test methods inprofile actions flyout', () => {
        let profileActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = profileActionFlyout.instance() as ProfileActionFlyout;

        expect(typeof myInstance.handleChange).toBe('function')
        expect(typeof myInstance.handleClick).toBe('function')
        expect(typeof myInstance.handleOnBlur).toBe('function')
        expect(typeof myInstance.handleSubmit).toBe('function')
    })

    it('should open the CIRA config script popup on click of new config', () => {
        let profileActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)

        let myInstance = profileActionFlyout.instance() as ProfileActionFlyout;
        const clickEvent = {
            preventDefault: () => { }
        }
        myInstance.toggleCiraPopup(clickEvent);
        expect(profileActionFlyout.find('CiraConfigForm')).toHaveLength(1)
    })

    it('should call the handle select method on dropdown change', () => {
        let profileActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = profileActionFlyout.instance() as ProfileActionFlyout;
        const ciraConfigs = [{
            "ConfigName": "ciraconfig1",
            "MPSServerAddress": "localhost",
            "MPSPort": 4433,
            "Username": "admin",
            "Password": "P@ssw0rd",
            "CommonName": "localhost",
            "ServerAddressFormat": 201,
            "AuthMethod": 2,
            "MPSRootCertificate": "rootcert",
            "ProxyDetails": ""
        },
        {
            "ConfigName": "Cira4321",
            "MPSServerAddress": "168.10.10.10",
            "MPSPort": "4433",
            "Username": "admin",
            "Password": "Amtpass@123",
            "CommonName": "Common",
            "ServerAddressFormat": 3,
            "MPSRootCertificate": "cert",
            "ProxyDetails": "",
            "AuthMethod": 2
        }];
        profileActionFlyout.setState({
            ciraConfigs: ciraConfigs
        });
        const handleEvent = {
            persist: () => { },
            preventDefault: () => { },
            target: {
                value: 'Cira4321',
                name: 'ciraConfigName'
            }
        }
        myInstance.handleChange(handleEvent)
        let formValues = myInstance.state.profileFormDetails;
        expect(formValues.ciraConfigName).toEqual("Cira4321")
    })

    it('should call the notification callback from the component instance', () => {
        let profileActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = profileActionFlyout.instance() as ProfileActionFlyout;

        myInstance.notificationCallback(true, `CIRA config created successfully`, {});
        expect(profileActionFlyout.state('showCiraPopup')).toEqual(false)
    })

    it('should call the handle blur on remving the focus from input fields', () => {
        let profileActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = profileActionFlyout.instance() as ProfileActionFlyout;

        const blurEvent = {
            target: {
                name: 'profileName'
            }
        }
        myInstance.handleOnBlur(blurEvent);
        profileActionFlyout.instance().forceUpdate()
        expect(profileActionFlyout.state('profileName_blur')).toEqual(true)
    })

    it('should load the profile details on edit', () => {
        const profileProps: profileFlyoutProps = {
            onClose: jest.fn(),
            rpsServer: "localhost:8081",
            mpsServer:'localhost:3000',
            rpsKey: 'APIKEYFORRPS123!',
            createProfileNotification: jest.fn(),
            isEdit: true,
            slectedProfiles: [{
                profileName: 'profile1',
                generateRandomPassword: true,
                randomPasswordLength: 10,
                ciraConfigName: 'config1',
                activation: 'ccmactivate',
                generateRandomMEBxPassword: "",
                mebxPassword: "",
                randomMEBXPasswordLength: ""
            }]
        }

        let wrapper = shallow(<ProfileActionFlyout {...profileProps} />)
        let formDetails = wrapper.state('profileFormDetails');
        expect(formDetails).toEqual({ profileName: 'profile1', generateRandomPassword: true, randomPasswordLength: '10', ciraConfigName: 'config1', activation: 'ccmactivate', amtPassword: '', generateRandomMEBxPassword: '', mebxPassword: '', randomMEBXPasswordLength: '' })
    })

    it('should toggle the generate random password checkbox on click', () => {
        let wrapper = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />);
        let myInstance = wrapper.instance() as ProfileActionFlyout;

        const clickEvent = {
            persist: () => { },
            target: {
                name: 'generateRandomPassword',
                checked: true
            }
        }

        myInstance.handleClick(clickEvent);
        expect(wrapper.state('profileFormDetails')).toEqual({generateRandomPassword: true})

    })

    it('should call the create REST api on form submit', async () => {
        HttpClient.post = jest.fn(() => Promise.resolve('Profile profile1 successfully inserted'));
        let wrapper = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />);
        let myInstance = wrapper.instance() as ProfileActionFlyout;

        let formDetails = {
            profileFormDetails: {
                profileName: 'profile1',
                amtPassword: 'Amtpass@123',
                generateRandomPassword: false,
                activation: 'acmactivate',
                randomPasswordLength: null,
                ciraConfigName: 'config1'
            }
        };
        wrapper.setState(formDetails);
        let submitEvent = {
            preventDefault: () => { }
        }
        myInstance.handleSubmit(submitEvent)
        expect(HttpClient.post).toHaveBeenCalled()
    })

    it('should call the Edit REST api on form submit', async () => {
        HttpClient.patch = jest.fn(() => Promise.resolve('Profile profile1 successfully updated'));
        let profileProps: profileFlyoutProps = {
            onClose: jest.fn(),
            rpsServer: "localhost:8081",
            mpsServer:'localhost:3000',
            createProfileNotification: jest.fn(),
            rpsKey: 'APIKEYFORRPS123!',
            isEdit: true,
            slectedProfiles: [{
                profileName: 'profile1',
                generateRandomPassword: true,
                randomPasswordLength: 10,
                ciraConfigName: 'config1',
                activation: 'ccmactivate'
            }]
        }
        let wrapper = shallow(<ProfileActionFlyout {...profileProps} />);
        let myInstance = wrapper.instance() as ProfileActionFlyout;

        let formDetails = {
            profileFormDetails: {
                profileName: 'profile1',
                amtPassword: 'Amtpass@123',
                generateRandomPassword: false,
                activation: 'acmactivate',
                randomPasswordLength: null,
                ciraConfigName: 'config1'
            }
        };
        wrapper.setState(formDetails);
        let submitEvent = {
            preventDefault: () => { }
        }
        myInstance.handleSubmit(submitEvent)
        expect(HttpClient.patch).toHaveBeenCalled()
    })

    it('should toggle the password field visibility on icon click', () => {
        let wrapper = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />);
        let myInstance = wrapper.instance() as ProfileActionFlyout;

        wrapper.setState({
            profileFormDetails: {
                amtPassword: 'Amtpass@123'
            }
        })

        expect(wrapper.state('showPassword')).toEqual(false);
        myInstance.handleShowPassword();
        wrapper.instance().forceUpdate();
        expect(wrapper.state('showPassword')).toEqual(true)

    })

    it('should update the profile details on changing the profile row selection', () => {
        let wrapper = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />);
        let myInstance = wrapper.instance() as ProfileActionFlyout;

        wrapper.setProps({
            isEdit: true,
            slectedProfiles: [{
                profileName: 'profile2',
                generateRandomPassword: false,
                ciraConfigName: 'config1',
                activation: 'acmactivate'
            }]
        })
        const profileDetails = wrapper.state('profileFormDetails');
        expect(profileDetails).toEqual({profileName: 'profile2',generateRandomPassword: '',ciraConfigName: 'config1',activation: 'acmactivate',networkConfigName: '',amtPassword: '',mebxPassword: '',randomPasswordLength: '',generateRandomMEBxPassword: '',randomMEBXPasswordLength: ''});
    })

    it('should update the static ip value on click of the checkbox', () => {
        let wrapper = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />);
        let myInstance = wrapper.instance() as ProfileActionFlyout;

        const clickEvent = {
            persist: () => { },
            target: {
                name: 'staticIP',
                checked: false
            }
        }

        myInstance.handleClick(clickEvent);
        expect(wrapper.state('profileFormDetails')).toEqual({staticIP: false})
    })

    it('should toggle the MEBx password field visibility on click', () => {
        let wrapper = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />);
        let myInstance = wrapper.instance() as ProfileActionFlyout;

        myInstance.handleShowMEBXPassword();
        expect(wrapper.state('showMEBXPassword')).toBe(true)
    })

    it('should toggle the network popup on click', () => {
        let wrapper = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />);
        let myInstance = wrapper.instance() as ProfileActionFlyout;

        myInstance.toggleNetworkPopup();
        expect(wrapper.state('showNetworkPopup')).toBe(true)
    })

    it('should update the network config name on component state', () => {
        let wrapper = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />);
        let myInstance = wrapper.instance() as ProfileActionFlyout;
        wrapper.setState({
            showNetworkPopup: true
        })
        const status = true;
        const response = [];
        const payload = {
            profileName: 'profile1'
        }
        myInstance.createNotification(status, response, payload);
        expect(wrapper.state('showNetworkPopup')).toBe(false);
        expect(wrapper.state('profileFormDetails')).toEqual({networkConfigName: 'profile1' })
    })
})
