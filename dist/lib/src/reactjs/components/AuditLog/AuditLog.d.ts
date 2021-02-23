/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import * as React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import './AuditLog.scss';
export interface AuditLogProps {
    deviceId: string | null;
    mpsServer: string | null;
}
export declare class AuditLog extends React.Component<AuditLogProps, {
    rowData: any;
    errorMsg: string;
    value: any;
    currentPage: Number;
    totalPages: Number;
    showTooltip: boolean;
    isExporting: boolean;
    hasExportFailed: boolean;
    snackBarMessage: String;
    completeAuditLog: any;
    downloadCSV: boolean;
}> {
    gridApi: any;
    gridColumnApi: any;
    columnDefs: any;
    disableNext: boolean;
    disablePrev: boolean;
    disableGoToPage: boolean;
    constructor(props: any);
    adjustRowIndex: (rowtotalCnt: any, endIndex: any) => number;
    transformResponse: (auditRecords: any) => any;
    fetchAuditLog: (index: any) => Promise<any>;
    onGridReady: (params: any) => any;
    /**
       * Navigates to all the pages of ag-grid and fetches audit logs from the sever
       * Once all data is loaded in the grid, enables the pagination controls and exports the grid data
       * to a CSV file
       */
    fetchCompleteAuditLog: () => Promise<any>;
    onGridSizeChanged: (params: any) => any;
    togglePaginationButtons: (directionString: string) => void;
    onPaginationChanged: () => void;
    goToPage: () => void;
    onBtFirst: () => void;
    onBtLast: () => void;
    onBtNext: () => void;
    onBtPrevious: () => void;
    onBtExport: () => void;
    handleChange: (event: any) => void;
    render(): React.ReactNode;
}
