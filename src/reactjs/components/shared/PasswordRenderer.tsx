/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { ICellRendererParams } from "ag-grid-community";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './PasswordRenderer.scss'

/**
 * Framework component for mask and un-masking password field on the ag-grid
 */
export class PasswordRenderer extends React.Component<ICellRendererParams, { togglePasswordField: boolean }> {

    constructor(props) {
        super(props);
        this.state = {
            togglePasswordField: false
        }
    }
    togglePassword = () => {
        this.setState({
            togglePasswordField: !this.state.togglePasswordField
        })
    }
    render() {
        const { togglePasswordField } = this.state;
        return (
            <React.Fragment>
                {
                    togglePasswordField ? <div>{this.props.value} <FontAwesomeIcon className='password-icon' onClick={this.togglePassword} icon="eye-slash" size="xs" /></div> :  this.props.value ? <div>********* <FontAwesomeIcon className='password-icon' onClick={this.togglePassword} icon="eye" size="xs" /></div> : ' '
                }
            </React.Fragment>
        );
    }
}