/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react';
import './DomainEditor.scss';
export interface domainProps {
    rpsServer: string | null;
}
export interface domainState {
    openFlyout?: boolean;
    updateDomainGrid?: boolean;
    selectedDomain?: any;
    showPopup?: boolean;
    showMessage?: boolean;
    message?: string;
    type?: string;
    isEdit?: boolean;
}
export declare class DomainEditor extends React.Component<domainProps, domainState> {
    constructor(props: domainProps);
    getSelectedDomain: (domain: any) => void;
    togglePopup: () => void;
    handleChange: () => void;
    handleEdit: () => void;
    confirmDelete: () => Promise<any>;
    showNotification: () => ReturnType<typeof setTimeout>;
    notificationCallback: (success: any, message: any) => void;
    render(): React.ReactNode;
}
