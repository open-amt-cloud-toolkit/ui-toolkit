// Copyright (c) Microsoft. All rights reserved.
// Subset of the code from https://github.com/Azure/pcs-remote-monitoring-webui

/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'

export const FlyoutHeader = ({ className, children }): JSX.Element => (
  <div className='flyout-header'>
    { children }
  </div>
)
