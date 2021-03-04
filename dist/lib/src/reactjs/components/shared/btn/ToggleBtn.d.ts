/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
import './ToggleBtn.scss';
export interface toggleBtnProps {
    isChecked?: boolean;
    switchStatus?: any;
}
export interface toggleBtnState {
    isChecked?: boolean;
}
export declare class ToggleBtn extends React.Component<toggleBtnProps, toggleBtnState> {
    certRef: any;
    constructor(props: toggleBtnProps);
    componentWillMount(): void;
    _handleChange: () => any;
    render(): React.ReactNode;
}
