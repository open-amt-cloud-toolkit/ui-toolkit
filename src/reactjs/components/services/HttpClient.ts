/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { prepareHeaders } from '../shared/Utilities'

export class HttpClient {
  static async get (url, apiKey, options = {}) {
    const jsonHeaders = prepareHeaders(apiKey)
    return await HttpClient.fetch(url, {
      ...options,
      method: 'GET',
      headers: jsonHeaders
    })
  }

  static async post (url, body = {}, apiKey?, isMps?, options = {}) {
    const jsonHeaders = prepareHeaders(apiKey, isMps)
    if (isMps) {
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

  static async delete (url, apiKey?, options = {}) {
    const jsonHeaders = prepareHeaders(apiKey)
    return await HttpClient.fetchRPS(url, {
      ...options,
      method: 'DELETE',
      headers: jsonHeaders
    })
  }

  static async patch (url, body = {}, apiKey?, options = {}) {
    const jsonHeaders = prepareHeaders(apiKey)
    return await HttpClient.fetchRPS(url, {
      ...options,
      method: 'PATCH',
      body: body,
      headers: jsonHeaders
    })
  }

  static async fetch (url, options = {}) {
    return await fetch(url, options).then(async result => await result.json())
  }

  // Handles the response from the server as text
  static async fetchRPS (url, options = {}) {
    return await fetch(url, options).then(async result => await result.text())
  }
}

const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-MPS-API-Key': 'APIKEYFORMPS123!',
  'X-RPS-API-Key': 'APIKEYFORRPS123!'
}
