/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
import './NetworkEditor.scss';
export interface NetworkEditorProps {
    rpsServer: string | null;
}
export interface NetworkEditorState {
    openFlyout: boolean;
    showPopup: boolean;
    selectedNetwork: any;
    isEdit?: boolean;
    showMessage?: boolean;
    message?: string;
    type?: string;
    updateNetworkGrid?: boolean;
}
export declare class NetworkEditor extends React.Component<NetworkEditorProps, NetworkEditorState> {
    constructor(props: NetworkEditorProps);
    getSelectedNetwork: (network: any) => void;
    handleChange: () => void;
    handleEdit: () => void;
    togglePopup: () => void;
    createNotification: (success: any, response: any) => void;
    showNotification: () => ReturnType<typeof setTimeout>;
    confirmDelete: () => Promise<any>;
    render(): React.ReactNode;
}
