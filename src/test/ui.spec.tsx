/**
 * @jest-environment jsdom
 */

/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import { KVMProps, KVM as UI } from '../reactjs/KVM/UI'
import { shallow } from 'enzyme'
import { createCanvas } from 'canvas'

describe('Testing UI', () => {
  it('Test saveContext() and init() in UI', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    // function call saveContext
    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)

    // Output
    expect(myInstance.ctx).toBe(ctx)
    expect(typeof myInstance.module).toBe('object')
    expect(typeof myInstance.redirector).toBe('object')
    expect(typeof myInstance.dataProcessor).toBe('object')
    expect(typeof myInstance.mouseHelper).toBe('object')
    expect(typeof myInstance.keyboard).toBe('object')
  })

  it('Test cleanUp() in UI', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    // function call cleanUp
    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.cleanUp()

    // Output
    expect(myInstance.ctx).toBe(ctx)
    expect(myInstance.module).toBe(null)
    expect(myInstance.redirector).toBe(null)
    expect(myInstance.dataProcessor).toBe(null)
    expect(myInstance.mouseHelper).toBe(null)
    expect(myInstance.keyboard).toBe(null)
  })

  it('Test onRedirectorError() in UI', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.cleanUp()

    // function call onRedirectorError
    myInstance.onRedirectorError()

    // Output
    expect(myInstance.ctx).toBe(ctx)
    expect(typeof myInstance.module).toBe('object')
    expect(typeof myInstance.redirector).toBe('object')
    expect(typeof myInstance.dataProcessor).toBe('object')
    expect(typeof myInstance.mouseHelper).toBe('object')
    expect(typeof myInstance.keyboard).toBe('object')
  })

  it('Test reset() in UI', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.cleanUp()

    // function call onRedirectorError
    myInstance.reset()

    // Output
    expect(myInstance.ctx).toBe(ctx)
    expect(typeof myInstance.module).toBe('object')
    expect(typeof myInstance.redirector).toBe('object')
    expect(typeof myInstance.dataProcessor).toBe('object')
    expect(typeof myInstance.mouseHelper).toBe('object')
    expect(typeof myInstance.keyboard).toBe('object')
  })

  it('Test getRenderStatus() in UI', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.module.state = 2

    // function call onRedirectorError
    const ret = myInstance.getRenderStatus()

    // Output
    expect(ret).toBe(2)
  })

  it('Test startKVM() in UI', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.redirector.onStateChanged = func1

    // function call startKVM
    myInstance.startKVM()

    // Output
    expect(mystate1).toBe(1)
  })

  it('Test stopKVM() in UI', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.redirector.onStateChanged = func3

    // function call startKVM
    myInstance.startKVM()

    // Output
    expect(mystate3).toBe(1)

    // function call stopKVM
    myInstance.stopKVM()

    // Output
    expect(mystate3).toBe(0)
  })

  it('Test componentWillUnmount() in UI', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.redirector.onStateChanged = func4

    // function call startKVM
    myInstance.startKVM()

    // Output
    expect(mystate4).toBe(1)

    // function call componentWillUnmount
    myInstance.componentWillUnmount()

    // Output
    expect(mystate4).toBe(0)
  })

  it('Test OnConnectionStateChange() in UI', async () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.redirector.onStateChanged = func2
    const myteststate = 0
    myInstance.desktopSettingsChange = true

    // function call OnConnectionStateChange
    myInstance.OnConnectionStateChange(null, myteststate)

    // Output
    expect(myInstance.desktopSettingsChange).toBe(false)
    await new Promise(resolve => setTimeout(resolve, 2000))
    expect(mystate2).toBe(1)
  })

  it('Test OnConnectionStateChange() in UI with desktopSettingsChange == false (negative test case)', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.redirector.onStateChanged = func5
    const myteststate = 0
    myInstance.desktopSettingsChange = false

    // function call OnConnectionStateChange
    myInstance.OnConnectionStateChange(null, myteststate)

    // Output
    expect(mystate5).toBe(0)
  })

  it('Test OnConnectionStateChange() in UI with sate parameter non zero (negative test case)', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.redirector.onStateChanged = func6
    const myteststate = 1
    myInstance.desktopSettingsChange = true

    // function call OnConnectionStateChange
    myInstance.OnConnectionStateChange(null, myteststate)

    // Output
    expect(mystate6).toBe(0)
  })

  it('Test changeDesktopSettings() in UI', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.redirector.onStateChanged = func7
    // function call startKVM
    myInstance.startKVM()

    // Output
    expect(mystate7).toBe(1)

    class MySettings {
      encoding: number
    }
    const mysetting = new MySettings()
    mysetting.encoding = 3
    myInstance.desktopSettingsChange = false
    myInstance.OnConnectionStateChange(null, 2)

    // function call changeDesktopSettings
    myInstance.changeDesktopSettings(mysetting)

    // Output
    expect(mystate7).toBe(0)
    expect(myInstance.desktopSettingsChange).toBe(true)
    expect(myInstance.module.bpp).toBe(1)
  })

  it('Test changeDesktopSettings() in UI with kvmstate !== 2 (negative test case)', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.redirector.onStateChanged = func8
    // function call startKVM
    myInstance.startKVM()
    // Output
    expect(mystate8).toBe(1)

    class MySettings {
      encoding: number
    }
    const mysetting = new MySettings()
    mysetting.encoding = 3
    myInstance.desktopSettingsChange = false
    myInstance.OnConnectionStateChange(null, 1)

    // function call changeDesktopSettings
    myInstance.changeDesktopSettings(mysetting)

    // Output
    expect(mystate8).toBe(1)
    expect(myInstance.module.bpp).toBe(mysetting.encoding)
  })

  it('Test handleConnectClick() in UI with state.kvmstate == 0', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.redirector.onStateChanged = func9

    let myValue = 0
    const myEvent = {
      persist () { myValue = 1 }
    }
    myInstance.desktopSettingsChange = false
    myInstance.OnConnectionStateChange(null, 0)

    // function call handleConnectClick
    myInstance.handleConnectClick(myEvent)

    // Output
    expect(mystate9).toBe(1)
    expect(myValue).toBe(1)
  })

  it('Test handleConnectClick() in UI with state.kvmstate == 2', () => {
    // Initialization of KVMProps
    const kvmprops: KVMProps = {
      deviceId: '1234',
      mpsServer: 'wss://localhost/mps',
      mouseDebounceTime: 10,
      canvasHeight: '600',
      canvasWidth: '400',
      autoConnect: false
    }

    const ui = shallow(<UI {...kvmprops} />)
    const myInstance = ui.instance() as UI
    const canvas = createCanvas(400, 600)
    const ctx = canvas.getContext('2d')
    myInstance.saveContext(ctx)
    myInstance.redirector.onStateChanged = func10

    let myValue = 0
    const myEvent = {
      persist () { myValue = 1 }
    }
    myInstance.desktopSettingsChange = false
    myInstance.OnConnectionStateChange(null, 2)

    // function call startKVM
    myInstance.startKVM()
    // Output
    expect(mystate8).toBe(1)

    // function call handleConnectClick
    myInstance.handleConnectClick(myEvent)

    // Output
    expect(mystate10).toBe(0)
    expect(myValue).toBe(1)
  })
})

let mystate1 = 0
function func1 (redirector: any, state: number): any {
  mystate1 = state
}

let mystate3 = 0
function func3 (redirector: any, state: number): any {
  mystate3 = state
}

let mystate4 = 0
function func4 (redirector: any, state: number): any {
  mystate4 = state
}

let mystate2 = 0
function func2 (redirector: any, state: number): any {
  mystate2 = state
}

let mystate5 = 0
function func5 (redirector: any, state: number): any {
  mystate5 = state
}

let mystate6 = 0
function func6 (redirector: any, state: number): any {
  mystate6 = state
}

let mystate7 = 0
function func7 (redirector: any, state: number): any {
  mystate7 = state
}

let mystate8 = 0
function func8 (redirector: any, state: number): any {
  mystate8 = state
}

let mystate9 = 0
function func9 (redirector: any, state: number): any {
  mystate9 = state
}

let mystate10 = 0
function func10 (redirector: any, state: number): any {
  mystate10 = state
}
