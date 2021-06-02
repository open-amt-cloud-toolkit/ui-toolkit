/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { Desktop } from '../Desktop';
import { ICommunicator } from '../ICommunicator';
export declare const CommsHelper: {
    sendRefresh(parent: Desktop, comm: ICommunicator): void;
    sendKey(comm: ICommunicator, k: any, d: number): any;
    sendKvmData(parent: Desktop, comm: ICommunicator, x: any): any;
    sendKeepAlive(parent: Desktop, comm: ICommunicator): any;
    sendCtrlAltDelMsg(comm: ICommunicator): any;
    sendCad(comm: ICommunicator): any;
};
