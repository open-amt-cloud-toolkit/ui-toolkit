/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
import './ConnectButton.scss';
export interface ConnectProps {
    kvmstate: number;
    handleConnectClick: (e: any) => void;
}
export declare class ConnectButton extends React.Component<ConnectProps, {}> {
    render(): React.ReactNode;
}
