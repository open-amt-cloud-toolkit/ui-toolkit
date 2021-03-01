/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { auditlogCloumnDefs, auditLogDataModel } from './AuditLogConfig'
import { HttpClient } from '../services/HttpClient'
import { CustomHeader } from './CustomHeader'
import { CustomTooltip } from './CustomTooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from '../shared/Tooltip'
import { camelCaseReshape, isFalsy } from '../shared/Utilities'
import { ExportToCsv } from 'export-to-csv'
import SnackBar from '../shared/SnackBar'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css'

import './AuditLog.scss'

// Below 3 imports to support Localization
import { translateColumnDefs, translateText } from '../shared/Methods'
import { DomainContext } from '../shared/context/BasicContextProvider'

const options = {
  filename: 'AuditLog'
}

const csvExporter = new ExportToCsv(options)

// adds all the solid-svg icons into the library to prevent eplicit imports
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon])
library.add(...iconList)

export interface AuditLogProps {
  deviceId: string | null
  mpsServer: string | null

}

export class AuditLog extends React.Component<AuditLogProps, { rowData: any, errorMsg: string, value: any, currentPage: Number, totalPages: Number, showTooltip: boolean, isExporting: boolean, hasExportFailed: boolean, snackBarMessage: String, completeAuditLog: any, downloadCSV: boolean }> {
  gridApi: any
  gridColumnApi: any
  columnDefs: any
  disableNext: boolean = false
  disablePrev: boolean = true
  disableGoToPage: boolean = false
  constructor (props: any) {
    super(props)
    this.columnDefs = [
      auditlogCloumnDefs.initiator,
      auditlogCloumnDefs.auditapp,
      auditlogCloumnDefs.event,
      auditlogCloumnDefs.netaddress,
      auditlogCloumnDefs.time,
      auditlogCloumnDefs.exstr

    ]
    this.state = { rowData: [], errorMsg: '', value: '', currentPage: 0, totalPages: 0, showTooltip: false, isExporting: false, hasExportFailed: false, snackBarMessage: '', completeAuditLog: [], downloadCSV: false }
  }

  // returns updated start index for the next audit log request based on total rows, start and end row index
  adjustRowIndex = (rowtotalCnt, endIndex): number => {
    if (endIndex > rowtotalCnt) {
      return 1
    } else {
      return Math.abs(rowtotalCnt - (endIndex - 1))
    }
  }

  // Make the server response compatible for display
  transformResponse = (auditRecords): any => {
    auditRecords.forEach((record) => {
      record.netAddress = record.netAddress.replace(/[^\d.-]/g, '') // RegEx to keep only digits and . in NetAddress
      record.time = record.time.substring(0, record.time.length - 5)
    })

    return auditRecords
  }

  // Fetch audit logs using device id and start index.
  fetchAuditLog = async (index): Promise<any> => {
    try {
      const { mpsKey } = this.context.data
      const body = JSON.stringify({
        apikey: 'xxxxx',
        method: 'AuditLog',
        payload: {
          guid: this.props.deviceId,
          startIndex: index
        }
      })
      const server: string = this.props.mpsServer != null ? this.props.mpsServer : ''
      const data = await HttpClient.post(`https://${server}/amt`, body, mpsKey, true)
      return data
    } catch {
      console.log('An error occured')
    }
  }

  onGridReady = (params): any => {
    let rowtotalCnt: number = 0
    let rowtotalCntFetched: number = 0
    const errorMessage = 'Sorry! Something went wrong. try again later'

    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
    this.gridApi.sizeColumnsToFit()
    const dataSource = {
      rowCount: null,
      getRows: (params) => {
        this.gridApi.showLoadingOverlay()
        if (rowtotalCntFetched === 0) {
          this.fetchAuditLog(params.startRow).then(data => {
            if (typeof data.records !== 'undefined') {
              data.records = this.transformResponse(data.records.map((record) => camelCaseReshape(record, auditLogDataModel)))
              this.gridApi.hideOverlay()
              params.successCallback(data.records.reverse(), data.totalCnt)
              rowtotalCnt = data.totalCnt
              rowtotalCntFetched = rowtotalCnt - 20
            } else {
              this.setState({ errorMsg: data.error })
              this.gridApi.hideOverlay()
              this.gridApi.showNoRowsOverlay()
            }
          }).catch(() => {
            this.setState({ errorMsg: errorMessage })
            this.gridApi.hideOverlay()
            this.gridApi.showNoRowsOverlay()
          })
        } else {
          rowtotalCntFetched = this.adjustRowIndex(rowtotalCnt, params.endRow)

          this.fetchAuditLog(rowtotalCntFetched).then(data => {
            if (typeof data.records !== 'undefined') {
              data.records = this.transformResponse(data.records.map((record) => camelCaseReshape(record, auditLogDataModel)))
              this.gridApi.hideOverlay()
              if (this.gridApi.paginationGetTotalPages() === parseInt(this.gridApi.paginationGetCurrentPage()) + 1) {
                const size = rowtotalCnt % 10
                if (rowtotalCnt % 10 > 0) {
                  data.records = data.records.slice(0, size)
                }
              }
              params.successCallback(data.records.reverse(), data.totalCnt)
              rowtotalCnt = data.totalCnt
            } else {
              this.setState({ errorMsg: data.error })
              this.gridApi.hideOverlay()
              this.gridApi.showNoRowsOverlay()
            }
          }).catch(() => {
            this.setState({ errorMsg: errorMessage })
            this.gridApi.hideOverlay()
            this.gridApi.showNoRowsOverlay()
          })
        }
      }
    }
    params.api.setDatasource(dataSource)
  }

