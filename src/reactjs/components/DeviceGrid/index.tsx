/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react'
import ReactDom from 'react-dom'
import { DeviceGrid } from './DeviceGrid'
import i18n from '../../../../i18n'
import { Provider } from '../shared/context/BasicContextProvider'
// Get browser language
i18n.changeLanguage(navigator.language).catch(() => console.info('error occured'))

var url = new URL(window.location.href)
var params = new URLSearchParams(url.search)
const data = {
  mpsKey: process.env.API_KEY_MPS
}

ReactDom.render(<Provider data={data}><DeviceGrid deviceId={params.get('deviceId')} mpsServer={params.get('server')}/></Provider>, document.getElementById('dgroot'))
