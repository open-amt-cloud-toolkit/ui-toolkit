/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
/**
 * Customized column header for ag-grid to include icons and handle header tooltips
 */
import * as React from 'react';
export interface HeaderParams {
    displayName: string;
    description: string;
    enableSorting: boolean;
}
export declare class CustomHeader extends React.Component<HeaderParams, {
    isMouseOver: boolean;
    message: string;
}> {
    tooltipStyles: any;
    constructor(props: any);
    /**
       * adjustments to avoid tooltip edges being chopped off
       */
    adjustTooltipStyle: () => void;
    /**
       * dynamically get the icon position and adjust tooltip styles
       */
    prepareTooltipStyle: (event: any) => void;
    handleMouseClick: (event: any) => any;
    handleMouseLeave: () => any;
    render(): React.ReactNode;
}