  /**
     * Navigates to all the pages of ag-grid and fetches audit logs from the sever
     * Once all data is loaded in the grid, enables the pagination controls and exports the grid data
     * to a CSV file
     */
  fetchCompleteAuditLog = async (): Promise<any> => {
    const rowtotalCnt = this.gridApi.paginationGetRowCount()
    let completeAuditLog = [{ auditAppId: 'Role ID', eventId: 'Event ID', initiator: 'Initiator', auditApp: 'Role Name', event: 'Event', netAddress: 'Network Address', time: 'Device Time(UTC)', exStr: 'Event Details' }]
    for (let index = 0; index < this.gridApi.paginationGetTotalPages(); index++) {
      const rowsFetched: number = ((index + 1) * this.gridApi.paginationGetPageSize() - 1)
      const indexNumber: number = (index === 0) ? 0 : (index + 1 !== this.gridApi.paginationGetTotalPages()) ? rowtotalCnt - rowsFetched : 1
      let logs = await this.fetchAuditLog(indexNumber)
      if (logs.records === undefined || isFalsy(logs.error)) {
        this.setState({
          hasExportFailed: true,
          isExporting: false,
          snackBarMessage: 'Something went wrong! Please try again later.'
        })
        setTimeout(() => {
          this.setState({
            hasExportFailed: false
          })
        }, 4000)
        break
      }
      if (indexNumber === 1) {
        const size = rowtotalCnt % 10
        logs.records = logs.records.slice(0, size)
      }
      logs = logs.records.map((record) => camelCaseReshape(record, auditLogDataModel))
      completeAuditLog = completeAuditLog.concat(this.transformResponse(logs).reverse())
    }
    this.setState({
      isExporting: false,
      completeAuditLog: completeAuditLog,
      downloadCSV: true
    })
    csvExporter.generateCsv(this.state.completeAuditLog)
  }

  // hide/show columns on window resize(avoid horizontal scroll for ag-grid)
  onGridSizeChanged = (params): any => {
    const gridWidth: any = document.getElementById('grid-wrapper')?.offsetWidth
    const columnsToShow: any = []
    const columnsToHide: any = []
    let totalColsWidth = 0
    const allColumns = params.columnApi.getAllColumns()
    for (let i = 0; i < allColumns.length; i++) {
      const column = allColumns[i]
      totalColsWidth += parseInt(column.getMinWidth())
      if (totalColsWidth > gridWidth) {
        columnsToHide.push(column.colId)
      } else {
        columnsToShow.push(column.colId)
      }
    }
    params.columnApi.setColumnsVisible(columnsToShow, true)
    params.columnApi.setColumnsVisible(columnsToHide, false)
    params.api.sizeColumnsToFit()
  }

  // Toggle the pagination buttons on click
  togglePaginationButtons = (directionString: string): void => {
    switch (directionString) {
      case 'first':
        this.disablePrev = true
        this.disableNext = false
        break
      case 'next':
        this.disablePrev = false
        if (this.gridApi.paginationGetTotalPages() === parseInt(this.gridApi.paginationGetCurrentPage()) + 1) {
          this.disableNext = true
        }
        break
      case 'prev':
        this.disableNext = false
        if (this.gridApi.paginationGetCurrentPage() === 0) {
          this.disablePrev = true
        }
        break
      case 'last':
        this.disableNext = true
        this.disablePrev = false
        break
      case 'fromgoto':
        this.disableNext = false
        this.disablePrev = false
        break
    }
  }

  // ag-grid pagination api
  onPaginationChanged = (): void => {
    if (isFalsy(this.gridApi)) {
      this.setState({
        currentPage: parseInt(this.gridApi.paginationGetCurrentPage()) + 1,
        totalPages: this.gridApi.paginationGetTotalPages()
      })
    }
  }

