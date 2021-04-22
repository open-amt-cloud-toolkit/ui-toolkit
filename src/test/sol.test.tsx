/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import { Sol, SOLProps } from '../reactjs/components/SerialOverLAN/Sol'
import { HttpClient } from '../reactjs/components/services/HttpClient'
import { AMTRedirector1, Protocol } from './helper/amtredirector1'
import { Mockeventpersist } from './helper/mockeventpersist'

import * as React from 'react'
import { shallow } from 'enzyme'
import { Terminal } from './helper/terminal'
import { AmtTerminal } from '../core/AMTTerminal'
// import { FileReader } from '../core/FileReader'

const solprop: SOLProps = {
  deviceId: 'acfae359-be7b-4861-8e0c-54b20389bb68',
  mpsServer: 'https://localhost:9300'
}

describe('Test Sol class', () => {
  // const fr: FileReader = {
  //   onload: jest.fn(),
  //   onloadend: jest.fn(),
  //   readAsArrayBuffer: jest.fn(),
  //   readAsBinaryString: jest.fn()
  // }
  it('Test Sol render', () => {
    // Initialization of ConnectProps
    const solprop: SOLProps = {
      deviceId: 'abcd-efh-ijkl-mnop',
      mpsServer: '1.2.3.4:1234'
    }

    // shallow
    const sol = shallow(<Sol {...solprop} />)

    // Output
    expect(sol).toMatchSnapshot()
  })

  it('Test handlePowerOptions with failure', () => {
    // Initialization of ConnectProps
    const solprop: SOLProps = {
      deviceId: 'abcd-efh-ijkl-mnop',
      mpsServer: '1.2.3.4:1234'
    }
    HttpClient.post = jest.fn(async function (arg1, arg2, arg3) {
      return await new Promise((resolve, reject) => {
        resolve({
          Body: {
            ReturnValueStr: 'FAIL'
          }
        })
      })
    })

    const sol = shallow(<Sol {...solprop} />)
    const myInstance = sol.instance() as Sol
    console.info('myinstance', myInstance)

    // call the function and check the expected output
    // return myInstance.handlePowerOptions(ev).then(data => expect(myInstance.state.message).toEqual("Sorry! there was some technical difficulties"));
  })

  it('Test onTerminalStateChange', () => {
    // Initialization of ConnectProps
    const solprop: SOLProps = {
      deviceId: 'abcd-efh-ijkl-mnop',
      mpsServer: '1.2.3.4:1234'
    }

    const sol = shallow(<Sol {...solprop} />)
    const myInstance = sol.instance() as Sol

    // call the function and check the expected output
    myInstance.onTerminalStateChange(null, 2)
    expect(myInstance.state.SOLstate).toBe(2)
  })

  it('Test startSOL', () => {
    // Initialization of ConnectProps
    const solprop: SOLProps = {
      deviceId: 'abcd-efh-ijkl-mnop',
      mpsServer: '1.2.3.4:1234'
    }

    const sol = shallow(<Sol {...solprop} />)
    const myInstance = sol.instance() as Sol
    myInstance.redirector = new AMTRedirector1(myInstance.logger,
      Protocol.SOL,
      new FileReader(),
      'abcd-efgh-ijkl-mnop',
      16994,
      '',
      '',
      0,
      0,
      '1.2.3.4:9876' + '/relay')

    // call the function and check the expected output
    myInstance.startSOL()
    expect(myInstance.redirector.startvariable).toBe(5)
  })

  it('Test stopSOL', () => {
    // Initialization of ConnectProps
    const solprop: SOLProps = {
      deviceId: 'abcd-efh-ijkl-mnop',
      mpsServer: '1.2.3.4:1234'
    }

    const sol = shallow(<Sol {...solprop} />)
    const myInstance = sol.instance() as Sol
    myInstance.redirector = new AMTRedirector1(myInstance.logger,
      Protocol.SOL,
      new FileReader(),
      'abcd-efgh-ijkl-mnop',
      16994,
      '',
      '',
      0,
      0,
      '1.2.3.4:9876' + '/relay')

    // call the function and check the expected output
    myInstance.startSOL()
    myInstance.stopSOL()
    expect(myInstance.state.SOLstate).toBe(0)
  })

  it('Test onTerminalStateChange', () => {
    // Initialization of ConnectProps
    const solprop: SOLProps = {
      deviceId: 'abcd-efh-ijkl-mnop',
      mpsServer: '1.2.3.4:1234'
    }

    const sol = shallow(<Sol {...solprop} />)
    const myInstance = sol.instance() as Sol

    // call the function and check the expected output
    myInstance.onTerminalStateChange(null, 4)
    expect(myInstance.state.SOLstate).toBe(4)
  })

  it('Test handleSOLConnect to start', () => {
    // Initialization of ConnectProps
    const solprop: SOLProps = {
      deviceId: 'abcd-efh-ijkl-mnop',
      mpsServer: '1.2.3.4:1234'
    }
    const e = new Mockeventpersist()

    const sol = shallow(<Sol {...solprop} />)
    const myInstance = sol.instance() as Sol

    myInstance.redirector = new AMTRedirector1(myInstance.logger,
      Protocol.SOL,
      new FileReader(),
      'abcd-efgh-ijkl-mnop',
      16994,
      '',
      '',
      0,
      0,
      '1.2.3.4:9876' + '/relay')

    // call the function and check the expected output
    myInstance.onTerminalStateChange(null, 0)
    myInstance.handleSOLConnect(e)
    expect(myInstance.redirector.startvariable).toBe(5)
  })

  it('Test handleSOLConnect to stop', () => {
    // Initialization of ConnectProps
    const solprop: SOLProps = {
      deviceId: 'abcd-efh-ijkl-mnop',
      mpsServer: '1.2.3.4:1234'
    }
    const e = new Mockeventpersist()

    const sol = shallow(<Sol {...solprop} />)
    const myInstance = sol.instance() as Sol

    myInstance.redirector = new AMTRedirector1(myInstance.logger,
      Protocol.SOL,
      new FileReader(),
      'abcd-efgh-ijkl-mnop',
      16994,
      '',
      '',
      0,
      0,
      '1.2.3.4:9876' + '/relay')

    // call the function and check the expected output
    myInstance.onTerminalStateChange(null, 1)
    myInstance.handleSOLConnect(e)
    expect(myInstance.state.isConnected).toBe(false)
    expect(myInstance.state.SOLstate).toBe(1)
  })

  it('Test handleWriteToXterm', () => {
    // Initialization of ConnectProps
    const solprop: SOLProps = {
      deviceId: 'abcd-efh-ijkl-mnop',
      mpsServer: '1.2.3.4:1234'
    }

    const sol = shallow(<Sol {...solprop} />)
    const myInstance = sol.instance() as Sol
    myInstance.term = new Terminal()

    // call the function and check the expected output
    myInstance.handleWriteToXterm('abcdef')
    expect(myInstance.term.writestring).toBe('abcdef')
  })

  it('Test handleClearTerminal', () => {
    // Initialization of ConnectProps

    const sol = shallow(<Sol {...solprop} />)
    const myInstance = sol.instance() as Sol
    myInstance.term = new Terminal()

    // call the function and check the expected output
    myInstance.handleClearTerminal()
    expect(myInstance.term.resetvalue).toBe(1)
  })

  it('should call the handle key events on trigger ', () => {
    const sol = shallow(<Sol {...solprop} />)
    const myInstance = sol.instance() as Sol

    myInstance.terminal = new AmtTerminal()
    myInstance.terminal.TermSendKeys = jest.fn((domEvent) => { })
    myInstance.terminal.handleKeyDownEvents = jest.fn((domEvent) => { })

    const domEvent = {
      target: {
        value: ''
      }
    }
    myInstance.handleKeyPress(domEvent)
    myInstance.handleKeyDownPress(domEvent)
    expect(myInstance.terminal.TermSendKeys).toHaveBeenCalled()
  })

  it('should update the component from the child component on the feature and power status', () => {
    const sol = shallow(<Sol {...solprop} />)
    const myInstance = sol.instance() as Sol

    myInstance.handleFeatureStatus('enabled')
    expect(sol.state('solNotEnabled')).toEqual('enabled')

    myInstance.handleFeatureStatus('notEnabled')
    expect(sol.state('solNotEnabled')).toEqual('notEnabled')

    myInstance.handleFeatureStatus('failed')
    expect(sol.state('solNotEnabled')).toEqual('failed')
  })

})
