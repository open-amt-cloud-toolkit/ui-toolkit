/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { Desktop } from '../Desktop';
import { ICommunicator } from '../Interfaces/ICommunicator';
import { UpDown } from './KeyboardHelper';
declare const CommsHelper: {
    sendRefresh(parent: Desktop, comm: ICommunicator): void;
    sendKey(comm: ICommunicator, k: number | any, d: UpDown): void;
    sendKvmData(parent: Desktop, comm: ICommunicator, x: any): void;
    sendKeepAlive(parent: Desktop, comm: ICommunicator): void;
    sendCtrlAltDelMsg(comm: ICommunicator): void;
    sendCad(comm: ICommunicator): void;
};
export { CommsHelper };
