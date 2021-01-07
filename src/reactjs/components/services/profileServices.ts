/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { HttpClient } from './HttpClient';

export const createProfile = (payload, rpsServer) => HttpClient.post(`http://${rpsServer}/api/v1/admin/profiles/create`, JSON.stringify({
    payload: payload
}))

export const deleteProfile = (rpsServer, profileName) => HttpClient.delete(`http://${rpsServer}/api/v1/admin/profiles/${profileName}`)

