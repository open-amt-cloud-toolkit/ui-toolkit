/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { AMTRedirector } from './AMTRedirector';
import { ILogger, IKvmDataCommunicator } from './Interfaces';
export declare class AMTKvmDataRedirector extends AMTRedirector implements IKvmDataCommunicator {
    onSendKvmData: (data: string) => void;
    constructor(logger: ILogger, protocol: number, fr: FileReader, host: string, port: number, user: string, pass: string, tls: number, tls1only: number, authToken: string, server?: string);
}
