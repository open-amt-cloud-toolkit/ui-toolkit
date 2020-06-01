/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import * as React from 'react';
import { shallow, mount } from 'enzyme'
import { AuditLog, AuditLogProps } from "../reactjs/components/AuditLog/AuditLog";
import { AgGridReact } from "ag-grid-react";
import { number } from 'prop-types';
import { HttpClient } from "../reactjs/components/services/HttpClient";
import { mocked } from 'ts-jest/utils';

jest.mock('../reactjs/components/services/HttpClient');

describe("Test AuditLog UI component", () => {  

    it('Test adjustRowIndex function with endIndex > rowtotalCnt', () => {

        // Initialization of AuditLogProps
        let auditprops: AuditLogProps = {
            deviceId: "1234",
            mpsServer: "localhost/mps"
        };

        // Input
        let rowtotalCnt = 60;
        let startIndex = 40;
        let endIndex = 50;

        // Create Object
        const auditlog = shallow(<AuditLog {...auditprops} />);
        let myInstance = auditlog.instance() as AuditLog;
        let ret = myInstance.adjustRowIndex(rowtotalCnt, startIndex, endIndex);

        // Output
        expect(ret).toBe(11);

    });

    it('Test adjustRowIndex function with endIndex < rowtotalCnt', () => {

        // Initialization of AuditLogProps
        let auditprops: AuditLogProps = {
            deviceId: "1234",
            mpsServer: "localhost/mps"
        };

        // Input
        let rowtotalCnt = 50;
        let startIndex = 20;
        let endIndex = 30;

        // Create Object
        const auditlog = shallow(<AuditLog {...auditprops} />);
        let myInstance = auditlog.instance() as AuditLog;
        let ret = myInstance.adjustRowIndex(rowtotalCnt, startIndex, endIndex);

        // Output
        expect(ret).toBe(21);

    });

    it('Test adjustRowIndex function with endIndex == rowtotalCnt', () => {

        // Initialization of AuditLogProps
        let auditprops: AuditLogProps = {
            deviceId: "1234",
            mpsServer: "localhost/mps"
        };

        // Input
        let rowtotalCnt = 70;
        let startIndex = 60;
        let endIndex = 70;

        // Create Object
        const auditlog = shallow(<AuditLog {...auditprops} />);
        let myInstance = auditlog.instance() as AuditLog;
        let ret = myInstance.adjustRowIndex(rowtotalCnt, startIndex, endIndex);

        // Output
        expect(ret).toBe(1);

    });

    it('Test transformResponse function', () => {

        // Initialization of AuditLogProps
        let auditprops: AuditLogProps = {
            deviceId: "1234",
            mpsServer: "localhost/mps"
        };

        // Input
        let data = [{"auditAppId":18,"eventId":9,"initiatorType":0,"auditApp":"Redirection Manager","event":"KVM Session Ended","initiator":"admin","time":"2019-12-10T15:54:37.000Z","mCLocationType":206,"netAddress":"\u0000\u00071.2.3.4\u0000","ex":{"type":"Buffer","data":[]},"exStr":null}]

        // Create Object
        const auditlog = shallow(<AuditLog {...auditprops} />);
        let myInstance = auditlog.instance() as AuditLog;
        let ret = myInstance.transformResponse(data);

        // Output
        expect(data[0].netAddress).toBe("1.2.3.4");
        expect(data[0].time).toBe("2019-12-10T15:54:37");
    });

    it('Test fetchAuditLog function', () => {

        // Initialization of AuditLogProps
        let auditprops: AuditLogProps = {
            deviceId: "1234",
            mpsServer: "localhost/mps"
        };

        // Input
        let index = 1;
        let data = {totalCnt: number, records: []}
        let output = {"totalCnt":560,
                      "records":[{"AuditAppID":18,"EventID":9,"InitiatorType":0,"AuditApp":"Redirection Manager","Event":"KVM Session Ended","Initiator":"admin","Time":"2019-12-10T15:54:37.000Z","MCLocationType":206,"NetAddress":"\u0000\u00071.2.3.4\u0000","Ex":{"type":"Buffer","data":[]},"ExStr":null},
                                 {"AuditAppID":18,"EventID":8,"InitiatorType":0,"AuditApp":"Redirection Manager","Event":"KVM Session Started","Initiator":"admin","Time":"2019-12-10T15:54:37.000Z","MCLocationType":239,"NetAddress":"�\u0000\u00071.2.3.4\u0000","Ex":{"type":"Buffer","data":[]},"ExStr":null},
                                 {"AuditAppID":17,"EventID":4,"InitiatorType":0,"AuditApp":"RCO","Event":"Set Boot Options","Initiator":"admin","Time":"2019-12-10T15:54:37.000Z","MCLocationType":239,"NetAddress":"��\u0000\u00071.2.3.4\u0007�\u0000\b\u0000\u0000\u0000\u0000","Ex":{"type":"Buffer","data":[]},"ExStr":null},
                                 {"AuditAppID":17,"EventID":4,"InitiatorType":0,"AuditApp":"RCO","Event":"Set Boot Options","Initiator":"admin","Time":"2019-12-10T15:54:37.000Z","MCLocationType":239,"NetAddress":"��\u0000\u00071.2.3.4\u0007�\u0000\b\u0000\u0000\u0000\u0000","Ex":{"type":"Buffer","data":[]},"ExStr":null},
                                 {"AuditAppID":18,"EventID":9,"InitiatorType":0,"AuditApp":"Redirection Manager","Event":"KVM Session Ended","Initiator":"admin","Time":"2019-12-10T15:54:37.000Z","MCLocationType":239,"NetAddress":"�0\u0000\u00071.2.3.4\u0000","Ex":{"type":"Buffer","data":[]},"ExStr":null},
                                 {"AuditAppID":17,"EventID":4,"InitiatorType":0,"AuditApp":"RCO","Event":"Set Boot Options","Initiator":"admin","Time":"2019-12-10T15:54:37.000Z","MCLocationType":239,"NetAddress":"�0\u0000\u00071.2.3.4\u0007\u0000\u0000\u0000\u0000\u0000\u0000\u0000","Ex":{"type":"Buffer","data":[]},"ExStr":null},
                                 {"AuditAppID":17,"EventID":4,"InitiatorType":0,"AuditApp":"RCO","Event":"Set Boot Options","Initiator":"admin","Time":"2019-12-10T15:54:37.000Z","MCLocationType":239,"NetAddress":"�1\u0000\u00071.2.3.4\u0007\u0000\u0000\u0000\u0000\u0000\u0000\u0000","Ex":{"type":"Buffer","data":[]},"ExStr":null},
                                 {"AuditAppID":17,"EventID":2,"InitiatorType":0,"AuditApp":"RCO","Event":"Performed Power Cycle","Initiator":"admin","Time":"2019-12-10T15:54:37.000Z","MCLocationType":239,"NetAddress":"�1\u0000\u00071.2.3.4\u0007\u0000\u0000\u0000\u0000\u0000\u0000\u0000","Ex":{"type":"Buffer","data":[]},"ExStr":null},
                                 {"AuditAppID":18,"EventID":8,"InitiatorType":0,"AuditApp":"Redirection Manager","Event":"KVM Session Started","Initiator":"admin","Time":"2019-12-10T15:54:37.000Z","MCLocationType":239,"NetAddress":"�H\u0000\u00071.2.3.4\u0000","Ex":{"type":"Buffer","data":[]},"ExStr":null},
                                 {"AuditAppID":18,"EventID":9,"InitiatorType":0,"AuditApp":"Redirection Manager","Event":"KVM Session Ended","Initiator":"admin","Time":"2019-12-10T15:54:37.000Z","MCLocationType":239,"NetAddress":"��\u0000\u00071.2.3.4\u0000","Ex":{"type":"Buffer","data":[]},"ExStr":null}]}

        mocked(HttpClient.post).mockImplementation(() => Promise.resolve(output));

        // Create Object
        const auditlog = shallow(<AuditLog {...auditprops} />);
        let myInstance = auditlog.instance() as AuditLog;

        // call fetchAuditLog()       
        return myInstance.fetchAuditLog(index).then(data => expect(data).toEqual(output))
    });
});