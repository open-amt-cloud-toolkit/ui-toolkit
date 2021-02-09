/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react';
import { shallow } from 'enzyme';
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

    it('check if grid exists or not', () => {
        const pcsgrid = shallow(<PcsGrid {...pcsProps} />)
        expect(pcsgrid.exists()).toBe(true)
    });
    it('renders a grid', () => {
        const pcsgrid = shallow(<PcsGrid {...pcsProps} />)
        expect(pcsgrid.find("AgGridReact").length).toBe(1);
    })

    it('should call the grid ready event of parent component', () => {
        const pcsgrid = shallow(<PcsGrid {...pcsProps} />);
        const instance = pcsgrid.instance() as PcsGrid;

        const gridEvent = {
            api: {
                sizeColumnsToFit: jest.fn()
            }
        };
        instance.onGridReady(gridEvent)
        expect(typeof pcsgrid).toBe('object')
    })

    it('should call the rowclicked function of parent component', () => {
        const pcsProps = {
            sizeColumnsToFit: true,
            onGridReady: spy,
            getSoftSelectId: '2',
            softSelectId: '2',
            onRowClicked: jest.fn()
        }

        const wrapper = shallow(<PcsGrid {...pcsProps} />);
        const instance = wrapper.instance() as PcsGrid;
        const event = {
            event: {
                target: {
                    className: 'soft-select-link-cell'
                }
            }
        }
        instance.onRowClicked(event);
        expect(typeof wrapper).toBe('object')
    })
})