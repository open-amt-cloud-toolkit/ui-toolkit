// Copyright (c) Microsoft. All rights reserved.
// Subset of the code from https://github.com/Azure/pcs-remote-monitoring-webui

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FlyoutCloseBtn = ({ onClose }) => (
  // <Btn {...props} svg={svgs.x} className="flyout-close-btn" />
  <div className="flyout-close" onClick={onClose} >
    <FontAwesomeIcon icon={"times"} color={"white"} size={"2x"} />
  </div>
);
