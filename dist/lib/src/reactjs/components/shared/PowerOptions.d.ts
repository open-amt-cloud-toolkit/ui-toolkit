/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react';
export interface PowerOptionProps {
    availableOptions: any;
    onChange: any;
    isSelected: boolean;
    onBlur?: boolean;
}
export declare const PowerOptions: React.SFC<PowerOptionProps>;
