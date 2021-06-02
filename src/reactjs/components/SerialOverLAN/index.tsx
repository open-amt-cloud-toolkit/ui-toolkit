/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import { render } from 'react-dom'
import { Sol } from './Sol'
import i18n from '../../../../i18n'
// Get browser language
i18n.changeLanguage(navigator.language).catch(() => console.info('error occured'))

const url = new URL(window.location.href)
const params = new URLSearchParams(url.search)

render(<Sol deviceId={params.get('deviceId')} mpsServer={params.get('mpsServer')} />, document.getElementById('sol'))
