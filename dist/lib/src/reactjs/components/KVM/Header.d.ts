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
export interface PowerStates {
    powerState: number;
    showSuccess: boolean;
    message: string;
    isSelected: boolean;
    type: string;
    kvmNotEnabled: string;
    deviceOnSleep: string;
    isPowerStateLoaded: boolean;
}
export declare class Header extends React.Component<IHeaderProps, PowerStates> {
    constructor(props: IHeaderProps);
    /** send power actions to AMT device */
    handlePowerOptions: (e: any) => Promise<any>;
    /** callback functions from child components to update the state values */
    handleFeatureStatus: (value: any) => void;
    handlePowerStatus: (value: any) => void;
    updatePowerStatus: () => void;
    render(): JSX.Element;
}
