/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import { PasswordRenderer } from '../shared/PasswordRenderer'
export const FIRST_COLUMN_CLASS = 'first-child-column'
export const CHECKBOX_COLUMN_CLASS = 'checkbox-column'

export const profileColumnDefs = {
  Name: {
    headerName: 'profiles.grid.name',
    field: 'profileName',
    sort: 'asc',
    filter: 'agTextColumnFilter',
    filterParams: { applyButton: true, clearButton: true },
    sortable: true,
    maxWidth: 200
  },
  GenerateRandomPassword: {
    headerName: 'profiles.grid.generateRandom',
    field: 'generateRandomPassword',
    filter: 'agTextColumnFilter',
    filterParams: { applyButton: true, clearButton: true },
    sortable: true
  },
  RandomPasswordLength: {
    headerName: 'profiles.grid.randomPasswordLength',
    field: 'randomPasswordLength',
    filter: 'agTextColumnFilter',
    filterParams: { applyButton: true, clearButton: true },
    sortable: true
  },
  GenerateRandomMEBXPassword: {
    headerName: 'profiles.grid.generateMEBXRandom',
    field: 'generateRandomMeBxPassword',
    filter: 'agTextColumnFilter',
    filterParams: { applyButton: true, clearButton: true },
    sortable: true
  },
  RandomMEBXPasswordLength: {
    headerName: 'profiles.grid.randomMEBXPasswordLength',
    field: 'randomMeBxPasswordLength',
    filter: 'agTextColumnFilter',
    filterParams: { applyButton: true, clearButton: true },
    sortable: true
  },
  CiraConfigName: {
    headerName: 'profiles.grid.ciraConfigName',
    field: 'ciraConfigName',
    filter: 'agTextColumnFilter',
    filterParams: { applyButton: true, clearButton: true },
    sortable: true
  },
  NetworkConfigName: {
    headerName: 'profiles.grid.networkConfigName',
    field: 'networkConfigName',
    filter: 'agTextColumnFilter',
    filterParams: { applyButton: true, clearButton: true },
    sortable: true
  },
  Activation: {
    headerName: 'profiles.grid.activation',
    field: 'activation',
    filter: 'agTextColumnFilter',
    filterParams: { applyButton: true, clearButton: true },
    sortable: true,
    valueGetter: (params) =>
      params.data.activation === 'ccmactivate'
        ? 'Client Control Mode'
        : 'Admin Control Mode'
  }
}
export const checkboxColumn = {
  lockPosition: true,
  cellClass: FIRST_COLUMN_CLASS,
  resizable: false,
  suppressMenu: true,
  checkboxSelection: true,
  suppressMovable: true,
  width: 50
}

export const defaultDeviceGridProps = {
  pagination: true,
  paginationPageSize: 8,
  rowSelection: 'single'
}

export const profileModel = {
  profileName: 'profileName',
  amtPassword: 'amtPassword',
  generateRandomPassword: 'generateRandomPassword',
  randomPasswordLength: 'randomPasswordLength',
  ciraConfigName: 'ciraConfigName',
  activation: 'activation',
  networkConfigName: 'networkConfigName',
  generateRandomMeBxPassword: 'generateRandomMeBxPassword',
  randomMeBxPasswordLength: 'randomMeBxPasswordLength'
}
