/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import * as React from 'react';
import { IDataProcessor } from '../../../core/IDataProcessor';
import { Desktop } from '../../../core/Desktop';
import { IKvmDataCommunicator } from '../../../core/ICommunicator';
import { MouseHelper } from '../../../core/Utilities/MouseHelper';
import { ILogger } from '../../../core/ILogger';
import { KeyBoardHelper } from '../../../core/Utilities/KeyboardHelper';
export interface KVMProps {
    deviceId: string | null;
    mpsServer: string | null;
    mouseDebounceTime: number;
    canvasHeight: string;
    canvasWidth: string;
    autoConnect?: boolean;
}
export declare class RemoteDesktop extends React.Component<KVMProps, {
    kvmstate: number;
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
    render(): React.ReactNode;
}