  // take the user to specific page on the ag-grid, as page index starts from 0, we need to decrement the input value by 1
  goToPage = (): void => {
    this.gridApi.paginationGoToPage(this.state.value - 1)
    const pageNumber: number = parseInt(this.state.value)
    switch (true) {
      case (pageNumber <= 1):
        this.togglePaginationButtons('first')
        break
      case (pageNumber > 1 && pageNumber < this.gridApi.paginationGetTotalPages()):
        this.togglePaginationButtons('fromgoto')
        break
      case (pageNumber >= this.gridApi.paginationGetTotalPages()):
        this.togglePaginationButtons('last')
        break
    }
  }

  /* custom pagination action -- start */
  onBtFirst = (): void => {
    this.gridApi.paginationGoToFirstPage()
    this.togglePaginationButtons('first')
  }

  onBtLast = (): void => {
    this.gridApi.paginationGoToLastPage()
    this.togglePaginationButtons('last')
  }

  onBtNext = (): void => {
    this.gridApi.paginationGoToNextPage()
    this.togglePaginationButtons('next')
  }

  onBtPrevious = (): void => {
    this.gridApi.paginationGoToPreviousPage()
    this.togglePaginationButtons('prev')
  }

  onBtExport = (): void => {
    this.setState((props, state) => {
      return { isExporting: true }
    })
    this.fetchCompleteAuditLog().catch(() => console.info('error occured'))
  }
  /* custom pagination action -- end */

  // set user entered page number to component state
  handleChange = (event): void => {
    this.setState({ value: event.target.value.replace(/[^\d-]/g, '') })
  }

  render (): React.ReactNode {
    const noRowsOverlayTemplate = `<div style={{width: "100%", fontSize: "25px", backgroundColor: "#ed645a"}}><span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow; color: red;">${this.state.errorMsg}</span></div>`
    const defaultColDef = {
      tooltipComponent: 'customTooltip'
    }
    const tooltipStyle = {
      position: 'absolute',
      bottom: '100%',
      left: '24px',
      width: '100px',
      margin: '0px'
    }
    const frameworkComponent = { agColumnHeader: CustomHeader, customTooltip: CustomTooltip }
    return (
      <React.Fragment>
        {!this.state.isExporting ? <div>
          <div id="grid-wrapper" style={{ width: '100%', height: '375px' }}>
            <div className="ag-theme-balham-dark" style={{ height: '100%', width: '100%' }}>
              <AgGridReact
                columnDefs={translateColumnDefs(this.columnDefs)}
                defaultColDef={defaultColDef}
                pagination={true}
                paginationPageSize={10}
                cacheBlockSize={10}
                rowModelType={'infinite'}
                infiniteInitialRowCount={1}
                onGridReady={this.onGridReady}
                rowData={this.state.rowData}
                overlayNoRowsTemplate={noRowsOverlayTemplate}
                onPaginationChanged={this.onPaginationChanged}
                suppressPaginationPanel={true}
                suppressScrollOnNewData={true}
                onGridSizeChanged={this.onGridSizeChanged}
                frameworkComponents={frameworkComponent}
              />
            </div>
          </div>

          <div className="agGrid-footer">
            <div className="ag-grid-footer-cell align-left">
              {this.state.showTooltip && <Tooltip message='Exports only cached entries' styles={tooltipStyle} />}
              <button className='export-to-csv' onClick={this.onBtExport} ><FontAwesomeIcon icon='file-export'/>{translateText('auditLog.grid.footer.exporttocsv.title')}
              </button>
            </div>
            <div className="ag-grid-footer-cell agGrid-Paginition align-center">
              <button type="button" onClick={this.onBtFirst} disabled={this.disablePrev}><FontAwesomeIcon icon='angle-double-left' /></button>
              <button type="button" onClick={this.onBtPrevious} disabled={this.disablePrev}><FontAwesomeIcon icon='angle-left' /></button>
              <span>{translateText('auditLog.grid.footer.pagination.text1')} {this.state.currentPage} {translateText('auditLog.grid.footer.pagination.text2')} {this.state.totalPages}</span>
              <button type="button" onClick={this.onBtNext} disabled={this.disableNext}><FontAwesomeIcon icon='angle-right' /></button>
              <button type="button" onClick={this.onBtLast} disabled={this.disableNext}><FontAwesomeIcon icon='angle-double-right' /></button>
            </div>
            <div className="ag-grid-footer-cell align-right go-to-page-section">
              <button onClick={this.goToPage} className='go-to-page'>{translateText('auditLog.grid.footer.gotopage.title')}</button>
              <input id="pagination-page" className="pagination-input" placeholder='page #' value={this.state.value} onChange={this.handleChange} type="text" name="page__num" disabled={this.disableGoToPage} />
            </div>
          </div>
        </div> : <div className="overlay">
          <div className="overlay__inner">
            <span className="export-loading-text">Please wait while we process the request</span>
            <span className="loader"></span>
          </div>
        </div>}
        {this.state.hasExportFailed && <SnackBar message={this.state.snackBarMessage} type='' />}
      </React.Fragment>
    )
  }
}

AuditLog.contextType = DomainContext
