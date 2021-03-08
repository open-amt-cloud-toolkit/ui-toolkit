/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
export declare const auditlogCloumnDefs: {
    auditappid: {
        headerName: string;
        field: string;
        headerComponentParams: {
            description: string;
        };
    };
    eventid: {
        headerName: string;
        field: string;
        headerComponentParams: {
            description: string;
        };
    };
    initiatortype: {
        headerName: string;
        field: string;
    };
    auditapp: {
        headerName: string;
        field: string;
        headerComponentParams: {
            description: string;
            enableSorting: boolean;
        };
        tooltipField: string;
        minWidth: number;
    };
    event: {
        headerName: string;
        field: string;
        headerComponentParams: {
            description: string;
        };
        tooltipField: string;
        minWidth: number;
    };
    initiator: {
        headerName: string;
        field: string;
        headerComponentParams: {
            description: string;
        };
        minWidth: number;
    };
    time: {
        headerName: string;
        field: string;
        cellRendererFramework: ({ value }: {
            value: any;
        }) => any;
        headerComponentParams: {
            description: string;
        };
        minWidth: number;
    };
    mclocationtype: {
        headerName: string;
        field: string;
        headerComponentParams: {
            description: string;
        };
    };
    netaddress: {
        headerName: string;
        field: string;
        headerComponentParams: {
            description: string;
        };
        minWidth: number;
    };
    exstr: {
        headerName: string;
        field: string;
        headerComponentParams: {
            description: string;
        };
        minWidth: number;
    };
};
export declare const auditLogDataModel: {
    auditAppId: string;
    eventId: string;
    initiator: string;
    time: string;
    auditApp: string;
    event: string;
    netAddress: string;
    exStr: string;
};
