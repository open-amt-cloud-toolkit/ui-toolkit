/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

export class HttpClient {

  static get(url, options = {}) {
    return HttpClient.fetch(url, {
      ...options,
      method: "GET",
      header: jsonHeaders
    });
  }

  static post(url, body = {}, options = {}) {
    console.info('inside http client', body);
    return HttpClient.fetch(url, {
      ...options,
      method: "POST",
      body: body,
      headers: jsonHeaders
    });
  }

  static fetch(url, options = {}) {
    console.info('inside static fetch ', options);
    return fetch(url, options).then(result => result.json());
  }
}

const jsonHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

