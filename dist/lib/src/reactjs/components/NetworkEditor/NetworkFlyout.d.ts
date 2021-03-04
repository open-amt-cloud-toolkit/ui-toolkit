/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
export interface NetworkFlyoutProps {
    close?: any;
    rpsServer?: string | null;
    createNotification?: any;
    selectedNetwork?: any;
    isEdit?: boolean;
}
export declare class NetworkFlyout extends React.Component<NetworkFlyoutProps, {}> {
    render(): React.ReactNode;
}
