/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react';
export interface domainGridProps {
    rpsServer: string | null;
    getSelectedDomain?: any;
    updateDomainGrid?: boolean;
    rpsKey: string;
}
export interface domainGridState {
    columnDefs: any;
    rowData: any;
    rowSelection: any;
    autoGroupColumnDef: any;
    softSelectedDevice: any;
}
export declare class DomainGrid extends React.Component<domainGridProps, domainGridState> {
    gridApi: any;
    gridColumnApi: any;
    constructor(props: domainGridProps);
    componentDidUpdate(prevProps: any): void;
    onSelectionChanged: () => void;
    fetchDomains: () => Promise<any>;
    /**
     * Grid ready event gets called on load of ag-grid
     */
    onGridReady: (params: any) => any;
    getSoftSelectId: (id?: {}) => any;
    render(): React.ReactNode;
}
