/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { prepareHeaders } from "../shared/Utilities";

export class HttpClient {

  static get(url, apiKey, options = {}) {
    const jsonHeaders = prepareHeaders(apiKey)
    return HttpClient.fetch(url, {
      ...options,
      method: "GET",
      headers: jsonHeaders
    });
  }

  static post(url, body = {}, apiKey?, isMps?, options = {}) {
    const jsonHeaders = prepareHeaders(apiKey, isMps)
    if (isMps) {
      return HttpClient.fetch(url, {
        ...options,
        method: "POST",
        body: body,
        headers: jsonHeaders
      });
    } else {
      return HttpClient.fetchRPS(url, {
        ...options,
        method: "POST",
        body: body,
        headers: jsonHeaders
      });
    }
  }

  static delete(url, apiKey?, options = {}) {
    const jsonHeaders = prepareHeaders(apiKey)
    return HttpClient.fetchRPS(url, {
      ...options,
      method: 'DELETE',
      headers: jsonHeaders
    })
  }

  static patch(url, body = {}, apiKey?, options = {}) {
    const jsonHeaders = prepareHeaders(apiKey)
    return HttpClient.fetchRPS(url, {
      ...options,
      method: "PATCH",
      body: body,
      headers: jsonHeaders
    });

  }

  static fetch(url, options = {}) {
    return fetch(url, options).then(result => result.json());
  }

  //Handles the response from the server as text
  static fetchRPS(url, options = {}) {
    return fetch(url, options).then(result => result.text());
  }
}

const jsonHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-MPS-API-Key": 'APIKEYFORMPS123!',
  'X-RPS-API-Key': 'APIKEYFORRPS123!'
};

