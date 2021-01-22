/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { shallow } from 'enzyme';
import React from 'react';
import { CustomHeader, HeaderParams } from '../reactjs/components/AuditLog/CustomHeader';


describe('Custom header for auditlog', () => {
    const headerParams: HeaderParams = {
        description: 'Header tooltip',
        displayName: 'Event Name',
        enableSorting: false
    }

    it('should load the component without crashing', () => {
        const wrapper = shallow(<CustomHeader {...headerParams} />)
        expect(typeof wrapper).toBe('object')
    })

    it('should display the message on clicking the icon ', () => {
        const wrapper = shallow(<CustomHeader {...headerParams} />)
        const instance = wrapper.instance() as CustomHeader;

        const clickEvent = {
            target: {
                getBoundingClientRect: jest.fn(() => ({ left: '-100', right: '0', top: '200', bottom: '200' }))
            }
        }

        // Avoid `attachTo: document.body` Warning
        const div = document.createElement('div');
        div.setAttribute('id', 'grid-wrapper');
        document.body.appendChild(div);

        instance.handleMouseClick(clickEvent);
        expect(instance.tooltipStyles.position).toEqual('fixed');
        expect(wrapper.state('isMouseOver')).toBe(true);
        expect(wrapper.state('message')).toEqual('Header tooltip');
    })

    it('should adjust the tooltip styles left position to avoid ui being chopped off', () => {
        const wrapper = shallow(<CustomHeader {...headerParams} />)
        const instance = wrapper.instance() as CustomHeader;
        instance.tooltipStyles.left = -20;
        instance.adjustTooltipStyle();
        expect(instance.tooltipStyles.left).toEqual(0);
    })

    it('should clear the tooltip message on mouse move', () => {
        const wrapper = shallow(<CustomHeader {...headerParams} />)
        const instance = wrapper.instance() as CustomHeader;
        wrapper.setState({message: 'Header tooltip', isMouseOver: true});

        instance.handleMouseLeave('event');
        expect(wrapper.state('message')).toEqual('')
    })
})