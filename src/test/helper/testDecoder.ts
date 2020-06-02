/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { IRLEDecoder } from '../../core/IRLEDecoder';

class Decoder implements IRLEDecoder {
    Decode(acc:string, ptr: number,
           x: number,
           y: number,
           width: number,
           height: number,
           s: number,
           datalen: number): void {
    }
}

export { Decoder }