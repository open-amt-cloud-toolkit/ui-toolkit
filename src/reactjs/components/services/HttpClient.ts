/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { prepareHeaders } from '../shared/Utilities'

export class HttpClient {
  static async get (url, options = {}): Promise<any> {
    const jsonHeaders = prepareHeaders()
    return await HttpClient.fetch(url, {
      ...options,
      method: 'GET',
      headers: jsonHeaders
    })
  }

  static async post (url, body = {}, options = {}): Promise<any> {
    const jsonHeaders = prepareHeaders()
    return await HttpClient.fetch(url, {
      ...options,
      method: 'POST',
      body: body,
      headers: jsonHeaders
    })
  }

  static async delete (url, options = {}): Promise<any> {
    const jsonHeaders = prepareHeaders()
    return await HttpClient.fetch(url, {
      ...options,
      method: 'DELETE',
      headers: jsonHeaders
    })
  }

  static async fetch (url, options = {}): Promise<any> {
    (options as any).mode = 'cors';
    (options as any).credentials = 'include';
    (options as any).withCredentials = true
    return await fetch(url, options).then(async result => await result.json())
  }
}
