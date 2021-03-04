/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
/// <reference types="react" />
export declare const FIRST_COLUMN_CLASS = "first-child-column";
export declare const CHECKBOX_COLUMN_CLASS = "checkbox-column";
export declare const deviceColumnDefs: {
    name: {
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
    uuids: {
        headerName: string;
        field: string;
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
        cellRendererFramework: ({ value }: {
            value: any;
        }) => JSX.Element;
    };
    status: {
        headerName: string;
        field: string;
        valueGetter: (params: any) => "Connected" | "Disconnected";
        filter: string;
        filterParams: {
            applyButton: boolean;
            clearButton: boolean;
        };
        sortable: boolean;
        cellStyle: (params: any) => {
            color: string;
        };
    };
};
export declare const checkboxColumn: {
    lockPosition: boolean;
    cellClass: string;
    headerClass: string;
    resizable: boolean;
    suppressMenu: boolean;
    checkboxSelection: boolean;
    headerCheckboxSelection: boolean;
    headerCheckboxSelectionFilteredOnly: boolean;
    suppressMovable: boolean;
    width: number;
    cellStyle: (params: any) => "" | {
        opacity: number;
    };
};
/** Shared device grid AgGrid properties */
export declare const defaultDeviceGridProps: {
    multiSelect: boolean;
    pagination: boolean;
    paginationPageSize: number;
    rowSelection: string;
    resizable: boolean;
};
