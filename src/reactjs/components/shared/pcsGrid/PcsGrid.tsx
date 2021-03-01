/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
// Copyright (c) Microsoft. All rights reserved.
// Subset of the code from https://github.com/Azure/pcs-remote-monitoring-webui

import * as React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { ROW_HEIGHT } from './pcsGridConfig'
import { isFalsy, isFunc } from '../Utilities'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-dark.css'
import './pcsGrid.scss'

export interface pcsGridProps {
  sizeColumnsToFit: any
  onGridReady: any
  getSoftSelectId: any
  softSelectId: any
  onRowClicked: any

}

export class PcsGrid extends React.Component<pcsGridProps> {
  defaultPcsGridProps: any
  gridApi: any
  resizeEvent: any
  subscriptions: any
  constructor (props: pcsGridProps) {
    super(props)
    this.state = {
      currentSoftSelectId: undefined
    }
    this.defaultPcsGridProps = {
      suppressDragLeaveHidesColumns: true,
      suppressCellSelection: true,
      suppressClickEdit: true,
      suppressRowClickSelection: true, // Suppress so that a row is only selectable by checking the checkbox
      suppressLoadingOverlay: true,
      suppressNoRowsOverlay: true
    }
    this.subscriptions = []
  }

  componentDidMount (): void {
    window.addEventListener('resize', () => this.gridApi.sizeColumnsToFit())
  }

  /** Save the gridApi locally on load */

  onGridReady = (gridReadyEvent): any => {
    this.gridApi = gridReadyEvent.api
    if (isFalsy(this.props.sizeColumnsToFit)) {
      this.gridApi.sizeColumnsToFit()
    }
    this.props.onGridReady(gridReadyEvent)
  }

  /** When a row is clicked, select the row unless a soft select link was clicked */
  onRowClicked = (rowEvent): any => {
    const className = rowEvent.event.target.className
    if (isFalsy(className.indexOf) && className.indexOf('soft-select-link-cell') === -1) {
      const { onRowClicked } = this.props
      if (isFalsy(isFunc(onRowClicked))) onRowClicked(rowEvent)
    }
  }

  render (): React.ReactNode {
    const { getSoftSelectId, softSelectId } = this.props
    const gridParams = {
      ...this.defaultPcsGridProps,
      ...this.props,
      headerHeight: ROW_HEIGHT,
      rowHeight: ROW_HEIGHT,
      onGridReady: this.onGridReady,
      onRowClicked: this.onRowClicked,
      rowClassRules: {
        'pcs-row-soft-selected': ({ data }) =>
          isFalsy(isFunc(getSoftSelectId))
            ? getSoftSelectId(data) === softSelectId
            : false
      }
    }
    return (

      <div className="pcs-grid-container ag-theme-dark" style={{ width: '100%', height: '500px' }}>
        <AgGridReact className="ag-theme-dark" {...gridParams} />
      </div>

    )
  }
}
