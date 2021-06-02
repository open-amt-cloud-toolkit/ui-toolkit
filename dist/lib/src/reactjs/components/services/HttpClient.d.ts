/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
export declare const HttpClient: {
    get(url: any, options?: {}): Promise<any>;
    post(url: any, body?: {}, options?: {}): Promise<any>;
    delete(url: any, options?: {}): Promise<any>;
    fetch(url: any, options?: {}): Promise<any>;
};
