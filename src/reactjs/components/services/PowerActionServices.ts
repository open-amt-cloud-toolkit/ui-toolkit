/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { isFalsy } from '../shared/Utilities'
import { HttpClient } from './HttpClient'

export const powerActions = async (guid, action, mpsServer: string | null, apiKey, useSOL?: boolean): Promise<any> => {
  const body = JSON.stringify({
    apikey: 'xxxxx',
    method: 'PowerAction',
    payload: isFalsy(useSOL) ? { guid, action, useSOL } : { guid, action }
  })
  const server: string = mpsServer != null ? mpsServer : ''
  return await HttpClient.post(`${server}/amt`, body, apiKey, true)
}

export const getPowerState = async (guid, mpsServer: string | null, apiKey): Promise<any> => {
  const body = JSON.stringify({
    apikey: 'xxxxx',
    method: 'PowerState',
    payload: { guid }
  })
  const server: string = mpsServer != null ? mpsServer : ''
  return await HttpClient.post(`${server}/amt`, body, apiKey, true)
}
