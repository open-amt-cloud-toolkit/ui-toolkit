/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { isFalsy, prepareHeaders } from '../shared/Utilities'

export class HttpClient {
  static async get (url, apiKey, options = {}): Promise<any> {
    const jsonHeaders = prepareHeaders(apiKey)
    return await HttpClient.fetch(url, {
      ...options,
      method: 'GET',
      headers: jsonHeaders
    })
  }

  static async post (url, body = {}, apiKey?, isMps?, options = {}): Promise<any> {
    const jsonHeaders = prepareHeaders(apiKey, isMps)
    if (isFalsy(isMps)) {
      return await HttpClient.fetch(url, {
        ...options,
        method: 'POST',
        body: body,
        headers: jsonHeaders
      })
    } else {
      return await HttpClient.fetchRPS(url, {
        ...options,
        method: 'POST',
        body: body,
        headers: jsonHeaders
      })
    }
  }

  static async delete (url, apiKey?, options = {}): Promise<any> {
    const jsonHeaders = prepareHeaders(apiKey)
    return await HttpClient.fetchRPS(url, {
      ...options,
      method: 'DELETE',
      headers: jsonHeaders
    })
  }

  static async patch (url, body = {}, apiKey?, options = {}): Promise<any> {
    const jsonHeaders = prepareHeaders(apiKey)
    return await HttpClient.fetchRPS(url, {
      ...options,
      method: 'PATCH',
      body: body,
      headers: jsonHeaders
    })
  }

  static async fetch (url, options = {}): Promise<any> {
    (options as any).mode = 'cors';
    (options as any).credentials = 'include';
    (options as any).withCredentials = true
    return await fetch(url, options).then(async result => await result.json())
  }

  // Handles the response from the server as text
  static async fetchRPS (url, options = {}): Promise<any> {
    return await fetch(url, options).then(async (result) => {
      return {
        status: result.status,
        data: result.status === 204 ? null : await result.json()
      }
    })
  }
}
