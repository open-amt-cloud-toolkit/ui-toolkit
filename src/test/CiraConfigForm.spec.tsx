/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import React from "react";
import { shallow } from "enzyme";
import {
  CiraConfigForm,
  formProps,
} from "../reactjs/components/shared/CiraConfigForm";

const CiraConfigProps: formProps = {
  handleSubmit: jest.fn(),
  close: jest.fn(),
};

describe("Test Cira Config Form Component", () => {
  it("load cira config form component with crashing", () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />);
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("button")).toHaveLength(2);
  });

  it("Test configName Validations", () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />);
    wrapper.setState({
      configName: "test123",
    });
    expect(wrapper.state("configName")).toEqual("test123");
  });

  it("Test mpsServerType Validations", () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />);
    wrapper.setState({
      mpsServerType: 3,
    });
    expect(wrapper.state("mpsServerType")).toEqual(3);
  });

  it("Test mpsServer Validations", () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />);
    wrapper.setState({
      mpsServer: "10.20.30.40",
    });
    expect(wrapper.state("mpsServer")).toEqual("10.20.30.40");
  });

  it("Test port Validations", () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />);
    wrapper.setState({
      port: 3333,
    });
    expect(wrapper.state("port")).toEqual(3333);
  });

  it("Test userName Validations", () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />);
    wrapper.setState({
      userName: "test123",
    });
    expect(wrapper.state("userName")).toEqual("test123");
  });

  it("Test password Validations", () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />);
    wrapper.setState({
      password: "test@123",
    });
    expect(wrapper.state("password")).toEqual("test@123");
  });

  it("Test commonName Validations", () => {
    const wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />);
    wrapper.setState({
      commonName: "localhost",
    });
    expect(wrapper.state("commonName")).toEqual("localhost");
  });
  it("Test methods in cira config  form", () => {
    let wrapper = shallow(<CiraConfigForm {...CiraConfigProps} />);
    let myInstance = wrapper.instance() as CiraConfigForm;

    expect(typeof myInstance.handleChange).toBe("function");
    expect(typeof myInstance.handleBlur).toBe("function");
    expect(typeof myInstance.handleSubmit).toBe("function");
  });
});
