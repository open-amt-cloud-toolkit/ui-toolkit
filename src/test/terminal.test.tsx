/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import Term from "../reactjs/components/SerialOverLAN/Terminal"
import { IPropTerminal } from "../reactjs/components/SerialOverLAN/Terminal"
import { Terminal } from 'xterm';

import * as React from 'react';
import { shallow } from 'enzyme'


describe("Test Term class", () => {

    it('Test render() in Term class', () => {
        
        const t = new Terminal({
            cursorStyle: 'block',
            fontWeight: 'bold',
            rows: 30,
            cols: 100
        });

        let handleKeyPress = (domEvent) => {
            this.terminal.TermHandleKeyDown(domEvent)
            this.terminal.TermHandleKeys(domEvent)
        }
        let handleKeyDownPress =(domEvent)=>{
            this.terminal.handleKeyDownEvents(domEvent)
        }
        // Initialization of ConnectProps
        let terminal: IPropTerminal = {
            handleKeyPress: (handleKeyPress),
            xterm: (t),
            handleKeyDownPress:(handleKeyDownPress)
        };

        const term = shallow(<Term { ...terminal } />);

        // Output
        console.log(term.debug());
        expect(term).toMatchSnapshot();
    });
});