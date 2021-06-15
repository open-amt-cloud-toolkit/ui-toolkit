/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react'
import { render } from 'react-dom'
import { KVM } from './UI'
import i18n from '../../i18n'
// Get browser language
i18n.changeLanguage(navigator.language).catch(() => console.info('error occured'))

const url = new URL(window.location.href)
const params = new URLSearchParams(url.search)

render(<KVM autoConnect={false} deviceId={params.get('deviceId')} mpsServer={`${params.get('mpsServer')}/relay`} authToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI5RW1SSlRiSWlJYjRiSWVTc21nY1dJanJSNkh5RVRxYyIsImV4cCI6MTYyMzk2NjQzM30.h-VDGr26-7rg3OFK4pn4tB7CESPAo42xhPv4Jv1NaD8" mouseDebounceTime={200} canvasHeight={'100%'} canvasWidth={'100%'} />, document.querySelector('#kvm'))
