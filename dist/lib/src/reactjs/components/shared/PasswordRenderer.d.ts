/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { ICellRendererParams } from 'ag-grid-community';
import * as React from 'react';
import './PasswordRenderer.scss';
/**
 * Framework component for mask and un-masking password field on the ag-grid
 */
export declare class PasswordRenderer extends React.Component<ICellRendererParams, {
    togglePasswordField: boolean;
}> {
    constructor(props: any);
    togglePassword: () => void;
    render(): React.ReactNode;
}
