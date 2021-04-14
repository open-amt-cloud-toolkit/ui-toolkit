/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import i18next from 'i18next'

/** function to get the static tranlation texts from translation.json
 * @param: text - contains the path to the text in translation.json
*/
export const translateText = (text: any): any => i18next.t(text)

/** function to get the translation text when there are dynamic values to be rendered in translation
 * @param: text - contains the path to the text in translation.json
 * @param: translate - object containing dynamic values. The keys to be used inside translation.json
 */
export const translateDynamicText = (text: any, translate): any => i18next.t(text, { translate })
