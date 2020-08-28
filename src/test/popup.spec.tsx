/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react';
import { shallow } from 'enzyme';

import {Popup} from '../reactjs/components/shared/popup/Popup'

describe('popup test', ()=> {

    it('should load the popup component without crashing', ()=> {
        const wrapper = shallow(<Popup text={'are you sure?'} confirm={()=> {}} closePopup={() =>{}} className='profile-popup'/>)

        expect(wrapper.find('.popup')).toHaveLength(1)
        expect(wrapper.find('h4')).toHaveLength(1)
        expect(wrapper.find('Button')).toHaveLength(2)
    })
})