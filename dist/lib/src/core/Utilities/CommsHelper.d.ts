/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { Desktop } from '../Desktop';
import { ICommunicator } from '../ICommunicator';
export declare class CommsHelper {
    static sendRefresh(parent: Desktop, comm: ICommunicator): void;
    static sendKey(comm: ICommunicator, k: any, d: number): any;
    static sendKvmData(parent: Desktop, comm: ICommunicator, x: any): any;
    static sendKeepAlive(parent: Desktop, comm: ICommunicator): any;
    static sendCtrlAltDelMsg(comm: ICommunicator): any;
    static sendCad(comm: ICommunicator): any;
}
