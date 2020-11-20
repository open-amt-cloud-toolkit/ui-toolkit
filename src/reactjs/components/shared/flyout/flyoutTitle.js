// Copyright (c) Microsoft. All rights reserved.
// Subset of the code from https://github.com/Azure/pcs-remote-monitoring-webui

import React from 'react';

import { joinClasses } from 'utilities';

export const FlyoutTitle = ({ className, children }) => (
  <div className={joinClasses('flyout-title', className)}>
    { children }
  </div>
);
