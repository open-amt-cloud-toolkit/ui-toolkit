/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { TimeRenderer } from '../shared/TimeRenderer'

export const auditlogCloumnDefs = {
  auditappid: {
    headerName: 'auditLog.grid.column.auditappid',
    field: 'auditAppId',
    headerComponentParams: { description: 'auditLog.grid.column.auditappiddescription' }
  },
  eventid: {
    headerName: 'auditLog.grid.column.eventId',
    field: 'eventId',
    headerComponentParams: { description: 'auditLog.grid.column.eventIddescription' }
  },
  initiatortype: {
    headerName: 'auditLog.grid.column.initiatortype',
    field: 'initiatorType'
  },
  auditapp: {
    headerName: 'auditLog.grid.column.auditapp',
    field: 'auditApp',
    headerComponentParams: { description: 'auditLog.grid.column.auditappdescription', enableSorting: true },
    tooltipField: 'auditApp',
    minWidth: 150
  },
  event: {
    headerName: 'auditLog.grid.column.event',
    field: 'event',
    headerComponentParams: { description: 'auditLog.grid.column.eventdescription' },
    tooltipField: 'event',
    minWidth: 150
  },
  initiator: {
    headerName: 'auditLog.grid.column.initiator',
    field: 'initiator',
    headerComponentParams: { description: 'auditLog.grid.column.initiatordescription' },
    minWidth: 150
  },
  time: {
    headerName: 'auditLog.grid.column.time',
    field: 'time',
    cellRendererFramework: TimeRenderer,
    headerComponentParams: { description: 'auditLog.grid.column.timedescription' },
    minWidth: 150
  },
  mclocationtype: {
    headerName: 'auditLog.grid.column.mclocationtype',
    field: 'mCLocationType',
    headerComponentParams: { description: 'auditLog.grid.column.mclocationtypedescription' }
  },
  netaddress: {
    headerName: 'auditLog.grid.column.netaddress',
    field: 'netAddress',
    headerComponentParams: { description: 'auditLog.grid.column.netaddressdescription' },
    minWidth: 150
  },
  exstr: {
    headerName: 'auditLog.grid.column.exstr',
    field: 'exStr',
    headerComponentParams: { description: 'auditLog.grid.column.exstrdescription' },
    minWidth: 150
  }
}

export const auditLogDataModel = {
  auditAppId: 'auditAppId',
  eventId: 'eventId',
  initiator: 'initiator',
  time: 'time',
  auditApp: 'auditApp',
  event: 'event',
  netAddress: 'netAddress',
  exStr: 'exStr'
}
