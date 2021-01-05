/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { PasswordRenderer } from "../shared/PasswordRenderer";

export const FIRST_COLUMN_CLASS = 'first-child-column';
export const CHECKBOX_COLUMN_CLASS = 'checkbox-column';

/**
 * Column definitions for CIRA config scripts
 */
export const ciraColumnDefs = {
    ConfigName: {
        headerName: 'cira.grid.configName',
        field: 'configName',
        sort: 'asc',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true,
        maxWidth: 200
    },
    MpsServer: {
        headerName: 'cira.grid.mpsServer',
        field: 'mpsServerAddress',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true

    },
    Port: {
        headerName: 'cira.grid.port',
        field: 'mpsPort',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true
    },
    Username: {
        headerName: 'cira.grid.username',
        field: 'username',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true
    },
    CommonName: {
        headerName: 'cira.grid.commonName',
        field: 'commonName',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true
    },
    RootCertificate: {
        headerName: 'cira.grid.rootCert',
        field: 'mpsRootCertificate',
        filter: "agTextColumnFilter",
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
    width: 50
}

export const defaultCiraGridProps = {
    pagination: true,
    paginationPageSize: 8,
    rowSelection: 'single',
    resizable: true
};

export const ciraDataModal = {
    configName: 'configName',
    mpsServerAddress: 'mpsServerAddress',
    mpsPort: 'mpsPort',
    username: 'username',
    password: 'password',
    commonName: 'commonName',
    mpsRootCertificate: 'mpsRootCertificate',
    serverAddressFormat: 'serverAddressFormat',
    authMethod: 'authMethod',
    proxyDetails: 'proxyDetails'
}