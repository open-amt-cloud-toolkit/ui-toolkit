/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import * as React from 'react';
import {shallow} from 'enzyme';

import {Button, ButtonProps} from '../reactjs/components/shared/btn/Btn';

describe('Btn tests', ()=> {
    it('should load the button without crashing', () => {
        const btnProps: ButtonProps = {
            cta: () => {}
        }

        const wrapper = shallow(<Button {...btnProps}>Click</Button>)
        console.info('btn component', wrapper.debug())
        expect(wrapper.find('button')).toHaveLength(1)
        expect(wrapper.find('.btn-text')).toHaveLength(1)
    })

    it('should load the icon without crashing', () => {
        const btnProps: ButtonProps = {
            isDisplay: true,
            iconName: 'power-off',
            iconColor:'red',
            iconSize: 'lg',
            label: 'Power Off',
            cta: () => {}
        }

        const wrapper = shallow(<Button {...btnProps}/>)
        console.info('btn component', wrapper.debug())
         expect(wrapper.find('button')).toHaveLength(1)
         expect(wrapper.find('FontAwesomeIcon')).toHaveLength(1)
    })
})