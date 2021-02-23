/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
/**
 * A helper method for translating headerNames and headerTooltips of columnDefs.
 * If headerTooltip is provided, it will be translated.
 * If headerTooltip is not provided, the headerName will be used to ensure headers
 * can be deciphered even when the column is too narrow to show the entire header.
 */
export declare const translateColumnDefs: (columnDefs: any) => any;
/** function to get the static tranlation texts from translation.json
 * @param: text - contains the path to the text in translation.json
*/
export declare const translateText: (text: any) => any;
/** function to get the translation text when there are dynamic values to be rendered in translation
 * @param: text - contains the path to the text in translation.json
 * @param: translate - object containing dynamic values. The keys to be used inside translation.json
 */
export declare const translateDynamicText: (text: any, translate: any) => any;
