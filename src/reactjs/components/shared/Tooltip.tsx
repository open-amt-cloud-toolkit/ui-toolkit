/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

/* Tooltip component returns the tooltip message 
which  is passed as props */
import * as React from 'react';
import './Tooltip.scss';

interface TooltipProps {
    message: string,
    styles: any
}
export const Tooltip: React.SFC<TooltipProps> = props => {
    return (<div className='tooltip'>
        <span style={props.styles} id="tooltip-content" className='tooltip__text'>{props.message}</span>
        </div>);
}