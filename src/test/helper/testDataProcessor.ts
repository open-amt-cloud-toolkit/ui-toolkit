
/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { IDataProcessor } from '../../core/IDataProcessor'

export class TestDataProcessor implements IDataProcessor {
    static processeddata = '';
    processData(data: string): void {
        TestDataProcessor.processeddata += data;
    }
}