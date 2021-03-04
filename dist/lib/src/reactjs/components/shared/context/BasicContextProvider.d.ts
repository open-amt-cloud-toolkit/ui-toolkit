/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react';
export declare const DomainContext: React.Context<{
    data: {};
}>;
export interface ProviderProps {
    data: any;
}
export declare class Provider extends React.Component<ProviderProps, {}> {
    render(): React.ReactNode;
}
export declare const Consumer: ({ children }: {
    children: any;
}) => JSX.Element;
