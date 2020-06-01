/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

/**
 * Customized column header for ag-grid to include icons and handle header tooltips
 */
import * as React from 'react';
import { Tooltip } from '../shared/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface HeaderParams {
    displayName: any,
    description: any,
    enableSorting: any
}
export class CustomHeader extends React.Component<HeaderParams, { isMouseOver: boolean, message: string }> {
    tooltipStyles: any = {};
    constructor(props) {
        super(props);
        this.state = {
            isMouseOver: false,
            message: ''
        }
    }

    /**
     * adjustments to avoid tooltip edges being chopped off
     */
    adjustTooltipStyle = () => {
        this.tooltipStyles.left = 0;
        this.tooltipStyles.marginLeft = 0;
        this.tooltipStyles.width = '130px';
        this.props.description.length < 34 ? this.tooltipStyles.top = '-48px' : ((this.props.description.length<68) ? this.tooltipStyles.top = '-64px' : this.tooltipStyles.top = '-68px'); 
    }

    /**
     * dynamically get the icon position and adjust tooltip styles
     */
    prepareTooltipStyle = event => {
        let rect: any = event.target.getBoundingClientRect();
        let tooltipWidth: number = 200;
        this.tooltipStyles = {};
        this.tooltipStyles.position = 'fixed';
        this.tooltipStyles.left = rect.left - (tooltipWidth/2 + rect.width/2);
        this.props.description.length < 34 ? this.tooltipStyles.top = '-30px' : ((this.props.description.length<68) ? this.tooltipStyles.top = '-48px' : this.tooltipStyles.top = '-60px');
        if(this.tooltipStyles.left < 0) {
            this.adjustTooltipStyle();
        }
        
    }

    //toggle tooltip and set tooltip message
    handleMouseClick = event => {
        this.prepareTooltipStyle(event);
        this.setState((state, props) => {
            return { isMouseOver: true, message: props.description }
        });
    }

    //clear message when mouse pointer leaves the icon
    handleMouseLeave = event => {
        this.setState((state, props) => {
            return { isMouseOver: false, message: '' }
        });
    }

    render() {
        let menu = <div className={`customHeaderMenuButton ${this.props.displayName}`}
            onClick={this.handleMouseClick} onMouseLeave={this.handleMouseLeave}> 
            <FontAwesomeIcon className={this.props.displayName} icon='info-circle' />
        </div>;
        return (<React.Fragment>
            {this.state.isMouseOver && <Tooltip message={this.state.message} styles={this.tooltipStyles} />}
            <div style={{ display: 'flex' }}>{this.props.displayName} &nbsp; {menu}</div>
        </React.Fragment>)
    }
}