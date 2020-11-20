/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { joinClasses } from "../Utilities";

import "./Btn.scss";

export interface ButtonProps {
  children?: any;
  className?: string;
  iconName?: any;
  iconColor?: string;
  iconSize?: any;
  isDisplay?: boolean;
  label?: string;
  btnProps?: any;
  cta: any;
}

/** Reusable display component for button UI throughout the app */
export class Button extends React.Component<ButtonProps> {
  render() {
    const {
      children,
      className,
      iconName,
      iconColor,
      iconSize,
      isDisplay,
      label,
      ...btnProps
    } = this.props;

    return (
      <React.Fragment>
        {isDisplay && iconName && (
          <button
            key={label}
            type="button"
            className={joinClasses("icon-btn", className)}
            onClick={this.props.cta}
          >
            <FontAwesomeIcon
              title={label}
              icon={iconName}
              color={iconColor}
              size={iconSize}
            />
          </button>
        )}
        {children && (
          <button
            type="button"
            {...btnProps}
            className={joinClasses("btn", "btn-primary", className)}
            onClick={this.props.cta}
          >
            <div className="btn-text">{children}</div>
          </button>
        )}
      </React.Fragment>
    );
  }
}
