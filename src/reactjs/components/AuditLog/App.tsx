/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import * as React from 'react'
import { AuditLog } from './AuditLog'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle, faAngleDoubleRight, faAngleDoubleLeft, faAngleRight, faAngleLeft, faFileExport } from '@fortawesome/free-solid-svg-icons'

import i18next from 'i18next'; 
import i18n from '../../../../i18n';

library.add(faInfoCircle, faAngleDoubleRight, faAngleDoubleLeft, faAngleRight, faAngleLeft, faFileExport);
export interface AuditLogProps {
    deviceId: string;
    mpsServer: string;
  }

  // Get browser language
  i18n.changeLanguage(navigator.language)

 
export class App extends React.Component<AuditLogProps, {}>{
    constructor(props: any) {
        super(props);
    }
    render(){
        return <AuditLog deviceId={this.props.deviceId} mpsServer={this.props.mpsServer}/>
    }

}