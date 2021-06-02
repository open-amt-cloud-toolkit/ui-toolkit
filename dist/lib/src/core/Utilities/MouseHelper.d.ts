/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { ICommunicator } from '../Interfaces/ICommunicator';
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
    mousedown(e: MouseEvent): any;
    mouseup(e: MouseEvent): any;
    mousemove(e: MouseEvent): boolean;
    haltEvent(e: any): boolean;
    getPositionOfControl(c: HTMLElement): any;
}
