/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import SnackBar from '../shared/SnackBar'

export const PowerWarning = (): JSX.Element => {
  return <SnackBar message={'Remote computer is not powered on, click here to issue a power command'} type={'warning'}/>
}
