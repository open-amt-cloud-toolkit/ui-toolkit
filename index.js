/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

exports.KVM = require('./dist/mps.bundle').RemoteDesktop;
exports.Sol = require('./dist/mps.bundle').Sol;
exports.DeviceGrid = require('./dist/mps.bundle').DeviceGrid;
exports.AuditLog = require('./dist/mps.bundle').AuditLog
exports.Profile = require('./dist/rps.bundle').Profile
exports.CiraEditor = require('./dist/rps.bundle').CiraEditor;
exports.DomainEditor = require('./dist/rps.bundle').DomainEditor;
exports.NetworkEditor = require('./dist/rps.bundle').NetworkEditor;
exports.MpsProvider = require('./dist/mps.bundle').MpsProvider;
exports.RpsProvider = require('./dist/rps.bundle').RpsProvider;
exports.AMTDesktop = require('./dist/core.bundle').AMTDesktop;
exports.AMTRedirector = require('./dist/core.bundle').AMTRedirector;
exports.DataProcessor = require('./dist/core.bundle').DataProcessor;
exports.Desktop = require('./dist/core.bundle').Desktop;
exports.MouseHelper = require('./dist/core.bundle').MouseHelper;
exports.KeyboardHelper = require('./dist/core.bundle').KeyboardHelper;
exports.IDataProcessor = require('./dist/core.bundle').IDataProcessor;
exports.AMTKvmDataRedirector = require('./dist/core.bundle').AMTKvmDataRedirector;
exports.AmtTerminal = require('./dist/core.bundle').AmtTerminal;
exports.TerminalDataProcessor = require('./dist/core.bundle').TerminalDataProcessor;
exports.ConsoleLogger = require('./dist/core.bundle').ConsoleLogger;
exports.Protocol = require('./dist/core.bundle').Protocol; 
