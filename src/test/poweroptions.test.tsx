/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/


import { PowerOptions, PowerOptionProps } from "../reactjs/components/shared/PowerOptions"
import {availablePowerActions} from '../reactjs/components/shared/PowerActions'


describe("Test PowerOptions function component", () => {

    it('Test PowerOptions map', () => {

        //jest.mock('PowerOptions', () => ({ type: 2 }));
        // Initialization of ConnectProps
        const mockMyEventHandler = jest.fn()
        let solprop: PowerOptionProps = {
            availableOptions: availablePowerActions,
            onChange: mockMyEventHandler,
            isSelected: false,
            onBlur: false
        };
 
         //const props = {
             //node: document.querySelector('select')
         //}
        //fireEvent.change(getByTestId("select"), { target: { value: 2 } })

        //const wrapper = mount(<PowerOptions {...solprop}/>);
        //wrapper.find('select').simulate('change',{target: { value : '2'}});
        //expect(wrapper.find('.foo')).to.have.lengthOf(1);
        //console.log(PowerOptions(solprop).key);

        //PowerOptions
        //wrapper.find(Dropdown).simulate('change', '', { value: ['val'] })
        //expect(mockMyEventHandler).toHaveBeenCalledWith(['val'])

        //const term = shallow(<Term { ...terminal } />);

        // Output
        //expect(sol.props('deviceId')).toBe("abcd-efh-ijkl-mnop");
        //expect(sol.props('mpsServer')).toBe("1.2.3.4:1234");
        //expect(term).toMatchSnapshot();

        // callback function for Unit testing
        function callback() {
        }
    });
});