/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
import '../CIRAEditor/CiraEditor.scss';
import './CiraConfigForm.scss';
export interface formProps {
    handleSubmit?: any;
    close?: any;
    rpsServer?: string | null;
    mpsServer?: string | null;
    notificationCallback?: any;
    showProfileError?: boolean;
    isEdit?: boolean;
    selectedCiraConfigs?: any;
}
export interface formState {
    ciraConfig?: any;
    configName?: any;
    mpsServerAddress?: any;
    configName_blur?: boolean;
    mpsPort_blur?: boolean;
    username_blur?: boolean;
    password_blur?: boolean;
    commonName_blur?: boolean;
    mpsServerAddress_blur?: boolean;
    profileConfigError?: any;
    mpsRootCertificate?: any;
    isAutoLoad?: boolean;
    mpsRootCertificate_blur?: boolean;
    isCertLoaded?: boolean;
    isError?: boolean;
    mpsCertErrorMsg?: string;
    showPassword?: boolean;
    oldCiraConfig?: any;
    mpsServerAddresserror?: boolean;
}
/**
 * Form component for creating CIRA config scripts
 */
export declare class CiraConfigForm extends React.Component<formProps, formState> {
    constructor(props: formProps);
    componentDidUpdate(prevProps: any): void;
    trimRootCert: (cert: any) => any;
    handleChange: (e: any) => void;
    handleBlur: (e: any) => void;
    loadMpsCertificate: () => Promise<any>;
    handleSubmit: (e: any) => Promise<any>;
    toggleFormat: (status: any) => void;
    handleShowPassword: () => void;
    render(): React.ReactNode;
}
