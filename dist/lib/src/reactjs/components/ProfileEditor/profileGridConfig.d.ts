/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
export declare const FIRST_COLUMN_CLASS = "first-child-column";
export declare const CHECKBOX_COLUMN_CLASS = "checkbox-column";
export declare const profileColumnDefs: {
    Name: {
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
    GenerateRandomPassword: {
        headerName: string;
        field: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
    };
    RandomPasswordLength: {
        headerName: string;
        field: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
    };
    GenerateRandomMEBXPassword: {
        headerName: string;
        field: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
    };
    RandomMEBXPasswordLength: {
        headerName: string;
        field: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
    };
    CiraConfigName: {
        headerName: string;
        field: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
    };
    NetworkConfigName: {
        headerName: string;
        field: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
    };
    Activation: {
        headerName: string;
        field: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
        valueGetter: (params: any) => "Client Control Mode" | "Admin Control Mode";
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
export declare const defaultDeviceGridProps: {
    pagination: boolean;
    paginationPageSize: number;
    rowSelection: string;
};
export declare const profileModel: {
    profileName: string;
    amtPassword: string;
    generateRandomPassword: string;
    passwordLength: string;
    ciraConfigName: string;
    activation: string;
    networkConfigName: string;
    generateRandomMeBxPassword: string;
    mebxPasswordLength: string;
};
