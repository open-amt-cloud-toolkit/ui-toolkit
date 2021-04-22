/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import * as React from 'react';
export interface IHeaderProps {
    kvmstate: number;
    deviceId: string | null;
    server: string | null;
    handleConnectClick: (e: any) => void;
    changeDesktopSettings: (settings: any) => void;
    getConnectState: () => number;
}
export declare class Header extends React.Component<IHeaderProps> {
    render(): JSX.Element;
}
