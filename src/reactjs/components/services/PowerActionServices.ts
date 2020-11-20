/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { HttpClient } from './HttpClient'

export const powerActions = (guid, action, mpsServer,apiKey, useSOL?:boolean) => {
	const body = JSON.stringify({
		apikey: 'xxxxx',
		method: 'PowerAction',
		payload: useSOL ? { guid, action, useSOL } : {guid, action}
	});
	return HttpClient.post(`https://${mpsServer}/amt`, body, apiKey, true)
}

export const getPowerState = (guid, mpsServer, apiKey) => {
	const body = JSON.stringify({
		apikey: 'xxxxx',
		method: 'PowerState',
		payload: { guid }
	})
	return HttpClient.post(`https://${mpsServer}/amt`, body, apiKey, true);
}