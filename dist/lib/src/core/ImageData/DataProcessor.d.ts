/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { IStateProcessor } from '../IStateProcessor';
import { IDataProcessor } from '../IDataProcessor';
import { StateProcessorFactory } from '../StateProcessorFactory';
import { ICommunicator } from '../ICommunicator';
import { Desktop } from '../Desktop';
import { ILogger } from '../ILogger';
/**
 * DataProcessor provides the functionality for processing different states of RFB leveraging
 * the different StateProcessors
 */
export declare class DataProcessor implements IDataProcessor {
    acc: string;
    remoteFrameBufferStateManager: IStateProcessor;
    stateProcessorFac: StateProcessorFactory;
    parent: Desktop;
    logger: ILogger;
    constructor(logger: ILogger, comm: ICommunicator, parent: Desktop);
    /**
     * processData is called from ICommunicator on new data coming over the wire
     * @param data is the current data block received on the web socket
     */
    processData(data: string): any;
    updateRFBState(state: number): void;
}
