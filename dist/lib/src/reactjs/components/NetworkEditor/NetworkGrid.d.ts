/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
export interface NetworkGridProps {
    rpsServer: string | null;
    getSelectedNetwork?: any;
    rpsKey: string;
    updateNetworkGrid?: boolean;
}
export interface NetworkGridStates {
    columnDefs: any;
    rowData: any;
    rowSelection: any;
    autoGroupColumnDef: any;
    softSelectedDevice: any;
}
/**
 * Presentational component for Network config setting
 */
export declare class NetworkGrid extends React.Component<NetworkGridProps, NetworkGridStates> {
    gridApi: any;
    gridColumnApi: any;
    constructor(props: any);
    onSelectionChanged: () => void;
    componentDidUpdate(prevProps: any): void;
    fetchNetworkSettings: () => Promise<any>;
    /**
     * Grid ready event gets called on load of ag-grid
     */
    onGridReady: (params: any) => any;
    getSoftSelectId: (id?: {}) => any;
    render(): React.ReactNode;
}
