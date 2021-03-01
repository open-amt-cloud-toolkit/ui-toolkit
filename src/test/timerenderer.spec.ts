/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { TimeRenderer } from '../reactjs/components/shared/TimeRenderer'

describe('Test time renderer component', () => {
  it('should return the formatted time from the component', () => {
    const time: any = {
      value: new Date(2021, 0, 20)
    }
    const adjustedTime = new Date(time.value.getTime() - (time.value.getTimezoneOffset() * 60000))
    const timeSplit = adjustedTime.toISOString().split('T')
    const concatedTime = timeSplit[0].concat(' ').concat(timeSplit[1].substring(0, 5))
    const result = TimeRenderer(time)
    expect(result).toEqual(concatedTime)
  })
})
