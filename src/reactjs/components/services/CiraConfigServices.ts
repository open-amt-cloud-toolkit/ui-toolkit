/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { HttpClient } from './HttpClient'

export const deleteCiraConfig = async (rpsServer: string, ciraConfigName: string): Promise<any> => await HttpClient.delete(`http://${rpsServer}/api/v1/admin/ciraconfigs/${ciraConfigName}`)
