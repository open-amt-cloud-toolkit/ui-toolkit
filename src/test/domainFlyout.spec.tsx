/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import * as React from "react";
import {
  DomainFlyout,
  domainFlyoutProps,
} from "../reactjs/components/DomainEditor/DomainFlyout";
import { shallow } from "enzyme";
import {
  passwordValidation,
  nameValidation,
} from "../reactjs/components/shared/Utilities";

describe("Test domain Flyout", () => {
  it("Test flyout with out crashing", () => {
    let domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: "localhost:8081",
      notificationCallback: jest.fn(),
    };
    let wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("load form component with crashing", () => {
    let domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: "localhost:8081",
      notificationCallback: jest.fn(),
    };
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />);
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("Test name Validations", () => {
    let domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: "localhost:8081",
      notificationCallback: jest.fn(),
    };
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />);
    wrapper.setState({
      name: "test123",
    });
    expect(wrapper.state("name")).toEqual("test123");
  });
  it("domain name validation in positive case", () => {
    expect(nameValidation("Test")).toEqual(true);
  });
  it("domain name validation in negative case", () => {
    expect(nameValidation("Test @1")).toEqual(false);
  });

  it("Test password Validations", () => {
    let domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: "localhost:8081",
      notificationCallback: jest.fn(),
    };
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />);
    wrapper.setState({
      password: "test@123",
    });
    expect(wrapper.state("password")).toEqual("test@123");
  });
  it("Test Password regex validation in positive case", () => {
    expect(passwordValidation("Intel@123")).toEqual(true);
  });
  it("password length should be 8 to 31", () => {
    expect(passwordValidation("Intel@1")).toEqual(false);
  });

  it("Test methods in domain functions", () => {
    let domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: "localhost:8081",
      notificationCallback: jest.fn(),
    };
    let wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />);
    let myInstance = wrapper.instance() as DomainFlyout;

    expect(typeof myInstance.handleChange).toBe("function");
    expect(typeof myInstance.handleBlur).toBe("function");
    expect(typeof myInstance.handleSubmit).toBe("function");
  });
});
