import { ICommunicator } from './ICommunicator';
import { ILogger } from './ILogger';
/**
 * Protocol for different Redir protocols. SOL=1,KVM=2,IDER=USB-R
 */
export declare enum Protocol {
    SOL = 1,
    KVM = 2,
    IDER = 3
}
/**
 * AMTRedirector provides all communication over WebSockets
 */
export declare class AMTRedirector implements ICommunicator {
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
    onProcessData: (data: string) => void;
    onStart: () => void;
    onNewState: (state: number) => void;
    onStateChanged: (redirector: any, state: number) => void;
    onError: () => void;
    constructor(logger: ILogger, protocol: number, fr: FileReader, host: string, port: number, user: string, pass: string, tls: number, tls1only: number, server?: string);
    /**
     * Returns WebSocket path to connect to using the current environment.
     * Uses host(deviceid), port, tls, tlsv1only, user, pass options to build the url.
     */
    private getWsLocation;
    /**
     * Check if current environment is browser or test
     */
    private isBrowser;
    /**
     * gets Ws Location and starts a websocket for listening
     * @param c is base type for WebSocket
     */
    start<T>(c: new (path: string) => T): any;
    onSocketConnected(): any;
    /**
     * Called when there is new data on the websocket
     * @param e data received over the websocket
     */
    onMessage(e: any): any;
    /**
     * Called from onMessage
     * @param data data over the wire
     */
    private onSocketData;
    hex_md5(str: string): string;
    socketSend(data: string): any;
    /**
     * Send sends data over the websocket to the server.
     * @param data data to send to server
     */
    send(data: string): any;
    sendAmtKeepAlive(): any;
    generateRandomNonce(length: number): string;
    onSocketClosed(e: Event): any;
    onStateChange(newstate: number): any;
    stop(): void;
}
