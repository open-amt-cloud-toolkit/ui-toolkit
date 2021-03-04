/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import * as React from 'react';
export interface PureCanvasProps {
    contextRef: (ctx: CanvasRenderingContext2D) => void;
    mouseDown: (event: React.MouseEvent) => void;
    mouseUp: (event: React.MouseEvent) => void;
    mouseMove: (event: React.MouseEvent) => void;
    canvasHeight: string;
    canvasWidth: string;
}
export declare class PureCanvas extends React.Component<PureCanvasProps, {}> {
    shouldComponentUpdate(): boolean;
    render(): React.ReactNode;
}
