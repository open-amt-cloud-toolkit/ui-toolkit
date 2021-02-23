/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
export interface profileFlyoutProps {
    onClose: any;
    rpsServer: string | null;
    mpsServer: string | null;
    createProfileNotification: any;
    rpsKey: string;
    slectedProfiles?: any;
    isEdit: boolean;
    profilesList?: any;
}
export interface profileFlyoutState {
    profileName?: any;
    amtPassword?: any;
    generateRandomPassword?: any;
    randomPasswordLength?: any;
    ciraConfigName?: any;
    activation?: any;
    onBlurError?: any;
    randomPasswordLengthBlur?: any;
    amtPasswordBlur?: any;
    profileNameBlur?: any;
    showCiraPopup?: boolean;
    ciraConfigs?: any;
    showPassword?: boolean;
    oldProfileFormDetails?: any;
    profileFormDetails?: any;
    networkProfileName?: any;
    networkProfiles?: any;
    showNetworkPopup?: boolean;
    showMEBXPassword?: boolean;
}
export declare class ProfileActionFlyout extends React.Component<profileFlyoutProps, profileFlyoutState> {
    constructor(props: profileFlyoutProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    getCIRAConfigs: () => Promise<any>;
    getNetworkProfiles: () => Promise<any>;
    handleChange: (e: any) => void;
    handleClick: (e: any) => void;
    handleOnBlur: (e: any) => void;
    toggleCiraPopup: (e: any) => void;
    removeUnAssignedProperties: (obj: any) => any;
    removeMEBxFieldsforCCM: (obj: any) => any;
    handleSubmit: (e: any) => Promise<any>;
    notificationCallback: (status: any, response: any, payload: any) => void;
    createNotification: (status: any, response: any, payload: any) => void;
    handleShowPassword: () => void;
    handleShowMEBXPassword: () => void;
    isActivationSelected: (activation: any) => any;
    toggleNetworkPopup: () => void;
    render(): React.ReactNode;
}
