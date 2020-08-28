/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { DeviceGrid,gridProps } from '../reactjs/components/DeviceGrid/DeviceGrid';

describe('testing device grid ui component', () => {
// Initialization of AuditLogProps
let deviceprops: gridProps = {
    deviceId: "1234",
    mpsServer: "localhost/mps"
};
    it('test device grid functionality', () => {
        const devicegrid = shallow(<DeviceGrid {...deviceprops}/>)
        expect(devicegrid.exists()).toBe(true)
    })

    it('testing device grid snapshot', () => {
        const devicegrid = shallow(<DeviceGrid {...deviceprops}/>)
        expect(devicegrid).toMatchSnapshot()
    })
})