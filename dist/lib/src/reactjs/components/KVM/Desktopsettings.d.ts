/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
export interface IDesktopSettings {
    changeDesktopSettings: (settings: any) => void;
    getConnectState: () => number;
}
export declare class DesktopSettings extends React.Component<IDesktopSettings> {
    desktopsettings: {
        encoding: number;
    };
    constructor(props: IDesktopSettings);
    changeEncoding(encoding: number): void;
    render(): React.ReactNode;
}
