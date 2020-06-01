/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from "react";
import i18next from 'i18next'

/**
 * A helper method for translating headerNames and headerTooltips of columnDefs.
 * If headerTooltip is provided, it will be translated.
 * If headerTooltip is not provided, the headerName will be used to ensure headers
 * can be deciphered even when the column is too narrow to show the entire header.
 */
export const translateColumnDefs = (columnDefs: any) => {
    // console.log(t, columnDefs)
    return columnDefs.map(columnDef => {
      let headerComponentParams = Object.assign({}, columnDef.headerComponentParams);
      const headerName = columnDef.headerName ? i18next.t(columnDef.headerName) : undefined;
      headerComponentParams.description = columnDef.headerComponentParams.description ? i18next.t(columnDef.headerComponentParams.description) : headerName;
      return { ...columnDef, headerName, headerComponentParams };
    });
  }