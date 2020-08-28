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
        const {api, rowIndex, column} = this.props;
        //get row data based on index
        const data = api.getDisplayedRowAtIndex(rowIndex) ? api.getDisplayedRowAtIndex(rowIndex).data : '' ; 
        const isRoleName = column.colDef.field === 'auditApp';
        const isEvent = column.colDef.field === 'event';

        return (
            <React.Fragment>
                {(isRoleName && data)? (<div className="custom-tooltip">
                    <p><span>Role Name:{data.auditApp}</span></p>
                    <p><span>Role ID: {data.auditAppId}</span></p>
                </div>) : null}
                {(isEvent  && data )? (<div className="custom-tooltip">
                    <p><span>Event: {data.event}</span></p>
                    <p><span>Event ID: {data.eventId}</span></p>
                </div>): null}
            </React.Fragment>
        );
    }
}