/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
export interface ProfileConigFormProps {
    stateVariables: any;
    propValiables: any;
    isActivationSelected: any;
    handleShowPassword: any;
    notificationCallback: any;
    handleSubmit: any;
    toggleCiraPopup: any;
    handleOnBlur: any;
    handleClick: any;
    handleChange: any;
    toggleNetworkPopup: any;
    handleShowMEBXPassword: any;
    rpsServer?: string | null;
    mpsServer?: string | null;
}
export declare class ProfileConfigForm extends React.Component<ProfileConigFormProps> {
    render(): React.ReactNode;
}
