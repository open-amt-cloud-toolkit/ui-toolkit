/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { shallow } from 'enzyme'
import React from 'react'
import { CustomTooltip } from '../reactjs/components/AuditLog/CustomTooltip'

describe('Custom tooltip for auditlog', () => {
  const tooltipProps = {
    rowIndex: 10,
    column: {
      colDef: {
        field: 'auditApp'
      }
    },
    api: {
      getDisplayedRowAtIndex: jest.fn(() => ({ auditApp: 'auditApp', auditAppId: 10, event: 'event', eventId: 10 }))
    }
  }
  it('should load the component without crashing', () => {
    const wrapper = shallow(<CustomTooltip {...tooltipProps} />)
    expect(typeof wrapper).toBe('object')
  })
})
