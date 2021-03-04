/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
export declare const ROW_HEIGHT = 48;
/** The default value for PcsGrid cells that are empty */
export declare const EMPTY_FIELD_VAL = "---";
/** The default formatting for dates in the PcsGrid */
export declare const DEFAULT_TIME_FORMAT = "hh:mm:ss A MM.DD.YYYY";
/** A collection of reusable value formatter methods */
export declare const gridValueFormatters: {
    checkForEmpty: (value: any, emptyValue?: string) => any;
};
/** A the class name for the first row in a grid (used for soft and hard selection ) */
export declare const FIRST_COLUMN_CLASS = "first-child-column";
export declare const CHECKBOX_COLUMN_CLASS = "checkbox-column";
export declare const checkboxColumn: {
    lockPosition: boolean;
    cellClass: string;
    headerClass: string;
    suppressResize: boolean;
    suppressMenu: boolean;
    checkboxSelection: boolean;
    headerCheckboxSelection: boolean;
    headerCheckboxSelectionFilteredOnly: boolean;
    suppressMovable: boolean;
    width: number;
};
