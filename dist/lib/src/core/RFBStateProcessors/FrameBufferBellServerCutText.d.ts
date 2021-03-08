/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { ICommunicator } from '../ICommunicator';
import { IStateProcessor } from '../IStateProcessor';
import { TypeConverter } from '../Converter';
import { IServerCutTextHandler } from '../IServerCutTextHandler';
declare class FrameBufferBellServerCutText implements IStateProcessor {
    wsSocket: ICommunicator;
    next: IStateProcessor;
    cmdSize: number;
    binaryEncDec: TypeConverter;
    serverCutTextHandler: IServerCutTextHandler;
    updateRFBState: any;
    constructor(comm: ICommunicator, serverCutTextHandler: IServerCutTextHandler, updateRFBState: (state: number) => void);
    processState(acc: string): number;
}
export { FrameBufferBellServerCutText };
