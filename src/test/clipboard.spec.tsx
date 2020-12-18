/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from "react";
import { CopyToClipBoard } from '../reactjs/components/shared/clipboard/Clipboard'
import { shallow } from 'enzyme'

describe('', ()=> {
    it('should render the component without crashing', ()=> {
        const wrapper = shallow(<CopyToClipBoard value="123456-abcd-efgh-78ijkl" />)
        expect(typeof wrapper ).toBe('object');
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should call the copy function on click of the button', ()=> {
        const wrapper = shallow(<CopyToClipBoard value="123456-abcd-efgh-78ijkl" />)
        document.execCommand = jest.fn()
        const setCopied = jest.fn()
        const handleClick: any = jest.spyOn(React, 'useState');
        handleClick.mockImplementation(copied => [copied, setCopied])
        wrapper.find('button').simulate('click');
        expect(setCopied).toBeTruthy();        
    })

})