/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { Desktop } from '../Desktop';
/**
 * Provides helper functions to handle image pixel data.
 */
export declare class ImageHelper {
    /**
     * puts image on canvas using the parent canvas ctx.
     * @param parent parent desktop with CTX for canvas
     * @param x x loc
     * @param y y loc
     */
    static putImage(parent: Desktop, x: number, y: number): any;
    /**
     *
     * @param parent parent desktop
     * @param value pixel value at ptr
     * @param ptr ptr into the image pixel data
     */
    static setPixel(parent: Desktop, value: any, ptr: number): any;
    static arotX(parent: Desktop, x: number, y: number): number;
    static arotY(parent: Desktop, x: number, y: number): number;
    static crotX(parent: Desktop, x: number, y: number): number;
    static crotY(parent: Desktop, x: number, y: number): number;
    static rotX(parent: Desktop, x: number, y: number): number;
    static rotY(parent: Desktop, x: number, y: number): number;
    static setRotation(parent: Desktop, x: number): boolean;
    static fixColor(c: number): number;
}
