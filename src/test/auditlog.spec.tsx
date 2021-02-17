/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react'
import { shallow } from 'enzyme'
import { AuditLog, AuditLogProps } from '../reactjs/components/AuditLog/AuditLog'
import { HttpClient } from '../reactjs/components/services/HttpClient'

// jest.mock('../reactjs/components/services/HttpClient');

describe('Test AuditLog UI component', () => {
  it('Test adjustRowIndex function with endIndex > rowtotalCnt', () => {
    // Initialization of AuditLogProps
    const auditprops: AuditLogProps = {
      deviceId: '1234',
      mpsServer: 'localhost/mps'
    }

    // Input
    const rowtotalCnt = 60
    const endIndex = 70

    // Create Object
    const auditlog = shallow(<AuditLog {...auditprops} />)
    const myInstance = auditlog.instance() as AuditLog
    const ret = myInstance.adjustRowIndex(rowtotalCnt, endIndex)

    // Output
    expect(ret).toBe(1)
  })

  it('Test adjustRowIndex function with endIndex < rowtotalCnt', () => {
    // Initialization of AuditLogProps
    const auditprops: AuditLogProps = {
      deviceId: '1234',
      mpsServer: 'localhost/mps'
    }

    // Input
    const rowtotalCnt = 50
    const endIndex = 30

    // Create Object
    const auditlog = shallow(<AuditLog {...auditprops} />)
    const myInstance = auditlog.instance() as AuditLog
    const ret = myInstance.adjustRowIndex(rowtotalCnt, endIndex)

    // Output
    expect(ret).toBe(21)
  })

  it('Test adjustRowIndex function with endIndex == rowtotalCnt', () => {
    // Initialization of AuditLogProps
    const auditprops: AuditLogProps = {
      deviceId: '1234',
      mpsServer: 'localhost/mps'
    }

    // Input
    const rowtotalCnt = 70
    const endIndex = 70

    // Create Object
    const auditlog = shallow(<AuditLog {...auditprops} />)
    const myInstance = auditlog.instance() as AuditLog
    const ret = myInstance.adjustRowIndex(rowtotalCnt, endIndex)

    // Output
    expect(ret).toBe(1)
  })

  it('Test transformResponse function', () => {
    // Initialization of AuditLogProps
    const auditprops: AuditLogProps = {
      deviceId: '1234',
      mpsServer: 'localhost/mps'
    }

    // Input
    const data = [{ auditAppId: 18, eventId: 9, initiatorType: 0, auditApp: 'Redirection Manager', event: 'KVM Session Ended', initiator: 'admin', time: '2019-12-10T15:54:37.000Z', mCLocationType: 206, netAddress: '\u0000\u00071.2.3.4\u0000', ex: { type: 'Buffer', data: [] }, exStr: null }]

    // Create Object
    const auditlog = shallow(<AuditLog {...auditprops} />)
    const myInstance = auditlog.instance() as AuditLog
    const ret = myInstance.transformResponse(data)
    console.info('ret', ret)

    // Output
    expect(data[0].netAddress).toBe('1.2.3.4')
    expect(data[0].time).toBe('2019-12-10T15:54:37')
  })

  it('should call the auditlog export function on click', async () => {
    const output = {
      totalCnt: 560,
      records: [{ AuditAppID: 18, EventID: 9, InitiatorType: 0, AuditApp: 'Redirection Manager', Event: 'KVM Session Ended', Initiator: 'admin', Time: '2019-12-10T15:54:37.000Z', MCLocationType: 206, NetAddress: '\u0000\u00071.2.3.4\u0000', Ex: { type: 'Buffer', data: [] }, ExStr: null },
        { AuditAppID: 18, EventID: 8, InitiatorType: 0, AuditApp: 'Redirection Manager', Event: 'KVM Session Started', Initiator: 'admin', Time: '2019-12-10T15:54:37.000Z', MCLocationType: 239, NetAddress: '�\u0000\u00071.2.3.4\u0000', Ex: { type: 'Buffer', data: [] }, ExStr: null },
        { AuditAppID: 17, EventID: 4, InitiatorType: 0, AuditApp: 'RCO', Event: 'Set Boot Options', Initiator: 'admin', Time: '2019-12-10T15:54:37.000Z', MCLocationType: 239, NetAddress: '��\u0000\u00071.2.3.4\u0007�\u0000\b\u0000\u0000\u0000\u0000', Ex: { type: 'Buffer', data: [] }, ExStr: null },
        { AuditAppID: 17, EventID: 4, InitiatorType: 0, AuditApp: 'RCO', Event: 'Set Boot Options', Initiator: 'admin', Time: '2019-12-10T15:54:37.000Z', MCLocationType: 239, NetAddress: '��\u0000\u00071.2.3.4\u0007�\u0000\b\u0000\u0000\u0000\u0000', Ex: { type: 'Buffer', data: [] }, ExStr: null },
        { AuditAppID: 18, EventID: 9, InitiatorType: 0, AuditApp: 'Redirection Manager', Event: 'KVM Session Ended', Initiator: 'admin', Time: '2019-12-10T15:54:37.000Z', MCLocationType: 239, NetAddress: '�0\u0000\u00071.2.3.4\u0000', Ex: { type: 'Buffer', data: [] }, ExStr: null },
        { AuditAppID: 17, EventID: 4, InitiatorType: 0, AuditApp: 'RCO', Event: 'Set Boot Options', Initiator: 'admin', Time: '2019-12-10T15:54:37.000Z', MCLocationType: 239, NetAddress: '�0\u0000\u00071.2.3.4\u0007\u0000\u0000\u0000\u0000\u0000\u0000\u0000', Ex: { type: 'Buffer', data: [] }, ExStr: null },
        { AuditAppID: 17, EventID: 4, InitiatorType: 0, AuditApp: 'RCO', Event: 'Set Boot Options', Initiator: 'admin', Time: '2019-12-10T15:54:37.000Z', MCLocationType: 239, NetAddress: '�1\u0000\u00071.2.3.4\u0007\u0000\u0000\u0000\u0000\u0000\u0000\u0000', Ex: { type: 'Buffer', data: [] }, ExStr: null },
        { AuditAppID: 17, EventID: 2, InitiatorType: 0, AuditApp: 'RCO', Event: 'Performed Power Cycle', Initiator: 'admin', Time: '2019-12-10T15:54:37.000Z', MCLocationType: 239, NetAddress: '�1\u0000\u00071.2.3.4\u0007\u0000\u0000\u0000\u0000\u0000\u0000\u0000', Ex: { type: 'Buffer', data: [] }, ExStr: null },
        { AuditAppID: 18, EventID: 8, InitiatorType: 0, AuditApp: 'Redirection Manager', Event: 'KVM Session Started', Initiator: 'admin', Time: '2019-12-10T15:54:37.000Z', MCLocationType: 239, NetAddress: '�H\u0000\u00071.2.3.4\u0000', Ex: { type: 'Buffer', data: [] }, ExStr: null },
        { AuditAppID: 18, EventID: 9, InitiatorType: 0, AuditApp: 'Redirection Manager', Event: 'KVM Session Ended', Initiator: 'admin', Time: '2019-12-10T15:54:37.000Z', MCLocationType: 239, NetAddress: '��\u0000\u00071.2.3.4\u0000', Ex: { type: 'Buffer', data: [] }, ExStr: null }]
    }

    HttpClient.post = jest.fn(async () => await Promise.resolve(output))
    const auditprops: AuditLogProps = {
      deviceId: '1234',
      mpsServer: 'localhost/mps'
    }

    const auditlog = shallow(<AuditLog {...auditprops} />)
    const myInstance = auditlog.instance() as AuditLog
    auditlog.setState({
      isExporting: true
    })
    myInstance.gridApi = {
      paginationGetRowCount: () => 100,
      paginationGetTotalPages: () => 10,
      paginationGetPageSize: () => 10
    }
    myInstance.context = {
      data: {
        mpsKey: 'APIKEYFORMPS123!'
      }
    }

    myInstance.fetchCompleteAuditLog().catch(() => console.info('error occured'))

    expect(auditlog.state('isExporting')).toEqual(true)
  })

  it('should call the ongridready function and set the grid api details', () => {
    const auditprops: AuditLogProps = {
      deviceId: '1234',
      mpsServer: 'localhost/mps'
    }

    const auditlog = shallow(<AuditLog {...auditprops} />)
    const myInstance = auditlog.instance() as AuditLog
    const params = {
      api: {
        showLoadingOverlay: () => { },
        sizeColumnsToFit: jest.fn(),
        hideOverlay: jest.fn(),
        setDatasource: jest.fn()
      },
      columnApi: {

      },
      successCallback: jest.fn()
    }

    myInstance.onGridReady(params)
    expect(typeof auditlog).toBe('object')
  })

  it('should toggle the pagination buttons on click', () => {
    const auditprops: AuditLogProps = {
      deviceId: '1234',
      mpsServer: 'localhost/mps'
    }

    const auditlog = shallow(<AuditLog {...auditprops} />)
    const myInstance = auditlog.instance() as AuditLog
    myInstance.togglePaginationButtons('last')
    expect(myInstance.disableNext).toEqual(true)
    expect(myInstance.disablePrev).toEqual(false)

    myInstance.togglePaginationButtons('first')
    expect(myInstance.disableNext).toEqual(false)
    expect(myInstance.disablePrev).toEqual(true)

    myInstance.gridApi = {
      paginationGetTotalPages: () => 10,
      paginationGetCurrentPage: () => 9
    }
    myInstance.togglePaginationButtons('next')
    expect(myInstance.disableNext).toEqual(true)
    expect(myInstance.disablePrev).toEqual(false)

    myInstance.gridApi = {
      paginationGetTotalPages: () => 10,
      paginationGetCurrentPage: () => 0
    }
    myInstance.togglePaginationButtons('prev')
    expect(myInstance.disableNext).toEqual(false)
    expect(myInstance.disablePrev).toEqual(true)
  })

  it('should set the exporting flag to true on click of export auditlog button', () => {
    const auditprops: AuditLogProps = {
      deviceId: '1234',
      mpsServer: 'localhost/mps'
    }

    const auditlog = shallow(<AuditLog {...auditprops} />)
    const myInstance = auditlog.instance() as AuditLog

    myInstance.fetchAuditLog = jest.fn()

    myInstance.onBtExport()
    expect(auditlog.state('isExporting')).toBe(true)
  })

  it('should toggle the pagination button from goto page click', () => {
    const auditprops: AuditLogProps = {
      deviceId: '1234',
      mpsServer: 'localhost/mps'
    }

    const auditlog = shallow(<AuditLog {...auditprops} />)
    const myInstance = auditlog.instance() as AuditLog
    auditlog.setState({
      value: '10'
    })
    myInstance.gridApi = {
      paginationGoToPage: () => 9,
      paginationGetTotalPages: () => 20
    }
    myInstance.goToPage()
    expect(myInstance.disableNext).toEqual(false)
    expect(myInstance.disablePrev).toEqual(false)

    auditlog.setState({
      value: '0'
    })
    myInstance.goToPage()
    expect(myInstance.disableNext).toEqual(false)
    expect(myInstance.disablePrev).toEqual(true)

    auditlog.setState({
      value: '25'
    })
    myInstance.goToPage()
    expect(myInstance.disableNext).toEqual(true)
    expect(myInstance.disablePrev).toEqual(false)
  })

  it('should set the current page number  and total page count on pagination change', () => {
    const auditprops: AuditLogProps = {
      deviceId: '1234',
      mpsServer: 'localhost/mps'
    }

    const auditlog = shallow(<AuditLog {...auditprops} />)
    const myInstance = auditlog.instance() as AuditLog
    myInstance.gridApi = {
      paginationGetCurrentPage: () => 10,
      paginationGetTotalPages: () => 20
    }
    myInstance.onPaginationChanged()
    expect(auditlog.state('currentPage')).toEqual(11)
    expect(auditlog.state('totalPages')).toEqual(20)
  })

  it('should navigate to respective pages using custom pagination', () => {
    const auditprops: AuditLogProps = {
      deviceId: '1234',
      mpsServer: 'localhost/mps'
    }

    const auditlog = shallow(<AuditLog {...auditprops} />)
    const myInstance = auditlog.instance() as AuditLog
    myInstance.gridApi = {
      paginationGoToFirstPage: () => { },
      paginationGoToLastPage: () => { },
      paginationGoToNextPage: () => { },
      paginationGoToPreviousPage: () => { },
      paginationGetTotalPages: () => 10,
      paginationGetCurrentPage: () => 8
    }

    myInstance.onBtFirst()
    expect(myInstance.disablePrev).toEqual(true)
    myInstance.onBtLast()
    expect(myInstance.disableNext).toEqual(true)
    myInstance.onBtNext()
    expect(myInstance.disablePrev).toEqual(false)
    myInstance.onBtPrevious()
    expect(myInstance.disableNext).toEqual(false)
  })

  it('should set the user entered page number into component state', () => {
    const auditprops: AuditLogProps = {
      deviceId: '1234',
      mpsServer: 'localhost/mps'
    }

    const auditlog = shallow(<AuditLog {...auditprops} />)
    const myInstance = auditlog.instance() as AuditLog
    const goToPageEvent = {
      target: {
        value: '10'
      }
    }
    myInstance.handleChange(goToPageEvent)
    expect(auditlog.state('value')).toEqual('10')
  })

  it('should change the visible columns when grid width is altered', () => {
    const auditprops: AuditLogProps = {
      deviceId: '1234',
      mpsServer: 'localhost/mps'
    }

    const auditlog = shallow(<AuditLog {...auditprops} />)
    const myInstance = auditlog.instance() as AuditLog

    const div = document.createElement('div')
    div.setAttribute('id', 'grid-wrapper')
    document.body.appendChild(div)

    const param = {
      columnApi: {
        getAllColumns: jest.fn(() => ([{ auditApp: 'app1', auditAppId: '20', getMinWidth: jest.fn() }])),
        setColumnsVisible: jest.fn()
      },
      api: {
        sizeColumnsToFit: jest.fn()
      }
    }

    myInstance.onGridSizeChanged(param)
  })
})
