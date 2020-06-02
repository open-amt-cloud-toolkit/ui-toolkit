/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react';

const AuditLogConnect = ({deviceId,server}) =><button className="button" onClick={()=>window.location.href = `sampleAuditLog.htm?deviceId=${deviceId}&server=${server.split('/')[0]}`}>Fetch Audit Logs</button>

export default AuditLogConnect;