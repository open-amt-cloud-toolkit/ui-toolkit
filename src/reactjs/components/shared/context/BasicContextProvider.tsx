/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react';

export const DomainContext = React.createContext({
    data: {}
})
export interface ProviderProps {
    data: any;
}
export class Provider extends React.Component<ProviderProps, {}> {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <DomainContext.Provider value={{data: this.props.data}}>
                {this.props.children}
            </DomainContext.Provider>
        )
    }
}

export const Consumer  = ({children, ...props}) => {
    return <DomainContext.Consumer >
        {children}
    </DomainContext.Consumer>
}