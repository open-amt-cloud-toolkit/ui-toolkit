/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import ReactDom from 'react-dom'
import { Sol } from './Sol'
import { Provider } from '../shared/context/BasicContextProvider'
import i18n from '../../../../i18n'
// Get browser language
i18n.changeLanguage(navigator.language).catch(() => console.info('error occured'))

var url = new URL(window.location.href)
var params = new URLSearchParams(url.search)
const data = {
  mpsKey: process.env.API_KEY_MPS
}

ReactDom.render(<Provider data={data}><Sol deviceId={params.get('deviceId')} mpsServer={params.get('server')} /></Provider>, document.getElementById('sol'))
