/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { PcsGrid, pcsGridProps } from '../reactjs/components/shared/pcsGrid/PcsGrid';



describe('testing pcs grid', () => {

    var spy = jest.fn();
    const pcsProps: pcsGridProps = {
        sizeColumnsToFit: true,
        onGridReady: spy,
        getSoftSelectId: '2',
        softSelectId: '2',
        onRowClicked: true
    }
    // beforeEach(() => {
    //     app = mount(<PcsGrid {...pcsProps}/>);
    //   });

    //   it("renders a grid", () => {
    //     expect(app.find("AgGridReact").length).toBe(1);
    //   });

    it('check if grid exists or not', () => {
        const pcsgrid = shallow(<PcsGrid {...pcsProps} />)
        expect(pcsgrid.exists()).toBe(true)
    });
    it('renders a grid', () => {
        const pcsgrid = shallow(<PcsGrid {...pcsProps} />)
        expect(pcsgrid.find("AgGridReact").length).toBe(1);
    })
})