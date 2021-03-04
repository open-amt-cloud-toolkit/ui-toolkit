/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import * as React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-dark.css';
import './pcsGrid.scss';
export interface pcsGridProps {
    sizeColumnsToFit: any;
    onGridReady: any;
    getSoftSelectId: any;
    softSelectId: any;
    onRowClicked: any;
}
export declare class PcsGrid extends React.Component<pcsGridProps> {
    defaultPcsGridProps: any;
    gridApi: any;
    resizeEvent: any;
    subscriptions: any;
    constructor(props: pcsGridProps);
    componentDidMount(): void;
    /** Save the gridApi locally on load */
    onGridReady: (gridReadyEvent: any) => any;
    /** When a row is clicked, select the row unless a soft select link was clicked */
    onRowClicked: (rowEvent: any) => any;
    render(): React.ReactNode;
}
