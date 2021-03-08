/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
import './CiraEditor.scss';
export interface CiraCongigProps {
    close?: any;
    rpsServer?: string | null;
    mpsServer?: string | null;
    createNotification?: any;
    isEdit?: boolean;
    selectedCiraConfigs?: any;
}
/**
 * Wrapper component for rendering flyout and create CIRA config form
 */
export declare class CiraConfigFlyout extends React.Component<CiraCongigProps> {
    render(): React.ReactNode;
}
