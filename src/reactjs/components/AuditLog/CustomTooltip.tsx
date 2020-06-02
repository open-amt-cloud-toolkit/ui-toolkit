/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

/**
 * Displays tooltip on ag-grid row hover  
 */
import * as React from 'react';
import './CustomTooltip.scss';

interface CustomTooltipProps {
    rowIndex: number,
    api: any,
    column: any
}

export class CustomTooltip extends React.Component<CustomTooltipProps> {
    getReactContainerClasses() {
        return ['custom-tooltip'];
    }

    render() {
        //get row data based on index
        const data = this.props.api.getDisplayedRowAtIndex(this.props.rowIndex).data; 
        const isRoleName = this.props.column.colDef.field === 'auditApp';
        const isEvent = this.props.column.colDef.field === 'event';

        return (
            <React.Fragment>
                {isRoleName && (<div className="custom-tooltip">
                    <p><span>Role Name:{data.auditApp}</span></p>
                    <p><span>Role ID: {data.auditAppId}</span></p>
                </div>)}
                {isEvent && <div className="custom-tooltip">
                    <p><span>Event: {data.event}</span></p>
                    <p><span>Event ID: {data.eventId}</span></p>
                </div>}
            </React.Fragment>
        );
    }
}