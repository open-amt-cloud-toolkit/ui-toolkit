/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { IdRenderer } from '../shared/IdRenderer'
import { isFalsy } from '../shared/Utilities'

export const FIRST_COLUMN_CLASS = 'first-child-column'
export const CHECKBOX_COLUMN_CLASS = 'checkbox-column'

export const deviceColumnDefs = {
  name: {
    headerName: 'devices.grid.Name',
    field: 'name',
    sort: 'asc',
    filter: 'agTextColumnFilter',
    filterParams: { applyButton: true, clearButton: true },
    sortable: true,
    maxWidth: 200
  },
  uuids: {
    headerName: 'devices.grid.uuids',
    field: 'host',
    filter: 'agTextColumnFilter',
    filterParams: { applyButton: true, clearButton: true },
    sortable: true,
    cellRendererFramework: IdRenderer

  },
  status: {
    headerName: 'devices.grid.status',
    field: 'mpsuser',
    valueGetter: (params) => isFalsy(params.data.conn) ? 'Connected' : 'Disconnected',
    filter: 'agTextColumnFilter',
    filterParams: { applyButton: true, clearButton: true },
    sortable: true,
    cellStyle: (params) => isFalsy(params.data.conn) ? { color: 'green' } : { color: 'red' }
  }
}

export const checkboxColumn = {
  lockPosition: true,
  cellClass: FIRST_COLUMN_CLASS,
  headerClass: CHECKBOX_COLUMN_CLASS,
  resizable: false,
  suppressMenu: true,
  checkboxSelection: true,
  headerCheckboxSelection: true,
  headerCheckboxSelectionFilteredOnly: true,
  suppressMovable: true,
  width: 35,
  cellStyle: (params) => {
    const data = isFalsy(params.data.conn) ? params.node.selectable = true : params.node.selectable = false
    return !data ? { opacity: 0.4 } : ''
  }
}

/** Shared device grid AgGrid properties */
export const defaultDeviceGridProps = {
  multiSelect: true,
  pagination: true,
  paginationPageSize: 8,
  rowSelection: 'multiple',
  resizable: true
}
