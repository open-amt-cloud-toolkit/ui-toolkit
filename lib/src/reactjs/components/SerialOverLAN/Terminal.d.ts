/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react';
export interface IPropTerminal {
    handleKeyPress: any;
    xterm: any;
    handleKeyDownPress: any;
}
declare class Term extends React.Component<IPropTerminal> {
    componentDidMount(): void;
    render(): React.ReactNode;
}
export default Term;
