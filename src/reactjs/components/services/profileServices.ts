/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { HttpClient } from './HttpClient'

export const createProfile = async (payload, rpsServer) => await HttpClient.post(`http://${rpsServer}/api/v1/admin/profiles/create`, JSON.stringify({
  payload: payload
}))

export const deleteProfile = async (rpsServer, profileName) => await HttpClient.delete(`http://${rpsServer}/api/v1/admin/profiles/${profileName}`)
