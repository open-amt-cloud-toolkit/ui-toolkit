/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { PasswordRenderer } from "../shared/PasswordRenderer";
export const FIRST_COLUMN_CLASS = 'first-child-column';
export const CHECKBOX_COLUMN_CLASS = 'checkbox-column';


export const profileColumnDefs = {
    name: {
        headerName: 'profiles.grid.name',
        field: 'ProfileName',
        sort: 'asc',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true,
        maxWidth: 200
    },
    password: {
        headerName: 'profiles.grid.password',
        field: 'AMTPassword',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true,
        cellRendererFramework: PasswordRenderer,
        minWidth: 250

    },
    generateRandomPassword: {
        headerName: 'profiles.grid.generateRandom',
        field: 'GenerateRandomPassword',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true
    },
    RandomPasswordLength: {
        headerName: 'profiles.grid.randomPasswordLength',
        field: 'RandomPasswordLength',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true
    },
    CiraConfigName: {
        headerName: 'profiles.grid.ciraConfigName',
        field: 'CIRAConfigName',
        filter: 'agTextColumnFilter',
        filterParams: { applyButton: true, clearButton: true },
        sortable: true
    },
    Activation: {
        headerName: 'profiles.grid.activation',
        field: 'Activation',
        filter: "agTextColumnFilter",
        filterParams: { applyButton: true, clearButton: true },
        sortable: true,
        valueGetter: (params) => params.data.Activation === "ccmactivate" ? "Client Control Mode" : "Admin Control Mode"
    }
}

export const checkboxColumn = {
    lockPosition: true,
    cellClass: FIRST_COLUMN_CLASS,
    // headerClass: CHECKBOX_COLUMN_CLASS,
    resizable: false,
    suppressMenu: true,
    checkboxSelection: true,
    // headerCheckboxSelection: true,
    // headerCheckboxSelectionFilteredOnly: true,
    suppressMovable: true,
    width: 50
}

export const defaultDeviceGridProps = {
    // multiSelect: true,
    pagination: true,
    paginationPageSize: 8,
    rowSelection: 'single'
    //  resizable: true
};