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
export const domainColumnDefs = {
    Name: {
        headerName: 'domain.grid.name',
        field: 'Name',
        sort: 'asc',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true,
        maxWidth: 200
    },
    DomainSuffix: {
        headerName: 'domain.grid.domainSuffix',
        field: 'DomainSuffix',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true

    },
    ProvisioningCert: {
        headerName: 'domain.grid.provisioningCert',
        field: 'ProvisioningCert',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true
    },
    ProvisioningCertPassword : {
        headerName: 'domain.grid.provisioningCertPassword',
        field: 'ProvisioningCertPassword',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true,
        cellRendererFramework: PasswordRenderer,
        minWidth:250
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
};