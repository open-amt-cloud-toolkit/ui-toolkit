/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from 'react';
import { CopyToClipBoard } from './clipboard/Clipboard';

// Wrapper renderer for using copy to clipboard
export const IdRenderer = ({value}) => <CopyToClipBoard value={value}/>