/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
import './Btn.scss';
export interface ButtonProps {
    children?: any;
    className?: string;
    iconName?: any;
    iconColor?: string;
    iconSize?: any;
    isDisplay?: boolean;
    label?: string;
    btnProps?: any;
    onClick: any;
}
/** Reusable display component for button UI throughout the app */
export declare class Button extends React.Component<ButtonProps> {
    render(): React.ReactNode;
}
