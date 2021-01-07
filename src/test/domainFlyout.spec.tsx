/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import * as React from "react";
import { mocked } from "ts-jest/utils";
import { shallow } from "enzyme";
import {
  DomainFlyout,
  domainFlyoutProps,
} from "../reactjs/components/DomainEditor/DomainFlyout";
import {
  passwordValidation,
  nameValidation,
} from "../reactjs/components/shared/Utilities";
import { HttpClient } from "../reactjs/components/services/HttpClient";

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

  it("load form component without crashing", () => {
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

  it('should load the form values on edit of a domain', ()=> {
    let domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: "localhost:8081",
      notificationCallback: jest.fn(),
      isEdit: true,
      selectedDomain: [{
        name: "domain1",
        domainSuffix: "d2.com",
        provisioningCert: "StringCert",
        provisioningCertPassword: "Amtpass@123"
      }]
    };

    let wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />);
    let myInstance = wrapper.instance() as DomainFlyout;

    expect(typeof wrapper.state('domainFormDetails')).toBe('object');
    expect(wrapper.state('domainFormDetails')).toEqual({name: "domain1",domainSuffix: "d2.com",provisioningCert: "StringCert",provisioningCertPassword: ""});
  })

  it('should update the component state when there is change in props', ()=> {
    let domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: "localhost:8081",
      notificationCallback: jest.fn(),
      isEdit: true,
      selectedDomain: [{
        name: "domain1",
        domainSuffix: "d2.com",
        provisioningCert: "StringCert",
        provisioningCertPassword: "Amtpass@123"
      }]
    };

    let wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />);
    let myInstance = wrapper.instance() as DomainFlyout;
    const selectedDomainDetails = {
      selectedDomain: [{
        name: "domain2",
      domainSuffix: "d3.com",
      provisioningCert: "StringCert",
      provisioningCertPassword: "Amtpass@123"
      }]
    }
    wrapper.setProps(selectedDomainDetails);
    wrapper.instance().forceUpdate()
    expect(wrapper.state('domainFormDetails')).toEqual({name: "domain2",domainSuffix: "d3.com",provisioningCert: "StringCert",provisioningCertPassword: "Amtpass@123"})
  })

  it('should toggle the password field visibility on icon click', ()=> {
    let domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: "localhost:8081",
      notificationCallback: jest.fn(),
    };
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />);
    const myInstance = wrapper.instance() as DomainFlyout;
    wrapper.setState({
      password: "test@123"
    });

    expect(wrapper.state('showPassword')).toEqual(false);

    myInstance.handleShowPassword();
    wrapper.instance().forceUpdate();
    expect(wrapper.state('showPassword')).toEqual(true)

  })

  it('should call handlechange method and update the state values on input edit', ()=> {
    let domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: "localhost:8081",
      notificationCallback: jest.fn(),
    };
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />);
    const myInstance = wrapper.instance() as DomainFlyout;
    wrapper.setState({
      domainFormDetails: {
        name: ''
      }
    })
    const handleChangeParams = {
        target: {
          name: 'name',
          value: 'domain3'
        }
    }
    myInstance.handleChange(handleChangeParams);
    expect(wrapper.state('domainFormDetails')).toEqual({name: 'domain3'})
  })

  it('should call the create domain rest api on submitting the form', async ()=> {
    HttpClient.post = jest.fn(()=> Promise.resolve('Domain domain9 successfully inserted'))
    let domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: "localhost:8081",
      notificationCallback: jest.fn(),
    };
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />);
    const myInstance = wrapper.instance() as DomainFlyout;
    
    const domainState = {
      domainFormDetails: {
        name: 'domain9',
        domainSuffix: 'd4.com',
        provisioningCert: 'LengthycertString',
        provisioningCertPassword: 'Amtpass@123'
      }
    }
    const submitEvent = {
      preventDefault: ()=> {}
    }
    wrapper.setState(domainState);
    myInstance.forceUpdate()
    myInstance.context = {
      data: {
        rpsKey: 'APIKEYFORRPS123!'
      }
    }
    
    myInstance.handleSubmit(submitEvent);
    expect(HttpClient.post).toHaveBeenCalled()
  });

  it('should call the edit domain rest api on editing the form', async ()=> {
    HttpClient.patch = jest.fn(()=> Promise.resolve('Domain domain9 successfully updated'))
    let domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: "localhost:8081",
      notificationCallback: jest.fn(),
      isEdit: true,
      selectedDomain:[{name: "domain9",domainSuffix: "d3.com",provisioningCert: "StringCert",provisioningCertPassword: "Amtpass@123"}]
    };
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />);
    const myInstance = wrapper.instance() as DomainFlyout;
    const submitEvent = {
      preventDefault: ()=> {}
    }
    myInstance.forceUpdate()
    myInstance.context = {
      data: {
        rpsKey: 'APIKEYFORRPS123!'
      }
    }
    
    myInstance.handleSubmit(submitEvent);
    expect(HttpClient.patch).toHaveBeenCalled()
  });

  it('should read the domain certificate file contents on file selection', async ()=> {
    let domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: "localhost:8081",
      notificationCallback: jest.fn(),
    };

    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />);
    const myInstance = wrapper.instance() as DomainFlyout;

    const fileInputEvent = {
      preventDefault: ()=> {},
      target: {
        files: [{
          name: 'vprodemo.pfx',
          size: 7249,
type: "application/x-pkcs12",
webkitRelativePath: ""
        }],
        result: 'lengthyStringForCert',
        value: 'vprodemo.pfx'
      }
    }
    // const readAsArrayBuffer = jest.fn();
    // const dummyFileReader = {readAsArrayBuffer};
    // window.FileReader = jest.fn(()=> dummyFileReader)
   // myInstance.readCertFile(fileInputEvent);
   // console.info('wrapper state', wrapper.state())
  })

  it('should call the handleblur method on removing focus from input ', ()=> {
    let domainFlyoutProps: domainFlyoutProps = {
      close: jest.fn(),
      rpsServer: "localhost:8081",
      notificationCallback: jest.fn(),
    };
    const wrapper = shallow(<DomainFlyout {...domainFlyoutProps} />);
    const myInstance = wrapper.instance() as DomainFlyout;
    wrapper.setState({
      domainFormDetails: {
        name: ''
      }
    })
    const blurEvent = {
      target: {
        name: 'name'
      }
    }
    myInstance.handleBlur(blurEvent);
    console.info('state', wrapper.state())
    expect(wrapper.state('name_blur')).toEqual(true)
  })
});
