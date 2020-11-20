/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { TerminalDataProcessor } from "../core/TerminalDataProcessor";
import { AmtTerminal } from "../core/AMTTerminal"
import { AmtTerminal2 } from "./helper/amtTerminal2"

describe("Test TerminalDataProcessor class", () => {

    it('Test TerminalDataProcessor for processData', () => {

        // callback function for Unit testing
        let result: string;
        function callback(value: string) {
            result = value;
        }

        // create object and set callback
        let term = new AmtTerminal();
        let tdataprocessor = new TerminalDataProcessor(term);
        tdataprocessor.processDataToXterm = callback;

        // Test input
        let s: string = "abcD123?!=*“€";

        // call processdata
        tdataprocessor.processData(s);

        // Test output
        expect(result).toBe("abcD123?!=*“¼");
    });

    it('Test TerminalDataProcessor for processData', () => {

        // callback function for Unit testing
        let result: string;
        function callback(value: string) {
            result = value;
        }

        // create object and set callback
        let term = new AmtTerminal2(1);
        let tdataprocessor = new TerminalDataProcessor(term);
        tdataprocessor.processDataToXterm = callback;

        // Test input
        let s: string = "123Z?“€'";

        // call processdata
        tdataprocessor.processData(s);

        // Test output
        expect(result).toBe("123Z?“¼'");
        expect(term.capture).toBe("123Z?“€'");
    });
});



