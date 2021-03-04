/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import * as React from 'react';
import './amtfeatures.scss';
/**
 * interface for input props to AMTFeatures class
 * deviceId -- guid of the AMT device
 * server -- MPS server address(IP:port)
 * feature -- Indicates which control is being accessed(KVM, SOL)
 * handleFeatureStatus -- callback function to update the SnackBar messages
 * getConnectState -- callback function to get the KVM or SOL connection state
 */
export interface AmtFeatureProps {
    deviceId: string | null;
    server: string | null;
    feature: string;
    handleFeatureStatus: (value: string) => void;
    getConnectState: () => number;
}
export interface AmtFeatureState {
    checked: boolean;
    userConsent: string;
    useKVM: boolean;
    useSOL: boolean;
    useIDER: boolean;
    redirection: boolean;
    showMessage: boolean;
    message: string;
    type: string;
}
/** Generic class to get and set the AMT features like KVM, SOL
 * feature prop for this class determines whether we are on KVM or SOL page
 */
export declare class AmtFeatures extends React.Component<AmtFeatureProps, AmtFeatureState> {
    constructor(props: any);
    componentDidMount(): void;
    /** Get the AMT Device features  */
    fetchAmtFeatures: () => any;
    /**
       * Bind the checkbox status based on the feature and the feature response from the AMT device
       */
    updateCheckboxStatus: () => void;
    /** Set AMT features on click of checkbox */
    setAmtFeature: () => any;
    /**
       * Update the checkbox status and the feature(KVM, SOL) on click of checkbox before making the Rest API
       * request to Set the AMT features
       */
    handleCheckboxChange: (event: any) => void;
    render(): React.ReactNode;
}
