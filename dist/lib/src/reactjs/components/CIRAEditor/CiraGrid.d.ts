/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
export interface CiraGridProps {
    rpsServer: string | null;
    getSelectedCiraConfigs?: any;
    updateCiraGrid: boolean;
    rpsKey: string;
}
export interface CiraGridStates {
    columnDefs: any;
    rowData: any;
    rowSelection: any;
    autoGroupColumnDef: any;
    softSelectedDevice: any;
}
/**
 * Presentational component for CIRA config scripts
 */
export declare class CiraGrid extends React.Component<CiraGridProps, CiraGridStates> {
    gridApi: any;
    gridColumnApi: any;
    constructor(props: any);
    componentDidUpdate(prevProps: any): void;
    onSelectionChanged: () => void;
    fetchCiraConfigs: () => Promise<any>;
    /**
     * Grid ready event gets called on load of ag-grid
     */
    onGridReady: (params: any) => any;
    getSoftSelectId: (id?: {}) => any;
    render(): React.ReactNode;
}
