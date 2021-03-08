/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
export declare class HttpClient {
    static get(url: any, apiKey: any, options?: {}): Promise<any>;
    static post(url: any, body?: {}, apiKey?: any, isMps?: any, options?: {}): Promise<any>;
    static delete(url: any, apiKey?: any, options?: {}): Promise<any>;
    static patch(url: any, body?: {}, apiKey?: any, options?: {}): Promise<any>;
    static fetch(url: any, options?: {}): Promise<any>;
    static fetchRPS(url: any, options?: {}): Promise<any>;
}
