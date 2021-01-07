/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

export const FIRST_COLUMN_CLASS = "first-child-column";
export const CHECKBOX_COLUMN_CLASS = "checkbox-column";

/**
 * Column definitions for Network config settings
 */
export const networkColumnDefs = {
  Name: {
    headerName: "network.grid.name",
    field: "profileName",
    sort: "asc",
    filter: "agTextColumnFilter",
    filterParams: { applyButton: true, clearButton: true },
    sortable: true,
  },
  DHCPEnabled: {
    headerName: "network.grid.dhcpEnabled",
    field: "dhcpEnabled",
    filter: "agTextColumnFilter",
    filterParams: { applyButton: true, clearButton: true },
    sortable: true,
  },
};

export const checkboxColumn = {
  lockPosition: true,
  cellClass: FIRST_COLUMN_CLASS,
  resizable: false,
  suppressMenu: true,
  checkboxSelection: true,
  suppressMovable: true,
  width: 30,
};

export const defaultNetworkGridProps = {
  pagination: true,
  paginationPageSize: 8,
  rowSelection: "single",
  resizable: true,
};

export const networkDataModal = {
  profileName: "profileName",
  dhcpEnabled: "dhcpEnabled",
  ipSyncEnabled: "ipSyncEnabled",
  staticIpShared: "staticIpShared"
};
