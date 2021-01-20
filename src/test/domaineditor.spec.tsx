/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import * as React from "react";
import { shallow } from "enzyme";

import {
  DomainEditor,
  domainProps,
  domainState,
} from "../reactjs/components/DomainEditor/DomainEditor";
import { mocked } from "ts-jest/utils";
import { HttpClient } from "../reactjs/components/services/HttpClient";

jest.mock("../reactjs/components/services/HttpClient");

describe("Test Domain Editor Component", () => {
  it("load domain editor with out crashing", () => {
    const domainEditorProps: domainProps = {
      rpsServer: "localhost:8081",
    };
    const wrapper = shallow(<DomainEditor {...domainEditorProps} />);

    expect(wrapper.find("Button")).toHaveLength(1);
  });
  it("should show the delete button on selecting a domain from the grid", () => {
    const domainEditorProps: domainProps = {
      rpsServer: "localhost:8081",
    };

    const domainEditorStates: domainState = {
      selectedDomain: [
        {
          name: "domain9",
          domainSuffix: "d9.com",
          provisioningCert: "private/d9.pfx",
          provisioningCertPassword: "<StrongPassword>",
        },
      ],
    };

    const wrapper = shallow(<DomainEditor {...domainEditorProps} />);
    wrapper.setState(domainEditorStates);
    wrapper.instance().forceUpdate();
    expect(wrapper.find("Button")).toHaveLength(3);
  });

  it("should load the confirmation popup on clicking delete button", () => {
    const domainEditorProps: domainProps = {
      rpsServer: "localhost:8081",
    };

    const domainEditorStates: domainState = {
      selectedDomain: [
        {
          name: "domain9",
          domainSuffix: "d9.com",
          provisioningCert: "private/d9.pfx",
          provisioningCertPassword: "<StrongPassword>",
        },
      ],
      showPopup: true,
    };

    const wrapper = shallow(<DomainEditor {...domainEditorProps} />);

    wrapper.setState(domainEditorStates);
    wrapper.instance().forceUpdate();
    const deleteButton = wrapper.find(".btn-delete");
    deleteButton.simulate("click");
    expect(typeof wrapper.state('selectedDomain')).toBe('object');
  });

  it("should open the flyout on click of new", () => {
    const domainEditorProps: domainProps = {
      rpsServer: "localhost:8081",
    };
    const wrapper = shallow(<DomainEditor {...domainEditorProps} />);

    const newDomainButton = wrapper.find(".btn-create");
    newDomainButton.simulate("click");
    wrapper.setState({ openFlyout: true });
    wrapper.instance().forceUpdate();
    expect(wrapper.state("openFlyout")).toEqual(true);
    expect(wrapper.state('isEdit')).toEqual(false);
  });

  it("should show the create domain success notification", () => {
    const domainEditorProps: domainProps = {
      rpsServer: "localhost:8081",
    };
    const wrapper = shallow(<DomainEditor {...domainEditorProps} />);
    const instance = wrapper.instance() as DomainEditor;
    instance.notificationCallback(true, "domain inserted");

    expect(wrapper.state("updateDomainGrid")).toEqual(true);
    expect(wrapper.state("showMessage")).toEqual(true);
    expect(wrapper.state("type")).toEqual("success");
  });

  it("should show the create domain error notification", () => {
    const domainEditorProps: domainProps = {
      rpsServer: "localhost:8081",
    };
    const wrapper = shallow(<DomainEditor {...domainEditorProps} />);
    const instance = wrapper.instance() as DomainEditor;
    instance.notificationCallback(false, "Failed to insert domain");

    expect(wrapper.state("updateDomainGrid")).toEqual(false);
    expect(wrapper.state("showMessage")).toEqual(true);
    expect(wrapper.state("type")).toEqual("error");
  });

  it("should call the delete domain rest API on confirming delete operation", async () => {
    mocked(HttpClient.delete).mockImplementation(() => Promise.resolve('Domain domain9 successfully deleted'));
    const domainEditorProps: domainProps = {
      rpsServer: "localhost:8081",
    };

    const domainState: domainState = {
      selectedDomain: [{
        name: "domain9",
        domainSuffix: "d9.com",
        provisioningCert: "private/d9.pfx",
        provisioningCertPassword: "<StrongPassword>",
      }]
    }
    const wrapper = shallow(<DomainEditor {...domainEditorProps} />);
    wrapper.setState(domainState);
    const instance = wrapper.instance() as DomainEditor;
    instance.context = {
      data: {
        rpsKey: 'APIKEYFORRPS123!'
      }
    }
    instance.confirmDelete();
    expect(wrapper.state('showPopup')).toEqual(false)
  });

  it('should set the edit flag in component state when edit button is clicked', () => {
    const domainEditorProps: domainProps = {
      rpsServer: "localhost:8081",
    };
    const wrapper = shallow(<DomainEditor {...domainEditorProps} />);
    const instance = wrapper.instance() as DomainEditor;
    instance.handleEdit();
    expect(wrapper.state('isEdit')).toBe(true)

  });

  it('should set the selected domain in component state on grid checkbox click', () => {
    const domainEditorProps: domainProps = {
      rpsServer: "localhost:8081",
    };
    const wrapper = shallow(<DomainEditor {...domainEditorProps} />);
    const instance = wrapper.instance() as DomainEditor;

    const domain = [{name: 'Domain1', domainSuffix: 'd2.com'}];

    instance.getSelectedDomain(domain);
    expect(wrapper.state('selectedDomain')).toEqual([{name: 'Domain1', domainSuffix: 'd2.com'}])
  })
});
