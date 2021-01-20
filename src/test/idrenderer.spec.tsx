/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react';
import { shallow } from 'enzyme';

import {IdRenderer} from '../reactjs/components/shared/IdRenderer';

describe('test idrenderer component', () => {
    it('should render the component without crashing', () => {
        const wrapper = shallow(<IdRenderer value={'abcdef-1234-ghijklmn'}/>)

        expect(typeof wrapper).toBe('object')
    })
})