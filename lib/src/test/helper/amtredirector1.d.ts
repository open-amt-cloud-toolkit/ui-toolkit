/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { ILogger, AMTRedirector } from '../../core';
export declare enum Protocol {
    SOL = 1,
    KVM = 2,
    IDER = 3
}
/**
   * AMTRedirector provides all communication over WebSockets
   */
export declare class AMTRedirector1 extends AMTRedirector {
    state: number;
    socket: any;
    host: string;
    port: number;
    user: string;
    pass: string;
    tls: number;
    authUri: string;
    tlsv1only: number;
    connectState: number;
    protocol: Protocol;
    amtAccumulator: string;
    amtSequence: number;
    amtKeepAliveTimer: any;
    fileReader: FileReader;
    fileReaderInUse: boolean;
    fileReaderAcc: any[];
    randomNonceChars: string;
    RedirectStartSol: string;
    RedirectStartKvm: string;
    RedirectStartIder: string;
    urlvars: any;
    inDataCount: number;
    server: any;
    logger: ILogger;
    startvariable: number;
    stopvariable: number;
    onProcessData: (data: string) => void;
    onStart: () => void;
    onNewState: (state: number) => void;
    onStateChanged: (redirector: any, state: number) => void;
    onError: () => void;
    constructor(logger: ILogger, protocol: number, fr: FileReader, host: string, port: number, user: string, pass: string, tls: number, tls1only: number, server?: string);
    /**
       * gets Ws Location and starts a websocket for listening
       * @param c is base type for WebSocket
       */
    start<T>(c: new (path: string) => T): void;
    onSocketConnected(): void;
    /**
       * Called when there is new data on the websocket
       * @param e data received over the websocket
       */
    onMessage(e: any): void;
    hex_md5(str: string): string;
    socketSend(data: string): void;
    /**
       * Send sends data over the websocket to the server.
       * @param data data to send to server
       */
    send(data: string): void;
    sendAmtKeepAlive(): void;
    generateRandomNonce(length: number): any;
    onSocketClosed(e: Event): void;
    onStateChange(newstate: number): void;
    stop(): void;
}
