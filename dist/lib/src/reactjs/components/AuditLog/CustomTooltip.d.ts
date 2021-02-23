/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
/**
 * Displays tooltip on ag-grid row hover
 */
import * as React from 'react';
import './CustomTooltip.scss';
interface CustomTooltipProps {
    rowIndex: number;
    api: any;
    column: any;
}
export declare class CustomTooltip extends React.Component<CustomTooltipProps> {
    getReactContainerClasses(): any;
    render(): React.ReactNode;
}
export {};
