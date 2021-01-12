/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react'
import i18next from 'i18next'

/**
 * A helper method for translating headerNames and headerTooltips of columnDefs.
 * If headerTooltip is provided, it will be translated.
 * If headerTooltip is not provided, the headerName will be used to ensure headers
 * can be deciphered even when the column is too narrow to show the entire header.
 */
export const translateColumnDefs = (columnDefs: any) => {
  return columnDefs.map(columnDef => {
    const headerComponentParams = Object.assign({}, columnDef.headerComponentParams)
    const headerName = columnDef.headerName ? i18next.t(columnDef.headerName) : undefined
    const headerTooltip = columnDef.headerTooltip ? i18next.t(columnDef.headerTooltip) : headerName
    headerComponentParams.description = columnDef.headerComponentParams && columnDef.headerComponentParams.description ? i18next.t(columnDef.headerComponentParams.description) : headerName
    return { ...columnDef, headerName, headerComponentParams, headerTooltip }
  })
}

/** function to get the static tranlation texts from translation.json
 * @param: text - contains the path to the text in translation.json
*/
export const translateText = (text: any) => i18next.t(text)

/** function to get the translation text when there are dynamic values to be rendered in translation
 * @param: text - contains the path to the text in translation.json
 * @param: translate - object containing dynamic values. The keys to be used inside translation.json
 */
export const translateDynamicText = (text: any, translate) => i18next.t(text, { translate })
