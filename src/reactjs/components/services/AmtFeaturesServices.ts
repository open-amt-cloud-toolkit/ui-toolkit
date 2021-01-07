/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { HttpClient } from './HttpClient'

export const getAmtFeatures = (guid, mpsServer, apiKey) => {
    const body = JSON.stringify({
        apikey: 'xxxxx',
        method: 'GetAMTFeatures',
        payload: { guid }
    });

    return HttpClient.post(`https://${mpsServer}/amt`, body, apiKey, true);
}

export const setAmtFeatures = (guid, userConsent, enableKVM, enableSOL, enableIDER, mpsServer, apiKey) => {
    const body = JSON.stringify({
        apikey: 'xxxxx',
        method: 'SetAMTFeatures',
        payload: {
            guid, userConsent, enableKVM, enableSOL, enableIDER
        }
    })

    return HttpClient.post(`https://${mpsServer}/amt`, body, apiKey, true);
}