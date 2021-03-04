/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { IRLEDecoder } from '../IRLEDecoder';
import { Desktop } from '../Desktop';
declare class RLEDecoder implements IRLEDecoder {
    parent: Desktop;
    constructor(parent: Desktop);
    Decode(data: string, ptr: number, x: number, y: number, width: number, height: number, s: number, datalen: number): any;
}
export { RLEDecoder };
