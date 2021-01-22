/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { ConsoleLogger } from "../core/ConsoleLogger"
import { ILogger, LogLevel } from "../core/ILogger"

describe('test logger functions', () => {

    it('should set the error log from loglevel', () => {
        const logger = new ConsoleLogger(LogLevel.ERROR);

        logger.log(LogLevel.ERROR, 'this is an error message');
        expect(logger.minLevel).toEqual(LogLevel.ERROR);
    })

    it('should set the debug log from loglevel', () => {
        const logger = new ConsoleLogger(LogLevel.DEBUG);

        logger.log(LogLevel.DEBUG, 'this is a debug message');
        expect(logger.minLevel).toEqual(LogLevel.DEBUG);
    })

    it('should set the info log from loglevel', () => {
        const logger = new ConsoleLogger(LogLevel.INFO);

        logger.log(LogLevel.INFO, 'this is an info message');
        expect(logger.minLevel).toEqual(LogLevel.INFO);
    })

    it('should set the verbose log from loglevel', () => {
        const logger = new ConsoleLogger(LogLevel.VERBOSE);

        logger.log(LogLevel.VERBOSE, 'this is a verbose message');
        expect(logger.minLevel).toEqual(LogLevel.VERBOSE);
    })

    it('should set the warning log from loglevel', () => {
        const logger = new ConsoleLogger(LogLevel.WARNING);

        logger.log(LogLevel.WARNING, 'this is a warning message');
        expect(logger.minLevel).toEqual(LogLevel.WARNING);
    })
})