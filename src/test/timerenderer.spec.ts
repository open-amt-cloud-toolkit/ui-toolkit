/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import {TimeRenderer} from '../reactjs/components/shared/TimeRenderer';

describe('Test time renderer component', () => {
    it('should return the formatted time from the component', () => {
        const time: any = {
            value: new Date('2020-12-18')
        };
        const result = TimeRenderer(time);
        expect(result).toEqual(`2020-12-18 00:00`)
    })
})