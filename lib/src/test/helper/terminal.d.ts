/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
export declare class Terminal {
    writestring: string;
    resetvalue: number;
    constructor();
    write(strarg: string): void;
    reset(): void;
}
