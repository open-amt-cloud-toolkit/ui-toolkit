/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import * as React from 'react';
export interface ConnectProps {
    kvmstate: number;
    handleConnectClick: (e: any) => void;
}
export declare class ConnectButton extends React.Component<ConnectProps, {}> {
    render(): React.ReactNode;
}
