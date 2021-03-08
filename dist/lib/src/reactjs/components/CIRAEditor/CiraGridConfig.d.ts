/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
export declare const FIRST_COLUMN_CLASS = "first-child-column";
export declare const CHECKBOX_COLUMN_CLASS = "checkbox-column";
/**
 * Column definitions for CIRA config scripts
 */
export declare const ciraColumnDefs: {
    ConfigName: {
        headerName: string;
        field: string;
        sort: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
        maxWidth: number;
    };
    MpsServer: {
        headerName: string;
        field: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
    };
    Port: {
        headerName: string;
        field: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
    };
    Username: {
        headerName: string;
        field: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
    };
    CommonName: {
        headerName: string;
        field: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
    };
    RootCertificate: {
        headerName: string;
        field: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
    };
};
export declare const checkboxColumn: {
    lockPosition: boolean;
    cellClass: string;
    resizable: boolean;
    suppressMenu: boolean;
    checkboxSelection: boolean;
    suppressMovable: boolean;
    width: number;
};
export declare const defaultCiraGridProps: {
    pagination: boolean;
    paginationPageSize: number;
    rowSelection: string;
    resizable: boolean;
};
export declare const ciraDataModal: {
    configName: string;
    mpsServerAddress: string;
    mpsPort: string;
    username: string;
    password: string;
    commonName: string;
    mpsRootCertificate: string;
    serverAddressFormat: string;
    authMethod: string;
    proxyDetails: string;
};
