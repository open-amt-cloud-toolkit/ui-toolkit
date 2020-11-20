/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
export class terminal
{
    writestring: string;
    resetvalue: number
    constructor(){
        this.writestring = ';'
        this.resetvalue = 0;
    }

    write(strarg: string){
        this.writestring = strarg;
    }

    reset()
    {
        this.resetvalue = 1;
    }
}