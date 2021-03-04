/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { IServerCutTextHandler } from '../IServerCutTextHandler';
import { IKvmDataCommunicator } from '../ICommunicator';
import { Desktop } from '../Desktop';
import { TypeConverter } from '../Converter';
declare class ServerCutTextHandler implements IServerCutTextHandler {
    binaryEncDec: TypeConverter;
    wsSocket: IKvmDataCommunicator;
    parent: Desktop;
    constructor(comm: IKvmDataCommunicator, parent: Desktop);
    handleServerCutText(acc: string): number;
}
export { ServerCutTextHandler };
