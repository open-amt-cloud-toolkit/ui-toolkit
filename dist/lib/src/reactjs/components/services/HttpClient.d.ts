/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
export declare class HttpClient {
    static get(url: any, options?: {}): Promise<any>;
    static post(url: any, body?: {}, options?: {}): Promise<any>;
    static delete(url: any, options?: {}): Promise<any>;
    static fetch(url: any, options?: {}): Promise<any>;
}
