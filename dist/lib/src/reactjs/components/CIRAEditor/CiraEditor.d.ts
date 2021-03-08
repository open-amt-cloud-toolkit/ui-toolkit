/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
import './CiraEditor.scss';
export interface CiraEditorProps {
    rpsServer: string | null;
    mpsServer: string | null;
}
export interface CiraEditorState {
    openFlyout?: boolean;
    showPopup?: boolean;
    showMessage?: boolean;
    message?: string;
    type?: string;
    updateCiraGrid?: any;
    selectedCiraConfigs: any;
    isEdit: boolean;
}
/**
 * Wrapper component for rendering CIRA grid and header for CIRA config scripts control
 */
export declare class CiraEditor extends React.Component<CiraEditorProps, CiraEditorState> {
    constructor(props: CiraEditorProps);
    togglePopup: () => void;
    confirmDelete: () => Promise<any>;
    showNotification: () => ReturnType<typeof setTimeout>;
    getSelectedCiraConfigs: (ciraConfigs: any) => void;
    handleChange: () => void;
    handleEdit: () => void;
    createNotification: (success: any, message: any) => void;
    render(): React.ReactNode;
}
