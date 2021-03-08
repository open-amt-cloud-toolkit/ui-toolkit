/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react';
import { domainGridProps } from './DomainGrid';
export interface domainFlyoutProps {
    close?: any;
    rpsServer?: string | null;
    notificationCallback?: any;
    selectedDomain?: any;
    isEdit?: boolean;
}
export interface domainFlyoutState {
    nameBlur?: string;
    domainSuffixBlur?: string;
    provisioningCertBlur?: any;
    provisioningCertPasswordBlur?: string;
    invalidFile?: boolean;
    fileName?: string;
    showPassword?: boolean;
    domainFormDetails?: any;
}
export declare class DomainFlyout extends React.Component<domainFlyoutProps, domainFlyoutState> {
    certRef: any;
    constructor(props: domainGridProps);
    componentDidUpdate(prevProps: any): void;
    populateFormFields: () => void;
    handleSubmit: (e: any) => Promise<any>;
    handleChange: (e: any) => void;
    handleBlur: (e: any) => void;
    handleClick: (e: any) => void;
    readCertFile: (e: any) => any;
    handleShowPassword: () => void;
    render(): React.ReactNode;
}
