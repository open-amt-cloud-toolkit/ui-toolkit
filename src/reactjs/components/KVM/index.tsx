/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import { RemoteDesktop } from "./UI";
import { Provider } from '../shared/context/BasicContextProvider'
import i18n from '../../../../i18n';
// Get browser language
i18n.changeLanguage(navigator.language)


let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
const data = {
    mpsKey: process.env.API_KEY_MPS
}
ReactDOM.render(<Provider data={data}><RemoteDesktop autoConnect={false} deviceId= {params.get('deviceId')}  mpsServer={ params.get('mpsServer')+'/relay'} mouseDebounceTime={ 200} canvasHeight = {"100%"} canvasWidth = {"100%"}/></Provider>,document.querySelector('#kvm'))