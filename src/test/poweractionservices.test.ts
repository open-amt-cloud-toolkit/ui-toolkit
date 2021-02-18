/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { getPowerState, powerActions } from '../reactjs/components/services/PowerActionServices'
import { HttpClient } from '../reactjs/components/services/HttpClient'

describe('Test powerActionsServices function component', () => {
  it('Test powerActions function', () => {
    // Mock HttpClient.post Implementation
    HttpClient.post = jest.fn(async function (arg1, arg2) {
      return await new Promise((resolve, reject) => {
      // Expected output in the parameter of the promise call
        expect(arg1).toBe('https://1.2.3.4:1234/amt')
        expect(arg2).toBe('{"apikey":"xxxxx","method":"PowerAction","payload":{"guid":"abcd-efgh-ijkl-lmop","action":100}}')
      })
    })

    // call powerActions function
    powerActions('abcd-efgh-ijkl-lmop', 100, '1.2.3.4:1234', 'APIKEYFORMPS123!').catch(() => console.info('error occured'))
  })

  it('Test getPowerState function', () => {
    // Mock HttpClient.post Implementation
    HttpClient.post = jest.fn(async function (arg1, arg2) {
      return await new Promise((resolve, reject) => {
      // Expected output in the parameter of the promise call
        expect(arg1).toBe('https://7.8.9.10:5678/amt')
        expect(arg2).toBe('{"apikey":"xxxxx","method":"PowerState","payload":{"guid":"wxyz-efgh-ijkl-lmop"}}')
      })
    })

    // call getPowerState function
    getPowerState('wxyz-efgh-ijkl-lmop', '7.8.9.10:5678', 'APIKEYFORMPS123!').catch(() => console.info('error occured'))
  })
})
