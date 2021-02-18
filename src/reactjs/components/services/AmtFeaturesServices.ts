/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { HttpClient } from './HttpClient'

export const getAmtFeatures = async (guid, mpsServer: string, apiKey): Promise<any> => {
  const body = JSON.stringify({
    apikey: 'xxxxx',
    method: 'GetAMTFeatures',
    payload: { guid }
  })

  return await HttpClient.post(`https://${mpsServer}/amt`, body, apiKey, true)
}

export const setAmtFeatures = async (guid, userConsent, enableKVM, enableSOL, enableIDER, mpsServer: string, apiKey): Promise<any> => {
  const body = JSON.stringify({
    apikey: 'xxxxx',
    method: 'SetAMTFeatures',
    payload: {
      guid, userConsent, enableKVM, enableSOL, enableIDER
    }
  })

  return await HttpClient.post(`https://${mpsServer}/amt`, body, apiKey, true)
}
