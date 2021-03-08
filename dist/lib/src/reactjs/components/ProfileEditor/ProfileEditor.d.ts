/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
export interface ProfileProps {
    rpsServer: string | null;
    mpsServer: string | null;
}
export interface ProfileStates {
    selectedProfile: any;
    openFlyout: boolean;
    showPopup: boolean;
    showMessage: boolean;
    message: any;
    type: string;
    updateProfileGrid: boolean;
    isEdit: boolean;
}
/**
 * Wrapper component for Profile control to display the profile grids and header toolbar
 */
export declare class Profile extends React.Component<ProfileProps, ProfileStates> {
    constructor(props: ProfileProps);
    getselectedProfile: (selectedProfile: any) => void;
    togglePopup: () => void;
    createProfile: (success: any, response: any) => void;
    showNotification: () => ReturnType<typeof setTimeout>;
    confirmDelete: () => Promise<any>;
    handleEdit: () => void;
    handleChange: () => void;
    render(): React.ReactNode;
}
