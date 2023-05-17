/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { type ILogger, LogLevel } from './Interfaces';
/**
 * ConsoleLogger implements ILogger to provide basic console logging functionality.
 */
export declare class ConsoleLogger implements ILogger {
    minLevel: LogLevel;
    constructor(level: LogLevel);
    log(level: LogLevel, data: string): void;
    debug(log: string): void;
    info(log: string): void;
    error(log: string): void;
    warn(log: string): void;
    verbose(log: string): void;
}
