/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { PasswordRenderer } from '../shared/PasswordRenderer'

export const FIRST_COLUMN_CLASS = 'first-child-column'
export const CHECKBOX_COLUMN_CLASS = 'checkbox-column'

/**
 * Column definitions for CIRA config scripts
 */
export const domainColumnDefs = {
  Name: {
    headerName: 'domain.grid.name',
    field: 'name',
    sort: 'asc',
    filter: 'agTextColumnFilter',
    filterParams: { applyButton: true, clearButton: true },
    sortable: true
  },
  DomainSuffix: {
    headerName: 'domain.grid.domainSuffix',
    field: 'domainSuffix',
    filter: 'agTextColumnFilter',
    filterParams: { applyButton: true, clearButton: true },
    sortable: true
  }
}

export const checkboxColumn = {
  lockPosition: true,
  cellClass: FIRST_COLUMN_CLASS,
  resizable: false,
  suppressMenu: true,
  checkboxSelection: true,
  suppressMovable: true,
  width: 35
}

export const defaultCiraGridProps = {
  pagination: true,
  paginationPageSize: 8,
  rowSelection: 'single',
  resizable: true
}

export const domainDataModel = {
  name: 'name',
  domainSuffix: 'domainSuffix',
  provisioningCert: 'provisioningCert',
  provisioningCertPassword: 'provisioningCertPassword'
}
