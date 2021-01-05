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
