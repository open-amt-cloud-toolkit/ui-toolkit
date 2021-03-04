import React from 'react';
import '../NetworkEditor/NetworkEditor.scss';
export interface NetworkProfileFormProps {
    close?: any;
    rpsServer?: string | null;
    createNotification?: any;
    selectedNetwork?: any;
    isEdit?: boolean;
    showProfileError?: boolean;
    mpsServer?: string | null;
}
export interface NetworkProfileFormStates {
    networkDetails?: any;
    networkName_blur?: boolean;
    networkConfigError?: string;
}
export declare class NetworkProfileForm extends React.Component<NetworkProfileFormProps, NetworkProfileFormStates> {
    constructor(props: any);
    componentDidUpdate(prevProps: any): void;
    handleSubmit: (e: any) => Promise<any>;
    handleChange: (e: any) => void;
    handleClick: (e: any) => void;
    handleOnBlur: (e: any) => void;
    render(): React.ReactNode;
}
