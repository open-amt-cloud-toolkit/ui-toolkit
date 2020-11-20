/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react';
import { getPowerState } from '../services/PowerActionServices';
import { DomainContext } from './context/BasicContextProvider';

export interface PowerStateProps {
    deviceId: string,
    server: string,
    handlePowerStatus: (value: string) => void,
    updateParent: () => void
}

/**
 * Generic class to fetch the AMT Device Power state
 */
export class PowerState extends React.Component<PowerStateProps, { powerState: number }> {
    timeInterval: any;
    constructor(props) {
        super(props);
        this.state = {
            powerState: 0
        }
    }

    componentDidMount() {
        this.getAmtPowerState();
        this.timeInterval = setInterval(() => this.getAmtPowerState(), 15000);

    }

    componentWillUnmount() {
        clearInterval(this.timeInterval)
    }

    /** Fetch the Power state from AMT Device */
    getAmtPowerState = () => {
        getPowerState(this.props.deviceId, this.props.server, this.context.data.mpsKey)
            .then(data => {
                this.props.updateParent()
                if(data.powerstate) {
                    this.setState({
                        powerState: data.powerstate
                    })
                } else {
                    this.setState({
                        powerState: 100
                    })
                }
                data.powerstate === 2 ? this.props.handlePowerStatus('poweron') : this.state.powerState !== 100 ? this.props.handlePowerStatus('sleep') : this.props.handlePowerStatus('failed');
            })
            .catch(error => {
                console.info('error', error)
            })
    }

    renderPowerState = (param) => {
        switch (param) {
            case 1:
            case 10:
            case 11:
            case 14:
            case 17:
                return <span style={{ color: "red" }}>Other</span>
            case 2:
                return <span style={{ color: "green" }}>Power on</span>
            case 3:
            case 4:
                return <span style={{ color: "red" }}>deep sleep</span>
            case 5:
            case 6:
            case 8:
            case 9:
            case 12:
            case 13:
            case 15:
            case 16:
                return <span style={{ color: "red" }}>Power Off</span>
            case 7:
                return <span style={{ color: "red" }}>Hibernate</span>
            default:
                return <span style={{ color: "red" }}>Unknown</span>
        }
    }

    render() {
        const { powerState } = this.state;
        return (
            this.renderPowerState(powerState)
            // powerState === 4 ? (<span style={{ color: "red" }}>deep sleep </span>) : powerState === 2 ? (<span style={{ color: "green" }}>Power on </span>) : (<span>unknown</span>)
        )
    }
}

PowerState.contextType = DomainContext;
