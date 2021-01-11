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
  CiraEditor,
  CiraEditorProps,
  CiraEditorState,
} from "../reactjs/components/CIRAEditor/CiraEditor";
import { mocked } from "ts-jest/utils";
import { HttpClient } from "../reactjs/components/services/HttpClient";

jest.mock("../reactjs/components/services/HttpClient");
describe("Test cira editor component", () => {
  it("loads the component without crashing ", () => {
    const ciraEditorProps: CiraEditorProps = {
      rpsServer: "localhost:8081",
    };

    const wrapper = shallow(<CiraEditor {...ciraEditorProps} />);

    expect(wrapper.find("Button")).toHaveLength(1);
  });

  it("should show the delete button on selecting a cira config from the grid", () => {
    const ciraEditorProps: CiraEditorProps = {
      rpsServer: "localhost:8081",
    };

    const ciraEditorStates: CiraEditorState = {
      isEdit: false,
      selectedCiraConfigs: [
        {
          ConfigName: "ciraconfig1",
          MPSServerAddress: "localhost",
          MPSPort: 4433,
          Username: "admin",
          Password: "P@ssw0rd",
          CommonName: "localhost",
          ServerAddressFormat: 201,
          AuthMethod: 2,
          MPSRootCertificate: "rootcert",
          ProxyDetails: "",
        },
      ],
    };

    const wrapper = shallow(<CiraEditor {...ciraEditorProps} />);
    wrapper.setState(ciraEditorStates);
    wrapper.instance().forceUpdate();
    expect(wrapper.find("Button")).toHaveLength(3);
  });

  it("should load the confirmation popup on clicking delete button", () => {
    const ciraEditorProps: CiraEditorProps = {
      rpsServer: "localhost:8081",
    };

    const ciraEditorStates: CiraEditorState = {
      isEdit: false,
      selectedCiraConfigs: [
        {
          ConfigName: "ciraconfig1",
          MPSServerAddress: "localhost",
          MPSPort: 4433,
          Username: "admin",
          Password: "P@ssw0rd",
          CommonName: "localhost",
          ServerAddressFormat: 201,
          AuthMethod: 2,
          MPSRootCertificate: "rootcert",
          ProxyDetails: "",
        },
      ],
      showPopup: true,
    };

    const wrapper = shallow(<CiraEditor {...ciraEditorProps} />);

    wrapper.setState(ciraEditorStates);
    wrapper.instance().forceUpdate();
    const deleteButton = wrapper.find(".btn-delete");
    deleteButton.simulate("click");
  });

  it("should open the flyout on click of new", () => {
    const ciraEditorProps: CiraEditorProps = {
      rpsServer: "localhost:8081",
    };
    const wrapper = shallow(<CiraEditor {...ciraEditorProps} />);

    const newCiraButton = wrapper.find(".btn-create");
    newCiraButton.simulate("click");
    wrapper.setState({ openFlyout: true });
    wrapper.instance().forceUpdate();
    expect(wrapper.state("openFlyout")).toEqual(true);
  });

  it("should show the create cira success notification", () => {
    const ciraEditorProps: CiraEditorProps = {
      rpsServer: "localhost:8081",
    };
    const wrapper = shallow(<CiraEditor {...ciraEditorProps} />);
    const instance = wrapper.instance() as CiraEditor;
    instance.createNotification(true, "CIRA configs inserted");

    expect(wrapper.state("updateCiraGrid")).toEqual(true);
    expect(wrapper.state("showMessage")).toEqual(true);
    expect(wrapper.state("type")).toEqual("success");
  });

  it("should show the create cira config error notification", () => {
    const ciraEditorProps: CiraEditorProps = {
      rpsServer: "localhost:8081",
    };
    const wrapper = shallow(<CiraEditor {...ciraEditorProps} />);
    const instance = wrapper.instance() as CiraEditor;
    instance.createNotification(false, "Failed to insert cira config");

    expect(wrapper.state("updateCiraGrid")).toEqual(false);
    expect(wrapper.state("showMessage")).toEqual(true);
    expect(wrapper.state("type")).toEqual("error");
  });

  it("should call the delete CIRA config rest API on confirming delete operation", async () => {
    HttpClient.delete = jest.fn(() => Promise.resolve(`CIRA Config ciraconfig1 successfully deleted`))
    const ciraEditorProps: CiraEditorProps = {
      rpsServer: "localhost:8081",
    };

    const ciraEditorStates: CiraEditorState = {
      isEdit: false,
      selectedCiraConfigs: [
        {
          configName: "ciraconfig1",
          MPSServerAddress: "localhost",
          MPSPort: 4433,
          Username: "admin",
          Password: "P@ssw0rd",
          CommonName: "localhost",
          ServerAddressFormat: 201,
          AuthMethod: 2,
          MPSRootCertificate: "rootcert",
          ProxyDetails: "",
        },
      ],
      showPopup: true,
    };

    const wrapper = shallow(<CiraEditor {...ciraEditorProps} />);
    wrapper.setState(ciraEditorStates);
    const instance = wrapper.instance() as CiraEditor;
    instance.context = {
      data: {
        rpsKey: 'APIKEYFORRPS123!'
      }
    }
    instance.confirmDelete();
    expect(wrapper.state('showPopup')).toBe(false)
  });

  it('should show the edit button on selecting the profile on the grid', () => {
    
    const ciraEditorProps: CiraEditorProps = {
      rpsServer: 'localhost:8081'
    }

    const ciraStates = {
      selectedCiraConfigs: [{
        configName: 'ciraconfig1',
        mpsServerAddress: '13.67.36.192',
        mpsPort: 4433,
        username: 'admin',
        password: 'Intel@123',
        commonName: '13.67.36.192',
        mpsRootCertificate: 'rootCert',
        serverAddressFormat: 3,
        authMethod: 2,
        proxyDetails: ''
      }]
    }

    const wrapper = shallow(<CiraEditor {...ciraEditorProps} />)
    wrapper.setState(ciraStates);
    wrapper.instance().forceUpdate();
    expect(wrapper.find('Button')).toHaveLength(3);

  })

  it('should set the edit flag to true on click of edit button', () => {
    const ciraEditorProps: CiraEditorProps = {
      rpsServer: 'localhost:8081'
    }
    const wrapper = shallow(<CiraEditor {...ciraEditorProps} />)
    const instance = wrapper.instance() as CiraEditor;
    instance.handleEdit();
    expect(wrapper.state('isEdit')).toBe(true)
  })

  it('should set the selected cira configs into state variable', () => {
    const ciraEditorProps: CiraEditorProps = {
      rpsServer: "localhost:8081",
    };
    const wrapper = shallow(<CiraEditor {...ciraEditorProps} />);

    const instance = wrapper.instance() as CiraEditor;
    const selectedCiraConfig = [{
      configName: 'ciraconfig1',
      mpsServerAddress: '13.67.36.192',
      mpsPort: 4433,
      username: 'admin',
      password: 'Intel@123',
      commonName: '13.67.36.192',
      mpsRootCertificate: 'rootCert'
    }];
    instance.getSelectedCiraConfigs(selectedCiraConfig);
    expect(wrapper.state('selectedCiraConfigs')).toEqual([{configName: 'ciraconfig1',mpsServerAddress: '13.67.36.192',mpsPort: 4433,username: 'admin',password: 'Intel@123',commonName: '13.67.36.192',mpsRootCertificate: 'rootCert'}])
  })
});
