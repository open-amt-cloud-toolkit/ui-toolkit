/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react'
import {
  profileColumnDefs,
  checkboxColumn,
  defaultDeviceGridProps,
  profileModel
} from './profileGridConfig'
import { PcsGrid } from '../shared/pcsGrid/PcsGrid'
import { isFunc, camelCaseReshape, isFalsy } from '../shared/Utilities'
import { translateColumnDefs } from '../shared/Methods'
import { HttpClient } from '../services/HttpClient'

export interface ProfileGridProps {
  rpsServer: string | null
  getselectedProfile?: any
  updateProfileGrid: boolean
  rpsKey: string
}

export interface ProfileGridStates {
  columnDefs: any
  rowData: any
  rowSelection: any
  autoGroupColumnDef: any
  softSelectedDevice: any
}

/**
 * Component to create the profile grid UI
 */
export class ProfileGrid extends React.Component<
ProfileGridProps,
ProfileGridStates
> {
  gridApi: any
  gridColumnApi: any
  constructor (props) {
    super(props)
    this.state = {
      columnDefs: [
        checkboxColumn,
        profileColumnDefs.Name,
        profileColumnDefs.GenerateRandomPassword,
        profileColumnDefs.RandomPasswordLength,
        profileColumnDefs.GenerateRandomMEBXPassword,
        profileColumnDefs.RandomMEBXPasswordLength,
        profileColumnDefs.NetworkConfigName,
        profileColumnDefs.CiraConfigName,
        profileColumnDefs.Activation
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
    if (this.props.updateProfileGrid !== prevProps.updateProfileGrid) {
      this.fetchProfiles().then((data) => {
        const reshapedData = isFalsy(data) ? data.map((profile) =>
          camelCaseReshape(profile, profileModel)
        ) : []
        this.setState({
          rowData: reshapedData
        })
      }).catch(() => console.info('error occured'))
    }
  }

  // update the parent component with selected profile details
  onSelectionChanged = (): void => {
    if (isFalsy(isFunc(this.props.getselectedProfile))) {
      this.props.getselectedProfile(this.gridApi.getSelectedRows())
    }
  }

  // Rest api call to fetch the profiles list through HTTP client
  fetchProfiles = async (): Promise<any> => {
    const server: string = this.props.rpsServer != null ? this.props.rpsServer : ''
    return await HttpClient.get(
      `${server}/api/v1/admin/profiles`,
      this.props.rpsKey
    )
      .then((data) => data)
      .catch(() =>
        this.setState({
          rowData: []
        })
      )
  }

  onGridReady = (params): any => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
    this.fetchProfiles().then((data) => {
      const reshapedData = isFalsy(data) ? data.map((profile) => camelCaseReshape(profile, profileModel)
      ) : []
      this.setState({
        rowData: reshapedData
      })
    }).catch(() => console.info('error occured'))
  }

  getSoftSelectId = (id = {}): any => id

  render (): React.ReactNode {
    const gridProps = {
      ...defaultDeviceGridProps,
      columnDefs: translateColumnDefs(this.state.columnDefs),
      rowData: this.state.rowData,
      onGridReady: this.onGridReady,
      rowSelection: this.state.rowSelection,
      groupSelectsChildren: true,
      suppressRowClickSelection: true,
      suppressAggFuncInHeader: true,
      autoGroupColumnDef: this.state.autoGroupColumnDef,
      rowMultiSelectWithClick: true,
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
