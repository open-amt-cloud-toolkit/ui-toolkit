/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
export interface ProfileGridProps {
    rpsServer: string | null;
    getselectedProfile?: any;
    updateProfileGrid: boolean;
    rpsKey: string;
}
export interface ProfileGridStates {
    columnDefs: any;
    rowData: any;
    rowSelection: any;
    autoGroupColumnDef: any;
    softSelectedDevice: any;
}
/**
 * Component to create the profile grid UI
 */
export declare class ProfileGrid extends React.Component<ProfileGridProps, ProfileGridStates> {
    gridApi: any;
    gridColumnApi: any;
    constructor(props: any);
    componentDidUpdate(prevProps: any): void;
    onSelectionChanged: () => void;
    fetchProfiles: () => Promise<any>;
    onGridReady: (params: any) => any;
    getSoftSelectId: (id?: {}) => any;
    render(): React.ReactNode;
}
