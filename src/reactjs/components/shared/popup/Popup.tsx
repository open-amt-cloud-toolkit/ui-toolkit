/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from "react";
import "./Popup.scss";
import { Button } from "../btn/Btn";
import { joinClasses } from "../Utilities";

// Reusable popup display component
export const Popup = ({ text, confirm, closePopup, className }) => (
  <div className="popup">
    <div className={joinClasses("popup-inner", className)}>
      <h4>{text}</h4>
      <div className="popup-button-wrapper">
        <Button
          className="popup-button btn-confirm"
          isDisplay={true}
          label={"Confirm"}
          iconName={"check"}
          iconColor={"green"}
          iconSize={"lg"}
          onClick={() => confirm()}
        />
        <Button
          className="popup-button btn-cancel"
          isDisplay={true}
          label={"Cancel"}
          iconName={"times"}
          iconColor={"red"}
          iconSize={"lg"}
          onClick={() => closePopup()}
        />
      </div>
    </div>
  </div>
);

export const RenderChildPopup = ({ className, children }) => (
  <div className="popup">
    <div className="popup-content">{children}</div>
  </div>
);
