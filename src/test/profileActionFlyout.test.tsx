/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react';
import { shallow } from 'enzyme'
import { ProfileActionFlyout, profileFlyoutProps } from '../reactjs/components/ProfileEditor/ProfileActionFlyout';


describe('profile action flyout', () => {
    let profileActionFlyoutProps: profileFlyoutProps = {
        onClose: jest.fn(),
        rpsServer: "localhost:8081",
        createProfileNotification: jest.fn(),
        rpsKey: 'APIKEYFORRPS123!'

    }
    it('Test profile name', () => {
        let powerActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = powerActionFlyout.instance() as ProfileActionFlyout;
        myInstance.setState({
            profileName: 'Test123456'
        })
        expect(myInstance.state.profileName).toBe('Test123456')
    })
    it('Test amt password', () => {
        let powerActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = powerActionFlyout.instance() as ProfileActionFlyout;
        myInstance.setState({
            amtPassword: 'Test!@1234'
        })
        expect(myInstance.state.amtPassword).toBe('Test!@1234')
    })
    it('Test generate random password', () => {
        let powerActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = powerActionFlyout.instance() as ProfileActionFlyout;
        myInstance.setState({
            generateRandomPassword: true
        })
        expect(myInstance.state.generateRandomPassword).toBe(true)
    })
    it('Test password length', () => {
        let powerActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = powerActionFlyout.instance() as ProfileActionFlyout;
        myInstance.setState({
            randomPasswordLength: 9
        })
        expect(myInstance.state.randomPasswordLength).toBe(9)
    })
    it('Test methods inprofile actions flyout', () => {
        let powerActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = powerActionFlyout.instance() as ProfileActionFlyout;

        expect(typeof myInstance.handleChange).toBe('function')
        expect(typeof myInstance.handleClick).toBe('function')
        expect(typeof myInstance.handleOnBlur).toBe('function')
        expect(typeof myInstance.handleSubmit).toBe('function')
    })

    it('should open the CIRA config script popup on click of new config', () => {
        let powerActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
       
        let myInstance = powerActionFlyout.instance() as ProfileActionFlyout;
        const clickEvent = {
            preventDefault: ()=> {}
        }
        myInstance.toggleCiraPopup(clickEvent);
        expect(powerActionFlyout.find('CiraConfigForm')).toHaveLength(1)
    })

    it('should call the handle select method on dropdown change', () => {
        let powerActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = powerActionFlyout.instance() as ProfileActionFlyout;
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
        powerActionFlyout.setState({
            ciraConfigs: ciraConfigs
        });
        const handleEvent = {
            preventDefault: () => {},
            target: {
                value: 'Cira4321',
                name:'configName'
            }
        }
         myInstance.handleChange(handleEvent)
        expect(powerActionFlyout.state('configName')).toEqual("Cira4321")
    })

    it('should call the notification callback from the component instance', () => {
        let powerActionFlyout = shallow(<ProfileActionFlyout {...profileActionFlyoutProps} />)
        let myInstance = powerActionFlyout.instance() as ProfileActionFlyout;

        myInstance.notificationCallback(true, `CIRA config created successfully`,{});
        expect(powerActionFlyout.state('showCiraPopup')).toEqual(false)
    })
})
