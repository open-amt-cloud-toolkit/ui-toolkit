/// <reference types="react" />
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { ICommunicator } from '../ICommunicator';
import { Desktop } from '../Desktop';
/**
 * Mousehelper provides helper functions for handling mouse events. mouseup, mousedown, mousemove
 */
export declare class MouseHelper {
    parent: Desktop | any;
    comm: ICommunicator;
    MouseInputGrab: boolean;
    lastEvent: any;
    debounceTime: number;
    mouseClickCompleted: boolean;
    constructor(parent: Desktop, comm: ICommunicator, debounceTime: number);
    GrabMouseInput(): any;
    UnGrabMouseInput(): any;
    mousedown(e: React.MouseEvent): any;
    mouseup(e: React.MouseEvent): any;
    mousemove(e: React.MouseEvent): boolean;
    haltEvent(e: any): boolean;
    getPositionOfControl(c: HTMLElement): any;
}
