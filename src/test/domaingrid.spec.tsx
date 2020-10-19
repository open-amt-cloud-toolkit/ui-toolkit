/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import React from "react";
import {
  DomainGrid,
  domainGridProps,
  domainGridState,
} from "../reactjs/components/DomainEditor/DomainGrid";
import { shallow } from "enzyme";

import { mocked } from "ts-jest/utils";
import { HttpClient } from "../reactjs/components/services/HttpClient";

jest.mock("../reactjs/components/services/HttpClient");

describe("Domain grid component", () => {
  it("should load the component without crashing ", () => {
    const domainGridProps: domainGridProps = {
      rpsServer: "localhost:8081",
      updateDomainGrid: false,
      rpsKey: 'APIKEYFORRPS123!'
    };

    const wrapper = shallow(<DomainGrid {...domainGridProps} />);

    console.info("wrapper ", wrapper.debug());
    expect(wrapper.find("PcsGrid")).toHaveLength(1);
  });

  it("should list all the domain on page load", () => {
    const domainGridProps: domainGridProps = {
      rpsServer: "localhost:8081",
      updateDomainGrid: false,
      rpsKey: 'APIKEYFORRPS123!'
    };

    const response = [
      {
        Name: "domain5",
        DomainSuffix: "d5.com"
      },
      {
        Name: "domain6",
        DomainSuffix: "d6.com"
      },
      {
        Name: "domain7",
        DomainSuffix: "d7.com"
      },
    ];

    mocked(HttpClient.get).mockImplementation(() => Promise.resolve(response));

    const wrapper = shallow(<DomainGrid {...domainGridProps} />);
    const wrapperInstance = wrapper.instance() as DomainGrid;
    const params = {};
    wrapperInstance.onGridReady(params);
    wrapper.setState({ rowData: response });
    wrapper.instance().forceUpdate();

    expect(wrapper.state("rowData")).toHaveLength(3);
  });
});
