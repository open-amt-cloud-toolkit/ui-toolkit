/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import { IEncodingOptions, EncodingOptions } from '../reactjs/KVM/EncodingOptions'
import { shallow } from 'enzyme'

describe('Testing EncodingOptions', () => {
  it('Test onEncodingChange() in EncodingOptions', () => {
    // Initialization of IEncodingOptions
    const encodingoptionsprops: IEncodingOptions = {
      changeEncoding: (testFunc2),
      getConnectState: (testFunc1)
    }

    const eo = shallow(<EncodingOptions {...encodingoptionsprops} />)
    eo.instance().setState = jest.fn()
    const myInstance = eo.instance() as EncodingOptions

    myInstance.onEncodingChange(new TesClass())

    // Output
    expect(value1).toBe(1)
    expect(myInstance.setState).toHaveBeenCalled()
    console.log(eo.debug())
    console.log(eo.props())
  })

  it('Test render() in EncodingOptions with getConnectState() === 1', () => {
    // Initialization of IEncodingOptions
    const encodingoptionsprops: IEncodingOptions = {
      changeEncoding: (testFunc2),
      getConnectState: (testFunc1)
    }

    const eo = shallow(<EncodingOptions {...encodingoptionsprops} />)

    // Output
    const ret = expect(eo).toMatchSnapshot()
    console.info('ret', ret)
    console.log(eo.debug())
    console.log(eo.props())
  })

  it('Test render() in EncodingOptions with getConnectState() === 2', () => {
    // Initialization of IEncodingOptions
    const encodingoptionsprops: IEncodingOptions = {
      changeEncoding: (testFunc2),
      getConnectState: (testFunc3)
    }

    const eo = shallow(<EncodingOptions {...encodingoptionsprops} />)

    // Output
    const ret = expect(eo).toMatchSnapshot()
    console.info('ret', ret)
    console.log(eo.debug())
    console.log(eo.props())
  })
})

function testFunc1 (): number {
  return 1
}

function testFunc3 (): number {
  return 2
}

let value1 = 0
function testFunc2 (v: number): void {
  ++value1
}

class TesClass {
  public target = new class {
    value: number = 1
  }()
}
