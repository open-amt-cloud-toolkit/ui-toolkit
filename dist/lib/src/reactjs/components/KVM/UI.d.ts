/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { IDataProcessor, IKvmDataCommunicator, ILogger, Desktop } from '../../../core';
import { MouseHelper, KeyBoardHelper } from '../../../core/Utilities';
import React from 'react';
import './UI.scss';
export interface KVMProps {
    deviceId: string | null;
    mpsServer: string | null;
    mouseDebounceTime: number;
    canvasHeight: string;
    canvasWidth: string;
    autoConnect?: boolean;
    authToken: string;
}
export declare class KVM extends React.Component<KVMProps, {
    kvmstate: number;
    encodingOption: number;
}> {
    module: Desktop | any;
    dataProcessor: IDataProcessor | any;
    redirector: IKvmDataCommunicator | any;
    mouseHelper: MouseHelper | any;
    logger: ILogger;
    keyboard: KeyBoardHelper | any;
    desktopSettingsChange: boolean;
    ctx: CanvasRenderingContext2D;
    fr: FileReader;
    constructor(props: KVMProps);
    saveContext(ctx: CanvasRenderingContext2D): void;
    init(): void;
    cleanUp(): void;
    componentWillUnmount(): void;
    onRedirectorError(): void;
    reset(): void;
    OnConnectionStateChange(redirector: any, state: number): any;
    changeDesktopSettings(settings: any): void;
    startKVM(): void;
    stopKVM(): void;
    getRenderStatus(): any;
    handleConnectClick(e: any): void;
    componentDidUpdate(prevProps: any): void;
    render(): React.ReactNode;
}
