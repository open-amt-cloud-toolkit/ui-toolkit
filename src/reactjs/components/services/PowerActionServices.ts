/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { isFalsy } from '../shared/Utilities'
import { HttpClient } from './HttpClient'

export const powerActions = async (guid, action, mpsServer: any, apiKey, useSOL?: boolean): Promise<any> => {
  const body = JSON.stringify({
    apikey: 'xxxxx',
    method: 'PowerAction',
    payload: isFalsy(useSOL) ? { guid, action, useSOL } : { guid, action }
  })
  return await HttpClient.post(`https://${String(mpsServer)}/amt`, body, apiKey, true)
}

export const getPowerState = async (guid, mpsServer: any, apiKey): Promise<any> => {
  const body = JSON.stringify({
    apikey: 'xxxxx',
    method: 'PowerState',
    payload: { guid }
  })
  return await HttpClient.post(`https://${String(mpsServer)}/amt`, body, apiKey, true)
}
