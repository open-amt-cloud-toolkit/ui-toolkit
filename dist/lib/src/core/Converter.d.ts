/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Vinay G
 **********************************************************************/
export declare class TypeConverter {
    static ReadShort(v: string, p: number): number;
    static ReadShortX(v: string, p: number): number;
    static ReadInt(v: string, p: number): number;
    static ReadSInt(v: string, p: number): number;
    static ReadIntX(v: string, p: number): number;
    static ShortToStr(v: number): string;
    static ShortToStrX(v: number): string;
    static IntToStr(v: number): string;
    static IntToStrX(v: number): string;
    static MakeToArray(v: number): number | number[];
    static SplitArray(v: string): string[];
    static Clone(v: string): string;
    static EscapeHtml(x: string | number | boolean): string | number | boolean | undefined;
    static ArrayElementMove(arr: number[], from: number, to: number): void;
    static ObjectToStringEx(x: any, c: number): string;
    static ObjectToStringEx2(x: any, c: number): string;
    static gap(c: number): string;
    static gap2(c: number): string;
    static ObjectToString(x: any): string;
    static ObjectToString2(x: any): string;
    static hex2rstr(d: string): string;
    static char2hex(i: number): string;
    static rstr2hex(input: string): string;
    static encode_utf8(s: string): string;
    static decode_utf8(s: string): string;
    static data2blob(data: string): any;
    static random(max: number): number;
    static trademarks(x: string): string;
}
