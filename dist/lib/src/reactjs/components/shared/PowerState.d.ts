/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
export interface PowerStateProps {
    deviceId: string | null;
    server: string | null;
    handlePowerStatus: (value: string) => void;
    updateParent: () => void;
}
/**
 * Generic class to fetch the AMT Device Power state
 */
export declare class PowerState extends React.Component<PowerStateProps, {
    powerState: number;
}> {
    timeInterval: any;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    /** Fetch the Power state from AMT Device */
    getAmtPowerState: () => any;
    renderPowerState: (param: any) => any;
    render(): React.ReactNode;
}
