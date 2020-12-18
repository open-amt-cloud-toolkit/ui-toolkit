/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from "react";
import {
  networkColumnDefs,
  defaultNetworkGridProps,
  checkboxColumn,
  networkDataModal,
} from "./NetworkGridConfig";
import { camelCaseReshape, isFunc } from "../shared/Utilities";
import { translateColumnDefs } from "../shared/Methods";
import { PcsGrid } from "../shared/pcsGrid/PcsGrid";
import { HttpClient } from "../services/HttpClient";

export interface NetworkGridProps {
  rpsServer: string;
  getSelectedNetwork?: any;
  rpsKey: string;
  updateNetworkGrid?: boolean;
}

export interface NetworkGridStates {
  columnDefs: any;
  rowData: any;
  rowSelection: any;
  autoGroupColumnDef: any;
  softSelectedDevice: any;
}

/**
 * Presentational component for Network config setting
 */
export class NetworkGrid extends React.Component<
  NetworkGridProps,
  NetworkGridStates
> {
  gridApi: any;
  gridColumnApi: any;
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        checkboxColumn,
        networkColumnDefs.Name,
        networkColumnDefs.DHCPEnabled,
      ],
      rowData: null,
      rowSelection: "single",
      autoGroupColumnDef: {
        headerName: "Checkbox",
        field: "checkbox",
        cellRenderer: "agGroupCellRenderer",
        cellRendererParams: {
          checkbox: (params) => {
            return params.node.group === false;
          },
        },
      },
      softSelectedDevice: undefined,
    };
  }

  onSelectionChanged = () => {
    if (isFunc(this.props.getSelectedNetwork)) {
      this.props.getSelectedNetwork(this.gridApi.getSelectedRows());
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.updateNetworkGrid != prevProps.updateNetworkGrid) {
      this.fetchNetworkSettings().then((data) => {
        this.setState({
          rowData: data.map((config) =>
            camelCaseReshape(config, networkDataModal)
          ),
        });
      });
    }
  }

  fetchNetworkSettings = async () =>
    await HttpClient.get(
      `${this.props.rpsServer}/api/v1/admin/networkconfigs`,
      this.props.rpsKey
    );

  /**
   * Grid ready event gets called on load of ag-grid
   */
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.fetchNetworkSettings()
      .then((data) => {
         this.setState({
          rowData: data.map((network) =>
            camelCaseReshape(network, networkDataModal)
          ),
        });
      })
      .catch((error) => console.log(error, "++++Networkerror"));
  };

  getSoftSelectId = (id = {}) => id;

  render() {
     const gridProps = {
      ...defaultNetworkGridProps,
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
      onRowClicked: ({ node }) => node.setSelected(!node.isSelected()),
    };
    return [<PcsGrid key="device-grid-key" {...gridProps} />];
  }
}
