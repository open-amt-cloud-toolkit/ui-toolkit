/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AuditLog } from './AuditLog';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faAngleDoubleRight, faAngleDoubleLeft, faAngleRight, faAngleLeft, faFileExport } from '@fortawesome/free-solid-svg-icons';
import { Provider } from '../shared/context/BasicContextProvider'

import i18n from '../../../../i18n';
import { translateText } from '../shared/Methods';

library.add(faInfoCircle, faAngleDoubleRight, faAngleDoubleLeft, faAngleRight, faAngleLeft, faFileExport);

// Get browser language
i18n.changeLanguage(navigator.language)

let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
const data = {
    mpsKey: process.env.API_KEY_MPS
}

ReactDOM.render(<React.Fragment>
    <Provider data={data}>
        <div style={{ textAlign: 'center', fontSize: "40px" }}> {translateText('auditLog.header.heading')}</div>
        <AuditLog deviceId={params.get('deviceId')} mpsServer={params.get('server')} />
    </Provider>
</React.Fragment>, document.querySelector('#auditlog'))