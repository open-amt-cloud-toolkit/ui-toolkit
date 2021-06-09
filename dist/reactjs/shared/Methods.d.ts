/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
/** function to get the static tranlation texts from translation.json
 * @param: text - contains the path to the text in translation.json
*/
export declare const translateText: (text: any) => any;
/** function to get the translation text when there are dynamic values to be rendered in translation
 * @param: text - contains the path to the text in translation.json
 * @param: translate - object containing dynamic values. The keys to be used inside translation.json
 */
export declare const translateDynamicText: (text: any, translate: any) => any;
