/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/

import React from 'react'
import { isFalsy } from '../shared/Utilities'
import './PureCanvas.scss'

export interface PureCanvasProps {
  contextRef: (ctx: CanvasRenderingContext2D) => void
  mouseDown: (event: React.MouseEvent) => void
  mouseUp: (event: React.MouseEvent) => void
  mouseMove: (event: React.MouseEvent) => void
  canvasHeight: string
  canvasWidth: string
}

export class PureCanvas extends React.Component<PureCanvasProps, {}> {
  shouldComponentUpdate (): boolean {
    return false
  }

  render (): React.ReactNode {
    const canvasAttributes: React.CanvasHTMLAttributes<HTMLCanvasElement> = {
      width: '1366',
      height: '768',
      onContextMenu: (e) => { e.preventDefault(); return false },
      onMouseDown: this.props.mouseDown,
      onMouseUp: this.props.mouseUp,
      onMouseMove: this.props.mouseMove
    }
    return (
      <canvas {...canvasAttributes} className="canvas" ref={(c: any) => isFalsy(c) ? this.props.contextRef(c.getContext('2d')) : null}/>
    )
  }
}
