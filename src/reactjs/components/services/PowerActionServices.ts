/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { isFalsy } from '../shared/Utilities'
import { HttpClient } from './HttpClient'

export const powerActions = async (guid, action, mpsServer: string | null, useSOL?: boolean): Promise<any> => {
  const body = JSON.stringify({
    method: 'PowerAction',
    payload: isFalsy(useSOL) ? { guid, action, useSOL } : { guid, action }
  })
  const server: string = mpsServer != null ? mpsServer : ''
  return await HttpClient.post(`${server}/amt`, body, true)
}

export const getPowerState = async (guid, mpsServer: string | null): Promise<any> => {
  const body = JSON.stringify({
    method: 'PowerState',
    payload: { guid }
  })
  const server: string = mpsServer != null ? mpsServer : ''
  return await HttpClient.post(`${server}/amt`, body, true)
}
