/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { HttpClient } from './HttpClient'

export const getAmtFeatures = async (guid, mpsServer: string): Promise<any> => {
  const body = JSON.stringify({
    method: 'GetAMTFeatures',
    payload: { guid }
  })

  return await HttpClient.post(`${mpsServer}/amt`, body, true)
}

export const setAmtFeatures = async (guid, userConsent, enableKVM, enableSOL, enableIDER, mpsServer: string): Promise<any> => {
  const body = JSON.stringify({
    method: 'SetAMTFeatures',
    payload: {
      guid, userConsent, enableKVM, enableSOL, enableIDER
    }
  })

  return await HttpClient.post(`${mpsServer}/amt`, body, true)
}
