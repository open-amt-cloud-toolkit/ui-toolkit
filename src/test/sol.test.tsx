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
/*
    it('Test handlePowerOptions', async() => {
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
                        ReturnValueStr: 'SUCCESS'
                    }
                })
            });
        });
        const sol = shallow(<Sol { ...solprop } />);    
        let myInstance = sol.instance() as Sol;    

        //call the function and check the expected output
        await  myInstance.handlePowerOptions(ev).then(data => expect(myInstance.state.message).toEqual("Power action was success.please wait till system boots up"));
    });
	*/
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
/*
        HttpClient.post = jest.fn(function (arg1, arg2, arg3) {
            return fetch(arg1)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json<{ ReturnValueStr: 'FAIL'>()
            })
            .then(data => {
              return data.data
            })
        });*/

        const sol = shallow(<Sol { ...solprop } />);    
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

        const sol = shallow(<Sol { ...solprop } />);    
        let myInstance = sol.instance() as Sol; 

        //call the function and check the expected output
        myInstance.onTerminalStateChange(null,2);
        expect(myInstance.state.SOLstate).toBe(2);
    });

    it('Test startSOL', () => {
        // Initialization of ConnectProps
        let solprop: SOLProps = {
            deviceId: "abcd-efh-ijkl-mnop",
            mpsServer: "1.2.3.4:1234"
        };

        const sol = shallow(<Sol { ...solprop } />);    
        let myInstance = sol.instance() as Sol;
        myInstance.redirector = new AMTRedirector1(this.logger,
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

        const sol = shallow(<Sol { ...solprop } />);    
        let myInstance = sol.instance() as Sol;
        myInstance.redirector = new AMTRedirector1(this.logger,
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

        const sol = shallow(<Sol { ...solprop } />);    
        let myInstance = sol.instance() as Sol;

        //call the function and check the expected output
        myInstance.onTerminalStateChange(null,4);
        expect(myInstance.state.SOLstate).toBe(4);
    });

    it('Test handleSOLConnect to start', () => {
        // Initialization of ConnectProps
        let solprop: SOLProps = {
            deviceId: "abcd-efh-ijkl-mnop",
            mpsServer: "1.2.3.4:1234"
        };
        let e = new mockeventpersist();

        const sol = shallow(<Sol { ...solprop } />);   
        let myInstance = sol.instance() as Sol;

        myInstance.redirector = new AMTRedirector1(this.logger,
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
        myInstance.onTerminalStateChange(null,0);
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

        const sol = shallow(<Sol { ...solprop } />);   
        let myInstance = sol.instance() as Sol;

        myInstance.redirector = new AMTRedirector1(this.logger,
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

        const sol = shallow(<Sol { ...solprop } />);    
        let myInstance = sol.instance() as Sol;
        myInstance.term = new terminal();

        //call the function and check the expected output
        myInstance.handleWriteToXterm('abcdef');
        expect(myInstance.term.writestring).toBe('abcdef');
    });

	it('Test handleClearTerminal', () => {
		// Initialization of ConnectProps
	
		const sol = shallow(<Sol { ...solprop } />);
		let myInstance = sol.instance() as Sol;
		myInstance.term = new terminal();

		//call the function and check the expected output
		myInstance.handleClearTerminal();
		expect(myInstance.term.resetvalue).toBe(1);
    });
    
    /*
    it('Test change power state',()=>{
        let sol = shallow(<Sol { ...solprop } />);
        // let myInstance = sol.instance() as Sol;
        sol.setState({powerState:4})
       expect(sol.find(SnackBar).length).toBe(1)
    })*/
});
