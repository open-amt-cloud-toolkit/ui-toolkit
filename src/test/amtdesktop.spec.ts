/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { AMTDesktop } from '../core/AMTDesktop'
import { createCanvas } from 'canvas'

// classes defined for Unit testing
import { TestLogger } from '../test/helper/testlogger'
import { Communicator } from '../test/helper/testcommunicator'
import { TestDataProcessor } from '../test/helper/testDataProcessor'

describe('Test AMTDesktop', () => {
  it('Test start function in AMTDesktop', () => {
    // create objects
    const logger = new TestLogger()
    const canvas = createCanvas(200, 200)
    const canvasCtx = canvas.getContext('2d')
    const desktop = new AMTDesktop(logger, canvasCtx)

    // test start function
    desktop.start()

    // Output
    expect(desktop.state).toBe(0)
    expect(desktop.onKvmDataAck).toBe(-1)
    expect(desktop.kvmDataSupported).toBe(false)
    expect(desktop.inflate.state.mode).toBe(0)
  })

  it('Test onSendKvmData function in AMTDesktop with onKvmDataAck as false', () => {
    // create objects
    const logger = new TestLogger()
    const canvas = createCanvas(200, 200)
    const canvasCtx = canvas.getContext('2d')
    const desktop = new AMTDesktop(logger, canvasCtx)

    // Set Input
    const input = 'data'
    desktop.onKvmDataAck = false

    // test onSendKvmData function
    desktop.start() // called to initialize onKvmDataPending
    desktop.onSendKvmData(input)

    // Output
    expect(desktop.onKvmDataPending).toContain('data')
  })

  it('Test onSendKvmData function in AMTDesktop with onKvmDataAck as true', () => {
    // create objects
    const logger = new TestLogger()
    const canvas = createCanvas(200, 200)
    const canvasCtx = canvas.getContext('2d')
    const desktop = new AMTDesktop(logger, canvasCtx)

    // Set Input
    const input = 'MyData'
    desktop.onKvmDataAck = true
    const comm = new Communicator()
    desktop.onSend = comm.send.bind(comm)
    Communicator.sentData = ''
    desktop.urlvars = 'kvmdatatrace'

    // test onSendKvmData function
    desktop.onSendKvmData(input)

    // Output
    expect(Communicator.sentData.charCodeAt(0)).toBe(6)
    expect(Communicator.sentData.charCodeAt(1)).toBe(0)
    expect(Communicator.sentData.charCodeAt(2)).toBe(0)
    expect(Communicator.sentData.charCodeAt(3)).toBe(0)
    expect(Communicator.sentData.charCodeAt(4)).toBe(0)
    expect(Communicator.sentData.charCodeAt(5)).toBe(0)
    expect(Communicator.sentData.charCodeAt(6)).toBe(0)
    expect(Communicator.sentData.charCodeAt(7)).toBe(22)
    expect(Communicator.sentData.substring(8)).toContain('\0KvmDataChannel\0MyData')
    expect(desktop.onKvmDataAck).toBe(false)
  })

  it('Test processData', () => {
    // create objects
    const logger = new TestLogger()
    const canvas = createCanvas(200, 200)
    const canvasCtx = canvas.getContext('2d')
    const desktop = new AMTDesktop(logger, canvasCtx)
    const input = 'data'

    // Set Input
    const processor = new TestDataProcessor()
    desktop.onProcessData = processor.processData.bind(processor)

    // test processData function
    desktop.processData(input)

    // Output
    expect(TestDataProcessor.processeddata).toContain(input)
  })

  it('Test onStateChange', () => {
    // create objects
    const logger = new TestLogger()
    const canvas = createCanvas(200, 200)
    const canvasCtx = canvas.getContext('2d')
    const desktop = new AMTDesktop(logger, canvasCtx)

    // Set Input
    const input = 3
    TestLogger.verboseData = ''

    // test onStateChange function
    desktop.onStateChange(input)

    // Output
    expect(TestLogger.verboseData).toContain('state change in AMTDesktop: 3')
  })
})
