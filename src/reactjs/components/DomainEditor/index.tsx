/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react'
import ReactDom from 'react-dom'
import { DomainEditor } from './DomainEditor'
import { Provider } from '../shared/context/BasicContextProvider'

import i18n from '../../../../i18n'
// Get browser language
i18n.changeLanguage(navigator.language).catch(() => console.info('error occured'))

var url = new URL(window.location.href)
var params = new URLSearchParams(url.search)
const data = {
  rpsKey: process.env.API_KEY_RPS
}

ReactDom.render(<Provider data={data}><DomainEditor rpsServer={params.get('rpsServer')}/></Provider>, document.getElementById('domainroot'))
