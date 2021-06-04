/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { IDataProcessor } from '../../core';
export declare class TestDataProcessor implements IDataProcessor {
    static processeddata: string;
    processData(data: string): void;
}
