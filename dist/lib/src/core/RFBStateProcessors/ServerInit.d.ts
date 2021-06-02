/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { ICommunicator } from '../ICommunicator';
import { IStateProcessor } from '../IStateProcessor';
import { Desktop } from '../Desktop';
/**
 * Set supported encodings for RFB
 */
declare class ServerInit implements IStateProcessor {
    wsSocket: ICommunicator;
    next: IStateProcessor;
    parent: Desktop;
    updateRFBState: any;
    constructor(comm: ICommunicator, parent: Desktop, updateRFBState: (state: number) => void);
    processState(acc: string): number;
}
export { ServerInit };
