/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import * as React from "react";
import {
  CiraConfigFlyout,
  CiraCongigProps,
} from "../reactjs/components/CIRAEditor/CiraConfigFlyout";
import { shallow } from "enzyme";

describe("Test Cira Config Flyout", () => {
  it("Test Cira Config", () => {
    let CiraConfigFlyoutProps: CiraCongigProps = {
      close: jest.fn(),
      createNotification: jest.fn(),
      rpsServer: "localhost:8081",
    };
    let wrapper = shallow(<CiraConfigFlyout {...CiraConfigFlyoutProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
