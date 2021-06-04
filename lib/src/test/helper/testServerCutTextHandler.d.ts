/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { IServerCutTextHandler } from '../../core';
declare class ServerCutTextHandler implements IServerCutTextHandler {
    handleServerCutText(acc: string): number;
}
export { ServerCutTextHandler };
