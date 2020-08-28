// Copyright (c) Microsoft. All rights reserved.
// Subset of the code from https://github.com/Azure/pcs-remote-monitoring-webui

import React from'react';

import { AccordionCollapsableContent } from './accordionProvider';
import { joinClasses } from 'utilities';

export const FlyoutSectionContent = ({ className, children }) => (
  <AccordionCollapsableContent>
    <div className={joinClasses('flyout-section-content', className)}>
      { children }
    </div>
  </AccordionCollapsableContent>
);
