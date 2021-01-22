/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react';
import { shallow } from 'enzyme';

import {Flyout} from '../reactjs/components/shared/flyout/flyout';

describe('Test flyout component', () => {
    it('should render the flyout component without crashing', () => {
        const props = {
            className: 'flyout',
            children: `<div>Hello</div>`
        };

        const flyout = Flyout(props);

        expect(typeof flyout).toBe('object');


    })
})

