/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react';
import 'xterm/css/xterm.css';
import './sol.scss';
export interface SOLProps {
    deviceId: string | null;
    mpsServer: string | null;
    autoConnect?: boolean;
    authToken: string;
}
export interface SOLStates {
    isConnected: boolean;
    SOLstate: number;
    powerState: number;
    showSuccess: boolean;
    message: string;
    isSelected: boolean;
    type: string;
    solNotEnabled: string;
    deviceOnSleep: string;
    isPowerStateLoaded: boolean;
}
/** container class for SOL */
export declare class Sol extends React.Component<SOLProps, SOLStates> {
    redirector: any;
    terminal: any;
    logger: any;
    dataProcessor: any;
    callback: any;
    term: any;
    fr: FileReader;
    constructor(props: SOLProps);
    init: () => void;
    cleanUp: () => void;
    componentDidMount(): void;
    /** write the processed data from webscoket in to xterm */
    handleWriteToXterm: (str: any) => any;
    handleClearTerminal: () => any;
    /** capture the data on xterm key press */
    handleKeyPress: (domEvent: any) => any;
    handleKeyDownPress: (domEvent: any) => any;
    startSOL: () => void;
    stopSOL: () => void;
    handleSOLConnect: (e: any) => void;
    onTerminalStateChange: (redirector: any, state: number) => void;
    /** callback functions from child components to update the state values */
    handleFeatureStatus: (value: any) => void;
    getSOLState: () => any;
    render(): React.ReactNode;
}
