/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from 'react'
import {
  ciraColumnDefs,
  defaultCiraGridProps,
  checkboxColumn,
  ciraDataModal
} from './CiraGridConfig'
import { isFunc, camelCaseReshape, isFalsy } from '../shared/Utilities'
import { translateColumnDefs } from '../shared/Methods'
import { PcsGrid } from '../shared/pcsGrid/PcsGrid'
import { HttpClient } from '../services/HttpClient'

export interface CiraGridProps {
  rpsServer: string | null
  getSelectedCiraConfigs?: any
  updateCiraGrid: boolean
  rpsKey: string
}

export interface CiraGridStates {
  columnDefs: any
  rowData: any
  rowSelection: any
  autoGroupColumnDef: any
  softSelectedDevice: any
}

/**
 * Presentational component for CIRA config scripts
 */
export class CiraGrid extends React.Component<CiraGridProps, CiraGridStates> {
  gridApi: any
  gridColumnApi: any
  constructor (props) {
    super(props)
    this.state = {
      columnDefs: [
        checkboxColumn,
        ciraColumnDefs.ConfigName,
        ciraColumnDefs.MpsServer,
        ciraColumnDefs.Port,
        ciraColumnDefs.Username,
        ciraColumnDefs.CommonName,
        ciraColumnDefs.RootCertificate
      ],
      rowData: null,
      rowSelection: 'single',
      autoGroupColumnDef: {
        headerName: 'Checkbox',
        field: 'checkbox',
        cellRenderer: 'agGroupCellRenderer',
        cellRendererParams: {
          checkbox: (params) => {
            return params.node.group === false
          }
        }
      },
      softSelectedDevice: undefined
    }
  }

  // listen to parent components chages to re-render the profile grid
  componentDidUpdate (prevProps): void {
    if (this.props.updateCiraGrid !== prevProps.updateCiraGrid) {
      this.fetchCiraConfigs().then((data) => {
        this.setState({
          rowData: isFalsy(data) ? data.map(config => camelCaseReshape(config, ciraDataModal)) : []
        })
      }).catch(() => console.info('error occured'))
    }
  }

  onSelectionChanged = (): void => {
    if (isFalsy(isFunc(this.props.getSelectedCiraConfigs))) {
      this.props.getSelectedCiraConfigs(this.gridApi.getSelectedRows())
    }
  }

  // Fetch the CIRA config scripts to be displayed on the grid
  fetchCiraConfigs = async (): Promise<any> => {
    const server: string = this.props.rpsServer != null ? this.props.rpsServer : ''
    return await HttpClient.get(
      `${server}/api/v1/admin/ciraconfigs`, this.props.rpsKey
    )
      .then((data) => data)
      .catch(() => this.setState({ rowData: [] }))
  }

  /**
   * Grid ready event gets called on load of ag-grid
   */
  onGridReady = (params): any => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
    this.fetchCiraConfigs().then((data) => {
      this.setState({
        rowData: isFalsy(data) ? data.map(config => camelCaseReshape(config, ciraDataModal)) : []
      })
    }).catch(() => console.info('error occured'))
  }

  getSoftSelectId = (id = {}): any => id

  render (): React.ReactNode {
    const gridProps = {
      ...defaultCiraGridProps,
      columnDefs: translateColumnDefs(this.state.columnDefs),
      rowData: this.state.rowData,
      onGridReady: this.onGridReady,
      rowSelection: this.state.rowSelection,
      groupSelectsChildren: true,
      suppressRowClickSelection: true,
      suppressAggFuncInHeader: true,
      autoGroupColumnDef: this.state.autoGroupColumnDef,
      rowMultiSelectWithClick: false,
      onSelectionChanged: this.onSelectionChanged,
      sizeColumnsToFit: true,
      getSoftSelectId: this.getSoftSelectId,
      softSelectId: (this.state.softSelectedDevice || {}).id,
      /* Grid Events */
      onRowClicked: ({ node }) => node.setSelected(!isFalsy(node.isSelected()))
    }
    return [<PcsGrid key="device-grid-key" {...gridProps} />]
  }
}
