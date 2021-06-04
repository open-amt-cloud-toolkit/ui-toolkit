/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { Desktop, ILogger } from '../../core';
declare class AmtDesktop2 extends Desktop {
    rotation: number;
    useZRLE: boolean;
    oldMouseX: number;
    oldMouseY: number;
    lastMouseX: number;
    lastMouseY: number;
    bpp: number;
    kvmDataSupported: boolean;
    onKvmDataAck: any;
    urlvars: any;
    onKvmDataPending: any[];
    sparew: number;
    spareh: number;
    sparew2: number;
    spareh2: number;
    spare: any;
    sparecache: any;
    frameRateDelay: number;
    inflate: any;
    logger: ILogger;
    holding: boolean;
    canvasCtx: any;
    tcanvas: any;
    width: number;
    height: number;
    canvasId: string;
    focusMode: number;
    rwidth: number;
    rheight: number;
    ScreenWidth: number;
    ScreenHeight: number;
    lastKeepAlive: number;
    buttonmask: number;
    state: number;
    canvasControl: any;
    scrolldiv: any;
    focusmode: number;
    lastMouseX2: number;
    noMouseRotate: boolean;
    updateScreenDimensions: (width: number, height: number) => void;
    onKvmData: (data: string) => void;
    onScreenResize: (width: number, height: number, canvasId: string) => void;
    onScreenSizeChange: (width: number, height: number) => void;
    setDeskFocus: (el: string, focusmode: number) => void;
    getDeskFocus: (el: string) => any;
    protocol: number;
    constructor();
    processData(data: string): void;
    onStateChange(state: number): void;
    start(): void;
    onSendKvmData(data: string): void;
    onSend: (data: string) => void;
}
export { AmtDesktop2 };
