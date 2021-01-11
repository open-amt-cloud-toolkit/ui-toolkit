/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import {TimeRenderer} from '../reactjs/components/shared/TimeRenderer';

describe('Test time renderer component', () => {
    it('should return the formatted time from the component', () => {
        const time: any = {
            value: `Friday, December 18, 2020 1:42 AM`
        };
        const result = TimeRenderer(time);
        console.info('result', result);
        expect(result).toEqual(`2020-12-18 01:42`)
    })
})