// Copyright (c) Microsoft. All rights reserved.
// Subset of the code from https://github.com/Azure/pcs-remote-monitoring-webui

import React from'react';

import { AccordionProvider } from './accordionProvider';
import { joinClasses } from 'utilities';

import './flyoutSection.css';

export const FlyoutSection = ({ collapsable, className, children, closed }) => (
  <AccordionProvider isCollapsable={collapsable} isClosed={closed}>
    <div className={joinClasses('flyout-section', className)}>
      { children }
    </div>
  </AccordionProvider>
);
