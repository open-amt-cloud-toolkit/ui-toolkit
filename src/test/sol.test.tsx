/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { Sol, SOLProps } from '../reactjs/components/SerialOverLAN/Sol';
import { powerActions } from '../reactjs/components/services/PowerActionServices';
import { HttpClient } from '../reactjs/components/services/HttpClient';
import { AMTRedirector1, Protocol } from './helper/amtredirector1';
import { mockeventpersist } from './helper/mockeventpersist';

import * as React from 'react';
import { shallow } from 'enzyme';
import { terminal } from './helper/terminal';
import { AmtTerminal } from '../core/AMTTerminal';

const solprop: SOLProps = {
    deviceId: 'acfae359-be7b-4861-8e0c-54b20389bb68',
    mpsServer: 'https://localhost:9300'
};

describe('Test Sol class', () => {

    it('Test Sol render', () => {

        // Initialization of ConnectProps
        let solprop: SOLProps = {
            deviceId: "abcd-efh-ijkl-mnop",
            mpsServer: "1.2.3.4:1234"
        };

        // shallow
        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;

        // Output
        expect(sol).toMatchSnapshot();
    });

    it('Test handlePowerOptions with failure', () => {

        // Initialization of ConnectProps
        let solprop: SOLProps = {
            deviceId: "abcd-efh-ijkl-mnop",
            mpsServer: "1.2.3.4:1234"
        };
        let ev = {
            detail: 0,
            target: { value: 100 }
        }
        HttpClient.post = jest.fn(function (arg1, arg2, arg3) {
            return new Promise((resolve, reject) => {
                resolve({
                    Body: {
                        ReturnValueStr: 'FAIL'
                    }
                })
            });
        });

        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;

        //call the function and check the expected output
        // return myInstance.handlePowerOptions(ev).then(data => expect(myInstance.state.message).toEqual("Sorry! there was some technical difficulties"));

    });

    it('Test onTerminalStateChange', () => {
        // Initialization of ConnectProps
        let solprop: SOLProps = {
            deviceId: "abcd-efh-ijkl-mnop",
            mpsServer: "1.2.3.4:1234"
        };

        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;

        //call the function and check the expected output
        myInstance.onTerminalStateChange(null, 2);
        expect(myInstance.state.SOLstate).toBe(2);
    });

    it('Test startSOL', () => {
        // Initialization of ConnectProps
        let solprop: SOLProps = {
            deviceId: "abcd-efh-ijkl-mnop",
            mpsServer: "1.2.3.4:1234"
        };

        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;
        myInstance.redirector = new AMTRedirector1(myInstance.logger,
            Protocol.SOL,
            new FileReader(),
            "abcd-efgh-ijkl-mnop",
            16994,
            '',
            '',
            0,
            0,
            "1.2.3.4:9876" + '/relay');

        //call the function and check the expected output
        myInstance.startSOL();
        expect(myInstance.redirector.startvariable).toBe(5);
    });

    it('Test stopSOL', () => {
        // Initialization of ConnectProps
        let solprop: SOLProps = {
            deviceId: "abcd-efh-ijkl-mnop",
            mpsServer: "1.2.3.4:1234"
        };

        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;
        myInstance.redirector = new AMTRedirector1(myInstance.logger,
            Protocol.SOL,
            new FileReader(),
            "abcd-efgh-ijkl-mnop",
            16994,
            '',
            '',
            0,
            0,
            "1.2.3.4:9876" + '/relay');

        //call the function and check the expected output
        myInstance.startSOL();
        myInstance.stopSOL();
        expect(myInstance.state.SOLstate).toBe(0);
    });

    it('Test onTerminalStateChange', () => {
        // Initialization of ConnectProps
        let solprop: SOLProps = {
            deviceId: "abcd-efh-ijkl-mnop",
            mpsServer: "1.2.3.4:1234"
        };

        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;

        //call the function and check the expected output
        myInstance.onTerminalStateChange(null, 4);
        expect(myInstance.state.SOLstate).toBe(4);
    });

    it('Test handleSOLConnect to start', () => {
        // Initialization of ConnectProps
        let solprop: SOLProps = {
            deviceId: "abcd-efh-ijkl-mnop",
            mpsServer: "1.2.3.4:1234"
        };
        let e = new mockeventpersist();

        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;

        myInstance.redirector = new AMTRedirector1(myInstance.logger,
            Protocol.SOL,
            new FileReader(),
            "abcd-efgh-ijkl-mnop",
            16994,
            '',
            '',
            0,
            0,
            "1.2.3.4:9876" + '/relay');

        //call the function and check the expected output
        myInstance.onTerminalStateChange(null, 0);
        myInstance.handleSOLConnect(e);
        expect(myInstance.redirector.startvariable).toBe(5);
    });

    it('Test handleSOLConnect to stop', () => {
        // Initialization of ConnectProps
        let solprop: SOLProps = {
            deviceId: "abcd-efh-ijkl-mnop",
            mpsServer: "1.2.3.4:1234"
        };
        let e = new mockeventpersist();

        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;

        myInstance.redirector = new AMTRedirector1(myInstance.logger,
            Protocol.SOL,
            new FileReader(),
            "abcd-efgh-ijkl-mnop",
            16994,
            '',
            '',
            0,
            0,
            "1.2.3.4:9876" + '/relay');

        //call the function and check the expected output
        myInstance.onTerminalStateChange(null, 1);
        myInstance.handleSOLConnect(e);
        expect(myInstance.state.isConnected).toBe(false);
        expect(myInstance.state.SOLstate).toBe(1);
    });

    it('Test handleWriteToXterm', () => {
        // Initialization of ConnectProps
        let solprop: SOLProps = {
            deviceId: "abcd-efh-ijkl-mnop",
            mpsServer: "1.2.3.4:1234"
        };

        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;
        myInstance.term = new terminal();

        //call the function and check the expected output
        myInstance.handleWriteToXterm('abcdef');
        expect(myInstance.term.writestring).toBe('abcdef');
    });

    it('Test handleClearTerminal', () => {
        // Initialization of ConnectProps

        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;
        myInstance.term = new terminal();

        //call the function and check the expected output
        myInstance.handleClearTerminal();
        expect(myInstance.term.resetvalue).toBe(1);
    });

    it('should call the handle key events on trigger ', () => {
        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;

        myInstance.terminal = new AmtTerminal();
        myInstance.terminal.TermSendKeys = jest.fn((domEvent) => { });
        myInstance.terminal.handleKeyDownEvents = jest.fn((domEvent) => { });

        const domEvent = {
            target: {
                value: ''
            }
        }
        myInstance.handleKeyPress(domEvent);
        myInstance.handleKeyDownPress(domEvent);
        expect(myInstance.terminal.TermSendKeys).toHaveBeenCalled()
    });

    it('should update the component from the child component on the feature and power status', () => {
        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;

        myInstance.handleFeatureStatus('enabled');
        myInstance.updatePowerStatus();
        myInstance.handlePowerStatus('sleep');

        expect(sol.state('isPowerStateLoaded')).toEqual(true);
        expect(sol.state('deviceOnSleep')).toEqual('sleep');
        expect(sol.state('solNotEnabled')).toEqual('enabled');

        myInstance.handleFeatureStatus('notEnabled');
        expect(sol.state('solNotEnabled')).toEqual('notEnabled');

        myInstance.handleFeatureStatus('failed');
        expect(sol.state('solNotEnabled')).toEqual('failed');

        myInstance.handlePowerStatus('poweron');
        expect(sol.state('deviceOnSleep')).toEqual('poweron');

        myInstance.handlePowerStatus('failed');
        expect(sol.state('deviceOnSleep')).toEqual('failed');

    });

    it('should handle the power actions by showing appropriate message when sol is connected', async () => {
        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;

        sol.setState({
            SOLstate: 3
        });

        myInstance.context = {
            data: {
                mpsKey: 'APIKEYFORMPS123!'
            }
        }

        const event = {
            detail: 0,
            target: {
                value: '8'
            }
        }

        myInstance.handlePowerOptions(event);
        expect(sol.state('message')).toEqual('Power Off not allowed while termina1 is connected');
        expect(sol.state('showSuccess')).toEqual(true);

        
        //expect()
    })

    it('should handle the power action by sending an api call to the amt device', async() => {
        const sol = shallow(<Sol {...solprop} />);
        let myInstance = sol.instance() as Sol;

        HttpClient.post = jest.fn(() => Promise.resolve({
            Body: {
                ReturnValueStr: 'SUCCESS'
            }
        }));

        const powerEvent = {
            detail: 0,
            target: {
                value: '4'
            }
        };

        sol.setState({
            SOLstate: 3
        });

        myInstance.context = {
            data: {
                mpsKey: 'APIKEYFORMPS123!'
            }
        }
        myInstance.handlePowerOptions(powerEvent);
        expect(HttpClient.post).toHaveBeenCalled()
    })
});
