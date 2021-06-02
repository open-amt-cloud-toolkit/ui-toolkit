(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ui-toolkit"] = factory(require("react"));
	else
		root["ui-toolkit"] = factory(root["react"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/charenc/charenc.js":
/*!*****************************************!*\
  !*** ./node_modules/charenc/charenc.js ***!
  \*****************************************/
/***/ ((module) => {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ "./node_modules/crypt/crypt.js":
/*!*************************************!*\
  !*** ./node_modules/crypt/crypt.js ***!
  \*************************************/
/***/ ((module) => {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/ConnectButton.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/ConnectButton.scss ***!
  \************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*********************************************************************\n * Copyright (c) Intel Corporation 2019\n * SPDX-License-Identifier: Apache-2.0\n **********************************************************************/\n.button {\n  margin-right: 3px;\n  padding: 2px;\n  min-width: 90px;\n}", "",{"version":3,"sources":["webpack://./src/reactjs/components/KVM/ConnectButton.scss"],"names":[],"mappings":"AAAA;;;uEAAA;AAKA;EACI,iBAAA;EACA,YAAA;EACA,eAAA;AAAJ","sourcesContent":["/*********************************************************************\r\n * Copyright (c) Intel Corporation 2019\r\n * SPDX-License-Identifier: Apache-2.0\r\n **********************************************************************/\r\n\r\n.button{\r\n    margin-right: 3px;\r\n    padding: 2px;\r\n    min-width: 90px\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/EncodingOptions.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/EncodingOptions.scss ***!
  \**************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*********************************************************************\n * Copyright (c) Intel Corporation 2019\n * SPDX-License-Identifier: Apache-2.0\n **********************************************************************/\n.encoding {\n  margin-left: 10px;\n}\n\n.encoding label {\n  padding: 2px;\n  font-size: 15px;\n}\n\n.encoding select {\n  padding: 2px 0;\n}\n\n.reldisabled {\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/reactjs/components/KVM/EncodingOptions.scss"],"names":[],"mappings":"AAAA;;;uEAAA;AAKA;EACI,iBAAA;AAAJ;;AAEE;EACE,YAAA;EACA,eAAA;AACJ;;AACE;EACE,cAAA;AAEJ;;AACE;EACE,YAAA;AAEJ","sourcesContent":["/*********************************************************************\r\n * Copyright (c) Intel Corporation 2019\r\n * SPDX-License-Identifier: Apache-2.0\r\n **********************************************************************/\r\n \r\n.encoding {\r\n    margin-left: 10px;\r\n  }\r\n  .encoding label {      \r\n    padding: 2px;\r\n    font-size: 15px;\r\n  }\r\n  .encoding select {\r\n    padding: 2px 0;\r\n  }\r\n  \r\n  .reldisabled{\r\n    opacity: 0.5;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/Header.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/Header.scss ***!
  \*****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*********************************************************************\n * Copyright (c) Intel Corporation 2019\n * SPDX-License-Identifier: Apache-2.0\n **********************************************************************/\n.header {\n  background-color: darkgray;\n  padding: 5px;\n  font-size: 13px;\n}", "",{"version":3,"sources":["webpack://./src/reactjs/components/KVM/Header.scss"],"names":[],"mappings":"AAAA;;;uEAAA;AAKA;EACE,0BAAA;EACA,YAAA;EACA,eAAA;AAAF","sourcesContent":["/*********************************************************************\r\n * Copyright (c) Intel Corporation 2019\r\n * SPDX-License-Identifier: Apache-2.0\r\n **********************************************************************/\r\n \r\n.header {\r\n  background-color: darkgray;\r\n  padding: 5px;\r\n  font-size: 13px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/PureCanvas.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/PureCanvas.scss ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*********************************************************************\n * Copyright (c) Intel Corporation 2019\n * SPDX-License-Identifier: Apache-2.0\n **********************************************************************/\n.canvas {\n  max-height: 90%;\n  max-width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/reactjs/components/KVM/PureCanvas.scss"],"names":[],"mappings":"AAAA;;;uEAAA;AAKA;EACI,eAAA;EACA,eAAA;AAAJ","sourcesContent":["/*********************************************************************\r\n * Copyright (c) Intel Corporation 2019\r\n * SPDX-License-Identifier: Apache-2.0\r\n **********************************************************************/\r\n \r\n.canvas{\r\n    max-height: 90%;\r\n    max-width: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/UI.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/UI.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*********************************************************************\n * Copyright (c) Intel Corporation 2019\n * SPDX-License-Identifier: Apache-2.0\n **********************************************************************/\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.canvas-container {\n  height: 100vh;\n  text-align: center;\n  background-color: #ffffff;\n}", "",{"version":3,"sources":["webpack://./src/reactjs/components/KVM/UI.scss"],"names":[],"mappings":"AAAA;;;uEAAA;AAKA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AAAJ;;AAGA;EACG,aAAA;EACA,kBAAA;EACA,yBAAA;AAAH","sourcesContent":["/*********************************************************************\r\n * Copyright (c) Intel Corporation 2019\r\n * SPDX-License-Identifier: Apache-2.0\r\n **********************************************************************/\r\n \r\n*{ // * refers every element and removes default margin  padding that comes with html elements body, h1 etc\r\n    margin:0;\r\n    padding:0;\r\n    box-sizing: border-box; //element padding and border are included in the width and height\r\n}\r\n\r\n.canvas-container{\r\n   height: 100vh; \r\n   text-align: center;\r\n   background-color: #ffffff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/***/ ((module) => {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/md5/md5.js":
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function(){
  var crypt = __webpack_require__(/*! crypt */ "./node_modules/crypt/crypt.js"),
      utf8 = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").utf8,
      isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js"),
      bin = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ "./src/reactjs/components/KVM/ConnectButton.scss":
/*!*******************************************************!*\
  !*** ./src/reactjs/components/KVM/ConnectButton.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ConnectButton_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./ConnectButton.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/ConnectButton.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ConnectButton_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ConnectButton_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/reactjs/components/KVM/EncodingOptions.scss":
/*!*********************************************************!*\
  !*** ./src/reactjs/components/KVM/EncodingOptions.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EncodingOptions_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./EncodingOptions.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/EncodingOptions.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EncodingOptions_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_EncodingOptions_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/reactjs/components/KVM/Header.scss":
/*!************************************************!*\
  !*** ./src/reactjs/components/KVM/Header.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/Header.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/reactjs/components/KVM/PureCanvas.scss":
/*!****************************************************!*\
  !*** ./src/reactjs/components/KVM/PureCanvas.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PureCanvas_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./PureCanvas.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/PureCanvas.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PureCanvas_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PureCanvas_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/reactjs/components/KVM/UI.scss":
/*!********************************************!*\
  !*** ./src/reactjs/components/KVM/UI.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UI_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./UI.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reactjs/components/KVM/UI.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UI_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UI_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/core/AMTDesktop.ts":
/*!********************************!*\
  !*** ./src/core/AMTDesktop.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AMTDesktop": () => (/* binding */ AMTDesktop)
/* harmony export */ });
/* harmony import */ var _Desktop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Desktop */ "./src/core/Desktop.ts");
/* harmony import */ var _core_Converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Converter */ "./src/core/Converter.ts");
/* harmony import */ var _Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utilities/UtilityMethods */ "./src/core/Utilities/UtilityMethods.ts");
/* harmony import */ var _core_zlib_zlib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/zlib/zlib */ "./src/core/zlib/zlib.js");
/* harmony import */ var _core_zlib_zlib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_core_zlib_zlib__WEBPACK_IMPORTED_MODULE_3__);
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/




/**
 * AMTDesktop represents the Desktop on the browser. Constructed using the canvas context.
 */
class AMTDesktop extends _Desktop__WEBPACK_IMPORTED_MODULE_0__.Desktop {
    /**
     * Constructs the AMT Desktop
     * @param logger logger to use for internal logging
     * @param ctx Canvas Context to draw images
     */
    constructor(logger, ctx) {
        super();
        this.protocol = 2;
        this.inflate = _core_zlib_zlib__WEBPACK_IMPORTED_MODULE_3___default().inflateInit(15);
        this.bpp = 1;
        this.state = 0;
        this.focusMode = 0;
        this.useZRLE = true;
        this.frameRateDelay = 2;
        this.canvasCtx = ctx;
        this.sparecache = {};
        this.buttonmask = 0;
        this.canvasControl = this.canvasCtx.canvas;
        this.lastMouseMoveTime = (new Date()).getTime();
        this.logger = logger;
        this.setDeskFocus = (el, mode) => {
        };
        this.getDeskFocus = (el) => {
        };
    }
    /**
     * Called when
     * @param data data to forward to DataProcessor
     */
    processData(data) {
        this.onProcessData(data);
    }
    onStateChange(state) {
        this.logger.verbose(`state change in AMTDesktop: ${state}`);
        if (state === 0) {
            // Clear Canvas
            this.canvasCtx.fillStyle = '#FFFFFF';
            this.canvasCtx.fillRect(0, 0, this.canvasCtx.canvas.width, this.canvasCtx.canvas.width);
        }
    }
    start() {
        this.logger.verbose('Starting desktop here');
        this.state = 0;
        this.inflate.inflateReset();
        // console.log(this.inflate)
        // this.ZRLEfirst = 1;
        // obj.inbytes = 0;
        // obj.outbytes = 0;
        this.onKvmDataPending = [];
        this.onKvmDataAck = -1;
        this.kvmDataSupported = false;
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        for (const i in this.sparecache) {
            delete this.sparecache[i];
        }
    }
    onSendKvmData(data) {
        if (this.onKvmDataAck !== true) {
            this.onKvmDataPending.push(data);
        }
        else {
            if ((0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.urlvars) && (0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.urlvars.kvmdatatrace)) {
                console.log(`KVM-Send (${data.length}) data`);
            }
            data = '\0KvmDataChannel\0' + data;
            this.onSend(String.fromCharCode(6, 0, 0, 0) + _core_Converter__WEBPACK_IMPORTED_MODULE_1__.TypeConverter.IntToStr(data.length) + data);
            this.onKvmDataAck = false;
        }
    }
}


/***/ }),

/***/ "./src/core/AMTKvmDataRedirector.ts":
/*!******************************************!*\
  !*** ./src/core/AMTKvmDataRedirector.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AMTKvmDataRedirector": () => (/* binding */ AMTKvmDataRedirector)
/* harmony export */ });
/* harmony import */ var _AMTRedirector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AMTRedirector */ "./src/core/AMTRedirector.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/

class AMTKvmDataRedirector extends _AMTRedirector__WEBPACK_IMPORTED_MODULE_0__.AMTRedirector {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(logger, protocol, fr, host, port, user, pass, tls, tls1only, server) {
        super(logger, protocol, fr, host, port, user, pass, tls, tls1only, server);
    }
}


/***/ }),

/***/ "./src/core/AMTRedirector.ts":
/*!***********************************!*\
  !*** ./src/core/AMTRedirector.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Protocol": () => (/* binding */ Protocol),
/* harmony export */   "AMTRedirector": () => (/* binding */ AMTRedirector)
/* harmony export */ });
/* harmony import */ var _Converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Converter */ "./src/core/Converter.ts");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utilities/UtilityMethods */ "./src/core/Utilities/UtilityMethods.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/



/**
 * Protocol for different Redir protocols. SOL=1,KVM=2,IDER=USB-R
 */
var Protocol;
(function (Protocol) {
    Protocol[Protocol["SOL"] = 1] = "SOL";
    Protocol[Protocol["KVM"] = 2] = "KVM";
    Protocol[Protocol["IDER"] = 3] = "IDER";
})(Protocol || (Protocol = {}));
/**
 * AMTRedirector provides all communication over WebSockets
 */
class AMTRedirector {
    constructor(logger, protocol, fr, host, port, user, pass, tls, tls1only, server) {
        this.fileReader = fr;
        this.randomNonceChars = 'abcdef0123456789';
        this.host = host;
        this.port = port;
        this.user = user;
        this.pass = pass;
        this.tls = tls;
        this.tlsv1only = tls1only;
        this.protocol = protocol;
        this.RedirectStartSol = String.fromCharCode(0x10, 0x00, 0x00, 0x00, 0x53, 0x4F, 0x4C, 0x20);
        this.RedirectStartKvm = String.fromCharCode(0x10, 0x01, 0x00, 0x00, 0x4b, 0x56, 0x4d, 0x52);
        this.RedirectStartIder = String.fromCharCode(0x10, 0x00, 0x00, 0x00, 0x49, 0x44, 0x45, 0x52);
        this.urlvars = {};
        this.server = server;
        this.amtAccumulator = '';
        this.authUri = '';
        this.logger = logger;
    }
    /**
     * Returns WebSocket path to connect to using the current environment.
     * Uses host(deviceid), port, tls, tlsv1only, user, pass options to build the url.
     */
    getWsLocation() {
        if (this.isBrowser() && !(0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.server)) {
            return `${window.location.protocol.replace('http', 'ws')}//
      ${window.location.host}
      ${window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'))}
      /webrelay.ashx?p=2&host=${this.host}&port=${this.port}&tls=${this.tls}${((this.user === '*') ? '&serverauth=1' : '')}${((typeof this.pass === 'undefined') ? ('&serverauth=1&user=' + this.user) : '')}&tls1only=${this.tlsv1only}`;
        }
        else {
            return `${String(this.server)}/webrelay.ashx?p=2&host=${this.host}&port=${this.port}&tls=${this.tls}${((this.user === '*') ? '&serverauth=1' : '')}${((typeof this.pass === 'undefined') ? ('&serverauth=1&user=' + this.user) : '')}&tls1only=${this.tlsv1only}`;
        }
    }
    /**
     * Check if current environment is browser or test
     */
    isBrowser() {
        try {
            const isWeb = (typeof window !== 'undefined');
            if (isWeb)
                this.logger.debug('!!!!!BROWSER!!!!!');
            return isWeb;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * gets Ws Location and starts a websocket for listening
     * @param c is base type for WebSocket
     */
    start(c) {
        this.connectState = 0;
        // let ws = new c(this.getWsLocation()) // using create function c invokes the constructor WebSocket()
        // eslint-disable-next-line new-cap
        this.socket = new c(this.getWsLocation()); // The "p=2" indicates to the relay that this is a REDIRECTION session
        this.socket.onopen = this.onSocketConnected.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onclose = this.onSocketClosed.bind(this);
        const onload = (e) => {
            this.onSocketData(e.target.result);
            if (this.fileReaderAcc.length === 0) {
                this.fileReaderInUse = false;
            }
            else {
                this.fileReader.readAsBinaryString(new Blob([this.fileReaderAcc.shift()]));
            }
        };
        const onloadend = (e) => {
            this.onSocketData(e.target.result);
            if (this.fileReaderAcc.length === 0) {
                this.fileReaderInUse = false;
            }
            else {
                this.fileReader.readAsArrayBuffer(this.fileReaderAcc.shift());
            }
        };
        if ((0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.fileReader) && (0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.fileReader.readAsBinaryString)) {
            // Chrome & Firefox (Draft)
            this.fileReader.onload = onload.bind(this);
        }
        else if ((0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.fileReader) && (0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.fileReader.readAsArrayBuffer)) {
            // Chrome & Firefox (Spec)
            this.fileReader.onloadend = onloadend.bind(this);
        }
        this.logger.verbose('Connecting to websocket');
        this.onStateChange(1);
    }
    onSocketConnected() {
        if ((0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.urlvars) && (0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.urlvars.redirtrace))
            console.log('REDIR-CONNECT');
        this.onStateChange(2);
        this.logger.verbose(`Connected to websocket server. With protocol ${this.protocol} (2 = KVM)`);
        this.logger.info(`Start Redirect Session for protocol. ${this.protocol}`);
        if (this.protocol === Protocol.SOL)
            this.socketSend(this.RedirectStartSol); // TODO: Put these strings in higher level module to tighten code
        if (this.protocol === Protocol.KVM)
            this.socketSend(this.RedirectStartKvm); // Don't need these is the feature is not compiled-in.
        if (this.protocol === Protocol.IDER)
            this.socketSend(this.RedirectStartIder);
    }
    /**
     * Called when there is new data on the websocket
     * @param e data received over the websocket
     */
    onMessage(e) {
        try {
            // console.log(e.data)
            this.inDataCount++;
            if (typeof e.data === 'object') {
                if (this.fileReaderInUse) {
                    this.fileReaderAcc.push(e.data);
                    return;
                }
                if (this.fileReader.readAsBinaryString != null) {
                    // Chrome & Firefox (Draft)
                    this.fileReaderInUse = true;
                    this.fileReader.readAsBinaryString(new Blob([e.data]));
                }
                else if (this.fileReader.readAsArrayBuffer != null) {
                    // Chrome & Firefox (Spec)
                    this.fileReaderInUse = true;
                    this.fileReader.readAsArrayBuffer(e.data);
                }
                else {
                    // IE10, readAsBinaryString does not exist, use an alternative.
                    let binary = '';
                    const bytes = new Uint8Array(e.data);
                    const length = bytes.byteLength;
                    for (let i = 0; i < length; i++) {
                        binary += String.fromCharCode(bytes[i]);
                    }
                    this.onSocketData(binary);
                }
            }
            else {
                // If we get a string object, it maybe the WebRTC confirm. Ignore it.
                // this.debug("MeshDataChannel - OnData - " + typeof e.data + " - " + e.data.length);
                this.onSocketData(e.data);
            }
        }
        catch (error) {
            this.logger.error(error);
            this.stop();
            this.onError();
        }
    }
    /**
     * Called from onMessage
     * @param data data over the wire
     */
    onSocketData(data) {
        if (!(0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(data) || this.connectState === -1)
            return;
        if (typeof data === 'object') {
            // This is an ArrayBuffer, convert it to a string array (used in IE)
            let binary = '';
            const bytes = new Uint8Array(data);
            const length = bytes.byteLength;
            for (let i = 0; i < length; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            data = binary;
        }
        else if (typeof data !== 'string') {
            return;
        }
        if ((this.protocol === Protocol.KVM || this.protocol === Protocol.IDER) && this.connectState === 1) {
            return this.onProcessData(data);
        } // KVM traffic, forward it directly.
        // console.log('before: ', this.amtAccumulator)
        this.amtAccumulator += data;
        // console.log('after: ', this.amtAccumulator)
        // console.log("REDIR-RECV(" + this.amtAccumulator.length + "): " + TypeConverter.rstr2hex(this.amtAccumulator));
        while (this.amtAccumulator.length >= 1) {
            let cmdsize = 0;
            switch (this.amtAccumulator.charCodeAt(0)) {
                case 0x11: { // StartRedirectionSessionReply (17)
                    this.logger.verbose(`Start Redirection Session reply received for  ${this.protocol}`);
                    if (this.amtAccumulator.length < 4)
                        return;
                    const statuscode = this.amtAccumulator.charCodeAt(1);
                    switch (statuscode) {
                        case 0: { // STATUS_SUCCESS
                            this.logger.verbose('Session status success. Start handshake');
                            if (this.amtAccumulator.length < 13)
                                return;
                            const oemlen = this.amtAccumulator.charCodeAt(12);
                            if (this.amtAccumulator.length < 13 + oemlen)
                                return;
                            // Query for available authentication
                            this.logger.verbose('Query for available authentication');
                            this.socketSend(String.fromCharCode(0x13, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00)); // Query authentication support
                            cmdsize = (13 + oemlen);
                            break;
                        }
                        default:
                            this.stop();
                            break;
                    }
                    break;
                }
                case 0x14: { // AuthenticateSessionReply (20)
                    this.logger.verbose('Available Authentications reply received.');
                    if (this.amtAccumulator.length < 9)
                        return;
                    const authDataLen = _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadIntX(this.amtAccumulator, 5);
                    if (this.amtAccumulator.length < 9 + authDataLen)
                        return;
                    const status = this.amtAccumulator.charCodeAt(1);
                    const authType = this.amtAccumulator.charCodeAt(4);
                    const authData = [];
                    for (let i = 0; i < authDataLen; i++) {
                        authData.push(this.amtAccumulator.charCodeAt(9 + i));
                    }
                    const authDataBuf = this.amtAccumulator.substring(9, 9 + authDataLen);
                    cmdsize = 9 + authDataLen;
                    if (authType === 0) {
                        // Query
                        if ((0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(authData.includes(4))) {
                            // Good Digest Auth (With cnonce and all)
                            this.logger.verbose('Good Digest Auth (With cnonce and all)');
                            this.socketSend(String.fromCharCode(0x13, 0x00, 0x00, 0x00, 0x04) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStrX(this.user.length + this.authUri.length + 8) + String.fromCharCode(this.user.length) + this.user + String.fromCharCode(0x00, 0x00) + String.fromCharCode(this.authUri.length) + this.authUri + String.fromCharCode(0x00, 0x00, 0x00, 0x00));
                        }
                        else if ((0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(authData.includes(3))) {
                            this.logger.warn('Bad Digest Auth');
                            // Bad Digest Auth (Not sure why this is supported, cnonce is not used!)
                            this.socketSend(String.fromCharCode(0x13, 0x00, 0x00, 0x00, 0x03) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStrX(this.user.length + this.authUri.length + 7) + String.fromCharCode(this.user.length) + this.user + String.fromCharCode(0x00, 0x00) + String.fromCharCode(this.authUri.length) + this.authUri + String.fromCharCode(0x00, 0x00, 0x00));
                        }
                        else if ((0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(authData.includes(1))) {
                            this.logger.verbose('Basic Auth');
                            // Basic Auth (Probably a good idea to not support this unless this is an old version of Intel AMT)
                            this.socketSend(String.fromCharCode(0x13, 0x00, 0x00, 0x00, 0x01) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStrX(this.user.length + this.pass.length + 2) + String.fromCharCode(this.user.length) + this.user + String.fromCharCode(this.pass.length) + this.pass);
                        }
                        else {
                            this.logger.error('Auth Type not recognized. Stopping.');
                            this.stop();
                        }
                    }
                    else if ((authType === 3 || authType === 4) && status === 1) {
                        let curptr = 0;
                        // Realm
                        const realmlen = authDataBuf.charCodeAt(curptr);
                        const realm = authDataBuf.substring(curptr + 1, curptr + 1 + realmlen);
                        curptr += (realmlen + 1);
                        // Nonce
                        const noncelen = authDataBuf.charCodeAt(curptr);
                        const nonce = authDataBuf.substring(curptr + 1, curptr + 1 + noncelen);
                        curptr += (noncelen + 1);
                        // QOP
                        let qoplen = 0;
                        let qop = null;
                        const cnonce = this.generateRandomNonce(32);
                        const snc = '00000002';
                        let extra = '';
                        if (authType === 4) {
                            qoplen = authDataBuf.charCodeAt(curptr);
                            qop = authDataBuf.substring(curptr + 1, curptr + 1 + qoplen);
                            curptr += (qoplen + 1);
                            extra = `${snc}:${cnonce}:${String(qop)} :`;
                        }
                        const digest = this.hex_md5(this.hex_md5(this.user + ':' + realm + ':' + this.pass) + ':' + nonce + ':' + extra + this.hex_md5('POST:' + this.authUri));
                        let totallen = this.user.length + realm.length + nonce.length + this.authUri.length + cnonce.length + snc.length + digest.length + 7;
                        if (authType === 4)
                            totallen += (parseInt(qop.length) + 1);
                        let buf = String.fromCharCode(0x13, 0x00, 0x00, 0x00, authType) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStrX(totallen) + String.fromCharCode(this.user.length) + this.user + String.fromCharCode(realm.length) + realm + String.fromCharCode(nonce.length) + nonce + String.fromCharCode(this.authUri.length) + this.authUri + String.fromCharCode(cnonce.length) + cnonce + String.fromCharCode(snc.length) + snc + String.fromCharCode(digest.length) + digest;
                        if (authType === 4)
                            buf = String(buf) + (String.fromCharCode(qop.length) + String(qop));
                        this.socketSend(buf);
                    }
                    else if (status === 0) { // Success
                        if (this.protocol === 1) {
                            // Serial-over-LAN: Send Intel AMT serial settings...
                            const MaxTxBuffer = 10000;
                            const TxTimeout = 100;
                            const TxOverflowTimeout = 0;
                            const RxTimeout = 10000;
                            const RxFlushTimeout = 100;
                            const Heartbeat = 0; // 5000;
                            this.socketSend(String.fromCharCode(0x20, 0x00, 0x00, 0x00) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStrX(this.amtSequence++) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStrX(MaxTxBuffer) +
                                _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStrX(TxTimeout) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStrX(TxOverflowTimeout) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStrX(RxTimeout) +
                                _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStrX(RxFlushTimeout) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStrX(Heartbeat) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStrX(0));
                        }
                        if (this.protocol === 2) {
                            // Remote Desktop: Send traffic directly...
                            this.socketSend(String.fromCharCode(0x40, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00));
                        }
                        if (this.protocol === 3) {
                            // Remote IDER: Send traffic directly...
                            this.connectState = 1;
                            this.onStateChange(3);
                        }
                    }
                    else
                        this.stop();
                    break;
                }
                case 0x21: { // Response to settings (33)
                    if (this.amtAccumulator.length < 23)
                        break;
                    this.logger.verbose('Response to settings');
                    cmdsize = 23;
                    this.socketSend(String.fromCharCode(0x27, 0x00, 0x00, 0x00) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStrX(this.amtSequence++) + String.fromCharCode(0x00, 0x00, 0x1B, 0x00, 0x00, 0x00));
                    // eslint-disable-next-line @typescript-eslint/no-implied-eval
                    if (this.protocol === 1) {
                        this.amtKeepAliveTimer = setInterval(this.sendAmtKeepAlive.bind(this), 2000);
                    }
                    this.connectState = 1;
                    this.onStateChange(3);
                    break;
                }
                case 0x29: // Serial Settings (41)
                    if (this.amtAccumulator.length < 10)
                        break;
                    this.logger.verbose('Serial Settings');
                    cmdsize = 10;
                    break;
                case 0x2A: { // Incoming display data (42)
                    if (this.amtAccumulator.length < 10)
                        break;
                    this.logger.verbose('Incoming display data');
                    const cs = (10 + ((this.amtAccumulator.charCodeAt(9) & 0xFF) << 8) + (this.amtAccumulator.charCodeAt(8) & 0xFF));
                    if (this.amtAccumulator.length < cs)
                        break;
                    this.onProcessData(this.amtAccumulator.substring(10, cs));
                    cmdsize = cs;
                    break;
                }
                case 0x2B: // Keep alive message (43)
                    if (this.amtAccumulator.length < 8)
                        break;
                    this.logger.verbose('Keep Alve message');
                    cmdsize = 8;
                    break;
                case 0x41:
                    if (this.amtAccumulator.length < 8)
                        break;
                    this.logger.verbose('KVM traffic. Call onStart handler. And forward rest of acc directly.');
                    this.connectState = 1;
                    this.onStart();
                    // KVM traffic, forward rest of accumulator directly.
                    if (this.amtAccumulator.length > 8) {
                        this.onProcessData(this.amtAccumulator.substring(8));
                    }
                    cmdsize = this.amtAccumulator.length;
                    break;
                default:
                    this.logger.error(`Unknown Intel AMT command:  ${this.amtAccumulator.charCodeAt(0)}  acclen=${this.amtAccumulator.length}`);
                    this.stop();
                    return;
            }
            if (cmdsize === 0)
                return;
            this.amtAccumulator = this.amtAccumulator.substring(cmdsize);
        }
    }
    hex_md5(str) {
        this.logger.verbose('MD5 the string');
        return md5__WEBPACK_IMPORTED_MODULE_1___default()(str);
    }
    socketSend(data) {
        if ((0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.urlvars) && (0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.urlvars.redirtrace)) {
            this.logger.verbose(`REDIR-SEND(${data.length}): ${_Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.rstr2hex(data)}`);
        }
        try {
            if (this.socket != null && this.socket.readyState === 1) { // 1 = WebSocket.OPEN
                const b = new Uint8Array(data.length);
                this.logger.verbose(`Redir Send( ${data.length}): ${_Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.rstr2hex(data)}`);
                for (let i = 0; i < data.length; ++i) {
                    b[i] = data.charCodeAt(i);
                }
                this.socket.send(b.buffer);
            }
        }
        catch (error) {
            this.logger.error(`Socket send error: ${String(error)}`);
        }
    }
    /**
     * Send sends data over the websocket to the server.
     * @param data data to send to server
     */
    send(data) {
        this.logger.verbose('Send called ' + data);
        if (this.socket == null || this.connectState !== 1)
            return;
        if (this.protocol === Protocol.SOL) {
            this.socketSend(String.fromCharCode(0x28, 0x00, 0x00, 0x00) +
                _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStrX(this.amtSequence++) +
                _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStrX(data.length) +
                data);
        }
        else {
            this.socketSend(data);
        }
    }
    sendAmtKeepAlive() {
        if (this.socket == null)
            return;
        this.socketSend(String.fromCharCode(0x2B, 0x00, 0x00, 0x00) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStrX(this.amtSequence++));
    }
    generateRandomNonce(length) {
        let r = '';
        for (let i = 0; i < length; i++) {
            r += this.randomNonceChars.charAt(Math.floor(Math.random() * this.randomNonceChars.length));
        }
        return r;
    }
    onSocketClosed(e) {
        // console.log(e)
        if ((0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.urlvars) && (0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.urlvars.redirtrace)) {
            console.log('REDIR-CLOSED');
        }
        this.logger.warn('Redir Socket Closed');
        this.stop();
    }
    onStateChange(newstate) {
        console.info('onstatechange', newstate);
        if (this.state === newstate)
            return;
        this.state = newstate;
        this.onNewState(this.state);
        if (this.onStateChanged != null)
            this.onStateChanged(this, this.state);
    }
    stop() {
        this.logger.warn('Stop called on Redirector. Change state to 0 and close Socket.');
        this.onStateChange(0);
        this.connectState = -1;
        this.amtAccumulator = '';
        if (this.socket != null) {
            this.socket.close();
            this.socket = null;
        }
        if (this.amtKeepAliveTimer != null) {
            clearInterval(this.amtKeepAliveTimer);
            this.amtKeepAliveTimer = null;
        }
    }
}


/***/ }),

/***/ "./src/core/AMTTerminal.ts":
/*!*********************************!*\
  !*** ./src/core/AMTTerminal.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmtTerminal": () => (/* binding */ AmtTerminal)
/* harmony export */ });
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
class AmtTerminal {
    constructor() {
        this.terminalEmulation = 1;
        this.fxEmulation = 0;
        this.fxLineBreak = 0; // 0 = CR+LF, 1 = LF
        /** used to map Ascii values received from serial port to unicode characters */
        this.AsciiToUnicode = [
            0x00c7,
            0x00fc,
            0x00e9,
            0x00e2,
            0x00e4,
            0x00e0,
            0x00e5,
            0x00e7,
            0x00ea,
            0x00eb,
            0x00e8,
            0x00ef,
            0x00ee,
            0x00ec,
            0x00c4,
            0x00c5,
            0x00c9,
            0x00e6,
            0x00c6,
            0x00f4,
            0x00f6,
            0x00f2,
            0x00fb,
            0x00f9,
            0x00ff,
            0x00d6,
            0x00dc,
            0x00a2,
            0x00a3,
            0x00a5,
            0x20a7,
            0x0192,
            0x00e1,
            0x00ed,
            0x00f3,
            0x00fa,
            0x00f1,
            0x00d1,
            0x00aa,
            0x00da,
            0x00bf,
            0x2310,
            0x00ac,
            0x00bd,
            0x00bc,
            0x00a1,
            0x00ab,
            0x00bb,
            0x2593,
            0x2592,
            0x2591,
            0x2502,
            0x2524,
            0x2561,
            0x2562,
            0x2556,
            0x2555,
            0x2563,
            0x2551,
            0x2557,
            0x255d,
            0x255c,
            0x255b,
            0x2510,
            0x2514,
            0x2534,
            0x252c,
            0x251c,
            0x2500,
            0x253c,
            0x255e,
            0x255f,
            0x255a,
            0x2554,
            0x2569,
            0x2566,
            0x2560,
            0x2550,
            0x256c,
            0x2567,
            0x2568,
            0x2564,
            0x2565,
            0x2568,
            0x2558,
            0x2552,
            0x2553,
            0x256b,
            0x256a,
            0x2518,
            0x250c,
            0x2588,
            0x2584,
            0x258b,
            0x2590,
            0x2580,
            0x03b1,
            0x00df,
            0x0393,
            0x03c0,
            0x03a3,
            0x03c3,
            0x00b5,
            0x03c4,
            0x03c6,
            0x03b8,
            0x2126,
            0x03b4,
            0x221e,
            0x00f8,
            0x03b5,
            0x220f,
            0x2261,
            0x00b1,
            0x2265,
            0x2266,
            0x2320,
            0x2321,
            0x00f7,
            0x2248,
            0x00b0,
            0x2022,
            0x00b7,
            0x221a,
            0x207f,
            0x00b2,
            0x220e,
            0x00a0
        ];
        this.AsciiToUnicodeIntel = [
            0x00c7,
            0x00fc,
            0x00e9,
            0x00e2,
            0x00e4,
            0x00e0,
            0x00e5,
            0x00e7,
            0x00ea,
            0x00eb,
            0x00e8,
            0x00ef,
            0x00ee,
            0x00ec,
            0x00c4,
            0x00c5,
            0x00c9,
            0x00e6,
            0x00c6,
            0x00f4,
            0x00f6,
            0x00f2,
            0x00fb,
            0x00f9,
            0x00ff,
            0x00d6,
            0x00dc,
            0x00a2,
            0x00a3,
            0x00a5,
            0x20a7,
            0x0192,
            0x00e1,
            0x00ed,
            0x00f3,
            0x00fa,
            0x00f1,
            0x00d1,
            0x00aa,
            0x00da,
            0x00bf,
            0x2310,
            0x00ac,
            0x00bd,
            0x00bc,
            0x00a1,
            0x00ae,
            0x00bb,
            0x2593,
            0x2592,
            0x2591,
            0x2502,
            0x2524,
            0x2561,
            0x2562,
            0x2556,
            0x2555,
            0x2563,
            0x2551,
            0x2557,
            0x255d,
            0x255c,
            0x255b,
            0x2510,
            0x2514,
            0x2534,
            0x252c,
            0x251c,
            0x2500,
            0x253c,
            0x255e,
            0x255f,
            0x255a,
            0x2554,
            0x2569,
            0x2566,
            0x2560,
            0x2550,
            0x256c,
            0x2567,
            0x2568,
            0x2564,
            0x2565,
            0x2568,
            0x2558,
            0x2552,
            0x2553,
            0x256b,
            0x256a,
            0x2518,
            0x250c,
            0x2588,
            0x2584,
            0x258b,
            0x2590,
            0x2580,
            0x03b1,
            0x00df,
            0x0393,
            0x03c0,
            0x03a3,
            0x03c3,
            0x00b5,
            0x03c4,
            0x03c6,
            0x03b8,
            0x2126,
            0x03b4,
            0x221e,
            0x00f8,
            0x03b5,
            0x220f,
            0x2261,
            0x00b1,
            0x2265,
            0x2266,
            0x2320,
            0x2321,
            0x00f7,
            0x2248,
            0x00b0,
            0x2022,
            0x00b7,
            0x221a,
            0x207f,
            0x00b2,
            0x220e,
            0x00a0
        ];
        this.StateChange = (newState) => { };
        /** sending  multiple unicode values to socket */
        this.TermSendKeys = (keys) => this.onSend(keys);
    }
}


/***/ }),

/***/ "./src/core/ConsoleLogger.ts":
/*!***********************************!*\
  !*** ./src/core/ConsoleLogger.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsoleLogger": () => (/* binding */ ConsoleLogger)
/* harmony export */ });
/* harmony import */ var _Interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interfaces */ "./src/core/Interfaces/index.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/

/**
 * ConsoleLogger implements ILogger to provide basic console logging functionality.
 */
class ConsoleLogger {
    constructor(level) {
        this.minLevel = level;
    }
    log(level, data) {
        switch (level) {
            case _Interfaces__WEBPACK_IMPORTED_MODULE_0__.LogLevel.VERBOSE:
                this.verbose(data);
                break;
            case _Interfaces__WEBPACK_IMPORTED_MODULE_0__.LogLevel.INFO:
                this.info(data);
                break;
            case _Interfaces__WEBPACK_IMPORTED_MODULE_0__.LogLevel.DEBUG:
                this.debug(data);
                break;
            case _Interfaces__WEBPACK_IMPORTED_MODULE_0__.LogLevel.WARNING:
                this.warn(data);
                break;
            case _Interfaces__WEBPACK_IMPORTED_MODULE_0__.LogLevel.ERROR:
                this.error(data);
                break;
            default:
                break;
        }
    }
    debug(log) {
        if (this.minLevel >= _Interfaces__WEBPACK_IMPORTED_MODULE_0__.LogLevel.DEBUG)
            console.debug(log);
    }
    info(log) {
        if (this.minLevel >= _Interfaces__WEBPACK_IMPORTED_MODULE_0__.LogLevel.INFO)
            console.info(log);
    }
    error(log) {
        if (this.minLevel >= _Interfaces__WEBPACK_IMPORTED_MODULE_0__.LogLevel.ERROR)
            console.error(log);
    }
    warn(log) {
        if (this.minLevel >= _Interfaces__WEBPACK_IMPORTED_MODULE_0__.LogLevel.WARNING)
            console.warn(log);
    }
    verbose(log) {
        if (this.minLevel >= _Interfaces__WEBPACK_IMPORTED_MODULE_0__.LogLevel.VERBOSE)
            console.log(log);
    }
}


/***/ }),

/***/ "./src/core/Converter.ts":
/*!*******************************!*\
  !*** ./src/core/Converter.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeConverter": () => (/* binding */ TypeConverter)
/* harmony export */ });
/* harmony import */ var _Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities/UtilityMethods */ "./src/core/Utilities/UtilityMethods.ts");

/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Vinay G
 **********************************************************************/
const TypeConverter = {
    // Binary encoding and decoding functions
    ReadShort(v, p) {
        //
        return (v.charCodeAt(p) << 8) + v.charCodeAt(p + 1);
    },
    ReadShortX(v, p) {
        return (v.charCodeAt(p + 1) << 8) + v.charCodeAt(p);
    },
    ReadInt(v, p) {
        return (v.charCodeAt(p) * 0x1000000) + (v.charCodeAt(p + 1) << 16) +
            (v.charCodeAt(p + 2) << 8) + v.charCodeAt(p + 3);
    },
    ReadSInt(v, p) {
        return (v.charCodeAt(p) << 24) + (v.charCodeAt(p + 1) << 16) +
            (v.charCodeAt(p + 2) << 8) + v.charCodeAt(p + 3);
    },
    ReadIntX(v, p) {
        return (v.charCodeAt(p + 3) * 0x1000000) + (v.charCodeAt(p + 2) << 16) +
            (v.charCodeAt(p + 1) << 8) + v.charCodeAt(p);
    },
    ShortToStr(v) {
        return String.fromCharCode((v >> 8) & 0xFF, v & 0xFF);
    },
    ShortToStrX(v) {
        return String.fromCharCode(v & 0xFF, (v >> 8) & 0xFF);
    },
    IntToStr(v) {
        return String.fromCharCode((v >> 24) & 0xFF, (v >> 16) & 0xFF, (v >> 8) & 0xFF, v & 0xFF);
    },
    IntToStrX(v) {
        return String.fromCharCode(v & 0xFF, (v >> 8) & 0xFF, (v >> 16) & 0xFF, (v >> 24) & 0xFF);
    },
    SplitArray(v) {
        return v.split(',');
    },
    Clone(v) {
        return JSON.parse(JSON.stringify(v));
    },
    EscapeHtml(x) {
        if (typeof x === 'string') {
            return x.replace(/&/g, '&amp;').replace(/>/g, '&gt;')
                .replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
        }
        if (typeof x === 'boolean') {
            return x;
        }
        if (typeof x === 'number') {
            return x;
        }
    },
    // Move an element from one position in an array to a new position
    ArrayElementMove(arr, from, to) {
        arr.splice(to, 0, arr.splice(from, 1)[0]);
    },
    // Print object for HTML
    ObjectToStringEx(x, c) {
        let r = '';
        if (x !== 0 && (!(0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_0__.isTruthy)(x) || x == null))
            return '(Null)';
        if (x instanceof Array) {
            // eslint-disable-next-line @typescript-eslint/no-for-in-array
            for (const i in x) {
                r = r + '<br />' + String(this.gap(c)) + 'Item #' + String(i) + ': ' + String(this.ObjectToStringEx(x[i], c + 1));
            }
        }
        else if (x instanceof Object) {
            for (const j in x) {
                r = r + '<br />' + String(this.gap(c)) + String(j) + ' = ' + String(this.ObjectToStringEx(x[j], c + 1));
            }
        }
        else {
            r = r + String(this.EscapeHtml(x));
        }
        return r;
    },
    // Print object for console
    ObjectToStringEx2(x, c) {
        let r = '';
        if (x !== 0 && (!(0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_0__.isTruthy)(x) || x == null)) {
            return '(Null)';
        }
        if (x instanceof Array) {
            // eslint-disable-next-line @typescript-eslint/no-for-in-array
            for (const i in x) {
                r = r + '\r\n' + String(this.gap2(c)) + 'Item #' + String(i) + ': ' + String(this.ObjectToStringEx2(x[i], c + 1));
            }
        }
        else if (x instanceof Object) {
            for (const j in x) {
                r = r + '\r\n' + String(this.gap2(c)) + String(j) + ' = ' + String(this.ObjectToStringEx2(x[j], c + 1));
            }
        }
        else {
            r = r + String(this.EscapeHtml(x));
        }
        return r;
    },
    // Create an ident gap
    gap(c) {
        let x = '';
        for (let i = 0; i < (c * 4); i++) {
            x += '&nbsp;';
        }
        return x;
    },
    gap2(c) {
        let x = '';
        for (let i = 0; i < (c * 4); i++) {
            x += ' ';
        }
        return x;
    },
    // Print an object in html
    ObjectToString(x) {
        return this.ObjectToStringEx(x, 0);
    },
    ObjectToString2(x) {
        return this.ObjectToStringEx2(x, 0);
    },
    // Convert decimal to hex
    char2hex(i) {
        return (i + 0x100).toString(16).substr(-2).toUpperCase();
    },
    // Convert a raw string to a hex string
    rstr2hex(input) {
        let r = '';
        let i;
        for (i = 0; i < input.length; i++) {
            r = r + String(this.char2hex(input.charCodeAt(i)));
        }
        return r;
    },
    // UTF-8 encoding & decoding functions
    encode_utf8(s) {
        return unescape(encodeURIComponent(s));
    },
    decode_utf8(s) {
        return decodeURIComponent(escape(s));
    },
    // Convert a string into a blob
    data2blob(data) {
        const bytes = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            bytes[i] = data.charCodeAt(i);
        }
        const blob = new Blob([new Uint8Array(bytes)]);
        return blob;
    },
    // Generate random numbers
    random(max) {
        return Math.floor(Math.random() * max);
    },
    // Trademarks
    trademarks(x) {
        return x.replace(/\(R\)/g, '&reg;').replace(/\(TM\)/g, '&trade;');
    }
};


/***/ }),

/***/ "./src/core/Desktop.ts":
/*!*****************************!*\
  !*** ./src/core/Desktop.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Desktop": () => (/* binding */ Desktop)
/* harmony export */ });
/**
 * Desktop is the base class for handling Remote Desktop functionality
 */
class Desktop {
    processData(data) { }
    onStateChange(state) { }
    start() { }
    onSendKvmData(data) { }
}



/***/ }),

/***/ "./src/core/ImageData/DataProcessor.ts":
/*!*********************************************!*\
  !*** ./src/core/ImageData/DataProcessor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataProcessor": () => (/* binding */ DataProcessor)
/* harmony export */ });
/* harmony import */ var _StateProcessorFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StateProcessorFactory */ "./src/core/StateProcessorFactory.ts");
/* harmony import */ var _Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/UtilityMethods */ "./src/core/Utilities/UtilityMethods.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/


/**
 * DataProcessor provides the functionality for processing different states of RFB leveraging
 * the different StateProcessors
 */
class DataProcessor {
    constructor(logger, comm, parent) {
        this.acc = '';
        this.stateProcessorFac = new _StateProcessorFactory__WEBPACK_IMPORTED_MODULE_0__.StateProcessorFactory(comm, parent, this.updateRFBState.bind(this));
        this.parent = parent;
        this.logger = logger;
    }
    /**
     * processData is called from ICommunicator on new data coming over the wire
     * @param data is the current data block received on the web socket
     */
    processData(data) {
        if (!(0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_1__.isTruthy)(data))
            return;
        this.acc += data;
        let cmdSize = 0;
        this.logger.verbose(`Process Data ACC length:  ${this.acc.length}`);
        while (this.acc.length > 0) {
            const stateProcessor = this.stateProcessorFac.getProcessor(this.parent.state);
            const prevState = this.parent.state;
            cmdSize = stateProcessor.processState(this.acc);
            this.logger.verbose(`State  ${prevState}  Processed. cmdSize returned ${cmdSize}`);
            if (cmdSize === 0)
                return;
            // console.log('before acc ', this.acc)
            this.acc = this.acc.substring(cmdSize);
            this.logger.verbose(`remaining acc  ${this.acc.length} command size: ${cmdSize} new parent state: ${this.parent.state}`);
        }
    }
    updateRFBState(state) {
        this.parent.state = state;
    }
}


/***/ }),

/***/ "./src/core/ImageData/RLEDecoder.ts":
/*!******************************************!*\
  !*** ./src/core/ImageData/RLEDecoder.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RLEDecoder": () => (/* binding */ RLEDecoder)
/* harmony export */ });
/* harmony import */ var _Utilities_ImageHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/ImageHelper */ "./src/core/Utilities/ImageHelper.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/

class RLEDecoder {
    constructor(parent) {
        this.parent = parent;
    }
    Decode(data, ptr, x, y, width, height, s, datalen) {
        const subencoding = data.charCodeAt(ptr++);
        let index;
        let v;
        let runlengthdecode;
        const palette = {};
        let rlecount = 0;
        let runlength = 0;
        let i;
        // this.parent.Debug("RECT RLE (" + (datalen - 5) + ", " + subencoding + "):" + rstr2hex(data.substring(21, 21 + (datalen - 5))));
        if (subencoding === 0) {
            // RAW encoding
            this.parent.logger.verbose('Raw encoding');
            for (i = 0; i < s; i++) {
                _Utilities_ImageHelper__WEBPACK_IMPORTED_MODULE_0__.ImageHelper.setPixel(this.parent, data.charCodeAt(ptr++) + ((this.parent.bpp === 2) ? (data.charCodeAt(ptr++) << 8) : 0), i);
            }
            _Utilities_ImageHelper__WEBPACK_IMPORTED_MODULE_0__.ImageHelper.putImage(this.parent, x, y);
        }
        else if (subencoding === 1) {
            // Solid color tile
            v = data.charCodeAt(ptr++) + ((this.parent.bpp === 2) ? (data.charCodeAt(ptr++) << 8) : 0);
            this.parent.canvasCtx.fillStyle = 'rgb(' + ((this.parent.bpp === 1) ? (`${(v & 224)}, ${((v & 28) << 3)}, ${_Utilities_ImageHelper__WEBPACK_IMPORTED_MODULE_0__.ImageHelper.fixColor((v & 3) << 6)}`) : (`${((v >> 8) & 248)}, ${((v >> 3) & 252)},${((v & 31) << 3)}`)) + ')';
            this.parent.logger.verbose('fillstyle: ' + this.parent.canvasCtx.fillStyle);
            const xx = _Utilities_ImageHelper__WEBPACK_IMPORTED_MODULE_0__.ImageHelper.rotX(this.parent, x, y);
            y = _Utilities_ImageHelper__WEBPACK_IMPORTED_MODULE_0__.ImageHelper.rotY(this.parent, x, y);
            x = xx;
            this.parent.canvasCtx.fillRect(x, y, width, height);
        }
        else if (subencoding > 1 && subencoding < 17) { // Packed palette encoded tile
            // Read the palette
            this.parent.logger.verbose('Read the packed palette');
            let br = 4;
            let bm = 15; // br is BitRead and bm is BitMask. By adjusting these two we can support all the variations in this encoding.
            for (i = 0; i < subencoding; i++) {
                palette[i] = data.charCodeAt(ptr++) + ((this.parent.bpp === 2) ? (data.charCodeAt(ptr++) << 8) : 0);
            }
            // Compute bits to read & bit mark
            if (subencoding === 2) {
                br = 1;
                bm = 1;
            }
            else if (subencoding <= 4) {
                br = 2;
                bm = 3;
            }
            // Display all the bits
            while (rlecount < s && ptr < data.length) {
                v = data.charCodeAt(ptr++);
                for (i = (8 - br); i >= 0; i -= br) {
                    _Utilities_ImageHelper__WEBPACK_IMPORTED_MODULE_0__.ImageHelper.setPixel(this.parent, palette[(v >> i) & bm], rlecount++);
                }
            }
            _Utilities_ImageHelper__WEBPACK_IMPORTED_MODULE_0__.ImageHelper.putImage(this.parent, x, y);
        }
        else if (subencoding === 128) { // RLE encoded tile
            this.parent.logger.verbose('RLE encoded tile');
            while (rlecount < s && ptr < data.length) {
                // Get the run color
                v = data.charCodeAt(ptr++) + ((this.parent.bpp === 2) ? (data.charCodeAt(ptr++) << 8) : 0);
                // Decode the run length. This is the fastest and most compact way I found to do this.
                runlength = 1;
                do {
                    runlength += (runlengthdecode = data.charCodeAt(ptr++));
                } while (runlengthdecode === 255);
                // Draw a run
                while (--runlength >= 0) {
                    _Utilities_ImageHelper__WEBPACK_IMPORTED_MODULE_0__.ImageHelper.setPixel(this.parent, v, rlecount++);
                }
            }
            _Utilities_ImageHelper__WEBPACK_IMPORTED_MODULE_0__.ImageHelper.putImage(this.parent, x, y);
        }
        else if (subencoding > 129) { // Palette RLE encoded tile
            this.parent.logger.verbose('Read the RLE palette');
            // Read the palette
            for (i = 0; i < (subencoding - 128); i++) {
                palette[i] = data.charCodeAt(ptr++) + ((this.parent.bpp === 2) ? (data.charCodeAt(ptr++) << 8) : 0);
            }
            this.parent.logger.verbose('Decode RLE on palette');
            // Decode RLE  on palette
            while (rlecount < s && ptr < data.length) {
                // Setup the run, get the color index and get the color from the palette.
                runlength = 1;
                index = data.charCodeAt(ptr++);
                v = palette[index % 128];
                // If the index starts with high order bit 1, this is a run and decode the run length.
                if (index > 127) {
                    do {
                        runlength += (runlengthdecode = data.charCodeAt(ptr++));
                    } while (runlengthdecode === 255);
                }
                // Draw a run
                while (--runlength >= 0) {
                    _Utilities_ImageHelper__WEBPACK_IMPORTED_MODULE_0__.ImageHelper.setPixel(this.parent, v, rlecount++);
                }
            }
            _Utilities_ImageHelper__WEBPACK_IMPORTED_MODULE_0__.ImageHelper.putImage(this.parent, x, y);
        }
    }
}



/***/ }),

/***/ "./src/core/ImageData/index.ts":
/*!*************************************!*\
  !*** ./src/core/ImageData/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataProcessor": () => (/* reexport safe */ _DataProcessor__WEBPACK_IMPORTED_MODULE_0__.DataProcessor),
/* harmony export */   "RLEDecoder": () => (/* reexport safe */ _RLEDecoder__WEBPACK_IMPORTED_MODULE_1__.RLEDecoder)
/* harmony export */ });
/* harmony import */ var _DataProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataProcessor */ "./src/core/ImageData/DataProcessor.ts");
/* harmony import */ var _RLEDecoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RLEDecoder */ "./src/core/ImageData/RLEDecoder.ts");




/***/ }),

/***/ "./src/core/Interfaces/ILogger.ts":
/*!****************************************!*\
  !*** ./src/core/Interfaces/ILogger.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => (/* binding */ LogLevel)
/* harmony export */ });
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["VERBOSE"] = 5] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 4] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
    LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
    LogLevel[LogLevel["ERROR"] = 1] = "ERROR";
})(LogLevel || (LogLevel = {}));



/***/ }),

/***/ "./src/core/Interfaces/index.ts":
/*!**************************************!*\
  !*** ./src/core/Interfaces/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => (/* reexport safe */ _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel)
/* harmony export */ });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "./src/core/Interfaces/ILogger.ts");



/***/ }),

/***/ "./src/core/RFBStateProcessors/Encoding.ts":
/*!*************************************************!*\
  !*** ./src/core/RFBStateProcessors/Encoding.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Encoding": () => (/* binding */ Encoding)
/* harmony export */ });
/* harmony import */ var _Converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Converter */ "./src/core/Converter.ts");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities */ "./src/core/Utilities/index.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/


/**
 * Handle encoded RFB packets. Supported encodings, RAW, ZRLE.
 */
class Encoding {
    constructor(comm, parent, rleDecoder, updateRFBState) {
        this.wsSocket = comm;
        this.parent = parent;
        this.rleDecoder = rleDecoder;
        this.updateRFBState = updateRFBState;
    }
    processState(acc) {
        // console.log(TypeConverter.rstr2hex(acc))
        let cmdSize = 0;
        if (acc.length >= 12) {
            const x = _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadShort(acc, 0);
            const y = _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadShort(acc, 2);
            const width = _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadShort(acc, 4);
            const height = _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadShort(acc, 6);
            const s = width * height;
            const encoding = _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadInt(acc, 8);
            // console.log(x, y, width, height, s, encoding)
            if (encoding < 17) {
                if (width < 1 || width > 64 || height < 1 || height > 64) {
                    this.parent.logger.error(`Invalid tile size (${width},${height}), disconnecting.`);
                    throw new Error('Invalid tile size');
                }
                // Set the spare bitmap to the rigth size if it's not already. This allows us to recycle the spare most if not all the time.
                if (this.parent.sparew !== width || this.parent.spareh !== height) {
                    this.parent.sparew = this.parent.sparew2 = width;
                    this.parent.spareh = this.parent.spareh2 = height;
                    if (this.parent.rotation === 1 || this.parent.rotation === 3) {
                        this.parent.sparew2 = height;
                        this.parent.spareh2 = width;
                    }
                    const xspacecachename = `${this.parent.sparew2}x${this.parent.spareh2}`;
                    this.parent.spare = this.parent.sparecache[xspacecachename];
                    // console.log(this.parent.spare)
                    if (!(0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.isTruthy)(this.parent.spare)) {
                        this.parent.sparecache[xspacecachename] = this.parent.spare = this.parent.canvasCtx.createImageData(this.parent.sparew2, this.parent.spareh2);
                    }
                    // console.log(this.parent.sparecache[xspacecachename])
                }
            }
            if (encoding === 0xFFFFFF21) {
                // Desktop Size (0xFFFFFF21, -223)
                this.parent.logger.verbose('Desktop size');
                this.parent.canvasCtx.canvas.width = this.parent.ScreenWidth = this.parent.rwidth = this.parent.width = width;
                this.parent.canvasCtx.canvas.height = this.parent.ScreenHeight = this.parent.rheight = this.parent.height = height;
                this.wsSocket.send(String.fromCharCode(3, 0, 0, 0, 0, 0) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr(this.parent.width) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr(this.parent.height)); // FramebufferUpdateRequest
                cmdSize = 12;
                if (this.parent.onScreenSizeChange != null) {
                    this.parent.onScreenSizeChange(this.parent.ScreenWidth, this.parent.ScreenHeight);
                }
                // this.parent.Debug("New desktop width: " + this.parent.width + ", height: " + this.parent.height);
            }
            else if (encoding === 0) {
                // RAW encoding
                let ptr = 12;
                const cs = 12 + (s * this.parent.bpp);
                // console.log('RAW encoding ', acc.length, cs)
                if (acc.length < cs)
                    return 0; // Check we have all the data needed and we can only draw 64x64 tiles.
                cmdSize = cs;
                // console.log('encoding cmdSize', encoding, this.cmdSize)
                // CRITICAL LOOP, optimize this as much as possible
                for (let i = 0; i < s; i++) {
                    _Utilities__WEBPACK_IMPORTED_MODULE_1__.ImageHelper.setPixel(this.parent, acc.charCodeAt(ptr++) + ((this.parent.bpp === 2) ? (acc.charCodeAt(ptr++) << 8) : 0), i);
                }
                _Utilities__WEBPACK_IMPORTED_MODULE_1__.ImageHelper.putImage(this.parent, x, y);
            }
            else if (encoding === 16) {
                // ZRLE encoding
                if (acc.length < 16)
                    return 0;
                const datalen = _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadInt(acc, 12);
                if (acc.length < (16 + datalen))
                    return 0;
                // console.debug("RECT ZRLE (" + x + "," + y + "," + width + "," + height + ") LEN = " + datalen);
                // console.debug("RECT ZRLE LEN: " + TypeConverter.ReadShortX(acc, 17) + ", DATA: " + TypeConverter.rstr2hex(acc.substring(16)));
                // Process the ZLib header if this is the first block
                const ptr = 16;
                const delta = 5;
                const dx = 0;
                // console.log(TypeConverter.rstr2hex(acc))
                // 0000000000400040000000100000000A789C626400000000FFFF00400000004000400000001000000008626400000000FFFF
                if (datalen > 5 && acc.charCodeAt(ptr) === 0 && _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadShortX(acc, ptr + 1) === (datalen - delta)) {
                    // This is an uncompressed ZLib data block
                    this.rleDecoder.Decode(acc, ptr + 5, x, y, width, height, s, datalen);
                }
                else {
                    // This is compressed ZLib data, decompress and process it.
                    // console.log('acclength=',acc.length,'ptr=',ptr,'datalen=',datalen,'dx=',dx)
                    const zlibstring = acc.substring(ptr, ptr + datalen - dx);
                    // console.log(zlibstring)
                    const arr = this.parent.inflate.inflate(zlibstring);
                    // console.log('unzipped stream', arr)
                    if (arr.length > 0) {
                        this.rleDecoder.Decode(arr, 0, x, y, width, height, s, arr.length);
                    }
                    else {
                        this.parent.logger.error('Invalid deflate data.');
                        throw new Error('invalid deflate data');
                    }
                }
                cmdSize = 16 + datalen;
            }
            else {
                this.parent.logger.error(`Unknown Encoding: ${encoding} , HEX: ${_Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.rstr2hex(acc)}`);
                throw new Error(`Unknown Encoding: ${encoding}`);
            }
            // console.log('state ', this.parent.state, 'acc ', acc.length)
            if (--this.parent.state === 100) {
                this.parent.logger.debug('Frame completed. Update state and request new frame');
                this.updateRFBState(4);
                const sendRefreshCallback = () => _Utilities__WEBPACK_IMPORTED_MODULE_1__.CommsHelper.sendRefresh(this.parent, this.wsSocket);
                if (this.parent.frameRateDelay === 0) {
                    _Utilities__WEBPACK_IMPORTED_MODULE_1__.CommsHelper.sendRefresh(this.parent, this.wsSocket); // Ask for new frame
                }
                else {
                    setTimeout(sendRefreshCallback, this.parent.frameRateDelay); // Hold x miliseconds before asking for a new frame
                }
            }
        }
        return cmdSize;
    }
}



/***/ }),

/***/ "./src/core/RFBStateProcessors/FrameBufferBellServerCutText.ts":
/*!*********************************************************************!*\
  !*** ./src/core/RFBStateProcessors/FrameBufferBellServerCutText.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameBufferBellServerCutText": () => (/* binding */ FrameBufferBellServerCutText)
/* harmony export */ });
/* harmony import */ var _Converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Converter */ "./src/core/Converter.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/

class FrameBufferBellServerCutText {
    constructor(comm, serverCutTextHandler, updateRFBState) {
        this.wsSocket = comm;
        this.serverCutTextHandler = serverCutTextHandler;
        this.updateRFBState = updateRFBState;
    }
    processState(acc) {
        let cmdsize = 0;
        let len = 0;
        switch (acc.charCodeAt(0)) {
            case 0: // FramebufferUpdate
                if (acc.length < 4)
                    return 0;
                this.updateRFBState(100 + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadShort(acc, 2)); // Read the number of tiles that are going to be sent, add 100 and use that as our protocol state.
                cmdsize = 4;
                break;
            case 2: // This is the bell, do nothing.
                cmdsize = 1;
                break;
            case 3: // This is ServerCutText
                if (acc.length < 8)
                    return 0;
                len = _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadInt(acc, 4) + 8;
                if (acc.length < len)
                    return 0;
                cmdsize = this.serverCutTextHandler.handleServerCutText(acc);
                break;
        }
        return cmdsize;
    }
}



/***/ }),

/***/ "./src/core/RFBStateProcessors/HandshakeState.ts":
/*!*******************************************************!*\
  !*** ./src/core/RFBStateProcessors/HandshakeState.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HandshakeState": () => (/* binding */ HandshakeState)
/* harmony export */ });
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
/**
 * Initial handshake and send RFB protocol supported on client
 */
class HandshakeState {
    constructor(comm, updateRFBState) {
        this.wsSocket = comm;
        this.updateRFBState = updateRFBState;
    }
    processState(acc) {
        let cmdSize = 0;
        if (acc.length >= 12) {
            // Getting handshake & version
            cmdSize = 12;
            // if (obj.acc.substring(0, 4) != "RFB ") { return obj.Stop(); }
            // var version = parseFloat(obj.acc.substring(4, 11));
            // obj.Debug("KVersion: " + version);
            this.updateRFBState(1);
            this.wsSocket.send('RFB 003.008\n');
            return cmdSize;
        }
        return 0;
    }
}



/***/ }),

/***/ "./src/core/RFBStateProcessors/SecurityOptions.ts":
/*!********************************************************!*\
  !*** ./src/core/RFBStateProcessors/SecurityOptions.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityOptions": () => (/* binding */ SecurityOptions)
/* harmony export */ });
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
/**
 * Get security options from remote device. Send auth type.
 */
class SecurityOptions {
    constructor(comm, updateRFBState) {
        this.wsSocket = comm;
        this.updateRFBState = updateRFBState;
    }
    processState(acc) {
        let cmdSize = 0;
        if (acc.length >= 1) {
            // Getting security options
            cmdSize = acc.charCodeAt(0) + 1;
            this.wsSocket.send(String.fromCharCode(1)); // Send the "None" security type. Since we already authenticated using redirection digest auth, we don't need to do this again.
            this.updateRFBState(2);
            return cmdSize;
        }
        return 0;
    }
}



/***/ }),

/***/ "./src/core/RFBStateProcessors/SecurityResponse.ts":
/*!*********************************************************!*\
  !*** ./src/core/RFBStateProcessors/SecurityResponse.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityResponse": () => (/* binding */ SecurityResponse)
/* harmony export */ });
/* harmony import */ var _Converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Converter */ "./src/core/Converter.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/

/**
 * Get auth security response and proceed with share desktop flag
 */
class SecurityResponse {
    constructor(comm, updateRFBState) {
        this.wsSocket = comm;
        this.updateRFBState = updateRFBState;
    }
    processState(acc) {
        let cmdSize = 0;
        if (acc.length >= 4) {
            // Getting security response
            cmdSize = 4;
            if (_Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadInt(acc, 0) !== 0) {
                // const reasonLength = TypeConverter.ReadInt(acc, 4)
                // const reasonString = acc.substring(8, 8 + reasonLength)
                // console.log(reasonString)
                // Need to be fixed. Close the connection when this happens
                throw new Error('Error. Stopping. Security response not None.');
            }
            this.wsSocket.send(String.fromCharCode(1)); // Send share desktop flag
            this.updateRFBState(3);
            return cmdSize;
        }
        return 0;
    }
}



/***/ }),

/***/ "./src/core/RFBStateProcessors/ServerCutTextHandler.ts":
/*!*************************************************************!*\
  !*** ./src/core/RFBStateProcessors/ServerCutTextHandler.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerCutTextHandler": () => (/* binding */ ServerCutTextHandler)
/* harmony export */ });
/* harmony import */ var _Converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Converter */ "./src/core/Converter.ts");
/* harmony import */ var _Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/UtilityMethods */ "./src/core/Utilities/UtilityMethods.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/


class ServerCutTextHandler {
    constructor(comm, parent) {
        this.wsSocket = comm;
        this.parent = parent;
    }
    handleServerCutText(acc) {
        if (acc.length < 8)
            return 0;
        const len = _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadInt(acc, 4) + 8;
        if (acc.length < len)
            return 0;
        if (this.parent.onKvmData != null) {
            const d = acc.substring(8, len);
            if ((d.length >= 16) && (d.substring(0, 15) === '\0KvmDataChannel')) {
                if (!this.parent.kvmDataSupported) {
                    this.parent.kvmDataSupported = true;
                    console.log('KVM Data Channel Supported.');
                }
                if (((this.parent.onKvmDataAck === -1) && (d.length === 16)) || (d.charCodeAt(15) !== 0)) {
                    this.parent.onKvmDataAck = true;
                }
                if ((0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_1__.isTruthy)(this.parent.urlvars) && (0,_Utilities_UtilityMethods__WEBPACK_IMPORTED_MODULE_1__.isTruthy)(this.parent.urlvars.kvmdatatrace)) {
                    console.log(`KVM-Recv((${d.length - 16})):  ${d.substring(16)}`);
                }
                if (d.length > 16) {
                    this.parent.onKvmData(d.substring(16));
                } // Event the data and ack
                if ((this.parent.onKvmDataAck === true) && (this.parent.onKvmDataPending.length > 0)) {
                    this.wsSocket.onSendKvmData(this.parent.onKvmDataPending.shift());
                } // Send pending data
            }
        }
        return len;
    }
}



/***/ }),

/***/ "./src/core/RFBStateProcessors/ServerInit.ts":
/*!***************************************************!*\
  !*** ./src/core/RFBStateProcessors/ServerInit.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerInit": () => (/* binding */ ServerInit)
/* harmony export */ });
/* harmony import */ var _Converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Converter */ "./src/core/Converter.ts");
/* harmony import */ var _Utilities_CommsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/CommsHelper */ "./src/core/Utilities/CommsHelper.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/


/**
 * Set supported encodings for RFB
 */
class ServerInit {
    constructor(comm, parent, updateRFBState) {
        this.wsSocket = comm;
        this.parent = parent;
        this.updateRFBState = updateRFBState;
    }
    processState(acc) {
        let cmdSize = 0;
        if (acc.length >= 24) {
            // Getting server init
            this.parent.rotation = 0; // We don't currently support screen init while rotated.
            const namelen = _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadInt(acc, 20);
            if (acc.length < 24 + namelen)
                return 0;
            cmdSize = 24 + namelen;
            if (this.parent.updateScreenDimensions != null) {
                this.parent.updateScreenDimensions(_Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadShort(acc, 0), _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadShort(acc, 2));
            }
            this.parent.canvasCtx.canvas.width = this.parent.ScreenWidth = this.parent.rwidth = this.parent.width = _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadShort(acc, 0);
            this.parent.canvasCtx.canvas.height = this.parent.ScreenHeight = this.parent.rheight = this.parent.height = _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ReadShort(acc, 2);
            // obj.canvas.canvas.width = obj.rwidth = obj.width = obj.ScreenWidth = ReadShort(obj.acc, 0);
            // obj.canvas.canvas.height = obj.rheight = obj.height = obj.ScreenHeight = ReadShort(obj.acc, 2);
            // SetEncodings, with AMT we can't omit RAW, must be specified.
            // Intel AMT supports encodings: RAW (0), ZRLE (16), Desktop Size (0xFFFFFF21, -223), KVM Data Channel (1092)
            let supportedEncodings = '';
            if (this.parent.useZRLE)
                supportedEncodings += _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStr(16);
            supportedEncodings += _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStr(0);
            supportedEncodings += _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStr(1092);
            this.parent.logger.verbose('Send supported encodings');
            this.wsSocket.send(String.fromCharCode(2, 0) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr((supportedEncodings.length / 4) + 1) + supportedEncodings + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStr(-223)); // Supported Encodings + Desktop Size
            // Set the pixel encoding to something much smaller
            // obj.Send(String.fromCharCode(0, 0, 0, 0, 16, 16, 0, 1) + ShortToStr(31) + ShortToStr(63) + ShortToStr(31) + String.fromCharCode(11, 5, 0, 0, 0, 0));                     // Setup 16 bit color RGB565 (This is the default, so we don't need to set it)
            if (this.parent.bpp === 1) {
                this.wsSocket.send(String.fromCharCode(0, 0, 0, 0, 8, 8, 0, 1) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr(7) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr(7) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr(3) + String.fromCharCode(5, 2, 0, 0, 0, 0));
            } // Setup 8 bit color RGB332
            this.updateRFBState(4);
            this.parent.onStateChange(3);
            this.parent.logger.info('Start new frame.');
            _Utilities_CommsHelper__WEBPACK_IMPORTED_MODULE_1__.CommsHelper.sendRefresh(this.parent, this.wsSocket);
            // obj.timer = setInterval(obj.xxOnTimer, 50);
            this.parent.oldMouseX = -1; // Old mouse x position
            // if (this.parent.onScreenSizeChange != null)
            // {
            //   this.parent.onScreenSizeChange(obj, obj.ScreenWidth, obj.ScreenHeight);
            // }
            return cmdSize;
        }
        return 0;
    }
}



/***/ }),

/***/ "./src/core/RFBStateProcessors/index.ts":
/*!**********************************************!*\
  !*** ./src/core/RFBStateProcessors/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Encoding": () => (/* reexport safe */ _Encoding__WEBPACK_IMPORTED_MODULE_0__.Encoding),
/* harmony export */   "HandshakeState": () => (/* reexport safe */ _HandshakeState__WEBPACK_IMPORTED_MODULE_1__.HandshakeState),
/* harmony export */   "FrameBufferBellServerCutText": () => (/* reexport safe */ _FrameBufferBellServerCutText__WEBPACK_IMPORTED_MODULE_2__.FrameBufferBellServerCutText),
/* harmony export */   "SecurityOptions": () => (/* reexport safe */ _SecurityOptions__WEBPACK_IMPORTED_MODULE_3__.SecurityOptions),
/* harmony export */   "SecurityResponse": () => (/* reexport safe */ _SecurityResponse__WEBPACK_IMPORTED_MODULE_4__.SecurityResponse),
/* harmony export */   "ServerInit": () => (/* reexport safe */ _ServerInit__WEBPACK_IMPORTED_MODULE_5__.ServerInit)
/* harmony export */ });
/* harmony import */ var _Encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Encoding */ "./src/core/RFBStateProcessors/Encoding.ts");
/* harmony import */ var _HandshakeState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HandshakeState */ "./src/core/RFBStateProcessors/HandshakeState.ts");
/* harmony import */ var _FrameBufferBellServerCutText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FrameBufferBellServerCutText */ "./src/core/RFBStateProcessors/FrameBufferBellServerCutText.ts");
/* harmony import */ var _SecurityOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SecurityOptions */ "./src/core/RFBStateProcessors/SecurityOptions.ts");
/* harmony import */ var _SecurityResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SecurityResponse */ "./src/core/RFBStateProcessors/SecurityResponse.ts");
/* harmony import */ var _ServerInit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ServerInit */ "./src/core/RFBStateProcessors/ServerInit.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/









/***/ }),

/***/ "./src/core/StateProcessorFactory.ts":
/*!*******************************************!*\
  !*** ./src/core/StateProcessorFactory.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateProcessorFactory": () => (/* binding */ StateProcessorFactory)
/* harmony export */ });
/* harmony import */ var _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RFBStateProcessors */ "./src/core/RFBStateProcessors/index.ts");
/* harmony import */ var _RFBStateProcessors_ServerCutTextHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RFBStateProcessors/ServerCutTextHandler */ "./src/core/RFBStateProcessors/ServerCutTextHandler.ts");
/* harmony import */ var _ImageData_RLEDecoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageData/RLEDecoder */ "./src/core/ImageData/RLEDecoder.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/



/**
 * StateProcessorFactory is the factory class to return the processor for current state.
 */
class StateProcessorFactory {
    constructor(comm, parent, updateRFBState) {
        this.stateProcessors = {};
        this.stateProcessors[0] = new _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_0__.HandshakeState(comm, updateRFBState); // Got server version. Send client version
        this.stateProcessors[1] = new _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_0__.SecurityOptions(comm, updateRFBState); // Got security options, send None security type
        this.stateProcessors[2] = new _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_0__.SecurityResponse(comm, updateRFBState); // Got security response. Send share desktop flag
        this.stateProcessors[3] = new _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_0__.ServerInit(comm, parent, updateRFBState); // Got server init. Send encoding list
        const serverCutTextHandler = new _RFBStateProcessors_ServerCutTextHandler__WEBPACK_IMPORTED_MODULE_1__.ServerCutTextHandler(comm, parent);
        this.stateProcessors[4] = new _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_0__.FrameBufferBellServerCutText(comm, serverCutTextHandler, updateRFBState); // handles 3 different states, Framebufferupdate, bell and ServerCutText
        this.stateProcessors['100plus'] = new _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_0__.Encoding(comm, parent, new _ImageData_RLEDecoder__WEBPACK_IMPORTED_MODULE_2__.RLEDecoder(parent), updateRFBState); // handles tile count and encoding
    }
    /**
     * getProcessor returns the StateProcessor to handle the next RFB state
     * @param state RFB state to process next
     */
    getProcessor(state) {
        if (state <= 100) { // regular states before encoding information
            return this.stateProcessors[state];
        }
        else {
            return this.stateProcessors['100plus']; // when it reaches the encoding stage 100 is added to number of tiles in the image and processed by the Encoding processor
        }
    }
}



/***/ }),

/***/ "./src/core/TerminalDataProcessor.ts":
/*!*******************************************!*\
  !*** ./src/core/TerminalDataProcessor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminalDataProcessor": () => (/* binding */ TerminalDataProcessor)
/* harmony export */ });
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
/** class to process serial over lan data **/
class TerminalDataProcessor {
    constructor(terminal) {
        /** processing data received from serial port**/
        this.processData = (str) => {
            if (this.terminal.capture != null)
                this.terminal.capture = String(this.terminal.capture) + str;
            let c = '';
            for (let i = 0; i < str.length; i++) {
                const ch = str.charCodeAt(i);
                if (str[i] === 'J') {
                    this.clearTerminal();
                }
                else if ((ch & 0x80) !== 0) {
                    c += String.fromCharCode(this.terminal.AsciiToUnicode[ch & 0x7f]);
                }
                else {
                    c += `${str[i]}`;
                }
            }
            this.processDataToXterm(c);
        };
        this.terminal = terminal;
    }
}


/***/ }),

/***/ "./src/core/Utilities/AMTKeyCodeConverter.ts":
/*!***************************************************!*\
  !*** ./src/core/Utilities/AMTKeyCodeConverter.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AMTKeyCodeConverter": () => (/* binding */ AMTKeyCodeConverter)
/* harmony export */ });
/* harmony import */ var _AMTKeyCodeTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AMTKeyCodeTable */ "./src/core/Utilities/AMTKeyCodeTable.ts");
/* harmony import */ var _UtilityMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UtilityMethods */ "./src/core/Utilities/UtilityMethods.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/


/**
 * Provides code lookup functions for different special keys to send over the socket.
 */
const AMTKeyCodeConverter = {
    convertAMTKeyCode(e) {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        if ((0,_UtilityMethods__WEBPACK_IMPORTED_MODULE_1__.isTruthy)(e.code.startsWith('Key')) && e.code.length === 4) {
            return e.code.charCodeAt(3) + ((e.shiftKey === false) ? 32 : 0);
        }
        if ((0,_UtilityMethods__WEBPACK_IMPORTED_MODULE_1__.isTruthy)(e.code.startsWith('Digit')) && e.code.length === 6) {
            return e.code.charCodeAt(5);
        }
        if ((0,_UtilityMethods__WEBPACK_IMPORTED_MODULE_1__.isTruthy)(e.code.startsWith('Numpad')) && e.code.length === 7) {
            return e.code.charCodeAt(6);
        }
        return _AMTKeyCodeTable__WEBPACK_IMPORTED_MODULE_0__.default[e.code];
    }
};


/***/ }),

/***/ "./src/core/Utilities/AMTKeyCodeTable.ts":
/*!***********************************************!*\
  !*** ./src/core/Utilities/AMTKeyCodeTable.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
/**
 * Key code table used for special key handling
 */
const AMTKeyCodeTable = {
    Pause: 19,
    CapsLock: 20,
    Space: 32,
    Quote: 39,
    Minus: 45,
    NumpadMultiply: 42,
    NumpadAdd: 43,
    PrintScreen: 44,
    Comma: 44,
    NumpadSubtract: 45,
    NumpadDecimal: 46,
    Period: 46,
    Slash: 47,
    NumpadDivide: 47,
    Semicolon: 59,
    Equal: 61,
    OSLeft: 91,
    BracketLeft: 91,
    OSRight: 91,
    Backslash: 92,
    BracketRight: 93,
    ContextMenu: 93,
    Backquote: 96,
    NumLock: 144,
    ScrollLock: 145,
    Backspace: 0xff08,
    Tab: 0xff09,
    Enter: 0xff0d,
    NumpadEnter: 0xff0d,
    Escape: 0xff1b,
    Delete: 0xffff,
    Home: 0xff50,
    PageUp: 0xff55,
    PageDown: 0xff56,
    ArrowLeft: 0xff51,
    ArrowUp: 0xff52,
    ArrowRight: 0xff53,
    ArrowDown: 0xff54,
    End: 0xff57,
    Insert: 0xff63,
    F1: 0xffbe,
    F2: 0xffbf,
    F3: 0xffc0,
    F4: 0xffc1,
    F5: 0xffc2,
    F6: 0xffc3,
    F7: 0xffc4,
    F8: 0xffc5,
    F9: 0xffc6,
    F10: 0xffc7,
    F11: 0xffc8,
    F12: 0xffc9,
    ShiftLeft: 0xffe1,
    ShiftRight: 0xffe2,
    ControlLeft: 0xffe3,
    ControlRight: 0xffe4,
    AltLeft: 0xffe9,
    AltRight: 0xffea,
    MetaLeft: 0xffe7,
    MetaRight: 0xffe8
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AMTKeyCodeTable);


/***/ }),

/***/ "./src/core/Utilities/CommsHelper.ts":
/*!*******************************************!*\
  !*** ./src/core/Utilities/CommsHelper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommsHelper": () => (/* binding */ CommsHelper)
/* harmony export */ });
/* harmony import */ var _Converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Converter */ "./src/core/Converter.ts");
/* harmony import */ var _UtilityMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UtilityMethods */ "./src/core/Utilities/UtilityMethods.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/


const CommsHelper = {
    sendRefresh(parent, comm) {
        if (parent.holding)
            return;
        if (parent.focusMode > 0) {
            // Request only pixels around the last mouse position
            const df = parent.focusMode * 2;
            comm.send(String.fromCharCode(3, 1) +
                _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr(Math.max(Math.min(parent.oldMouseX, parent.lastMouseX) - parent.focusMode, 0)) +
                _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr(Math.max(Math.min(parent.oldMouseY, parent.lastMouseY) - parent.focusMode, 0)) +
                _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr(df + Math.abs(parent.oldMouseX - parent.lastMouseX)) +
                _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr(df + Math.abs(parent.oldMouseY - parent.lastMouseY))); // FramebufferUpdateRequest
            parent.oldMouseX = parent.lastMouseX;
            parent.oldMouseY = parent.lastMouseY;
        }
        else {
            // Request the entire screen
            comm.send(String.fromCharCode(3, 1, 0, 0, 0, 0) +
                _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr(parent.rwidth) +
                _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr(parent.rheight)); // FramebufferUpdateRequest
        }
    },
    sendKey(comm, k, d) {
        if (typeof k === 'object') {
            for (const i in k) {
                this.sendKey(comm, k[i][0], k[i][1]);
            }
        }
        else {
            comm.send(String.fromCharCode(4, d, 0, 0) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStr(k));
        }
    },
    sendKvmData(parent, comm, x) {
        if (parent.onKvmDataAck !== true) {
            parent.onKvmDataPending.push(x);
        }
        else {
            if ((0,_UtilityMethods__WEBPACK_IMPORTED_MODULE_1__.isTruthy)(parent.urlvars) && (0,_UtilityMethods__WEBPACK_IMPORTED_MODULE_1__.isTruthy)(parent.urlvars.kvmdatatrace)) {
                console.log(`KVM-Send(${String(x.length)}): ${String(x)}`);
            }
            x = '\0KvmDataChannel\0' + String(x);
            comm.send(`${String.fromCharCode(6, 0, 0, 0)}${_Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStr(x.length)}${String(x)}`);
            parent.onKvmDataAck = false;
        }
    },
    sendKeepAlive(parent, comm) {
        if (parent.lastKeepAlive < Date.now() - 5000) {
            parent.lastKeepAlive = Date.now();
            comm.send(String.fromCharCode(6, 0, 0, 0) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.IntToStr(16) + '\0KvmDataChannel\0');
        }
    },
    sendCtrlAltDelMsg(comm) {
        this.sendCad(comm);
    },
    sendCad(comm) {
        this.sendKey(comm, 0xFFE3, 1); // Control
        this.sendKey(comm, 0xFFE9, 1); // Alt
        this.sendKey(comm, 0xFFFF, 1); // Delete
        this.sendKey(comm, 0xFFFF, 0); // Delete
        this.sendKey(comm, 0xFFE9, 0); // Alt
        this.sendKey(comm, 0xFFE3, 0); // Control
    }
};



/***/ }),

/***/ "./src/core/Utilities/ImageHelper.ts":
/*!*******************************************!*\
  !*** ./src/core/Utilities/ImageHelper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageHelper": () => (/* binding */ ImageHelper)
/* harmony export */ });
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
/**
 * Provides helper functions to handle image pixel data.
 */
const ImageHelper = {
    /**
     * puts image on canvas using the parent canvas ctx.
     * @param parent parent desktop with CTX for canvas
     * @param x x loc
     * @param y y loc
     */
    putImage(parent, x, y) {
        if (parent.holding)
            return;
        const xx = ImageHelper.arotX(parent, x, y);
        y = ImageHelper.arotY(parent, x, y);
        x = xx;
        parent.canvasCtx.putImageData(parent.spare, x, y);
    },
    /**
     *
     * @param parent parent desktop
     * @param value pixel value at ptr
     * @param ptr ptr into the image pixel data
     */
    setPixel(parent, value, ptr) {
        let pp = ptr * 4;
        let x;
        let y;
        if (parent.rotation > 0) {
            if (parent.rotation === 1) {
                x = ptr % parent.sparew;
                y = Math.floor(ptr / parent.sparew);
                ptr = (x * parent.sparew2) + (parent.sparew2 - 1 - y);
                pp = ptr * 4;
            }
            else if (parent.rotation === 2) {
                pp = (parent.sparew * parent.spareh * 4) - 4 - pp;
            }
            else if (parent.rotation === 3) {
                x = ptr % parent.sparew;
                y = Math.floor(ptr / parent.sparew);
                ptr = ((parent.sparew2 - 1 - x) * parent.sparew2) + (y);
                pp = ptr * 4;
            }
        }
        if (parent.bpp === 1) {
            // Set 8bit color RGB332
            parent.spare.data[pp++] = value & 224;
            parent.spare.data[pp++] = (value & 28) << 3;
            parent.spare.data[pp++] = ImageHelper.fixColor((value & 3) << 6);
        }
        else {
            // Set 16bit color RGB565
            parent.spare.data[pp++] = (value >> 8) & 248;
            parent.spare.data[pp++] = (value >> 3) & 252;
            parent.spare.data[pp++] = (value & 31) << 3;
        }
        parent.spare.data[pp] = 0xFF; // Set alpha channel to opaque.
    },
    arotX(parent, x, y) {
        if (parent.rotation === 0)
            return x;
        if (parent.rotation === 1)
            return parent.canvasCtx.canvas.width - parent.sparew2 - y;
        if (parent.rotation === 2)
            return parent.canvasCtx.canvas.width - parent.sparew2 - x;
        if (parent.rotation === 3)
            return y;
        return 0;
    },
    arotY(parent, x, y) {
        if (parent.rotation === 0)
            return y;
        if (parent.rotation === 1)
            return x;
        if (parent.rotation === 2)
            return parent.canvasCtx.canvas.height - parent.spareh2 - y;
        if (parent.rotation === 3)
            return parent.canvasCtx.canvas.height - parent.spareh - x;
        return 0;
    },
    crotX(parent, x, y) {
        if (parent.rotation === 0)
            return x;
        if (parent.rotation === 1)
            return y;
        if (parent.rotation === 2)
            return parent.canvasCtx.canvas.width - x;
        if (parent.rotation === 3)
            return parent.canvasCtx.canvas.height - y;
        return 0;
    },
    crotY(parent, x, y) {
        if (parent.rotation === 0)
            return y;
        if (parent.rotation === 1)
            return parent.canvasCtx.canvas.width - x;
        if (parent.rotation === 2)
            return parent.canvasCtx.canvas.height - y;
        if (parent.rotation === 3)
            return x;
        return 0;
    },
    rotX(parent, x, y) {
        if (parent.rotation === 0)
            return x;
        if (parent.rotation === 1)
            return x;
        if (parent.rotation === 2)
            return x - parent.canvasCtx.canvas.width;
        if (parent.rotation === 3)
            return x - parent.canvasCtx.canvas.height;
        return 0;
    },
    rotY(parent, x, y) {
        if (parent.rotation === 0)
            return y;
        if (parent.rotation === 1)
            return y - parent.canvasCtx.canvas.width;
        if (parent.rotation === 2)
            return y - parent.canvasCtx.canvas.height;
        if (parent.rotation === 3)
            return y;
        return 0;
    },
    setRotation(parent, x) {
        while (x < 0) {
            x += 4;
        }
        const newrotation = x % 4;
        // console.log('hard-rot: ' + newrotation);
        if (parent.holding) {
            parent.rotation = newrotation;
            return false;
        }
        if (newrotation === parent.rotation)
            return true;
        let rw = parent.canvasCtx.canvas.width;
        let rh = parent.canvasCtx.canvas.height;
        if (parent.rotation === 1 || parent.rotation === 3) {
            rw = parent.canvasCtx.canvas.height;
            rh = parent.canvasCtx.canvas.width;
        }
        // Copy the canvas, put it back in the correct direction
        if (parent.tcanvas == null)
            parent.tcanvas = document.createElement('canvas');
        const tcanvasctx = parent.tcanvas.getContext('2d');
        tcanvasctx.setTransform(1, 0, 0, 1, 0, 0);
        tcanvasctx.canvas.width = rw;
        tcanvasctx.canvas.height = rh;
        tcanvasctx.rotate((parent.rotation * -90) * Math.PI / 180);
        if (parent.rotation === 0)
            tcanvasctx.drawImage(parent.canvasCtx.canvas, 0, 0);
        if (parent.rotation === 1)
            tcanvasctx.drawImage(parent.canvasCtx.canvas, -parent.canvasCtx.canvas.width, 0);
        if (parent.rotation === 2)
            tcanvasctx.drawImage(parent.canvasCtx.canvas, -parent.canvasCtx.canvas.width, -parent.canvasCtx.canvas.height);
        if (parent.rotation === 3)
            tcanvasctx.drawImage(parent.canvasCtx.canvas, 0, -parent.canvasCtx.canvas.height);
        // Change the size and orientation and copy the canvas back into the rotation
        if (parent.rotation === 0 || parent.rotation === 2) {
            parent.canvasCtx.canvas.height = rw;
            parent.canvasCtx.canvas.width = rh;
        }
        if (parent.rotation === 1 || parent.rotation === 3) {
            parent.canvasCtx.canvas.height = rh;
            parent.canvasCtx.canvas.width = rw;
        }
        parent.canvasCtx.setTransform(1, 0, 0, 1, 0, 0);
        parent.canvasCtx.rotate((newrotation * 90) * Math.PI / 180);
        parent.rotation = newrotation;
        parent.canvasCtx.drawImage(parent.tcanvas, ImageHelper.rotX(parent, 0, 0), ImageHelper.rotY(parent, 0, 0));
        parent.width = parent.canvasCtx.canvas.width;
        parent.height = parent.canvasCtx.canvas.height;
        if (parent.onScreenResize != null)
            parent.onScreenResize(parent.width, parent.height, parent.canvasId);
        return true;
    },
    fixColor(c) {
        return (c > 127) ? (c + 32) : c;
    }
};


/***/ }),

/***/ "./src/core/Utilities/KeyboardHelper.ts":
/*!**********************************************!*\
  !*** ./src/core/Utilities/KeyboardHelper.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpDown": () => (/* binding */ UpDown),
/* harmony export */   "KeyBoardHelper": () => (/* binding */ KeyBoardHelper)
/* harmony export */ });
/* harmony import */ var _AMTKeyCodeConverter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AMTKeyCodeConverter */ "./src/core/Utilities/AMTKeyCodeConverter.ts");
/* harmony import */ var _CommsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommsHelper */ "./src/core/Utilities/CommsHelper.ts");
/* harmony import */ var _UtilityMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UtilityMethods */ "./src/core/Utilities/UtilityMethods.ts");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/



var UpDown;
(function (UpDown) {
    UpDown[UpDown["Up"] = 0] = "Up";
    UpDown[UpDown["Down"] = 1] = "Down";
})(UpDown || (UpDown = {}));
/**
 * Provides helper functions to handle keyboard
 */
class KeyBoardHelper {
    constructor(parent, comms) {
        this.Comms = comms;
        this.parent = parent;
    }
    /**
     * Starts grabbing keyboard events on the document object
     */
    GrabKeyInput() {
        if (this.KeyInputGrab) {
            return;
        }
        document.onkeyup = this.handleKeyUp.bind(this);
        document.onkeydown = this.handleKeyDown.bind(this);
        document.onkeypress = this.handleKeys.bind(this);
        this.KeyInputGrab = true;
    }
    /**
     * releases event handlers used for keyboard event handling
     */
    UnGrabKeyInput() {
        if (!this.KeyInputGrab) {
            return;
        }
        document.onkeyup = null;
        document.onkeydown = null;
        document.onkeypress = null;
        this.KeyInputGrab = false;
    }
    handleKeys(e) {
        return this.haltEvent(e);
    }
    /**
     * halts default keyboard event  handling. Since the sole purpose of this event is to send it to the remote desktop
     * @param e keyboard event
     */
    haltEvent(e) {
        if ((0,_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(e.preventDefault)) {
            e.preventDefault();
        }
        if ((0,_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(e.stopPropagation)) {
            e.stopPropagation();
        }
        return false;
    }
    handleKeyUp(e) {
        return this.handleKeyEvent(UpDown.Up, e);
    }
    handleKeyDown(e) {
        return this.handleKeyEvent(UpDown.Down, e);
    }
    handleKeyEvent(d, ke) {
        let e = ke;
        if (!(0,_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(e)) {
            e = window.event;
        }
        if ((0,_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(e.code)) {
            // For new browsers, this mapping is keyboard language independent
            const k = _AMTKeyCodeConverter__WEBPACK_IMPORTED_MODULE_0__.AMTKeyCodeConverter.convertAMTKeyCode(e);
            this.parent.logger.verbose(`Key ${d} : ${String(k)}`);
            if (k != null) {
                _CommsHelper__WEBPACK_IMPORTED_MODULE_1__.CommsHelper.sendKey(this.Comms, k, d);
            }
        }
        else {
            let k = e.keyCode;
            if (k === 173)
                k = 189; // '-' key (Firefox)
            if (k === 61)
                k = 187; // '=' key (Firefox)
            let kk = k;
            if (e.shiftKey === false && k >= 65 && k <= 90)
                kk = k + 32;
            if (k >= 112 && k <= 124)
                kk = k + 0xFF4E;
            if (k === 8)
                kk = 0xff08; // Backspace
            if (k === 9)
                kk = 0xff09; // Tab
            if (k === 13)
                kk = 0xff0d; // Return
            if (k === 16)
                kk = 0xffe1; // Shift (Left)
            if (k === 17)
                kk = 0xffe3; // Ctrl (Left)
            if (k === 18)
                kk = 0xffe9; // Alt (Left)
            if (k === 27)
                kk = 0xff1b; // ESC
            if (k === 33)
                kk = 0xff55; // PageUp
            if (k === 34)
                kk = 0xff56; // PageDown
            if (k === 35)
                kk = 0xff57; // End
            if (k === 36)
                kk = 0xff50; // Home
            if (k === 37)
                kk = 0xff51; // Left
            if (k === 38)
                kk = 0xff52; // Up
            if (k === 39)
                kk = 0xff53; // Right
            if (k === 40)
                kk = 0xff54; // Down
            if (k === 45)
                kk = 0xff63; // Insert
            if (k === 46)
                kk = 0xffff; // Delete
            if (k >= 96 && k <= 105)
                kk = k - 48; // Key pad numbers
            if (k === 106)
                kk = 42; // Pad *
            if (k === 107)
                kk = 43; // Pad +
            if (k === 109)
                kk = 45; // Pad -
            if (k === 110)
                kk = 46; // Pad .
            if (k === 111)
                kk = 47; // Pad /
            if (k === 186)
                kk = 59; // ;
            if (k === 187)
                kk = 61; // =
            if (k === 188)
                kk = 44; // ,
            if (k === 189)
                kk = 45; // -
            if (k === 190)
                kk = 46; // .
            if (k === 191)
                kk = 47; // /
            if (k === 192)
                kk = 96; // `
            if (k === 219)
                kk = 91; // [
            if (k === 220)
                kk = 92; // \
            if (k === 221)
                kk = 93; // ]t
            if (k === 222)
                kk = 39; // '
            this.parent.logger.verbose(`Key ${d}: ${k}  = ${kk}`);
            _CommsHelper__WEBPACK_IMPORTED_MODULE_1__.CommsHelper.sendKey(this.Comms, kk, d);
        }
        return this.haltEvent(e);
    }
}


/***/ }),

/***/ "./src/core/Utilities/MouseHelper.ts":
/*!*******************************************!*\
  !*** ./src/core/Utilities/MouseHelper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseHelper": () => (/* binding */ MouseHelper)
/* harmony export */ });
/* harmony import */ var _Converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Converter */ "./src/core/Converter.ts");
/* harmony import */ var _ImageHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageHelper */ "./src/core/Utilities/ImageHelper.ts");
/* harmony import */ var _UtilityMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UtilityMethods */ "./src/core/Utilities/UtilityMethods.ts");



/**
 * Mousehelper provides helper functions for handling mouse events. mouseup, mousedown, mousemove
 */
class MouseHelper {
    constructor(parent, comm, debounceTime) {
        this.parent = parent;
        this.comm = comm;
        this.debounceTime = debounceTime;
        this.mouseClickCompleted = true;
        this.lastEvent = null;
    }
    GrabMouseInput() {
        if (this.MouseInputGrab)
            return;
        this.MouseInputGrab = true;
    }
    UnGrabMouseInput() {
        if (!this.MouseInputGrab)
            return;
        const c = this.parent.canvasCtx.canvas;
        c.onmousemove = null;
        c.onmouseup = null;
        c.onmousedown = null;
        // if (navigator.userAgent.match(/mozilla/i)) c.DOMMouseScroll = null; else c.onmousewheel = null;
        this.MouseInputGrab = false;
    }
    mousedown(e) {
        this.parent.buttonmask |= (1 << e.button);
        return this.mousemove(e);
    }
    mouseup(e) {
        this.parent.buttonmask &= (0xFFFF - (1 << e.button));
        return this.mousemove(e);
    }
    mousemove(e) {
        if (this.parent.state !== 4)
            return true;
        const pos = this.getPositionOfControl(this.parent.canvasControl);
        this.parent.lastMouseX = (e.pageX - pos[0]) * (this.parent.canvasControl.height / this.parent.canvasControl.offsetHeight);
        this.parent.lastMouseY = ((Number(e.pageY - pos[1]) + ((0,_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.parent.scrolldiv) ? Number(this.parent.scrolldiv.scrollTop) : 0)) * (this.parent.canvasControl.width / this.parent.canvasControl.offsetWidth));
        if (!(0,_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(this.parent.noMouseRotate)) {
            this.parent.lastMouseX2 = _ImageHelper__WEBPACK_IMPORTED_MODULE_1__.ImageHelper.crotX(this.parent, this.parent.lastMouseX, this.parent.lastMouseY);
            this.parent.lastMouseY = _ImageHelper__WEBPACK_IMPORTED_MODULE_1__.ImageHelper.crotY(this.parent, this.parent.lastMouseX, this.parent.lastMouseY);
            this.parent.lastMouseX = this.parent.lastMouseX2;
        }
        this.comm.send(String.fromCharCode(5, this.parent.buttonmask) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr(this.parent.lastMouseX) + _Converter__WEBPACK_IMPORTED_MODULE_0__.TypeConverter.ShortToStr(this.parent.lastMouseY));
        // Update focus area if we are in focus mode
        this.parent.setDeskFocus('DeskFocus', this.parent.focusMode);
        if (this.parent.focusMode !== 0) {
            const x = Math.min(this.parent.lastMouseX, this.parent.canvasControl.width - this.parent.focusMode);
            const y = Math.min(this.parent.lastMouseY, this.parent.canvasControl.height - this.parent.focusMode);
            const df = this.parent.focusMode * 2;
            const c = this.parent.canvasControl;
            const qx = c.offsetHeight / this.parent.canvasControl.height;
            const qy = c.offsetWidth / this.parent.canvasControl.width;
            const q = this.parent.getDeskFocus('DeskFocus');
            const ppos = this.getPositionOfControl(this.parent.canvasControl.parentElement);
            q.left = `${(Math.max(((x - this.parent.focusMode) * qx), 0) + (pos[0] - ppos[0]))}px`;
            q.top = `${(Math.max(((y - this.parent.focusMode) * qy), 0) + (pos[1] - ppos[1]))}px`;
            q.width = `${((df * qx) - 6)}px`;
            q.height = `${((df * qx) - 6)}px`;
        }
        return this.haltEvent(e);
    }
    haltEvent(e) {
        if ((0,_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(e.preventDefault)) {
            e.preventDefault();
        }
        if ((0,_UtilityMethods__WEBPACK_IMPORTED_MODULE_2__.isTruthy)(e.stopPropagation)) {
            e.stopPropagation();
        }
        return false;
    }
    getPositionOfControl(c) {
        const Position = Array(2);
        Position[0] = Position[1] = 0;
        let control = c;
        while (control != null) {
            Position[0] = Number(Position[0]) + Number(control.offsetLeft);
            Position[1] = Number(Position[1]) + Number(control.offsetTop);
            control = control.offsetParent;
        }
        return Position;
    }
}


/***/ }),

/***/ "./src/core/Utilities/UtilityMethods.ts":
/*!**********************************************!*\
  !*** ./src/core/Utilities/UtilityMethods.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTruthy": () => (/* binding */ isTruthy)
/* harmony export */ });
/*********************************************************************
 * Copyright (c) Intel Corporation 2021
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
const isTruthy = (value) => value !== null && value !== undefined && value !== '' && value !== false && value !== 0;


/***/ }),

/***/ "./src/core/Utilities/index.ts":
/*!*************************************!*\
  !*** ./src/core/Utilities/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AMTKeyCodeConverter": () => (/* reexport safe */ _AMTKeyCodeConverter__WEBPACK_IMPORTED_MODULE_0__.AMTKeyCodeConverter),
/* harmony export */   "CommsHelper": () => (/* reexport safe */ _CommsHelper__WEBPACK_IMPORTED_MODULE_1__.CommsHelper),
/* harmony export */   "ImageHelper": () => (/* reexport safe */ _ImageHelper__WEBPACK_IMPORTED_MODULE_2__.ImageHelper),
/* harmony export */   "KeyBoardHelper": () => (/* reexport safe */ _KeyboardHelper__WEBPACK_IMPORTED_MODULE_3__.KeyBoardHelper),
/* harmony export */   "MouseHelper": () => (/* reexport safe */ _MouseHelper__WEBPACK_IMPORTED_MODULE_4__.MouseHelper),
/* harmony export */   "isTruthy": () => (/* reexport safe */ _UtilityMethods__WEBPACK_IMPORTED_MODULE_5__.isTruthy)
/* harmony export */ });
/* harmony import */ var _AMTKeyCodeConverter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AMTKeyCodeConverter */ "./src/core/Utilities/AMTKeyCodeConverter.ts");
/* harmony import */ var _CommsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommsHelper */ "./src/core/Utilities/CommsHelper.ts");
/* harmony import */ var _ImageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageHelper */ "./src/core/Utilities/ImageHelper.ts");
/* harmony import */ var _KeyboardHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeyboardHelper */ "./src/core/Utilities/KeyboardHelper.ts");
/* harmony import */ var _MouseHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MouseHelper */ "./src/core/Utilities/MouseHelper.ts");
/* harmony import */ var _UtilityMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UtilityMethods */ "./src/core/Utilities/UtilityMethods.ts");








/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AMTDesktop": () => (/* reexport safe */ _AMTDesktop__WEBPACK_IMPORTED_MODULE_0__.AMTDesktop),
/* harmony export */   "AMTKvmDataRedirector": () => (/* reexport safe */ _AMTKvmDataRedirector__WEBPACK_IMPORTED_MODULE_1__.AMTKvmDataRedirector),
/* harmony export */   "AMTRedirector": () => (/* reexport safe */ _AMTRedirector__WEBPACK_IMPORTED_MODULE_2__.AMTRedirector),
/* harmony export */   "Protocol": () => (/* reexport safe */ _AMTRedirector__WEBPACK_IMPORTED_MODULE_2__.Protocol),
/* harmony export */   "AmtTerminal": () => (/* reexport safe */ _AMTTerminal__WEBPACK_IMPORTED_MODULE_3__.AmtTerminal),
/* harmony export */   "ConsoleLogger": () => (/* reexport safe */ _ConsoleLogger__WEBPACK_IMPORTED_MODULE_4__.ConsoleLogger),
/* harmony export */   "TypeConverter": () => (/* reexport safe */ _Converter__WEBPACK_IMPORTED_MODULE_5__.TypeConverter),
/* harmony export */   "Desktop": () => (/* reexport safe */ _Desktop__WEBPACK_IMPORTED_MODULE_6__.Desktop),
/* harmony export */   "StateProcessorFactory": () => (/* reexport safe */ _StateProcessorFactory__WEBPACK_IMPORTED_MODULE_7__.StateProcessorFactory),
/* harmony export */   "TerminalDataProcessor": () => (/* reexport safe */ _TerminalDataProcessor__WEBPACK_IMPORTED_MODULE_8__.TerminalDataProcessor),
/* harmony export */   "LogLevel": () => (/* reexport safe */ _Interfaces__WEBPACK_IMPORTED_MODULE_9__.LogLevel),
/* harmony export */   "DataProcessor": () => (/* reexport safe */ _ImageData__WEBPACK_IMPORTED_MODULE_10__.DataProcessor),
/* harmony export */   "RLEDecoder": () => (/* reexport safe */ _ImageData__WEBPACK_IMPORTED_MODULE_10__.RLEDecoder),
/* harmony export */   "Encoding": () => (/* reexport safe */ _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_11__.Encoding),
/* harmony export */   "FrameBufferBellServerCutText": () => (/* reexport safe */ _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_11__.FrameBufferBellServerCutText),
/* harmony export */   "HandshakeState": () => (/* reexport safe */ _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_11__.HandshakeState),
/* harmony export */   "SecurityOptions": () => (/* reexport safe */ _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_11__.SecurityOptions),
/* harmony export */   "SecurityResponse": () => (/* reexport safe */ _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_11__.SecurityResponse),
/* harmony export */   "ServerInit": () => (/* reexport safe */ _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_11__.ServerInit),
/* harmony export */   "AMTKeyCodeConverter": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_12__.AMTKeyCodeConverter),
/* harmony export */   "CommsHelper": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_12__.CommsHelper),
/* harmony export */   "ImageHelper": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_12__.ImageHelper),
/* harmony export */   "KeyBoardHelper": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_12__.KeyBoardHelper),
/* harmony export */   "MouseHelper": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_12__.MouseHelper),
/* harmony export */   "isTruthy": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_12__.isTruthy)
/* harmony export */ });
/* harmony import */ var _AMTDesktop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AMTDesktop */ "./src/core/AMTDesktop.ts");
/* harmony import */ var _AMTKvmDataRedirector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AMTKvmDataRedirector */ "./src/core/AMTKvmDataRedirector.ts");
/* harmony import */ var _AMTRedirector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AMTRedirector */ "./src/core/AMTRedirector.ts");
/* harmony import */ var _AMTTerminal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AMTTerminal */ "./src/core/AMTTerminal.ts");
/* harmony import */ var _ConsoleLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConsoleLogger */ "./src/core/ConsoleLogger.ts");
/* harmony import */ var _Converter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Converter */ "./src/core/Converter.ts");
/* harmony import */ var _Desktop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Desktop */ "./src/core/Desktop.ts");
/* harmony import */ var _StateProcessorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StateProcessorFactory */ "./src/core/StateProcessorFactory.ts");
/* harmony import */ var _TerminalDataProcessor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TerminalDataProcessor */ "./src/core/TerminalDataProcessor.ts");
/* harmony import */ var _Interfaces__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Interfaces */ "./src/core/Interfaces/index.ts");
/* harmony import */ var _ImageData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImageData */ "./src/core/ImageData/index.ts");
/* harmony import */ var _RFBStateProcessors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RFBStateProcessors */ "./src/core/RFBStateProcessors/index.ts");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Utilities */ "./src/core/Utilities/index.ts");















/***/ }),

/***/ "./src/reactjs/components/KVM/ConnectButton.tsx":
/*!******************************************************!*\
  !*** ./src/reactjs/components/KVM/ConnectButton.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectButton": () => (/* binding */ ConnectButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConnectButton_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectButton.scss */ "./src/reactjs/components/KVM/ConnectButton.scss");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/


class ConnectButton extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "button", onClick: this.props.handleConnectClick }, this.props.kvmstate === 1 ? 'Connecting KVM' : (this.props.kvmstate === 2 ? 'Disconnect KVM' : 'Connect KVM')));
    }
}


/***/ }),

/***/ "./src/reactjs/components/KVM/DesktopSettings.tsx":
/*!********************************************************!*\
  !*** ./src/reactjs/components/KVM/DesktopSettings.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesktopSettings": () => (/* binding */ DesktopSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EncodingOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EncodingOptions */ "./src/reactjs/components/KVM/EncodingOptions.tsx");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/


class DesktopSettings extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    constructor(props) {
        super(props);
        this.desktopsettings = {
            encoding: 1
        };
        this.changeEncoding = this.changeEncoding.bind(this);
    }
    changeEncoding(encoding) {
        this.desktopsettings.encoding = encoding;
        this.props.changeDesktopSettings(this.desktopsettings);
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EncodingOptions__WEBPACK_IMPORTED_MODULE_1__.EncodingOptions, { changeEncoding: this.changeEncoding, getConnectState: this.props.getConnectState }));
    }
}


/***/ }),

/***/ "./src/reactjs/components/KVM/EncodingOptions.tsx":
/*!********************************************************!*\
  !*** ./src/reactjs/components/KVM/EncodingOptions.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncodingOptions": () => (/* binding */ EncodingOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EncodingOptions_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EncodingOptions.scss */ "./src/reactjs/components/KVM/EncodingOptions.scss");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/


class EncodingOptions extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
        this.onEncodingChange = this.onEncodingChange.bind(this);
    }
    onEncodingChange(e) {
        // e.persist();
        this.setState({ value: e.target.value });
        this.props.changeEncoding(e.target.value);
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "encoding" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Encoding:"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { value: this.state.value, className: this.props.getConnectState() === 2 ? 'reldisabled' : '', onChange: this.onEncodingChange, disabled: this.props.getConnectState() === 2 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "1" }, "RLE 8"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "2" }, "RLE 16"))));
    }
}


/***/ }),

/***/ "./src/reactjs/components/KVM/Header.tsx":
/*!***********************************************!*\
  !*** ./src/reactjs/components/KVM/Header.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConnectButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectButton */ "./src/reactjs/components/KVM/ConnectButton.tsx");
/* harmony import */ var _DesktopSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesktopSettings */ "./src/reactjs/components/KVM/DesktopSettings.tsx");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.scss */ "./src/reactjs/components/KVM/Header.scss");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/




class Header extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "header" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ConnectButton__WEBPACK_IMPORTED_MODULE_1__.ConnectButton, { handleConnectClick: this.props.handleConnectClick, kvmstate: this.props.kvmstate }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DesktopSettings__WEBPACK_IMPORTED_MODULE_2__.DesktopSettings, { changeDesktopSettings: this.props.changeDesktopSettings, getConnectState: this.props.getConnectState }))));
    }
}


/***/ }),

/***/ "./src/reactjs/components/KVM/PureCanvas.tsx":
/*!***************************************************!*\
  !*** ./src/reactjs/components/KVM/PureCanvas.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PureCanvas": () => (/* binding */ PureCanvas)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Utilities */ "./src/reactjs/components/shared/Utilities.ts");
/* harmony import */ var _PureCanvas_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PureCanvas.scss */ "./src/reactjs/components/KVM/PureCanvas.scss");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/



class PureCanvas extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        const canvasAttributes = {
            width: '1366',
            height: '768',
            onContextMenu: (e) => { e.preventDefault(); return false; },
            onMouseDown: this.props.mouseDown,
            onMouseUp: this.props.mouseUp,
            onMouseMove: this.props.mouseMove
        };
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", Object.assign({}, canvasAttributes, { className: "canvas", ref: (c) => (0,_shared_Utilities__WEBPACK_IMPORTED_MODULE_1__.isFalsy)(c) ? this.props.contextRef(c.getContext('2d')) : null })));
    }
}


/***/ }),

/***/ "./src/reactjs/components/shared/Utilities.ts":
/*!****************************************************!*\
  !*** ./src/reactjs/components/shared/Utilities.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "joinClasses": () => (/* binding */ joinClasses),
/* harmony export */   "prepareHeaders": () => (/* binding */ prepareHeaders),
/* harmony export */   "isFalsy": () => (/* binding */ isFalsy)
/* harmony export */ });
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
/** utility function to join the css class names */
const joinClasses = (...classNames) => classNames
    .filter((name) => !!isFalsy(name))
    .join(' ')
    .trim();
const prepareHeaders = () => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };
    return headers;
};
const isFalsy = (value) => value !== null && value !== undefined && value !== '' && value !== false && value !== 0;


/***/ }),

/***/ "./src/core/zlib/zlib.js":
/*!*******************************!*\
  !*** ./src/core/zlib/zlib.js ***!
  \*******************************/
/***/ ((module) => {

/* zlib.js -- JavaScript implementation for the zlib.
  Version: 0.2.0
  LastModified: Apr 12 2012
  Copyright (C) 2012 Masanao Izumo <iz@onicos.co.jp>

  The original copyright notice (zlib 1.2.6):

  Copyright (C) 1995-2012 Jean-loup Gailly and Mark Adler

  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.

  Jean-loup Gailly        Mark Adler
  jloup@gzip.org          madler@alumni.caltech.edu


  The data format used by the zlib library is described by RFCs (Request for
  Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
  (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/

var ZLIB = ( ZLIB || {} ); // ZLIB namespace initialization

// common definitions
if(typeof ZLIB.common_initialized === 'undefined') {
    ZLIB.Z_NO_FLUSH      = 0;
    ZLIB.Z_PARTIAL_FLUSH = 1;
    ZLIB.Z_SYNC_FLUSH    = 2;
    ZLIB.Z_FULL_FLUSH    = 3;
    ZLIB.Z_FINISH        = 4;
    ZLIB.Z_BLOCK         = 5;
    ZLIB.Z_TREES         = 6;
    /* Allowed flush values; see deflate() and inflate() below for details */

    ZLIB.Z_OK           =  0;
    ZLIB.Z_STREAM_END   =  1;
    ZLIB.Z_NEED_DICT    =  2;
    ZLIB.Z_ERRNO        = (-1);
    ZLIB.Z_STREAM_ERROR = (-2);
    ZLIB.Z_DATA_ERROR   = (-3);
    ZLIB.Z_MEM_ERROR    = (-4);
    ZLIB.Z_BUF_ERROR    = (-5);
    ZLIB.Z_VERSION_ERROR = (-6);
    /* Return codes for the compression/decompression functions. Negative values
     * are errors, positive values are used for special but normal events.
     */

    ZLIB.Z_DEFLATED = 8; /* The deflate compression method (the only one supported in this version) */

    /**
	 * z_stream constructor
	 * @constructor
	 */
	ZLIB.z_stream = function() {
			this.next_in = 0;        /* next input byte */
			this.avail_in = 0;       /* number of bytes available in input_data */
			this.total_in = 0;       /* total number of input bytes read so far */

			this.next_out = 0;       /* next output byte */
			this.avail_out = 0;      /* remaining free space at next_out */
			this.total_out = 0;      /* total number of bytes output so far */

			this.msg = null;         /* last error message, null if no error */
			this.state = null;       /* not visible by applications */

			this.data_type = 0;      /* best guess about the data type: binary or text */
			this.adler = 0;          /* TODO: adler32 value of the uncompressed data */

			// zlib.js
			this.input_data = '';    /* input data */
			this.output_data = '';   /* output data */
			this.error = 0;          /* error code */
			this.checksum_function = null; /* crc32(for gzip) or adler32(for zlib) */
	};

    /**
	 * TODO
	 * @constructor
	 */
	ZLIB.gz_header = function() {
		this.text = 0;      /* true if compressed data believed to be text */
	    this.time = 0;      /* modification time */
		this.xflags = 0;    /* extra flags (not used when writing a gzip file) */
		this.os = 0xff;     /* operating system */
		this.extra = null;  /* extra field string or null if none */
		this.extra_len = 0; /* this.extra.length (only when reading header) */
		this.extra_max = 0; /* space at extra (only when reading header) */
		this.name = null;   /* file name string or null if none */
		this.name_max = 0;  /* space at name (only when reading header) */
		this.comment = null; /* comment string or null if none */
		this.comm_max = 0;  /* space at comment (only when reading header) */
		this.hcrc = 0;      /* true if there was or will be a header crc */
		this.done = 0;      /* true when done reading gzip header (not used
							   when writing a gzip file) */
	};

	ZLIB.common_initialized = true;
} // common definitions
/* zlib-inflate.js -- JavaScript implementation for the zlib inflate.
  Version: 0.2.0
  LastModified: Apr 12 2012
  Copyright (C) 2012 Masanao Izumo <iz@onicos.co.jp>

  This library is one of the JavaScript zlib implementation.
  Some API's are modified from the original.
  Only inflate API is implemented.

  The original copyright notice (zlib 1.2.6):

  Copyright (C) 1995-2012 Jean-loup Gailly and Mark Adler

  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.

  Jean-loup Gailly        Mark Adler
  jloup@gzip.org          madler@alumni.caltech.edu


  The data format used by the zlib library is described by RFCs (Request for
  Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
  (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/

/*
                       API documentation
==============================================================================
Usage: z_stream = ZLIB.inflateInit([windowBits]);

     Create the stream object for decompression.
     See zlib.h for windowBits information.

==============================================================================
Usage: decoded_string = z_stream.inflate(encoded_string [, {OPTIONS...}]);

OPTIONS:
    next_in: decode start offset for encoded_string.

    avail_in: // TODO document.  See zlib.h for the information.

    avail_out: // TODO document.  See zlib.h for the information.

    flush: // TODO document.  See zlib.h for the information.

Ex: decoded_string = z_stream.inflate(encoded_string);
    decoded_string = z_stream.inflate(encoded_string,
                         {next_in: 0,
                          avail_in: encoded_string.length,
                          avail_out: 1024,
                          flush: ZLIB.Z_NO_FLUSH});

     See zlib.h for more information.

==============================================================================
Usage: z_stream.inflateReset();
    TODO document

*/

if( typeof ZLIB === 'undefined' ) {
    alert('ZLIB is not defined.  SRC zlib.js before zlib-inflate.js')
}

(function() {

/* inflate.c -- zlib decompression
 * Copyright (C) 1995-2011 Mark Adler
 * For conditions of distribution and use, see copyright notice in zlib.h
 */

var DEF_WBITS = 15;

// inflate_mode
var HEAD     =  0; /* i: waiting for magic header */
var FLAGS    =  1; /* i: waiting for method and flags (gzip) */
var TIME     =  2; /* i: waiting for modification time (gzip) */
var OS       =  3; /* i: waiting for extra flags and operating system (gzip) */
var EXLEN    =  4; /* i: waiting for extra length (gzip) */
var EXTRA    =  5; /* i: waiting for extra bytes (gzip) */
var NAME     =  6; /* i: waiting for end of file name (gzip) */
var COMMENT  =  7; /* i: waiting for end of comment (gzip) */
var HCRC     =  8; /* i: waiting for header crc (gzip) */
var DICTID   =  9; /* i: waiting for dictionary check value */
var DICT     = 10; /* waiting for inflateSetDictionary() call */
var TYPE     = 11; /* i: waiting for type bits, including last-flag bit */
var TYPEDO   = 12; /* i: same, but skip check to exit inflate on new block */
var STORED   = 13; /* i: waiting for stored size (length and complement) */
var COPY_    = 14; /* i/o: same as COPY below, but only first time in */
var COPY     = 15; /* i/o: waiting for input or output to copy stored block */
var TABLE    = 16; /* i: waiting for dynamic block table lengths */
var LENLENS  = 17; /* i: waiting for code length code lengths */
var CODELENS = 18; /* i: waiting for length/lit and distance code lengths */
var LEN_     = 19; /* i: same as LEN below, but only first time in */
var LEN      = 20; /* i: waiting for length/lit/eob code */
var LENEXT   = 21; /* i: waiting for length extra bits */
var DIST     = 22; /* i: waiting for distance code */
var DISTEXT  = 23; /* i: waiting for distance extra bits */
var MATCH    = 24; /* o: waiting for output space to copy string */
var LIT      = 25; /* o: waiting for output space to write literal */
var CHECK    = 26; /* i: waiting for 32-bit check value */
var LENGTH   = 27; /* i: waiting for 32-bit length (gzip) */
var DONE     = 28; /* finished check, done -- remain here until reset */
var BAD      = 29; /* got a data error -- remain here until reset */
var MEM      = 30; /* got an inflate() memory error -- remain here until reset */
var SYNC     = 31; /* looking for synchronization bytes to restart inflate() */

/* Maximum size of the dynamic table.  The maximum number of code structures is
   1444, which is the sum of 852 for literal/length codes and 592 for distance
   codes.  These values were found by exhaustive searches using the program
   examples/enough.c found in the zlib distribtution.  The arguments to that
   program are the number of symbols, the initial root table size, and the
   maximum bit length of a code.  "enough 286 9 15" for literal/length codes
   returns returns 852, and "enough 30 6 15" for distance codes returns 592.
   The initial root table size (9 or 6) is found in the fifth argument of the
   inflate_table() calls in inflate.c and infback.c.  If the root table size is
   changed, then these maximum sizes would be need to be recalculated and
   updated. */
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
var ENOUGH = (ENOUGH_LENS + ENOUGH_DISTS);

/* Type of code to build for inflate_table() */
var CODES = 0;
var LENS = 1;
var DISTS = 2;



var inflate_table_lbase = [ /* Length codes 257..285 base */
    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
    35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
var inflate_table_lext = [ /* Length codes 257..285 extra */
    16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
    19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 203, 69];
var inflate_table_dbase = [ /* Distance codes 0..29 base */
    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
    257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
    8193, 12289, 16385, 24577, 0, 0];
var inflate_table_dext = [ /* Distance codes 0..29 extra */
    16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
    23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
    28, 28, 29, 29, 64, 64];

/* inftrees.c -- generate Huffman trees for efficient decoding
 * Copyright (C) 1995-2012 Mark Adler
 * For conditions of distribution and use, see copyright notice in zlib.h
 */

ZLIB.inflate_copyright =
   ' inflate 1.2.6 Copyright 1995-2012 Mark Adler ';
/*
  If you use the zlib library in a product, an acknowledgment is welcome
  in the documentation of your product. If for some reason you cannot
  include such an acknowledgment, I would appreciate that you keep this
  copyright string in the executable of your product.
 */

/*
  Build a set of tables to decode the provided canonical Huffman code.
  The code lengths are lens[0..codes-1].  The result starts at *table,
  whose indices are 0..2^bits-1.  work is a writable array of at least
  lens shorts, which is used as a work area.  type is the type of code
  to be generated, CODES, LENS, or DISTS.  On return, zero is success,
  -1 is an invalid code, and +1 means that ENOUGH isn't enough.  table
  on return points to the next available entry's address.  bits is the
  requested root table index bits, and on return it is the actual root
  table index bits.  It will differ if the request is greater than the
  longest code or if it is less than the shortest code.
*/
function inflate_table(state, type)
{
    var MAXBITS = 15;
    var table = state.next;
    var bits = (type == DISTS ? state.distbits : state.lenbits);
    var work = state.work;
    var lens = state.lens;
    var lens_offset = (type == DISTS ? state.nlen : 0);
    var state_codes = state.codes;
    var codes;
    if(type == LENS)
        codes = state.nlen;
    else if(type == DISTS)
        codes = state.ndist;
    else // CODES
        codes = 19;

    var len;               /* a code's length in bits */
    var sym;               /* index of code symbols */
    var min, max;          /* minimum and maximum code lengths */
    var root;              /* number of index bits for root table */
    var curr;              /* number of index bits for current table */
    var drop;              /* code bits to drop for sub-table */
    var left;              /* number of prefix codes available */
    var used;              /* code entries in table used */
    var huff;              /* Huffman code */
    var incr;              /* for incrementing code, index */
    var fill;              /* index for replicating entries */
    var low;               /* low bits for current root entry */
    var mask;              /* mask for low root bits */
    var here;              /* table entry for duplication */
    var next;              /* next available space in table */
    var base;              /* base value table to use */
    var base_offset;
    var extra;             /* extra bits table to use */
    var extra_offset;
    var end;                    /* use base and extra for symbol > end */
    var count = new Array(MAXBITS+1);    /* number of codes of each length */
    var offs = new Array(MAXBITS+1);     /* offsets in table for each length */

    /*
      Process a set of code lengths to create a canonical Huffman code.  The
      code lengths are lens[0..codes-1].  Each length corresponds to the
      symbols 0..codes-1.  The Huffman code is generated by first sorting the
      symbols by length from short to long, and retaining the symbol order
      for codes with equal lengths.  Then the code starts with all zero bits
      for the first code of the shortest length, and the codes are integer
      increments for the same length, and zeros are appended as the length
      increases.  For the deflate format, these bits are stored backwards
      from their more natural integer increment ordering, and so when the
      decoding tables are built in the large loop below, the integer codes
      are incremented backwards.

      This routine assumes, but does not check, that all of the entries in
      lens[] are in the range 0..MAXBITS.  The caller must assure this.
      1..MAXBITS is interpreted as that code length.  zero means that that
      symbol does not occur in this code.

      The codes are sorted by computing a count of codes for each length,
      creating from that a table of starting indices for each length in the
      sorted table, and then entering the symbols in order in the sorted
      table.  The sorted table is work[], with that space being provided by
      the caller.

      The length counts are used for other purposes as well, i.e. finding
      the minimum and maximum length codes, determining if there are any
      codes at all, checking for a valid set of lengths, and looking ahead
      at length counts to determine sub-table sizes when building the
      decoding tables.
    */

    /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
    for (len = 0; len <= MAXBITS; len++)
        count[len] = 0;
    for (sym = 0; sym < codes; sym++)
        count[lens[lens_offset + sym]]++;

    /* bound code lengths, force root to be within code lengths */
    root = bits;

    for (max = MAXBITS; max >= 1; max--)
        if (count[max] != 0) break;
    if (root > max) root = max;
    if (max == 0) {
        /* no symbols to code at all */
        /* invalid code marker */
        here = {op:64, bits:1, val:0};
        state_codes[table++] = here; /* make a table to force an error */
        state_codes[table++] = here;
        if(type == DISTS) state.distbits = 1; else state.lenbits = 1; // *bits = 1;
        state.next = table;
        return 0;     /* no symbols, but wait for decoding to report error */
    }
    for (min = 1; min < max; min++)
        if (count[min] != 0) break;
    if (root < min) root = min;

    /* check for an over-subscribed or incomplete set of lengths */
    left = 1;
    for (len = 1; len <= MAXBITS; len++) {
        left <<= 1;
        left -= count[len];
        if (left < 0) return -1;        /* over-subscribed */
    }
    if (left > 0 && (type == CODES || max != 1)) {
        state.next = table;
        return -1;                      /* incomplete set */
    }

    /* generate offsets into symbol table for each length for sorting */
    offs[1] = 0;
    for (len = 1; len < MAXBITS; len++)
        offs[len + 1] = offs[len] + count[len];

    /* sort symbols by length, by symbol order within each length */
    for (sym = 0; sym < codes; sym++)
        if (lens[lens_offset + sym] != 0) work[offs[lens[lens_offset + sym]]++] = sym;

    /*
      Create and fill in decoding tables.  In this loop, the table being
      filled is at next and has curr index bits.  The code being used is huff
      with length len.  That code is converted to an index by dropping drop
      bits off of the bottom.  For codes where len is less than drop + curr,
      those top drop + curr - len bits are incremented through all values to
      fill the table with replicated entries.

      root is the number of index bits for the root table.  When len exceeds
      root, sub-tables are created pointed to by the root entry with an index
      of the low root bits of huff.  This is saved in low to check for when a
      new sub-table should be started.  drop is zero when the root table is
      being filled, and drop is root when sub-tables are being filled.

      When a new sub-table is needed, it is necessary to look ahead in the
      code lengths to determine what size sub-table is needed.  The length
      counts are used for this, and so count[] is decremented as codes are
      entered in the tables.

      used keeps track of how many table entries have been allocated from the
      provided *table space.  It is checked for LENS and DIST tables against
      the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
      the initial root table size constants.  See the comments in inftrees.h
      for more information.

      sym increments through all symbols, and the loop terminates when
      all codes of length max, i.e. all codes, have been processed.  This
      routine permits incomplete codes, so another loop after this one fills
      in the rest of the decoding tables with invalid code markers.
    */

    /* set up for code type */
    switch (type) {
    case CODES:
        base = extra = work;    /* dummy value--not used */
        base_offset = 0;
        extra_offset = 0;
        end = 19;
        break;
    case LENS:
        base = inflate_table_lbase;
        base_offset = -257; // base -= 257;
        extra = inflate_table_lext;
        extra_offset = -257; // extra -= 257;
        end = 256;
        break;
    default:            /* DISTS */
        base = inflate_table_dbase;
        extra = inflate_table_dext;
        base_offset = 0;
        extra_offset = 0;
        end = -1;
    }

    /* initialize state for loop */
    huff = 0;                   /* starting code */
    sym = 0;                    /* starting code symbol */
    len = min;                  /* starting code length */
    next = table;               /* current table to fill in */
    curr = root;                /* current table index bits */
    drop = 0;                   /* current bits to drop from code for index */
    low = -1;                   /* trigger new sub-table when len > root */
    used = 1 << root;           /* use root table entries */
    mask = used - 1;            /* mask for comparing low */

    /* check available table space */
    if ((type == LENS && used >= ENOUGH_LENS) ||
        (type == DISTS && used >= ENOUGH_DISTS)) {
        state.next = table;
        return 1;
    }

    /* process all codes and make table entries */
    for (;;) {
        /* create table entry */
        here = {op:0, bits:len - drop, val:0};
        if (work[sym] < end) {
            here.val = work[sym];
        }
        else if (work[sym] > end) {
            here.op = extra[extra_offset + work[sym]];
            here.val = base[base_offset + work[sym]];
        }
        else {
            here.op = 32 + 64;         /* end of block */
        }

        /* replicate for those indices with low len bits equal to huff */
        incr = 1 << (len - drop);
        fill = 1 << curr;
        min = fill;                 /* save offset to next table */
        do {
            fill -= incr;
            state_codes[next + (huff >>> drop) + fill] = here;
        } while (fill != 0);

        /* backwards increment the len-bit code huff */
        incr = 1 << (len - 1);
        while (huff & incr)
            incr >>>= 1;
        if (incr != 0) {
            huff &= incr - 1;
            huff += incr;
        }
        else
            huff = 0;

        /* go to next symbol, update count, len */
        sym++;
        if (--(count[len]) == 0) {
            if (len == max) break;
            len = lens[lens_offset + work[sym]];
        }

        /* create new sub-table if needed */
        if (len > root && (huff & mask) != low) {
            /* if first time, transition to sub-tables */
            if (drop == 0)
                drop = root;

            /* increment past last table */
            next += min;            /* here min is 1 << curr */

            /* determine length of next table */
            curr = len - drop;
            left = (1 << curr);
            while (curr + drop < max) {
                left -= count[curr + drop];
                if (left <= 0) break;
                curr++;
                left <<= 1;
            }

            /* check for enough space */
            used += 1 << curr;
            if ((type == LENS && used >= ENOUGH_LENS) ||
                (type == DISTS && used >= ENOUGH_DISTS)) {
                state.next = table;
                return 1;
            }

            /* point entry in root table to sub-table */
            low = huff & mask;
            state_codes[table + low] = {op:curr, bits:root, val:next - table};
        }
    }

    /* fill in remaining table entry if code is incomplete (guaranteed to have
       at most one remaining entry, since if the code is incomplete, the
       maximum code length that was allowed to get this far is one bit) */
    if (huff != 0) {
        state_codes[next + huff] = {op:64, bits:len - drop, val:0};
    }

    /* set return parameters */
    state.next = table + used;
    if(type == DISTS) state.distbits = root; else state.lenbits = root; //*bits = root;
    return 0;
}

/* inffast.c -- fast decoding
 * Copyright (C) 1995-2008, 2010 Mark Adler
 * For conditions of distribution and use, see copyright notice in zlib.h
 */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state->mode == LEN
        strm->avail_in >= 6
        strm->avail_out >= 258
        start >= strm->avail_out
        state->bits < 8

   On return, state->mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm->avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm->avail_out >= 258 for each loop to avoid checking for
      output space.
 */
function inflate_fast(strm,
                      start) /* inflate()'s starting value for strm->avail_out */
{
    var state;
    var input_data;      /* local strm->input_data */
    var next_in;      /* zlib.js: index of input_data */
    var last;    /* while next_in < last, enough input available */
    var out;     /* local strm.next_out */
    var beg;     /* inflate()'s initial strm.next_out */
    var end;     /* while out < end, enough space available */
//NOSPRT #ifdef INFLATE_STRICT
//    unsigned dmax;              /* maximum distance from zlib header */
//#endif
    var wsize;             /* window size or zero if not using window */
    var whave;             /* valid bytes in the window */
    var wnext;             /* window write index */
    var window;  /* allocated sliding window, if wsize != 0 */
    var hold;         /* local strm->hold */
    var bits;              /* local strm->bits */
    var codes;             /* zlib.js: local state.codes */
    var lcode;      /* local strm->lencode */
    var dcode;      /* local strm->distcode */
    var lmask;             /* mask for first level of length codes */
    var dmask;             /* mask for first level of distance codes */
    var here;                  /* retrieved table entry */
    var op;                /* code bits, operation, extra bits, or */
    /*  window position, window bytes to copy */
    var len;               /* match length, unused bytes */
    var dist;              /* match distance */
    //    var from;    /* where to copy match from */
    var from_window_offset = -1; /* index of window[] */
    var from_out_offset = -1; /* index of next_out[] */

    /* copy state to local variables */
    state = strm.state;
    input_data = strm.input_data;
    next_in = strm.next_in;
    last = next_in + strm.avail_in - 5;
    out = strm.next_out;
    beg = out - (start - strm.avail_out);
    end = out + (strm.avail_out - 257);
//NOSPRT #ifdef INFLATE_STRICT
//    dmax = state->dmax;
//#endif
    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    window = state.window;
    hold = state.hold;
    bits = state.bits;
    codes = state.codes;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;

    /* decode literals and length/distances until end-of-block or not enough
       input data or output space */
loop: do {
        if (bits < 15) {
            hold += (input_data.charCodeAt(next_in++) & 0xff) << bits;
            bits += 8;
            hold += (input_data.charCodeAt(next_in++) & 0xff) << bits;
            bits += 8;
        }
        here = codes[lcode + (hold & lmask)];
    dolen: while(true) {
            op = here.bits;
            hold >>>= op;
            bits -= op;
            op = here.op;
            if (op == 0) {                          /* literal */
//            Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
//                    "inflate:         literal '%c'\n" :
//                    "inflate:         literal 0x%02x\n", here.val));
                strm.output_data += String.fromCharCode(here.val);
                out++;
            }
            else if (op & 16) {                     /* length base */
                len = here.val;
                op &= 15;                           /* number of extra bits */
                if (op) {
                    if (bits < op) {
                        hold += (input_data.charCodeAt(next_in++) & 0xff) << bits;
                        bits += 8;
                    }
                    len += hold & ((1 << op) - 1);
                    hold >>>= op;
                    bits -= op;
                }
//            Tracevv((stderr, "inflate:         length %u\n", len));
                if (bits < 15) {
                    hold += (input_data.charCodeAt(next_in++) & 0xff) << bits;
                    bits += 8;
                    hold += (input_data.charCodeAt(next_in++) & 0xff) << bits;
                    bits += 8;
                }
                here = codes[dcode + (hold & dmask)];
            dodist: while(true) {
                    op = here.bits;
                    hold >>>= op;
                    bits -= op;
                    op = here.op;
                    if (op & 16) {                      /* distance base */
                        dist = here.val;
                        op &= 15;                       /* number of extra bits */
                        if (bits < op) {
                            hold += (input_data.charCodeAt(next_in++) & 0xff) << bits;
                            bits += 8;
                            if (bits < op) {
                                hold += (input_data.charCodeAt(next_in++) & 0xff) << bits;
                                bits += 8;
                            }
                        }
                        dist += hold & ((1 << op) - 1);
//NOSPRT #ifdef INFLATE_STRICT
//                if (dist > dmax) {
//                    strm->msg = (char *)"invalid distance too far back";
//                    state->mode = BAD;
//                    break loop;
//                }
//#endif
                        hold >>>= op;
                        bits -= op;
//                Tracevv((stderr, "inflate:         distance %u\n", dist));
                        op = out - beg;                 /* max distance in output */
                        if (dist > op) {                /* see if copy from window */
                            op = dist - op;             /* distance back in window */
                            if (op > whave) {
                                if (state.sane) {
                                    strm.msg = 'invalid distance too far back';
                                    state.mode = BAD;
                                    break loop;
                                }
//NOSPRT #ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                        if (len <= op - whave) {
//                            do {
//                                PUP(out) = 0;
//                            } while (--len);
//                            continue;
//                        }
//                        len -= op - whave;
//                        do {
//                            PUP(out) = 0;
//                        } while (--op > whave);
//                        if (op == 0) {
//                            from = out - dist;
//                            do {
//                                PUP(out) = PUP(from);
//                            } while (--len);
//                            continue;
//                        }
//#endif
                            } // if (op > whave)

                            from_window_offset = 0;
                            from_out_offset = -1;
							if (wnext == 0) {           /* very common case */
								from_window_offset += wsize - op;
								if (op < len) {         /* some from window */
									len -= op;
									strm.output_data += window.substring(from_window_offset, from_window_offset + op);
									out += op;
									op = 0;
									from_window_offset = -1;
									from_out_offset = out - dist;  /* rest from output */
								}
							}
//NOTREACHED else if (wnext < op) {      /* wrap around window */
//NOTREACHED     from += wsize + wnext - op;
//NOTREACHED     op -= wnext;
//NOTREACHED     if (op < len) {         /* some from end of window */
//NOTREACHED         len -= op;
//NOTREACHED         do {
//NOTREACHED             PUP(out) = PUP(from);
//NOTREACHED         } while (--op);
//NOTREACHED         from = window - OFF;
//NOTREACHED         if (wnext < len) {  /* some from start of window */
//NOTREACHED             op = wnext;
//NOTREACHED             len -= op;
//NOTREACHED             do {
//NOTREACHED                 PUP(out) = PUP(from);
//NOTREACHED             } while (--op);
//NOTREACHED             from = out - dist;      /* rest from output */
//NOTREACHED         }
//NOTREACHED     }
//NOTREACHED }
							else {                      /* contiguous in window */
								from_window_offset += wnext - op;
								if (op < len) {         /* some from window */
									len -= op;
									strm.output_data += window.substring(from_window_offset, from_window_offset + op);
									out += op;
									from_window_offset = -1;
									from_out_offset = out - dist;  /* rest from output */
								}
							}
                        }
                        else {
                            from_window_offset = -1;
                            from_out_offset = out - dist;          /* copy direct from output */
                        }

                        if (from_window_offset >= 0) {
                            strm.output_data += window.substring(from_window_offset, from_window_offset + len);
                            out += len;
                            from_window_offset += len;
                        } else {
                            var len_inner = len;
                            if(len_inner > out - from_out_offset)
                              len_inner = out - from_out_offset;
                            strm.output_data += strm.output_data.substring(
                                from_out_offset, from_out_offset + len_inner);
                            out += len_inner;
                            len -= len_inner;
                            from_out_offset += len_inner;
                            out += len;
                            while (len > 2) {
                                strm.output_data += strm.output_data.charAt(from_out_offset++);
                                strm.output_data += strm.output_data.charAt(from_out_offset++);
                                strm.output_data += strm.output_data.charAt(from_out_offset++);
                                len -= 3;
                            }
                            if (len) {
                                strm.output_data += strm.output_data.charAt(from_out_offset++);
                                if (len > 1)
                                    strm.output_data += strm.output_data.charAt(from_out_offset++);
                            }
                        }
                    }
                    else if ((op & 64) == 0) {          /* 2nd level distance code */
                        here = codes[dcode + (here.val + (hold & ((1 << op) - 1)))];
                        continue dodist; // goto dodist
                    }
                    else {
                        strm.msg = 'invalid distance code';
                        state.mode = BAD;
                        break loop;
                    }
                    break dodist; }
            }
            else if ((op & 64) == 0) {              /* 2nd level length code */
                here = codes[lcode + (here.val + (hold & ((1 << op) - 1)))];
                continue dolen; // goto dolen;
            }
            else if (op & 32) {                     /* end-of-block */
                //            Tracevv((stderr, "inflate:         end of block\n"));
                state.mode = TYPE;
                break loop;
            }
            else {
                strm.msg = 'invalid literal/length code';
                state.mode = BAD;
                break loop;
            }
            break dolen; }
    } while (next_in < last && out < end);

    /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
    len = bits >>> 3;
    next_in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;

    /* update state and return */
    strm.next_in = next_in;
    strm.next_out = out;
    strm.avail_in = (next_in < last ? 5 + (last - next_in) : 5 - (next_in - last));
    strm.avail_out = (out < end ?
                      257 + (end - out) : 257 - (out - end));
    state.hold = hold;
    state.bits = bits;
}

function new_array(size)
{
    var i;
    var ary = new Array(size);
    for(i = 0; i < size; i++)
        ary[i] = 0;
    return ary;
}

function getarg(opts, name, def_value)
{
    return (opts && (name in opts)) ? opts[name] : def_value;
}

function checksum_none()
{
	return 0;
}

/**
 * z_stream constructor
 * @constructor
 */
function inflate_state()
{
    var i;

    this.mode = 0;              /* current inflate mode */
    this.last = 0;              /* true if processing last block */
    this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
    this.havedict = 0;          /* true if dictionary provided */
    this.flags = 0;             /* gzip header method and flags (0 if zlib) */
    this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
    this.check = 0;             /* protected copy of check value */
    this.total = 0;             /* protected copy of output count */
    this.head = null;           /* where to save gzip header information */
    /* sliding window */
    this.wbits = 0;             /* log base 2 of requested window size */
    this.wsize = 0;             /* window size or zero if not using window */
    this.whave = 0;             /* valid bytes in the window */
    this.wnext = 0;             /* window write index (TODO remove) */
    this.window = null;         /* allocated sliding window, if needed */
    /* bit accumulator */
    this.hold = 0;              /* input bit accumulator */
    this.bits = 0;              /* number of bits in "in" */
    /* for string and stored block copying */
    this.length = 0;            /* literal or length of data to copy */
    this.offset = 0;            /* distance back to copy string from */
    /* for table and code decoding */
    this.extra = 0;             /* extra bits needed */
    /* fixed and dynamic code tables */

    /* zlib.js: modified implementation: lencode, distcode, next are offset of codes[] */
    this.lencode = 0;           /* starting table for length/literal codes */
    this.distcode = 0;          /* starting table for distance codes */
    this.lenbits = 0;           /* index bits for lencode */
    this.distbits = 0;          /* index bits for distcode */
    /* dynamic table building */
    this.ncode = 0;             /* number of code length code lengths */
    this.nlen = 0;              /* number of length code lengths */
    this.ndist = 0;             /* number of distance code lengths */
    this.have = 0;              /* number of code lengths in lens[] */
    this.next = 0;              /* next available space in codes[] */
    this.lens = new_array(320); /* temporary storage for code lengths */
    this.work = new_array(288); /* work area for code table building */
    this.codes = new Array(ENOUGH);         /* space for code tables */
    var c = {op:0, bits:0, val:0};
    for(i = 0; i < ENOUGH; i++)
        this.codes[i] = c;
    this.sane = 0;              /* if false, allow invalid distance too far */
    this.back = 0;              /* bits back of last unprocessed length/lit */
    this.was = 0;               /* initial length of match */
}

ZLIB.inflateResetKeep = function(strm)
{
    var state;

    if (!strm || !strm.state) return ZLIB.Z_STREAM_ERROR;
    state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = null;
    if (state.wrap) {        /* to support ill-conceived Java test suite */
        strm.adler = state.wrap & 1;
    }

    state.mode = HEAD;
    state.last = 0;
    state.havedict = 0;
    state.dmax = 32768;
    state.head = null;
    state.hold = 0;
    state.bits = 0;
    state.lencode = 0;
    state.distcode = 0;
    state.next = 0;
    state.sane = 1;
    state.back = -1;
    return ZLIB.Z_OK;
};

// Usage: strm = ZLIB.inflateReset(z_stream [, windowBits]);
ZLIB.inflateReset = function(strm, windowBits)
{
    var wrap;
    var state;

    /* get the state */
    if (!strm || !strm.state) return ZLIB.Z_STREAM_ERROR;
    state = strm.state;

	if(typeof windowBits === "undefined")
		windowBits = DEF_WBITS;

    /* extract wrap request from windowBits parameter */
    if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
    }
    else {
        wrap = (windowBits >>> 4) + 1;
        if (windowBits < 48)
            windowBits &= 15;
    }

	if(wrap == 1 && (typeof ZLIB.adler32 === 'function')) {
		strm.checksum_function = ZLIB.adler32;
	} else if(wrap == 2 && (typeof ZLIB.crc32 === 'function')) {
		strm.checksum_function = ZLIB.crc32;
	} else {
		strm.checksum_function = checksum_none;
	}

    /* set number of window bits, free window if different */
    if (windowBits && (windowBits < 8 || windowBits > 15))
        return ZLIB.Z_STREAM_ERROR;
    if (state.window && state.wbits != windowBits) {
        state.window = null;
    }

    /* update state and reset the rest of it */
    state.wrap = wrap;
    state.wbits = windowBits;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return ZLIB.inflateResetKeep(strm);
};

// Usage: strm = ZLIB.inflateInit([windowBits]);
ZLIB.inflateInit = function(windowBits)
{
    var strm = new ZLIB.z_stream();
    strm.state = new inflate_state();
    ZLIB.inflateReset(strm, windowBits);
    return strm;
};

ZLIB.inflatePrime = function(strm, bits, value)
{
    var state;

    if (!strm || !strm.state) return ZLIB.Z_STREAM_ERROR;
    state = strm.state;
    if (bits < 0) {
        state.hold = 0;
        state.bits = 0;
        return ZLIB.Z_OK;
    }
    if (bits > 16 || state.bits + bits > 32) return ZLIB.Z_STREAM_ERROR;
    value &= (1 << bits) - 1;
    state.hold += value << state.bits;
    state.bits += bits;
    return ZLIB.Z_OK;
};

var lenfix_ary = null;
var lenfix_def = "([\
    {op:96,bits:7,val:0},{op:0,bits:8,val:80},{op:0,bits:8,val:16},{op:20,bits:8,val:115},{op:18,bits:7,val:31},{op:0,bits:8,val:112},{op:0,bits:8,val:48},\
    {op:0,bits:9,val:192},{op:16,bits:7,val:10},{op:0,bits:8,val:96},{op:0,bits:8,val:32},{op:0,bits:9,val:160},{op:0,bits:8,val:0},{op:0,bits:8,val:128},\
    {op:0,bits:8,val:64},{op:0,bits:9,val:224},{op:16,bits:7,val:6},{op:0,bits:8,val:88},{op:0,bits:8,val:24},{op:0,bits:9,val:144},{op:19,bits:7,val:59},\
    {op:0,bits:8,val:120},{op:0,bits:8,val:56},{op:0,bits:9,val:208},{op:17,bits:7,val:17},{op:0,bits:8,val:104},{op:0,bits:8,val:40},{op:0,bits:9,val:176},\
    {op:0,bits:8,val:8},{op:0,bits:8,val:136},{op:0,bits:8,val:72},{op:0,bits:9,val:240},{op:16,bits:7,val:4},{op:0,bits:8,val:84},{op:0,bits:8,val:20},\
    {op:21,bits:8,val:227},{op:19,bits:7,val:43},{op:0,bits:8,val:116},{op:0,bits:8,val:52},{op:0,bits:9,val:200},{op:17,bits:7,val:13},{op:0,bits:8,val:100},\
    {op:0,bits:8,val:36},{op:0,bits:9,val:168},{op:0,bits:8,val:4},{op:0,bits:8,val:132},{op:0,bits:8,val:68},{op:0,bits:9,val:232},{op:16,bits:7,val:8},\
    {op:0,bits:8,val:92},{op:0,bits:8,val:28},{op:0,bits:9,val:152},{op:20,bits:7,val:83},{op:0,bits:8,val:124},{op:0,bits:8,val:60},{op:0,bits:9,val:216},\
    {op:18,bits:7,val:23},{op:0,bits:8,val:108},{op:0,bits:8,val:44},{op:0,bits:9,val:184},{op:0,bits:8,val:12},{op:0,bits:8,val:140},{op:0,bits:8,val:76},\
    {op:0,bits:9,val:248},{op:16,bits:7,val:3},{op:0,bits:8,val:82},{op:0,bits:8,val:18},{op:21,bits:8,val:163},{op:19,bits:7,val:35},{op:0,bits:8,val:114},\
    {op:0,bits:8,val:50},{op:0,bits:9,val:196},{op:17,bits:7,val:11},{op:0,bits:8,val:98},{op:0,bits:8,val:34},{op:0,bits:9,val:164},{op:0,bits:8,val:2},\
    {op:0,bits:8,val:130},{op:0,bits:8,val:66},{op:0,bits:9,val:228},{op:16,bits:7,val:7},{op:0,bits:8,val:90},{op:0,bits:8,val:26},{op:0,bits:9,val:148},\
    {op:20,bits:7,val:67},{op:0,bits:8,val:122},{op:0,bits:8,val:58},{op:0,bits:9,val:212},{op:18,bits:7,val:19},{op:0,bits:8,val:106},{op:0,bits:8,val:42},\
    {op:0,bits:9,val:180},{op:0,bits:8,val:10},{op:0,bits:8,val:138},{op:0,bits:8,val:74},{op:0,bits:9,val:244},{op:16,bits:7,val:5},{op:0,bits:8,val:86},\
    {op:0,bits:8,val:22},{op:64,bits:8,val:0},{op:19,bits:7,val:51},{op:0,bits:8,val:118},{op:0,bits:8,val:54},{op:0,bits:9,val:204},{op:17,bits:7,val:15},\
    {op:0,bits:8,val:102},{op:0,bits:8,val:38},{op:0,bits:9,val:172},{op:0,bits:8,val:6},{op:0,bits:8,val:134},{op:0,bits:8,val:70},{op:0,bits:9,val:236},\
    {op:16,bits:7,val:9},{op:0,bits:8,val:94},{op:0,bits:8,val:30},{op:0,bits:9,val:156},{op:20,bits:7,val:99},{op:0,bits:8,val:126},{op:0,bits:8,val:62},\
    {op:0,bits:9,val:220},{op:18,bits:7,val:27},{op:0,bits:8,val:110},{op:0,bits:8,val:46},{op:0,bits:9,val:188},{op:0,bits:8,val:14},{op:0,bits:8,val:142},\
    {op:0,bits:8,val:78},{op:0,bits:9,val:252},{op:96,bits:7,val:0},{op:0,bits:8,val:81},{op:0,bits:8,val:17},{op:21,bits:8,val:131},{op:18,bits:7,val:31},\
    {op:0,bits:8,val:113},{op:0,bits:8,val:49},{op:0,bits:9,val:194},{op:16,bits:7,val:10},{op:0,bits:8,val:97},{op:0,bits:8,val:33},{op:0,bits:9,val:162},\
    {op:0,bits:8,val:1},{op:0,bits:8,val:129},{op:0,bits:8,val:65},{op:0,bits:9,val:226},{op:16,bits:7,val:6},{op:0,bits:8,val:89},{op:0,bits:8,val:25},\
    {op:0,bits:9,val:146},{op:19,bits:7,val:59},{op:0,bits:8,val:121},{op:0,bits:8,val:57},{op:0,bits:9,val:210},{op:17,bits:7,val:17},{op:0,bits:8,val:105},\
    {op:0,bits:8,val:41},{op:0,bits:9,val:178},{op:0,bits:8,val:9},{op:0,bits:8,val:137},{op:0,bits:8,val:73},{op:0,bits:9,val:242},{op:16,bits:7,val:4},\
    {op:0,bits:8,val:85},{op:0,bits:8,val:21},{op:16,bits:8,val:258},{op:19,bits:7,val:43},{op:0,bits:8,val:117},{op:0,bits:8,val:53},{op:0,bits:9,val:202},\
    {op:17,bits:7,val:13},{op:0,bits:8,val:101},{op:0,bits:8,val:37},{op:0,bits:9,val:170},{op:0,bits:8,val:5},{op:0,bits:8,val:133},{op:0,bits:8,val:69},\
    {op:0,bits:9,val:234},{op:16,bits:7,val:8},{op:0,bits:8,val:93},{op:0,bits:8,val:29},{op:0,bits:9,val:154},{op:20,bits:7,val:83},{op:0,bits:8,val:125},\
    {op:0,bits:8,val:61},{op:0,bits:9,val:218},{op:18,bits:7,val:23},{op:0,bits:8,val:109},{op:0,bits:8,val:45},{op:0,bits:9,val:186},{op:0,bits:8,val:13},\
    {op:0,bits:8,val:141},{op:0,bits:8,val:77},{op:0,bits:9,val:250},{op:16,bits:7,val:3},{op:0,bits:8,val:83},{op:0,bits:8,val:19},{op:21,bits:8,val:195},\
    {op:19,bits:7,val:35},{op:0,bits:8,val:115},{op:0,bits:8,val:51},{op:0,bits:9,val:198},{op:17,bits:7,val:11},{op:0,bits:8,val:99},{op:0,bits:8,val:35},\
    {op:0,bits:9,val:166},{op:0,bits:8,val:3},{op:0,bits:8,val:131},{op:0,bits:8,val:67},{op:0,bits:9,val:230},{op:16,bits:7,val:7},{op:0,bits:8,val:91},\
    {op:0,bits:8,val:27},{op:0,bits:9,val:150},{op:20,bits:7,val:67},{op:0,bits:8,val:123},{op:0,bits:8,val:59},{op:0,bits:9,val:214},{op:18,bits:7,val:19},\
    {op:0,bits:8,val:107},{op:0,bits:8,val:43},{op:0,bits:9,val:182},{op:0,bits:8,val:11},{op:0,bits:8,val:139},{op:0,bits:8,val:75},{op:0,bits:9,val:246},\
    {op:16,bits:7,val:5},{op:0,bits:8,val:87},{op:0,bits:8,val:23},{op:64,bits:8,val:0},{op:19,bits:7,val:51},{op:0,bits:8,val:119},{op:0,bits:8,val:55},\
    {op:0,bits:9,val:206},{op:17,bits:7,val:15},{op:0,bits:8,val:103},{op:0,bits:8,val:39},{op:0,bits:9,val:174},{op:0,bits:8,val:7},{op:0,bits:8,val:135},\
    {op:0,bits:8,val:71},{op:0,bits:9,val:238},{op:16,bits:7,val:9},{op:0,bits:8,val:95},{op:0,bits:8,val:31},{op:0,bits:9,val:158},{op:20,bits:7,val:99},\
    {op:0,bits:8,val:127},{op:0,bits:8,val:63},{op:0,bits:9,val:222},{op:18,bits:7,val:27},{op:0,bits:8,val:111},{op:0,bits:8,val:47},{op:0,bits:9,val:190},\
    {op:0,bits:8,val:15},{op:0,bits:8,val:143},{op:0,bits:8,val:79},{op:0,bits:9,val:254},{op:96,bits:7,val:0},{op:0,bits:8,val:80},{op:0,bits:8,val:16},\
    {op:20,bits:8,val:115},{op:18,bits:7,val:31},{op:0,bits:8,val:112},{op:0,bits:8,val:48},{op:0,bits:9,val:193},{op:16,bits:7,val:10},{op:0,bits:8,val:96},\
    {op:0,bits:8,val:32},{op:0,bits:9,val:161},{op:0,bits:8,val:0},{op:0,bits:8,val:128},{op:0,bits:8,val:64},{op:0,bits:9,val:225},{op:16,bits:7,val:6},\
    {op:0,bits:8,val:88},{op:0,bits:8,val:24},{op:0,bits:9,val:145},{op:19,bits:7,val:59},{op:0,bits:8,val:120},{op:0,bits:8,val:56},{op:0,bits:9,val:209},\
    {op:17,bits:7,val:17},{op:0,bits:8,val:104},{op:0,bits:8,val:40},{op:0,bits:9,val:177},{op:0,bits:8,val:8},{op:0,bits:8,val:136},{op:0,bits:8,val:72},\
    {op:0,bits:9,val:241},{op:16,bits:7,val:4},{op:0,bits:8,val:84},{op:0,bits:8,val:20},{op:21,bits:8,val:227},{op:19,bits:7,val:43},{op:0,bits:8,val:116},\
    {op:0,bits:8,val:52},{op:0,bits:9,val:201},{op:17,bits:7,val:13},{op:0,bits:8,val:100},{op:0,bits:8,val:36},{op:0,bits:9,val:169},{op:0,bits:8,val:4},\
    {op:0,bits:8,val:132},{op:0,bits:8,val:68},{op:0,bits:9,val:233},{op:16,bits:7,val:8},{op:0,bits:8,val:92},{op:0,bits:8,val:28},{op:0,bits:9,val:153},\
    {op:20,bits:7,val:83},{op:0,bits:8,val:124},{op:0,bits:8,val:60},{op:0,bits:9,val:217},{op:18,bits:7,val:23},{op:0,bits:8,val:108},{op:0,bits:8,val:44},\
    {op:0,bits:9,val:185},{op:0,bits:8,val:12},{op:0,bits:8,val:140},{op:0,bits:8,val:76},{op:0,bits:9,val:249},{op:16,bits:7,val:3},{op:0,bits:8,val:82},\
    {op:0,bits:8,val:18},{op:21,bits:8,val:163},{op:19,bits:7,val:35},{op:0,bits:8,val:114},{op:0,bits:8,val:50},{op:0,bits:9,val:197},{op:17,bits:7,val:11},\
    {op:0,bits:8,val:98},{op:0,bits:8,val:34},{op:0,bits:9,val:165},{op:0,bits:8,val:2},{op:0,bits:8,val:130},{op:0,bits:8,val:66},{op:0,bits:9,val:229},\
    {op:16,bits:7,val:7},{op:0,bits:8,val:90},{op:0,bits:8,val:26},{op:0,bits:9,val:149},{op:20,bits:7,val:67},{op:0,bits:8,val:122},{op:0,bits:8,val:58},\
    {op:0,bits:9,val:213},{op:18,bits:7,val:19},{op:0,bits:8,val:106},{op:0,bits:8,val:42},{op:0,bits:9,val:181},{op:0,bits:8,val:10},{op:0,bits:8,val:138},\
    {op:0,bits:8,val:74},{op:0,bits:9,val:245},{op:16,bits:7,val:5},{op:0,bits:8,val:86},{op:0,bits:8,val:22},{op:64,bits:8,val:0},{op:19,bits:7,val:51},\
    {op:0,bits:8,val:118},{op:0,bits:8,val:54},{op:0,bits:9,val:205},{op:17,bits:7,val:15},{op:0,bits:8,val:102},{op:0,bits:8,val:38},{op:0,bits:9,val:173},\
    {op:0,bits:8,val:6},{op:0,bits:8,val:134},{op:0,bits:8,val:70},{op:0,bits:9,val:237},{op:16,bits:7,val:9},{op:0,bits:8,val:94},{op:0,bits:8,val:30},\
    {op:0,bits:9,val:157},{op:20,bits:7,val:99},{op:0,bits:8,val:126},{op:0,bits:8,val:62},{op:0,bits:9,val:221},{op:18,bits:7,val:27},{op:0,bits:8,val:110},\
    {op:0,bits:8,val:46},{op:0,bits:9,val:189},{op:0,bits:8,val:14},{op:0,bits:8,val:142},{op:0,bits:8,val:78},{op:0,bits:9,val:253},{op:96,bits:7,val:0},\
    {op:0,bits:8,val:81},{op:0,bits:8,val:17},{op:21,bits:8,val:131},{op:18,bits:7,val:31},{op:0,bits:8,val:113},{op:0,bits:8,val:49},{op:0,bits:9,val:195},\
    {op:16,bits:7,val:10},{op:0,bits:8,val:97},{op:0,bits:8,val:33},{op:0,bits:9,val:163},{op:0,bits:8,val:1},{op:0,bits:8,val:129},{op:0,bits:8,val:65},\
    {op:0,bits:9,val:227},{op:16,bits:7,val:6},{op:0,bits:8,val:89},{op:0,bits:8,val:25},{op:0,bits:9,val:147},{op:19,bits:7,val:59},{op:0,bits:8,val:121},\
    {op:0,bits:8,val:57},{op:0,bits:9,val:211},{op:17,bits:7,val:17},{op:0,bits:8,val:105},{op:0,bits:8,val:41},{op:0,bits:9,val:179},{op:0,bits:8,val:9},\
    {op:0,bits:8,val:137},{op:0,bits:8,val:73},{op:0,bits:9,val:243},{op:16,bits:7,val:4},{op:0,bits:8,val:85},{op:0,bits:8,val:21},{op:16,bits:8,val:258},\
    {op:19,bits:7,val:43},{op:0,bits:8,val:117},{op:0,bits:8,val:53},{op:0,bits:9,val:203},{op:17,bits:7,val:13},{op:0,bits:8,val:101},{op:0,bits:8,val:37},\
    {op:0,bits:9,val:171},{op:0,bits:8,val:5},{op:0,bits:8,val:133},{op:0,bits:8,val:69},{op:0,bits:9,val:235},{op:16,bits:7,val:8},{op:0,bits:8,val:93},\
    {op:0,bits:8,val:29},{op:0,bits:9,val:155},{op:20,bits:7,val:83},{op:0,bits:8,val:125},{op:0,bits:8,val:61},{op:0,bits:9,val:219},{op:18,bits:7,val:23},\
    {op:0,bits:8,val:109},{op:0,bits:8,val:45},{op:0,bits:9,val:187},{op:0,bits:8,val:13},{op:0,bits:8,val:141},{op:0,bits:8,val:77},{op:0,bits:9,val:251},\
    {op:16,bits:7,val:3},{op:0,bits:8,val:83},{op:0,bits:8,val:19},{op:21,bits:8,val:195},{op:19,bits:7,val:35},{op:0,bits:8,val:115},{op:0,bits:8,val:51},\
    {op:0,bits:9,val:199},{op:17,bits:7,val:11},{op:0,bits:8,val:99},{op:0,bits:8,val:35},{op:0,bits:9,val:167},{op:0,bits:8,val:3},{op:0,bits:8,val:131},\
    {op:0,bits:8,val:67},{op:0,bits:9,val:231},{op:16,bits:7,val:7},{op:0,bits:8,val:91},{op:0,bits:8,val:27},{op:0,bits:9,val:151},{op:20,bits:7,val:67},\
    {op:0,bits:8,val:123},{op:0,bits:8,val:59},{op:0,bits:9,val:215},{op:18,bits:7,val:19},{op:0,bits:8,val:107},{op:0,bits:8,val:43},{op:0,bits:9,val:183},\
    {op:0,bits:8,val:11},{op:0,bits:8,val:139},{op:0,bits:8,val:75},{op:0,bits:9,val:247},{op:16,bits:7,val:5},{op:0,bits:8,val:87},{op:0,bits:8,val:23},\
    {op:64,bits:8,val:0},{op:19,bits:7,val:51},{op:0,bits:8,val:119},{op:0,bits:8,val:55},{op:0,bits:9,val:207},{op:17,bits:7,val:15},{op:0,bits:8,val:103},\
    {op:0,bits:8,val:39},{op:0,bits:9,val:175},{op:0,bits:8,val:7},{op:0,bits:8,val:135},{op:0,bits:8,val:71},{op:0,bits:9,val:239},{op:16,bits:7,val:9},\
    {op:0,bits:8,val:95},{op:0,bits:8,val:31},{op:0,bits:9,val:159},{op:20,bits:7,val:99},{op:0,bits:8,val:127},{op:0,bits:8,val:63},{op:0,bits:9,val:223},\
    {op:18,bits:7,val:27},{op:0,bits:8,val:111},{op:0,bits:8,val:47},{op:0,bits:9,val:191},{op:0,bits:8,val:15},{op:0,bits:8,val:143},{op:0,bits:8,val:79},\
    {op:0,bits:9,val:255}\
])";

var distfix_ary = null;
var distfix_def = "([\
    {op:16,bits:5,val:1},{op:23,bits:5,val:257},{op:19,bits:5,val:17},{op:27,bits:5,val:4097},{op:17,bits:5,val:5},{op:25,bits:5,val:1025},\
    {op:21,bits:5,val:65},{op:29,bits:5,val:16385},{op:16,bits:5,val:3},{op:24,bits:5,val:513},{op:20,bits:5,val:33},{op:28,bits:5,val:8193},\
    {op:18,bits:5,val:9},{op:26,bits:5,val:2049},{op:22,bits:5,val:129},{op:64,bits:5,val:0},{op:16,bits:5,val:2},{op:23,bits:5,val:385},\
    {op:19,bits:5,val:25},{op:27,bits:5,val:6145},{op:17,bits:5,val:7},{op:25,bits:5,val:1537},{op:21,bits:5,val:97},{op:29,bits:5,val:24577},\
    {op:16,bits:5,val:4},{op:24,bits:5,val:769},{op:20,bits:5,val:49},{op:28,bits:5,val:12289},{op:18,bits:5,val:13},{op:26,bits:5,val:3073},\
    {op:22,bits:5,val:193},{op:64,bits:5,val:0}\
])";

function fixedtables(state)
{
    var i;
    if(!lenfix_ary)
        lenfix_ary = eval(lenfix_def);
    if(!distfix_ary)
        distfix_ary = eval(distfix_def);
    state.lencode = 0;
    state.distcode = 512;
    for(i = 0; i < 512; i++) {
        state.codes[i] = lenfix_ary[i];
    }
    for(i = 0; i < 32; i++) {
        state.codes[i + 512] = distfix_ary[i];
    }
    state.lenbits = 9;
    state.distbits = 5;
}

/*
  Update the window with the last wsize (normally 32K) bytes written before
  returning.  If window does not exist yet, create it.  This is only called
  when a window is already in use, or when output has been written during this
  inflate call, but the end of the deflate stream has not been reached yet.
  It is also called to create a window for dictionary data when a dictionary
  is loaded.

  Providing output buffers larger than 32K to inflate() should provide a speed
  advantage, since only the last 32K of output is copied to the sliding window
  upon return from inflate(), and since all distances after the first 32K of
  output will fall in the output data, making match copies simpler and faster.
  The advantage may be dependent on the size of the processor's data caches.
*/
function updatewindow(strm)
{
    var state = strm.state;
	var out = strm.output_data.length;

    /* if it hasn't been done already, allocate space for the window */
    if (state.window === null) {
        state.window = '';
	}

    /* if window not in use yet, initialize */
    if (state.wsize == 0) {
        state.wsize = 1 << state.wbits;
	}

    // zlib.js: Sliding window
    if (out >= state.wsize) {
        state.window = strm.output_data.substring(out - state.wsize);
	} else {
		if(state.whave + out < state.wsize) {
			state.window += strm.output_data;
		} else {
			state.window = state.window.substring(state.whave - (state.wsize - out)) + strm.output_data;
		}
	}
    state.whave = state.window.length;
	if(state.whave < state.wsize) {
		state.wnext = state.whave;
	} else {
		state.wnext = 0;
	}
    return 0;
}


// #ifdef GUNZIP
function CRC2(strm, word)
{
	var hbuf = [word & 0xff, (word >>> 8) & 0xff];
	strm.state.check = strm.checksum_function(strm.state.check, hbuf, 0, 2);
}

function CRC4(strm, word)
{
	var hbuf = [word & 0xff,
				(word >>> 8) & 0xff,
				(word >>> 16) & 0xff,
				(word >>> 24) & 0xff];
	strm.state.check = strm.checksum_function(strm.state.check, hbuf, 0, 4);
}

/* Load registers with state in inflate() for speed */
function LOAD(strm, s)
{
    s.strm = strm;            /* z_stream */
    s.left = strm.avail_out;  /* available output */
    s.next = strm.next_in; /* next input */
    s.have = strm.avail_in;   /* available input */
    s.hold = strm.state.hold; /* bit buffer */
    s.bits = strm.state.bits; /* bits in bit buffer */
    return s;
}

/* Restore state from registers in inflate() */
function RESTORE(s)
{
    var strm = s.strm;
    strm.next_in = s.next;
    strm.avail_out = s.left;
    strm.avail_in = s.have;
    strm.state.hold = s.hold;
    strm.state.bits = s.bits;
}

/* Clear the input bit accumulator */
function INITBITS(s)
{
    s.hold = 0;
    s.bits = 0;
}

/* Get a byte of input into the bit accumulator, or return from inflate()
   if there is no input available. */
function PULLBYTE(s)
{
    if (s.have == 0) return false;
    s.have--;
    s.hold += (s.strm.input_data.charCodeAt(s.next++) & 0xff) << s.bits;
    s.bits += 8;
    return true;
}

/* Assure that there are at least n bits in the bit accumulator.  If there is
   not enough available input to do that, then return from inflate(). */
function NEEDBITS(s, n)
{
    // if(typeof n != 'number') throw 'ERROR';
    while (s.bits < n) {
        if(!PULLBYTE(s))
            return false;
    }
    return true;
}

/* Return the low n bits of the bit accumulator (n < 16) */
function BITS(s, n)
{
    return s.hold & ((1 << n) - 1);
}

/* Remove n bits from the bit accumulator */
function DROPBITS(s, n)
{
    // if(typeof n != 'number') throw 'ERROR';
    s.hold >>>= n;
    s.bits -= n;
}

/* Remove zero to seven bits as needed to go to a byte boundary */
function BYTEBITS(s)
{
    s.hold >>>= s.bits & 7;
    s.bits -= s.bits & 7;
}

/* Reverse the bytes in a 32-bit value */
function REVERSE(q)
{
    return ((q >>> 24) & 0xff) +
		((q >>> 8) & 0xff00) +
		((q & 0xff00) << 8) +
		((q & 0xff) << 24);
}

/*
   inflate() uses a state machine to process as much input data and generate as
   much output data as possible before returning.  The state machine is
   structured roughly as follows:

    for (;;) switch (state) {
    ...
    case STATEn:
        if (not enough input data or output space to make progress)
            return;
        ... make progress ...
        state = STATEm;
        break;
    ...
    }

   so when inflate() is called again, the same case is attempted again, and
   if the appropriate resources are provided, the machine proceeds to the
   next state.  The NEEDBITS() macro is usually the way the state evaluates
   whether it can proceed or should return.  NEEDBITS() does the return if
   the requested bits are not available.  The typical use of the BITS macros
   is:

        NEEDBITS(n);
        ... do something with BITS(n) ...
        DROPBITS(n);

   where NEEDBITS(n) either returns from inflate() if there isn't enough
   input left to load n bits into the accumulator, or it continues.  BITS(n)
   gives the low n bits in the accumulator.  When done, DROPBITS(n) drops
   the low n bits off the accumulator.  INITBITS() clears the accumulator
   and sets the number of available bits to zero.  BYTEBITS() discards just
   enough bits to put the accumulator on a byte boundary.  After BYTEBITS()
   and a NEEDBITS(8), then BITS(8) would return the next byte in the stream.

   NEEDBITS(n) uses PULLBYTE() to get an available byte of input, or to return
   if there is no input available.  The decoding of variable length codes uses
   PULLBYTE() directly in order to pull just enough bytes to decode the next
   code, and no more.

   Some states loop until they get enough input, making sure that enough
   state information is maintained to continue the loop where it left off
   if NEEDBITS() returns in the loop.  For example, want, need, and keep
   would all have to actually be part of the saved state in case NEEDBITS()
   returns:

    case STATEw:
        while (want < need) {
            NEEDBITS(n);
            keep[want++] = BITS(n);
            DROPBITS(n);
        }
        state = STATEx;
    case STATEx:

   As shown above, if the next state is also the next case, then the break
   is omitted.

   A state may also return if there is not enough output space available to
   complete that state.  Those states are copying stored data, writing a
   literal byte, and copying a matching string.

   When returning, a "goto inf_leave" is used to update the total counters,
   update the check value, and determine whether any progress has been made
   during that inflate() call in order to return the proper return code.
   Progress is defined as a change in either strm->avail_in or strm->avail_out.
   When there is a window, goto inf_leave will update the window with the last
   output written.  If a goto inf_leave occurs in the middle of decompression
   and there is no window currently, goto inf_leave will create one and copy
   output to the window for the next call of inflate().

   In this implementation, the flush parameter of inflate() only affects the
   return code (per zlib.h).  inflate() always writes as much as possible to
   strm->next_out, given the space available and the provided input--the effect
   documented in zlib.h of Z_SYNC_FLUSH.  Furthermore, inflate() always defers
   the allocation of and copying into a sliding window until necessary, which
   provides the effect documented in zlib.h for Z_FINISH when the entire input
   stream available.  So the only thing the flush parameter actually does is:
   when flush is set to Z_FINISH, inflate() cannot return Z_OK.  Instead it
   will return Z_BUF_ERROR if it has not reached the end of the stream.
 */

/* permutation of code lengths */
var inflate_order = [
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
ZLIB.inflate = function(strm, flush)
{
    var state;
    var s;
    var _in, out;          /* save starting available input and output */
    var copy;              /* number of stored or match bytes to copy */
    var from_window_offset = -1; /* index of window[] */
    var from_out_offset = -1; /* index of next_out[] */
    var here;              /* current decoding table entry */
    var last;              /* parent table entry */
    var len;               /* length to copy for repeats, bits to drop */
    var ret;               /* return code */

    if (!strm || !strm.state ||
        (!strm.input_data && strm.avail_in != 0))
        return ZLIB.Z_STREAM_ERROR;

    state = strm.state;
    if (state.mode == TYPE) state.mode = TYPEDO;      /* skip check */

    // LOAD
    s = {};
    LOAD(strm, s);

    _in = s.have;
    out = s.left;
    ret = ZLIB.Z_OK;
inf_leave: for (;;) {
    //console.log("State.mode", state.mode)
    //console.log(strm.msg)
        switch (state.mode) {
        case HEAD:
            if (state.wrap == 0) {
                state.mode = TYPEDO;
                break;
            }
            if(!NEEDBITS(s, 16)) break inf_leave;
// #ifdef GUNZIP
            if ((state.wrap & 2) && s.hold == 0x8b1f) {  /* gzip header */
                state.check = strm.checksum_function(0, null, 0, 0);
                CRC2(strm, s.hold);
                INITBITS(s);
                state.mode = FLAGS;
                break;
            }
            state.flags = 0;           /* expect zlib header */
            if (state.head !== null)
                state.head.done = -1;
            if (!(state.wrap & 1) ||   /* check if zlib header allowed */
//#else
//          if (
//#endif
                ((BITS(s, 8) << 8) + (s.hold >>> 8)) % 31) {
                strm.msg = 'incorrect header check';
                state.mode = BAD;
                break;
            }
            if (BITS(s, 4) != ZLIB.Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = BAD;
                break;
            }

            DROPBITS(s, 4);
            len = BITS(s, 4) + 8;
            if (state.wbits == 0)
                state.wbits = len;
            else if (len > state.wbits) {
                strm.msg = 'invalid window size';
                state.mode = BAD;
                break;
            }
            state.dmax = 1 << len;
//            Tracev((stderr, "inflate:   zlib header ok\n"));
			strm.adler = state.check = strm.checksum_function(0, null, 0, 0);
            state.mode = s.hold & 0x200 ? DICTID : TYPE;
            INITBITS(s);
            break;
// #ifdef GUNZIP
        case FLAGS:
            if(!NEEDBITS(s, 16)) break inf_leave;
            state.flags = s.hold;
            if ((state.flags & 0xff) != ZLIB.Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
            }
            if (state.flags & 0xe000) {
                strm.msg = "unknown header flags set";
                state.mode = BAD;
                break;
            }
            if (state.head !== null)
                state.head.text = (s.hold >>> 8) & 1;
            if (state.flags & 0x0200) {
				CRC2(strm, s.hold);
			}
            INITBITS(s);
            state.mode = TIME;
        case TIME:
            if(!NEEDBITS(s, 32)) break inf_leave;
            if (state.head !== null)
                state.head.time = s.hold;
            if (state.flags & 0x0200) {
				CRC4(strm, s.hold);
			}
            INITBITS(s);
            state.mode = OS;
        case OS:
            if(!NEEDBITS(s, 16)) break inf_leave;
            if (state.head !== null) {
                state.head.xflags = s.hold & 0xff;
                state.head.os = s.hold >>> 8;
            }
            if (state.flags & 0x0200) {
				CRC2(strm, s.hold);
			}
            INITBITS(s);
            state.mode = EXLEN;
        case EXLEN:
            if (state.flags & 0x0400) {
                if(!NEEDBITS(s, 16)) break inf_leave;
                state.length = s.hold;
                if (state.head !== null) {
                    state.head.extra_len = s.hold;
				}
                if (state.flags & 0x0200) {
					CRC2(strm, s.hold);
				}
                INITBITS(s);
				state.head.extra = "";
            }
            else if (state.head !== null) {
                state.head.extra = null;
			}
            state.mode = EXTRA;
        case EXTRA:
            if (state.flags & 0x0400) {
                copy = state.length;
                if (copy > s.have) copy = s.have;
                if (copy) {
                    if (state.head !== null &&
                        state.head.extra !== null) {
                        len = state.head.extra_len - state.length;
/*
                        zmemcpy(state->head->extra + len, next,
                                len + copy > state->head->extra_max ?
                                state->head->extra_max - len : copy);
*/
						state.head.extra += strm.input_data.substring(
							s.next, s.next + (len + copy > state.head.extra_max ?
											  state.head.extra_max - len : copy));

                    }
                    if (state.flags & 0x0200)
                        state.check = strm.checksum_function(state.check, strm.input_data, s.next, copy);
                    s.have -= copy;
                    s.next += copy;
                    state.length -= copy;
                }
                if (state.length) break inf_leave;
            }
            state.length = 0;
            state.mode = NAME;
        case NAME:
            if (state.flags & 0x0800) {
                if (s.have == 0) break inf_leave;
				if (state.head !== null && state.head.name === null) {
					state.head.name = "";
				}
                copy = 0;
				// TODO end = strm.input_data.indexOf("\0", s.next);
				// TODO state.length => state.head.name.length
                do {
                    len = strm.input_data.charAt(s.next + copy); copy++;
					if(len === "\0")
						break;
                    if (state.head !== null &&
						state.length < state.head.name_max) {
                        state.head.name += len;
						state.length++;
					}
                } while (copy < s.have);
                if (state.flags & 0x0200) {
                    state.check = strm.checksum_function(state.check, strm.input_data, s.next, copy);
				}
                s.have -= copy;
                s.next += copy;
                if (len !== "\0") break inf_leave;
            }
            else if (state.head !== null)
                state.head.name = null;
            state.length = 0;
            state.mode = COMMENT;
        case COMMENT:
            if (state.flags & 0x1000) {
                if (s.have == 0) break inf_leave;
                copy = 0;
				if (state.head !== null && state.head.comment === null) {
					state.head.comment = "";
				}
				// TODO end = strm.input_data.indexOf("\0", s.next);
				// TODO state.length => state.head.comment.length
                do {
                    len = strm.input_data.charAt(s.next + copy); copy++;
					if(len === "\0")
						break;
                    if (state.head !== null &&
						state.length < state.head.comm_max) {
                        state.head.comment += len;
						state.length++;
					}
                } while (copy < s.have);
                if (state.flags & 0x0200)
                    state.check = strm.checksum_function(state.check, strm.input_data, s.next, copy);
                s.have -= copy;
                s.next += copy;
                if (len !== "\0") break inf_leave;
            }
            else if (state.head !== null)
                state.head.comment = null;
            state.mode = HCRC;
        case HCRC:
            if (state.flags & 0x0200) {
                if(!NEEDBITS(s, 16)) break inf_leave;
                if (s.hold != (state.check & 0xffff)) {
                    strm.msg = "header crc mismatch";
                    state.mode = BAD;
                    break;
                }
                INITBITS(s);
            }
            if (state.head !== null) {
                state.head.hcrc = (state.flags >>> 9) & 1;
                state.head.done = 1;
            }
            strm.adler = state.check = strm.checksum_function(0, null, 0, 0);
            state.mode = TYPE;
            break;
//#endif
        case DICTID:
            if(!NEEDBITS(s, 32)) break inf_leave;
            strm.adler = state.check = REVERSE(s.hold);
            INITBITS(s);
            state.mode = DICT;
        case DICT:
            if (state.havedict == 0) {
                RESTORE(s);
                return ZLIB.Z_NEED_DICT;
            }
			strm.adler = state.check = strm.checksum_function(0, null, 0, 0);
            state.mode = TYPE;
        case TYPE:
            if (flush == ZLIB.Z_BLOCK || flush == ZLIB.Z_TREES) break inf_leave;
        case TYPEDO:
            if (state.last) {
                BYTEBITS(s);
                state.mode = CHECK;
                break;
            }
            if(!NEEDBITS(s, 3)) break inf_leave;
            state.last = BITS(s, 1);
            DROPBITS(s, 1);
            switch (BITS(s, 2)) {
            case 0:                             /* stored block */
//                Tracev((stderr, "inflate:     stored block%s\n",
//                        state->last ? " (last)" : ""));
                state.mode = STORED;
                break;
            case 1:                             /* fixed block */
                fixedtables(state);
//                Tracev((stderr, "inflate:     fixed codes block%s\n",
//                        state->last ? " (last)" : ""));
                state.mode = LEN_;             /* decode codes */
                if (flush == ZLIB.Z_TREES) {
                    DROPBITS(s, 2);
                    break inf_leave;
                }
                break;
            case 2:                             /* dynamic block */
//                Tracev((stderr, "inflate:     dynamic codes block%s\n",
//                        state->last ? " (last)" : ""));
                state.mode = TABLE;
                break;
            case 3:
                strm.msg = 'invalid block type';
                state.mode = BAD;
            }
            DROPBITS(s, 2);
            break;
        case STORED:
            BYTEBITS(s);                         /* go to byte boundary */
            if(!NEEDBITS(s, 32)) break inf_leave;
            if ((s.hold & 0xffff) != (((s.hold >>> 16) & 0xffff) ^ 0xffff)) {
                strm.msg = 'invalid stored block lengths';
                state.mode = BAD;
                break;
            }
            state.length = s.hold & 0xffff;
//            Tracev((stderr, "inflate:       stored length %u\n",
//                    state->length));
            INITBITS(s);
            state.mode = COPY_;
            if (flush == ZLIB.Z_TREES) break inf_leave;
        case COPY_:
            state.mode = COPY;
        case COPY:
            copy = state.length;
            if (copy) {
                if (copy > s.have) copy = s.have;
                if (copy > s.left) copy = s.left;
                if (copy == 0) break inf_leave;
                strm.output_data += strm.input_data.substring(s.next, s.next + copy);
                strm.next_out += copy;
                s.have -= copy;
                s.next += copy;
                s.left -= copy;
                state.length -= copy;
                break;
            }
//            Tracev((stderr, "inflate:       stored end\n"));
            state.mode = TYPE;
            break;
        case TABLE:
            if(!NEEDBITS(s, 14)) break inf_leave;
            state.nlen = BITS(s, 5) + 257;
            DROPBITS(s, 5);
            state.ndist = BITS(s, 5) + 1;
            DROPBITS(s, 5);
            state.ncode = BITS(s, 4) + 4;
            DROPBITS(s, 4);
//#ifndef PKZIP_BUG_WORKAROUND
            if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = 'too many length or distance symbols';
                state.mode = BAD;
                break;
            }
//#endif
//            Tracev((stderr, "inflate:       table sizes ok\n"));
            state.have = 0;
            state.mode = LENLENS;
        case LENLENS:
            while (state.have < state.ncode) {
                if(!NEEDBITS(s, 3)) break inf_leave;
                var tmp = BITS(s, 3);
                state.lens[inflate_order[state.have++]] = tmp;
                DROPBITS(s, 3);
            }
            while (state.have < 19)
                state.lens[inflate_order[state.have++]] = 0;
            state.next = 0;
            state.lencode = 0;
            state.lenbits = 7;

//            ret = inflate_table(CODES, state->lens, 19, &(state->next),
//                                &(state->lenbits), state->work);
            ret = inflate_table(state, CODES);

            if (ret) {
                strm.msg = 'invalid code lengths set';
                state.mode = BAD;
                break;
            }
//            Tracev((stderr, "inflate:       code lengths ok\n"));
            state.have = 0;
            state.mode = CODELENS;
        case CODELENS:
            while (state.have < state.nlen + state.ndist) {
                for (;;) {
                    here = state.codes[state.lencode + BITS(s, state.lenbits)];
                    if (here.bits <= s.bits) break;
                    if(!PULLBYTE(s)) break inf_leave;
                }
                if (here.val < 16) {
                    DROPBITS(s, here.bits);
                    state.lens[state.have++] = here.val;
                }
                else {
                    if (here.val == 16) {
                        if(!NEEDBITS(s, here.bits + 2)) break inf_leave;
                        DROPBITS(s, here.bits);
                        if (state.have == 0) {
                            strm.msg = 'invalid bit length repeat';
                            state.mode = BAD;
                            break;
                        }
                        len = state.lens[state.have - 1];
                        copy = 3 + BITS(s, 2);
                        DROPBITS(s, 2);
                    }
                    else if (here.val == 17) {
                        if(!NEEDBITS(s, here.bits + 3)) break inf_leave;
                        DROPBITS(s, here.bits);
                        len = 0;
                        copy = 3 + BITS(s, 3);
                        DROPBITS(s, 3);
                    }
                    else {
                        if(!NEEDBITS(s, here.bits + 7)) break inf_leave;
                        DROPBITS(s, here.bits);
                        len = 0;
                        copy = 11 + BITS(s, 7);
                        DROPBITS(s, 7);
                    }
                    if (state.have + copy > state.nlen + state.ndist) {
                        strm.msg = 'invalid bit length repeat';
                        state.mode = BAD;
                        break;
                    }
                    while (copy--)
                        state.lens[state.have++] = len;
                }
            }

            /* handle error breaks in while */
            if (state.mode == BAD) break;

            /* check for end-of-block code (better have one) */
            if (state.lens[256] == 0) {
                strm.msg = 'invalid code -- missing end-of-block';
                state.mode = BAD;
                break;
            }

            /* build code tables -- note: do not change the lenbits or distbits
               values here (9 and 6) without reading the comments in inftrees.h
               concerning the ENOUGH constants, which depend on those values */
            state.next = 0;
            state.lencode = state.next;
            state.lenbits = 9;
//            ret = inflate_table(LENS, state->lens, state->nlen, &(state->next),
//                                &(state->lenbits), state->work);
            ret = inflate_table(state, LENS);
            if (ret) {
                strm.msg = 'invalid literal/lengths set';
                state.mode = BAD;
                break;
            }
            state.distcode = state.next;
            state.distbits = 6;
//            ret = inflate_table(DISTS, state->lens + state->nlen, state->ndist, &(state->next),
//                                                                &(state->distbits), state->work);
            ret = inflate_table(state, DISTS);
            if (ret) {
                strm.msg = 'invalid distances set';
                state.mode = BAD;
                break;
            }
//            Tracev((stderr, "inflate:       codes ok\n"));
            state.mode = LEN_;
            if (flush == ZLIB.Z_TREES) break inf_leave;
        case LEN_:
            state.mode = LEN;
        case LEN:
            if (s.have >= 6 && s.left >= 258) {
                RESTORE(s);
                inflate_fast(strm, out);
                LOAD(strm, s);
                if (state.mode == TYPE)
                    state.back = -1;
                break;
            }
            state.back = 0;
            for (;;) {
                here = state.codes[state.lencode + BITS(s, state.lenbits)];
                if (here.bits <= s.bits) break;
                if(!PULLBYTE(s)) break inf_leave;
            }
            if (here.op && (here.op & 0xf0) == 0) {
                last = here;
                for (;;) {
                    here = state.codes[state.lencode + last.val +
                                       (BITS(s, last.bits + last.op) >>> last.bits)];
                    if (last.bits + here.bits <= s.bits) break;
                    if(!PULLBYTE(s)) break inf_leave;
                }
                DROPBITS(s, last.bits);
                state.back += last.bits;
            }
            DROPBITS(s, here.bits);
            state.back += here.bits;
            state.length = here.val;
            if (here.op == 0) {
//              Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
//                        "inflate:         literal '%c'\n" :
//                        "inflate:         literal 0x%02x\n", here.val));
                state.mode = LIT;
                break;
            }
            if (here.op & 32) {
//                Tracevv((stderr, "inflate:         end of block\n"));
                state.back = -1;
                state.mode = TYPE;
                break;
            }
            if (here.op & 64) {
                strm.msg = 'invalid literal/length code';
                state.mode = BAD;
                break;
            }
            state.extra = here.op & 15;
            state.mode = LENEXT;
        case LENEXT:
            if (state.extra) {
                if(!NEEDBITS(s, state.extra)) break inf_leave;
                state.length += BITS(s, state.extra);
                DROPBITS(s, state.extra);
                state.back += state.extra;
            }
            //Tracevv((stderr, "inflate:         length %u\n", state->length));
            state.was = state.length;
            state.mode = DIST;
        case DIST:
            for (;;) {
                here = state.codes[state.distcode + BITS(s, state.distbits)];
                if (here.bits <= s.bits) break;
                if(!PULLBYTE(s)) break inf_leave;
            }
            if ((here.op & 0xf0) == 0) {
                last = here;
                for (;;) {
                    here = state.codes[state.distcode + last.val +
                                       (BITS(s, last.bits + last.op) >>> last.bits)];
                    if ((last.bits + here.bits) <= s.bits) break;
                    if(!PULLBYTE(s)) break inf_leave;
                }
                DROPBITS(s, last.bits);
                state.back += last.bits;
            }
            DROPBITS(s, here.bits);
            state.back += here.bits;
            if (here.op & 64) {
                strm.msg = 'invalid distance code';
                state.mode = BAD;
                break;
            }
            state.offset = here.val;
            state.extra = here.op & 15;
            state.mode = DISTEXT;
        case DISTEXT:
            if (state.extra) {
                if(!NEEDBITS(s, state.extra)) break inf_leave;
                state.offset += BITS(s, state.extra);
                DROPBITS(s, state.extra);
                state.back += state.extra;
            }
//NOSPRT #ifdef INFLATE_STRICT
//            if (state->offset > state->dmax) {
//                strm->msg = (char *)"invalid distance too far back";
//                state->mode = BAD;
//                break;
//            }
//#endif
//            Tracevv((stderr, "inflate:         distance %u\n", state->offset));
            state.mode = MATCH;
        case MATCH:
            if (s.left == 0) break inf_leave;
            copy = out - s.left;
            if (state.offset > copy) {         /* copy from window */
                copy = state.offset - copy;
                if (copy > state.whave) {
                    if (state.sane) {
                        strm.msg = 'invalid distance too far back';
                        state.mode = BAD;
                        break;
                    }
//NOSPRT #ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                    Trace((stderr, "inflate.c too far\n"));
//                    copy -= state->whave;
//                    if (copy > state->length) copy = state->length;
//                    if (copy > left) copy = left;
//                    left -= copy;
//                    state->length -= copy;
//                    do {
//                        *put++ = 0;
//                    } while (--copy);
//                    if (state->length == 0) state->mode = LEN;
//                    break;
//#endif
                }
                if (copy > state.wnext) {
                    copy -= state.wnext;
                    // from = state->window + (state->wsize - copy);
                    from_window_offset = state.wsize - copy;
                    from_out_offset = -1;
                }
                else {
                    // from = state->window + (state->wnext - copy);
                    from_window_offset = state.wnext - copy;
                    from_out_offset = -1;
                }
                if (copy > state.length) copy = state.length;
            }
            else {                              /* copy from output */
                // from = put - state->offset;
                from_window_offset = -1;
                from_out_offset = strm.next_out - state.offset;
                copy = state.length;
            }
            if (copy > s.left) copy = s.left;
            s.left -= copy;
            state.length -= copy;
            if( from_window_offset >= 0 ) {
                strm.output_data += state.window.substring(from_window_offset, from_window_offset + copy);
                strm.next_out += copy;
                copy = 0;
            } else {
                strm.next_out += copy;
                do {
                    strm.output_data += strm.output_data.charAt(from_out_offset++);
                } while (--copy);
            }
            if (state.length == 0) state.mode = LEN;
            break;
        case LIT:
            if (s.left == 0) break inf_leave;

            strm.output_data += String.fromCharCode(state.length);
            strm.next_out++;
            //*put++ = (unsigned char)(state->length);

            s.left--;
            state.mode = LEN;
            break;
        case CHECK:
            if (state.wrap) {
                if(!NEEDBITS(s, 32)) break inf_leave;
                out -= s.left;
                strm.total_out += out;
                state.total += out;
                if (out)
                    strm.adler = state.check =
                        strm.checksum_function(state.check, strm.output_data, strm.output_data.length - out, out);
                out = s.left;
                if ((
// #ifdef GUNZIP
                     state.flags ? s.hold :
//#endif
                     REVERSE(s.hold)) != state.check) {
                    strm.msg = "incorrect data check";
                    state.mode = BAD;
                    break;
                }
                INITBITS(s);
//debug("## inflate:   check matches trailer\n");
//                Tracev((stderr, "inflate:   check matches trailer\n"));
            }
//#ifdef GUNZIP
            state.mode = LENGTH;
        case LENGTH:
            if (state.wrap && state.flags) {
                if(!NEEDBITS(s, 32)) break inf_leave;
                if (s.hold != (state.total & 0xffffffff)) {
                    strm.msg = 'incorrect length check';
                    state.mode = BAD;
                    break;
                }
                INITBITS(s);
                //Tracev((stderr, "inflate:   length matches trailer\n"));
            }
//#endif
            state.mode = DONE;
        case DONE:
            ret = ZLIB.Z_STREAM_END;
            break inf_leave;
        case BAD:
            ret = ZLIB.Z_DATA_ERROR;
            break inf_leave;
        case MEM:
            return ZLIB.Z_MEM_ERROR;
        case SYNC:
        default:
            return ZLIB.Z_STREAM_ERROR;
        } }

    /*
      Return from inflate(), updating the total counts and the check value.
      If there was no progress during the inflate() call, return a buffer
      error.  Call updatewindow() to create and/or update the window state.
      Note: a memory error from inflate() is non-recoverable.
    */
inf_leave:
    RESTORE(s);
    if (state.wsize || (out != strm.avail_out && state.mode < BAD &&
                        (state.mode < CHECK || flush != ZLIB.Z_FINISH)))
        if (updatewindow(strm)) {
            state.mode = MEM;
            return ZLIB.Z_MEM_ERROR;
        }
    _in -= strm.avail_in;
    out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += out;
    state.total += out;
    if (state.wrap && out)
	    strm.adler = state.check = strm.checksum_function(state.check, strm.output_data, 0, strm.output_data.length);
    strm.data_type = state.bits + (state.last ? 64 : 0) +
	    (state.mode == TYPE ? 128 : 0) +
	    (state.mode == LEN_ || state.mode == COPY_ ? 256 : 0);
    if (((_in == 0 && out == 0) || flush == ZLIB.Z_FINISH) && ret == ZLIB.Z_OK)
        ret = ZLIB.Z_BUF_ERROR;
    return ret;
};

ZLIB.inflateEnd = function(strm)
{
    var state;
    if (!strm || !strm.state )
        return ZLIB.Z_STREAM_ERROR;
    state = strm.state;
    state.window = null;
    strm.state = null;
    //    Tracev((stderr, "inflate: end\n"));
    return ZLIB.Z_OK;
};

ZLIB.z_stream.prototype.inflate = function(input_string, opts)
{
    var flush;
    var avail_out;
	var DEFAULT_BUFFER_SIZE = 16384;

    this.input_data = input_string;
    this.next_in = getarg(opts, 'next_in', 0);
    this.avail_in = getarg(opts, 'avail_in', input_string.length - this.next_in);

    flush = getarg(opts, 'flush', ZLIB.Z_SYNC_FLUSH);
    avail_out = getarg(opts, 'avail_out', -1);

    var result = '';
    do {
        this.avail_out = (avail_out >= 0 ? avail_out : DEFAULT_BUFFER_SIZE);
        this.output_data = '';
        this.next_out = 0;
        this.error = ZLIB.inflate(this, flush);
        if(this.error != 0) 
            console.log("zlib error", this.error)
        if(avail_out >= 0) {
            return this.output_data;
        }
        result += this.output_data;
		if(this.avail_out > 0) {
			break;
		}
    } while(this.error == ZLIB.Z_OK);

    return result;
};

ZLIB.z_stream.prototype.inflateReset = function(windowBits)
{
    return ZLIB.inflateReset(this, windowBits);
};

}());
/* zlib-adler32.js -- JavaScript implementation for the zlib adler32.
  Version: 0.2.0
  LastModified: Apr 12 2012
  Copyright (C) 2012 Masanao Izumo <iz@onicos.co.jp>

                       API documentation
==============================================================================
Usage: adler = ZLIB.adler32(adler, buf, offset, len);

     Update a running Adler-32 checksum with the bytes buf[offset..offset+len-1] and
   return the updated checksum.  If buf is null, this function returns the
   required initial value for the checksum.

     An Adler-32 checksum is almost as reliable as a CRC32 but can be computed
   much faster.

   Usage example:

     var adler = ZLIB.adler32(0, null, 0, 0);

     while (read_buffer(buffer, length) != EOF) {
       adler = ZLIB.adler32(adler, buffer, 0, length);
     }
     if (adler != original_adler) error();

==============================================================================
Usage: adler = ZLIB.adler32_combine(adler1, adler2, len2);

     Combine two Adler-32 checksums into one.  For two sequences of bytes, seq1
   and seq2 with lengths len1 and len2, Adler-32 checksums were calculated for
   each, adler1 and adler2.  adler32_combine() returns the Adler-32 checksum of
   seq1 and seq2 concatenated, requiring only adler1, adler2, and len2.  Note
   that the z_off_t type (like off_t) is a signed integer.  If len2 is
   negative, the result has no meaning or utility.
*/

if( typeof ZLIB === 'undefined' ) {
    alert('ZLIB is not defined.  SRC zlib.js before zlib-adler32.js')
}

(function() {

/* adler32.c -- compute the Adler-32 checksum of a data stream
 * Copyright (C) 1995-2011 Mark Adler
 * For conditions of distribution and use, see copyright notice in zlib.h
 */

var BASE = 65521;      /* largest prime smaller than 65536 */
var NMAX =  5552;
/* NMAX is the largest n such that 255n(n+1)/2 + (n+1)(BASE-1) <= 2^32-1 */

/* ========================================================================= */
function adler32_string(adler, buf, offset, len)
{
    var sum2;
    var n;

    /* split Adler-32 into component sums */
    sum2 = (adler >>> 16) & 0xffff;
    adler &= 0xffff;

    /* in case user likes doing a byte at a time, keep it fast */
    if (len == 1) {
		adler += buf.charCodeAt(offset) & 0xff;
        if (adler >= BASE)
            adler -= BASE;
        sum2 += adler;
        if (sum2 >= BASE)
            sum2 -= BASE;
        return adler | (sum2 << 16);
    }

    /* initial Adler-32 value (deferred check for len == 1 speed) */
    if (buf === null)
        return 1;

    /* in case short lengths are provided, keep it somewhat fast */
    if (len < 16) {
        while (len--) {
            adler += buf.charCodeAt(offset++) & 0xff;
            sum2 += adler;
        }
        if (adler >= BASE)
            adler -= BASE;
		sum2 %= BASE;           /* only added so many BASE's */
        return adler | (sum2 << 16);
    }

    /* do length NMAX blocks -- requires just one modulo operation */
    while (len >= NMAX) {
        len -= NMAX;
        n = NMAX >> 4;          /* NMAX is divisible by 16 */
        do {
			/* 16 sums unrolled */
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
        } while (--n);
        adler %= BASE;
        sum2 %= BASE;
    }

    /* do remaining bytes (less than NMAX, still just one modulo) */
    if (len) {                  /* avoid modulos if none remaining */
        while (len >= 16) {
            len -= 16;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
        }
        while (len--) {
            adler += buf.charCodeAt(offset++) & 0xff; sum2 += adler;
        }
        adler %= BASE;
        sum2 %= BASE;
    }

    /* return recombined sums */
    return adler | (sum2 << 16);
}

/* ========================================================================= */
function adler32_array(adler, buf, offset, len)
{
    var sum2;
    var n;

    /* split Adler-32 into component sums */
    sum2 = (adler >>> 16) & 0xffff;
    adler &= 0xffff;

    /* in case user likes doing a byte at a time, keep it fast */
    if (len == 1) {
		adler += buf[offset];
        if (adler >= BASE)
            adler -= BASE;
        sum2 += adler;
        if (sum2 >= BASE)
            sum2 -= BASE;
        return adler | (sum2 << 16);
    }

    /* initial Adler-32 value (deferred check for len == 1 speed) */
    if (buf === null)
        return 1;

    /* in case short lengths are provided, keep it somewhat fast */
    if (len < 16) {
        while (len--) {
            adler += buf[offset++];
            sum2 += adler;
        }
        if (adler >= BASE)
            adler -= BASE;
		sum2 %= BASE;           /* only added so many BASE's */
        return adler | (sum2 << 16);
    }

    /* do length NMAX blocks -- requires just one modulo operation */
    while (len >= NMAX) {
        len -= NMAX;
        n = NMAX >> 4;          /* NMAX is divisible by 16 */
        do {
			/* 16 sums unrolled */
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
        } while (--n);
        adler %= BASE;
        sum2 %= BASE;
    }

    /* do remaining bytes (less than NMAX, still just one modulo) */
    if (len) {                  /* avoid modulos if none remaining */
        while (len >= 16) {
            len -= 16;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
            adler += buf[offset++]; sum2 += adler;
        }
        while (len--) {
            adler += buf[offset++]; sum2 += adler;
        }
        adler %= BASE;
        sum2 %= BASE;
    }

    /* return recombined sums */
    return adler | (sum2 << 16);
}

/* ========================================================================= */
ZLIB.adler32 = function(adler, buf, offset, len)
{
	if(typeof buf === 'string') {
		return adler32_string(adler, buf, offset, len);
	} else {
		return adler32_array(adler, buf, offset, len);
	}
};

ZLIB.adler32_combine = function(adler1, adler2, len2)
{
    var sum1;
    var sum2;
    var rem;

    /* for negative len, return invalid adler32 as a clue for debugging */
    if (len2 < 0)
        return 0xffffffff;

    /* the derivation of this formula is left as an exercise for the reader */
    len2 %= BASE;                /* assumes len2 >= 0 */
    rem = len2;
    sum1 = adler1 & 0xffff;
    sum2 = rem * sum1;
    sum2 %= BASE;
    sum1 += (adler2 & 0xffff) + BASE - 1;
    sum2 += ((adler1 >> 16) & 0xffff) + ((adler2 >> 16) & 0xffff) + BASE - rem;
    if (sum1 >= BASE) sum1 -= BASE;
    if (sum1 >= BASE) sum1 -= BASE;
    if (sum2 >= (BASE << 1)) sum2 -= (BASE << 1);
    if (sum2 >= BASE) sum2 -= BASE;
    return sum1 | (sum2 << 16);
}

}());
/* zlib-adler32.js -- JavaScript implementation for the zlib crc32.
  Version: 0.2.0
  LastModified: Apr 12 2012
  Copyright (C) 2012 Masanao Izumo <iz@onicos.co.jp>

                       API documentation
==============================================================================
Usage: crc = ZLIB.crc32(crc, buf, offset, len);

     Update a running CRC-32 with the bytes buf[offset..offset+len-1] and return the
   updated CRC-32.  If buf is null, this function returns the required
   initial value for the for the crc.  Pre- and post-conditioning (one's
   complement) is performed within this function so it shouldn't be done by the
   application.

   Usage example:

     var crc = ZLIB.crc32(0, null, 0, 0);

     while (read_buffer(buffer, length) != EOF) {
       crc = ZLIB.crc32(crc, buffer, 0, length);
     }
     if (crc != original_crc) error();

==============================================================================
Usage: crc = crc32_combine(crc1, crc2, len2);

     Combine two CRC-32 check values into one.  For two sequences of bytes,
   seq1 and seq2 with lengths len1 and len2, CRC-32 check values were
   calculated for each, crc1 and crc2.  crc32_combine() returns the CRC-32
   check value of seq1 and seq2 concatenated, requiring only crc1, crc2, and
   len2.
*/

if( typeof ZLIB === 'undefined' ) {
    alert('ZLIB is not defined.  SRC zlib.js before zlib-crc32.js')
}

(function() {

/* crc32.c -- compute the CRC-32 of a data stream
 * Copyright (C) 1995-2006, 2010, 2011 Mark Adler
 * For conditions of distribution and use, see copyright notice in zlib.h
 *
 * Thanks to Rodney Brown <rbrown64@csc.com.au> for his contribution of faster
 * CRC methods: exclusive-oring 32 bits of data at a time, and pre-computing
 * tables for updating the shift register in one step with three exclusive-ors
 * instead of four steps with four exclusive-ors.  This results in about a
 * factor of two increase in speed on a Power PC G4 (PPC7455) using gcc -O3.
 */

var crc_table = [
    0x00000000, 0x77073096, 0xee0e612c, 0x990951ba, 0x076dc419,
    0x706af48f, 0xe963a535, 0x9e6495a3, 0x0edb8832, 0x79dcb8a4,
    0xe0d5e91e, 0x97d2d988, 0x09b64c2b, 0x7eb17cbd, 0xe7b82d07,
    0x90bf1d91, 0x1db71064, 0x6ab020f2, 0xf3b97148, 0x84be41de,
    0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7, 0x136c9856,
    0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9,
    0xfa0f3d63, 0x8d080df5, 0x3b6e20c8, 0x4c69105e, 0xd56041e4,
    0xa2677172, 0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b,
    0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940, 0x32d86ce3,
    0x45df5c75, 0xdcd60dcf, 0xabd13d59, 0x26d930ac, 0x51de003a,
    0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423, 0xcfba9599,
    0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924,
    0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d, 0x76dc4190,
    0x01db7106, 0x98d220bc, 0xefd5102a, 0x71b18589, 0x06b6b51f,
    0x9fbfe4a5, 0xe8b8d433, 0x7807c9a2, 0x0f00f934, 0x9609a88e,
    0xe10e9818, 0x7f6a0dbb, 0x086d3d2d, 0x91646c97, 0xe6635c01,
    0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed,
    0x1b01a57b, 0x8208f4c1, 0xf50fc457, 0x65b0d9c6, 0x12b7e950,
    0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3,
    0xfbd44c65, 0x4db26158, 0x3ab551ce, 0xa3bc0074, 0xd4bb30e2,
    0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a,
    0x346ed9fc, 0xad678846, 0xda60b8d0, 0x44042d73, 0x33031de5,
    0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa, 0xbe0b1010,
    0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f,
    0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17,
    0x2eb40d81, 0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6,
    0x03b6e20c, 0x74b1d29a, 0xead54739, 0x9dd277af, 0x04db2615,
    0x73dc1683, 0xe3630b12, 0x94643b84, 0x0d6d6a3e, 0x7a6a5aa8,
    0xe40ecf0b, 0x9309ff9d, 0x0a00ae27, 0x7d079eb1, 0xf00f9344,
    0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb,
    0x196c3671, 0x6e6b06e7, 0xfed41b76, 0x89d32be0, 0x10da7a5a,
    0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5,
    0xd6d6a3e8, 0xa1d1937e, 0x38d8c2c4, 0x4fdff252, 0xd1bb67f1,
    0xa6bc5767, 0x3fb506dd, 0x48b2364b, 0xd80d2bda, 0xaf0a1b4c,
    0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef,
    0x4669be79, 0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236,
    0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe,
    0xb2bd0b28, 0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31,
    0x2cd99e8b, 0x5bdeae1d, 0x9b64c2b0, 0xec63f226, 0x756aa39c,
    0x026d930a, 0x9c0906a9, 0xeb0e363f, 0x72076785, 0x05005713,
    0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0x0cb61b38, 0x92d28e9b,
    0xe5d5be0d, 0x7cdcefb7, 0x0bdbdf21, 0x86d3d2d4, 0xf1d4e242,
    0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1,
    0x18b74777, 0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c,
    0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45, 0xa00ae278,
    0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7,
    0x4969474d, 0x3e6e77db, 0xaed16a4a, 0xd9d65adc, 0x40df0b66,
    0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9,
    0xbdbdf21c, 0xcabac28a, 0x53b39330, 0x24b4a3a6, 0xbad03605,
    0xcdd70693, 0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8,
    0x5d681b02, 0x2a6f2b94, 0xb40bbe37, 0xc30c8ea1, 0x5a05df1b,
    0x2d02ef8d ];

/* ========================================================================= */
function crc32_string(crc, buf, offset, len)
{
	if (buf == null) return 0;

    crc = crc ^ 0xffffffff;
    while (len >= 8) {
		crc = crc_table[(crc ^ buf.charCodeAt(offset++)) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf.charCodeAt(offset++)) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf.charCodeAt(offset++)) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf.charCodeAt(offset++)) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf.charCodeAt(offset++)) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf.charCodeAt(offset++)) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf.charCodeAt(offset++)) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf.charCodeAt(offset++)) & 0xff] ^ (crc >>> 8)
        len -= 8;
    }
    if (len) do {
		crc = crc_table[(crc ^ buf.charCodeAt(offset++)) & 0xff] ^ (crc >>> 8)
    } while (--len);
    return crc ^ 0xffffffff;
}

/* ========================================================================= */
function crc32_array(crc, buf, offset, len)
{
	if (buf == null) return 0;

    crc = crc ^ 0xffffffff;
    while (len >= 8) {
		crc = crc_table[(crc ^ buf[offset++]) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf[offset++]) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf[offset++]) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf[offset++]) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf[offset++]) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf[offset++]) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf[offset++]) & 0xff] ^ (crc >>> 8)
		crc = crc_table[(crc ^ buf[offset++]) & 0xff] ^ (crc >>> 8)
        len -= 8;
    }
    if (len) do {
		crc = crc_table[(crc ^ buf[offset++]) & 0xff] ^ (crc >>> 8)
    } while (--len);
    return crc ^ 0xffffffff;
}

/* ========================================================================= */
ZLIB.crc32 = function(crc, buf, offset, len)
{
	if(typeof buf === 'string') {
		return crc32_string(crc, buf, offset, len);
	} else {
		return crc32_array(crc, buf, offset, len);
	}
};

/* ========================================================================= */
var GF2_DIM = 32; /* dimension of GF(2) vectors (length of CRC) */

/* ========================================================================= */
function gf2_matrix_times(mat, vec)
{
    var sum;
	var mat_i = 0;

    sum = 0;
    while (vec) {
        if (vec & 1)
            sum ^= mat[mat_i];
        vec >>= 1;
        mat_i++;
    }
    return sum;
}

/* ========================================================================= */
function gf2_matrix_square(square, mat)
{
    var n;

    for (n = 0; n < GF2_DIM; n++)
        square[n] = gf2_matrix_times(mat, mat[n]);
}

/* ========================================================================= */
ZLIB.crc32_combine = function(crc1, crc2, len2)
{
    var n;
    var row;
    var even;    /* even-power-of-two zeros operator */
    var odd;     /* odd-power-of-two zeros operator */

    /* degenerate case (also disallow negative lengths) */
    if (len2 <= 0)
        return crc1;

    even = new Array(GF2_DIM);
    odd = new Array(GF2_DIM);

    /* put operator for one zero bit in odd */
    odd[0] = 0xedb88320;          /* CRC-32 polynomial */
    row = 1;
    for (n = 1; n < GF2_DIM; n++) {
        odd[n] = row;
        row <<= 1;
    }

    /* put operator for two zero bits in even */
    gf2_matrix_square(even, odd);

    /* put operator for four zero bits in odd */
    gf2_matrix_square(odd, even);

    /* apply len2 zeros to crc1 (first square will put the operator for one
       zero byte, eight zero bits, in even) */
    do {
        /* apply zeros operator for this bit of len2 */
        gf2_matrix_square(even, odd);
        if (len2 & 1)
            crc1 = gf2_matrix_times(even, crc1);
        len2 >>= 1;

        /* if no more bits set, then done */
        if (len2 == 0)
            break;

        /* another iteration of the loop with odd and even swapped */
        gf2_matrix_square(odd, even);
        if (len2 & 1)
            crc1 = gf2_matrix_times(odd, crc1);
        len2 >>= 1;

        /* if no more bits set, then done */
    } while (len2 != 0);

    /* return combined crc */
    crc1 ^= crc2;
    return crc1;
};

}());

module.exports = ZLIB

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./src/reactjs/components/KVM/UI.tsx ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KVM": () => (/* binding */ KVM)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core */ "./src/core/index.ts");
/* harmony import */ var _core_Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Utilities */ "./src/core/Utilities/index.ts");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/reactjs/components/KVM/Header.tsx");
/* harmony import */ var _PureCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PureCanvas */ "./src/reactjs/components/KVM/PureCanvas.tsx");
/* harmony import */ var _shared_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Utilities */ "./src/reactjs/components/shared/Utilities.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI.scss */ "./src/reactjs/components/KVM/UI.scss");
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/







class KVM extends (react__WEBPACK_IMPORTED_MODULE_5___default().Component) {
    constructor(props) {
        super(props);
        this.desktopSettingsChange = false;
        this.state = { kvmstate: 0, encodingOption: 1 };
        this.logger = new _core__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogger(_core__WEBPACK_IMPORTED_MODULE_0__.LogLevel.ERROR);
        this.saveContext = this.saveContext.bind(this);
        this.startKVM = this.startKVM.bind(this);
        this.stopKVM = this.stopKVM.bind(this);
        this.handleConnectClick = this.handleConnectClick.bind(this);
        this.getRenderStatus = this.getRenderStatus.bind(this);
        this.OnConnectionStateChange = this.OnConnectionStateChange.bind(this);
        this.changeDesktopSettings = this.changeDesktopSettings.bind(this);
    }
    saveContext(ctx) {
        this.logger.debug('save context called');
        this.ctx = ctx;
        this.init();
    }
    init() {
        const deviceUuid = this.props.deviceId != null ? this.props.deviceId : '';
        const server = this.props.mpsServer != null ? this.props.mpsServer.replace('http', 'ws') : '';
        this.module = new _core__WEBPACK_IMPORTED_MODULE_0__.AMTDesktop(this.logger, this.ctx);
        this.redirector = new _core__WEBPACK_IMPORTED_MODULE_0__.AMTKvmDataRedirector(this.logger, _core__WEBPACK_IMPORTED_MODULE_0__.Protocol.KVM, new FileReader(), deviceUuid, 16994, '', '', 0, 0, server);
        this.dataProcessor = new _core__WEBPACK_IMPORTED_MODULE_0__.DataProcessor(this.logger, this.redirector, this.module);
        this.mouseHelper = new _core_Utilities__WEBPACK_IMPORTED_MODULE_1__.MouseHelper(this.module, this.redirector, this.props.mouseDebounceTime < 200 ? 200 : this.props.mouseDebounceTime); // anything less than 200 ms causes timeout
        this.keyboard = new _core_Utilities__WEBPACK_IMPORTED_MODULE_1__.KeyBoardHelper(this.module, this.redirector);
        this.redirector.onProcessData = this.module.processData.bind(this.module);
        this.redirector.onStart = this.module.start.bind(this.module);
        this.redirector.onNewState = this.module.onStateChange.bind(this.module);
        this.redirector.onSendKvmData = this.module.onSendKvmData.bind(this.module);
        this.redirector.onStateChanged = this.OnConnectionStateChange.bind(this);
        this.redirector.onError = this.onRedirectorError.bind(this);
        this.module.onSend = this.redirector.send.bind(this.redirector);
        this.module.onProcessData = this.dataProcessor.processData.bind(this.dataProcessor);
        this.module.bpp = this.state.encodingOption;
    }
    cleanUp() {
        this.module = null;
        this.redirector = null;
        this.dataProcessor = null;
        this.mouseHelper = null;
        this.keyboard = null;
        this.ctx.clearRect(0, 0, this.ctx.canvas.height, this.ctx.canvas.width);
    }
    componentWillUnmount() {
        this.stopKVM();
    }
    onRedirectorError() {
        this.reset();
    }
    reset() {
        this.cleanUp();
        this.init();
    }
    OnConnectionStateChange(redirector, state) {
        this.setState({ kvmstate: state });
        if (this.desktopSettingsChange && state === 0) {
            this.desktopSettingsChange = false;
            setTimeout(() => this.startKVM(), 2000); // Introduced delay to start KVM
        }
    }
    changeDesktopSettings(settings) {
        if (this.state.kvmstate === 2) {
            this.desktopSettingsChange = true;
            this.module.bpp = settings.encoding;
            this.stopKVM();
        }
        else {
            this.setState({
                encodingOption: parseInt(settings.encoding)
            });
            this.module.bpp = parseInt(settings.encoding);
        }
    }
    startKVM() {
        if (typeof this.redirector !== 'undefined') {
            // console.log("startKVM")
            this.redirector.start(WebSocket);
        }
        if (typeof this.keyboard !== 'undefined')
            this.keyboard.GrabKeyInput();
    }
    stopKVM() {
        if (typeof this.redirector !== 'undefined')
            this.redirector.stop();
        if (typeof this.keyboard !== 'undefined')
            this.keyboard.UnGrabKeyInput();
        this.reset();
    }
    getRenderStatus() {
        return this.module.state; // used to check if canvas is in the middle of rendering a complete frame.
    }
    handleConnectClick(e) {
        e.persist();
        if (this.state.kvmstate === 0) {
            this.startKVM();
        }
        else if (this.state.kvmstate === 1) {
            // Take Action
        }
        else if (this.state.kvmstate === 2) {
            this.stopKVM();
        }
        else {
            // Take Action
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.deviceId !== this.props.deviceId) {
            this.stopKVM();
        }
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", { className: "canvas-container" },
            !(0,_shared_Utilities__WEBPACK_IMPORTED_MODULE_4__.isFalsy)(this.props.autoConnect)
                ? react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, { key: "kvm_header", handleConnectClick: this.handleConnectClick, getConnectState: () => this.state.kvmstate, kvmstate: this.state.kvmstate, changeDesktopSettings: this.changeDesktopSettings, deviceId: this.props.deviceId, server: this.props.mpsServer })
                : '',
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_PureCanvas__WEBPACK_IMPORTED_MODULE_3__.PureCanvas, { key: "kvm_comp", contextRef: ctx => this.saveContext(ctx), canvasHeight: this.props.canvasHeight, canvasWidth: this.props.canvasWidth, mouseMove: event => { if (typeof this.mouseHelper !== 'undefined')
                    this.mouseHelper.mousemove(event); }, mouseDown: event => { if (typeof this.mouseHelper !== 'undefined')
                    this.mouseHelper.mousedown(event); }, mouseUp: event => { if (typeof this.mouseHelper !== 'undefined')
                    this.mouseHelper.mouseup(event); } })));
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91aS10b29sa2l0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vbm9kZV9tb2R1bGVzL2NoYXJlbmMvY2hhcmVuYy5qcyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vbm9kZV9tb2R1bGVzL2NyeXB0L2NyeXB0LmpzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9Db25uZWN0QnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9yZWFjdGpzL2NvbXBvbmVudHMvS1ZNL0VuY29kaW5nT3B0aW9ucy5zY3NzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9IZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL3JlYWN0anMvY29tcG9uZW50cy9LVk0vUHVyZUNhbnZhcy5zY3NzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9VSS5zY3NzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vbm9kZV9tb2R1bGVzL21kNS9tZDUuanMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9yZWFjdGpzL2NvbXBvbmVudHMvS1ZNL0Nvbm5lY3RCdXR0b24uc2Nzcz8xMzEwIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9FbmNvZGluZ09wdGlvbnMuc2Nzcz9kZmE2Iiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9IZWFkZXIuc2Nzcz8xYjIzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9QdXJlQ2FudmFzLnNjc3M/ZGFmYiIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL3JlYWN0anMvY29tcG9uZW50cy9LVk0vVUkuc2Nzcz8zZDc1Iiwid2VicGFjazovL3VpLXRvb2xraXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL0FNVERlc2t0b3AudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL0FNVEt2bURhdGFSZWRpcmVjdG9yLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9BTVRSZWRpcmVjdG9yLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9BTVRUZXJtaW5hbC50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvQ29uc29sZUxvZ2dlci50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvQ29udmVydGVyLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9EZXNrdG9wLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9JbWFnZURhdGEvRGF0YVByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvSW1hZ2VEYXRhL1JMRURlY29kZXIudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL0ltYWdlRGF0YS9pbmRleC50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvSW50ZXJmYWNlcy9JTG9nZ2VyLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9JbnRlcmZhY2VzL2luZGV4LnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9SRkJTdGF0ZVByb2Nlc3NvcnMvRW5jb2RpbmcudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1JGQlN0YXRlUHJvY2Vzc29ycy9GcmFtZUJ1ZmZlckJlbGxTZXJ2ZXJDdXRUZXh0LnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9SRkJTdGF0ZVByb2Nlc3NvcnMvSGFuZHNoYWtlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1JGQlN0YXRlUHJvY2Vzc29ycy9TZWN1cml0eU9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1JGQlN0YXRlUHJvY2Vzc29ycy9TZWN1cml0eVJlc3BvbnNlLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9SRkJTdGF0ZVByb2Nlc3NvcnMvU2VydmVyQ3V0VGV4dEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1JGQlN0YXRlUHJvY2Vzc29ycy9TZXJ2ZXJJbml0LnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9SRkJTdGF0ZVByb2Nlc3NvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1N0YXRlUHJvY2Vzc29yRmFjdG9yeS50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvVGVybWluYWxEYXRhUHJvY2Vzc29yLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9VdGlsaXRpZXMvQU1US2V5Q29kZUNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvVXRpbGl0aWVzL0FNVEtleUNvZGVUYWJsZS50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvVXRpbGl0aWVzL0NvbW1zSGVscGVyLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9VdGlsaXRpZXMvSW1hZ2VIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1V0aWxpdGllcy9LZXlib2FyZEhlbHBlci50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvVXRpbGl0aWVzL01vdXNlSGVscGVyLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9VdGlsaXRpZXMvVXRpbGl0eU1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1V0aWxpdGllcy9pbmRleC50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9yZWFjdGpzL2NvbXBvbmVudHMvS1ZNL0Nvbm5lY3RCdXR0b24udHN4Iiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9EZXNrdG9wU2V0dGluZ3MudHN4Iiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9FbmNvZGluZ09wdGlvbnMudHN4Iiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9IZWFkZXIudHN4Iiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9QdXJlQ2FudmFzLnRzeCIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL3JlYWN0anMvY29tcG9uZW50cy9zaGFyZWQvVXRpbGl0aWVzLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS96bGliL3psaWIuanMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91aS10b29sa2l0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VpLXRvb2xraXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VpLXRvb2xraXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91aS10b29sa2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9yZWFjdGpzL2NvbXBvbmVudHMvS1ZNL1VJLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0JBQWdCO0FBQ2pEO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHdDQUF3QyxrQkFBa0I7QUFDMUQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFD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LElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7d0JBQ25ELE1BQU0sR0FBRyxHQUFHLFVBQVU7d0JBQ3RCLElBQUksS0FBSyxHQUFHLEVBQUU7d0JBQ2QsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFOzRCQUNsQixNQUFNLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7NEJBQ3ZDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7NEJBQzVELE1BQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7NEJBQ3RCLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJO3lCQUM1Qzt3QkFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDdkosSUFBSSxRQUFRLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7d0JBQzVJLElBQUksUUFBUSxLQUFLLENBQUM7NEJBQUUsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzFELElBQUksR0FBRyxHQUFR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Q04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1A7UUFFRCx3QkFBbUIsR0FBRztZQUNwQixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFN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QUFDO0lBRUQsVUFBVSxDQUFFLENBQVMsRUFBRSxDQUFTO1FBQzlCLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsT0FBTyxDQUFFLENBQVMsRUFBRSxDQUFTO1FBQzNCLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxRQUFRLENBQUUsQ0FBUyxFQUFFLENBQVM7UUFDNUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDckQsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELFFBQVEsQ0FBRSxDQUFTLEVBQUUsQ0FBUztRQUM1QixPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDL0QsQ0FBQyxDQUFDLENBQUMsVUFBVSxD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WUFDbkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLHdFQUFvQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUc7WUFFMU4sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7WUFDM0UsTUFBTSxFQUFFLEdBQUcsb0VBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLENBQUMsR0FBRyxvRUFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxHQUFHLEVBQUU7WUFFTixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO1NBQ3BEO2FBQU0sSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLFdBQVcsR0FBRyxFQUFFLEVBQUUsRUFBRSw4QkFBOEI7WUFDOUUsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQztZQUNyRCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUMsOEdBQThHO1lBQ3RJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUU7WUFFekksa0NBQWtDO1lBQ2xDLElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtnQkFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLEVBQUUsR0FBRyxDQUFDO2FBQUU7aUJBQU0sSUFBSSxXQUFXLElBQUksQ0FBQyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQUMsRUFBRSxHQUFHLENBQUM7YUFBRTtZQUV2Rix1QkFBdUI7WUFDdkIsT0FBTyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO29CQUFFLHdFQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDO2lCQUFFO2FBQUU7WUFDdkwsd0VBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3hDO2FBQU0sSUFBSSxXQUFXLEtBQUssR0FBRyxFQUFFLEVBQUUsbUJBQW1CO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUM5QyxPQUFPLFFBQVEsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hDLG9CQUFvQjtnQkFDcEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTFGLHNGQUFzRjtnQkFDdEYsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFBQyxHQUFHO29CQUFFLFNBQVMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQUUsUUFBUSxlQUFlLEtBQUssR0FBRyxFQUFDO2dCQUU3RyxhQUFhO2dCQUNiLE9BQU8sRUFBRSxTQUFTLElBQUksQ0FBQyxFQUFFO29CQUFFLHdFQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDO2lCQUFFO2FBQzlFO1lBQ0Qsd0VBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3hDO2FBQU0sSUFBSSxXQUFXLEdBQUcsR0FBRyxFQUFFLEVBQUUsMkJBQTJCO1lBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUNsRCxtQkFBbUI7WUFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUFFO1lBQ2pKLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztZQUNuRCx5QkFBeUI7WUFDekIsT0FBTyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN4Qyx5RUFBeUU7Z0JBQ3pFLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBRXZFLHNGQUFzRjtnQkFDdEYsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO29CQUFFLEdBQUc7d0JBQUUsU0FBUyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztxQkFBRSxRQUFRLGVBQWUsS0FBSyxHQUFHLEVBQUM7aUJBQUU7Z0JBRW5ILGFBQWE7Z0JBQ2IsT0FBTyxFQUFFLFNBQVMsSUFBSSxDQUFDLEVBQUU7b0JBQUUsd0VBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUM7aUJBQUU7YUFDOUU7WUFDRCx3RUFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0NBQ0Y7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RjBCO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7QUNEekM7Ozs7d0VBSXdFO0FBU3hFLElBQUssUUFNSjtBQU5ELFdBQUssUUFBUTtJQUNYLDZDQUFXO0lBQ1gsdUNBQVE7SUFDUix5Q0FBUztJQUNULDZDQUFXO0lBQ1gseUNBQVM7QUFDWCxDQUFDLEVBTkksUUFBUSxLQUFSLFFBQVEsUUFNWjtBQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEN0M7Ozs7d0VBSXdFO0FBRzVCO0FBRXFCO0FBRWpFOztHQUVHO0FBRUgsTUFBTSxRQUFRO0lBT1osWUFBYSxJQUFtQixFQUFFLE1BQWUsRUFBRSxVQUF1QixFQUFFLGNBQXVDO1FBQ2pILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYztJQUN0QyxDQUFDO0lBRUQsWUFBWSxDQUFFLEdBQVc7UUFDdkIsMkNBQTJDO1FBQzNDLElBQUksT0FBTyxHQUFHLENBQUM7UUFDZixJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxHQUFHLCtEQUF1QixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDLEdBQUcsK0RBQXVCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN6QyxNQUFNLEtBQUssR0FBRywrREFBdUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sTUFBTSxHQUFHLCtEQUF1QixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU07WUFDeEIsTUFBTSxRQUFRLEdBQUcsNkRBQXFCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM5QyxnREFBZ0Q7WUFDaEQsSUFBSSxRQUFRLEdBQUcsRUFBRSxFQUFFO2dCQUNqQixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLE1BQU0sR0FBRyxFQUFFLEVBQUU7b0JBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsS0FBSyxJQUFJLE1BQU0sbUJBQW1CLENBQUM7b0JBQ2xGLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUM7aUJBQ3JDO2dCQUVELDRIQUE0SDtnQkFDNUgsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO29CQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLO29CQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNO29CQUVqRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7d0JBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU07d0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUs7cUJBQzVCO29CQUNELE1BQU0sZUFBZSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztvQkFDM0QsaUNBQWlDO29CQUNqQyxJQUFJLENBQUMsb0RBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7cUJBQzlJO29CQUNELHVEQUF1RDtpQkFDeEQ7YUFDRjtZQUVELElBQUksUUFBUSxLQUFLLFVBQVUsRUFBRTtnQkFDM0Isa0NBQWtDO2dCQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUs7Z0JBQzdHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTTtnQkFDbEgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLGdFQUF3QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsZ0VBQXdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLDJCQUEyQjtnQkFDbEwsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixJQUFJLElBQUksRUFBRTtvQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztpQkFDbEY7Z0JBQ0Qsb0dBQW9HO2FBQ3JHO2lCQUFNLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDekIsZUFBZTtnQkFFZixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNuRCwrQ0FBK0M7Z0JBQy9DLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFO29CQUFFLE9BQU8sQ0FBQyxFQUFDLHNFQUFzRTtnQkFDcEcsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osMERBQTBEO2dCQUUxRCxtREFBbUQ7Z0JBQ25ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzFCLDREQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDM0g7Z0JBQ0QsNERBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3hDO2lCQUFNLElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtnQkFDMUIsZ0JBQWdCO2dCQUNoQixJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRTtvQkFBRSxPQUFPLENBQUM7Z0JBQzdCLE1BQU0sT0FBTyxHQUFHLDZEQUFxQixDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQzlDLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7b0JBQUUsT0FBTyxDQUFDO2dCQUN6QyxrR0FBa0c7Z0JBQ2xHLGlJQUFpSTtnQkFFakkscURBQXFEO2dCQUNyRCxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7Z0JBQzdDLDJDQUEyQztnQkFDM0MsdUdBQXVHO2dCQUN2RyxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksZ0VBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBRTtvQkFDNUcsMENBQTBDO29CQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQztpQkFDdEU7cUJBQU07b0JBQ0wsMkRBQTJEO29CQUMzRCw4RUFBOEU7b0JBQzlFLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUN6RCwwQkFBMEI7b0JBQzFCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7b0JBQ25ELHNDQUFzQztvQkFDdEMsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUM7cUJBQ25FO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztxQkFDeEM7aUJBQ0Y7Z0JBRUQsT0FBTyxHQUFHLEVBQUUsR0FBRyxPQUFPO2FBQ3ZCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsUUFBUSxXQUFXLDhEQUFzQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQy9GLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLFFBQVEsRUFBRSxDQUFDO2FBQ2pEO1lBQ0QsK0RBQStEO1lBQy9ELElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxHQUFHLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sbUJBQW1CLEdBQUcsR0FBUSxFQUFFLENBQUMsK0RBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUMxRixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxLQUFLLENBQUMsRUFBRTtvQkFDcEMsK0RBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsb0JBQW9CO2lCQUN6RTtxQkFBTTtvQkFDTCxVQUFVLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBQyxtREFBbUQ7aUJBQ2hIO2FBQ0Y7U0FDRjtRQUNELE9BQU8sT0FBTztJQUNoQixDQUFDO0NBQ0Y7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0luQjs7Ozt3RUFJd0U7QUFHNUI7QUFFNUMsTUFBTSw0QkFBNEI7SUFNaEMsWUFBYSxJQUFtQixFQUFFLG9CQUEyQyxFQUFFLGNBQXVDO1FBQ3BILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtRQUNwQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYztJQUN0QyxDQUFDO0lBRUQsWUFBWSxDQUFFLEdBQVc7UUFDdkIsSUFBSSxPQUFPLEdBQUcsQ0FBQztRQUNmLElBQUksR0FBRyxHQUFHLENBQUM7UUFDWCxRQUFRLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekIsS0FBSyxDQUFDLEVBQUUsb0JBQW9CO2dCQUMxQixJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFBRSxPQUFPLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxHQUFHLCtEQUF1QixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLGtHQUFrRztnQkFDN0osT0FBTyxHQUFHLENBQUM7Z0JBQ1gsTUFBSztZQUNQLEtBQUssQ0FBQyxFQUFFLGdDQUFnQztnQkFDdEMsT0FBTyxHQUFHLENBQUM7Z0JBQ1gsTUFBSztZQUNQLEtBQUssQ0FBQyxFQUFFLHdCQUF3QjtnQkFDOUIsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQUUsT0FBTyxDQUFDO2dCQUM1QixHQUFHLEdBQUcsNkRBQXFCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ3ZDLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHO29CQUFFLE9BQU8sQ0FBQztnQkFDOUIsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUM7Z0JBQzVELE1BQUs7U0FDUjtRQUNELE9BQU8sT0FBTztJQUNoQixDQUFDO0NBQ0Y7QUFFc0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q3ZDOzs7O3dFQUl3RTtBQUl4RTs7R0FFRztBQUNILE1BQU0sY0FBYztJQUtsQixZQUFhLElBQW1CLEVBQUUsY0FBdUM7UUFDdkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYztJQUN0QyxDQUFDO0lBRUQsWUFBWSxDQUFFLEdBQVc7UUFDdkIsSUFBSSxPQUFPLEdBQUcsQ0FBQztRQUNmLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDcEIsOEJBQThCO1lBQzlCLE9BQU8sR0FBRyxFQUFFO1lBQ1osZ0VBQWdFO1lBQ2hFLHNEQUFzRDtZQUN0RCxxQ0FBcUM7WUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBRW5DLE9BQU8sT0FBTztTQUNmO1FBRUQsT0FBTyxDQUFDO0lBQ1YsQ0FBQztDQUNGO0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkN6Qjs7Ozt3RUFJd0U7QUFJeEU7O0dBRUc7QUFDSCxNQUFNLGVBQWU7SUFJbkIsWUFBYSxJQUFtQixFQUFFLGNBQXVDO1FBQ3ZFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtRQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWM7SUFDdEMsQ0FBQztJQUVELFlBQVksQ0FBRSxHQUFXO1FBQ3ZCLElBQUksT0FBTyxHQUFHLENBQUM7UUFDZixJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ25CLDJCQUEyQjtZQUMzQixPQUFPLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQywrSEFBK0g7WUFDMUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxPQUFPO1NBQ2Y7UUFDRCxPQUFPLENBQUM7SUFDVixDQUFDO0NBQ0Y7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakMxQjs7Ozt3RUFJd0U7QUFHNUI7QUFFNUM7O0dBRUc7QUFDSCxNQUFNLGdCQUFnQjtJQUlwQixZQUFhLElBQW1CLEVBQUUsY0FBdUM7UUFDdkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYztJQUN0QyxDQUFDO0lBRUQsWUFBWSxDQUFFLEdBQVc7UUFDdkIsSUFBSSxPQUFPLEdBQUcsQ0FBQztRQUNmLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbkIsNEJBQTRCO1lBQzVCLE9BQU8sR0FBRyxDQUFDO1lBQ1gsSUFBSSw2REFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN2QyxxREFBcUQ7Z0JBQ3JELDBEQUEwRDtnQkFDMUQsNEJBQTRCO2dCQUM1QiwyREFBMkQ7Z0JBQzNELE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUM7YUFDaEU7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsMEJBQTBCO1lBQ3JFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sT0FBTztTQUNmO1FBQ0QsT0FBTyxDQUFDO0lBQ1YsQ0FBQztDQUNGO0FBRTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QzNCOzs7O3dFQUl3RTtBQUk1QjtBQUNVO0FBQ3RELE1BQU0sb0JBQW9CO0lBR3hCLFlBQWEsSUFBMEIsRUFBRSxNQUFlO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07SUFDdEIsQ0FBQztJQUVELG1CQUFtQixDQUFFLEdBQVc7UUFDOUIsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUM7UUFDNUIsTUFBTSxHQUFHLEdBQUcsNkRBQXFCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDN0MsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUc7WUFBRSxPQUFPLENBQUM7UUFFOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDakMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssa0JBQWtCLENBQUMsRUFBRTtnQkFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7b0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7b0JBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQztpQkFBRTtnQkFDdEgsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSTtpQkFBRTtnQkFDN0gsSUFBSSxtRUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksbUVBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUFFO2dCQUNySixJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO29CQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQUUsQ0FBQyx5QkFBeUI7Z0JBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQUUsQ0FBQyxvQkFBb0I7YUFDakw7U0FDRjtRQUNELE9BQU8sR0FBRztJQUNaLENBQUM7Q0FDRjtBQUU4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckMvQjs7Ozt3RUFJd0U7QUFHNUI7QUFFVTtBQUV0RDs7R0FFRztBQUNILE1BQU0sVUFBVTtJQU1kLFlBQWEsSUFBbUIsRUFBRSxNQUFlLEVBQUUsY0FBdUM7UUFDeEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWM7SUFDdEMsQ0FBQztJQUVELFlBQVksQ0FBRSxHQUFXO1FBQ3ZCLElBQUksT0FBTyxHQUFXLENBQUM7UUFDdkIsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUNwQixzQkFBc0I7WUFFdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFDLHdEQUF3RDtZQUNqRixNQUFNLE9BQU8sR0FBRyw2REFBcUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQzlDLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsT0FBTztnQkFBRSxPQUFPLENBQUM7WUFDdkMsT0FBTyxHQUFHLEVBQUUsR0FBRyxPQUFPO1lBRXRCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsSUFBSSxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQywrREFBdUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsK0RBQXVCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQUU7WUFDeEosSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRywrREFBdUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsK0RBQXVCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMzSSw4RkFBOEY7WUFDOUYsa0dBQWtHO1lBRWxHLCtEQUErRDtZQUMvRCw2R0FBNkc7WUFFN0csSUFBSSxrQkFBa0IsR0FBVyxFQUFFO1lBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2dCQUFFLGtCQUFrQixJQUFJLDhEQUFzQixDQUFDLEVBQUUsQ0FBQztZQUN6RSxrQkFBa0IsSUFBSSw4REFBc0IsQ0FBQyxDQUFDLENBQUM7WUFFL0Msa0JBQWtCLElBQUksOERBQXNCLENBQUMsSUFBSSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztZQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxnRUFBd0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxrQkFBa0IsR0FBRyw4REFBc0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMscUNBQXFDO1lBRXZNLG1EQUFtRDtZQUNuRCwwUEFBMFA7WUFDMVAsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsZ0VBQXdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsZ0VBQXdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsZ0VBQXdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQUUsQ0FBQywyQkFBMkI7WUFFNVAsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFFdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUMzQywyRUFBdUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbkQsOENBQThDO1lBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFDLHVCQUF1QjtZQUVsRCw4Q0FBOEM7WUFDOUMsSUFBSTtZQUNKLDRFQUE0RTtZQUM1RSxJQUFJO1lBRUosT0FBTyxPQUFPO1NBQ2Y7UUFDRCxPQUFPLENBQUM7SUFDVixDQUFDO0NBQ0Y7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFckI7Ozs7d0VBSXdFO0FBRW5DO0FBQ1k7QUFDNEI7QUFDMUI7QUFDRTtBQUNaO0FBRXVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmhIOzs7O3dFQUl3RTtBQUdvRTtBQUU1RDtBQUM3QjtBQUVuRDs7R0FFRztBQUNILE1BQU0scUJBQXFCO0lBRXpCLFlBQWEsSUFBbUIsRUFBRSxNQUFlLEVBQUUsY0FBdUM7UUFDeEYsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSwrREFBYyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsRUFBQywwQ0FBMEM7UUFDN0csSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLGdFQUFlLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxFQUFDLGdEQUFnRDtRQUNwSCxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksaUVBQWdCLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxFQUFDLGlEQUFpRDtRQUN0SCxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksMkRBQVUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQyxFQUFDLHNDQUFzQztRQUM3RyxNQUFNLG9CQUFvQixHQUFHLElBQUksMEZBQW9CLENBQUMsSUFBNEIsRUFBRSxNQUFNLENBQUM7UUFDM0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLDZFQUE0QixDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxjQUFjLENBQUMsRUFBQyx3RUFBd0U7UUFDL0ssSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLHlEQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLDZEQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUMsa0NBQWtDO0lBQ3pJLENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZLENBQUUsS0FBYTtRQUN6QixJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUUsRUFBRSw2Q0FBNkM7WUFDL0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztTQUNuQzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFDLDBIQUEwSDtTQUNsSztJQUNILENBQUM7Q0FDRjtBQUUrQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDaEM7Ozt3RUFHd0U7QUFJeEUsNkNBQTZDO0FBQ3RDLE1BQU0scUJBQXFCO0lBRWhDLFlBQWEsUUFBUTtRQU9yQixnREFBZ0Q7UUFDaEQsZ0JBQVcsR0FBRyxDQUFDLEdBQVcsRUFBTyxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSTtnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHO1lBQzlGLElBQUksQ0FBQyxHQUFXLEVBQUU7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25DLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUU7aUJBQ3JCO3FCQUFNLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM1QixDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQ2xFO3FCQUFNO29CQUNMLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDakI7YUFDRjtZQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQXJCQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7SUFDMUIsQ0FBQztDQXFCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNEOzs7O3dFQUl3RTtBQUN6QjtBQUNKO0FBQzNDOztHQUVHO0FBQ0ksTUFBTSxtQkFBbUIsR0FBRztJQUNqQyxpQkFBaUIsQ0FBRSxDQUFNO1FBQ3ZCLHFFQUFxRTtRQUNyRSxJQUFJLHlEQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO1FBQ2xJLElBQUkseURBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDaEcsSUFBSSx5REFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUNqRyxPQUFPLHFEQUFlLENBQUMsQ0FBQyxDQUFDLElBQWMsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7Ozs7d0VBSXdFO0FBRXhFOztHQUVHO0FBQ0gsTUFBTSxlQUFlLEdBQUc7SUFDdEIsS0FBSyxFQUFFLEVBQUU7SUFDVCxRQUFRLEVBQUUsRUFBRTtJQUNaLEtBQUssRUFBRSxFQUFFO0lBQ1QsS0FBSyxFQUFFLEVBQUU7SUFDVCxLQUFLLEVBQUUsRUFBRTtJQUNULGNBQWMsRUFBRSxFQUFFO0lBQ2xCLFNBQVMsRUFBRSxFQUFFO0lBQ2IsV0FBVyxFQUFFLEVBQUU7SUFDZixLQUFLLEVBQUUsRUFBRTtJQUNULGNBQWMsRUFBRSxFQUFFO0lBQ2xCLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLEVBQUU7SUFDVCxZQUFZLEVBQUUsRUFBRTtJQUNoQixTQUFTLEVBQUUsRUFBRTtJQUNiLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7SUFDVixXQUFXLEVBQUUsRUFBRTtJQUNmLE9BQU8sRUFBRSxFQUFFO0lBQ1gsU0FBUyxFQUFFLEVBQUU7SUFDYixZQUFZLEVBQUUsRUFBRTtJQUNoQixXQUFXLEVBQUUsRUFBRTtJQUNmLFNBQVMsRUFBRSxFQUFFO0lBQ2IsT0FBTyxFQUFFLEdBQUc7SUFDWixVQUFVLEVBQUUsR0FBRztJQUNmLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsS0FBSyxFQUFFLE1BQU07SUFDYixXQUFXLEVBQUUsTUFBTTtJQUNuQixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsSUFBSSxFQUFFLE1BQU07SUFDWixNQUFNLEVBQUUsTUFBTTtJQUNkLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFLE1BQU07SUFDbEIsU0FBUyxFQUFFLE1BQU07SUFDakIsR0FBRyxFQUFFLE1BQU07SUFDWCxNQUFNLEVBQUUsTUFBTTtJQUNkLEVBQUUsRUFBRSxNQUFNO0lBQ1YsRUFBRSxFQUFFLE1BQU07SUFDVixFQUFFLEVBQUUsTUFBTTtJQUNWLEVBQUUsRUFBRSxNQUFNO0lBQ1YsRUFBRSxFQUFFLE1BQU07SUFDVixFQUFFLEVBQUUsTUFBTTtJQUNWLEVBQUUsRUFBRSxNQUFNO0lBQ1YsRUFBRSxFQUFFLE1BQU07SUFDVixFQUFFLEVBQUUsTUFBTTtJQUNWLEdBQUcsRUFBRSxNQUFNO0lBQ1gsR0FBRyxFQUFFLE1BQU07SUFDWCxHQUFHLEVBQUUsTUFBTTtJQUNYLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFlBQVksRUFBRSxNQUFNO0lBQ3BCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsUUFBUSxFQUFFLE1BQU07SUFDaEIsUUFBUSxFQUFFLE1BQU07SUFDaEIsU0FBUyxFQUFFLE1BQU07Q0FDbEI7QUFFRCxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RTlCOzs7O3dFQUl3RTtBQUc1QjtBQUVEO0FBRzNDLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLFdBQVcsQ0FBRSxNQUFlLEVBQUUsSUFBbUI7UUFDL0MsSUFBSSxNQUFNLENBQUMsT0FBTztZQUFFLE9BQU07UUFFMUIsSUFBSSxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtZQUN4QixxREFBcUQ7WUFDckQsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxnRUFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkcsZ0VBQXdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZHLGdFQUF3QixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM3RSxnRUFBd0IsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsMkJBQTJCO1lBQzVHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVU7WUFDcEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVTtTQUNyQzthQUFNO1lBQ0wsNEJBQTRCO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0MsZ0VBQXdCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDdkMsZ0VBQXdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsMkJBQTJCO1NBQ3hFO0lBQ0gsQ0FBQztJQUVELE9BQU8sQ0FBRSxJQUFtQixFQUFFLENBQWMsRUFBRSxDQUFTO1FBQ3JELElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQUUsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUFFO1NBQUU7YUFBTTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyw4REFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO0lBQzVLLENBQUM7SUFFRCxXQUFXLENBQUUsTUFBZSxFQUFFLElBQW1CLEVBQUUsQ0FBTTtRQUN2RCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxJQUFJLHlEQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLHlEQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUFFO1lBQ3JJLENBQUMsR0FBRyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLDhEQUFzQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM5RixNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUs7U0FDNUI7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFFLE1BQWUsRUFBRSxJQUFtQjtRQUNqRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRTtZQUM1QyxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLDhEQUFzQixDQUFDLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixDQUFDO1NBQy9GO0lBQ0gsQ0FBQztJQUVELGlCQUFpQixDQUFFLElBQW1CO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPLENBQUUsSUFBbUI7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFDLFVBQVU7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFDLE1BQU07UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFDLFNBQVM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFDLFNBQVM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFDLE1BQU07UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFDLFVBQVU7SUFDMUMsQ0FBQztDQUNGO0FBRXFCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEV0Qjs7Ozt3RUFJd0U7QUFJeEU7O0dBRUc7QUFDSSxNQUFNLFdBQVcsR0FBRztJQUN6Qjs7Ozs7T0FLRztJQUNILFFBQVEsQ0FBRSxNQUFlLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDN0MsSUFBSSxNQUFNLENBQUMsT0FBTztZQUFFLE9BQU07UUFFMUIsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxDQUFDLEdBQUcsRUFBRTtRQUNOLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxRQUFRLENBQUUsTUFBZSxFQUFFLEtBQWEsRUFBRSxHQUFXO1FBQ25ELElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBUztRQUNiLElBQUksQ0FBUztRQUNiLElBQUksTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDekIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTTtnQkFDdkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ25DLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JELEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNiO2lCQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2FBQUU7aUJBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDdEgsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTTtnQkFDdkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ25DLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUM7YUFDYjtTQUNGO1FBRUQsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNwQix3QkFBd0I7WUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRztZQUNyQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wseUJBQXlCO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRztZQUM1QyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUc7WUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQzVDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFDLCtCQUErQjtJQUM5RCxDQUFDO0lBRUQsS0FBSyxDQUFFLE1BQWUsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUMxQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQztRQUNuQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQztZQUFFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQztRQUNwRixJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQztZQUFFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQztRQUNwRixJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQztRQUNuQyxPQUFPLENBQUM7SUFDVixDQUFDO0lBRUQsS0FBSyxDQUFFLE1BQWUsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUMxQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQztRQUNuQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQztRQUNuQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQztZQUFFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQztRQUNyRixJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQztZQUFFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFH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QUMsQ0FBQztRQUMzRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQztZQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDekksSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUU1Ryw2RUFBNkU7UUFDN0UsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRTtTQUFFO1FBQy9ILElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUU7U0FBRTtRQUMvSCxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FB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QUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsTUFBTTtZQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsU0FBUztZQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsZUFBZTtZQUN6QyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsY0FBYztZQUN4QyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsYUFBYTtZQUN2QyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsTUFBTTtZQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsU0FBUztZQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsV0FBVztZQUNyQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsTUFBTTtZQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsT0FBTztZQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsT0FBTztZQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsS0FBSztZQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsUUFBUTtZQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsT0FBTztZQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsU0FBUztZQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLEVBQUUsR0FBRyxNQUFNLEVBQUMsU0FBUztZQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsa0JBQWtCO1lBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxRQUFRO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxRQUFRO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxRQUFRO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxRQUFRO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxRQUFRO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxJQUFJO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxJQUFJO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxJQUFJO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxJQUFJO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxJQUFJO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxJQUFJO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxJQUFJO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxJQUFJO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxJQUFJO1lB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsV0FBVzs7QUFFdkU7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYixhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYixhQUFhO0FBQ2IsWUFBWTtBQUNaLGFBQWE7QUFDYixhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYjtBQUNBLGNBQWM7QUFDZDtBQUNBLFlBQVk7QUFDWixxQ0FBcUM7QUFDckMsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0EsaUJBQWlCLGFBQWE7QUFDOUI7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLG9DQUFvQztBQUNwQztBQUNBLDZDQUE2Qyx3QkFBd0I7QUFDckU7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUIsV0FBVztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQzs7QUFFQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiLFlBQVk7QUFDWixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQixvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsMkJBQTJCO0FBQ3ZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkLGVBQWU7QUFDZixhQUFhO0FBQ2IsYUFBYTtBQUNiLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBLFlBQVk7QUFDWixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLGdDQUFnQztBQUNoQyw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsd0NBQXdDO0FBQ3hDLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLHNDQUFzQztBQUN0QztBQUNBLCtCQUErQjtBQUMvQjtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckI7QUFDQSxtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjtBQUNBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEI7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEI7QUFDQSxtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsbUNBQW1DO0FBQ25DLGFBQWE7QUFDYixjQUFjLFlBQVk7QUFDMUI7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUMxSixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQjtBQUN6SixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUN6SixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMzSixLQUFLLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUN2SixLQUFLLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUM3SixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUN4SixLQUFLLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMxSixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUMxSixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUMzSixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQjtBQUN4SixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUN6SixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUMzSixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUN6SixLQUFLLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUMxSixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUN6SixLQUFLLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUN6SixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMzSixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQjtBQUMxSixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMxSixLQUFLLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUN2SixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUM1SixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUN4SixLQUFLLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMzSixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUN6SixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUMxSixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUMxSixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQjtBQUMxSixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUMxSixLQUFLLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUN4SixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUMzSixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMxSixLQUFLLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUN4SixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQjtBQUMxSixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUN6SixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMzSixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUN4SixLQUFLLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUM1SixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUN4SixLQUFLLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMxSixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUN6SixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUMzSixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQjtBQUN6SixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUN6SixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUMzSixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUN6SixLQUFLLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUM1SixLQUFLLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUN4SixLQUFLLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUN6SixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMzSixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUN4SixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMzSixLQUFLLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUN2SixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUM1SixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUN6SixLQUFLLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMzSixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUN4SixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUMxSixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQjtBQUN6SixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQjtBQUMxSixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUMzSixLQUFLLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUN4SixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUMzSixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMxSixLQUFLLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUMxSixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQjtBQUN6SixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUN6SixLQUFLLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMzSixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUN4SixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtBQUMzSixLQUFLLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUN4SixLQUFLLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtBQUMxSixLQUFLLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtBQUMxSixLQUFLLG9CQUFvQjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0I7QUFDMUksS0FBSyxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0I7QUFDNUksS0FBSyxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUI7QUFDeEksS0FBSyxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUI7QUFDN0ksS0FBSyxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0I7QUFDNUksS0FBSyxxQkFBcUIsRUFBRSxtQkFBbUI7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiw0QkFBNEI7QUFDNUIsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsYUFBYTtBQUNiLGFBQWE7QUFDYixZQUFZO0FBQ1osWUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGFBQWE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFlBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3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UUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLHFCQUFxQixFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUNqUTtnQkFDQSxDQUFDLENBQUMsRUFBRTtZQUNOLDJEQUFDLG1EQUFVLElBQUMsR0FBRyxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQzdJLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVc7b0JBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxFQUN0RyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXO29CQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsRUFDdEcsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVztvQkFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEdBQ2xHLENBQ0UsQ0FDUjtJQUNILENBQUM7Q0FDRiIsImZpbGUiOiJrdm0uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widWktdG9vbGtpdFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ1aS10b29sa2l0XCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0pO1xufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSB7XG5yZXR1cm4gIiwidmFyIGNoYXJlbmMgPSB7XG4gIC8vIFVURi04IGVuY29kaW5nXG4gIHV0Zjg6IHtcbiAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIHN0cmluZ1RvQnl0ZXM6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgcmV0dXJuIGNoYXJlbmMuYmluLnN0cmluZ1RvQnl0ZXModW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBzdHJpbmdcbiAgICBieXRlc1RvU3RyaW5nOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoY2hhcmVuYy5iaW4uYnl0ZXNUb1N0cmluZyhieXRlcykpKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQmluYXJ5IGVuY29kaW5nXG4gIGJpbjoge1xuICAgIC8vIENvbnZlcnQgYSBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgc3RyaW5nVG9CeXRlczogZnVuY3Rpb24oc3RyKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKylcbiAgICAgICAgYnl0ZXMucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIHN0cmluZ1xuICAgIGJ5dGVzVG9TdHJpbmc6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciBzdHIgPSBbXSwgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgc3RyLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSkpO1xuICAgICAgcmV0dXJuIHN0ci5qb2luKCcnKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2hhcmVuYztcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIGJhc2U2NG1hcFxuICAgICAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLycsXG5cbiAgY3J5cHQgPSB7XG4gICAgLy8gQml0LXdpc2Ugcm90YXRpb24gbGVmdFxuICAgIHJvdGw6IGZ1bmN0aW9uKG4sIGIpIHtcbiAgICAgIHJldHVybiAobiA8PCBiKSB8IChuID4+PiAoMzIgLSBiKSk7XG4gICAgfSxcblxuICAgIC8vIEJpdC13aXNlIHJvdGF0aW9uIHJpZ2h0XG4gICAgcm90cjogZnVuY3Rpb24obiwgYikge1xuICAgICAgcmV0dXJuIChuIDw8ICgzMiAtIGIpKSB8IChuID4+PiBiKTtcbiAgICB9LFxuXG4gICAgLy8gU3dhcCBiaWctZW5kaWFuIHRvIGxpdHRsZS1lbmRpYW4gYW5kIHZpY2UgdmVyc2FcbiAgICBlbmRpYW46IGZ1bmN0aW9uKG4pIHtcbiAgICAgIC8vIElmIG51bWJlciBnaXZlbiwgc3dhcCBlbmRpYW5cbiAgICAgIGlmIChuLmNvbnN0cnVjdG9yID09IE51bWJlcikge1xuICAgICAgICByZXR1cm4gY3J5cHQucm90bChuLCA4KSAmIDB4MDBGRjAwRkYgfCBjcnlwdC5yb3RsKG4sIDI0KSAmIDB4RkYwMEZGMDA7XG4gICAgICB9XG5cbiAgICAgIC8vIEVsc2UsIGFzc3VtZSBhcnJheSBhbmQgc3dhcCBhbGwgaXRlbXNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7IGkrKylcbiAgICAgICAgbltpXSA9IGNyeXB0LmVuZGlhbihuW2ldKTtcbiAgICAgIHJldHVybiBuO1xuICAgIH0sXG5cbiAgICAvLyBHZW5lcmF0ZSBhbiBhcnJheSBvZiBhbnkgbGVuZ3RoIG9mIHJhbmRvbSBieXRlc1xuICAgIHJhbmRvbUJ5dGVzOiBmdW5jdGlvbihuKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdOyBuID4gMDsgbi0tKVxuICAgICAgICBieXRlcy5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBiaWctZW5kaWFuIDMyLWJpdCB3b3Jkc1xuICAgIGJ5dGVzVG9Xb3JkczogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIHdvcmRzID0gW10sIGkgPSAwLCBiID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrLCBiICs9IDgpXG4gICAgICAgIHdvcmRzW2IgPj4+IDVdIHw9IGJ5dGVzW2ldIDw8ICgyNCAtIGIgJSAzMik7XG4gICAgICByZXR1cm4gd29yZHM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYmlnLWVuZGlhbiAzMi1iaXQgd29yZHMgdG8gYSBieXRlIGFycmF5XG4gICAgd29yZHNUb0J5dGVzOiBmdW5jdGlvbih3b3Jkcykge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgYiA9IDA7IGIgPCB3b3Jkcy5sZW5ndGggKiAzMjsgYiArPSA4KVxuICAgICAgICBieXRlcy5wdXNoKCh3b3Jkc1tiID4+PiA1XSA+Pj4gKDI0IC0gYiAlIDMyKSkgJiAweEZGKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBoZXggc3RyaW5nXG4gICAgYnl0ZXNUb0hleDogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIGhleCA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhleC5wdXNoKChieXRlc1tpXSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcbiAgICAgICAgaGV4LnB1c2goKGJ5dGVzW2ldICYgMHhGKS50b1N0cmluZygxNikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhleC5qb2luKCcnKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGhleCBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgaGV4VG9CeXRlczogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBjID0gMDsgYyA8IGhleC5sZW5ndGg7IGMgKz0gMilcbiAgICAgICAgYnl0ZXMucHVzaChwYXJzZUludChoZXguc3Vic3RyKGMsIDIpLCAxNikpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIGJhc2UtNjQgc3RyaW5nXG4gICAgYnl0ZXNUb0Jhc2U2NDogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIGJhc2U2NCA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIHZhciB0cmlwbGV0ID0gKGJ5dGVzW2ldIDw8IDE2KSB8IChieXRlc1tpICsgMV0gPDwgOCkgfCBieXRlc1tpICsgMl07XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKVxuICAgICAgICAgIGlmIChpICogOCArIGogKiA2IDw9IGJ5dGVzLmxlbmd0aCAqIDgpXG4gICAgICAgICAgICBiYXNlNjQucHVzaChiYXNlNjRtYXAuY2hhckF0KCh0cmlwbGV0ID4+PiA2ICogKDMgLSBqKSkgJiAweDNGKSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgYmFzZTY0LnB1c2goJz0nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYXNlNjQuam9pbignJyk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBiYXNlLTY0IHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBiYXNlNjRUb0J5dGVzOiBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICAgIC8vIFJlbW92ZSBub24tYmFzZS02NCBjaGFyYWN0ZXJzXG4gICAgICBiYXNlNjQgPSBiYXNlNjQucmVwbGFjZSgvW15BLVowLTkrXFwvXS9pZywgJycpO1xuXG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBpID0gMCwgaW1vZDQgPSAwOyBpIDwgYmFzZTY0Lmxlbmd0aDtcbiAgICAgICAgICBpbW9kNCA9ICsraSAlIDQpIHtcbiAgICAgICAgaWYgKGltb2Q0ID09IDApIGNvbnRpbnVlO1xuICAgICAgICBieXRlcy5wdXNoKCgoYmFzZTY0bWFwLmluZGV4T2YoYmFzZTY0LmNoYXJBdChpIC0gMSkpXG4gICAgICAgICAgICAmIChNYXRoLnBvdygyLCAtMiAqIGltb2Q0ICsgOCkgLSAxKSkgPDwgKGltb2Q0ICogMikpXG4gICAgICAgICAgICB8IChiYXNlNjRtYXAuaW5kZXhPZihiYXNlNjQuY2hhckF0KGkpKSA+Pj4gKDYgLSBpbW9kNCAqIDIpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gY3J5cHQ7XG59KSgpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XFxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uYnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgbWluLXdpZHRoOiA5MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9Db25uZWN0QnV0dG9uLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozt1RUFBQTtBQUtBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcXHJcXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxcclxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi5idXR0b257XFxyXFxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxuICAgIG1pbi13aWR0aDogOTBweFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XFxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZW5jb2Rpbmcge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5lbmNvZGluZyBsYWJlbCB7XFxuICBwYWRkaW5nOiAycHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5lbmNvZGluZyBzZWxlY3Qge1xcbiAgcGFkZGluZzogMnB4IDA7XFxufVxcblxcbi5yZWxkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZWFjdGpzL2NvbXBvbmVudHMvS1ZNL0VuY29kaW5nT3B0aW9ucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7dUVBQUE7QUFLQTtFQUNJLGlCQUFBO0FBQUo7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNFO0VBQ0UsY0FBQTtBQUVKOztBQUNFO0VBQ0UsWUFBQTtBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcXHJcXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxcclxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbiBcXHJcXG4uZW5jb2Rpbmcge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIH1cXHJcXG4gIC5lbmNvZGluZyBsYWJlbCB7ICAgICAgXFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgLmVuY29kaW5nIHNlbGVjdCB7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucmVsZGlzYWJsZWR7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XFxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9IZWFkZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O3VFQUFBO0FBS0E7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxcclxcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXFxyXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuIFxcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5jYW52YXMge1xcbiAgbWF4LWhlaWdodDogOTAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9QdXJlQ2FudmFzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozt1RUFBQTtBQUtBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XFxyXFxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcXHJcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4gXFxyXFxuLmNhbnZhc3tcXHJcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jYW52YXMtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVhY3Rqcy9jb21wb25lbnRzL0tWTS9VSS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7dUVBQUE7QUFLQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNHLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxcclxcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXFxyXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuIFxcclxcbip7IC8vICogcmVmZXJzIGV2ZXJ5IGVsZW1lbnQgYW5kIHJlbW92ZXMgZGVmYXVsdCBtYXJnaW4gIHBhZGRpbmcgdGhhdCBjb21lcyB3aXRoIGh0bWwgZWxlbWVudHMgYm9keSwgaDEgZXRjXFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8vZWxlbWVudCBwYWRkaW5nIGFuZCBib3JkZXIgYXJlIGluY2x1ZGVkIGluIHRoZSB3aWR0aCBhbmQgaGVpZ2h0XFxyXFxufVxcclxcblxcclxcbi5jYW52YXMtY29udGFpbmVye1xcclxcbiAgIGhlaWdodDogMTAwdmg7IFxcclxcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsIihmdW5jdGlvbigpe1xyXG4gIHZhciBjcnlwdCA9IHJlcXVpcmUoJ2NyeXB0JyksXHJcbiAgICAgIHV0ZjggPSByZXF1aXJlKCdjaGFyZW5jJykudXRmOCxcclxuICAgICAgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKSxcclxuICAgICAgYmluID0gcmVxdWlyZSgnY2hhcmVuYycpLmJpbixcclxuXHJcbiAgLy8gVGhlIGNvcmVcclxuICBtZDUgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgLy8gQ29udmVydCB0byBieXRlIGFycmF5XHJcbiAgICBpZiAobWVzc2FnZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmcpXHJcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RpbmcgPT09ICdiaW5hcnknKVxyXG4gICAgICAgIG1lc3NhZ2UgPSBiaW4uc3RyaW5nVG9CeXRlcyhtZXNzYWdlKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIG1lc3NhZ2UgPSB1dGY4LnN0cmluZ1RvQnl0ZXMobWVzc2FnZSk7XHJcbiAgICBlbHNlIGlmIChpc0J1ZmZlcihtZXNzYWdlKSlcclxuICAgICAgbWVzc2FnZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG1lc3NhZ2UsIDApO1xyXG4gICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZSkgJiYgbWVzc2FnZS5jb25zdHJ1Y3RvciAhPT0gVWludDhBcnJheSlcclxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UudG9TdHJpbmcoKTtcclxuICAgIC8vIGVsc2UsIGFzc3VtZSBieXRlIGFycmF5IGFscmVhZHlcclxuXHJcbiAgICB2YXIgbSA9IGNyeXB0LmJ5dGVzVG9Xb3JkcyhtZXNzYWdlKSxcclxuICAgICAgICBsID0gbWVzc2FnZS5sZW5ndGggKiA4LFxyXG4gICAgICAgIGEgPSAgMTczMjU4NDE5MyxcclxuICAgICAgICBiID0gLTI3MTczMzg3OSxcclxuICAgICAgICBjID0gLTE3MzI1ODQxOTQsXHJcbiAgICAgICAgZCA9ICAyNzE3MzM4Nzg7XHJcblxyXG4gICAgLy8gU3dhcCBlbmRpYW5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtW2ldID0gKChtW2ldIDw8ICA4KSB8IChtW2ldID4+PiAyNCkpICYgMHgwMEZGMDBGRiB8XHJcbiAgICAgICAgICAgICAoKG1baV0gPDwgMjQpIHwgKG1baV0gPj4+ICA4KSkgJiAweEZGMDBGRjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhZGRpbmdcclxuICAgIG1bbCA+Pj4gNV0gfD0gMHg4MCA8PCAobCAlIDMyKTtcclxuICAgIG1bKCgobCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBsO1xyXG5cclxuICAgIC8vIE1ldGhvZCBzaG9ydGN1dHNcclxuICAgIHZhciBGRiA9IG1kNS5fZmYsXHJcbiAgICAgICAgR0cgPSBtZDUuX2dnLFxyXG4gICAgICAgIEhIID0gbWQ1Ll9oaCxcclxuICAgICAgICBJSSA9IG1kNS5faWk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmxlbmd0aDsgaSArPSAxNikge1xyXG5cclxuICAgICAgdmFyIGFhID0gYSxcclxuICAgICAgICAgIGJiID0gYixcclxuICAgICAgICAgIGNjID0gYyxcclxuICAgICAgICAgIGRkID0gZDtcclxuXHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDBdLCAgNywgLTY4MDg3NjkzNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDFdLCAxMiwgLTM4OTU2NDU4Nik7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krIDJdLCAxNywgIDYwNjEwNTgxOSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyA0XSwgIDcsIC0xNzY0MTg4OTcpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyA1XSwgMTIsICAxMjAwMDgwNDI2KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDddLCAyMiwgLTQ1NzA1OTgzKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgOF0sICA3LCAgMTc3MDAzNTQxNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTcsIC00MjA2Myk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKzEyXSwgIDcsICAxODA0NjAzNjgyKTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsxM10sIDEyLCAtNDAzNDExMDEpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsxNV0sIDIyLCAgMTIzNjUzNTMyOSk7XHJcblxyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyAxXSwgIDUsIC0xNjU3OTY1MTApO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyA2XSwgIDksIC0xMDY5NTAxNjMyKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsxMV0sIDE0LCAgNjQzNzE3NzEzKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgMF0sIDIwLCAtMzczODk3MzAyKTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgNV0sICA1LCAtNzAxNTU4NjkxKTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsxMF0sICA5LCAgMzgwMTYwODMpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKzE1XSwgMTQsIC02NjA0NzgzMzUpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyA5XSwgIDUsICA1Njg0NDY0MzgpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKzE0XSwgIDksIC0xMDE5ODAzNjkwKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsgM10sIDE0LCAtMTg3MzYzOTYxKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgOF0sIDIwLCAgMTE2MzUzMTUwMSk7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krMTNdLCAgNSwgLTE0NDQ2ODE0NjcpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyAyXSwgIDksIC01MTQwMzc4NCk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krIDddLCAxNCwgIDE3MzUzMjg0NzMpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKzEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcclxuXHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDVdLCAgNCwgLTM3ODU1OCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKzExXSwgMTYsICAxODM5MDMwNTYyKTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsxNF0sIDIzLCAtMzUzMDk1NTYpO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyAxXSwgIDQsIC0xNTMwOTkyMDYwKTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgNF0sIDExLCAgMTI3Mjg5MzM1Myk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krIDddLCAxNiwgLTE1NTQ5NzYzMik7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKzEzXSwgIDQsICA2ODEyNzkxNzQpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyAwXSwgMTEsIC0zNTg1MzcyMjIpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKyA2XSwgMjMsICA3NjAyOTE4OSk7XHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDldLCAgNCwgLTY0MDM2NDQ4Nyk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krMTJdLCAxMSwgLTQyMTgxNTgzNSk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krMTVdLCAxNiwgIDUzMDc0MjUyMCk7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krIDJdLCAyMywgLTk5NTMzODY1MSk7XHJcblxyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyAwXSwgIDYsIC0xOTg2MzA4NDQpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKyA3XSwgMTAsICAxMTI2ODkxNDE1KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDVdLCAyMSwgLTU3NDM0MDU1KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsxMl0sICA2LCAgMTcwMDQ4NTU3MSk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTUsIC0xMDUxNTIzKTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDhdLCAgNiwgIDE4NzMzMTMzNTkpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKzE1XSwgMTAsIC0zMDYxMTc0NCk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDZdLCAxNSwgLTE1NjAxOTgzODApO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKzEzXSwgMjEsICAxMzA5MTUxNjQ5KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgNF0sICA2LCAtMTQ1NTIzMDcwKTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDJdLCAxNSwgIDcxODc4NzI1OSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDldLCAyMSwgLTM0MzQ4NTU1MSk7XHJcblxyXG4gICAgICBhID0gKGEgKyBhYSkgPj4+IDA7XHJcbiAgICAgIGIgPSAoYiArIGJiKSA+Pj4gMDtcclxuICAgICAgYyA9IChjICsgY2MpID4+PiAwO1xyXG4gICAgICBkID0gKGQgKyBkZCkgPj4+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyeXB0LmVuZGlhbihbYSwgYiwgYywgZF0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEF1eGlsaWFyeSBmdW5jdGlvbnNcclxuICBtZDUuX2ZmICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGMgfCB+YiAmIGQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2dnICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGQgfCBjICYgfmQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2hoICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiBeIGMgXiBkKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9paSAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGMgXiAoYiB8IH5kKSkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG5cclxuICAvLyBQYWNrYWdlIHByaXZhdGUgYmxvY2tzaXplXHJcbiAgbWQ1Ll9ibG9ja3NpemUgPSAxNjtcclxuICBtZDUuX2RpZ2VzdHNpemUgPSAxNjtcclxuXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgaWYgKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCB8fCBtZXNzYWdlID09PSBudWxsKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYXJndW1lbnQgJyArIG1lc3NhZ2UpO1xyXG5cclxuICAgIHZhciBkaWdlc3RieXRlcyA9IGNyeXB0LndvcmRzVG9CeXRlcyhtZDUobWVzc2FnZSwgb3B0aW9ucykpO1xyXG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5hc0J5dGVzID8gZGlnZXN0Ynl0ZXMgOlxyXG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5hc1N0cmluZyA/IGJpbi5ieXRlc1RvU3RyaW5nKGRpZ2VzdGJ5dGVzKSA6XHJcbiAgICAgICAgY3J5cHQuYnl0ZXNUb0hleChkaWdlc3RieXRlcyk7XHJcbiAgfTtcclxuXHJcbn0pKCk7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Nvbm5lY3RCdXR0b24uc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0VuY29kaW5nT3B0aW9ucy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSGVhZGVyLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QdXJlQ2FudmFzLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9VSS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmltcG9ydCB7IERlc2t0b3AgfSBmcm9tICcuL0Rlc2t0b3AnXHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tICcuL0ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFR5cGVDb252ZXJ0ZXIgfSBmcm9tICcuLi9jb3JlL0NvbnZlcnRlcidcclxuaW1wb3J0IHsgaXNUcnV0aHkgfSBmcm9tICcuL1V0aWxpdGllcy9VdGlsaXR5TWV0aG9kcydcclxuaW1wb3J0ICBaTElCIGZyb20gJy4uL2NvcmUvemxpYi96bGliJ1xyXG5cclxuLyoqXHJcbiAqIEFNVERlc2t0b3AgcmVwcmVzZW50cyB0aGUgRGVza3RvcCBvbiB0aGUgYnJvd3Nlci4gQ29uc3RydWN0ZWQgdXNpbmcgdGhlIGNhbnZhcyBjb250ZXh0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFNVERlc2t0b3AgZXh0ZW5kcyBEZXNrdG9wIHtcclxuICByb3RhdGlvbjogbnVtYmVyXHJcbiAgdXNlWlJMRTogYm9vbGVhblxyXG4gIG9sZE1vdXNlWDogbnVtYmVyXHJcbiAgb2xkTW91c2VZOiBudW1iZXJcclxuICBsYXN0TW91c2VYOiBudW1iZXJcclxuICBsYXN0TW91c2VZOiBudW1iZXJcclxuICBicHA6IG51bWJlciAvLyBCeXRlcyBwZXIgcGl4ZWxcclxuICBrdm1EYXRhU3VwcG9ydGVkOiBib29sZWFuXHJcbiAgb25Ldm1EYXRhQWNrOiBhbnlcclxuICB1cmx2YXJzOiBhbnlcclxuICBvbkt2bURhdGFQZW5kaW5nOiBhbnlbXVxyXG4gIHNwYXJldzogbnVtYmVyXHJcbiAgc3BhcmVoOiBudW1iZXJcclxuICBzcGFyZXcyOiBudW1iZXJcclxuICBzcGFyZWgyOiBudW1iZXJcclxuICBzcGFyZTogYW55XHJcbiAgc3BhcmVjYWNoZTogYW55XHJcbiAgZnJhbWVSYXRlRGVsYXk6IG51bWJlclxyXG4gIGluZmxhdGU6IGFueVxyXG4gIGxvZ2dlcjogSUxvZ2dlclxyXG4gIGhvbGRpbmc6IGJvb2xlYW5cclxuICBjYW52YXNDdHg6IGFueVxyXG4gIHRjYW52YXM6IGFueVxyXG4gIHdpZHRoOiBudW1iZXJcclxuICBoZWlnaHQ6IG51bWJlclxyXG4gIGNhbnZhc0lkOiBzdHJpbmdcclxuICBmb2N1c01vZGU6IG51bWJlclxyXG4gIHJ3aWR0aDogbnVtYmVyXHJcbiAgcmhlaWdodDogbnVtYmVyXHJcbiAgU2NyZWVuV2lkdGg6IG51bWJlclxyXG4gIFNjcmVlbkhlaWdodDogbnVtYmVyXHJcbiAgbGFzdEtlZXBBbGl2ZTogbnVtYmVyXHJcbiAgYnV0dG9ubWFzazogbnVtYmVyXHJcbiAgc3RhdGU6IG51bWJlclxyXG4gIGNhbnZhc0NvbnRyb2w6IGFueVxyXG4gIHNjcm9sbGRpdjogYW55XHJcbiAgbGFzdE1vdXNlWDI6IG51bWJlclxyXG4gIG5vTW91c2VSb3RhdGU6IGJvb2xlYW5cclxuICB1cGRhdGVTY3JlZW5EaW1lbnNpb25zOiAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHZvaWRcclxuICBvbkt2bURhdGE6IChkYXRhOiBzdHJpbmcpID0+IHZvaWRcclxuICBvblNjcmVlblJlc2l6ZTogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW52YXNJZDogc3RyaW5nKSA9PiB2b2lkXHJcbiAgb25TY3JlZW5TaXplQ2hhbmdlOiAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHZvaWRcclxuICBzZXREZXNrRm9jdXM6IChlbDogc3RyaW5nLCBmb2N1c21vZGU6IG51bWJlcikgPT4gdm9pZFxyXG4gIGdldERlc2tGb2N1czogKGVsOiBzdHJpbmcpID0+IGFueVxyXG5cclxuICBwcm90b2NvbDogbnVtYmVyID0gMlxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RzIHRoZSBBTVQgRGVza3RvcFxyXG4gICAqIEBwYXJhbSBsb2dnZXIgbG9nZ2VyIHRvIHVzZSBmb3IgaW50ZXJuYWwgbG9nZ2luZ1xyXG4gICAqIEBwYXJhbSBjdHggQ2FudmFzIENvbnRleHQgdG8gZHJhdyBpbWFnZXNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciAobG9nZ2VyOiBJTG9nZ2VyLCBjdHg6IGFueSkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5pbmZsYXRlID0gWkxJQi5pbmZsYXRlSW5pdCgxNSlcclxuICAgIHRoaXMuYnBwID0gMVxyXG4gICAgdGhpcy5zdGF0ZSA9IDBcclxuICAgIHRoaXMuZm9jdXNNb2RlID0gMFxyXG4gICAgdGhpcy51c2VaUkxFID0gdHJ1ZVxyXG4gICAgdGhpcy5mcmFtZVJhdGVEZWxheSA9IDJcclxuICAgIHRoaXMuY2FudmFzQ3R4ID0gY3R4XHJcbiAgICB0aGlzLnNwYXJlY2FjaGUgPSB7fVxyXG4gICAgdGhpcy5idXR0b25tYXNrID0gMFxyXG4gICAgdGhpcy5jYW52YXNDb250cm9sID0gdGhpcy5jYW52YXNDdHguY2FudmFzXHJcbiAgICB0aGlzLmxhc3RNb3VzZU1vdmVUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXJcclxuICAgIHRoaXMuc2V0RGVza0ZvY3VzID0gKGVsLCBtb2RlKSA9PiB7XHJcblxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXREZXNrRm9jdXMgPSAoZWwpID0+IHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlblxyXG4gICAqIEBwYXJhbSBkYXRhIGRhdGEgdG8gZm9yd2FyZCB0byBEYXRhUHJvY2Vzc29yXHJcbiAgICovXHJcbiAgcHJvY2Vzc0RhdGEgKGRhdGE6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5vblByb2Nlc3NEYXRhKGRhdGEpXHJcbiAgfVxyXG5cclxuICBvblN0YXRlQ2hhbmdlIChzdGF0ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ2dlci52ZXJib3NlKGBzdGF0ZSBjaGFuZ2UgaW4gQU1URGVza3RvcDogJHtzdGF0ZX1gKVxyXG4gICAgaWYgKHN0YXRlID09PSAwKSB7XHJcbiAgICAgIC8vIENsZWFyIENhbnZhc1xyXG4gICAgICB0aGlzLmNhbnZhc0N0eC5maWxsU3R5bGUgPSAnI0ZGRkZGRidcclxuICAgICAgdGhpcy5jYW52YXNDdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXNDdHguY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhc0N0eC5jYW52YXMud2lkdGgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydCAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ2dlci52ZXJib3NlKCdTdGFydGluZyBkZXNrdG9wIGhlcmUnKVxyXG4gICAgdGhpcy5zdGF0ZSA9IDBcclxuICAgIHRoaXMuaW5mbGF0ZS5pbmZsYXRlUmVzZXQoKVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5pbmZsYXRlKVxyXG4gICAgLy8gdGhpcy5aUkxFZmlyc3QgPSAxO1xyXG4gICAgLy8gb2JqLmluYnl0ZXMgPSAwO1xyXG4gICAgLy8gb2JqLm91dGJ5dGVzID0gMDtcclxuICAgIHRoaXMub25Ldm1EYXRhUGVuZGluZyA9IFtdXHJcbiAgICB0aGlzLm9uS3ZtRGF0YUFjayA9IC0xXHJcbiAgICB0aGlzLmt2bURhdGFTdXBwb3J0ZWQgPSBmYWxzZVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1keW5hbWljLWRlbGV0ZVxyXG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuc3BhcmVjYWNoZSkgeyBkZWxldGUgdGhpcy5zcGFyZWNhY2hlW2ldIH1cclxuICB9XHJcblxyXG4gIG9uU2VuZEt2bURhdGEgKGRhdGE6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub25Ldm1EYXRhQWNrICE9PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMub25Ldm1EYXRhUGVuZGluZy5wdXNoKGRhdGEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoaXNUcnV0aHkodGhpcy51cmx2YXJzKSAmJiBpc1RydXRoeSh0aGlzLnVybHZhcnMua3ZtZGF0YXRyYWNlKSkgeyBjb25zb2xlLmxvZyhgS1ZNLVNlbmQgKCR7ZGF0YS5sZW5ndGh9KSBkYXRhYCkgfVxyXG4gICAgICBkYXRhID0gJ1xcMEt2bURhdGFDaGFubmVsXFwwJyArIGRhdGFcclxuICAgICAgdGhpcy5vblNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSg2LCAwLCAwLCAwKSArIFR5cGVDb252ZXJ0ZXIuSW50VG9TdHIoZGF0YS5sZW5ndGgpICsgZGF0YSlcclxuICAgICAgdGhpcy5vbkt2bURhdGFBY2sgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZW5kOiAoZGF0YTogc3RyaW5nKSA9PiB2b2lkXHJcbn1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5pbXBvcnQgeyBBTVRSZWRpcmVjdG9yIH0gZnJvbSAnLi9BTVRSZWRpcmVjdG9yJ1xyXG5pbXBvcnQgeyBJTG9nZ2VyLCBJS3ZtRGF0YUNvbW11bmljYXRvciB9IGZyb20gJy4vSW50ZXJmYWNlcydcclxuXHJcbmV4cG9ydCBjbGFzcyBBTVRLdm1EYXRhUmVkaXJlY3RvciBleHRlbmRzIEFNVFJlZGlyZWN0b3IgaW1wbGVtZW50cyBJS3ZtRGF0YUNvbW11bmljYXRvciB7XHJcbiAgb25TZW5kS3ZtRGF0YTogKGRhdGE6IHN0cmluZykgPT4gdm9pZFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlbGVzcy1jb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yIChsb2dnZXI6IElMb2dnZXIsIHByb3RvY29sOiBudW1iZXIsIGZyOiBGaWxlUmVhZGVyLCBob3N0OiBzdHJpbmcsIHBvcnQ6IG51bWJlciwgdXNlcjogc3RyaW5nLCBwYXNzOiBzdHJpbmcsIHRsczogbnVtYmVyLCB0bHMxb25seTogbnVtYmVyLCBzZXJ2ZXI/OiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGxvZ2dlciwgcHJvdG9jb2wsIGZyLCBob3N0LCBwb3J0LCB1c2VyLCBwYXNzLCB0bHMsIHRsczFvbmx5LCBzZXJ2ZXIpXHJcbiAgfVxyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuaW1wb3J0IHsgVHlwZUNvbnZlcnRlciB9IGZyb20gJy4vQ29udmVydGVyJ1xyXG5pbXBvcnQgeyBJQ29tbXVuaWNhdG9yLCBJTG9nZ2VyIH0gZnJvbSAnLi9JbnRlcmZhY2VzJ1xyXG5pbXBvcnQgbWQ1IGZyb20gJ21kNSdcclxuaW1wb3J0IHsgaXNUcnV0aHkgfSBmcm9tICcuL1V0aWxpdGllcy9VdGlsaXR5TWV0aG9kcydcclxuLyoqXHJcbiAqIFByb3RvY29sIGZvciBkaWZmZXJlbnQgUmVkaXIgcHJvdG9jb2xzLiBTT0w9MSxLVk09MixJREVSPVVTQi1SXHJcbiAqL1xyXG5leHBvcnQgZW51bSBQcm90b2NvbCB7XHJcbiAgU09MID0gMSxcclxuICBLVk0gPSAyLFxyXG4gIElERVIgPSAzXHJcbn1cclxuLyoqXHJcbiAqIEFNVFJlZGlyZWN0b3IgcHJvdmlkZXMgYWxsIGNvbW11bmljYXRpb24gb3ZlciBXZWJTb2NrZXRzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQU1UUmVkaXJlY3RvciBpbXBsZW1lbnRzIElDb21tdW5pY2F0b3Ige1xyXG4gIHN0YXRlOiBudW1iZXJcclxuICBzb2NrZXQ6IGFueVxyXG4gIGhvc3Q6IHN0cmluZ1xyXG4gIHBvcnQ6IG51bWJlclxyXG4gIHVzZXI6IHN0cmluZ1xyXG4gIHBhc3M6IHN0cmluZ1xyXG4gIHRsczogbnVtYmVyXHJcbiAgYXV0aFVyaTogc3RyaW5nXHJcbiAgdGxzdjFvbmx5OiBudW1iZXJcclxuICBjb25uZWN0U3RhdGU6IG51bWJlclxyXG4gIHByb3RvY29sOiBQcm90b2NvbFxyXG4gIGFtdEFjY3VtdWxhdG9yOiBzdHJpbmdcclxuICBhbXRTZXF1ZW5jZTogbnVtYmVyXHJcbiAgYW10S2VlcEFsaXZlVGltZXI6IGFueVxyXG5cclxuICBmaWxlUmVhZGVyOiBGaWxlUmVhZGVyXHJcbiAgZmlsZVJlYWRlckluVXNlOiBib29sZWFuXHJcbiAgZmlsZVJlYWRlckFjYzogYW55W11cclxuICByYW5kb21Ob25jZUNoYXJzOiBzdHJpbmdcclxuICBSZWRpcmVjdFN0YXJ0U29sOiBzdHJpbmdcclxuICBSZWRpcmVjdFN0YXJ0S3ZtOiBzdHJpbmdcclxuICBSZWRpcmVjdFN0YXJ0SWRlcjogc3RyaW5nXHJcbiAgdXJsdmFyczogYW55XHJcbiAgaW5EYXRhQ291bnQ6IG51bWJlclxyXG4gIHNlcnZlcjogc3RyaW5nIHwgdW5kZWZpbmVkXHJcbiAgbG9nZ2VyOiBJTG9nZ2VyXHJcbiAgb25Qcm9jZXNzRGF0YTogKGRhdGE6IHN0cmluZykgPT4gdm9pZFxyXG4gIG9uU3RhcnQ6ICgpID0+IHZvaWRcclxuICBvbk5ld1N0YXRlOiAoc3RhdGU6IG51bWJlcikgPT4gdm9pZFxyXG4gIG9uU3RhdGVDaGFuZ2VkOiAocmVkaXJlY3RvcjogYW55LCBzdGF0ZTogbnVtYmVyKSA9PiB2b2lkXHJcbiAgb25FcnJvcjogKCkgPT4gdm9pZFxyXG5cclxuICBjb25zdHJ1Y3RvciAobG9nZ2VyOiBJTG9nZ2VyLCBwcm90b2NvbDogbnVtYmVyLCBmcjogRmlsZVJlYWRlciwgaG9zdDogc3RyaW5nLCBwb3J0OiBudW1iZXIsIHVzZXI6IHN0cmluZywgcGFzczogc3RyaW5nLCB0bHM6IG51bWJlciwgdGxzMW9ubHk6IG51bWJlciwgc2VydmVyPzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZpbGVSZWFkZXIgPSBmclxyXG4gICAgdGhpcy5yYW5kb21Ob25jZUNoYXJzID0gJ2FiY2RlZjAxMjM0NTY3ODknXHJcbiAgICB0aGlzLmhvc3QgPSBob3N0XHJcbiAgICB0aGlzLnBvcnQgPSBwb3J0XHJcbiAgICB0aGlzLnVzZXIgPSB1c2VyXHJcbiAgICB0aGlzLnBhc3MgPSBwYXNzXHJcbiAgICB0aGlzLnRscyA9IHRsc1xyXG4gICAgdGhpcy50bHN2MW9ubHkgPSB0bHMxb25seVxyXG4gICAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sXHJcbiAgICB0aGlzLlJlZGlyZWN0U3RhcnRTb2wgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MTAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4NTMsIDB4NEYsIDB4NEMsIDB4MjApXHJcbiAgICB0aGlzLlJlZGlyZWN0U3RhcnRLdm0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MTAsIDB4MDEsIDB4MDAsIDB4MDAsIDB4NGIsIDB4NTYsIDB4NGQsIDB4NTIpXHJcbiAgICB0aGlzLlJlZGlyZWN0U3RhcnRJZGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDEwLCAweDAwLCAweDAwLCAweDAwLCAweDQ5LCAweDQ0LCAweDQ1LCAweDUyKVxyXG4gICAgdGhpcy51cmx2YXJzID0ge31cclxuICAgIHRoaXMuc2VydmVyID0gc2VydmVyXHJcbiAgICB0aGlzLmFtdEFjY3VtdWxhdG9yID0gJydcclxuICAgIHRoaXMuYXV0aFVyaSA9ICcnXHJcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlclxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBXZWJTb2NrZXQgcGF0aCB0byBjb25uZWN0IHRvIHVzaW5nIHRoZSBjdXJyZW50IGVudmlyb25tZW50LlxyXG4gICAqIFVzZXMgaG9zdChkZXZpY2VpZCksIHBvcnQsIHRscywgdGxzdjFvbmx5LCB1c2VyLCBwYXNzIG9wdGlvbnMgdG8gYnVpbGQgdGhlIHVybC5cclxuICAgKi9cclxuICBwcml2YXRlIGdldFdzTG9jYXRpb24gKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIoKSAmJiAhaXNUcnV0aHkodGhpcy5zZXJ2ZXIpKSB7XHJcbiAgICAgIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wucmVwbGFjZSgnaHR0cCcsICd3cycpfS8vXHJcbiAgICAgICR7d2luZG93LmxvY2F0aW9uLmhvc3R9XHJcbiAgICAgICR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cmluZygwLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSl9XHJcbiAgICAgIC93ZWJyZWxheS5hc2h4P3A9MiZob3N0PSR7dGhpcy5ob3N0fSZwb3J0PSR7dGhpcy5wb3J0fSZ0bHM9JHt0aGlzLnRsc30keygodGhpcy51c2VyID09PSAnKicpID8gJyZzZXJ2ZXJhdXRoPTEnIDogJycpfSR7KCh0eXBlb2YgdGhpcy5wYXNzID09PSAndW5kZWZpbmVkJykgPyAoJyZzZXJ2ZXJhdXRoPTEmdXNlcj0nICsgdGhpcy51c2VyKSA6ICcnKX0mdGxzMW9ubHk9JHt0aGlzLnRsc3Yxb25seX1gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYCR7U3RyaW5nKHRoaXMuc2VydmVyKX0vd2VicmVsYXkuYXNoeD9wPTImaG9zdD0ke3RoaXMuaG9zdH0mcG9ydD0ke3RoaXMucG9ydH0mdGxzPSR7dGhpcy50bHN9JHsoKHRoaXMudXNlciA9PT0gJyonKSA/ICcmc2VydmVyYXV0aD0xJyA6ICcnKX0keygodHlwZW9mIHRoaXMucGFzcyA9PT0gJ3VuZGVmaW5lZCcpID8gKCcmc2VydmVyYXV0aD0xJnVzZXI9JyArIHRoaXMudXNlcikgOiAnJyl9JnRsczFvbmx5PSR7dGhpcy50bHN2MW9ubHl9YFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgY3VycmVudCBlbnZpcm9ubWVudCBpcyBicm93c2VyIG9yIHRlc3RcclxuICAgKi9cclxuICBwcml2YXRlIGlzQnJvd3NlciAoKTogYm9vbGVhbiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpc1dlYiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgaWYgKGlzV2ViKSB0aGlzLmxvZ2dlci5kZWJ1ZygnISEhISFCUk9XU0VSISEhISEnKVxyXG4gICAgICByZXR1cm4gaXNXZWJcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBnZXRzIFdzIExvY2F0aW9uIGFuZCBzdGFydHMgYSB3ZWJzb2NrZXQgZm9yIGxpc3RlbmluZ1xyXG4gICAqIEBwYXJhbSBjIGlzIGJhc2UgdHlwZSBmb3IgV2ViU29ja2V0XHJcbiAgICovXHJcbiAgc3RhcnQ8VD4gKGM6IG5ldyhwYXRoOiBzdHJpbmcpID0+IFQpOiBhbnkgeyAvLyBVc2luZyB0aGlzIGdlbmVyaWMgc2lnbmF0dXJlIGFsbG93cyB1cyB0byBwYXNzIHRoZSBXZWJTb2NrZXQgdHlwZSBmcm9tIHVuaXQgdGVzdHMgb3IgaW4gcHJvZHVjaW9uIGZyb20gYSB3ZWIgYnJvd3NlclxyXG4gICAgdGhpcy5jb25uZWN0U3RhdGUgPSAwXHJcbiAgICAvLyBsZXQgd3MgPSBuZXcgYyh0aGlzLmdldFdzTG9jYXRpb24oKSkgLy8gdXNpbmcgY3JlYXRlIGZ1bmN0aW9uIGMgaW52b2tlcyB0aGUgY29uc3RydWN0b3IgV2ViU29ja2V0KClcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXctY2FwXHJcbiAgICB0aGlzLnNvY2tldCA9IG5ldyBjKHRoaXMuZ2V0V3NMb2NhdGlvbigpKSAvLyBUaGUgXCJwPTJcIiBpbmRpY2F0ZXMgdG8gdGhlIHJlbGF5IHRoYXQgdGhpcyBpcyBhIFJFRElSRUNUSU9OIHNlc3Npb25cclxuICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IHRoaXMub25Tb2NrZXRDb25uZWN0ZWQuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IHRoaXMub25Tb2NrZXRDbG9zZWQuYmluZCh0aGlzKVxyXG4gICAgY29uc3Qgb25sb2FkID0gKGU6IGFueSk6IGFueSA9PiB7XHJcbiAgICAgIHRoaXMub25Tb2NrZXREYXRhKGUudGFyZ2V0LnJlc3VsdClcclxuICAgICAgaWYgKHRoaXMuZmlsZVJlYWRlckFjYy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLmZpbGVSZWFkZXJJblVzZSA9IGZhbHNlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5maWxlUmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhuZXcgQmxvYihbdGhpcy5maWxlUmVhZGVyQWNjLnNoaWZ0KCldKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25sb2FkZW5kID0gKGU6IGFueSk6IGFueSA9PiB7XHJcbiAgICAgIHRoaXMub25Tb2NrZXREYXRhKGUudGFyZ2V0LnJlc3VsdClcclxuICAgICAgaWYgKHRoaXMuZmlsZVJlYWRlckFjYy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLmZpbGVSZWFkZXJJblVzZSA9IGZhbHNlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5maWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHRoaXMuZmlsZVJlYWRlckFjYy5zaGlmdCgpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNUcnV0aHkodGhpcy5maWxlUmVhZGVyKSAmJiBpc1RydXRoeSh0aGlzLmZpbGVSZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKSkge1xyXG4gICAgLy8gQ2hyb21lICYgRmlyZWZveCAoRHJhZnQpXHJcbiAgICAgIHRoaXMuZmlsZVJlYWRlci5vbmxvYWQgPSBvbmxvYWQuYmluZCh0aGlzKVxyXG4gICAgfSBlbHNlIGlmIChpc1RydXRoeSh0aGlzLmZpbGVSZWFkZXIpICYmIGlzVHJ1dGh5KHRoaXMuZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcikpIHtcclxuICAgIC8vIENocm9tZSAmIEZpcmVmb3ggKFNwZWMpXHJcbiAgICAgIHRoaXMuZmlsZVJlYWRlci5vbmxvYWRlbmQgPSBvbmxvYWRlbmQuYmluZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgdGhpcy5sb2dnZXIudmVyYm9zZSgnQ29ubmVjdGluZyB0byB3ZWJzb2NrZXQnKVxyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlKDEpXHJcbiAgfVxyXG5cclxuICBvblNvY2tldENvbm5lY3RlZCAoKTogYW55IHtcclxuICAgIGlmIChpc1RydXRoeSh0aGlzLnVybHZhcnMpICYmIGlzVHJ1dGh5KHRoaXMudXJsdmFycy5yZWRpcnRyYWNlKSkgY29uc29sZS5sb2coJ1JFRElSLUNPTk5FQ1QnKVxyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlKDIpXHJcbiAgICB0aGlzLmxvZ2dlci52ZXJib3NlKGBDb25uZWN0ZWQgdG8gd2Vic29ja2V0IHNlcnZlci4gV2l0aCBwcm90b2NvbCAke3RoaXMucHJvdG9jb2x9ICgyID0gS1ZNKWApXHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKGBTdGFydCBSZWRpcmVjdCBTZXNzaW9uIGZvciBwcm90b2NvbC4gJHt0aGlzLnByb3RvY29sfWApXHJcbiAgICBpZiAodGhpcy5wcm90b2NvbCA9PT0gUHJvdG9jb2wuU09MKSB0aGlzLnNvY2tldFNlbmQodGhpcy5SZWRpcmVjdFN0YXJ0U29sKSAvLyBUT0RPOiBQdXQgdGhlc2Ugc3RyaW5ncyBpbiBoaWdoZXIgbGV2ZWwgbW9kdWxlIHRvIHRpZ2h0ZW4gY29kZVxyXG4gICAgaWYgKHRoaXMucHJvdG9jb2wgPT09IFByb3RvY29sLktWTSkgdGhpcy5zb2NrZXRTZW5kKHRoaXMuUmVkaXJlY3RTdGFydEt2bSkgLy8gRG9uJ3QgbmVlZCB0aGVzZSBpcyB0aGUgZmVhdHVyZSBpcyBub3QgY29tcGlsZWQtaW4uXHJcbiAgICBpZiAodGhpcy5wcm90b2NvbCA9PT0gUHJvdG9jb2wuSURFUikgdGhpcy5zb2NrZXRTZW5kKHRoaXMuUmVkaXJlY3RTdGFydElkZXIpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiB0aGVyZSBpcyBuZXcgZGF0YSBvbiB0aGUgd2Vic29ja2V0XHJcbiAgICogQHBhcmFtIGUgZGF0YSByZWNlaXZlZCBvdmVyIHRoZSB3ZWJzb2NrZXRcclxuICAgKi9cclxuICBvbk1lc3NhZ2UgKGU6IGFueSk6IGFueSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlLmRhdGEpXHJcbiAgICAgIHRoaXMuaW5EYXRhQ291bnQrK1xyXG4gICAgICBpZiAodHlwZW9mIGUuZGF0YSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBpZiAodGhpcy5maWxlUmVhZGVySW5Vc2UpIHtcclxuICAgICAgICAgIHRoaXMuZmlsZVJlYWRlckFjYy5wdXNoKGUuZGF0YSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5maWxlUmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAvLyBDaHJvbWUgJiBGaXJlZm94IChEcmFmdClcclxuICAgICAgICAgIHRoaXMuZmlsZVJlYWRlckluVXNlID0gdHJ1ZVxyXG4gICAgICAgICAgdGhpcy5maWxlUmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhuZXcgQmxvYihbZS5kYXRhXSkpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgLy8gQ2hyb21lICYgRmlyZWZveCAoU3BlYylcclxuICAgICAgICAgIHRoaXMuZmlsZVJlYWRlckluVXNlID0gdHJ1ZVxyXG4gICAgICAgICAgdGhpcy5maWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGUuZGF0YSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSUUxMCwgcmVhZEFzQmluYXJ5U3RyaW5nIGRvZXMgbm90IGV4aXN0LCB1c2UgYW4gYWx0ZXJuYXRpdmUuXHJcbiAgICAgICAgICBsZXQgYmluYXJ5ID0gJyc7IGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoZS5kYXRhKTsgY29uc3QgbGVuZ3RoID0gYnl0ZXMuYnl0ZUxlbmd0aFxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSkgfVxyXG4gICAgICAgICAgdGhpcy5vblNvY2tldERhdGEoYmluYXJ5KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiB3ZSBnZXQgYSBzdHJpbmcgb2JqZWN0LCBpdCBtYXliZSB0aGUgV2ViUlRDIGNvbmZpcm0uIElnbm9yZSBpdC5cclxuICAgICAgICAvLyB0aGlzLmRlYnVnKFwiTWVzaERhdGFDaGFubmVsIC0gT25EYXRhIC0gXCIgKyB0eXBlb2YgZS5kYXRhICsgXCIgLSBcIiArIGUuZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMub25Tb2NrZXREYXRhKGUuZGF0YSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpXHJcbiAgICAgIHRoaXMuc3RvcCgpXHJcbiAgICAgIHRoaXMub25FcnJvcigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgZnJvbSBvbk1lc3NhZ2VcclxuICAgKiBAcGFyYW0gZGF0YSBkYXRhIG92ZXIgdGhlIHdpcmVcclxuICAgKi9cclxuICBwcml2YXRlIG9uU29ja2V0RGF0YSAoZGF0YTogc3RyaW5nKTogYW55IHtcclxuICAgIGlmICghaXNUcnV0aHkoZGF0YSkgfHwgdGhpcy5jb25uZWN0U3RhdGUgPT09IC0xKSByZXR1cm5cclxuXHJcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIC8vIFRoaXMgaXMgYW4gQXJyYXlCdWZmZXIsIGNvbnZlcnQgaXQgdG8gYSBzdHJpbmcgYXJyYXkgKHVzZWQgaW4gSUUpXHJcbiAgICAgIGxldCBiaW5hcnkgPSAnJ1xyXG4gICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGRhdGEpXHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGJ5dGVzLmJ5dGVMZW5ndGhcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSkgfVxyXG4gICAgICBkYXRhID0gYmluYXJ5XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykgeyByZXR1cm4gfVxyXG5cclxuICAgIGlmICgodGhpcy5wcm90b2NvbCA9PT0gUHJvdG9jb2wuS1ZNIHx8IHRoaXMucHJvdG9jb2wgPT09IFByb3RvY29sLklERVIpICYmIHRoaXMuY29ubmVjdFN0YXRlID09PSAxKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9uUHJvY2Vzc0RhdGEoZGF0YSlcclxuICAgIH0gLy8gS1ZNIHRyYWZmaWMsIGZvcndhcmQgaXQgZGlyZWN0bHkuXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ2JlZm9yZTogJywgdGhpcy5hbXRBY2N1bXVsYXRvcilcclxuICAgIHRoaXMuYW10QWNjdW11bGF0b3IgKz0gZGF0YVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2FmdGVyOiAnLCB0aGlzLmFtdEFjY3VtdWxhdG9yKVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJSRURJUi1SRUNWKFwiICsgdGhpcy5hbXRBY2N1bXVsYXRvci5sZW5ndGggKyBcIik6IFwiICsgVHlwZUNvbnZlcnRlci5yc3RyMmhleCh0aGlzLmFtdEFjY3VtdWxhdG9yKSk7XHJcbiAgICB3aGlsZSAodGhpcy5hbXRBY2N1bXVsYXRvci5sZW5ndGggPj0gMSkge1xyXG4gICAgICBsZXQgY21kc2l6ZSA9IDBcclxuICAgICAgc3dpdGNoICh0aGlzLmFtdEFjY3VtdWxhdG9yLmNoYXJDb2RlQXQoMCkpIHtcclxuICAgICAgICBjYXNlIDB4MTE6IHsgLy8gU3RhcnRSZWRpcmVjdGlvblNlc3Npb25SZXBseSAoMTcpXHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKGBTdGFydCBSZWRpcmVjdGlvbiBTZXNzaW9uIHJlcGx5IHJlY2VpdmVkIGZvciAgJHt0aGlzLnByb3RvY29sfWApXHJcbiAgICAgICAgICBpZiAodGhpcy5hbXRBY2N1bXVsYXRvci5sZW5ndGggPCA0KSByZXR1cm5cclxuICAgICAgICAgIGNvbnN0IHN0YXR1c2NvZGUgPSB0aGlzLmFtdEFjY3VtdWxhdG9yLmNoYXJDb2RlQXQoMSlcclxuICAgICAgICAgIHN3aXRjaCAoc3RhdHVzY29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHsgLy8gU1RBVFVTX1NVQ0NFU1NcclxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKCdTZXNzaW9uIHN0YXR1cyBzdWNjZXNzLiBTdGFydCBoYW5kc2hha2UnKVxyXG4gICAgICAgICAgICAgIGlmICh0aGlzLmFtdEFjY3VtdWxhdG9yLmxlbmd0aCA8IDEzKSByZXR1cm5cclxuICAgICAgICAgICAgICBjb25zdCBvZW1sZW4gPSB0aGlzLmFtdEFjY3VtdWxhdG9yLmNoYXJDb2RlQXQoMTIpXHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYW10QWNjdW11bGF0b3IubGVuZ3RoIDwgMTMgKyBvZW1sZW4pIHJldHVyblxyXG5cclxuICAgICAgICAgICAgICAvLyBRdWVyeSBmb3IgYXZhaWxhYmxlIGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZSgnUXVlcnkgZm9yIGF2YWlsYWJsZSBhdXRoZW50aWNhdGlvbicpXHJcbiAgICAgICAgICAgICAgdGhpcy5zb2NrZXRTZW5kKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgxMywgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCkpIC8vIFF1ZXJ5IGF1dGhlbnRpY2F0aW9uIHN1cHBvcnRcclxuICAgICAgICAgICAgICBjbWRzaXplID0gKDEzICsgb2VtbGVuKVxyXG4gICAgICAgICAgICAgIGJyZWFrIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICB0aGlzLnN0b3AoKVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhayB9XHJcbiAgICAgICAgY2FzZSAweDE0OiB7IC8vIEF1dGhlbnRpY2F0ZVNlc3Npb25SZXBseSAoMjApXHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKCdBdmFpbGFibGUgQXV0aGVudGljYXRpb25zIHJlcGx5IHJlY2VpdmVkLicpXHJcbiAgICAgICAgICBpZiAodGhpcy5hbXRBY2N1bXVsYXRvci5sZW5ndGggPCA5KSByZXR1cm5cclxuICAgICAgICAgIGNvbnN0IGF1dGhEYXRhTGVuID0gVHlwZUNvbnZlcnRlci5SZWFkSW50WCh0aGlzLmFtdEFjY3VtdWxhdG9yLCA1KVxyXG4gICAgICAgICAgaWYgKHRoaXMuYW10QWNjdW11bGF0b3IubGVuZ3RoIDwgOSArIGF1dGhEYXRhTGVuKSByZXR1cm5cclxuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuYW10QWNjdW11bGF0b3IuY2hhckNvZGVBdCgxKVxyXG4gICAgICAgICAgY29uc3QgYXV0aFR5cGUgPSB0aGlzLmFtdEFjY3VtdWxhdG9yLmNoYXJDb2RlQXQoNClcclxuICAgICAgICAgIGNvbnN0IGF1dGhEYXRhOiBhbnkgPSBbXVxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdXRoRGF0YUxlbjsgaSsrKSB7IGF1dGhEYXRhLnB1c2godGhpcy5hbXRBY2N1bXVsYXRvci5jaGFyQ29kZUF0KDkgKyBpKSkgfVxyXG4gICAgICAgICAgY29uc3QgYXV0aERhdGFCdWYgPSB0aGlzLmFtdEFjY3VtdWxhdG9yLnN1YnN0cmluZyg5LCA5ICsgYXV0aERhdGFMZW4pXHJcbiAgICAgICAgICBjbWRzaXplID0gOSArIGF1dGhEYXRhTGVuXHJcblxyXG4gICAgICAgICAgaWYgKGF1dGhUeXBlID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIFF1ZXJ5XHJcbiAgICAgICAgICAgIGlmIChpc1RydXRoeShhdXRoRGF0YS5pbmNsdWRlcyg0KSkpIHtcclxuICAgICAgICAgICAgICAvLyBHb29kIERpZ2VzdCBBdXRoIChXaXRoIGNub25jZSBhbmQgYWxsKVxyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoJ0dvb2QgRGlnZXN0IEF1dGggKFdpdGggY25vbmNlIGFuZCBhbGwpJylcclxuICAgICAgICAgICAgICB0aGlzLnNvY2tldFNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgweDEzLCAweDAwLCAweDAwLCAweDAwLCAweDA0KSArIFR5cGVDb252ZXJ0ZXIuSW50VG9TdHJYKHRoaXMudXNlci5sZW5ndGggKyB0aGlzLmF1dGhVcmkubGVuZ3RoICsgOCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMudXNlci5sZW5ndGgpICsgdGhpcy51c2VyICsgU3RyaW5nLmZyb21DaGFyQ29kZSgweDAwLCAweDAwKSArIFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5hdXRoVXJpLmxlbmd0aCkgKyB0aGlzLmF1dGhVcmkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MDAsIDB4MDAsIDB4MDAsIDB4MDApKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzVHJ1dGh5KGF1dGhEYXRhLmluY2x1ZGVzKDMpKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ0JhZCBEaWdlc3QgQXV0aCcpXHJcbiAgICAgICAgICAgICAgLy8gQmFkIERpZ2VzdCBBdXRoIChOb3Qgc3VyZSB3aHkgdGhpcyBpcyBzdXBwb3J0ZWQsIGNub25jZSBpcyBub3QgdXNlZCEpXHJcbiAgICAgICAgICAgICAgdGhpcy5zb2NrZXRTZW5kKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgxMywgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMykgKyBUeXBlQ29udmVydGVyLkludFRvU3RyWCh0aGlzLnVzZXIubGVuZ3RoICsgdGhpcy5hdXRoVXJpLmxlbmd0aCArIDcpICsgU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLnVzZXIubGVuZ3RoKSArIHRoaXMudXNlciArIFN0cmluZy5mcm9tQ2hhckNvZGUoMHgwMCwgMHgwMCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuYXV0aFVyaS5sZW5ndGgpICsgdGhpcy5hdXRoVXJpICsgU3RyaW5nLmZyb21DaGFyQ29kZSgweDAwLCAweDAwLCAweDAwKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1RydXRoeShhdXRoRGF0YS5pbmNsdWRlcygxKSkpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKCdCYXNpYyBBdXRoJylcclxuICAgICAgICAgICAgICAvLyBCYXNpYyBBdXRoIChQcm9iYWJseSBhIGdvb2QgaWRlYSB0byBub3Qgc3VwcG9ydCB0aGlzIHVubGVzcyB0aGlzIGlzIGFuIG9sZCB2ZXJzaW9uIG9mIEludGVsIEFNVClcclxuICAgICAgICAgICAgICB0aGlzLnNvY2tldFNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgweDEzLCAweDAwLCAweDAwLCAweDAwLCAweDAxKSArIFR5cGVDb252ZXJ0ZXIuSW50VG9TdHJYKHRoaXMudXNlci5sZW5ndGggKyB0aGlzLnBhc3MubGVuZ3RoICsgMikgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMudXNlci5sZW5ndGgpICsgdGhpcy51c2VyICsgU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLnBhc3MubGVuZ3RoKSArIHRoaXMucGFzcylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcignQXV0aCBUeXBlIG5vdCByZWNvZ25pemVkLiBTdG9wcGluZy4nKVxyXG4gICAgICAgICAgICAgIHRoaXMuc3RvcCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoKGF1dGhUeXBlID09PSAzIHx8IGF1dGhUeXBlID09PSA0KSAmJiBzdGF0dXMgPT09IDEpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnB0ciA9IDBcclxuXHJcbiAgICAgICAgICAgIC8vIFJlYWxtXHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWxtbGVuID0gYXV0aERhdGFCdWYuY2hhckNvZGVBdChjdXJwdHIpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWxtID0gYXV0aERhdGFCdWYuc3Vic3RyaW5nKGN1cnB0ciArIDEsIGN1cnB0ciArIDEgKyByZWFsbWxlbilcclxuICAgICAgICAgICAgY3VycHRyICs9IChyZWFsbWxlbiArIDEpXHJcblxyXG4gICAgICAgICAgICAvLyBOb25jZVxyXG4gICAgICAgICAgICBjb25zdCBub25jZWxlbiA9IGF1dGhEYXRhQnVmLmNoYXJDb2RlQXQoY3VycHRyKVxyXG4gICAgICAgICAgICBjb25zdCBub25jZSA9IGF1dGhEYXRhQnVmLnN1YnN0cmluZyhjdXJwdHIgKyAxLCBjdXJwdHIgKyAxICsgbm9uY2VsZW4pXHJcbiAgICAgICAgICAgIGN1cnB0ciArPSAobm9uY2VsZW4gKyAxKVxyXG5cclxuICAgICAgICAgICAgLy8gUU9QXHJcbiAgICAgICAgICAgIGxldCBxb3BsZW4gPSAwXHJcbiAgICAgICAgICAgIGxldCBxb3A6IGFueSA9IG51bGxcclxuICAgICAgICAgICAgY29uc3QgY25vbmNlOiBzdHJpbmcgPSB0aGlzLmdlbmVyYXRlUmFuZG9tTm9uY2UoMzIpXHJcbiAgICAgICAgICAgIGNvbnN0IHNuYyA9ICcwMDAwMDAwMidcclxuICAgICAgICAgICAgbGV0IGV4dHJhID0gJydcclxuICAgICAgICAgICAgaWYgKGF1dGhUeXBlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgcW9wbGVuID0gYXV0aERhdGFCdWYuY2hhckNvZGVBdChjdXJwdHIpXHJcbiAgICAgICAgICAgICAgcW9wID0gYXV0aERhdGFCdWYuc3Vic3RyaW5nKGN1cnB0ciArIDEsIGN1cnB0ciArIDEgKyBxb3BsZW4pXHJcbiAgICAgICAgICAgICAgY3VycHRyICs9IChxb3BsZW4gKyAxKVxyXG4gICAgICAgICAgICAgIGV4dHJhID0gYCR7c25jfToke2Nub25jZX06JHtTdHJpbmcocW9wKX0gOmBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlnZXN0ID0gdGhpcy5oZXhfbWQ1KHRoaXMuaGV4X21kNSh0aGlzLnVzZXIgKyAnOicgKyByZWFsbSArICc6JyArIHRoaXMucGFzcykgKyAnOicgKyBub25jZSArICc6JyArIGV4dHJhICsgdGhpcy5oZXhfbWQ1KCdQT1NUOicgKyB0aGlzLmF1dGhVcmkpKVxyXG4gICAgICAgICAgICBsZXQgdG90YWxsZW46IG51bWJlciA9IHRoaXMudXNlci5sZW5ndGggKyByZWFsbS5sZW5ndGggKyBub25jZS5sZW5ndGggKyB0aGlzLmF1dGhVcmkubGVuZ3RoICsgY25vbmNlLmxlbmd0aCArIHNuYy5sZW5ndGggKyBkaWdlc3QubGVuZ3RoICsgN1xyXG4gICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09IDQpIHRvdGFsbGVuICs9IChwYXJzZUludChxb3AubGVuZ3RoKSArIDEpXHJcbiAgICAgICAgICAgIGxldCBidWY6IGFueSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgxMywgMHgwMCwgMHgwMCwgMHgwMCwgYXV0aFR5cGUpICsgVHlwZUNvbnZlcnRlci5JbnRUb1N0clgodG90YWxsZW4pICsgU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLnVzZXIubGVuZ3RoKSArIHRoaXMudXNlciArIFN0cmluZy5mcm9tQ2hhckNvZGUocmVhbG0ubGVuZ3RoKSArIHJlYWxtICsgU3RyaW5nLmZyb21DaGFyQ29kZShub25jZS5sZW5ndGgpICsgbm9uY2UgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuYXV0aFVyaS5sZW5ndGgpICsgdGhpcy5hdXRoVXJpICsgU3RyaW5nLmZyb21DaGFyQ29kZShjbm9uY2UubGVuZ3RoKSArIGNub25jZSArIFN0cmluZy5mcm9tQ2hhckNvZGUoc25jLmxlbmd0aCkgKyBzbmMgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGRpZ2VzdC5sZW5ndGgpICsgZGlnZXN0XHJcbiAgICAgICAgICAgIGlmIChhdXRoVHlwZSA9PT0gNCkgYnVmID0gU3RyaW5nKGJ1ZikgKyAoU3RyaW5nLmZyb21DaGFyQ29kZShxb3AubGVuZ3RoKSArIFN0cmluZyhxb3ApKVxyXG4gICAgICAgICAgICB0aGlzLnNvY2tldFNlbmQoYnVmKVxyXG4gICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAwKSB7IC8vIFN1Y2Nlc3NcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvdG9jb2wgPT09IDEpIHtcclxuICAgICAgICAgICAgICAvLyBTZXJpYWwtb3Zlci1MQU46IFNlbmQgSW50ZWwgQU1UIHNlcmlhbCBzZXR0aW5ncy4uLlxyXG4gICAgICAgICAgICAgIGNvbnN0IE1heFR4QnVmZmVyID0gMTAwMDBcclxuICAgICAgICAgICAgICBjb25zdCBUeFRpbWVvdXQgPSAxMDBcclxuICAgICAgICAgICAgICBjb25zdCBUeE92ZXJmbG93VGltZW91dCA9IDBcclxuICAgICAgICAgICAgICBjb25zdCBSeFRpbWVvdXQgPSAxMDAwMFxyXG4gICAgICAgICAgICAgIGNvbnN0IFJ4Rmx1c2hUaW1lb3V0ID0gMTAwXHJcbiAgICAgICAgICAgICAgY29uc3QgSGVhcnRiZWF0ID0gMC8vIDUwMDA7XHJcbiAgICAgICAgICAgICAgdGhpcy5zb2NrZXRTZW5kKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMCwgMHgwMCwgMHgwMCwgMHgwMCkgKyBUeXBlQ29udmVydGVyLkludFRvU3RyWCh0aGlzLmFtdFNlcXVlbmNlKyspICsgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyWChNYXhUeEJ1ZmZlcikgK1xyXG4gICAgICAgICAgICAgICAgICBUeXBlQ29udmVydGVyLlNob3J0VG9TdHJYKFR4VGltZW91dCkgKyBUeXBlQ29udmVydGVyLlNob3J0VG9TdHJYKFR4T3ZlcmZsb3dUaW1lb3V0KSArIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0clgoUnhUaW1lb3V0KSArXHJcbiAgICAgICAgICAgICAgICAgIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0clgoUnhGbHVzaFRpbWVvdXQpICsgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyWChIZWFydGJlYXQpICsgVHlwZUNvbnZlcnRlci5JbnRUb1N0clgoMCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvdG9jb2wgPT09IDIpIHtcclxuICAgICAgICAgICAgICAvLyBSZW1vdGUgRGVza3RvcDogU2VuZCB0cmFmZmljIGRpcmVjdGx5Li4uXHJcbiAgICAgICAgICAgICAgdGhpcy5zb2NrZXRTZW5kKFN0cmluZy5mcm9tQ2hhckNvZGUoMHg0MCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvdG9jb2wgPT09IDMpIHtcclxuICAgICAgICAgICAgICAvLyBSZW1vdGUgSURFUjogU2VuZCB0cmFmZmljIGRpcmVjdGx5Li4uXHJcbiAgICAgICAgICAgICAgdGhpcy5jb25uZWN0U3RhdGUgPSAxXHJcbiAgICAgICAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlKDMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB0aGlzLnN0b3AoKVxyXG4gICAgICAgICAgYnJlYWsgfVxyXG4gICAgICAgIGNhc2UgMHgyMTogeyAvLyBSZXNwb25zZSB0byBzZXR0aW5ncyAoMzMpXHJcbiAgICAgICAgICBpZiAodGhpcy5hbXRBY2N1bXVsYXRvci5sZW5ndGggPCAyMykgYnJlYWtcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoJ1Jlc3BvbnNlIHRvIHNldHRpbmdzJylcclxuICAgICAgICAgIGNtZHNpemUgPSAyM1xyXG4gICAgICAgICAgdGhpcy5zb2NrZXRTZW5kKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyNywgMHgwMCwgMHgwMCwgMHgwMCkgKyBUeXBlQ29udmVydGVyLkludFRvU3RyWCh0aGlzLmFtdFNlcXVlbmNlKyspICsgU3RyaW5nLmZyb21DaGFyQ29kZSgweDAwLCAweDAwLCAweDFCLCAweDAwLCAweDAwLCAweDAwKSlcclxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8taW1wbGllZC1ldmFsXHJcbiAgICAgICAgICBpZiAodGhpcy5wcm90b2NvbCA9PT0gMSkgeyB0aGlzLmFtdEtlZXBBbGl2ZVRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5zZW5kQW10S2VlcEFsaXZlLmJpbmQodGhpcyksIDIwMDApIH1cclxuICAgICAgICAgIHRoaXMuY29ubmVjdFN0YXRlID0gMVxyXG4gICAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlKDMpXHJcbiAgICAgICAgICBicmVhayB9XHJcbiAgICAgICAgY2FzZSAweDI5OiAvLyBTZXJpYWwgU2V0dGluZ3MgKDQxKVxyXG4gICAgICAgICAgaWYgKHRoaXMuYW10QWNjdW11bGF0b3IubGVuZ3RoIDwgMTApIGJyZWFrXHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKCdTZXJpYWwgU2V0dGluZ3MnKVxyXG4gICAgICAgICAgY21kc2l6ZSA9IDEwXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgMHgyQTogeyAvLyBJbmNvbWluZyBkaXNwbGF5IGRhdGEgKDQyKVxyXG4gICAgICAgICAgaWYgKHRoaXMuYW10QWNjdW11bGF0b3IubGVuZ3RoIDwgMTApIGJyZWFrXHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKCdJbmNvbWluZyBkaXNwbGF5IGRhdGEnKVxyXG4gICAgICAgICAgY29uc3QgY3MgPSAoMTAgKyAoKHRoaXMuYW10QWNjdW11bGF0b3IuY2hhckNvZGVBdCg5KSAmIDB4RkYpIDw8IDgpICsgKHRoaXMuYW10QWNjdW11bGF0b3IuY2hhckNvZGVBdCg4KSAmIDB4RkYpKVxyXG4gICAgICAgICAgaWYgKHRoaXMuYW10QWNjdW11bGF0b3IubGVuZ3RoIDwgY3MpIGJyZWFrXHJcbiAgICAgICAgICB0aGlzLm9uUHJvY2Vzc0RhdGEodGhpcy5hbXRBY2N1bXVsYXRvci5zdWJzdHJpbmcoMTAsIGNzKSlcclxuICAgICAgICAgIGNtZHNpemUgPSBjc1xyXG4gICAgICAgICAgYnJlYWsgfVxyXG4gICAgICAgIGNhc2UgMHgyQjogLy8gS2VlcCBhbGl2ZSBtZXNzYWdlICg0MylcclxuICAgICAgICAgIGlmICh0aGlzLmFtdEFjY3VtdWxhdG9yLmxlbmd0aCA8IDgpIGJyZWFrXHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKCdLZWVwIEFsdmUgbWVzc2FnZScpXHJcbiAgICAgICAgICBjbWRzaXplID0gOFxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIDB4NDE6XHJcbiAgICAgICAgICBpZiAodGhpcy5hbXRBY2N1bXVsYXRvci5sZW5ndGggPCA4KSBicmVha1xyXG4gICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZSgnS1ZNIHRyYWZmaWMuIENhbGwgb25TdGFydCBoYW5kbGVyLiBBbmQgZm9yd2FyZCByZXN0IG9mIGFjYyBkaXJlY3RseS4nKVxyXG4gICAgICAgICAgdGhpcy5jb25uZWN0U3RhdGUgPSAxXHJcbiAgICAgICAgICB0aGlzLm9uU3RhcnQoKVxyXG4gICAgICAgICAgLy8gS1ZNIHRyYWZmaWMsIGZvcndhcmQgcmVzdCBvZiBhY2N1bXVsYXRvciBkaXJlY3RseS5cclxuICAgICAgICAgIGlmICh0aGlzLmFtdEFjY3VtdWxhdG9yLmxlbmd0aCA+IDgpIHsgdGhpcy5vblByb2Nlc3NEYXRhKHRoaXMuYW10QWNjdW11bGF0b3Iuc3Vic3RyaW5nKDgpKSB9XHJcbiAgICAgICAgICBjbWRzaXplID0gdGhpcy5hbXRBY2N1bXVsYXRvci5sZW5ndGhcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBVbmtub3duIEludGVsIEFNVCBjb21tYW5kOiAgJHt0aGlzLmFtdEFjY3VtdWxhdG9yLmNoYXJDb2RlQXQoMCl9ICBhY2NsZW49JHt0aGlzLmFtdEFjY3VtdWxhdG9yLmxlbmd0aH1gKVxyXG4gICAgICAgICAgdGhpcy5zdG9wKClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGlmIChjbWRzaXplID09PSAwKSByZXR1cm5cclxuICAgICAgdGhpcy5hbXRBY2N1bXVsYXRvciA9IHRoaXMuYW10QWNjdW11bGF0b3Iuc3Vic3RyaW5nKGNtZHNpemUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoZXhfbWQ1IChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICB0aGlzLmxvZ2dlci52ZXJib3NlKCdNRDUgdGhlIHN0cmluZycpXHJcbiAgICByZXR1cm4gbWQ1KHN0cilcclxuICB9XHJcblxyXG4gIHNvY2tldFNlbmQgKGRhdGE6IHN0cmluZyk6IGFueSB7IC8vIHh4U2VuZFxyXG4gICAgaWYgKGlzVHJ1dGh5KHRoaXMudXJsdmFycykgJiYgaXNUcnV0aHkodGhpcy51cmx2YXJzLnJlZGlydHJhY2UpKSB7IHRoaXMubG9nZ2VyLnZlcmJvc2UoYFJFRElSLVNFTkQoJHtkYXRhLmxlbmd0aH0pOiAke1R5cGVDb252ZXJ0ZXIucnN0cjJoZXgoZGF0YSl9YCkgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh0aGlzLnNvY2tldCAhPSBudWxsICYmIHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT09IDEpIHsgLy8gMSA9IFdlYlNvY2tldC5PUEVOXHJcbiAgICAgICAgY29uc3QgYiA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoKVxyXG4gICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoYFJlZGlyIFNlbmQoICR7ZGF0YS5sZW5ndGh9KTogJHtUeXBlQ29udmVydGVyLnJzdHIyaGV4KGRhdGEpfWApXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7IGJbaV0gPSBkYXRhLmNoYXJDb2RlQXQoaSkgfVxyXG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoYi5idWZmZXIpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBTb2NrZXQgc2VuZCBlcnJvcjogJHtTdHJpbmcoZXJyb3IpfWApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kIHNlbmRzIGRhdGEgb3ZlciB0aGUgd2Vic29ja2V0IHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICogQHBhcmFtIGRhdGEgZGF0YSB0byBzZW5kIHRvIHNlcnZlclxyXG4gICAqL1xyXG4gIHNlbmQgKGRhdGE6IHN0cmluZyk6IGFueSB7IC8vIHNlbmRcclxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoJ1NlbmQgY2FsbGVkICcgKyBkYXRhKVxyXG4gICAgaWYgKHRoaXMuc29ja2V0ID09IG51bGwgfHwgdGhpcy5jb25uZWN0U3RhdGUgIT09IDEpIHJldHVyblxyXG4gICAgaWYgKHRoaXMucHJvdG9jb2wgPT09IFByb3RvY29sLlNPTCkge1xyXG4gICAgICB0aGlzLnNvY2tldFNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgweDI4LCAweDAwLCAweDAwLCAweDAwKSArXHJcbiAgICAgICAgVHlwZUNvbnZlcnRlci5JbnRUb1N0clgodGhpcy5hbXRTZXF1ZW5jZSsrKSArXHJcbiAgICAgICAgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyWChkYXRhLmxlbmd0aCkgK1xyXG4gICAgICAgIGRhdGEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvY2tldFNlbmQoZGF0YSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbmRBbXRLZWVwQWxpdmUgKCk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5zb2NrZXQgPT0gbnVsbCkgcmV0dXJuXHJcbiAgICB0aGlzLnNvY2tldFNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgweDJCLCAweDAwLCAweDAwLCAweDAwKSArIFR5cGVDb252ZXJ0ZXIuSW50VG9TdHJYKHRoaXMuYW10U2VxdWVuY2UrKykpXHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVJhbmRvbU5vbmNlIChsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgcjogc3RyaW5nID0gJydcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHsgciArPSB0aGlzLnJhbmRvbU5vbmNlQ2hhcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucmFuZG9tTm9uY2VDaGFycy5sZW5ndGgpKSB9XHJcbiAgICByZXR1cm4gclxyXG4gIH1cclxuXHJcbiAgb25Tb2NrZXRDbG9zZWQgKGU6IEV2ZW50KTogYW55IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpXHJcbiAgICBpZiAoaXNUcnV0aHkodGhpcy51cmx2YXJzKSAmJiBpc1RydXRoeSh0aGlzLnVybHZhcnMucmVkaXJ0cmFjZSkpIHsgY29uc29sZS5sb2coJ1JFRElSLUNMT1NFRCcpIH1cclxuICAgIHRoaXMubG9nZ2VyLndhcm4oJ1JlZGlyIFNvY2tldCBDbG9zZWQnKVxyXG4gICAgdGhpcy5zdG9wKClcclxuICB9XHJcblxyXG4gIG9uU3RhdGVDaGFuZ2UgKG5ld3N0YXRlOiBudW1iZXIpOiBhbnkge1xyXG4gICAgY29uc29sZS5pbmZvKCdvbnN0YXRlY2hhbmdlJywgbmV3c3RhdGUpXHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gbmV3c3RhdGUpIHJldHVyblxyXG4gICAgdGhpcy5zdGF0ZSA9IG5ld3N0YXRlXHJcbiAgICB0aGlzLm9uTmV3U3RhdGUodGhpcy5zdGF0ZSlcclxuICAgIGlmICh0aGlzLm9uU3RhdGVDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TdGF0ZUNoYW5nZWQodGhpcywgdGhpcy5zdGF0ZSlcclxuICB9XHJcblxyXG4gIHN0b3AgKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZXIud2FybignU3RvcCBjYWxsZWQgb24gUmVkaXJlY3Rvci4gQ2hhbmdlIHN0YXRlIHRvIDAgYW5kIGNsb3NlIFNvY2tldC4nKVxyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlKDApXHJcbiAgICB0aGlzLmNvbm5lY3RTdGF0ZSA9IC0xXHJcbiAgICB0aGlzLmFtdEFjY3VtdWxhdG9yID0gJydcclxuICAgIGlmICh0aGlzLnNvY2tldCAhPSBudWxsKSB7IHRoaXMuc29ja2V0LmNsb3NlKCk7IHRoaXMuc29ja2V0ID0gbnVsbCB9XHJcbiAgICBpZiAodGhpcy5hbXRLZWVwQWxpdmVUaW1lciAhPSBudWxsKSB7IGNsZWFySW50ZXJ2YWwodGhpcy5hbXRLZWVwQWxpdmVUaW1lcik7IHRoaXMuYW10S2VlcEFsaXZlVGltZXIgPSBudWxsIH1cclxuICB9XHJcbn1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5leHBvcnQgY2xhc3MgQW10VGVybWluYWwge1xyXG4gIHRlcm1pbmFsRW11bGF0aW9uID0gMVxyXG4gIGZ4RW11bGF0aW9uID0gMFxyXG4gIGZ4TGluZUJyZWFrID0gMCAvLyAwID0gQ1IrTEYsIDEgPSBMRlxyXG5cclxuICAvKiogdXNlZCB0byBtYXAgQXNjaWkgdmFsdWVzIHJlY2VpdmVkIGZyb20gc2VyaWFsIHBvcnQgdG8gdW5pY29kZSBjaGFyYWN0ZXJzICovXHJcbiAgQXNjaWlUb1VuaWNvZGUgPSBbXHJcbiAgICAweDAwYzcsXHJcbiAgICAweDAwZmMsXHJcbiAgICAweDAwZTksXHJcbiAgICAweDAwZTIsXHJcbiAgICAweDAwZTQsXHJcbiAgICAweDAwZTAsXHJcbiAgICAweDAwZTUsXHJcbiAgICAweDAwZTcsXHJcbiAgICAweDAwZWEsXHJcbiAgICAweDAwZWIsXHJcbiAgICAweDAwZTgsXHJcbiAgICAweDAwZWYsXHJcbiAgICAweDAwZWUsXHJcbiAgICAweDAwZWMsXHJcbiAgICAweDAwYzQsXHJcbiAgICAweDAwYzUsXHJcbiAgICAweDAwYzksXHJcbiAgICAweDAwZTYsXHJcbiAgICAweDAwYzYsXHJcbiAgICAweDAwZjQsXHJcbiAgICAweDAwZjYsXHJcbiAgICAweDAwZjIsXHJcbiAgICAweDAwZmIsXHJcbiAgICAweDAwZjksXHJcbiAgICAweDAwZmYsXHJcbiAgICAweDAwZDYsXHJcbiAgICAweDAwZGMsXHJcbiAgICAweDAwYTIsXHJcbiAgICAweDAwYTMsXHJcbiAgICAweDAwYTUsXHJcbiAgICAweDIwYTcsXHJcbiAgICAweDAxOTIsXHJcbiAgICAweDAwZTEsXHJcbiAgICAweDAwZWQsXHJcbiAgICAweDAwZjMsXHJcbiAgICAweDAwZmEsXHJcbiAgICAweDAwZjEsXHJcbiAgICAweDAwZDEsXHJcbiAgICAweDAwYWEsXHJcbiAgICAweDAwZGEsXHJcbiAgICAweDAwYmYsXHJcbiAgICAweDIzMTAsXHJcbiAgICAweDAwYWMsXHJcbiAgICAweDAwYmQsXHJcbiAgICAweDAwYmMsXHJcbiAgICAweDAwYTEsXHJcbiAgICAweDAwYWIsXHJcbiAgICAweDAwYmIsXHJcbiAgICAweDI1OTMsXHJcbiAgICAweDI1OTIsXHJcbiAgICAweDI1OTEsXHJcbiAgICAweDI1MDIsXHJcbiAgICAweDI1MjQsXHJcbiAgICAweDI1NjEsXHJcbiAgICAweDI1NjIsXHJcbiAgICAweDI1NTYsXHJcbiAgICAweDI1NTUsXHJcbiAgICAweDI1NjMsXHJcbiAgICAweDI1NTEsXHJcbiAgICAweDI1NTcsXHJcbiAgICAweDI1NWQsXHJcbiAgICAweDI1NWMsXHJcbiAgICAweDI1NWIsXHJcbiAgICAweDI1MTAsXHJcbiAgICAweDI1MTQsXHJcbiAgICAweDI1MzQsXHJcbiAgICAweDI1MmMsXHJcbiAgICAweDI1MWMsXHJcbiAgICAweDI1MDAsXHJcbiAgICAweDI1M2MsXHJcbiAgICAweDI1NWUsXHJcbiAgICAweDI1NWYsXHJcbiAgICAweDI1NWEsXHJcbiAgICAweDI1NTQsXHJcbiAgICAweDI1NjksXHJcbiAgICAweDI1NjYsXHJcbiAgICAweDI1NjAsXHJcbiAgICAweDI1NTAsXHJcbiAgICAweDI1NmMsXHJcbiAgICAweDI1NjcsXHJcbiAgICAweDI1NjgsXHJcbiAgICAweDI1NjQsXHJcbiAgICAweDI1NjUsXHJcbiAgICAweDI1NjgsXHJcbiAgICAweDI1NTgsXHJcbiAgICAweDI1NTIsXHJcbiAgICAweDI1NTMsXHJcbiAgICAweDI1NmIsXHJcbiAgICAweDI1NmEsXHJcbiAgICAweDI1MTgsXHJcbiAgICAweDI1MGMsXHJcbiAgICAweDI1ODgsXHJcbiAgICAweDI1ODQsXHJcbiAgICAweDI1OGIsXHJcbiAgICAweDI1OTAsXHJcbiAgICAweDI1ODAsXHJcbiAgICAweDAzYjEsXHJcbiAgICAweDAwZGYsXHJcbiAgICAweDAzOTMsXHJcbiAgICAweDAzYzAsXHJcbiAgICAweDAzYTMsXHJcbiAgICAweDAzYzMsXHJcbiAgICAweDAwYjUsXHJcbiAgICAweDAzYzQsXHJcbiAgICAweDAzYzYsXHJcbiAgICAweDAzYjgsXHJcbiAgICAweDIxMjYsXHJcbiAgICAweDAzYjQsXHJcbiAgICAweDIyMWUsXHJcbiAgICAweDAwZjgsXHJcbiAgICAweDAzYjUsXHJcbiAgICAweDIyMGYsXHJcbiAgICAweDIyNjEsXHJcbiAgICAweDAwYjEsXHJcbiAgICAweDIyNjUsXHJcbiAgICAweDIyNjYsXHJcbiAgICAweDIzMjAsXHJcbiAgICAweDIzMjEsXHJcbiAgICAweDAwZjcsXHJcbiAgICAweDIyNDgsXHJcbiAgICAweDAwYjAsXHJcbiAgICAweDIwMjIsXHJcbiAgICAweDAwYjcsXHJcbiAgICAweDIyMWEsXHJcbiAgICAweDIwN2YsXHJcbiAgICAweDAwYjIsXHJcbiAgICAweDIyMGUsXHJcbiAgICAweDAwYTBcclxuICBdXHJcblxyXG4gIEFzY2lpVG9Vbmljb2RlSW50ZWwgPSBbXHJcbiAgICAweDAwYzcsXHJcbiAgICAweDAwZmMsXHJcbiAgICAweDAwZTksXHJcbiAgICAweDAwZTIsXHJcbiAgICAweDAwZTQsXHJcbiAgICAweDAwZTAsXHJcbiAgICAweDAwZTUsXHJcbiAgICAweDAwZTcsXHJcbiAgICAweDAwZWEsXHJcbiAgICAweDAwZWIsXHJcbiAgICAweDAwZTgsXHJcbiAgICAweDAwZWYsXHJcbiAgICAweDAwZWUsXHJcbiAgICAweDAwZWMsXHJcbiAgICAweDAwYzQsXHJcbiAgICAweDAwYzUsXHJcbiAgICAweDAwYzksXHJcbiAgICAweDAwZTYsXHJcbiAgICAweDAwYzYsXHJcbiAgICAweDAwZjQsXHJcbiAgICAweDAwZjYsXHJcbiAgICAweDAwZjIsXHJcbiAgICAweDAwZmIsXHJcbiAgICAweDAwZjksXHJcbiAgICAweDAwZmYsXHJcbiAgICAweDAwZDYsXHJcbiAgICAweDAwZGMsXHJcbiAgICAweDAwYTIsXHJcbiAgICAweDAwYTMsXHJcbiAgICAweDAwYTUsXHJcbiAgICAweDIwYTcsXHJcbiAgICAweDAxOTIsXHJcbiAgICAweDAwZTEsXHJcbiAgICAweDAwZWQsXHJcbiAgICAweDAwZjMsXHJcbiAgICAweDAwZmEsXHJcbiAgICAweDAwZjEsXHJcbiAgICAweDAwZDEsXHJcbiAgICAweDAwYWEsXHJcbiAgICAweDAwZGEsXHJcbiAgICAweDAwYmYsXHJcbiAgICAweDIzMTAsXHJcbiAgICAweDAwYWMsXHJcbiAgICAweDAwYmQsXHJcbiAgICAweDAwYmMsXHJcbiAgICAweDAwYTEsXHJcbiAgICAweDAwYWUsXHJcbiAgICAweDAwYmIsXHJcbiAgICAweDI1OTMsXHJcbiAgICAweDI1OTIsXHJcbiAgICAweDI1OTEsXHJcbiAgICAweDI1MDIsXHJcbiAgICAweDI1MjQsXHJcbiAgICAweDI1NjEsXHJcbiAgICAweDI1NjIsXHJcbiAgICAweDI1NTYsXHJcbiAgICAweDI1NTUsXHJcbiAgICAweDI1NjMsXHJcbiAgICAweDI1NTEsXHJcbiAgICAweDI1NTcsXHJcbiAgICAweDI1NWQsXHJcbiAgICAweDI1NWMsXHJcbiAgICAweDI1NWIsXHJcbiAgICAweDI1MTAsXHJcbiAgICAweDI1MTQsXHJcbiAgICAweDI1MzQsXHJcbiAgICAweDI1MmMsXHJcbiAgICAweDI1MWMsXHJcbiAgICAweDI1MDAsXHJcbiAgICAweDI1M2MsXHJcbiAgICAweDI1NWUsXHJcbiAgICAweDI1NWYsXHJcbiAgICAweDI1NWEsXHJcbiAgICAweDI1NTQsXHJcbiAgICAweDI1NjksXHJcbiAgICAweDI1NjYsXHJcbiAgICAweDI1NjAsXHJcbiAgICAweDI1NTAsXHJcbiAgICAweDI1NmMsXHJcbiAgICAweDI1NjcsXHJcbiAgICAweDI1NjgsXHJcbiAgICAweDI1NjQsXHJcbiAgICAweDI1NjUsXHJcbiAgICAweDI1NjgsXHJcbiAgICAweDI1NTgsXHJcbiAgICAweDI1NTIsXHJcbiAgICAweDI1NTMsXHJcbiAgICAweDI1NmIsXHJcbiAgICAweDI1NmEsXHJcbiAgICAweDI1MTgsXHJcbiAgICAweDI1MGMsXHJcbiAgICAweDI1ODgsXHJcbiAgICAweDI1ODQsXHJcbiAgICAweDI1OGIsXHJcbiAgICAweDI1OTAsXHJcbiAgICAweDI1ODAsXHJcbiAgICAweDAzYjEsXHJcbiAgICAweDAwZGYsXHJcbiAgICAweDAzOTMsXHJcbiAgICAweDAzYzAsXHJcbiAgICAweDAzYTMsXHJcbiAgICAweDAzYzMsXHJcbiAgICAweDAwYjUsXHJcbiAgICAweDAzYzQsXHJcbiAgICAweDAzYzYsXHJcbiAgICAweDAzYjgsXHJcbiAgICAweDIxMjYsXHJcbiAgICAweDAzYjQsXHJcbiAgICAweDIyMWUsXHJcbiAgICAweDAwZjgsXHJcbiAgICAweDAzYjUsXHJcbiAgICAweDIyMGYsXHJcbiAgICAweDIyNjEsXHJcbiAgICAweDAwYjEsXHJcbiAgICAweDIyNjUsXHJcbiAgICAweDIyNjYsXHJcbiAgICAweDIzMjAsXHJcbiAgICAweDIzMjEsXHJcbiAgICAweDAwZjcsXHJcbiAgICAweDIyNDgsXHJcbiAgICAweDAwYjAsXHJcbiAgICAweDIwMjIsXHJcbiAgICAweDAwYjcsXHJcbiAgICAweDIyMWEsXHJcbiAgICAweDIwN2YsXHJcbiAgICAweDAwYjIsXHJcbiAgICAweDIyMGUsXHJcbiAgICAweDAwYTBcclxuICBdXHJcblxyXG4gIFN0YXRlQ2hhbmdlID0gKG5ld1N0YXRlKTogYW55ID0+IHsgfVxyXG5cclxuICAvKiogc2VuZGluZyAgbXVsdGlwbGUgdW5pY29kZSB2YWx1ZXMgdG8gc29ja2V0ICovXHJcbiAgVGVybVNlbmRLZXlzID0gKGtleXMpOiBhbnkgPT4gdGhpcy5vblNlbmQoa2V5cylcclxuXHJcbiAgb25TZW5kOiAoZGF0YTogYW55KSA9PiB2b2lkXHJcblxyXG4gIFByb2Nlc3NEYXRhOiAoc3RyOiBzdHJpbmcpID0+IHZvaWRcclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmltcG9ydCB7IElMb2dnZXIsIExvZ0xldmVsIH0gZnJvbSAnLi9JbnRlcmZhY2VzJ1xyXG5cclxuLyoqXHJcbiAqIENvbnNvbGVMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHRvIHByb3ZpZGUgYmFzaWMgY29uc29sZSBsb2dnaW5nIGZ1bmN0aW9uYWxpdHkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29uc29sZUxvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xyXG4gIG1pbkxldmVsOiBMb2dMZXZlbFxyXG4gIGNvbnN0cnVjdG9yIChsZXZlbDogTG9nTGV2ZWwpIHtcclxuICAgIHRoaXMubWluTGV2ZWwgPSBsZXZlbFxyXG4gIH1cclxuXHJcbiAgbG9nIChsZXZlbDogTG9nTGV2ZWwsIGRhdGE6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICBjYXNlIExvZ0xldmVsLlZFUkJPU0U6XHJcbiAgICAgICAgdGhpcy52ZXJib3NlKGRhdGEpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBMb2dMZXZlbC5JTkZPOlxyXG4gICAgICAgIHRoaXMuaW5mbyhkYXRhKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgTG9nTGV2ZWwuREVCVUc6XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyhkYXRhKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgTG9nTGV2ZWwuV0FSTklORzpcclxuICAgICAgICB0aGlzLndhcm4oZGF0YSlcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIExvZ0xldmVsLkVSUk9SOlxyXG4gICAgICAgIHRoaXMuZXJyb3IoZGF0YSlcclxuICAgICAgICBicmVha1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWJ1ZyAobG9nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1pbkxldmVsID49IExvZ0xldmVsLkRFQlVHKSBjb25zb2xlLmRlYnVnKGxvZylcclxuICB9XHJcblxyXG4gIGluZm8gKGxvZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5taW5MZXZlbCA+PSBMb2dMZXZlbC5JTkZPKSBjb25zb2xlLmluZm8obG9nKVxyXG4gIH1cclxuXHJcbiAgZXJyb3IgKGxvZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5taW5MZXZlbCA+PSBMb2dMZXZlbC5FUlJPUikgY29uc29sZS5lcnJvcihsb2cpXHJcbiAgfVxyXG5cclxuICB3YXJuIChsb2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWluTGV2ZWwgPj0gTG9nTGV2ZWwuV0FSTklORykgY29uc29sZS53YXJuKGxvZylcclxuICB9XHJcblxyXG4gIHZlcmJvc2UgKGxvZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5taW5MZXZlbCA+PSBMb2dMZXZlbC5WRVJCT1NFKSBjb25zb2xlLmxvZyhsb2cpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGlzVHJ1dGh5IH0gZnJvbSAnLi9VdGlsaXRpZXMvVXRpbGl0eU1ldGhvZHMnXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBWaW5heSBHXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5leHBvcnQgY29uc3QgVHlwZUNvbnZlcnRlciA9IHtcclxuICAvLyBCaW5hcnkgZW5jb2RpbmcgYW5kIGRlY29kaW5nIGZ1bmN0aW9uc1xyXG4gIFJlYWRTaG9ydCAodjogc3RyaW5nLCBwOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy9cclxuICAgIHJldHVybiAodi5jaGFyQ29kZUF0KHApIDw8IDgpICsgdi5jaGFyQ29kZUF0KHAgKyAxKVxyXG4gIH0sXHJcblxyXG4gIFJlYWRTaG9ydFggKHY6IHN0cmluZywgcDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAodi5jaGFyQ29kZUF0KHAgKyAxKSA8PCA4KSArIHYuY2hhckNvZGVBdChwKVxyXG4gIH0sXHJcblxyXG4gIFJlYWRJbnQgKHY6IHN0cmluZywgcDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAodi5jaGFyQ29kZUF0KHApICogMHgxMDAwMDAwKSArICh2LmNoYXJDb2RlQXQocCArIDEpIDw8IDE2KSArXHJcbiAgICAgICAgICAgKHYuY2hhckNvZGVBdChwICsgMikgPDwgOCkgKyB2LmNoYXJDb2RlQXQocCArIDMpXHJcbiAgfSwgLy8gV2UgdXNlIFwiKjB4MTAwMDAwMFwiIGluc3RlYWQgb2YgXCI8PDI0XCIgYmVjYXVzZSB0aGUgc2hpZnQgY29udmVydHMgdGhlIG51bWJlciB0byBzaWduZWQgaW50MzIuXHJcblxyXG4gIFJlYWRTSW50ICh2OiBzdHJpbmcsIHA6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKHYuY2hhckNvZGVBdChwKSA8PCAyNCkgKyAodi5jaGFyQ29kZUF0KHAgKyAxKSA8PCAxNikgK1xyXG4gICAgICAgICAgICh2LmNoYXJDb2RlQXQocCArIDIpIDw8IDgpICsgdi5jaGFyQ29kZUF0KHAgKyAzKVxyXG4gIH0sXHJcblxyXG4gIFJlYWRJbnRYICh2OiBzdHJpbmcsIHA6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKHYuY2hhckNvZGVBdChwICsgMykgKiAweDEwMDAwMDApICsgKHYuY2hhckNvZGVBdChwICsgMikgPDwgMTYpICtcclxuICAgICAgICAgICAodi5jaGFyQ29kZUF0KHAgKyAxKSA8PCA4KSArIHYuY2hhckNvZGVBdChwKVxyXG4gIH0sXHJcblxyXG4gIFNob3J0VG9TdHIgKHY6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgodiA+PiA4KSAmIDB4RkYsIHYgJiAweEZGKVxyXG4gIH0sXHJcblxyXG4gIFNob3J0VG9TdHJYICh2OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUodiAmIDB4RkYsICh2ID4+IDgpICYgMHhGRilcclxuICB9LFxyXG5cclxuICBJbnRUb1N0ciAodjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKCh2ID4+IDI0KSAmIDB4RkYsICh2ID4+IDE2KSAmIDB4RkYsICh2ID4+IDgpICYgMHhGRiwgdiAmIDB4RkYpXHJcbiAgfSxcclxuXHJcbiAgSW50VG9TdHJYICh2OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUodiAmIDB4RkYsICh2ID4+IDgpICYgMHhGRiwgKHYgPj4gMTYpICYgMHhGRiwgKHYgPj4gMjQpICYgMHhGRilcclxuICB9LFxyXG5cclxuICBTcGxpdEFycmF5ICh2OiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdi5zcGxpdCgnLCcpXHJcbiAgfSxcclxuXHJcbiAgQ2xvbmUgKHY6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2KSlcclxuICB9LFxyXG5cclxuICBFc2NhcGVIdG1sICh4OiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuKTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiB4LnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpXHJcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvJy9nLCAnJmFwb3M7JylcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ2Jvb2xlYW4nKSB7IHJldHVybiB4IH1cclxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHsgcmV0dXJuIHggfVxyXG4gIH0sXHJcblxyXG4gIC8vIE1vdmUgYW4gZWxlbWVudCBmcm9tIG9uZSBwb3NpdGlvbiBpbiBhbiBhcnJheSB0byBhIG5ldyBwb3NpdGlvblxyXG4gIEFycmF5RWxlbWVudE1vdmUgKGFycjogbnVtYmVyW10sIGZyb206IG51bWJlciwgdG86IG51bWJlcik6IHZvaWQge1xyXG4gICAgYXJyLnNwbGljZSh0bywgMCwgYXJyLnNwbGljZShmcm9tLCAxKVswXSlcclxuICB9LFxyXG5cclxuICAvLyBQcmludCBvYmplY3QgZm9yIEhUTUxcclxuICBPYmplY3RUb1N0cmluZ0V4ICh4OiBhbnksIGM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgcjogc3RyaW5nID0gJydcclxuICAgIGlmICh4ICE9PSAwICYmICghaXNUcnV0aHkoeCkgfHwgeCA9PSBudWxsKSkgcmV0dXJuICcoTnVsbCknXHJcbiAgICBpZiAoeCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZm9yLWluLWFycmF5XHJcbiAgICAgIGZvciAoY29uc3QgaSBpbiB4KSB7XHJcbiAgICAgICAgciA9IHIgKyAnPGJyIC8+JyArIFN0cmluZyh0aGlzLmdhcChjKSkgKyAnSXRlbSAjJyArIFN0cmluZyhpKSArICc6ICcgKyBTdHJpbmcodGhpcy5PYmplY3RUb1N0cmluZ0V4KHhbaV0sIGMgKyAxKSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh4IGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgIGZvciAoY29uc3QgaiBpbiB4KSB7XHJcbiAgICAgICAgciA9IHIgKyAnPGJyIC8+JyArIFN0cmluZyh0aGlzLmdhcChjKSkgKyBTdHJpbmcoaikgKyAnID0gJyArIFN0cmluZyh0aGlzLk9iamVjdFRvU3RyaW5nRXgoeFtqXSwgYyArIDEpKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByID0gciArIFN0cmluZyh0aGlzLkVzY2FwZUh0bWwoeCkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gclxyXG4gIH0sXHJcblxyXG4gIC8vIFByaW50IG9iamVjdCBmb3IgY29uc29sZVxyXG4gIE9iamVjdFRvU3RyaW5nRXgyICh4OiBhbnksIGM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgcjogc3RyaW5nID0gJydcclxuICAgIGlmICh4ICE9PSAwICYmICghaXNUcnV0aHkoeCkgfHwgeCA9PSBudWxsKSkgeyByZXR1cm4gJyhOdWxsKScgfVxyXG4gICAgaWYgKHggaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZvci1pbi1hcnJheVxyXG4gICAgICBmb3IgKGNvbnN0IGkgaW4geCkge1xyXG4gICAgICAgIHIgPSByICsgJ1xcclxcbicgKyBTdHJpbmcodGhpcy5nYXAyKGMpKSArICdJdGVtICMnICsgU3RyaW5nKGkpICsgJzogJyArIFN0cmluZyh0aGlzLk9iamVjdFRvU3RyaW5nRXgyKHhbaV0sIGMgKyAxKSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh4IGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgIGZvciAoY29uc3QgaiBpbiB4KSB7XHJcbiAgICAgICAgciA9IHIgKyAnXFxyXFxuJyArIFN0cmluZyh0aGlzLmdhcDIoYykpICsgU3RyaW5nKGopICsgJyA9ICcgKyBTdHJpbmcodGhpcy5PYmplY3RUb1N0cmluZ0V4Mih4W2pdLCBjICsgMSkpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHIgPSByICsgU3RyaW5nKHRoaXMuRXNjYXBlSHRtbCh4KSlcclxuICAgIH1cclxuICAgIHJldHVybiByXHJcbiAgfSxcclxuXHJcbiAgLy8gQ3JlYXRlIGFuIGlkZW50IGdhcFxyXG4gIGdhcCAoYzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCB4ID0gJydcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGMgKiA0KTsgaSsrKSB7XHJcbiAgICAgIHggKz0gJyZuYnNwOydcclxuICAgIH1cclxuICAgIHJldHVybiB4XHJcbiAgfSxcclxuXHJcbiAgZ2FwMiAoYzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCB4ID0gJydcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGMgKiA0KTsgaSsrKSB7XHJcbiAgICAgIHggKz0gJyAnXHJcbiAgICB9XHJcbiAgICByZXR1cm4geFxyXG4gIH0sXHJcblxyXG4gIC8vIFByaW50IGFuIG9iamVjdCBpbiBodG1sXHJcbiAgT2JqZWN0VG9TdHJpbmcgKHg6IGFueSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5PYmplY3RUb1N0cmluZ0V4KHgsIDApXHJcbiAgfSxcclxuXHJcbiAgT2JqZWN0VG9TdHJpbmcyICh4OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuT2JqZWN0VG9TdHJpbmdFeDIoeCwgMClcclxuICB9LFxyXG5cclxuICAvLyBDb252ZXJ0IGRlY2ltYWwgdG8gaGV4XHJcbiAgY2hhcjJoZXggKGk6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigtMikudG9VcHBlckNhc2UoKVxyXG4gIH0sXHJcblxyXG4gIC8vIENvbnZlcnQgYSByYXcgc3RyaW5nIHRvIGEgaGV4IHN0cmluZ1xyXG4gIHJzdHIyaGV4IChpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCByID0gJyc7IGxldCBpXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgciA9IHIgKyBTdHJpbmcodGhpcy5jaGFyMmhleChpbnB1dC5jaGFyQ29kZUF0KGkpKSlcclxuICAgIH1cclxuICAgIHJldHVybiByXHJcbiAgfSxcclxuXHJcbiAgLy8gVVRGLTggZW5jb2RpbmcgJiBkZWNvZGluZyBmdW5jdGlvbnNcclxuICBlbmNvZGVfdXRmOCAoczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQocykpXHJcbiAgfSxcclxuXHJcbiAgZGVjb2RlX3V0ZjggKHM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShzKSlcclxuICB9LFxyXG5cclxuICAvLyBDb252ZXJ0IGEgc3RyaW5nIGludG8gYSBibG9iXHJcbiAgZGF0YTJibG9iIChkYXRhOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHsgYnl0ZXNbaV0gPSBkYXRhLmNoYXJDb2RlQXQoaSkgfVxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShieXRlcyldKVxyXG4gICAgcmV0dXJuIGJsb2JcclxuICB9LFxyXG5cclxuICAvLyBHZW5lcmF0ZSByYW5kb20gbnVtYmVyc1xyXG4gIHJhbmRvbSAobWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heClcclxuICB9LFxyXG5cclxuICAvLyBUcmFkZW1hcmtzXHJcbiAgdHJhZGVtYXJrcyAoeDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB4LnJlcGxhY2UoL1xcKFJcXCkvZywgJyZyZWc7JykucmVwbGFjZSgvXFwoVE1cXCkvZywgJyZ0cmFkZTsnKVxyXG4gIH1cclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmltcG9ydCB7IElMb2dnZXIsIElNb2R1bGUgfSBmcm9tICcuL0ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFByb3RvY29sIH0gZnJvbSAnLi9BTVRSZWRpcmVjdG9yJ1xyXG5cclxuLyoqXHJcbiAqIERlc2t0b3AgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGhhbmRsaW5nIFJlbW90ZSBEZXNrdG9wIGZ1bmN0aW9uYWxpdHlcclxuICovXHJcbmNsYXNzIERlc2t0b3AgaW1wbGVtZW50cyBJTW9kdWxlIHtcclxuICByb3RhdGlvbjogbnVtYmVyXHJcbiAgdXNlWlJMRTogYm9vbGVhblxyXG4gIG9sZE1vdXNlWDogbnVtYmVyXHJcbiAgb2xkTW91c2VZOiBudW1iZXJcclxuICBsYXN0TW91c2VYOiBudW1iZXJcclxuICBsYXN0TW91c2VZOiBudW1iZXJcclxuICBicHA6IG51bWJlclxyXG4gIGt2bURhdGFTdXBwb3J0ZWQ6IGJvb2xlYW5cclxuICBvbkt2bURhdGFBY2s6IGFueVxyXG4gIHVybHZhcnM6IGFueVxyXG4gIG9uS3ZtRGF0YVBlbmRpbmc6IGFueVtdXHJcbiAgc3BhcmV3OiBudW1iZXJcclxuICBzcGFyZWg6IG51bWJlclxyXG4gIHNwYXJldzI6IG51bWJlclxyXG4gIHNwYXJlaDI6IG51bWJlclxyXG4gIHNwYXJlOiBhbnlcclxuICBzcGFyZWNhY2hlOiBhbnlcclxuICBmcmFtZVJhdGVEZWxheTogbnVtYmVyXHJcbiAgaW5mbGF0ZTogYW55XHJcbiAgbG9nZ2VyOiBJTG9nZ2VyXHJcbiAgaG9sZGluZzogYm9vbGVhblxyXG4gIGNhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXHJcbiAgdGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcclxuICB3aWR0aDogbnVtYmVyXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxuICBjYW52YXNJZDogc3RyaW5nXHJcbiAgZm9jdXNNb2RlOiBudW1iZXJcclxuICByd2lkdGg6IG51bWJlclxyXG4gIHJoZWlnaHQ6IG51bWJlclxyXG4gIFNjcmVlbldpZHRoOiBudW1iZXJcclxuICBTY3JlZW5IZWlnaHQ6IG51bWJlclxyXG4gIGxhc3RLZWVwQWxpdmU6IG51bWJlclxyXG4gIGJ1dHRvbm1hc2s6IG51bWJlclxyXG4gIHN0YXRlOiBudW1iZXJcclxuICBjYW52YXNDb250cm9sOiBIVE1MQ2FudmFzRWxlbWVudFxyXG4gIHNjcm9sbGRpdjogSFRNTEVsZW1lbnRcclxuICBsYXN0TW91c2VYMjogbnVtYmVyXHJcbiAgbm9Nb3VzZVJvdGF0ZTogYm9vbGVhblxyXG4gIHByb3RvY29sOiBQcm90b2NvbFxyXG4gIFpMSUI6IGFueVxyXG4gIGxhc3RNb3VzZU1vdmVUaW1lOiBudW1iZXJcclxuXHJcbiAgcHJvY2Vzc0RhdGEgKGRhdGE6IHN0cmluZyk6IGFueSB7fVxyXG4gIHVwZGF0ZVNjcmVlbkRpbWVuc2lvbnM6ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4gdm9pZFxyXG4gIG9uU3RhdGVDaGFuZ2UgKHN0YXRlOiBudW1iZXIpOiBhbnkge31cclxuICBvbkt2bURhdGE6IChkYXRhOiBzdHJpbmcpID0+IHZvaWRcclxuICBvblNjcmVlblJlc2l6ZTogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW52YXNJZDogc3RyaW5nKSA9PiB2b2lkXHJcbiAgb25TY3JlZW5TaXplQ2hhbmdlOiAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHZvaWRcclxuICBzZXREZXNrRm9jdXM6IChlbDogc3RyaW5nLCBmb2N1c21vZGU6IG51bWJlcikgPT4gdm9pZFxyXG4gIGdldERlc2tGb2N1czogKGVsOiBzdHJpbmcpID0+IENTU1N0eWxlRGVjbGFyYXRpb25cclxuICBzdGFydCAoKTogYW55IHt9XHJcbiAgb25TZW5kS3ZtRGF0YSAoZGF0YTogc3RyaW5nKTogYW55IHt9XHJcblxyXG4gIG9uU2VuZDogKGRhdGE6IHN0cmluZykgPT4gdm9pZFxyXG4gIG9uUHJvY2Vzc0RhdGE6IChkYXRhOiBzdHJpbmcpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IHsgRGVza3RvcCB9XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCB7IElTdGF0ZVByb2Nlc3NvciwgSURhdGFQcm9jZXNzb3IsIElMb2dnZXIsIElDb21tdW5pY2F0b3IgfSBmcm9tICcuLi9JbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBTdGF0ZVByb2Nlc3NvckZhY3RvcnkgfSBmcm9tICcuLi9TdGF0ZVByb2Nlc3NvckZhY3RvcnknXHJcbmltcG9ydCB7IERlc2t0b3AgfSBmcm9tICcuLi9EZXNrdG9wJ1xyXG5pbXBvcnQgeyBpc1RydXRoeSB9IGZyb20gJy4uL1V0aWxpdGllcy9VdGlsaXR5TWV0aG9kcydcclxuXHJcbi8qKlxyXG4gKiBEYXRhUHJvY2Vzc29yIHByb3ZpZGVzIHRoZSBmdW5jdGlvbmFsaXR5IGZvciBwcm9jZXNzaW5nIGRpZmZlcmVudCBzdGF0ZXMgb2YgUkZCIGxldmVyYWdpbmdcclxuICogdGhlIGRpZmZlcmVudCBTdGF0ZVByb2Nlc3NvcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBEYXRhUHJvY2Vzc29yIGltcGxlbWVudHMgSURhdGFQcm9jZXNzb3Ige1xyXG4gIGFjYzogc3RyaW5nXHJcbiAgcmVtb3RlRnJhbWVCdWZmZXJTdGF0ZU1hbmFnZXI6IElTdGF0ZVByb2Nlc3NvclxyXG4gIHN0YXRlUHJvY2Vzc29yRmFjOiBTdGF0ZVByb2Nlc3NvckZhY3RvcnlcclxuICBwYXJlbnQ6IERlc2t0b3BcclxuICBsb2dnZXI6IElMb2dnZXJcclxuICBjb25zdHJ1Y3RvciAobG9nZ2VyOiBJTG9nZ2VyLCBjb21tOiBJQ29tbXVuaWNhdG9yLCBwYXJlbnQ6IERlc2t0b3ApIHtcclxuICAgIHRoaXMuYWNjID0gJydcclxuICAgIHRoaXMuc3RhdGVQcm9jZXNzb3JGYWMgPSBuZXcgU3RhdGVQcm9jZXNzb3JGYWN0b3J5KGNvbW0sIHBhcmVudCwgdGhpcy51cGRhdGVSRkJTdGF0ZS5iaW5kKHRoaXMpKVxyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcclxuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBwcm9jZXNzRGF0YSBpcyBjYWxsZWQgZnJvbSBJQ29tbXVuaWNhdG9yIG9uIG5ldyBkYXRhIGNvbWluZyBvdmVyIHRoZSB3aXJlXHJcbiAgICogQHBhcmFtIGRhdGEgaXMgdGhlIGN1cnJlbnQgZGF0YSBibG9jayByZWNlaXZlZCBvbiB0aGUgd2ViIHNvY2tldFxyXG4gICAqL1xyXG4gIHByb2Nlc3NEYXRhIChkYXRhOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYgKCFpc1RydXRoeShkYXRhKSkgcmV0dXJuXHJcbiAgICB0aGlzLmFjYyArPSBkYXRhXHJcbiAgICBsZXQgY21kU2l6ZSA9IDBcclxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoYFByb2Nlc3MgRGF0YSBBQ0MgbGVuZ3RoOiAgJHt0aGlzLmFjYy5sZW5ndGh9YClcclxuICAgIHdoaWxlICh0aGlzLmFjYy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHN0YXRlUHJvY2Vzc29yOiBJU3RhdGVQcm9jZXNzb3IgPSB0aGlzLnN0YXRlUHJvY2Vzc29yRmFjLmdldFByb2Nlc3Nvcih0aGlzLnBhcmVudC5zdGF0ZSlcclxuICAgICAgY29uc3QgcHJldlN0YXRlID0gdGhpcy5wYXJlbnQuc3RhdGVcclxuICAgICAgY21kU2l6ZSA9IHN0YXRlUHJvY2Vzc29yLnByb2Nlc3NTdGF0ZSh0aGlzLmFjYylcclxuICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShgU3RhdGUgICR7cHJldlN0YXRlfSAgUHJvY2Vzc2VkLiBjbWRTaXplIHJldHVybmVkICR7Y21kU2l6ZX1gKVxyXG4gICAgICBpZiAoY21kU2l6ZSA9PT0gMCkgcmV0dXJuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdiZWZvcmUgYWNjICcsIHRoaXMuYWNjKVxyXG4gICAgICB0aGlzLmFjYyA9IHRoaXMuYWNjLnN1YnN0cmluZyhjbWRTaXplKVxyXG4gICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKGByZW1haW5pbmcgYWNjICAke3RoaXMuYWNjLmxlbmd0aH0gY29tbWFuZCBzaXplOiAke2NtZFNpemV9IG5ldyBwYXJlbnQgc3RhdGU6ICR7dGhpcy5wYXJlbnQuc3RhdGV9YClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVJGQlN0YXRlIChzdGF0ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhcmVudC5zdGF0ZSA9IHN0YXRlXHJcbiAgfVxyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCB7IElSTEVEZWNvZGVyIH0gZnJvbSAnLi4vSW50ZXJmYWNlcydcclxuaW1wb3J0IHsgRGVza3RvcCB9IGZyb20gJy4uL0Rlc2t0b3AnXHJcbmltcG9ydCB7IEltYWdlSGVscGVyIH0gZnJvbSAnLi4vVXRpbGl0aWVzL0ltYWdlSGVscGVyJ1xyXG5jbGFzcyBSTEVEZWNvZGVyIGltcGxlbWVudHMgSVJMRURlY29kZXIge1xyXG4gIHBhcmVudDogRGVza3RvcFxyXG4gIGNvbnN0cnVjdG9yIChwYXJlbnQ6IERlc2t0b3ApIHtcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50XHJcbiAgfVxyXG5cclxuICBEZWNvZGUgKGRhdGE6IHN0cmluZywgcHRyOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgczogbnVtYmVyLCBkYXRhbGVuOiBudW1iZXIpOiBhbnkge1xyXG4gICAgY29uc3Qgc3ViZW5jb2RpbmcgPSBkYXRhLmNoYXJDb2RlQXQocHRyKyspXHJcbiAgICBsZXQgaW5kZXhcclxuICAgIGxldCB2XHJcbiAgICBsZXQgcnVubGVuZ3RoZGVjb2RlXHJcbiAgICBjb25zdCBwYWxldHRlOiBhbnkgPSB7fVxyXG4gICAgbGV0IHJsZWNvdW50ID0gMFxyXG4gICAgbGV0IHJ1bmxlbmd0aCA9IDBcclxuICAgIGxldCBpXHJcbiAgICAvLyB0aGlzLnBhcmVudC5EZWJ1ZyhcIlJFQ1QgUkxFIChcIiArIChkYXRhbGVuIC0gNSkgKyBcIiwgXCIgKyBzdWJlbmNvZGluZyArIFwiKTpcIiArIHJzdHIyaGV4KGRhdGEuc3Vic3RyaW5nKDIxLCAyMSArIChkYXRhbGVuIC0gNSkpKSk7XHJcbiAgICBpZiAoc3ViZW5jb2RpbmcgPT09IDApIHtcclxuICAgICAgLy8gUkFXIGVuY29kaW5nXHJcbiAgICAgIHRoaXMucGFyZW50LmxvZ2dlci52ZXJib3NlKCdSYXcgZW5jb2RpbmcnKVxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgczsgaSsrKSB7IEltYWdlSGVscGVyLnNldFBpeGVsKHRoaXMucGFyZW50LCBkYXRhLmNoYXJDb2RlQXQocHRyKyspICsgKCh0aGlzLnBhcmVudC5icHAgPT09IDIpID8gKGRhdGEuY2hhckNvZGVBdChwdHIrKykgPDwgOCkgOiAwKSwgaSkgfVxyXG4gICAgICBJbWFnZUhlbHBlci5wdXRJbWFnZSh0aGlzLnBhcmVudCwgeCwgeSlcclxuICAgIH0gZWxzZSBpZiAoc3ViZW5jb2RpbmcgPT09IDEpIHtcclxuICAgICAgLy8gU29saWQgY29sb3IgdGlsZVxyXG4gICAgICB2ID0gZGF0YS5jaGFyQ29kZUF0KHB0cisrKSArICgodGhpcy5wYXJlbnQuYnBwID09PSAyKSA/IChkYXRhLmNoYXJDb2RlQXQocHRyKyspIDw8IDgpIDogMClcclxuICAgICAgdGhpcy5wYXJlbnQuY2FudmFzQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoJyArICgodGhpcy5wYXJlbnQuYnBwID09PSAxKSA/IChgJHsodiAmIDIyNCl9LCAkeygodiAmIDI4KSA8PCAzKX0sICR7SW1hZ2VIZWxwZXIuZml4Q29sb3IoKHYgJiAzKSA8PCA2KX1gKSA6IChgJHsoKHYgPj4gOCkgJiAyNDgpfSwgJHsoKHYgPj4gMykgJiAyNTIpfSwkeygodiAmIDMxKSA8PCAzKX1gKSkgKyAnKSdcclxuXHJcbiAgICAgIHRoaXMucGFyZW50LmxvZ2dlci52ZXJib3NlKCdmaWxsc3R5bGU6ICcgKyB0aGlzLnBhcmVudC5jYW52YXNDdHguZmlsbFN0eWxlKVxyXG4gICAgICBjb25zdCB4eCA9IEltYWdlSGVscGVyLnJvdFgodGhpcy5wYXJlbnQsIHgsIHkpXHJcbiAgICAgIHkgPSBJbWFnZUhlbHBlci5yb3RZKHRoaXMucGFyZW50LCB4LCB5KVxyXG4gICAgICB4ID0geHhcclxuXHJcbiAgICAgIHRoaXMucGFyZW50LmNhbnZhc0N0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxyXG4gICAgfSBlbHNlIGlmIChzdWJlbmNvZGluZyA+IDEgJiYgc3ViZW5jb2RpbmcgPCAxNykgeyAvLyBQYWNrZWQgcGFsZXR0ZSBlbmNvZGVkIHRpbGVcclxuICAgICAgLy8gUmVhZCB0aGUgcGFsZXR0ZVxyXG4gICAgICB0aGlzLnBhcmVudC5sb2dnZXIudmVyYm9zZSgnUmVhZCB0aGUgcGFja2VkIHBhbGV0dGUnKVxyXG4gICAgICBsZXQgYnIgPSA0OyBsZXQgYm0gPSAxNSAvLyBiciBpcyBCaXRSZWFkIGFuZCBibSBpcyBCaXRNYXNrLiBCeSBhZGp1c3RpbmcgdGhlc2UgdHdvIHdlIGNhbiBzdXBwb3J0IGFsbCB0aGUgdmFyaWF0aW9ucyBpbiB0aGlzIGVuY29kaW5nLlxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgc3ViZW5jb2Rpbmc7IGkrKykgeyBwYWxldHRlW2ldID0gZGF0YS5jaGFyQ29kZUF0KHB0cisrKSArICgodGhpcy5wYXJlbnQuYnBwID09PSAyKSA/IChkYXRhLmNoYXJDb2RlQXQocHRyKyspIDw8IDgpIDogMCkgfVxyXG5cclxuICAgICAgLy8gQ29tcHV0ZSBiaXRzIHRvIHJlYWQgJiBiaXQgbWFya1xyXG4gICAgICBpZiAoc3ViZW5jb2RpbmcgPT09IDIpIHsgYnIgPSAxOyBibSA9IDEgfSBlbHNlIGlmIChzdWJlbmNvZGluZyA8PSA0KSB7IGJyID0gMjsgYm0gPSAzIH1cclxuXHJcbiAgICAgIC8vIERpc3BsYXkgYWxsIHRoZSBiaXRzXHJcbiAgICAgIHdoaWxlIChybGVjb3VudCA8IHMgJiYgcHRyIDwgZGF0YS5sZW5ndGgpIHsgdiA9IGRhdGEuY2hhckNvZGVBdChwdHIrKyk7IGZvciAoaSA9ICg4IC0gYnIpOyBpID49IDA7IGkgLT0gYnIpIHsgSW1hZ2VIZWxwZXIuc2V0UGl4ZWwodGhpcy5wYXJlbnQsIHBhbGV0dGVbKHYgPj4gaSkgJiBibV0sIHJsZWNvdW50KyspIH0gfVxyXG4gICAgICBJbWFnZUhlbHBlci5wdXRJbWFnZSh0aGlzLnBhcmVudCwgeCwgeSlcclxuICAgIH0gZWxzZSBpZiAoc3ViZW5jb2RpbmcgPT09IDEyOCkgeyAvLyBSTEUgZW5jb2RlZCB0aWxlXHJcbiAgICAgIHRoaXMucGFyZW50LmxvZ2dlci52ZXJib3NlKCdSTEUgZW5jb2RlZCB0aWxlJylcclxuICAgICAgd2hpbGUgKHJsZWNvdW50IDwgcyAmJiBwdHIgPCBkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgcnVuIGNvbG9yXHJcbiAgICAgICAgdiA9IGRhdGEuY2hhckNvZGVBdChwdHIrKykgKyAoKHRoaXMucGFyZW50LmJwcCA9PT0gMikgPyAoZGF0YS5jaGFyQ29kZUF0KHB0cisrKSA8PCA4KSA6IDApXHJcblxyXG4gICAgICAgIC8vIERlY29kZSB0aGUgcnVuIGxlbmd0aC4gVGhpcyBpcyB0aGUgZmFzdGVzdCBhbmQgbW9zdCBjb21wYWN0IHdheSBJIGZvdW5kIHRvIGRvIHRoaXMuXHJcbiAgICAgICAgcnVubGVuZ3RoID0gMTsgZG8geyBydW5sZW5ndGggKz0gKHJ1bmxlbmd0aGRlY29kZSA9IGRhdGEuY2hhckNvZGVBdChwdHIrKykpIH0gd2hpbGUgKHJ1bmxlbmd0aGRlY29kZSA9PT0gMjU1KVxyXG5cclxuICAgICAgICAvLyBEcmF3IGEgcnVuXHJcbiAgICAgICAgd2hpbGUgKC0tcnVubGVuZ3RoID49IDApIHsgSW1hZ2VIZWxwZXIuc2V0UGl4ZWwodGhpcy5wYXJlbnQsIHYsIHJsZWNvdW50KyspIH1cclxuICAgICAgfVxyXG4gICAgICBJbWFnZUhlbHBlci5wdXRJbWFnZSh0aGlzLnBhcmVudCwgeCwgeSlcclxuICAgIH0gZWxzZSBpZiAoc3ViZW5jb2RpbmcgPiAxMjkpIHsgLy8gUGFsZXR0ZSBSTEUgZW5jb2RlZCB0aWxlXHJcbiAgICAgIHRoaXMucGFyZW50LmxvZ2dlci52ZXJib3NlKCdSZWFkIHRoZSBSTEUgcGFsZXR0ZScpXHJcbiAgICAgIC8vIFJlYWQgdGhlIHBhbGV0dGVcclxuICAgICAgZm9yIChpID0gMDsgaSA8IChzdWJlbmNvZGluZyAtIDEyOCk7IGkrKykgeyBwYWxldHRlW2ldID0gZGF0YS5jaGFyQ29kZUF0KHB0cisrKSArICgodGhpcy5wYXJlbnQuYnBwID09PSAyKSA/IChkYXRhLmNoYXJDb2RlQXQocHRyKyspIDw8IDgpIDogMCkgfVxyXG4gICAgICB0aGlzLnBhcmVudC5sb2dnZXIudmVyYm9zZSgnRGVjb2RlIFJMRSBvbiBwYWxldHRlJylcclxuICAgICAgLy8gRGVjb2RlIFJMRSAgb24gcGFsZXR0ZVxyXG4gICAgICB3aGlsZSAocmxlY291bnQgPCBzICYmIHB0ciA8IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gU2V0dXAgdGhlIHJ1biwgZ2V0IHRoZSBjb2xvciBpbmRleCBhbmQgZ2V0IHRoZSBjb2xvciBmcm9tIHRoZSBwYWxldHRlLlxyXG4gICAgICAgIHJ1bmxlbmd0aCA9IDE7IGluZGV4ID0gZGF0YS5jaGFyQ29kZUF0KHB0cisrKTsgdiA9IHBhbGV0dGVbaW5kZXggJSAxMjhdXHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBpbmRleCBzdGFydHMgd2l0aCBoaWdoIG9yZGVyIGJpdCAxLCB0aGlzIGlzIGEgcnVuIGFuZCBkZWNvZGUgdGhlIHJ1biBsZW5ndGguXHJcbiAgICAgICAgaWYgKGluZGV4ID4gMTI3KSB7IGRvIHsgcnVubGVuZ3RoICs9IChydW5sZW5ndGhkZWNvZGUgPSBkYXRhLmNoYXJDb2RlQXQocHRyKyspKSB9IHdoaWxlIChydW5sZW5ndGhkZWNvZGUgPT09IDI1NSkgfVxyXG5cclxuICAgICAgICAvLyBEcmF3IGEgcnVuXHJcbiAgICAgICAgd2hpbGUgKC0tcnVubGVuZ3RoID49IDApIHsgSW1hZ2VIZWxwZXIuc2V0UGl4ZWwodGhpcy5wYXJlbnQsIHYsIHJsZWNvdW50KyspIH1cclxuICAgICAgfVxyXG4gICAgICBJbWFnZUhlbHBlci5wdXRJbWFnZSh0aGlzLnBhcmVudCwgeCwgeSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFJMRURlY29kZXIgfVxyXG4iLCJleHBvcnQgeyBEYXRhUHJvY2Vzc29yIH0gZnJvbSAnLi9EYXRhUHJvY2Vzc29yJ1xyXG5leHBvcnQgeyBSTEVEZWNvZGVyIH0gZnJvbSAnLi9STEVEZWNvZGVyJ1xyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbnRlcmZhY2UgSUxvZ2dlciB7XHJcbiAgZGVidWc6IChsb2c6IHN0cmluZykgPT4gdm9pZFxyXG4gIGluZm86IChsb2c6IHN0cmluZykgPT4gdm9pZFxyXG4gIGVycm9yOiAobG9nOiBzdHJpbmcpID0+IHZvaWRcclxuICB3YXJuOiAobG9nOiBzdHJpbmcpID0+IHZvaWRcclxuICB2ZXJib3NlOiAobG9nOiBzdHJpbmcpID0+IHZvaWRcclxufVxyXG5lbnVtIExvZ0xldmVsIHtcclxuICBWRVJCT1NFID0gNSxcclxuICBJTkZPID0gNCxcclxuICBERUJVRyA9IDMsXHJcbiAgV0FSTklORyA9IDIsXHJcbiAgRVJST1IgPSAxXHJcbn1cclxuZXhwb3J0IHsgSUxvZ2dlciwgTG9nTGV2ZWwgfVxyXG4iLCJleHBvcnQgeyBJRGF0YVByb2Nlc3NvciB9IGZyb20gJy4vSURhdGFQcm9jZXNzb3InXHJcbmV4cG9ydCB7IElMb2dnZXIsIExvZ0xldmVsIH0gZnJvbSAnLi9JTG9nZ2VyJ1xyXG5leHBvcnQgeyBJTW9kdWxlIH0gZnJvbSAnLi9JTW9kdWxlJ1xyXG5leHBvcnQgeyBJUkxFRGVjb2RlciB9IGZyb20gJy4vSVJMRURlY29kZXInXHJcbmV4cG9ydCB7IElTZXJ2ZXJDdXRUZXh0SGFuZGxlciB9IGZyb20gJy4vSVNlcnZlckN1dFRleHRIYW5kbGVyJ1xyXG5leHBvcnQgeyBJU3RhdGVQcm9jZXNzb3IgfSBmcm9tICcuL0lTdGF0ZVByb2Nlc3NvcidcclxuZXhwb3J0IHsgSUNvbW11bmljYXRvciwgSUt2bURhdGFDb21tdW5pY2F0b3IgfSBmcm9tICcuL0lDb21tdW5pY2F0b3InXHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCB7IElDb21tdW5pY2F0b3IsIElTdGF0ZVByb2Nlc3NvciwgSVJMRURlY29kZXIgfSBmcm9tICcuLi9JbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBUeXBlQ29udmVydGVyIH0gZnJvbSAnLi4vQ29udmVydGVyJ1xyXG5pbXBvcnQgeyBEZXNrdG9wIH0gZnJvbSAnLi4vRGVza3RvcCdcclxuaW1wb3J0IHsgSW1hZ2VIZWxwZXIsIENvbW1zSGVscGVyLCBpc1RydXRoeSB9IGZyb20gJy4uL1V0aWxpdGllcydcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGUgZW5jb2RlZCBSRkIgcGFja2V0cy4gU3VwcG9ydGVkIGVuY29kaW5ncywgUkFXLCBaUkxFLlxyXG4gKi9cclxuXHJcbmNsYXNzIEVuY29kaW5nIGltcGxlbWVudHMgSVN0YXRlUHJvY2Vzc29yIHtcclxuICB3c1NvY2tldDogSUNvbW11bmljYXRvclxyXG4gIG5leHQ6IElTdGF0ZVByb2Nlc3NvclxyXG5cclxuICBwYXJlbnQ6IERlc2t0b3BcclxuICBybGVEZWNvZGVyOiBJUkxFRGVjb2RlclxyXG4gIHVwZGF0ZVJGQlN0YXRlOiBhbnlcclxuICBjb25zdHJ1Y3RvciAoY29tbTogSUNvbW11bmljYXRvciwgcGFyZW50OiBEZXNrdG9wLCBybGVEZWNvZGVyOiBJUkxFRGVjb2RlciwgdXBkYXRlUkZCU3RhdGU6IChzdGF0ZTogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLndzU29ja2V0ID0gY29tbVxyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcclxuICAgIHRoaXMucmxlRGVjb2RlciA9IHJsZURlY29kZXJcclxuICAgIHRoaXMudXBkYXRlUkZCU3RhdGUgPSB1cGRhdGVSRkJTdGF0ZVxyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1N0YXRlIChhY2M6IHN0cmluZyk6IG51bWJlciB7IC8vIGFjYyBpcyB0aGUgYWNjdW11bGF0ZWQgYnl0ZSBlbmNvZGVkIHN0cmluZyBzbyBmYXJcclxuICAgIC8vIGNvbnNvbGUubG9nKFR5cGVDb252ZXJ0ZXIucnN0cjJoZXgoYWNjKSlcclxuICAgIGxldCBjbWRTaXplID0gMFxyXG4gICAgaWYgKGFjYy5sZW5ndGggPj0gMTIpIHtcclxuICAgICAgY29uc3QgeCA9IFR5cGVDb252ZXJ0ZXIuUmVhZFNob3J0KGFjYywgMClcclxuICAgICAgY29uc3QgeSA9IFR5cGVDb252ZXJ0ZXIuUmVhZFNob3J0KGFjYywgMilcclxuICAgICAgY29uc3Qgd2lkdGggPSBUeXBlQ29udmVydGVyLlJlYWRTaG9ydChhY2MsIDQpXHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IFR5cGVDb252ZXJ0ZXIuUmVhZFNob3J0KGFjYywgNilcclxuICAgICAgY29uc3QgcyA9IHdpZHRoICogaGVpZ2h0XHJcbiAgICAgIGNvbnN0IGVuY29kaW5nID0gVHlwZUNvbnZlcnRlci5SZWFkSW50KGFjYywgOClcclxuICAgICAgLy8gY29uc29sZS5sb2coeCwgeSwgd2lkdGgsIGhlaWdodCwgcywgZW5jb2RpbmcpXHJcbiAgICAgIGlmIChlbmNvZGluZyA8IDE3KSB7XHJcbiAgICAgICAgaWYgKHdpZHRoIDwgMSB8fCB3aWR0aCA+IDY0IHx8IGhlaWdodCA8IDEgfHwgaGVpZ2h0ID4gNjQpIHtcclxuICAgICAgICAgIHRoaXMucGFyZW50LmxvZ2dlci5lcnJvcihgSW52YWxpZCB0aWxlIHNpemUgKCR7d2lkdGh9LCR7aGVpZ2h0fSksIGRpc2Nvbm5lY3RpbmcuYClcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0aWxlIHNpemUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBzcGFyZSBiaXRtYXAgdG8gdGhlIHJpZ3RoIHNpemUgaWYgaXQncyBub3QgYWxyZWFkeS4gVGhpcyBhbGxvd3MgdXMgdG8gcmVjeWNsZSB0aGUgc3BhcmUgbW9zdCBpZiBub3QgYWxsIHRoZSB0aW1lLlxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5zcGFyZXcgIT09IHdpZHRoIHx8IHRoaXMucGFyZW50LnNwYXJlaCAhPT0gaGVpZ2h0KSB7XHJcbiAgICAgICAgICB0aGlzLnBhcmVudC5zcGFyZXcgPSB0aGlzLnBhcmVudC5zcGFyZXcyID0gd2lkdGhcclxuICAgICAgICAgIHRoaXMucGFyZW50LnNwYXJlaCA9IHRoaXMucGFyZW50LnNwYXJlaDIgPSBoZWlnaHRcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5wYXJlbnQucm90YXRpb24gPT09IDEgfHwgdGhpcy5wYXJlbnQucm90YXRpb24gPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3BhcmV3MiA9IGhlaWdodFxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5zcGFyZWgyID0gd2lkdGhcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHhzcGFjZWNhY2hlbmFtZSA9IGAke3RoaXMucGFyZW50LnNwYXJldzJ9eCR7dGhpcy5wYXJlbnQuc3BhcmVoMn1gXHJcbiAgICAgICAgICB0aGlzLnBhcmVudC5zcGFyZSA9IHRoaXMucGFyZW50LnNwYXJlY2FjaGVbeHNwYWNlY2FjaGVuYW1lXVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wYXJlbnQuc3BhcmUpXHJcbiAgICAgICAgICBpZiAoIWlzVHJ1dGh5KHRoaXMucGFyZW50LnNwYXJlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5zcGFyZWNhY2hlW3hzcGFjZWNhY2hlbmFtZV0gPSB0aGlzLnBhcmVudC5zcGFyZSA9IHRoaXMucGFyZW50LmNhbnZhc0N0eC5jcmVhdGVJbWFnZURhdGEodGhpcy5wYXJlbnQuc3BhcmV3MiwgdGhpcy5wYXJlbnQuc3BhcmVoMilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGFyZW50LnNwYXJlY2FjaGVbeHNwYWNlY2FjaGVuYW1lXSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gMHhGRkZGRkYyMSkge1xyXG4gICAgICAgIC8vIERlc2t0b3AgU2l6ZSAoMHhGRkZGRkYyMSwgLTIyMylcclxuICAgICAgICB0aGlzLnBhcmVudC5sb2dnZXIudmVyYm9zZSgnRGVza3RvcCBzaXplJylcclxuICAgICAgICB0aGlzLnBhcmVudC5jYW52YXNDdHguY2FudmFzLndpZHRoID0gdGhpcy5wYXJlbnQuU2NyZWVuV2lkdGggPSB0aGlzLnBhcmVudC5yd2lkdGggPSB0aGlzLnBhcmVudC53aWR0aCA9IHdpZHRoXHJcbiAgICAgICAgdGhpcy5wYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgPSB0aGlzLnBhcmVudC5TY3JlZW5IZWlnaHQgPSB0aGlzLnBhcmVudC5yaGVpZ2h0ID0gdGhpcy5wYXJlbnQuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy53c1NvY2tldC5zZW5kKFN0cmluZy5mcm9tQ2hhckNvZGUoMywgMCwgMCwgMCwgMCwgMCkgKyBUeXBlQ29udmVydGVyLlNob3J0VG9TdHIodGhpcy5wYXJlbnQud2lkdGgpICsgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyKHRoaXMucGFyZW50LmhlaWdodCkpIC8vIEZyYW1lYnVmZmVyVXBkYXRlUmVxdWVzdFxyXG4gICAgICAgIGNtZFNpemUgPSAxMlxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5vblNjcmVlblNpemVDaGFuZ2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5wYXJlbnQub25TY3JlZW5TaXplQ2hhbmdlKHRoaXMucGFyZW50LlNjcmVlbldpZHRoLCB0aGlzLnBhcmVudC5TY3JlZW5IZWlnaHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMucGFyZW50LkRlYnVnKFwiTmV3IGRlc2t0b3Agd2lkdGg6IFwiICsgdGhpcy5wYXJlbnQud2lkdGggKyBcIiwgaGVpZ2h0OiBcIiArIHRoaXMucGFyZW50LmhlaWdodCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZW5jb2RpbmcgPT09IDApIHtcclxuICAgICAgICAvLyBSQVcgZW5jb2RpbmdcclxuXHJcbiAgICAgICAgbGV0IHB0ciA9IDEyOyBjb25zdCBjcyA9IDEyICsgKHMgKiB0aGlzLnBhcmVudC5icHApXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1JBVyBlbmNvZGluZyAnLCBhY2MubGVuZ3RoLCBjcylcclxuICAgICAgICBpZiAoYWNjLmxlbmd0aCA8IGNzKSByZXR1cm4gMCAvLyBDaGVjayB3ZSBoYXZlIGFsbCB0aGUgZGF0YSBuZWVkZWQgYW5kIHdlIGNhbiBvbmx5IGRyYXcgNjR4NjQgdGlsZXMuXHJcbiAgICAgICAgY21kU2l6ZSA9IGNzXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VuY29kaW5nIGNtZFNpemUnLCBlbmNvZGluZywgdGhpcy5jbWRTaXplKVxyXG5cclxuICAgICAgICAvLyBDUklUSUNBTCBMT09QLCBvcHRpbWl6ZSB0aGlzIGFzIG11Y2ggYXMgcG9zc2libGVcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHM7IGkrKykge1xyXG4gICAgICAgICAgSW1hZ2VIZWxwZXIuc2V0UGl4ZWwodGhpcy5wYXJlbnQsIGFjYy5jaGFyQ29kZUF0KHB0cisrKSArICgodGhpcy5wYXJlbnQuYnBwID09PSAyKSA/IChhY2MuY2hhckNvZGVBdChwdHIrKykgPDwgOCkgOiAwKSwgaSlcclxuICAgICAgICB9XHJcbiAgICAgICAgSW1hZ2VIZWxwZXIucHV0SW1hZ2UodGhpcy5wYXJlbnQsIHgsIHkpXHJcbiAgICAgIH0gZWxzZSBpZiAoZW5jb2RpbmcgPT09IDE2KSB7XHJcbiAgICAgICAgLy8gWlJMRSBlbmNvZGluZ1xyXG4gICAgICAgIGlmIChhY2MubGVuZ3RoIDwgMTYpIHJldHVybiAwXHJcbiAgICAgICAgY29uc3QgZGF0YWxlbiA9IFR5cGVDb252ZXJ0ZXIuUmVhZEludChhY2MsIDEyKVxyXG4gICAgICAgIGlmIChhY2MubGVuZ3RoIDwgKDE2ICsgZGF0YWxlbikpIHJldHVybiAwXHJcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhcIlJFQ1QgWlJMRSAoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIsXCIgKyB3aWR0aCArIFwiLFwiICsgaGVpZ2h0ICsgXCIpIExFTiA9IFwiICsgZGF0YWxlbik7XHJcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhcIlJFQ1QgWlJMRSBMRU46IFwiICsgVHlwZUNvbnZlcnRlci5SZWFkU2hvcnRYKGFjYywgMTcpICsgXCIsIERBVEE6IFwiICsgVHlwZUNvbnZlcnRlci5yc3RyMmhleChhY2Muc3Vic3RyaW5nKDE2KSkpO1xyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIHRoZSBaTGliIGhlYWRlciBpZiB0aGlzIGlzIHRoZSBmaXJzdCBibG9ja1xyXG4gICAgICAgIGNvbnN0IHB0ciA9IDE2OyBjb25zdCBkZWx0YSA9IDU7IGNvbnN0IGR4ID0gMFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFR5cGVDb252ZXJ0ZXIucnN0cjJoZXgoYWNjKSlcclxuICAgICAgICAvLyAwMDAwMDAwMDAwNDAwMDQwMDAwMDAwMTAwMDAwMDAwQTc4OUM2MjY0MDAwMDAwMDBGRkZGMDA0MDAwMDAwMDQwMDA0MDAwMDAwMDEwMDAwMDAwMDg2MjY0MDAwMDAwMDBGRkZGXHJcbiAgICAgICAgaWYgKGRhdGFsZW4gPiA1ICYmIGFjYy5jaGFyQ29kZUF0KHB0cikgPT09IDAgJiYgVHlwZUNvbnZlcnRlci5SZWFkU2hvcnRYKGFjYywgcHRyICsgMSkgPT09IChkYXRhbGVuIC0gZGVsdGEpKSB7XHJcbiAgICAgICAgICAvLyBUaGlzIGlzIGFuIHVuY29tcHJlc3NlZCBaTGliIGRhdGEgYmxvY2tcclxuICAgICAgICAgIHRoaXMucmxlRGVjb2Rlci5EZWNvZGUoYWNjLCBwdHIgKyA1LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzLCBkYXRhbGVuKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBUaGlzIGlzIGNvbXByZXNzZWQgWkxpYiBkYXRhLCBkZWNvbXByZXNzIGFuZCBwcm9jZXNzIGl0LlxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FjY2xlbmd0aD0nLGFjYy5sZW5ndGgsJ3B0cj0nLHB0ciwnZGF0YWxlbj0nLGRhdGFsZW4sJ2R4PScsZHgpXHJcbiAgICAgICAgICBjb25zdCB6bGlic3RyaW5nID0gYWNjLnN1YnN0cmluZyhwdHIsIHB0ciArIGRhdGFsZW4gLSBkeClcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHpsaWJzdHJpbmcpXHJcbiAgICAgICAgICBjb25zdCBhcnIgPSB0aGlzLnBhcmVudC5pbmZsYXRlLmluZmxhdGUoemxpYnN0cmluZylcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1bnppcHBlZCBzdHJlYW0nLCBhcnIpXHJcbiAgICAgICAgICBpZiAoYXJyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ybGVEZWNvZGVyLkRlY29kZShhcnIsIDAsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHMsIGFyci5sZW5ndGgpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5sb2dnZXIuZXJyb3IoJ0ludmFsaWQgZGVmbGF0ZSBkYXRhLicpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBkZWZsYXRlIGRhdGEnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY21kU2l6ZSA9IDE2ICsgZGF0YWxlblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucGFyZW50LmxvZ2dlci5lcnJvcihgVW5rbm93biBFbmNvZGluZzogJHtlbmNvZGluZ30gLCBIRVg6ICR7VHlwZUNvbnZlcnRlci5yc3RyMmhleChhY2MpfWApXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIEVuY29kaW5nOiAke2VuY29kaW5nfWApXHJcbiAgICAgIH1cclxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXRlICcsIHRoaXMucGFyZW50LnN0YXRlLCAnYWNjICcsIGFjYy5sZW5ndGgpXHJcbiAgICAgIGlmICgtLXRoaXMucGFyZW50LnN0YXRlID09PSAxMDApIHtcclxuICAgICAgICB0aGlzLnBhcmVudC5sb2dnZXIuZGVidWcoJ0ZyYW1lIGNvbXBsZXRlZC4gVXBkYXRlIHN0YXRlIGFuZCByZXF1ZXN0IG5ldyBmcmFtZScpXHJcbiAgICAgICAgdGhpcy51cGRhdGVSRkJTdGF0ZSg0KVxyXG4gICAgICAgIGNvbnN0IHNlbmRSZWZyZXNoQ2FsbGJhY2sgPSAoKTogYW55ID0+IENvbW1zSGVscGVyLnNlbmRSZWZyZXNoKHRoaXMucGFyZW50LCB0aGlzLndzU29ja2V0KVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5mcmFtZVJhdGVEZWxheSA9PT0gMCkge1xyXG4gICAgICAgICAgQ29tbXNIZWxwZXIuc2VuZFJlZnJlc2godGhpcy5wYXJlbnQsIHRoaXMud3NTb2NrZXQpIC8vIEFzayBmb3IgbmV3IGZyYW1lXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoc2VuZFJlZnJlc2hDYWxsYmFjaywgdGhpcy5wYXJlbnQuZnJhbWVSYXRlRGVsYXkpIC8vIEhvbGQgeCBtaWxpc2Vjb25kcyBiZWZvcmUgYXNraW5nIGZvciBhIG5ldyBmcmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNtZFNpemVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEVuY29kaW5nIH1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgSUNvbW11bmljYXRvciwgSVN0YXRlUHJvY2Vzc29yLCBJU2VydmVyQ3V0VGV4dEhhbmRsZXIgfSBmcm9tICcuLi9JbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBUeXBlQ29udmVydGVyIH0gZnJvbSAnLi4vQ29udmVydGVyJ1xyXG5cclxuY2xhc3MgRnJhbWVCdWZmZXJCZWxsU2VydmVyQ3V0VGV4dCBpbXBsZW1lbnRzIElTdGF0ZVByb2Nlc3NvciB7XHJcbiAgd3NTb2NrZXQ6IElDb21tdW5pY2F0b3JcclxuICBuZXh0OiBJU3RhdGVQcm9jZXNzb3JcclxuICBjbWRTaXplOiBudW1iZXJcclxuICBzZXJ2ZXJDdXRUZXh0SGFuZGxlcjogSVNlcnZlckN1dFRleHRIYW5kbGVyXHJcbiAgdXBkYXRlUkZCU3RhdGU6IGFueVxyXG4gIGNvbnN0cnVjdG9yIChjb21tOiBJQ29tbXVuaWNhdG9yLCBzZXJ2ZXJDdXRUZXh0SGFuZGxlcjogSVNlcnZlckN1dFRleHRIYW5kbGVyLCB1cGRhdGVSRkJTdGF0ZTogKHN0YXRlOiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgIHRoaXMud3NTb2NrZXQgPSBjb21tXHJcbiAgICB0aGlzLnNlcnZlckN1dFRleHRIYW5kbGVyID0gc2VydmVyQ3V0VGV4dEhhbmRsZXJcclxuICAgIHRoaXMudXBkYXRlUkZCU3RhdGUgPSB1cGRhdGVSRkJTdGF0ZVxyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1N0YXRlIChhY2M6IHN0cmluZyk6IG51bWJlciB7IC8vIGFjYyBpcyB0aGUgYWNjdW11bGF0ZWQgYnl0ZSBlbmNvZGVkIHN0cmluZyBzbyBmYXJcclxuICAgIGxldCBjbWRzaXplID0gMFxyXG4gICAgbGV0IGxlbiA9IDBcclxuICAgIHN3aXRjaCAoYWNjLmNoYXJDb2RlQXQoMCkpIHtcclxuICAgICAgY2FzZSAwOiAvLyBGcmFtZWJ1ZmZlclVwZGF0ZVxyXG4gICAgICAgIGlmIChhY2MubGVuZ3RoIDwgNCkgcmV0dXJuIDBcclxuICAgICAgICB0aGlzLnVwZGF0ZVJGQlN0YXRlKDEwMCArIFR5cGVDb252ZXJ0ZXIuUmVhZFNob3J0KGFjYywgMikpIC8vIFJlYWQgdGhlIG51bWJlciBvZiB0aWxlcyB0aGF0IGFyZSBnb2luZyB0byBiZSBzZW50LCBhZGQgMTAwIGFuZCB1c2UgdGhhdCBhcyBvdXIgcHJvdG9jb2wgc3RhdGUuXHJcbiAgICAgICAgY21kc2l6ZSA9IDRcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIDI6IC8vIFRoaXMgaXMgdGhlIGJlbGwsIGRvIG5vdGhpbmcuXHJcbiAgICAgICAgY21kc2l6ZSA9IDFcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIDM6IC8vIFRoaXMgaXMgU2VydmVyQ3V0VGV4dFxyXG4gICAgICAgIGlmIChhY2MubGVuZ3RoIDwgOCkgcmV0dXJuIDBcclxuICAgICAgICBsZW4gPSBUeXBlQ29udmVydGVyLlJlYWRJbnQoYWNjLCA0KSArIDhcclxuICAgICAgICBpZiAoYWNjLmxlbmd0aCA8IGxlbikgcmV0dXJuIDBcclxuICAgICAgICBjbWRzaXplID0gdGhpcy5zZXJ2ZXJDdXRUZXh0SGFuZGxlci5oYW5kbGVTZXJ2ZXJDdXRUZXh0KGFjYylcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNtZHNpemVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEZyYW1lQnVmZmVyQmVsbFNlcnZlckN1dFRleHQgfVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBJQ29tbXVuaWNhdG9yLCBJU3RhdGVQcm9jZXNzb3IgfSBmcm9tICcuLi9JbnRlcmZhY2VzJ1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWwgaGFuZHNoYWtlIGFuZCBzZW5kIFJGQiBwcm90b2NvbCBzdXBwb3J0ZWQgb24gY2xpZW50XHJcbiAqL1xyXG5jbGFzcyBIYW5kc2hha2VTdGF0ZSBpbXBsZW1lbnRzIElTdGF0ZVByb2Nlc3NvciB7XHJcbiAgd3NTb2NrZXQ6IElDb21tdW5pY2F0b3JcclxuICBuZXh0OiBJU3RhdGVQcm9jZXNzb3JcclxuXHJcbiAgdXBkYXRlUkZCU3RhdGU6IGFueVxyXG4gIGNvbnN0cnVjdG9yIChjb21tOiBJQ29tbXVuaWNhdG9yLCB1cGRhdGVSRkJTdGF0ZTogKHN0YXRlOiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgIHRoaXMud3NTb2NrZXQgPSBjb21tXHJcbiAgICB0aGlzLnVwZGF0ZVJGQlN0YXRlID0gdXBkYXRlUkZCU3RhdGVcclxuICB9XHJcblxyXG4gIHByb2Nlc3NTdGF0ZSAoYWNjOiBzdHJpbmcpOiBudW1iZXIgeyAvLyBhY2MgaXMgdGhlIGFjY3VtdWxhdGVkIGJ5dGUgZW5jb2RlZCBzdHJpbmcgc28gZmFyXHJcbiAgICBsZXQgY21kU2l6ZSA9IDBcclxuICAgIGlmIChhY2MubGVuZ3RoID49IDEyKSB7XHJcbiAgICAgIC8vIEdldHRpbmcgaGFuZHNoYWtlICYgdmVyc2lvblxyXG4gICAgICBjbWRTaXplID0gMTJcclxuICAgICAgLy8gaWYgKG9iai5hY2Muc3Vic3RyaW5nKDAsIDQpICE9IFwiUkZCIFwiKSB7IHJldHVybiBvYmouU3RvcCgpOyB9XHJcbiAgICAgIC8vIHZhciB2ZXJzaW9uID0gcGFyc2VGbG9hdChvYmouYWNjLnN1YnN0cmluZyg0LCAxMSkpO1xyXG4gICAgICAvLyBvYmouRGVidWcoXCJLVmVyc2lvbjogXCIgKyB2ZXJzaW9uKTtcclxuICAgICAgdGhpcy51cGRhdGVSRkJTdGF0ZSgxKVxyXG4gICAgICB0aGlzLndzU29ja2V0LnNlbmQoJ1JGQiAwMDMuMDA4XFxuJylcclxuXHJcbiAgICAgIHJldHVybiBjbWRTaXplXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEhhbmRzaGFrZVN0YXRlIH1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgSUNvbW11bmljYXRvciwgSVN0YXRlUHJvY2Vzc29yIH0gZnJvbSAnLi4vSW50ZXJmYWNlcydcclxuXHJcbi8qKlxyXG4gKiBHZXQgc2VjdXJpdHkgb3B0aW9ucyBmcm9tIHJlbW90ZSBkZXZpY2UuIFNlbmQgYXV0aCB0eXBlLlxyXG4gKi9cclxuY2xhc3MgU2VjdXJpdHlPcHRpb25zIGltcGxlbWVudHMgSVN0YXRlUHJvY2Vzc29yIHtcclxuICB3c1NvY2tldDogSUNvbW11bmljYXRvclxyXG4gIG5leHQ6IElTdGF0ZVByb2Nlc3NvclxyXG4gIHVwZGF0ZVJGQlN0YXRlOiBhbnlcclxuICBjb25zdHJ1Y3RvciAoY29tbTogSUNvbW11bmljYXRvciwgdXBkYXRlUkZCU3RhdGU6IChzdGF0ZTogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLndzU29ja2V0ID0gY29tbVxyXG4gICAgdGhpcy51cGRhdGVSRkJTdGF0ZSA9IHVwZGF0ZVJGQlN0YXRlXHJcbiAgfVxyXG5cclxuICBwcm9jZXNzU3RhdGUgKGFjYzogc3RyaW5nKTogbnVtYmVyIHsgLy8gYWNjIGlzIHRoZSBhY2N1bXVsYXRlZCBieXRlIGVuY29kZWQgc3RyaW5nIHNvIGZhclxyXG4gICAgbGV0IGNtZFNpemUgPSAwXHJcbiAgICBpZiAoYWNjLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgIC8vIEdldHRpbmcgc2VjdXJpdHkgb3B0aW9uc1xyXG4gICAgICBjbWRTaXplID0gYWNjLmNoYXJDb2RlQXQoMCkgKyAxXHJcbiAgICAgIHRoaXMud3NTb2NrZXQuc2VuZChTdHJpbmcuZnJvbUNoYXJDb2RlKDEpKSAvLyBTZW5kIHRoZSBcIk5vbmVcIiBzZWN1cml0eSB0eXBlLiBTaW5jZSB3ZSBhbHJlYWR5IGF1dGhlbnRpY2F0ZWQgdXNpbmcgcmVkaXJlY3Rpb24gZGlnZXN0IGF1dGgsIHdlIGRvbid0IG5lZWQgdG8gZG8gdGhpcyBhZ2Fpbi5cclxuICAgICAgdGhpcy51cGRhdGVSRkJTdGF0ZSgyKVxyXG4gICAgICByZXR1cm4gY21kU2l6ZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNlY3VyaXR5T3B0aW9ucyB9XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCB7IElDb21tdW5pY2F0b3IsIElTdGF0ZVByb2Nlc3NvciB9IGZyb20gJy4uL0ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFR5cGVDb252ZXJ0ZXIgfSBmcm9tICcuLi9Db252ZXJ0ZXInXHJcblxyXG4vKipcclxuICogR2V0IGF1dGggc2VjdXJpdHkgcmVzcG9uc2UgYW5kIHByb2NlZWQgd2l0aCBzaGFyZSBkZXNrdG9wIGZsYWdcclxuICovXHJcbmNsYXNzIFNlY3VyaXR5UmVzcG9uc2UgaW1wbGVtZW50cyBJU3RhdGVQcm9jZXNzb3Ige1xyXG4gIHdzU29ja2V0OiBJQ29tbXVuaWNhdG9yXHJcbiAgbmV4dDogSVN0YXRlUHJvY2Vzc29yXHJcbiAgdXBkYXRlUkZCU3RhdGU6IGFueVxyXG4gIGNvbnN0cnVjdG9yIChjb21tOiBJQ29tbXVuaWNhdG9yLCB1cGRhdGVSRkJTdGF0ZTogKHN0YXRlOiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgIHRoaXMud3NTb2NrZXQgPSBjb21tXHJcbiAgICB0aGlzLnVwZGF0ZVJGQlN0YXRlID0gdXBkYXRlUkZCU3RhdGVcclxuICB9XHJcblxyXG4gIHByb2Nlc3NTdGF0ZSAoYWNjOiBzdHJpbmcpOiBudW1iZXIgeyAvLyBhY2MgaXMgdGhlIGFjY3VtdWxhdGVkIGJ5dGUgZW5jb2RlZCBzdHJpbmcgc28gZmFyXHJcbiAgICBsZXQgY21kU2l6ZSA9IDBcclxuICAgIGlmIChhY2MubGVuZ3RoID49IDQpIHtcclxuICAgICAgLy8gR2V0dGluZyBzZWN1cml0eSByZXNwb25zZVxyXG4gICAgICBjbWRTaXplID0gNFxyXG4gICAgICBpZiAoVHlwZUNvbnZlcnRlci5SZWFkSW50KGFjYywgMCkgIT09IDApIHtcclxuICAgICAgICAvLyBjb25zdCByZWFzb25MZW5ndGggPSBUeXBlQ29udmVydGVyLlJlYWRJbnQoYWNjLCA0KVxyXG4gICAgICAgIC8vIGNvbnN0IHJlYXNvblN0cmluZyA9IGFjYy5zdWJzdHJpbmcoOCwgOCArIHJlYXNvbkxlbmd0aClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWFzb25TdHJpbmcpXHJcbiAgICAgICAgLy8gTmVlZCB0byBiZSBmaXhlZC4gQ2xvc2UgdGhlIGNvbm5lY3Rpb24gd2hlbiB0aGlzIGhhcHBlbnNcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yLiBTdG9wcGluZy4gU2VjdXJpdHkgcmVzcG9uc2Ugbm90IE5vbmUuJylcclxuICAgICAgfVxyXG4gICAgICB0aGlzLndzU29ja2V0LnNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgxKSkgLy8gU2VuZCBzaGFyZSBkZXNrdG9wIGZsYWdcclxuICAgICAgdGhpcy51cGRhdGVSRkJTdGF0ZSgzKVxyXG4gICAgICByZXR1cm4gY21kU2l6ZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNlY3VyaXR5UmVzcG9uc2UgfVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBJS3ZtRGF0YUNvbW11bmljYXRvciwgSVNlcnZlckN1dFRleHRIYW5kbGVyIH0gZnJvbSAnLi4vSW50ZXJmYWNlcydcclxuaW1wb3J0IHsgRGVza3RvcCB9IGZyb20gJy4uL0Rlc2t0b3AnXHJcbmltcG9ydCB7IFR5cGVDb252ZXJ0ZXIgfSBmcm9tICcuLi9Db252ZXJ0ZXInXHJcbmltcG9ydCB7IGlzVHJ1dGh5IH0gZnJvbSAnLi4vVXRpbGl0aWVzL1V0aWxpdHlNZXRob2RzJ1xyXG5jbGFzcyBTZXJ2ZXJDdXRUZXh0SGFuZGxlciBpbXBsZW1lbnRzIElTZXJ2ZXJDdXRUZXh0SGFuZGxlciB7XHJcbiAgd3NTb2NrZXQ6IElLdm1EYXRhQ29tbXVuaWNhdG9yXHJcbiAgcGFyZW50OiBEZXNrdG9wXHJcbiAgY29uc3RydWN0b3IgKGNvbW06IElLdm1EYXRhQ29tbXVuaWNhdG9yLCBwYXJlbnQ6IERlc2t0b3ApIHtcclxuICAgIHRoaXMud3NTb2NrZXQgPSBjb21tXHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2VydmVyQ3V0VGV4dCAoYWNjOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYgKGFjYy5sZW5ndGggPCA4KSByZXR1cm4gMFxyXG4gICAgY29uc3QgbGVuID0gVHlwZUNvbnZlcnRlci5SZWFkSW50KGFjYywgNCkgKyA4XHJcbiAgICBpZiAoYWNjLmxlbmd0aCA8IGxlbikgcmV0dXJuIDBcclxuXHJcbiAgICBpZiAodGhpcy5wYXJlbnQub25Ldm1EYXRhICE9IG51bGwpIHtcclxuICAgICAgY29uc3QgZCA9IGFjYy5zdWJzdHJpbmcoOCwgbGVuKVxyXG4gICAgICBpZiAoKGQubGVuZ3RoID49IDE2KSAmJiAoZC5zdWJzdHJpbmcoMCwgMTUpID09PSAnXFwwS3ZtRGF0YUNoYW5uZWwnKSkge1xyXG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQua3ZtRGF0YVN1cHBvcnRlZCkgeyB0aGlzLnBhcmVudC5rdm1EYXRhU3VwcG9ydGVkID0gdHJ1ZTsgY29uc29sZS5sb2coJ0tWTSBEYXRhIENoYW5uZWwgU3VwcG9ydGVkLicpIH1cclxuICAgICAgICBpZiAoKCh0aGlzLnBhcmVudC5vbkt2bURhdGFBY2sgPT09IC0xKSAmJiAoZC5sZW5ndGggPT09IDE2KSkgfHwgKGQuY2hhckNvZGVBdCgxNSkgIT09IDApKSB7IHRoaXMucGFyZW50Lm9uS3ZtRGF0YUFjayA9IHRydWUgfVxyXG4gICAgICAgIGlmIChpc1RydXRoeSh0aGlzLnBhcmVudC51cmx2YXJzKSAmJiBpc1RydXRoeSh0aGlzLnBhcmVudC51cmx2YXJzLmt2bWRhdGF0cmFjZSkpIHsgY29uc29sZS5sb2coYEtWTS1SZWN2KCgke2QubGVuZ3RoIC0gMTZ9KSk6ICAke2Quc3Vic3RyaW5nKDE2KX1gKSB9XHJcbiAgICAgICAgaWYgKGQubGVuZ3RoID4gMTYpIHsgdGhpcy5wYXJlbnQub25Ldm1EYXRhKGQuc3Vic3RyaW5nKDE2KSkgfSAvLyBFdmVudCB0aGUgZGF0YSBhbmQgYWNrXHJcbiAgICAgICAgaWYgKCh0aGlzLnBhcmVudC5vbkt2bURhdGFBY2sgPT09IHRydWUpICYmICh0aGlzLnBhcmVudC5vbkt2bURhdGFQZW5kaW5nLmxlbmd0aCA+IDApKSB7IHRoaXMud3NTb2NrZXQub25TZW5kS3ZtRGF0YSh0aGlzLnBhcmVudC5vbkt2bURhdGFQZW5kaW5nLnNoaWZ0KCkpIH0gLy8gU2VuZCBwZW5kaW5nIGRhdGFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU2VydmVyQ3V0VGV4dEhhbmRsZXIgfVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBJQ29tbXVuaWNhdG9yLCBJU3RhdGVQcm9jZXNzb3IgfSBmcm9tICcuLi9JbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBUeXBlQ29udmVydGVyIH0gZnJvbSAnLi4vQ29udmVydGVyJ1xyXG5pbXBvcnQgeyBEZXNrdG9wIH0gZnJvbSAnLi4vRGVza3RvcCdcclxuaW1wb3J0IHsgQ29tbXNIZWxwZXIgfSBmcm9tICcuLi9VdGlsaXRpZXMvQ29tbXNIZWxwZXInXHJcblxyXG4vKipcclxuICogU2V0IHN1cHBvcnRlZCBlbmNvZGluZ3MgZm9yIFJGQlxyXG4gKi9cclxuY2xhc3MgU2VydmVySW5pdCBpbXBsZW1lbnRzIElTdGF0ZVByb2Nlc3NvciB7XHJcbiAgd3NTb2NrZXQ6IElDb21tdW5pY2F0b3JcclxuICBuZXh0OiBJU3RhdGVQcm9jZXNzb3JcclxuXHJcbiAgcGFyZW50OiBEZXNrdG9wXHJcbiAgdXBkYXRlUkZCU3RhdGU6IGFueVxyXG4gIGNvbnN0cnVjdG9yIChjb21tOiBJQ29tbXVuaWNhdG9yLCBwYXJlbnQ6IERlc2t0b3AsIHVwZGF0ZVJGQlN0YXRlOiAoc3RhdGU6IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgdGhpcy53c1NvY2tldCA9IGNvbW1cclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50XHJcbiAgICB0aGlzLnVwZGF0ZVJGQlN0YXRlID0gdXBkYXRlUkZCU3RhdGVcclxuICB9XHJcblxyXG4gIHByb2Nlc3NTdGF0ZSAoYWNjOiBzdHJpbmcpOiBudW1iZXIgeyAvLyBhY2MgaXMgdGhlIGFjY3VtdWxhdGVkIGJ5dGUgZW5jb2RlZCBzdHJpbmcgc28gZmFyXHJcbiAgICBsZXQgY21kU2l6ZTogbnVtYmVyID0gMFxyXG4gICAgaWYgKGFjYy5sZW5ndGggPj0gMjQpIHtcclxuICAgICAgLy8gR2V0dGluZyBzZXJ2ZXIgaW5pdFxyXG5cclxuICAgICAgdGhpcy5wYXJlbnQucm90YXRpb24gPSAwIC8vIFdlIGRvbid0IGN1cnJlbnRseSBzdXBwb3J0IHNjcmVlbiBpbml0IHdoaWxlIHJvdGF0ZWQuXHJcbiAgICAgIGNvbnN0IG5hbWVsZW4gPSBUeXBlQ29udmVydGVyLlJlYWRJbnQoYWNjLCAyMClcclxuICAgICAgaWYgKGFjYy5sZW5ndGggPCAyNCArIG5hbWVsZW4pIHJldHVybiAwXHJcbiAgICAgIGNtZFNpemUgPSAyNCArIG5hbWVsZW5cclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmVudC51cGRhdGVTY3JlZW5EaW1lbnNpb25zICE9IG51bGwpIHsgdGhpcy5wYXJlbnQudXBkYXRlU2NyZWVuRGltZW5zaW9ucyhUeXBlQ29udmVydGVyLlJlYWRTaG9ydChhY2MsIDApLCBUeXBlQ29udmVydGVyLlJlYWRTaG9ydChhY2MsIDIpKSB9XHJcbiAgICAgIHRoaXMucGFyZW50LmNhbnZhc0N0eC5jYW52YXMud2lkdGggPSB0aGlzLnBhcmVudC5TY3JlZW5XaWR0aCA9IHRoaXMucGFyZW50LnJ3aWR0aCA9IHRoaXMucGFyZW50LndpZHRoID0gVHlwZUNvbnZlcnRlci5SZWFkU2hvcnQoYWNjLCAwKVxyXG4gICAgICB0aGlzLnBhcmVudC5jYW52YXNDdHguY2FudmFzLmhlaWdodCA9IHRoaXMucGFyZW50LlNjcmVlbkhlaWdodCA9IHRoaXMucGFyZW50LnJoZWlnaHQgPSB0aGlzLnBhcmVudC5oZWlnaHQgPSBUeXBlQ29udmVydGVyLlJlYWRTaG9ydChhY2MsIDIpXHJcbiAgICAgIC8vIG9iai5jYW52YXMuY2FudmFzLndpZHRoID0gb2JqLnJ3aWR0aCA9IG9iai53aWR0aCA9IG9iai5TY3JlZW5XaWR0aCA9IFJlYWRTaG9ydChvYmouYWNjLCAwKTtcclxuICAgICAgLy8gb2JqLmNhbnZhcy5jYW52YXMuaGVpZ2h0ID0gb2JqLnJoZWlnaHQgPSBvYmouaGVpZ2h0ID0gb2JqLlNjcmVlbkhlaWdodCA9IFJlYWRTaG9ydChvYmouYWNjLCAyKTtcclxuXHJcbiAgICAgIC8vIFNldEVuY29kaW5ncywgd2l0aCBBTVQgd2UgY2FuJ3Qgb21pdCBSQVcsIG11c3QgYmUgc3BlY2lmaWVkLlxyXG4gICAgICAvLyBJbnRlbCBBTVQgc3VwcG9ydHMgZW5jb2RpbmdzOiBSQVcgKDApLCBaUkxFICgxNiksIERlc2t0b3AgU2l6ZSAoMHhGRkZGRkYyMSwgLTIyMyksIEtWTSBEYXRhIENoYW5uZWwgKDEwOTIpXHJcblxyXG4gICAgICBsZXQgc3VwcG9ydGVkRW5jb2RpbmdzOiBzdHJpbmcgPSAnJ1xyXG4gICAgICBpZiAodGhpcy5wYXJlbnQudXNlWlJMRSkgc3VwcG9ydGVkRW5jb2RpbmdzICs9IFR5cGVDb252ZXJ0ZXIuSW50VG9TdHIoMTYpXHJcbiAgICAgIHN1cHBvcnRlZEVuY29kaW5ncyArPSBUeXBlQ29udmVydGVyLkludFRvU3RyKDApXHJcblxyXG4gICAgICBzdXBwb3J0ZWRFbmNvZGluZ3MgKz0gVHlwZUNvbnZlcnRlci5JbnRUb1N0cigxMDkyKVxyXG4gICAgICB0aGlzLnBhcmVudC5sb2dnZXIudmVyYm9zZSgnU2VuZCBzdXBwb3J0ZWQgZW5jb2RpbmdzJylcclxuICAgICAgdGhpcy53c1NvY2tldC5zZW5kKFN0cmluZy5mcm9tQ2hhckNvZGUoMiwgMCkgKyBUeXBlQ29udmVydGVyLlNob3J0VG9TdHIoKHN1cHBvcnRlZEVuY29kaW5ncy5sZW5ndGggLyA0KSArIDEpICsgc3VwcG9ydGVkRW5jb2RpbmdzICsgVHlwZUNvbnZlcnRlci5JbnRUb1N0cigtMjIzKSkgLy8gU3VwcG9ydGVkIEVuY29kaW5ncyArIERlc2t0b3AgU2l6ZVxyXG5cclxuICAgICAgLy8gU2V0IHRoZSBwaXhlbCBlbmNvZGluZyB0byBzb21ldGhpbmcgbXVjaCBzbWFsbGVyXHJcbiAgICAgIC8vIG9iai5TZW5kKFN0cmluZy5mcm9tQ2hhckNvZGUoMCwgMCwgMCwgMCwgMTYsIDE2LCAwLCAxKSArIFNob3J0VG9TdHIoMzEpICsgU2hvcnRUb1N0cig2MykgKyBTaG9ydFRvU3RyKDMxKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoMTEsIDUsIDAsIDAsIDAsIDApKTsgICAgICAgICAgICAgICAgICAgICAvLyBTZXR1cCAxNiBiaXQgY29sb3IgUkdCNTY1IChUaGlzIGlzIHRoZSBkZWZhdWx0LCBzbyB3ZSBkb24ndCBuZWVkIHRvIHNldCBpdClcclxuICAgICAgaWYgKHRoaXMucGFyZW50LmJwcCA9PT0gMSkgeyB0aGlzLndzU29ja2V0LnNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgwLCAwLCAwLCAwLCA4LCA4LCAwLCAxKSArIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0cig3KSArIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0cig3KSArIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0cigzKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoNSwgMiwgMCwgMCwgMCwgMCkpIH0gLy8gU2V0dXAgOCBiaXQgY29sb3IgUkdCMzMyXHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVJGQlN0YXRlKDQpXHJcblxyXG4gICAgICB0aGlzLnBhcmVudC5vblN0YXRlQ2hhbmdlKDMpXHJcbiAgICAgIHRoaXMucGFyZW50LmxvZ2dlci5pbmZvKCdTdGFydCBuZXcgZnJhbWUuJylcclxuICAgICAgQ29tbXNIZWxwZXIuc2VuZFJlZnJlc2godGhpcy5wYXJlbnQsIHRoaXMud3NTb2NrZXQpXHJcbiAgICAgIC8vIG9iai50aW1lciA9IHNldEludGVydmFsKG9iai54eE9uVGltZXIsIDUwKTtcclxuICAgICAgdGhpcy5wYXJlbnQub2xkTW91c2VYID0gLTEgLy8gT2xkIG1vdXNlIHggcG9zaXRpb25cclxuXHJcbiAgICAgIC8vIGlmICh0aGlzLnBhcmVudC5vblNjcmVlblNpemVDaGFuZ2UgIT0gbnVsbClcclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIHRoaXMucGFyZW50Lm9uU2NyZWVuU2l6ZUNoYW5nZShvYmosIG9iai5TY3JlZW5XaWR0aCwgb2JqLlNjcmVlbkhlaWdodCk7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIHJldHVybiBjbWRTaXplXHJcbiAgICB9XHJcbiAgICByZXR1cm4gMFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU2VydmVySW5pdCB9XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCB7IEVuY29kaW5nIH0gZnJvbSAnLi9FbmNvZGluZydcclxuaW1wb3J0IHsgSGFuZHNoYWtlU3RhdGUgfSBmcm9tICcuL0hhbmRzaGFrZVN0YXRlJ1xyXG5pbXBvcnQgeyBGcmFtZUJ1ZmZlckJlbGxTZXJ2ZXJDdXRUZXh0IH0gZnJvbSAnLi9GcmFtZUJ1ZmZlckJlbGxTZXJ2ZXJDdXRUZXh0J1xyXG5pbXBvcnQgeyBTZWN1cml0eU9wdGlvbnMgfSBmcm9tICcuL1NlY3VyaXR5T3B0aW9ucydcclxuaW1wb3J0IHsgU2VjdXJpdHlSZXNwb25zZSB9IGZyb20gJy4vU2VjdXJpdHlSZXNwb25zZSdcclxuaW1wb3J0IHsgU2VydmVySW5pdCB9IGZyb20gJy4vU2VydmVySW5pdCdcclxuXHJcbmV4cG9ydCB7IEVuY29kaW5nLCBIYW5kc2hha2VTdGF0ZSwgRnJhbWVCdWZmZXJCZWxsU2VydmVyQ3V0VGV4dCwgU2VjdXJpdHlPcHRpb25zLCBTZWN1cml0eVJlc3BvbnNlLCBTZXJ2ZXJJbml0IH1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgSVN0YXRlUHJvY2Vzc29yLCBJQ29tbXVuaWNhdG9yLCBJS3ZtRGF0YUNvbW11bmljYXRvciB9IGZyb20gJy4vSW50ZXJmYWNlcydcclxuaW1wb3J0IHsgSGFuZHNoYWtlU3RhdGUsIFNlY3VyaXR5T3B0aW9ucywgU2VjdXJpdHlSZXNwb25zZSwgU2VydmVySW5pdCwgRnJhbWVCdWZmZXJCZWxsU2VydmVyQ3V0VGV4dCwgRW5jb2RpbmcgfSBmcm9tICcuL1JGQlN0YXRlUHJvY2Vzc29ycydcclxuaW1wb3J0IHsgRGVza3RvcCB9IGZyb20gJy4vRGVza3RvcCdcclxuaW1wb3J0IHsgU2VydmVyQ3V0VGV4dEhhbmRsZXIgfSBmcm9tICcuL1JGQlN0YXRlUHJvY2Vzc29ycy9TZXJ2ZXJDdXRUZXh0SGFuZGxlcidcclxuaW1wb3J0IHsgUkxFRGVjb2RlciB9IGZyb20gJy4vSW1hZ2VEYXRhL1JMRURlY29kZXInXHJcblxyXG4vKipcclxuICogU3RhdGVQcm9jZXNzb3JGYWN0b3J5IGlzIHRoZSBmYWN0b3J5IGNsYXNzIHRvIHJldHVybiB0aGUgcHJvY2Vzc29yIGZvciBjdXJyZW50IHN0YXRlLlxyXG4gKi9cclxuY2xhc3MgU3RhdGVQcm9jZXNzb3JGYWN0b3J5IHtcclxuICBzdGF0ZVByb2Nlc3NvcnM6IGFueVxyXG4gIGNvbnN0cnVjdG9yIChjb21tOiBJQ29tbXVuaWNhdG9yLCBwYXJlbnQ6IERlc2t0b3AsIHVwZGF0ZVJGQlN0YXRlOiAoc3RhdGU6IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5zdGF0ZVByb2Nlc3NvcnMgPSB7fVxyXG4gICAgdGhpcy5zdGF0ZVByb2Nlc3NvcnNbMF0gPSBuZXcgSGFuZHNoYWtlU3RhdGUoY29tbSwgdXBkYXRlUkZCU3RhdGUpIC8vIEdvdCBzZXJ2ZXIgdmVyc2lvbi4gU2VuZCBjbGllbnQgdmVyc2lvblxyXG4gICAgdGhpcy5zdGF0ZVByb2Nlc3NvcnNbMV0gPSBuZXcgU2VjdXJpdHlPcHRpb25zKGNvbW0sIHVwZGF0ZVJGQlN0YXRlKSAvLyBHb3Qgc2VjdXJpdHkgb3B0aW9ucywgc2VuZCBOb25lIHNlY3VyaXR5IHR5cGVcclxuICAgIHRoaXMuc3RhdGVQcm9jZXNzb3JzWzJdID0gbmV3IFNlY3VyaXR5UmVzcG9uc2UoY29tbSwgdXBkYXRlUkZCU3RhdGUpIC8vIEdvdCBzZWN1cml0eSByZXNwb25zZS4gU2VuZCBzaGFyZSBkZXNrdG9wIGZsYWdcclxuICAgIHRoaXMuc3RhdGVQcm9jZXNzb3JzWzNdID0gbmV3IFNlcnZlckluaXQoY29tbSwgcGFyZW50LCB1cGRhdGVSRkJTdGF0ZSkgLy8gR290IHNlcnZlciBpbml0LiBTZW5kIGVuY29kaW5nIGxpc3RcclxuICAgIGNvbnN0IHNlcnZlckN1dFRleHRIYW5kbGVyID0gbmV3IFNlcnZlckN1dFRleHRIYW5kbGVyKGNvbW0gYXMgSUt2bURhdGFDb21tdW5pY2F0b3IsIHBhcmVudClcclxuICAgIHRoaXMuc3RhdGVQcm9jZXNzb3JzWzRdID0gbmV3IEZyYW1lQnVmZmVyQmVsbFNlcnZlckN1dFRleHQoY29tbSwgc2VydmVyQ3V0VGV4dEhhbmRsZXIsIHVwZGF0ZVJGQlN0YXRlKSAvLyBoYW5kbGVzIDMgZGlmZmVyZW50IHN0YXRlcywgRnJhbWVidWZmZXJ1cGRhdGUsIGJlbGwgYW5kIFNlcnZlckN1dFRleHRcclxuICAgIHRoaXMuc3RhdGVQcm9jZXNzb3JzWycxMDBwbHVzJ10gPSBuZXcgRW5jb2RpbmcoY29tbSwgcGFyZW50LCBuZXcgUkxFRGVjb2RlcihwYXJlbnQpLCB1cGRhdGVSRkJTdGF0ZSkgLy8gaGFuZGxlcyB0aWxlIGNvdW50IGFuZCBlbmNvZGluZ1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZ2V0UHJvY2Vzc29yIHJldHVybnMgdGhlIFN0YXRlUHJvY2Vzc29yIHRvIGhhbmRsZSB0aGUgbmV4dCBSRkIgc3RhdGVcclxuICAgKiBAcGFyYW0gc3RhdGUgUkZCIHN0YXRlIHRvIHByb2Nlc3MgbmV4dFxyXG4gICAqL1xyXG4gIGdldFByb2Nlc3NvciAoc3RhdGU6IG51bWJlcik6IElTdGF0ZVByb2Nlc3NvciB7XHJcbiAgICBpZiAoc3RhdGUgPD0gMTAwKSB7IC8vIHJlZ3VsYXIgc3RhdGVzIGJlZm9yZSBlbmNvZGluZyBpbmZvcm1hdGlvblxyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZVByb2Nlc3NvcnNbc3RhdGVdXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZVByb2Nlc3NvcnNbJzEwMHBsdXMnXSAvLyB3aGVuIGl0IHJlYWNoZXMgdGhlIGVuY29kaW5nIHN0YWdlIDEwMCBpcyBhZGRlZCB0byBudW1iZXIgb2YgdGlsZXMgaW4gdGhlIGltYWdlIGFuZCBwcm9jZXNzZWQgYnkgdGhlIEVuY29kaW5nIHByb2Nlc3NvclxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU3RhdGVQcm9jZXNzb3JGYWN0b3J5IH1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBJRGF0YVByb2Nlc3NvciB9IGZyb20gJy4vSW50ZXJmYWNlcydcclxuXHJcbi8qKiBjbGFzcyB0byBwcm9jZXNzIHNlcmlhbCBvdmVyIGxhbiBkYXRhICoqL1xyXG5leHBvcnQgY2xhc3MgVGVybWluYWxEYXRhUHJvY2Vzc29yIGltcGxlbWVudHMgSURhdGFQcm9jZXNzb3Ige1xyXG4gIHRlcm1pbmFsOiBhbnlcclxuICBjb25zdHJ1Y3RvciAodGVybWluYWwpIHtcclxuICAgIHRoaXMudGVybWluYWwgPSB0ZXJtaW5hbFxyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0RhdGFUb1h0ZXJtOiAoc3RyOiBhbnkpID0+IHZvaWRcclxuICBjbGVhclRlcm1pbmFsOiAoKSA9PiB2b2lkXHJcblxyXG4gIC8qKiBwcm9jZXNzaW5nIGRhdGEgcmVjZWl2ZWQgZnJvbSBzZXJpYWwgcG9ydCoqL1xyXG4gIHByb2Nlc3NEYXRhID0gKHN0cjogc3RyaW5nKTogYW55ID0+IHtcclxuICAgIGlmICh0aGlzLnRlcm1pbmFsLmNhcHR1cmUgIT0gbnVsbCkgdGhpcy50ZXJtaW5hbC5jYXB0dXJlID0gU3RyaW5nKHRoaXMudGVybWluYWwuY2FwdHVyZSkgKyBzdHJcclxuICAgIGxldCBjOiBzdHJpbmcgPSAnJ1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2ggPSBzdHIuY2hhckNvZGVBdChpKVxyXG4gICAgICBpZiAoc3RyW2ldID09PSAnSicpIHtcclxuICAgICAgICB0aGlzLmNsZWFyVGVybWluYWwoKVxyXG4gICAgICB9IGVsc2UgaWYgKChjaCAmIDB4ODApICE9PSAwKSB7XHJcbiAgICAgICAgYyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMudGVybWluYWwuQXNjaWlUb1VuaWNvZGVbY2ggJiAweDdmXSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjICs9IGAke3N0cltpXX1gXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMucHJvY2Vzc0RhdGFUb1h0ZXJtKGMpXHJcbiAgfVxyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuaW1wb3J0IEFNVEtleUNvZGVUYWJsZSBmcm9tICcuL0FNVEtleUNvZGVUYWJsZSdcclxuaW1wb3J0IHsgaXNUcnV0aHkgfSBmcm9tICcuL1V0aWxpdHlNZXRob2RzJ1xyXG4vKipcclxuICogUHJvdmlkZXMgY29kZSBsb29rdXAgZnVuY3Rpb25zIGZvciBkaWZmZXJlbnQgc3BlY2lhbCBrZXlzIHRvIHNlbmQgb3ZlciB0aGUgc29ja2V0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFNVEtleUNvZGVDb252ZXJ0ZXIgPSB7XHJcbiAgY29udmVydEFNVEtleUNvZGUgKGU6IGFueSk6IGFueSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Jlc3RyaWN0LXBsdXMtb3BlcmFuZHNcclxuICAgIGlmIChpc1RydXRoeShlLmNvZGUuc3RhcnRzV2l0aCgnS2V5JykpICYmIGUuY29kZS5sZW5ndGggPT09IDQpIHsgcmV0dXJuIGUuY29kZS5jaGFyQ29kZUF0KDMpICsgKChlLnNoaWZ0S2V5ID09PSBmYWxzZSkgPyAzMiA6IDApIH1cclxuICAgIGlmIChpc1RydXRoeShlLmNvZGUuc3RhcnRzV2l0aCgnRGlnaXQnKSkgJiYgZS5jb2RlLmxlbmd0aCA9PT0gNikgeyByZXR1cm4gZS5jb2RlLmNoYXJDb2RlQXQoNSkgfVxyXG4gICAgaWYgKGlzVHJ1dGh5KGUuY29kZS5zdGFydHNXaXRoKCdOdW1wYWQnKSkgJiYgZS5jb2RlLmxlbmd0aCA9PT0gNykgeyByZXR1cm4gZS5jb2RlLmNoYXJDb2RlQXQoNikgfVxyXG4gICAgcmV0dXJuIEFNVEtleUNvZGVUYWJsZVtlLmNvZGUgYXMgc3RyaW5nXVxyXG4gIH1cclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKipcclxuICogS2V5IGNvZGUgdGFibGUgdXNlZCBmb3Igc3BlY2lhbCBrZXkgaGFuZGxpbmdcclxuICovXHJcbmNvbnN0IEFNVEtleUNvZGVUYWJsZSA9IHtcclxuICBQYXVzZTogMTksXHJcbiAgQ2Fwc0xvY2s6IDIwLFxyXG4gIFNwYWNlOiAzMixcclxuICBRdW90ZTogMzksXHJcbiAgTWludXM6IDQ1LFxyXG4gIE51bXBhZE11bHRpcGx5OiA0MixcclxuICBOdW1wYWRBZGQ6IDQzLFxyXG4gIFByaW50U2NyZWVuOiA0NCxcclxuICBDb21tYTogNDQsXHJcbiAgTnVtcGFkU3VidHJhY3Q6IDQ1LFxyXG4gIE51bXBhZERlY2ltYWw6IDQ2LFxyXG4gIFBlcmlvZDogNDYsXHJcbiAgU2xhc2g6IDQ3LFxyXG4gIE51bXBhZERpdmlkZTogNDcsXHJcbiAgU2VtaWNvbG9uOiA1OSxcclxuICBFcXVhbDogNjEsXHJcbiAgT1NMZWZ0OiA5MSxcclxuICBCcmFja2V0TGVmdDogOTEsXHJcbiAgT1NSaWdodDogOTEsXHJcbiAgQmFja3NsYXNoOiA5MixcclxuICBCcmFja2V0UmlnaHQ6IDkzLFxyXG4gIENvbnRleHRNZW51OiA5MyxcclxuICBCYWNrcXVvdGU6IDk2LFxyXG4gIE51bUxvY2s6IDE0NCxcclxuICBTY3JvbGxMb2NrOiAxNDUsXHJcbiAgQmFja3NwYWNlOiAweGZmMDgsXHJcbiAgVGFiOiAweGZmMDksXHJcbiAgRW50ZXI6IDB4ZmYwZCxcclxuICBOdW1wYWRFbnRlcjogMHhmZjBkLFxyXG4gIEVzY2FwZTogMHhmZjFiLFxyXG4gIERlbGV0ZTogMHhmZmZmLFxyXG4gIEhvbWU6IDB4ZmY1MCxcclxuICBQYWdlVXA6IDB4ZmY1NSxcclxuICBQYWdlRG93bjogMHhmZjU2LFxyXG4gIEFycm93TGVmdDogMHhmZjUxLFxyXG4gIEFycm93VXA6IDB4ZmY1MixcclxuICBBcnJvd1JpZ2h0OiAweGZmNTMsXHJcbiAgQXJyb3dEb3duOiAweGZmNTQsXHJcbiAgRW5kOiAweGZmNTcsXHJcbiAgSW5zZXJ0OiAweGZmNjMsXHJcbiAgRjE6IDB4ZmZiZSxcclxuICBGMjogMHhmZmJmLFxyXG4gIEYzOiAweGZmYzAsXHJcbiAgRjQ6IDB4ZmZjMSxcclxuICBGNTogMHhmZmMyLFxyXG4gIEY2OiAweGZmYzMsXHJcbiAgRjc6IDB4ZmZjNCxcclxuICBGODogMHhmZmM1LFxyXG4gIEY5OiAweGZmYzYsXHJcbiAgRjEwOiAweGZmYzcsXHJcbiAgRjExOiAweGZmYzgsXHJcbiAgRjEyOiAweGZmYzksXHJcbiAgU2hpZnRMZWZ0OiAweGZmZTEsXHJcbiAgU2hpZnRSaWdodDogMHhmZmUyLFxyXG4gIENvbnRyb2xMZWZ0OiAweGZmZTMsXHJcbiAgQ29udHJvbFJpZ2h0OiAweGZmZTQsXHJcbiAgQWx0TGVmdDogMHhmZmU5LFxyXG4gIEFsdFJpZ2h0OiAweGZmZWEsXHJcbiAgTWV0YUxlZnQ6IDB4ZmZlNyxcclxuICBNZXRhUmlnaHQ6IDB4ZmZlOFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBTVRLZXlDb2RlVGFibGVcclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgRGVza3RvcCB9IGZyb20gJy4uL0Rlc2t0b3AnXHJcbmltcG9ydCB7IFR5cGVDb252ZXJ0ZXIgfSBmcm9tICcuLi9Db252ZXJ0ZXInXHJcbmltcG9ydCB7IElDb21tdW5pY2F0b3IgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lDb21tdW5pY2F0b3InXHJcbmltcG9ydCB7IGlzVHJ1dGh5IH0gZnJvbSAnLi9VdGlsaXR5TWV0aG9kcydcclxuaW1wb3J0IHsgVXBEb3duIH0gZnJvbSAnLi9LZXlib2FyZEhlbHBlcidcclxuXHJcbmNvbnN0IENvbW1zSGVscGVyID0ge1xyXG4gIHNlbmRSZWZyZXNoIChwYXJlbnQ6IERlc2t0b3AsIGNvbW06IElDb21tdW5pY2F0b3IpOiB2b2lkIHtcclxuICAgIGlmIChwYXJlbnQuaG9sZGluZykgcmV0dXJuXHJcblxyXG4gICAgaWYgKHBhcmVudC5mb2N1c01vZGUgPiAwKSB7XHJcbiAgICAgIC8vIFJlcXVlc3Qgb25seSBwaXhlbHMgYXJvdW5kIHRoZSBsYXN0IG1vdXNlIHBvc2l0aW9uXHJcbiAgICAgIGNvbnN0IGRmID0gcGFyZW50LmZvY3VzTW9kZSAqIDJcclxuICAgICAgY29tbS5zZW5kKFN0cmluZy5mcm9tQ2hhckNvZGUoMywgMSkgK1xyXG4gICAgICAgIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0cihNYXRoLm1heChNYXRoLm1pbihwYXJlbnQub2xkTW91c2VYLCBwYXJlbnQubGFzdE1vdXNlWCkgLSBwYXJlbnQuZm9jdXNNb2RlLCAwKSkgK1xyXG4gICAgICAgIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0cihNYXRoLm1heChNYXRoLm1pbihwYXJlbnQub2xkTW91c2VZLCBwYXJlbnQubGFzdE1vdXNlWSkgLSBwYXJlbnQuZm9jdXNNb2RlLCAwKSkgK1xyXG4gICAgICAgIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0cihkZiArIE1hdGguYWJzKHBhcmVudC5vbGRNb3VzZVggLSBwYXJlbnQubGFzdE1vdXNlWCkpICtcclxuICAgICAgICBUeXBlQ29udmVydGVyLlNob3J0VG9TdHIoZGYgKyBNYXRoLmFicyhwYXJlbnQub2xkTW91c2VZIC0gcGFyZW50Lmxhc3RNb3VzZVkpKSkgLy8gRnJhbWVidWZmZXJVcGRhdGVSZXF1ZXN0XHJcbiAgICAgIHBhcmVudC5vbGRNb3VzZVggPSBwYXJlbnQubGFzdE1vdXNlWFxyXG4gICAgICBwYXJlbnQub2xkTW91c2VZID0gcGFyZW50Lmxhc3RNb3VzZVlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFJlcXVlc3QgdGhlIGVudGlyZSBzY3JlZW5cclxuICAgICAgY29tbS5zZW5kKFN0cmluZy5mcm9tQ2hhckNvZGUoMywgMSwgMCwgMCwgMCwgMCkgK1xyXG4gICAgICAgIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0cihwYXJlbnQucndpZHRoKSArXHJcbiAgICAgICAgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyKHBhcmVudC5yaGVpZ2h0KSkgLy8gRnJhbWVidWZmZXJVcGRhdGVSZXF1ZXN0XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2VuZEtleSAoY29tbTogSUNvbW11bmljYXRvciwgazogbnVtYmVyIHxhbnksIGQ6IFVwRG93bik6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiBrID09PSAnb2JqZWN0JykgeyBmb3IgKGNvbnN0IGkgaW4gaykgeyB0aGlzLnNlbmRLZXkoY29tbSwga1tpXVswXSwga1tpXVsxXSkgfSB9IGVsc2UgeyBjb21tLnNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSg0LCBkLCAwLCAwKSArIFR5cGVDb252ZXJ0ZXIuSW50VG9TdHIoaykpIH1cclxuICB9LFxyXG5cclxuICBzZW5kS3ZtRGF0YSAocGFyZW50OiBEZXNrdG9wLCBjb21tOiBJQ29tbXVuaWNhdG9yLCB4OiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChwYXJlbnQub25Ldm1EYXRhQWNrICE9PSB0cnVlKSB7XHJcbiAgICAgIHBhcmVudC5vbkt2bURhdGFQZW5kaW5nLnB1c2goeClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChpc1RydXRoeShwYXJlbnQudXJsdmFycykgJiYgaXNUcnV0aHkocGFyZW50LnVybHZhcnMua3ZtZGF0YXRyYWNlKSkgeyBjb25zb2xlLmxvZyhgS1ZNLVNlbmQoJHtTdHJpbmcoeC5sZW5ndGgpfSk6ICR7U3RyaW5nKHgpfWApIH1cclxuICAgICAgeCA9ICdcXDBLdm1EYXRhQ2hhbm5lbFxcMCcgKyBTdHJpbmcoeClcclxuICAgICAgY29tbS5zZW5kKGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNiwgMCwgMCwgMCl9JHtUeXBlQ29udmVydGVyLkludFRvU3RyKHgubGVuZ3RoKX0ke1N0cmluZyh4KX1gKVxyXG4gICAgICBwYXJlbnQub25Ldm1EYXRhQWNrID0gZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZW5kS2VlcEFsaXZlIChwYXJlbnQ6IERlc2t0b3AsIGNvbW06IElDb21tdW5pY2F0b3IpOiB2b2lkIHtcclxuICAgIGlmIChwYXJlbnQubGFzdEtlZXBBbGl2ZSA8IERhdGUubm93KCkgLSA1MDAwKSB7XHJcbiAgICAgIHBhcmVudC5sYXN0S2VlcEFsaXZlID0gRGF0ZS5ub3coKVxyXG4gICAgICBjb21tLnNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSg2LCAwLCAwLCAwKSArIFR5cGVDb252ZXJ0ZXIuSW50VG9TdHIoMTYpICsgJ1xcMEt2bURhdGFDaGFubmVsXFwwJylcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZW5kQ3RybEFsdERlbE1zZyAoY29tbTogSUNvbW11bmljYXRvcik6IHZvaWQge1xyXG4gICAgdGhpcy5zZW5kQ2FkKGNvbW0pXHJcbiAgfSxcclxuXHJcbiAgc2VuZENhZCAoY29tbTogSUNvbW11bmljYXRvcik6IHZvaWQge1xyXG4gICAgdGhpcy5zZW5kS2V5KGNvbW0sIDB4RkZFMywgMSkgLy8gQ29udHJvbFxyXG4gICAgdGhpcy5zZW5kS2V5KGNvbW0sIDB4RkZFOSwgMSkgLy8gQWx0XHJcbiAgICB0aGlzLnNlbmRLZXkoY29tbSwgMHhGRkZGLCAxKSAvLyBEZWxldGVcclxuICAgIHRoaXMuc2VuZEtleShjb21tLCAweEZGRkYsIDApIC8vIERlbGV0ZVxyXG4gICAgdGhpcy5zZW5kS2V5KGNvbW0sIDB4RkZFOSwgMCkgLy8gQWx0XHJcbiAgICB0aGlzLnNlbmRLZXkoY29tbSwgMHhGRkUzLCAwKSAvLyBDb250cm9sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDb21tc0hlbHBlciB9XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCB7IERlc2t0b3AgfSBmcm9tICcuLi9EZXNrdG9wJ1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gaGFuZGxlIGltYWdlIHBpeGVsIGRhdGEuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSW1hZ2VIZWxwZXIgPSB7XHJcbiAgLyoqXHJcbiAgICogcHV0cyBpbWFnZSBvbiBjYW52YXMgdXNpbmcgdGhlIHBhcmVudCBjYW52YXMgY3R4LlxyXG4gICAqIEBwYXJhbSBwYXJlbnQgcGFyZW50IGRlc2t0b3Agd2l0aCBDVFggZm9yIGNhbnZhc1xyXG4gICAqIEBwYXJhbSB4IHggbG9jXHJcbiAgICogQHBhcmFtIHkgeSBsb2NcclxuICAgKi9cclxuICBwdXRJbWFnZSAocGFyZW50OiBEZXNrdG9wLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHBhcmVudC5ob2xkaW5nKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCB4eCA9IEltYWdlSGVscGVyLmFyb3RYKHBhcmVudCwgeCwgeSlcclxuICAgIHkgPSBJbWFnZUhlbHBlci5hcm90WShwYXJlbnQsIHgsIHkpXHJcbiAgICB4ID0geHhcclxuICAgIHBhcmVudC5jYW52YXNDdHgucHV0SW1hZ2VEYXRhKHBhcmVudC5zcGFyZSwgeCwgeSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBwYXJlbnQgcGFyZW50IGRlc2t0b3BcclxuICAgKiBAcGFyYW0gdmFsdWUgcGl4ZWwgdmFsdWUgYXQgcHRyXHJcbiAgICogQHBhcmFtIHB0ciBwdHIgaW50byB0aGUgaW1hZ2UgcGl4ZWwgZGF0YVxyXG4gICAqL1xyXG4gIHNldFBpeGVsIChwYXJlbnQ6IERlc2t0b3AsIHZhbHVlOiBudW1iZXIsIHB0cjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgcHAgPSBwdHIgKiA0XHJcbiAgICBsZXQgeDogbnVtYmVyXHJcbiAgICBsZXQgeTogbnVtYmVyXHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID4gMCkge1xyXG4gICAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAxKSB7XHJcbiAgICAgICAgeCA9IHB0ciAlIHBhcmVudC5zcGFyZXdcclxuICAgICAgICB5ID0gTWF0aC5mbG9vcihwdHIgLyBwYXJlbnQuc3BhcmV3KVxyXG4gICAgICAgIHB0ciA9ICh4ICogcGFyZW50LnNwYXJldzIpICsgKHBhcmVudC5zcGFyZXcyIC0gMSAtIHkpXHJcbiAgICAgICAgcHAgPSBwdHIgKiA0XHJcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50LnJvdGF0aW9uID09PSAyKSB7IHBwID0gKHBhcmVudC5zcGFyZXcgKiBwYXJlbnQuc3BhcmVoICogNCkgLSA0IC0gcHAgfSBlbHNlIGlmIChwYXJlbnQucm90YXRpb24gPT09IDMpIHtcclxuICAgICAgICB4ID0gcHRyICUgcGFyZW50LnNwYXJld1xyXG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHB0ciAvIHBhcmVudC5zcGFyZXcpXHJcbiAgICAgICAgcHRyID0gKChwYXJlbnQuc3BhcmV3MiAtIDEgLSB4KSAqIHBhcmVudC5zcGFyZXcyKSArICh5KVxyXG4gICAgICAgIHBwID0gcHRyICogNFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmVudC5icHAgPT09IDEpIHtcclxuICAgICAgLy8gU2V0IDhiaXQgY29sb3IgUkdCMzMyXHJcbiAgICAgIHBhcmVudC5zcGFyZS5kYXRhW3BwKytdID0gdmFsdWUgJiAyMjRcclxuICAgICAgcGFyZW50LnNwYXJlLmRhdGFbcHArK10gPSAodmFsdWUgJiAyOCkgPDwgM1xyXG4gICAgICBwYXJlbnQuc3BhcmUuZGF0YVtwcCsrXSA9IEltYWdlSGVscGVyLmZpeENvbG9yKCh2YWx1ZSAmIDMpIDw8IDYpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTZXQgMTZiaXQgY29sb3IgUkdCNTY1XHJcbiAgICAgIHBhcmVudC5zcGFyZS5kYXRhW3BwKytdID0gKHZhbHVlID4+IDgpICYgMjQ4XHJcbiAgICAgIHBhcmVudC5zcGFyZS5kYXRhW3BwKytdID0gKHZhbHVlID4+IDMpICYgMjUyXHJcbiAgICAgIHBhcmVudC5zcGFyZS5kYXRhW3BwKytdID0gKHZhbHVlICYgMzEpIDw8IDNcclxuICAgIH1cclxuICAgIHBhcmVudC5zcGFyZS5kYXRhW3BwXSA9IDB4RkYgLy8gU2V0IGFscGhhIGNoYW5uZWwgdG8gb3BhcXVlLlxyXG4gIH0sXHJcblxyXG4gIGFyb3RYIChwYXJlbnQ6IERlc2t0b3AsIHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDApIHJldHVybiB4XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAxKSByZXR1cm4gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMud2lkdGggLSBwYXJlbnQuc3BhcmV3MiAtIHlcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDIpIHJldHVybiBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy53aWR0aCAtIHBhcmVudC5zcGFyZXcyIC0geFxyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMykgcmV0dXJuIHlcclxuICAgIHJldHVybiAwXHJcbiAgfSxcclxuXHJcbiAgYXJvdFkgKHBhcmVudDogRGVza3RvcCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMCkgcmV0dXJuIHlcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDEpIHJldHVybiB4XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAyKSByZXR1cm4gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC0gcGFyZW50LnNwYXJlaDIgLSB5XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAzKSByZXR1cm4gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC0gcGFyZW50LnNwYXJlaCAtIHhcclxuICAgIHJldHVybiAwXHJcbiAgfSxcclxuXHJcbiAgY3JvdFggKHBhcmVudDogRGVza3RvcCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMCkgcmV0dXJuIHhcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDEpIHJldHVybiB5XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAyKSByZXR1cm4gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMud2lkdGggLSB4XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAzKSByZXR1cm4gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC0geVxyXG4gICAgcmV0dXJuIDBcclxuICB9LFxyXG5cclxuICBjcm90WSAocGFyZW50OiBEZXNrdG9wLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAwKSByZXR1cm4geVxyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMSkgcmV0dXJuIHBhcmVudC5jYW52YXNDdHguY2FudmFzLndpZHRoIC0geFxyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMikgcmV0dXJuIHBhcmVudC5jYW52YXNDdHguY2FudmFzLmhlaWdodCAtIHlcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDMpIHJldHVybiB4XHJcbiAgICByZXR1cm4gMFxyXG4gIH0sXHJcblxyXG4gIHJvdFggKHBhcmVudDogRGVza3RvcCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMCkgcmV0dXJuIHhcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDEpIHJldHVybiB4XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAyKSByZXR1cm4geCAtIHBhcmVudC5jYW52YXNDdHguY2FudmFzLndpZHRoXHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAzKSByZXR1cm4geCAtIHBhcmVudC5jYW52YXNDdHguY2FudmFzLmhlaWdodFxyXG4gICAgcmV0dXJuIDBcclxuICB9LFxyXG5cclxuICByb3RZIChwYXJlbnQ6IERlc2t0b3AsIHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDApIHJldHVybiB5XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAxKSByZXR1cm4geSAtIHBhcmVudC5jYW52YXNDdHguY2FudmFzLndpZHRoXHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAyKSByZXR1cm4geSAtIHBhcmVudC5jYW52YXNDdHguY2FudmFzLmhlaWdodFxyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMykgcmV0dXJuIHlcclxuICAgIHJldHVybiAwXHJcbiAgfSxcclxuXHJcbiAgc2V0Um90YXRpb24gKHBhcmVudDogRGVza3RvcCwgeDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICB3aGlsZSAoeCA8IDApIHsgeCArPSA0IH1cclxuICAgIGNvbnN0IG5ld3JvdGF0aW9uOiBhbnkgPSB4ICUgNFxyXG4gICAgLy8gY29uc29sZS5sb2coJ2hhcmQtcm90OiAnICsgbmV3cm90YXRpb24pO1xyXG5cclxuICAgIGlmIChwYXJlbnQuaG9sZGluZykgeyBwYXJlbnQucm90YXRpb24gPSBuZXdyb3RhdGlvbjsgcmV0dXJuIGZhbHNlIH1cclxuXHJcbiAgICBpZiAobmV3cm90YXRpb24gPT09IHBhcmVudC5yb3RhdGlvbikgcmV0dXJuIHRydWVcclxuICAgIGxldCBydyA9IHBhcmVudC5jYW52YXNDdHguY2FudmFzLndpZHRoXHJcbiAgICBsZXQgcmggPSBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHRcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDEgfHwgcGFyZW50LnJvdGF0aW9uID09PSAzKSB7IHJ3ID0gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMuaGVpZ2h0OyByaCA9IHBhcmVudC5jYW52YXNDdHguY2FudmFzLndpZHRoIH1cclxuXHJcbiAgICAvLyBDb3B5IHRoZSBjYW52YXMsIHB1dCBpdCBiYWNrIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvblxyXG4gICAgaWYgKHBhcmVudC50Y2FudmFzID09IG51bGwpIHBhcmVudC50Y2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcclxuICAgIGNvbnN0IHRjYW52YXNjdHg6IGFueSA9IHBhcmVudC50Y2FudmFzLmdldENvbnRleHQoJzJkJylcclxuICAgIHRjYW52YXNjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApXHJcbiAgICB0Y2FudmFzY3R4LmNhbnZhcy53aWR0aCA9IHJ3XHJcbiAgICB0Y2FudmFzY3R4LmNhbnZhcy5oZWlnaHQgPSByaFxyXG4gICAgdGNhbnZhc2N0eC5yb3RhdGUoKHBhcmVudC5yb3RhdGlvbiAqIC05MCkgKiBNYXRoLlBJIC8gMTgwKVxyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMCkgdGNhbnZhc2N0eC5kcmF3SW1hZ2UocGFyZW50LmNhbnZhc0N0eC5jYW52YXMsIDAsIDApXHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAxKSB0Y2FudmFzY3R4LmRyYXdJbWFnZShwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcywgLXBhcmVudC5jYW52YXNDdHguY2FudmFzLndpZHRoLCAwKVxyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMikgdGNhbnZhc2N0eC5kcmF3SW1hZ2UocGFyZW50LmNhbnZhc0N0eC5jYW52YXMsIC1wYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy53aWR0aCwgLXBhcmVudC5jYW52YXNDdHguY2FudmFzLmhlaWdodClcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDMpIHRjYW52YXNjdHguZHJhd0ltYWdlKHBhcmVudC5jYW52YXNDdHguY2FudmFzLCAwLCAtcGFyZW50LmNhbnZhc0N0eC5jYW52YXMuaGVpZ2h0KVxyXG5cclxuICAgIC8vIENoYW5nZSB0aGUgc2l6ZSBhbmQgb3JpZW50YXRpb24gYW5kIGNvcHkgdGhlIGNhbnZhcyBiYWNrIGludG8gdGhlIHJvdGF0aW9uXHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAwIHx8IHBhcmVudC5yb3RhdGlvbiA9PT0gMikgeyBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgPSBydzsgcGFyZW50LmNhbnZhc0N0eC5jYW52YXMud2lkdGggPSByaCB9XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAxIHx8IHBhcmVudC5yb3RhdGlvbiA9PT0gMykgeyBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgPSByaDsgcGFyZW50LmNhbnZhc0N0eC5jYW52YXMud2lkdGggPSBydyB9XHJcbiAgICBwYXJlbnQuY2FudmFzQ3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKVxyXG4gICAgcGFyZW50LmNhbnZhc0N0eC5yb3RhdGUoKG5ld3JvdGF0aW9uICogOTApICogTWF0aC5QSSAvIDE4MClcclxuICAgIHBhcmVudC5yb3RhdGlvbiA9IG5ld3JvdGF0aW9uXHJcbiAgICBwYXJlbnQuY2FudmFzQ3R4LmRyYXdJbWFnZShwYXJlbnQudGNhbnZhcywgSW1hZ2VIZWxwZXIucm90WChwYXJlbnQsIDAsIDApLCBJbWFnZUhlbHBlci5yb3RZKHBhcmVudCwgMCwgMCkpXHJcblxyXG4gICAgcGFyZW50LndpZHRoID0gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMud2lkdGhcclxuICAgIHBhcmVudC5oZWlnaHQgPSBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHRcclxuICAgIGlmIChwYXJlbnQub25TY3JlZW5SZXNpemUgIT0gbnVsbCkgcGFyZW50Lm9uU2NyZWVuUmVzaXplKHBhcmVudC53aWR0aCwgcGFyZW50LmhlaWdodCwgcGFyZW50LmNhbnZhc0lkKVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9LFxyXG5cclxuICBmaXhDb2xvciAoYzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoYyA+IDEyNykgPyAoYyArIDMyKSA6IGNcclxuICB9XHJcbn1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5pbXBvcnQgeyBBTVRLZXlDb2RlQ29udmVydGVyIH0gZnJvbSAnLi9BTVRLZXlDb2RlQ29udmVydGVyJ1xyXG5pbXBvcnQgeyBJQ29tbXVuaWNhdG9yIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JQ29tbXVuaWNhdG9yJ1xyXG5pbXBvcnQgeyBDb21tc0hlbHBlciB9IGZyb20gJy4vQ29tbXNIZWxwZXInXHJcbmltcG9ydCB7IERlc2t0b3AgfSBmcm9tICcuLi9EZXNrdG9wJ1xyXG5pbXBvcnQgeyBpc1RydXRoeSB9IGZyb20gJy4vVXRpbGl0eU1ldGhvZHMnXHJcblxyXG5leHBvcnQgZW51bSBVcERvd24ge1xyXG4gIFVwID0gMCxcclxuICBEb3duID0gMVxyXG59XHJcbi8qKlxyXG4gKiBQcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIGhhbmRsZSBrZXlib2FyZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEtleUJvYXJkSGVscGVyIHtcclxuICBLZXlJbnB1dEdyYWI6IGJvb2xlYW5cclxuICBDb21tczogSUNvbW11bmljYXRvclxyXG4gIHBhcmVudDogRGVza3RvcFxyXG4gIGNvbnN0cnVjdG9yIChwYXJlbnQ6IERlc2t0b3AsIGNvbW1zOiBJQ29tbXVuaWNhdG9yKSB7XHJcbiAgICB0aGlzLkNvbW1zID0gY29tbXNcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgZ3JhYmJpbmcga2V5Ym9hcmQgZXZlbnRzIG9uIHRoZSBkb2N1bWVudCBvYmplY3RcclxuICAgKi9cclxuICBHcmFiS2V5SW5wdXQgKCk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5LZXlJbnB1dEdyYWIpIHsgcmV0dXJuIH1cclxuICAgIGRvY3VtZW50Lm9ua2V5dXAgPSB0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcylcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpXHJcbiAgICBkb2N1bWVudC5vbmtleXByZXNzID0gdGhpcy5oYW5kbGVLZXlzLmJpbmQodGhpcylcclxuICAgIHRoaXMuS2V5SW5wdXRHcmFiID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVsZWFzZXMgZXZlbnQgaGFuZGxlcnMgdXNlZCBmb3Iga2V5Ym9hcmQgZXZlbnQgaGFuZGxpbmdcclxuICAgKi9cclxuICBVbkdyYWJLZXlJbnB1dCAoKTogYW55IHtcclxuICAgIGlmICghdGhpcy5LZXlJbnB1dEdyYWIpIHsgcmV0dXJuIH1cclxuICAgIGRvY3VtZW50Lm9ua2V5dXAgPSBudWxsXHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsXHJcbiAgICBkb2N1bWVudC5vbmtleXByZXNzID0gbnVsbFxyXG4gICAgdGhpcy5LZXlJbnB1dEdyYWIgPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5cyAoZTogRXZlbnQpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFsdEV2ZW50KGUpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBoYWx0cyBkZWZhdWx0IGtleWJvYXJkIGV2ZW50ICBoYW5kbGluZy4gU2luY2UgdGhlIHNvbGUgcHVycG9zZSBvZiB0aGlzIGV2ZW50IGlzIHRvIHNlbmQgaXQgdG8gdGhlIHJlbW90ZSBkZXNrdG9wXHJcbiAgICogQHBhcmFtIGUga2V5Ym9hcmQgZXZlbnRcclxuICAgKi9cclxuICBoYWx0RXZlbnQgKGU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGlzVHJ1dGh5KGUucHJldmVudERlZmF1bHQpKSB7IGUucHJldmVudERlZmF1bHQoKSB9XHJcbiAgICBpZiAoaXNUcnV0aHkoZS5zdG9wUHJvcGFnYXRpb24pKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCkgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlVcCAoZTogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlS2V5RXZlbnQoVXBEb3duLlVwLCBlKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5RG93biAoZTogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlS2V5RXZlbnQoVXBEb3duLkRvd24sIGUpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlFdmVudCAoZDogVXBEb3duLCBrZTogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGU6IGFueSA9IGtlXHJcbiAgICBpZiAoIWlzVHJ1dGh5KGUpKSB7IGUgPSB3aW5kb3cuZXZlbnQgfVxyXG5cclxuICAgIGlmIChpc1RydXRoeShlLmNvZGUpKSB7XHJcbiAgICAgIC8vIEZvciBuZXcgYnJvd3NlcnMsIHRoaXMgbWFwcGluZyBpcyBrZXlib2FyZCBsYW5ndWFnZSBpbmRlcGVuZGVudFxyXG4gICAgICBjb25zdCBrID0gQU1US2V5Q29kZUNvbnZlcnRlci5jb252ZXJ0QU1US2V5Q29kZShlKVxyXG4gICAgICB0aGlzLnBhcmVudC5sb2dnZXIudmVyYm9zZShgS2V5ICR7ZH0gOiAke1N0cmluZyhrKX1gKVxyXG4gICAgICBpZiAoayAhPSBudWxsKSB7IENvbW1zSGVscGVyLnNlbmRLZXkodGhpcy5Db21tcywgaywgZCkgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGs6IG51bWJlciA9IGUua2V5Q29kZVxyXG4gICAgICBpZiAoayA9PT0gMTczKSBrID0gMTg5IC8vICctJyBrZXkgKEZpcmVmb3gpXHJcbiAgICAgIGlmIChrID09PSA2MSkgayA9IDE4NyAvLyAnPScga2V5IChGaXJlZm94KVxyXG4gICAgICBsZXQga2sgPSBrXHJcbiAgICAgIGlmIChlLnNoaWZ0S2V5ID09PSBmYWxzZSAmJiBrID49IDY1ICYmIGsgPD0gOTApIGtrID0gayArIDMyXHJcbiAgICAgIGlmIChrID49IDExMiAmJiBrIDw9IDEyNCkga2sgPSBrICsgMHhGRjRFXHJcbiAgICAgIGlmIChrID09PSA4KSBrayA9IDB4ZmYwOCAvLyBCYWNrc3BhY2VcclxuICAgICAgaWYgKGsgPT09IDkpIGtrID0gMHhmZjA5IC8vIFRhYlxyXG4gICAgICBpZiAoayA9PT0gMTMpIGtrID0gMHhmZjBkIC8vIFJldHVyblxyXG4gICAgICBpZiAoayA9PT0gMTYpIGtrID0gMHhmZmUxIC8vIFNoaWZ0IChMZWZ0KVxyXG4gICAgICBpZiAoayA9PT0gMTcpIGtrID0gMHhmZmUzIC8vIEN0cmwgKExlZnQpXHJcbiAgICAgIGlmIChrID09PSAxOCkga2sgPSAweGZmZTkgLy8gQWx0IChMZWZ0KVxyXG4gICAgICBpZiAoayA9PT0gMjcpIGtrID0gMHhmZjFiIC8vIEVTQ1xyXG4gICAgICBpZiAoayA9PT0gMzMpIGtrID0gMHhmZjU1IC8vIFBhZ2VVcFxyXG4gICAgICBpZiAoayA9PT0gMzQpIGtrID0gMHhmZjU2IC8vIFBhZ2VEb3duXHJcbiAgICAgIGlmIChrID09PSAzNSkga2sgPSAweGZmNTcgLy8gRW5kXHJcbiAgICAgIGlmIChrID09PSAzNikga2sgPSAweGZmNTAgLy8gSG9tZVxyXG4gICAgICBpZiAoayA9PT0gMzcpIGtrID0gMHhmZjUxIC8vIExlZnRcclxuICAgICAgaWYgKGsgPT09IDM4KSBrayA9IDB4ZmY1MiAvLyBVcFxyXG4gICAgICBpZiAoayA9PT0gMzkpIGtrID0gMHhmZjUzIC8vIFJpZ2h0XHJcbiAgICAgIGlmIChrID09PSA0MCkga2sgPSAweGZmNTQgLy8gRG93blxyXG4gICAgICBpZiAoayA9PT0gNDUpIGtrID0gMHhmZjYzIC8vIEluc2VydFxyXG4gICAgICBpZiAoayA9PT0gNDYpIGtrID0gMHhmZmZmIC8vIERlbGV0ZVxyXG4gICAgICBpZiAoayA+PSA5NiAmJiBrIDw9IDEwNSkga2sgPSBrIC0gNDggLy8gS2V5IHBhZCBudW1iZXJzXHJcbiAgICAgIGlmIChrID09PSAxMDYpIGtrID0gNDIgLy8gUGFkICpcclxuICAgICAgaWYgKGsgPT09IDEwNykga2sgPSA0MyAvLyBQYWQgK1xyXG4gICAgICBpZiAoayA9PT0gMTA5KSBrayA9IDQ1IC8vIFBhZCAtXHJcbiAgICAgIGlmIChrID09PSAxMTApIGtrID0gNDYgLy8gUGFkIC5cclxuICAgICAgaWYgKGsgPT09IDExMSkga2sgPSA0NyAvLyBQYWQgL1xyXG4gICAgICBpZiAoayA9PT0gMTg2KSBrayA9IDU5IC8vIDtcclxuICAgICAgaWYgKGsgPT09IDE4Nykga2sgPSA2MSAvLyA9XHJcbiAgICAgIGlmIChrID09PSAxODgpIGtrID0gNDQgLy8gLFxyXG4gICAgICBpZiAoayA9PT0gMTg5KSBrayA9IDQ1IC8vIC1cclxuICAgICAgaWYgKGsgPT09IDE5MCkga2sgPSA0NiAvLyAuXHJcbiAgICAgIGlmIChrID09PSAxOTEpIGtrID0gNDcgLy8gL1xyXG4gICAgICBpZiAoayA9PT0gMTkyKSBrayA9IDk2IC8vIGBcclxuICAgICAgaWYgKGsgPT09IDIxOSkga2sgPSA5MSAvLyBbXHJcbiAgICAgIGlmIChrID09PSAyMjApIGtrID0gOTIgLy8gXFxcclxuICAgICAgaWYgKGsgPT09IDIyMSkga2sgPSA5MyAvLyBddFxyXG4gICAgICBpZiAoayA9PT0gMjIyKSBrayA9IDM5IC8vICdcclxuICAgICAgdGhpcy5wYXJlbnQubG9nZ2VyLnZlcmJvc2UoYEtleSAke2R9OiAke2t9ICA9ICR7a2t9YClcclxuICAgICAgQ29tbXNIZWxwZXIuc2VuZEtleSh0aGlzLkNvbW1zLCBraywgZClcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmhhbHRFdmVudChlKVxyXG4gIH1cclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmltcG9ydCB7IElDb21tdW5pY2F0b3IgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lDb21tdW5pY2F0b3InXHJcbmltcG9ydCB7IERlc2t0b3AgfSBmcm9tICcuLi9EZXNrdG9wJ1xyXG5pbXBvcnQgeyBUeXBlQ29udmVydGVyIH0gZnJvbSAnLi4vQ29udmVydGVyJ1xyXG5pbXBvcnQgeyBJbWFnZUhlbHBlciB9IGZyb20gJy4vSW1hZ2VIZWxwZXInXHJcbmltcG9ydCB7IGlzVHJ1dGh5IH0gZnJvbSAnLi9VdGlsaXR5TWV0aG9kcydcclxuXHJcbi8qKlxyXG4gKiBNb3VzZWhlbHBlciBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIGZvciBoYW5kbGluZyBtb3VzZSBldmVudHMuIG1vdXNldXAsIG1vdXNlZG93biwgbW91c2Vtb3ZlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTW91c2VIZWxwZXIge1xyXG4gIHBhcmVudDogRGVza3RvcCB8IGFueVxyXG4gIGNvbW06IElDb21tdW5pY2F0b3JcclxuICBNb3VzZUlucHV0R3JhYjogYm9vbGVhblxyXG4gIGxhc3RFdmVudDogYW55XHJcbiAgZGVib3VuY2VUaW1lOiBudW1iZXJcclxuICBtb3VzZUNsaWNrQ29tcGxldGVkOiBib29sZWFuXHJcbiAgY29uc3RydWN0b3IgKHBhcmVudDogRGVza3RvcCwgY29tbTogSUNvbW11bmljYXRvciwgZGVib3VuY2VUaW1lOiBudW1iZXIpIHtcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50XHJcbiAgICB0aGlzLmNvbW0gPSBjb21tXHJcbiAgICB0aGlzLmRlYm91bmNlVGltZSA9IGRlYm91bmNlVGltZVxyXG4gICAgdGhpcy5tb3VzZUNsaWNrQ29tcGxldGVkID0gdHJ1ZVxyXG4gICAgdGhpcy5sYXN0RXZlbnQgPSBudWxsXHJcbiAgfVxyXG5cclxuICBHcmFiTW91c2VJbnB1dCAoKTogYW55IHtcclxuICAgIGlmICh0aGlzLk1vdXNlSW5wdXRHcmFiKSByZXR1cm5cclxuICAgIHRoaXMuTW91c2VJbnB1dEdyYWIgPSB0cnVlXHJcbiAgfVxyXG5cclxuICBVbkdyYWJNb3VzZUlucHV0ICgpOiBhbnkge1xyXG4gICAgaWYgKCF0aGlzLk1vdXNlSW5wdXRHcmFiKSByZXR1cm5cclxuICAgIGNvbnN0IGMgPSB0aGlzLnBhcmVudC5jYW52YXNDdHguY2FudmFzXHJcbiAgICBjLm9ubW91c2Vtb3ZlID0gbnVsbFxyXG4gICAgYy5vbm1vdXNldXAgPSBudWxsXHJcbiAgICBjLm9ubW91c2Vkb3duID0gbnVsbFxyXG4gICAgLy8gaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL21vemlsbGEvaSkpIGMuRE9NTW91c2VTY3JvbGwgPSBudWxsOyBlbHNlIGMub25tb3VzZXdoZWVsID0gbnVsbDtcclxuICAgIHRoaXMuTW91c2VJbnB1dEdyYWIgPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgbW91c2Vkb3duIChlOiBNb3VzZUV2ZW50KTogYW55IHtcclxuICAgIHRoaXMucGFyZW50LmJ1dHRvbm1hc2sgfD0gKDEgPDwgZS5idXR0b24pXHJcbiAgICByZXR1cm4gdGhpcy5tb3VzZW1vdmUoZSlcclxuICB9XHJcblxyXG4gIG1vdXNldXAgKGU6IE1vdXNlRXZlbnQpOiBhbnkge1xyXG4gICAgdGhpcy5wYXJlbnQuYnV0dG9ubWFzayAmPSAoMHhGRkZGIC0gKDEgPDwgZS5idXR0b24pKVxyXG4gICAgcmV0dXJuIHRoaXMubW91c2Vtb3ZlKGUpXHJcbiAgfVxyXG5cclxuICBtb3VzZW1vdmUgKGU6IE1vdXNlRXZlbnQpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLnBhcmVudC5zdGF0ZSAhPT0gNCkgcmV0dXJuIHRydWVcclxuICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0UG9zaXRpb25PZkNvbnRyb2wodGhpcy5wYXJlbnQuY2FudmFzQ29udHJvbClcclxuICAgIHRoaXMucGFyZW50Lmxhc3RNb3VzZVggPSAoZS5wYWdlWCAtIHBvc1swXSkgKiAodGhpcy5wYXJlbnQuY2FudmFzQ29udHJvbC5oZWlnaHQgLyB0aGlzLnBhcmVudC5jYW52YXNDb250cm9sLm9mZnNldEhlaWdodClcclxuICAgIHRoaXMucGFyZW50Lmxhc3RNb3VzZVkgPSAoKE51bWJlcihlLnBhZ2VZIC0gcG9zWzFdKSArIChpc1RydXRoeSh0aGlzLnBhcmVudC5zY3JvbGxkaXYpID8gTnVtYmVyKHRoaXMucGFyZW50LnNjcm9sbGRpdi5zY3JvbGxUb3ApIDogMCkpICogKHRoaXMucGFyZW50LmNhbnZhc0NvbnRyb2wud2lkdGggLyB0aGlzLnBhcmVudC5jYW52YXNDb250cm9sLm9mZnNldFdpZHRoKSlcclxuXHJcbiAgICBpZiAoIWlzVHJ1dGh5KHRoaXMucGFyZW50Lm5vTW91c2VSb3RhdGUpKSB7XHJcbiAgICAgIHRoaXMucGFyZW50Lmxhc3RNb3VzZVgyID0gSW1hZ2VIZWxwZXIuY3JvdFgodGhpcy5wYXJlbnQsIHRoaXMucGFyZW50Lmxhc3RNb3VzZVgsIHRoaXMucGFyZW50Lmxhc3RNb3VzZVkpXHJcbiAgICAgIHRoaXMucGFyZW50Lmxhc3RNb3VzZVkgPSBJbWFnZUhlbHBlci5jcm90WSh0aGlzLnBhcmVudCwgdGhpcy5wYXJlbnQubGFzdE1vdXNlWCwgdGhpcy5wYXJlbnQubGFzdE1vdXNlWSlcclxuICAgICAgdGhpcy5wYXJlbnQubGFzdE1vdXNlWCA9IHRoaXMucGFyZW50Lmxhc3RNb3VzZVgyXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb21tLnNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSg1LCB0aGlzLnBhcmVudC5idXR0b25tYXNrKSArIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0cih0aGlzLnBhcmVudC5sYXN0TW91c2VYKSArIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0cih0aGlzLnBhcmVudC5sYXN0TW91c2VZKSlcclxuXHJcbiAgICAvLyBVcGRhdGUgZm9jdXMgYXJlYSBpZiB3ZSBhcmUgaW4gZm9jdXMgbW9kZVxyXG4gICAgdGhpcy5wYXJlbnQuc2V0RGVza0ZvY3VzKCdEZXNrRm9jdXMnLCB0aGlzLnBhcmVudC5mb2N1c01vZGUpXHJcbiAgICBpZiAodGhpcy5wYXJlbnQuZm9jdXNNb2RlICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHggPSBNYXRoLm1pbih0aGlzLnBhcmVudC5sYXN0TW91c2VYLCB0aGlzLnBhcmVudC5jYW52YXNDb250cm9sLndpZHRoIC0gdGhpcy5wYXJlbnQuZm9jdXNNb2RlKVxyXG4gICAgICBjb25zdCB5ID0gTWF0aC5taW4odGhpcy5wYXJlbnQubGFzdE1vdXNlWSwgdGhpcy5wYXJlbnQuY2FudmFzQ29udHJvbC5oZWlnaHQgLSB0aGlzLnBhcmVudC5mb2N1c01vZGUpXHJcbiAgICAgIGNvbnN0IGRmID0gdGhpcy5wYXJlbnQuZm9jdXNNb2RlICogMlxyXG4gICAgICBjb25zdCBjID0gdGhpcy5wYXJlbnQuY2FudmFzQ29udHJvbFxyXG4gICAgICBjb25zdCBxeCA9IGMub2Zmc2V0SGVpZ2h0IC8gdGhpcy5wYXJlbnQuY2FudmFzQ29udHJvbC5oZWlnaHRcclxuICAgICAgY29uc3QgcXkgPSBjLm9mZnNldFdpZHRoIC8gdGhpcy5wYXJlbnQuY2FudmFzQ29udHJvbC53aWR0aFxyXG4gICAgICBjb25zdCBxID0gdGhpcy5wYXJlbnQuZ2V0RGVza0ZvY3VzKCdEZXNrRm9jdXMnKVxyXG4gICAgICBjb25zdCBwcG9zID0gdGhpcy5nZXRQb3NpdGlvbk9mQ29udHJvbCh0aGlzLnBhcmVudC5jYW52YXNDb250cm9sLnBhcmVudEVsZW1lbnQpXHJcbiAgICAgIHEubGVmdCA9IGAkeyhNYXRoLm1heCgoKHggLSB0aGlzLnBhcmVudC5mb2N1c01vZGUpICogcXgpLCAwKSArIChwb3NbMF0gLSBwcG9zWzBdKSl9cHhgXHJcbiAgICAgIHEudG9wID0gYCR7KE1hdGgubWF4KCgoeSAtIHRoaXMucGFyZW50LmZvY3VzTW9kZSkgKiBxeSksIDApICsgKHBvc1sxXSAtIHBwb3NbMV0pKX1weGBcclxuICAgICAgcS53aWR0aCA9IGAkeygoZGYgKiBxeCkgLSA2KX1weGBcclxuICAgICAgcS5oZWlnaHQgPSBgJHsoKGRmICogcXgpIC0gNil9cHhgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaGFsdEV2ZW50KGUpXHJcbiAgfVxyXG5cclxuICBoYWx0RXZlbnQgKGU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGlzVHJ1dGh5KGUucHJldmVudERlZmF1bHQpKSB7IGUucHJldmVudERlZmF1bHQoKSB9XHJcbiAgICBpZiAoaXNUcnV0aHkoZS5zdG9wUHJvcGFnYXRpb24pKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCkgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBnZXRQb3NpdGlvbk9mQ29udHJvbCAoYzogSFRNTEVsZW1lbnQpOiBhbnkge1xyXG4gICAgY29uc3QgUG9zaXRpb24gPSBBcnJheSgyKVxyXG4gICAgUG9zaXRpb25bMF0gPSBQb3NpdGlvblsxXSA9IDBcclxuICAgIGxldCBjb250cm9sOiBIVE1MRWxlbWVudCA9IGNcclxuICAgIHdoaWxlIChjb250cm9sICE9IG51bGwpIHtcclxuICAgICAgUG9zaXRpb25bMF0gPSBOdW1iZXIoUG9zaXRpb25bMF0pICsgTnVtYmVyKGNvbnRyb2wub2Zmc2V0TGVmdClcclxuICAgICAgUG9zaXRpb25bMV0gPSBOdW1iZXIoUG9zaXRpb25bMV0pICsgTnVtYmVyKGNvbnRyb2wub2Zmc2V0VG9wKVxyXG4gICAgICBjb250cm9sID0gY29udHJvbC5vZmZzZXRQYXJlbnQgYXMgSFRNTEVsZW1lbnRcclxuICAgIH1cclxuICAgIHJldHVybiBQb3NpdGlvblxyXG4gIH1cclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAyMVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmV4cG9ydCBjb25zdCBpc1RydXRoeSA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gZmFsc2UgJiYgdmFsdWUgIT09IDBcclxuIiwiZXhwb3J0IHsgQU1US2V5Q29kZUNvbnZlcnRlciB9IGZyb20gJy4vQU1US2V5Q29kZUNvbnZlcnRlcidcclxuZXhwb3J0ICogZnJvbSAnLi9Db21tc0hlbHBlcidcclxuZXhwb3J0IHsgSW1hZ2VIZWxwZXIgfSBmcm9tICcuL0ltYWdlSGVscGVyJ1xyXG5leHBvcnQgeyBLZXlCb2FyZEhlbHBlciB9IGZyb20gJy4vS2V5Ym9hcmRIZWxwZXInXHJcbmV4cG9ydCB7IE1vdXNlSGVscGVyIH0gZnJvbSAnLi9Nb3VzZUhlbHBlcidcclxuZXhwb3J0IHsgaXNUcnV0aHkgfSBmcm9tICcuL1V0aWxpdHlNZXRob2RzJ1xyXG4iLCJleHBvcnQgeyBBTVREZXNrdG9wIH0gZnJvbSAnLi9BTVREZXNrdG9wJ1xyXG5leHBvcnQgeyBBTVRLdm1EYXRhUmVkaXJlY3RvciB9IGZyb20gJy4vQU1US3ZtRGF0YVJlZGlyZWN0b3InXHJcbmV4cG9ydCB7IEFNVFJlZGlyZWN0b3IsIFByb3RvY29sIH0gZnJvbSAnLi9BTVRSZWRpcmVjdG9yJ1xyXG5leHBvcnQgeyBBbXRUZXJtaW5hbCB9IGZyb20gJy4vQU1UVGVybWluYWwnXHJcbmV4cG9ydCB7IENvbnNvbGVMb2dnZXIgfSBmcm9tICcuL0NvbnNvbGVMb2dnZXInXHJcbmV4cG9ydCB7IFR5cGVDb252ZXJ0ZXIgfSBmcm9tICcuL0NvbnZlcnRlcidcclxuZXhwb3J0IHsgRGVza3RvcCB9IGZyb20gJy4vRGVza3RvcCdcclxuZXhwb3J0IHsgU3RhdGVQcm9jZXNzb3JGYWN0b3J5IH0gZnJvbSAnLi9TdGF0ZVByb2Nlc3NvckZhY3RvcnknXHJcbmV4cG9ydCB7IFRlcm1pbmFsRGF0YVByb2Nlc3NvciB9IGZyb20gJy4vVGVybWluYWxEYXRhUHJvY2Vzc29yJ1xyXG5leHBvcnQgKiBmcm9tICcuL0ludGVyZmFjZXMnXHJcbmV4cG9ydCAqIGZyb20gJy4vSW1hZ2VEYXRhJ1xyXG5leHBvcnQgKiBmcm9tICcuL1JGQlN0YXRlUHJvY2Vzc29ycydcclxuZXhwb3J0ICogZnJvbSAnLi9VdGlsaXRpZXMnXHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4vQ29ubmVjdEJ1dHRvbi5zY3NzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25uZWN0UHJvcHMge1xyXG4gIGt2bXN0YXRlOiBudW1iZXJcclxuICBoYW5kbGVDb25uZWN0Q2xpY2s6IChlOiBhbnkpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbm5lY3RCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q29ubmVjdFByb3BzLCB7fT4ge1xyXG4gIHJlbmRlciAoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDb25uZWN0Q2xpY2t9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmt2bXN0YXRlID09PSAxID8gJ0Nvbm5lY3RpbmcgS1ZNJyA6ICh0aGlzLnByb3BzLmt2bXN0YXRlID09PSAyID8gJ0Rpc2Nvbm5lY3QgS1ZNJyA6ICdDb25uZWN0IEtWTScpfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEVuY29kaW5nT3B0aW9ucyB9IGZyb20gJy4vRW5jb2RpbmdPcHRpb25zJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVza3RvcFNldHRpbmdzIHtcclxuICBjaGFuZ2VEZXNrdG9wU2V0dGluZ3M6IChzZXR0aW5nczogYW55KSA9PiB2b2lkXHJcbiAgZ2V0Q29ubmVjdFN0YXRlOiAoKSA9PiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlc2t0b3BTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJRGVza3RvcFNldHRpbmdzPiB7XHJcbiAgZGVza3RvcHNldHRpbmdzID0ge1xyXG4gICAgZW5jb2Rpbmc6IDFcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wczogSURlc2t0b3BTZXR0aW5ncykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLmNoYW5nZUVuY29kaW5nID0gdGhpcy5jaGFuZ2VFbmNvZGluZy5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VFbmNvZGluZyAoZW5jb2Rpbmc6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5kZXNrdG9wc2V0dGluZ3MuZW5jb2RpbmcgPSBlbmNvZGluZ1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VEZXNrdG9wU2V0dGluZ3ModGhpcy5kZXNrdG9wc2V0dGluZ3MpXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RW5jb2RpbmdPcHRpb25zIGNoYW5nZUVuY29kaW5nPXt0aGlzLmNoYW5nZUVuY29kaW5nfSBnZXRDb25uZWN0U3RhdGU9e3RoaXMucHJvcHMuZ2V0Q29ubmVjdFN0YXRlfS8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4vRW5jb2RpbmdPcHRpb25zLnNjc3MnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElFbmNvZGluZ09wdGlvbnMge1xyXG4gIGNoYW5nZUVuY29kaW5nOiAoZW5jb2Rpbmc6IG51bWJlcikgPT4gdm9pZFxyXG4gIGdldENvbm5lY3RTdGF0ZTogKCkgPT4gbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbmNvZGluZ09wdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUVuY29kaW5nT3B0aW9ucywgeyB2YWx1ZTogbnVtYmVyIH0+IHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHM6IElFbmNvZGluZ09wdGlvbnMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IDEgfVxyXG4gICAgdGhpcy5vbkVuY29kaW5nQ2hhbmdlID0gdGhpcy5vbkVuY29kaW5nQ2hhbmdlLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIG9uRW5jb2RpbmdDaGFuZ2UgKGUpOiB2b2lkIHtcclxuICAgIC8vIGUucGVyc2lzdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VFbmNvZGluZyhlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVuY29kaW5nXCI+XHJcbiAgICAgICAgPGxhYmVsID5FbmNvZGluZzo8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IGNsYXNzTmFtZT0ge3RoaXMucHJvcHMuZ2V0Q29ubmVjdFN0YXRlKCkgPT09IDIgPyAncmVsZGlzYWJsZWQnIDogJyd9IG9uQ2hhbmdlPXt0aGlzLm9uRW5jb2RpbmdDaGFuZ2V9IGRpc2FibGVkPXt0aGlzLnByb3BzLmdldENvbm5lY3RTdGF0ZSgpID09PSAyfT5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+UkxFIDg8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+UkxFIDE2PC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbm5lY3RCdXR0b24gfSBmcm9tICcuL0Nvbm5lY3RCdXR0b24nXHJcbmltcG9ydCB7IERlc2t0b3BTZXR0aW5ncyB9IGZyb20gJy4vRGVza3RvcFNldHRpbmdzJ1xyXG5pbXBvcnQgJy4vSGVhZGVyLnNjc3MnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIZWFkZXJQcm9wcyB7XHJcbiAga3Ztc3RhdGU6IG51bWJlclxyXG4gIGRldmljZUlkOiBzdHJpbmcgfCBudWxsXHJcbiAgc2VydmVyOiBzdHJpbmcgfCBudWxsXHJcbiAgaGFuZGxlQ29ubmVjdENsaWNrOiAoZTogYW55KSA9PiB2b2lkXHJcbiAgY2hhbmdlRGVza3RvcFNldHRpbmdzOiAoc2V0dGluZ3M6IGFueSkgPT4gdm9pZFxyXG4gIGdldENvbm5lY3RTdGF0ZTogKCkgPT4gbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUhlYWRlclByb3BzPiB7XHJcbiAgcmVuZGVyICgpOiBKU1guRWxlbWVudCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxDb25uZWN0QnV0dG9uXHJcbiAgICAgICAgICAgIGhhbmRsZUNvbm5lY3RDbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDb25uZWN0Q2xpY2t9XHJcbiAgICAgICAgICAgIGt2bXN0YXRlPXt0aGlzLnByb3BzLmt2bXN0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxEZXNrdG9wU2V0dGluZ3NcclxuICAgICAgICAgICAgY2hhbmdlRGVza3RvcFNldHRpbmdzPXt0aGlzLnByb3BzLmNoYW5nZURlc2t0b3BTZXR0aW5nc31cclxuICAgICAgICAgICAgZ2V0Q29ubmVjdFN0YXRlPXt0aGlzLnByb3BzLmdldENvbm5lY3RTdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgaXNGYWxzeSB9IGZyb20gJy4uL3NoYXJlZC9VdGlsaXRpZXMnXHJcbmltcG9ydCAnLi9QdXJlQ2FudmFzLnNjc3MnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFB1cmVDYW52YXNQcm9wcyB7XHJcbiAgY29udGV4dFJlZjogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkXHJcbiAgbW91c2VEb3duOiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHZvaWRcclxuICBtb3VzZVVwOiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHZvaWRcclxuICBtb3VzZU1vdmU6IChldmVudDogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZFxyXG4gIGNhbnZhc0hlaWdodDogc3RyaW5nXHJcbiAgY2FudmFzV2lkdGg6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHVyZUNhbnZhcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQdXJlQ2FudmFzUHJvcHMsIHt9PiB7XHJcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3QgY2FudmFzQXR0cmlidXRlczogUmVhY3QuQ2FudmFzSFRNTEF0dHJpYnV0ZXM8SFRNTENhbnZhc0VsZW1lbnQ+ID0ge1xyXG4gICAgICB3aWR0aDogJzEzNjYnLFxyXG4gICAgICBoZWlnaHQ6ICc3NjgnLFxyXG4gICAgICBvbkNvbnRleHRNZW51OiAoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IHJldHVybiBmYWxzZSB9LFxyXG4gICAgICBvbk1vdXNlRG93bjogdGhpcy5wcm9wcy5tb3VzZURvd24sXHJcbiAgICAgIG9uTW91c2VVcDogdGhpcy5wcm9wcy5tb3VzZVVwLFxyXG4gICAgICBvbk1vdXNlTW92ZTogdGhpcy5wcm9wcy5tb3VzZU1vdmVcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxjYW52YXMgey4uLmNhbnZhc0F0dHJpYnV0ZXN9IGNsYXNzTmFtZT1cImNhbnZhc1wiIHJlZj17KGM6IGFueSkgPT4gaXNGYWxzeShjKSA/IHRoaXMucHJvcHMuY29udGV4dFJlZihjLmdldENvbnRleHQoJzJkJykpIDogbnVsbH0vPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKiB1dGlsaXR5IGZ1bmN0aW9uIHRvIGpvaW4gdGhlIGNzcyBjbGFzcyBuYW1lcyAqL1xyXG5leHBvcnQgY29uc3Qgam9pbkNsYXNzZXMgPSAoLi4uY2xhc3NOYW1lcyk6IGFueSA9PlxyXG4gIGNsYXNzTmFtZXNcclxuICAgIC5maWx0ZXIoKG5hbWUpID0+ICEhaXNGYWxzeShuYW1lKSlcclxuICAgIC5qb2luKCcgJylcclxuICAgIC50cmltKClcclxuXHJcbmV4cG9ydCBjb25zdCBwcmVwYXJlSGVhZGVycyA9ICgpOiBhbnkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICB9XHJcbiAgcmV0dXJuIGhlYWRlcnNcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzRmFsc3kgPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IGZhbHNlICYmIHZhbHVlICE9PSAwXHJcbiIsIi8qIHpsaWIuanMgLS0gSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHpsaWIuXHJcbiAgVmVyc2lvbjogMC4yLjBcclxuICBMYXN0TW9kaWZpZWQ6IEFwciAxMiAyMDEyXHJcbiAgQ29weXJpZ2h0IChDKSAyMDEyIE1hc2FuYW8gSXp1bW8gPGl6QG9uaWNvcy5jby5qcD5cclxuXHJcbiAgVGhlIG9yaWdpbmFsIGNvcHlyaWdodCBub3RpY2UgKHpsaWIgMS4yLjYpOlxyXG5cclxuICBDb3B5cmlnaHQgKEMpIDE5OTUtMjAxMiBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXHJcblxyXG4gIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXHJcbiAgd2FycmFudHkuICBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xyXG4gIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXHJcblxyXG4gIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxyXG4gIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcclxuICBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XHJcblxyXG4gIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XHJcbiAgICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcclxuICAgICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcclxuICAgICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxyXG4gIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXHJcbiAgICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxyXG4gIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXHJcblxyXG4gIEplYW4tbG91cCBHYWlsbHkgICAgICAgIE1hcmsgQWRsZXJcclxuICBqbG91cEBnemlwLm9yZyAgICAgICAgICBtYWRsZXJAYWx1bW5pLmNhbHRlY2guZWR1XHJcblxyXG5cclxuICBUaGUgZGF0YSBmb3JtYXQgdXNlZCBieSB0aGUgemxpYiBsaWJyYXJ5IGlzIGRlc2NyaWJlZCBieSBSRkNzIChSZXF1ZXN0IGZvclxyXG4gIENvbW1lbnRzKSAxOTUwIHRvIDE5NTIgaW4gdGhlIGZpbGVzIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzE5NTBcclxuICAoemxpYiBmb3JtYXQpLCByZmMxOTUxIChkZWZsYXRlIGZvcm1hdCkgYW5kIHJmYzE5NTIgKGd6aXAgZm9ybWF0KS5cclxuKi9cclxuXHJcbnZhciBaTElCID0gKCBaTElCIHx8IHt9ICk7IC8vIFpMSUIgbmFtZXNwYWNlIGluaXRpYWxpemF0aW9uXHJcblxyXG4vLyBjb21tb24gZGVmaW5pdGlvbnNcclxuaWYodHlwZW9mIFpMSUIuY29tbW9uX2luaXRpYWxpemVkID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgWkxJQi5aX05PX0ZMVVNIICAgICAgPSAwO1xyXG4gICAgWkxJQi5aX1BBUlRJQUxfRkxVU0ggPSAxO1xyXG4gICAgWkxJQi5aX1NZTkNfRkxVU0ggICAgPSAyO1xyXG4gICAgWkxJQi5aX0ZVTExfRkxVU0ggICAgPSAzO1xyXG4gICAgWkxJQi5aX0ZJTklTSCAgICAgICAgPSA0O1xyXG4gICAgWkxJQi5aX0JMT0NLICAgICAgICAgPSA1O1xyXG4gICAgWkxJQi5aX1RSRUVTICAgICAgICAgPSA2O1xyXG4gICAgLyogQWxsb3dlZCBmbHVzaCB2YWx1ZXM7IHNlZSBkZWZsYXRlKCkgYW5kIGluZmxhdGUoKSBiZWxvdyBmb3IgZGV0YWlscyAqL1xyXG5cclxuICAgIFpMSUIuWl9PSyAgICAgICAgICAgPSAgMDtcclxuICAgIFpMSUIuWl9TVFJFQU1fRU5EICAgPSAgMTtcclxuICAgIFpMSUIuWl9ORUVEX0RJQ1QgICAgPSAgMjtcclxuICAgIFpMSUIuWl9FUlJOTyAgICAgICAgPSAoLTEpO1xyXG4gICAgWkxJQi5aX1NUUkVBTV9FUlJPUiA9ICgtMik7XHJcbiAgICBaTElCLlpfREFUQV9FUlJPUiAgID0gKC0zKTtcclxuICAgIFpMSUIuWl9NRU1fRVJST1IgICAgPSAoLTQpO1xyXG4gICAgWkxJQi5aX0JVRl9FUlJPUiAgICA9ICgtNSk7XHJcbiAgICBaTElCLlpfVkVSU0lPTl9FUlJPUiA9ICgtNik7XHJcbiAgICAvKiBSZXR1cm4gY29kZXMgZm9yIHRoZSBjb21wcmVzc2lvbi9kZWNvbXByZXNzaW9uIGZ1bmN0aW9ucy4gTmVnYXRpdmUgdmFsdWVzXHJcbiAgICAgKiBhcmUgZXJyb3JzLCBwb3NpdGl2ZSB2YWx1ZXMgYXJlIHVzZWQgZm9yIHNwZWNpYWwgYnV0IG5vcm1hbCBldmVudHMuXHJcbiAgICAgKi9cclxuXHJcbiAgICBaTElCLlpfREVGTEFURUQgPSA4OyAvKiBUaGUgZGVmbGF0ZSBjb21wcmVzc2lvbiBtZXRob2QgKHRoZSBvbmx5IG9uZSBzdXBwb3J0ZWQgaW4gdGhpcyB2ZXJzaW9uKSAqL1xyXG5cclxuICAgIC8qKlxyXG5cdCAqIHpfc3RyZWFtIGNvbnN0cnVjdG9yXHJcblx0ICogQGNvbnN0cnVjdG9yXHJcblx0ICovXHJcblx0WkxJQi56X3N0cmVhbSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLm5leHRfaW4gPSAwOyAgICAgICAgLyogbmV4dCBpbnB1dCBieXRlICovXHJcblx0XHRcdHRoaXMuYXZhaWxfaW4gPSAwOyAgICAgICAvKiBudW1iZXIgb2YgYnl0ZXMgYXZhaWxhYmxlIGluIGlucHV0X2RhdGEgKi9cclxuXHRcdFx0dGhpcy50b3RhbF9pbiA9IDA7ICAgICAgIC8qIHRvdGFsIG51bWJlciBvZiBpbnB1dCBieXRlcyByZWFkIHNvIGZhciAqL1xyXG5cclxuXHRcdFx0dGhpcy5uZXh0X291dCA9IDA7ICAgICAgIC8qIG5leHQgb3V0cHV0IGJ5dGUgKi9cclxuXHRcdFx0dGhpcy5hdmFpbF9vdXQgPSAwOyAgICAgIC8qIHJlbWFpbmluZyBmcmVlIHNwYWNlIGF0IG5leHRfb3V0ICovXHJcblx0XHRcdHRoaXMudG90YWxfb3V0ID0gMDsgICAgICAvKiB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgb3V0cHV0IHNvIGZhciAqL1xyXG5cclxuXHRcdFx0dGhpcy5tc2cgPSBudWxsOyAgICAgICAgIC8qIGxhc3QgZXJyb3IgbWVzc2FnZSwgbnVsbCBpZiBubyBlcnJvciAqL1xyXG5cdFx0XHR0aGlzLnN0YXRlID0gbnVsbDsgICAgICAgLyogbm90IHZpc2libGUgYnkgYXBwbGljYXRpb25zICovXHJcblxyXG5cdFx0XHR0aGlzLmRhdGFfdHlwZSA9IDA7ICAgICAgLyogYmVzdCBndWVzcyBhYm91dCB0aGUgZGF0YSB0eXBlOiBiaW5hcnkgb3IgdGV4dCAqL1xyXG5cdFx0XHR0aGlzLmFkbGVyID0gMDsgICAgICAgICAgLyogVE9ETzogYWRsZXIzMiB2YWx1ZSBvZiB0aGUgdW5jb21wcmVzc2VkIGRhdGEgKi9cclxuXHJcblx0XHRcdC8vIHpsaWIuanNcclxuXHRcdFx0dGhpcy5pbnB1dF9kYXRhID0gJyc7ICAgIC8qIGlucHV0IGRhdGEgKi9cclxuXHRcdFx0dGhpcy5vdXRwdXRfZGF0YSA9ICcnOyAgIC8qIG91dHB1dCBkYXRhICovXHJcblx0XHRcdHRoaXMuZXJyb3IgPSAwOyAgICAgICAgICAvKiBlcnJvciBjb2RlICovXHJcblx0XHRcdHRoaXMuY2hlY2tzdW1fZnVuY3Rpb24gPSBudWxsOyAvKiBjcmMzMihmb3IgZ3ppcCkgb3IgYWRsZXIzMihmb3IgemxpYikgKi9cclxuXHR9O1xyXG5cclxuICAgIC8qKlxyXG5cdCAqIFRPRE9cclxuXHQgKiBAY29uc3RydWN0b3JcclxuXHQgKi9cclxuXHRaTElCLmd6X2hlYWRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy50ZXh0ID0gMDsgICAgICAvKiB0cnVlIGlmIGNvbXByZXNzZWQgZGF0YSBiZWxpZXZlZCB0byBiZSB0ZXh0ICovXHJcblx0ICAgIHRoaXMudGltZSA9IDA7ICAgICAgLyogbW9kaWZpY2F0aW9uIHRpbWUgKi9cclxuXHRcdHRoaXMueGZsYWdzID0gMDsgICAgLyogZXh0cmEgZmxhZ3MgKG5vdCB1c2VkIHdoZW4gd3JpdGluZyBhIGd6aXAgZmlsZSkgKi9cclxuXHRcdHRoaXMub3MgPSAweGZmOyAgICAgLyogb3BlcmF0aW5nIHN5c3RlbSAqL1xyXG5cdFx0dGhpcy5leHRyYSA9IG51bGw7ICAvKiBleHRyYSBmaWVsZCBzdHJpbmcgb3IgbnVsbCBpZiBub25lICovXHJcblx0XHR0aGlzLmV4dHJhX2xlbiA9IDA7IC8qIHRoaXMuZXh0cmEubGVuZ3RoIChvbmx5IHdoZW4gcmVhZGluZyBoZWFkZXIpICovXHJcblx0XHR0aGlzLmV4dHJhX21heCA9IDA7IC8qIHNwYWNlIGF0IGV4dHJhIChvbmx5IHdoZW4gcmVhZGluZyBoZWFkZXIpICovXHJcblx0XHR0aGlzLm5hbWUgPSBudWxsOyAgIC8qIGZpbGUgbmFtZSBzdHJpbmcgb3IgbnVsbCBpZiBub25lICovXHJcblx0XHR0aGlzLm5hbWVfbWF4ID0gMDsgIC8qIHNwYWNlIGF0IG5hbWUgKG9ubHkgd2hlbiByZWFkaW5nIGhlYWRlcikgKi9cclxuXHRcdHRoaXMuY29tbWVudCA9IG51bGw7IC8qIGNvbW1lbnQgc3RyaW5nIG9yIG51bGwgaWYgbm9uZSAqL1xyXG5cdFx0dGhpcy5jb21tX21heCA9IDA7ICAvKiBzcGFjZSBhdCBjb21tZW50IChvbmx5IHdoZW4gcmVhZGluZyBoZWFkZXIpICovXHJcblx0XHR0aGlzLmhjcmMgPSAwOyAgICAgIC8qIHRydWUgaWYgdGhlcmUgd2FzIG9yIHdpbGwgYmUgYSBoZWFkZXIgY3JjICovXHJcblx0XHR0aGlzLmRvbmUgPSAwOyAgICAgIC8qIHRydWUgd2hlbiBkb25lIHJlYWRpbmcgZ3ppcCBoZWFkZXIgKG5vdCB1c2VkXHJcblx0XHRcdFx0XHRcdFx0ICAgd2hlbiB3cml0aW5nIGEgZ3ppcCBmaWxlKSAqL1xyXG5cdH07XHJcblxyXG5cdFpMSUIuY29tbW9uX2luaXRpYWxpemVkID0gdHJ1ZTtcclxufSAvLyBjb21tb24gZGVmaW5pdGlvbnNcclxuLyogemxpYi1pbmZsYXRlLmpzIC0tIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gZm9yIHRoZSB6bGliIGluZmxhdGUuXHJcbiAgVmVyc2lvbjogMC4yLjBcclxuICBMYXN0TW9kaWZpZWQ6IEFwciAxMiAyMDEyXHJcbiAgQ29weXJpZ2h0IChDKSAyMDEyIE1hc2FuYW8gSXp1bW8gPGl6QG9uaWNvcy5jby5qcD5cclxuXHJcbiAgVGhpcyBsaWJyYXJ5IGlzIG9uZSBvZiB0aGUgSmF2YVNjcmlwdCB6bGliIGltcGxlbWVudGF0aW9uLlxyXG4gIFNvbWUgQVBJJ3MgYXJlIG1vZGlmaWVkIGZyb20gdGhlIG9yaWdpbmFsLlxyXG4gIE9ubHkgaW5mbGF0ZSBBUEkgaXMgaW1wbGVtZW50ZWQuXHJcblxyXG4gIFRoZSBvcmlnaW5hbCBjb3B5cmlnaHQgbm90aWNlICh6bGliIDEuMi42KTpcclxuXHJcbiAgQ29weXJpZ2h0IChDKSAxOTk1LTIwMTIgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxyXG5cclxuICBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxyXG4gIHdhcnJhbnR5LiAgSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcclxuICBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxyXG5cclxuICBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcclxuICBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XHJcbiAgZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxyXG5cclxuICAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxyXG4gICAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXHJcbiAgICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXHJcbiAgICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cclxuICAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxyXG4gICAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cclxuICAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxyXG5cclxuICBKZWFuLWxvdXAgR2FpbGx5ICAgICAgICBNYXJrIEFkbGVyXHJcbiAgamxvdXBAZ3ppcC5vcmcgICAgICAgICAgbWFkbGVyQGFsdW1uaS5jYWx0ZWNoLmVkdVxyXG5cclxuXHJcbiAgVGhlIGRhdGEgZm9ybWF0IHVzZWQgYnkgdGhlIHpsaWIgbGlicmFyeSBpcyBkZXNjcmliZWQgYnkgUkZDcyAoUmVxdWVzdCBmb3JcclxuICBDb21tZW50cykgMTk1MCB0byAxOTUyIGluIHRoZSBmaWxlcyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMxOTUwXHJcbiAgKHpsaWIgZm9ybWF0KSwgcmZjMTk1MSAoZGVmbGF0ZSBmb3JtYXQpIGFuZCByZmMxOTUyIChnemlwIGZvcm1hdCkuXHJcbiovXHJcblxyXG4vKlxyXG4gICAgICAgICAgICAgICAgICAgICAgIEFQSSBkb2N1bWVudGF0aW9uXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5Vc2FnZTogel9zdHJlYW0gPSBaTElCLmluZmxhdGVJbml0KFt3aW5kb3dCaXRzXSk7XHJcblxyXG4gICAgIENyZWF0ZSB0aGUgc3RyZWFtIG9iamVjdCBmb3IgZGVjb21wcmVzc2lvbi5cclxuICAgICBTZWUgemxpYi5oIGZvciB3aW5kb3dCaXRzIGluZm9ybWF0aW9uLlxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblVzYWdlOiBkZWNvZGVkX3N0cmluZyA9IHpfc3RyZWFtLmluZmxhdGUoZW5jb2RlZF9zdHJpbmcgWywge09QVElPTlMuLi59XSk7XHJcblxyXG5PUFRJT05TOlxyXG4gICAgbmV4dF9pbjogZGVjb2RlIHN0YXJ0IG9mZnNldCBmb3IgZW5jb2RlZF9zdHJpbmcuXHJcblxyXG4gICAgYXZhaWxfaW46IC8vIFRPRE8gZG9jdW1lbnQuICBTZWUgemxpYi5oIGZvciB0aGUgaW5mb3JtYXRpb24uXHJcblxyXG4gICAgYXZhaWxfb3V0OiAvLyBUT0RPIGRvY3VtZW50LiAgU2VlIHpsaWIuaCBmb3IgdGhlIGluZm9ybWF0aW9uLlxyXG5cclxuICAgIGZsdXNoOiAvLyBUT0RPIGRvY3VtZW50LiAgU2VlIHpsaWIuaCBmb3IgdGhlIGluZm9ybWF0aW9uLlxyXG5cclxuRXg6IGRlY29kZWRfc3RyaW5nID0gel9zdHJlYW0uaW5mbGF0ZShlbmNvZGVkX3N0cmluZyk7XHJcbiAgICBkZWNvZGVkX3N0cmluZyA9IHpfc3RyZWFtLmluZmxhdGUoZW5jb2RlZF9zdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7bmV4dF9pbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbF9pbjogZW5jb2RlZF9zdHJpbmcubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsX291dDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVzaDogWkxJQi5aX05PX0ZMVVNIfSk7XHJcblxyXG4gICAgIFNlZSB6bGliLmggZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuVXNhZ2U6IHpfc3RyZWFtLmluZmxhdGVSZXNldCgpO1xyXG4gICAgVE9ETyBkb2N1bWVudFxyXG5cclxuKi9cclxuXHJcbmlmKCB0eXBlb2YgWkxJQiA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcbiAgICBhbGVydCgnWkxJQiBpcyBub3QgZGVmaW5lZC4gIFNSQyB6bGliLmpzIGJlZm9yZSB6bGliLWluZmxhdGUuanMnKVxyXG59XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblxyXG4vKiBpbmZsYXRlLmMgLS0gemxpYiBkZWNvbXByZXNzaW9uXHJcbiAqIENvcHlyaWdodCAoQykgMTk5NS0yMDExIE1hcmsgQWRsZXJcclxuICogRm9yIGNvbmRpdGlvbnMgb2YgZGlzdHJpYnV0aW9uIGFuZCB1c2UsIHNlZSBjb3B5cmlnaHQgbm90aWNlIGluIHpsaWIuaFxyXG4gKi9cclxuXHJcbnZhciBERUZfV0JJVFMgPSAxNTtcclxuXHJcbi8vIGluZmxhdGVfbW9kZVxyXG52YXIgSEVBRCAgICAgPSAgMDsgLyogaTogd2FpdGluZyBmb3IgbWFnaWMgaGVhZGVyICovXHJcbnZhciBGTEFHUyAgICA9ICAxOyAvKiBpOiB3YWl0aW5nIGZvciBtZXRob2QgYW5kIGZsYWdzIChnemlwKSAqL1xyXG52YXIgVElNRSAgICAgPSAgMjsgLyogaTogd2FpdGluZyBmb3IgbW9kaWZpY2F0aW9uIHRpbWUgKGd6aXApICovXHJcbnZhciBPUyAgICAgICA9ICAzOyAvKiBpOiB3YWl0aW5nIGZvciBleHRyYSBmbGFncyBhbmQgb3BlcmF0aW5nIHN5c3RlbSAoZ3ppcCkgKi9cclxudmFyIEVYTEVOICAgID0gIDQ7IC8qIGk6IHdhaXRpbmcgZm9yIGV4dHJhIGxlbmd0aCAoZ3ppcCkgKi9cclxudmFyIEVYVFJBICAgID0gIDU7IC8qIGk6IHdhaXRpbmcgZm9yIGV4dHJhIGJ5dGVzIChnemlwKSAqL1xyXG52YXIgTkFNRSAgICAgPSAgNjsgLyogaTogd2FpdGluZyBmb3IgZW5kIG9mIGZpbGUgbmFtZSAoZ3ppcCkgKi9cclxudmFyIENPTU1FTlQgID0gIDc7IC8qIGk6IHdhaXRpbmcgZm9yIGVuZCBvZiBjb21tZW50IChnemlwKSAqL1xyXG52YXIgSENSQyAgICAgPSAgODsgLyogaTogd2FpdGluZyBmb3IgaGVhZGVyIGNyYyAoZ3ppcCkgKi9cclxudmFyIERJQ1RJRCAgID0gIDk7IC8qIGk6IHdhaXRpbmcgZm9yIGRpY3Rpb25hcnkgY2hlY2sgdmFsdWUgKi9cclxudmFyIERJQ1QgICAgID0gMTA7IC8qIHdhaXRpbmcgZm9yIGluZmxhdGVTZXREaWN0aW9uYXJ5KCkgY2FsbCAqL1xyXG52YXIgVFlQRSAgICAgPSAxMTsgLyogaTogd2FpdGluZyBmb3IgdHlwZSBiaXRzLCBpbmNsdWRpbmcgbGFzdC1mbGFnIGJpdCAqL1xyXG52YXIgVFlQRURPICAgPSAxMjsgLyogaTogc2FtZSwgYnV0IHNraXAgY2hlY2sgdG8gZXhpdCBpbmZsYXRlIG9uIG5ldyBibG9jayAqL1xyXG52YXIgU1RPUkVEICAgPSAxMzsgLyogaTogd2FpdGluZyBmb3Igc3RvcmVkIHNpemUgKGxlbmd0aCBhbmQgY29tcGxlbWVudCkgKi9cclxudmFyIENPUFlfICAgID0gMTQ7IC8qIGkvbzogc2FtZSBhcyBDT1BZIGJlbG93LCBidXQgb25seSBmaXJzdCB0aW1lIGluICovXHJcbnZhciBDT1BZICAgICA9IDE1OyAvKiBpL286IHdhaXRpbmcgZm9yIGlucHV0IG9yIG91dHB1dCB0byBjb3B5IHN0b3JlZCBibG9jayAqL1xyXG52YXIgVEFCTEUgICAgPSAxNjsgLyogaTogd2FpdGluZyBmb3IgZHluYW1pYyBibG9jayB0YWJsZSBsZW5ndGhzICovXHJcbnZhciBMRU5MRU5TICA9IDE3OyAvKiBpOiB3YWl0aW5nIGZvciBjb2RlIGxlbmd0aCBjb2RlIGxlbmd0aHMgKi9cclxudmFyIENPREVMRU5TID0gMTg7IC8qIGk6IHdhaXRpbmcgZm9yIGxlbmd0aC9saXQgYW5kIGRpc3RhbmNlIGNvZGUgbGVuZ3RocyAqL1xyXG52YXIgTEVOXyAgICAgPSAxOTsgLyogaTogc2FtZSBhcyBMRU4gYmVsb3csIGJ1dCBvbmx5IGZpcnN0IHRpbWUgaW4gKi9cclxudmFyIExFTiAgICAgID0gMjA7IC8qIGk6IHdhaXRpbmcgZm9yIGxlbmd0aC9saXQvZW9iIGNvZGUgKi9cclxudmFyIExFTkVYVCAgID0gMjE7IC8qIGk6IHdhaXRpbmcgZm9yIGxlbmd0aCBleHRyYSBiaXRzICovXHJcbnZhciBESVNUICAgICA9IDIyOyAvKiBpOiB3YWl0aW5nIGZvciBkaXN0YW5jZSBjb2RlICovXHJcbnZhciBESVNURVhUICA9IDIzOyAvKiBpOiB3YWl0aW5nIGZvciBkaXN0YW5jZSBleHRyYSBiaXRzICovXHJcbnZhciBNQVRDSCAgICA9IDI0OyAvKiBvOiB3YWl0aW5nIGZvciBvdXRwdXQgc3BhY2UgdG8gY29weSBzdHJpbmcgKi9cclxudmFyIExJVCAgICAgID0gMjU7IC8qIG86IHdhaXRpbmcgZm9yIG91dHB1dCBzcGFjZSB0byB3cml0ZSBsaXRlcmFsICovXHJcbnZhciBDSEVDSyAgICA9IDI2OyAvKiBpOiB3YWl0aW5nIGZvciAzMi1iaXQgY2hlY2sgdmFsdWUgKi9cclxudmFyIExFTkdUSCAgID0gMjc7IC8qIGk6IHdhaXRpbmcgZm9yIDMyLWJpdCBsZW5ndGggKGd6aXApICovXHJcbnZhciBET05FICAgICA9IDI4OyAvKiBmaW5pc2hlZCBjaGVjaywgZG9uZSAtLSByZW1haW4gaGVyZSB1bnRpbCByZXNldCAqL1xyXG52YXIgQkFEICAgICAgPSAyOTsgLyogZ290IGEgZGF0YSBlcnJvciAtLSByZW1haW4gaGVyZSB1bnRpbCByZXNldCAqL1xyXG52YXIgTUVNICAgICAgPSAzMDsgLyogZ290IGFuIGluZmxhdGUoKSBtZW1vcnkgZXJyb3IgLS0gcmVtYWluIGhlcmUgdW50aWwgcmVzZXQgKi9cclxudmFyIFNZTkMgICAgID0gMzE7IC8qIGxvb2tpbmcgZm9yIHN5bmNocm9uaXphdGlvbiBieXRlcyB0byByZXN0YXJ0IGluZmxhdGUoKSAqL1xyXG5cclxuLyogTWF4aW11bSBzaXplIG9mIHRoZSBkeW5hbWljIHRhYmxlLiAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGNvZGUgc3RydWN0dXJlcyBpc1xyXG4gICAxNDQ0LCB3aGljaCBpcyB0aGUgc3VtIG9mIDg1MiBmb3IgbGl0ZXJhbC9sZW5ndGggY29kZXMgYW5kIDU5MiBmb3IgZGlzdGFuY2VcclxuICAgY29kZXMuICBUaGVzZSB2YWx1ZXMgd2VyZSBmb3VuZCBieSBleGhhdXN0aXZlIHNlYXJjaGVzIHVzaW5nIHRoZSBwcm9ncmFtXHJcbiAgIGV4YW1wbGVzL2Vub3VnaC5jIGZvdW5kIGluIHRoZSB6bGliIGRpc3RyaWJ0dXRpb24uICBUaGUgYXJndW1lbnRzIHRvIHRoYXRcclxuICAgcHJvZ3JhbSBhcmUgdGhlIG51bWJlciBvZiBzeW1ib2xzLCB0aGUgaW5pdGlhbCByb290IHRhYmxlIHNpemUsIGFuZCB0aGVcclxuICAgbWF4aW11bSBiaXQgbGVuZ3RoIG9mIGEgY29kZS4gIFwiZW5vdWdoIDI4NiA5IDE1XCIgZm9yIGxpdGVyYWwvbGVuZ3RoIGNvZGVzXHJcbiAgIHJldHVybnMgcmV0dXJucyA4NTIsIGFuZCBcImVub3VnaCAzMCA2IDE1XCIgZm9yIGRpc3RhbmNlIGNvZGVzIHJldHVybnMgNTkyLlxyXG4gICBUaGUgaW5pdGlhbCByb290IHRhYmxlIHNpemUgKDkgb3IgNikgaXMgZm91bmQgaW4gdGhlIGZpZnRoIGFyZ3VtZW50IG9mIHRoZVxyXG4gICBpbmZsYXRlX3RhYmxlKCkgY2FsbHMgaW4gaW5mbGF0ZS5jIGFuZCBpbmZiYWNrLmMuICBJZiB0aGUgcm9vdCB0YWJsZSBzaXplIGlzXHJcbiAgIGNoYW5nZWQsIHRoZW4gdGhlc2UgbWF4aW11bSBzaXplcyB3b3VsZCBiZSBuZWVkIHRvIGJlIHJlY2FsY3VsYXRlZCBhbmRcclxuICAgdXBkYXRlZC4gKi9cclxudmFyIEVOT1VHSF9MRU5TID0gODUyO1xyXG52YXIgRU5PVUdIX0RJU1RTID0gNTkyO1xyXG52YXIgRU5PVUdIID0gKEVOT1VHSF9MRU5TICsgRU5PVUdIX0RJU1RTKTtcclxuXHJcbi8qIFR5cGUgb2YgY29kZSB0byBidWlsZCBmb3IgaW5mbGF0ZV90YWJsZSgpICovXHJcbnZhciBDT0RFUyA9IDA7XHJcbnZhciBMRU5TID0gMTtcclxudmFyIERJU1RTID0gMjtcclxuXHJcblxyXG5cclxudmFyIGluZmxhdGVfdGFibGVfbGJhc2UgPSBbIC8qIExlbmd0aCBjb2RlcyAyNTcuLjI4NSBiYXNlICovXHJcbiAgICAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEzLCAxNSwgMTcsIDE5LCAyMywgMjcsIDMxLFxyXG4gICAgMzUsIDQzLCA1MSwgNTksIDY3LCA4MywgOTksIDExNSwgMTMxLCAxNjMsIDE5NSwgMjI3LCAyNTgsIDAsIDBdO1xyXG52YXIgaW5mbGF0ZV90YWJsZV9sZXh0ID0gWyAvKiBMZW5ndGggY29kZXMgMjU3Li4yODUgZXh0cmEgKi9cclxuICAgIDE2LCAxNiwgMTYsIDE2LCAxNiwgMTYsIDE2LCAxNiwgMTcsIDE3LCAxNywgMTcsIDE4LCAxOCwgMTgsIDE4LFxyXG4gICAgMTksIDE5LCAxOSwgMTksIDIwLCAyMCwgMjAsIDIwLCAyMSwgMjEsIDIxLCAyMSwgMTYsIDIwMywgNjldO1xyXG52YXIgaW5mbGF0ZV90YWJsZV9kYmFzZSA9IFsgLyogRGlzdGFuY2UgY29kZXMgMC4uMjkgYmFzZSAqL1xyXG4gICAgMSwgMiwgMywgNCwgNSwgNywgOSwgMTMsIDE3LCAyNSwgMzMsIDQ5LCA2NSwgOTcsIDEyOSwgMTkzLFxyXG4gICAgMjU3LCAzODUsIDUxMywgNzY5LCAxMDI1LCAxNTM3LCAyMDQ5LCAzMDczLCA0MDk3LCA2MTQ1LFxyXG4gICAgODE5MywgMTIyODksIDE2Mzg1LCAyNDU3NywgMCwgMF07XHJcbnZhciBpbmZsYXRlX3RhYmxlX2RleHQgPSBbIC8qIERpc3RhbmNlIGNvZGVzIDAuLjI5IGV4dHJhICovXHJcbiAgICAxNiwgMTYsIDE2LCAxNiwgMTcsIDE3LCAxOCwgMTgsIDE5LCAxOSwgMjAsIDIwLCAyMSwgMjEsIDIyLCAyMixcclxuICAgIDIzLCAyMywgMjQsIDI0LCAyNSwgMjUsIDI2LCAyNiwgMjcsIDI3LFxyXG4gICAgMjgsIDI4LCAyOSwgMjksIDY0LCA2NF07XHJcblxyXG4vKiBpbmZ0cmVlcy5jIC0tIGdlbmVyYXRlIEh1ZmZtYW4gdHJlZXMgZm9yIGVmZmljaWVudCBkZWNvZGluZ1xyXG4gKiBDb3B5cmlnaHQgKEMpIDE5OTUtMjAxMiBNYXJrIEFkbGVyXHJcbiAqIEZvciBjb25kaXRpb25zIG9mIGRpc3RyaWJ1dGlvbiBhbmQgdXNlLCBzZWUgY29weXJpZ2h0IG5vdGljZSBpbiB6bGliLmhcclxuICovXHJcblxyXG5aTElCLmluZmxhdGVfY29weXJpZ2h0ID1cclxuICAgJyBpbmZsYXRlIDEuMi42IENvcHlyaWdodCAxOTk1LTIwMTIgTWFyayBBZGxlciAnO1xyXG4vKlxyXG4gIElmIHlvdSB1c2UgdGhlIHpsaWIgbGlicmFyeSBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGlzIHdlbGNvbWVcclxuICBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB5b3VyIHByb2R1Y3QuIElmIGZvciBzb21lIHJlYXNvbiB5b3UgY2Fubm90XHJcbiAgaW5jbHVkZSBzdWNoIGFuIGFja25vd2xlZGdtZW50LCBJIHdvdWxkIGFwcHJlY2lhdGUgdGhhdCB5b3Uga2VlcCB0aGlzXHJcbiAgY29weXJpZ2h0IHN0cmluZyBpbiB0aGUgZXhlY3V0YWJsZSBvZiB5b3VyIHByb2R1Y3QuXHJcbiAqL1xyXG5cclxuLypcclxuICBCdWlsZCBhIHNldCBvZiB0YWJsZXMgdG8gZGVjb2RlIHRoZSBwcm92aWRlZCBjYW5vbmljYWwgSHVmZm1hbiBjb2RlLlxyXG4gIFRoZSBjb2RlIGxlbmd0aHMgYXJlIGxlbnNbMC4uY29kZXMtMV0uICBUaGUgcmVzdWx0IHN0YXJ0cyBhdCAqdGFibGUsXHJcbiAgd2hvc2UgaW5kaWNlcyBhcmUgMC4uMl5iaXRzLTEuICB3b3JrIGlzIGEgd3JpdGFibGUgYXJyYXkgb2YgYXQgbGVhc3RcclxuICBsZW5zIHNob3J0cywgd2hpY2ggaXMgdXNlZCBhcyBhIHdvcmsgYXJlYS4gIHR5cGUgaXMgdGhlIHR5cGUgb2YgY29kZVxyXG4gIHRvIGJlIGdlbmVyYXRlZCwgQ09ERVMsIExFTlMsIG9yIERJU1RTLiAgT24gcmV0dXJuLCB6ZXJvIGlzIHN1Y2Nlc3MsXHJcbiAgLTEgaXMgYW4gaW52YWxpZCBjb2RlLCBhbmQgKzEgbWVhbnMgdGhhdCBFTk9VR0ggaXNuJ3QgZW5vdWdoLiAgdGFibGVcclxuICBvbiByZXR1cm4gcG9pbnRzIHRvIHRoZSBuZXh0IGF2YWlsYWJsZSBlbnRyeSdzIGFkZHJlc3MuICBiaXRzIGlzIHRoZVxyXG4gIHJlcXVlc3RlZCByb290IHRhYmxlIGluZGV4IGJpdHMsIGFuZCBvbiByZXR1cm4gaXQgaXMgdGhlIGFjdHVhbCByb290XHJcbiAgdGFibGUgaW5kZXggYml0cy4gIEl0IHdpbGwgZGlmZmVyIGlmIHRoZSByZXF1ZXN0IGlzIGdyZWF0ZXIgdGhhbiB0aGVcclxuICBsb25nZXN0IGNvZGUgb3IgaWYgaXQgaXMgbGVzcyB0aGFuIHRoZSBzaG9ydGVzdCBjb2RlLlxyXG4qL1xyXG5mdW5jdGlvbiBpbmZsYXRlX3RhYmxlKHN0YXRlLCB0eXBlKVxyXG57XHJcbiAgICB2YXIgTUFYQklUUyA9IDE1O1xyXG4gICAgdmFyIHRhYmxlID0gc3RhdGUubmV4dDtcclxuICAgIHZhciBiaXRzID0gKHR5cGUgPT0gRElTVFMgPyBzdGF0ZS5kaXN0Yml0cyA6IHN0YXRlLmxlbmJpdHMpO1xyXG4gICAgdmFyIHdvcmsgPSBzdGF0ZS53b3JrO1xyXG4gICAgdmFyIGxlbnMgPSBzdGF0ZS5sZW5zO1xyXG4gICAgdmFyIGxlbnNfb2Zmc2V0ID0gKHR5cGUgPT0gRElTVFMgPyBzdGF0ZS5ubGVuIDogMCk7XHJcbiAgICB2YXIgc3RhdGVfY29kZXMgPSBzdGF0ZS5jb2RlcztcclxuICAgIHZhciBjb2RlcztcclxuICAgIGlmKHR5cGUgPT0gTEVOUylcclxuICAgICAgICBjb2RlcyA9IHN0YXRlLm5sZW47XHJcbiAgICBlbHNlIGlmKHR5cGUgPT0gRElTVFMpXHJcbiAgICAgICAgY29kZXMgPSBzdGF0ZS5uZGlzdDtcclxuICAgIGVsc2UgLy8gQ09ERVNcclxuICAgICAgICBjb2RlcyA9IDE5O1xyXG5cclxuICAgIHZhciBsZW47ICAgICAgICAgICAgICAgLyogYSBjb2RlJ3MgbGVuZ3RoIGluIGJpdHMgKi9cclxuICAgIHZhciBzeW07ICAgICAgICAgICAgICAgLyogaW5kZXggb2YgY29kZSBzeW1ib2xzICovXHJcbiAgICB2YXIgbWluLCBtYXg7ICAgICAgICAgIC8qIG1pbmltdW0gYW5kIG1heGltdW0gY29kZSBsZW5ndGhzICovXHJcbiAgICB2YXIgcm9vdDsgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBpbmRleCBiaXRzIGZvciByb290IHRhYmxlICovXHJcbiAgICB2YXIgY3VycjsgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBpbmRleCBiaXRzIGZvciBjdXJyZW50IHRhYmxlICovXHJcbiAgICB2YXIgZHJvcDsgICAgICAgICAgICAgIC8qIGNvZGUgYml0cyB0byBkcm9wIGZvciBzdWItdGFibGUgKi9cclxuICAgIHZhciBsZWZ0OyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIHByZWZpeCBjb2RlcyBhdmFpbGFibGUgKi9cclxuICAgIHZhciB1c2VkOyAgICAgICAgICAgICAgLyogY29kZSBlbnRyaWVzIGluIHRhYmxlIHVzZWQgKi9cclxuICAgIHZhciBodWZmOyAgICAgICAgICAgICAgLyogSHVmZm1hbiBjb2RlICovXHJcbiAgICB2YXIgaW5jcjsgICAgICAgICAgICAgIC8qIGZvciBpbmNyZW1lbnRpbmcgY29kZSwgaW5kZXggKi9cclxuICAgIHZhciBmaWxsOyAgICAgICAgICAgICAgLyogaW5kZXggZm9yIHJlcGxpY2F0aW5nIGVudHJpZXMgKi9cclxuICAgIHZhciBsb3c7ICAgICAgICAgICAgICAgLyogbG93IGJpdHMgZm9yIGN1cnJlbnQgcm9vdCBlbnRyeSAqL1xyXG4gICAgdmFyIG1hc2s7ICAgICAgICAgICAgICAvKiBtYXNrIGZvciBsb3cgcm9vdCBiaXRzICovXHJcbiAgICB2YXIgaGVyZTsgICAgICAgICAgICAgIC8qIHRhYmxlIGVudHJ5IGZvciBkdXBsaWNhdGlvbiAqL1xyXG4gICAgdmFyIG5leHQ7ICAgICAgICAgICAgICAvKiBuZXh0IGF2YWlsYWJsZSBzcGFjZSBpbiB0YWJsZSAqL1xyXG4gICAgdmFyIGJhc2U7ICAgICAgICAgICAgICAvKiBiYXNlIHZhbHVlIHRhYmxlIHRvIHVzZSAqL1xyXG4gICAgdmFyIGJhc2Vfb2Zmc2V0O1xyXG4gICAgdmFyIGV4dHJhOyAgICAgICAgICAgICAvKiBleHRyYSBiaXRzIHRhYmxlIHRvIHVzZSAqL1xyXG4gICAgdmFyIGV4dHJhX29mZnNldDtcclxuICAgIHZhciBlbmQ7ICAgICAgICAgICAgICAgICAgICAvKiB1c2UgYmFzZSBhbmQgZXh0cmEgZm9yIHN5bWJvbCA+IGVuZCAqL1xyXG4gICAgdmFyIGNvdW50ID0gbmV3IEFycmF5KE1BWEJJVFMrMSk7ICAgIC8qIG51bWJlciBvZiBjb2RlcyBvZiBlYWNoIGxlbmd0aCAqL1xyXG4gICAgdmFyIG9mZnMgPSBuZXcgQXJyYXkoTUFYQklUUysxKTsgICAgIC8qIG9mZnNldHMgaW4gdGFibGUgZm9yIGVhY2ggbGVuZ3RoICovXHJcblxyXG4gICAgLypcclxuICAgICAgUHJvY2VzcyBhIHNldCBvZiBjb2RlIGxlbmd0aHMgdG8gY3JlYXRlIGEgY2Fub25pY2FsIEh1ZmZtYW4gY29kZS4gIFRoZVxyXG4gICAgICBjb2RlIGxlbmd0aHMgYXJlIGxlbnNbMC4uY29kZXMtMV0uICBFYWNoIGxlbmd0aCBjb3JyZXNwb25kcyB0byB0aGVcclxuICAgICAgc3ltYm9scyAwLi5jb2Rlcy0xLiAgVGhlIEh1ZmZtYW4gY29kZSBpcyBnZW5lcmF0ZWQgYnkgZmlyc3Qgc29ydGluZyB0aGVcclxuICAgICAgc3ltYm9scyBieSBsZW5ndGggZnJvbSBzaG9ydCB0byBsb25nLCBhbmQgcmV0YWluaW5nIHRoZSBzeW1ib2wgb3JkZXJcclxuICAgICAgZm9yIGNvZGVzIHdpdGggZXF1YWwgbGVuZ3Rocy4gIFRoZW4gdGhlIGNvZGUgc3RhcnRzIHdpdGggYWxsIHplcm8gYml0c1xyXG4gICAgICBmb3IgdGhlIGZpcnN0IGNvZGUgb2YgdGhlIHNob3J0ZXN0IGxlbmd0aCwgYW5kIHRoZSBjb2RlcyBhcmUgaW50ZWdlclxyXG4gICAgICBpbmNyZW1lbnRzIGZvciB0aGUgc2FtZSBsZW5ndGgsIGFuZCB6ZXJvcyBhcmUgYXBwZW5kZWQgYXMgdGhlIGxlbmd0aFxyXG4gICAgICBpbmNyZWFzZXMuICBGb3IgdGhlIGRlZmxhdGUgZm9ybWF0LCB0aGVzZSBiaXRzIGFyZSBzdG9yZWQgYmFja3dhcmRzXHJcbiAgICAgIGZyb20gdGhlaXIgbW9yZSBuYXR1cmFsIGludGVnZXIgaW5jcmVtZW50IG9yZGVyaW5nLCBhbmQgc28gd2hlbiB0aGVcclxuICAgICAgZGVjb2RpbmcgdGFibGVzIGFyZSBidWlsdCBpbiB0aGUgbGFyZ2UgbG9vcCBiZWxvdywgdGhlIGludGVnZXIgY29kZXNcclxuICAgICAgYXJlIGluY3JlbWVudGVkIGJhY2t3YXJkcy5cclxuXHJcbiAgICAgIFRoaXMgcm91dGluZSBhc3N1bWVzLCBidXQgZG9lcyBub3QgY2hlY2ssIHRoYXQgYWxsIG9mIHRoZSBlbnRyaWVzIGluXHJcbiAgICAgIGxlbnNbXSBhcmUgaW4gdGhlIHJhbmdlIDAuLk1BWEJJVFMuICBUaGUgY2FsbGVyIG11c3QgYXNzdXJlIHRoaXMuXHJcbiAgICAgIDEuLk1BWEJJVFMgaXMgaW50ZXJwcmV0ZWQgYXMgdGhhdCBjb2RlIGxlbmd0aC4gIHplcm8gbWVhbnMgdGhhdCB0aGF0XHJcbiAgICAgIHN5bWJvbCBkb2VzIG5vdCBvY2N1ciBpbiB0aGlzIGNvZGUuXHJcblxyXG4gICAgICBUaGUgY29kZXMgYXJlIHNvcnRlZCBieSBjb21wdXRpbmcgYSBjb3VudCBvZiBjb2RlcyBmb3IgZWFjaCBsZW5ndGgsXHJcbiAgICAgIGNyZWF0aW5nIGZyb20gdGhhdCBhIHRhYmxlIG9mIHN0YXJ0aW5nIGluZGljZXMgZm9yIGVhY2ggbGVuZ3RoIGluIHRoZVxyXG4gICAgICBzb3J0ZWQgdGFibGUsIGFuZCB0aGVuIGVudGVyaW5nIHRoZSBzeW1ib2xzIGluIG9yZGVyIGluIHRoZSBzb3J0ZWRcclxuICAgICAgdGFibGUuICBUaGUgc29ydGVkIHRhYmxlIGlzIHdvcmtbXSwgd2l0aCB0aGF0IHNwYWNlIGJlaW5nIHByb3ZpZGVkIGJ5XHJcbiAgICAgIHRoZSBjYWxsZXIuXHJcblxyXG4gICAgICBUaGUgbGVuZ3RoIGNvdW50cyBhcmUgdXNlZCBmb3Igb3RoZXIgcHVycG9zZXMgYXMgd2VsbCwgaS5lLiBmaW5kaW5nXHJcbiAgICAgIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGxlbmd0aCBjb2RlcywgZGV0ZXJtaW5pbmcgaWYgdGhlcmUgYXJlIGFueVxyXG4gICAgICBjb2RlcyBhdCBhbGwsIGNoZWNraW5nIGZvciBhIHZhbGlkIHNldCBvZiBsZW5ndGhzLCBhbmQgbG9va2luZyBhaGVhZFxyXG4gICAgICBhdCBsZW5ndGggY291bnRzIHRvIGRldGVybWluZSBzdWItdGFibGUgc2l6ZXMgd2hlbiBidWlsZGluZyB0aGVcclxuICAgICAgZGVjb2RpbmcgdGFibGVzLlxyXG4gICAgKi9cclxuXHJcbiAgICAvKiBhY2N1bXVsYXRlIGxlbmd0aHMgZm9yIGNvZGVzIChhc3N1bWVzIGxlbnNbXSBhbGwgaW4gMC4uTUFYQklUUykgKi9cclxuICAgIGZvciAobGVuID0gMDsgbGVuIDw9IE1BWEJJVFM7IGxlbisrKVxyXG4gICAgICAgIGNvdW50W2xlbl0gPSAwO1xyXG4gICAgZm9yIChzeW0gPSAwOyBzeW0gPCBjb2Rlczsgc3ltKyspXHJcbiAgICAgICAgY291bnRbbGVuc1tsZW5zX29mZnNldCArIHN5bV1dKys7XHJcblxyXG4gICAgLyogYm91bmQgY29kZSBsZW5ndGhzLCBmb3JjZSByb290IHRvIGJlIHdpdGhpbiBjb2RlIGxlbmd0aHMgKi9cclxuICAgIHJvb3QgPSBiaXRzO1xyXG5cclxuICAgIGZvciAobWF4ID0gTUFYQklUUzsgbWF4ID49IDE7IG1heC0tKVxyXG4gICAgICAgIGlmIChjb3VudFttYXhdICE9IDApIGJyZWFrO1xyXG4gICAgaWYgKHJvb3QgPiBtYXgpIHJvb3QgPSBtYXg7XHJcbiAgICBpZiAobWF4ID09IDApIHtcclxuICAgICAgICAvKiBubyBzeW1ib2xzIHRvIGNvZGUgYXQgYWxsICovXHJcbiAgICAgICAgLyogaW52YWxpZCBjb2RlIG1hcmtlciAqL1xyXG4gICAgICAgIGhlcmUgPSB7b3A6NjQsIGJpdHM6MSwgdmFsOjB9O1xyXG4gICAgICAgIHN0YXRlX2NvZGVzW3RhYmxlKytdID0gaGVyZTsgLyogbWFrZSBhIHRhYmxlIHRvIGZvcmNlIGFuIGVycm9yICovXHJcbiAgICAgICAgc3RhdGVfY29kZXNbdGFibGUrK10gPSBoZXJlO1xyXG4gICAgICAgIGlmKHR5cGUgPT0gRElTVFMpIHN0YXRlLmRpc3RiaXRzID0gMTsgZWxzZSBzdGF0ZS5sZW5iaXRzID0gMTsgLy8gKmJpdHMgPSAxO1xyXG4gICAgICAgIHN0YXRlLm5leHQgPSB0YWJsZTtcclxuICAgICAgICByZXR1cm4gMDsgICAgIC8qIG5vIHN5bWJvbHMsIGJ1dCB3YWl0IGZvciBkZWNvZGluZyB0byByZXBvcnQgZXJyb3IgKi9cclxuICAgIH1cclxuICAgIGZvciAobWluID0gMTsgbWluIDwgbWF4OyBtaW4rKylcclxuICAgICAgICBpZiAoY291bnRbbWluXSAhPSAwKSBicmVhaztcclxuICAgIGlmIChyb290IDwgbWluKSByb290ID0gbWluO1xyXG5cclxuICAgIC8qIGNoZWNrIGZvciBhbiBvdmVyLXN1YnNjcmliZWQgb3IgaW5jb21wbGV0ZSBzZXQgb2YgbGVuZ3RocyAqL1xyXG4gICAgbGVmdCA9IDE7XHJcbiAgICBmb3IgKGxlbiA9IDE7IGxlbiA8PSBNQVhCSVRTOyBsZW4rKykge1xyXG4gICAgICAgIGxlZnQgPDw9IDE7XHJcbiAgICAgICAgbGVmdCAtPSBjb3VudFtsZW5dO1xyXG4gICAgICAgIGlmIChsZWZ0IDwgMCkgcmV0dXJuIC0xOyAgICAgICAgLyogb3Zlci1zdWJzY3JpYmVkICovXHJcbiAgICB9XHJcbiAgICBpZiAobGVmdCA+IDAgJiYgKHR5cGUgPT0gQ09ERVMgfHwgbWF4ICE9IDEpKSB7XHJcbiAgICAgICAgc3RhdGUubmV4dCA9IHRhYmxlO1xyXG4gICAgICAgIHJldHVybiAtMTsgICAgICAgICAgICAgICAgICAgICAgLyogaW5jb21wbGV0ZSBzZXQgKi9cclxuICAgIH1cclxuXHJcbiAgICAvKiBnZW5lcmF0ZSBvZmZzZXRzIGludG8gc3ltYm9sIHRhYmxlIGZvciBlYWNoIGxlbmd0aCBmb3Igc29ydGluZyAqL1xyXG4gICAgb2Zmc1sxXSA9IDA7XHJcbiAgICBmb3IgKGxlbiA9IDE7IGxlbiA8IE1BWEJJVFM7IGxlbisrKVxyXG4gICAgICAgIG9mZnNbbGVuICsgMV0gPSBvZmZzW2xlbl0gKyBjb3VudFtsZW5dO1xyXG5cclxuICAgIC8qIHNvcnQgc3ltYm9scyBieSBsZW5ndGgsIGJ5IHN5bWJvbCBvcmRlciB3aXRoaW4gZWFjaCBsZW5ndGggKi9cclxuICAgIGZvciAoc3ltID0gMDsgc3ltIDwgY29kZXM7IHN5bSsrKVxyXG4gICAgICAgIGlmIChsZW5zW2xlbnNfb2Zmc2V0ICsgc3ltXSAhPSAwKSB3b3JrW29mZnNbbGVuc1tsZW5zX29mZnNldCArIHN5bV1dKytdID0gc3ltO1xyXG5cclxuICAgIC8qXHJcbiAgICAgIENyZWF0ZSBhbmQgZmlsbCBpbiBkZWNvZGluZyB0YWJsZXMuICBJbiB0aGlzIGxvb3AsIHRoZSB0YWJsZSBiZWluZ1xyXG4gICAgICBmaWxsZWQgaXMgYXQgbmV4dCBhbmQgaGFzIGN1cnIgaW5kZXggYml0cy4gIFRoZSBjb2RlIGJlaW5nIHVzZWQgaXMgaHVmZlxyXG4gICAgICB3aXRoIGxlbmd0aCBsZW4uICBUaGF0IGNvZGUgaXMgY29udmVydGVkIHRvIGFuIGluZGV4IGJ5IGRyb3BwaW5nIGRyb3BcclxuICAgICAgYml0cyBvZmYgb2YgdGhlIGJvdHRvbS4gIEZvciBjb2RlcyB3aGVyZSBsZW4gaXMgbGVzcyB0aGFuIGRyb3AgKyBjdXJyLFxyXG4gICAgICB0aG9zZSB0b3AgZHJvcCArIGN1cnIgLSBsZW4gYml0cyBhcmUgaW5jcmVtZW50ZWQgdGhyb3VnaCBhbGwgdmFsdWVzIHRvXHJcbiAgICAgIGZpbGwgdGhlIHRhYmxlIHdpdGggcmVwbGljYXRlZCBlbnRyaWVzLlxyXG5cclxuICAgICAgcm9vdCBpcyB0aGUgbnVtYmVyIG9mIGluZGV4IGJpdHMgZm9yIHRoZSByb290IHRhYmxlLiAgV2hlbiBsZW4gZXhjZWVkc1xyXG4gICAgICByb290LCBzdWItdGFibGVzIGFyZSBjcmVhdGVkIHBvaW50ZWQgdG8gYnkgdGhlIHJvb3QgZW50cnkgd2l0aCBhbiBpbmRleFxyXG4gICAgICBvZiB0aGUgbG93IHJvb3QgYml0cyBvZiBodWZmLiAgVGhpcyBpcyBzYXZlZCBpbiBsb3cgdG8gY2hlY2sgZm9yIHdoZW4gYVxyXG4gICAgICBuZXcgc3ViLXRhYmxlIHNob3VsZCBiZSBzdGFydGVkLiAgZHJvcCBpcyB6ZXJvIHdoZW4gdGhlIHJvb3QgdGFibGUgaXNcclxuICAgICAgYmVpbmcgZmlsbGVkLCBhbmQgZHJvcCBpcyByb290IHdoZW4gc3ViLXRhYmxlcyBhcmUgYmVpbmcgZmlsbGVkLlxyXG5cclxuICAgICAgV2hlbiBhIG5ldyBzdWItdGFibGUgaXMgbmVlZGVkLCBpdCBpcyBuZWNlc3NhcnkgdG8gbG9vayBhaGVhZCBpbiB0aGVcclxuICAgICAgY29kZSBsZW5ndGhzIHRvIGRldGVybWluZSB3aGF0IHNpemUgc3ViLXRhYmxlIGlzIG5lZWRlZC4gIFRoZSBsZW5ndGhcclxuICAgICAgY291bnRzIGFyZSB1c2VkIGZvciB0aGlzLCBhbmQgc28gY291bnRbXSBpcyBkZWNyZW1lbnRlZCBhcyBjb2RlcyBhcmVcclxuICAgICAgZW50ZXJlZCBpbiB0aGUgdGFibGVzLlxyXG5cclxuICAgICAgdXNlZCBrZWVwcyB0cmFjayBvZiBob3cgbWFueSB0YWJsZSBlbnRyaWVzIGhhdmUgYmVlbiBhbGxvY2F0ZWQgZnJvbSB0aGVcclxuICAgICAgcHJvdmlkZWQgKnRhYmxlIHNwYWNlLiAgSXQgaXMgY2hlY2tlZCBmb3IgTEVOUyBhbmQgRElTVCB0YWJsZXMgYWdhaW5zdFxyXG4gICAgICB0aGUgY29uc3RhbnRzIEVOT1VHSF9MRU5TIGFuZCBFTk9VR0hfRElTVFMgdG8gZ3VhcmQgYWdhaW5zdCBjaGFuZ2VzIGluXHJcbiAgICAgIHRoZSBpbml0aWFsIHJvb3QgdGFibGUgc2l6ZSBjb25zdGFudHMuICBTZWUgdGhlIGNvbW1lbnRzIGluIGluZnRyZWVzLmhcclxuICAgICAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcblxyXG4gICAgICBzeW0gaW5jcmVtZW50cyB0aHJvdWdoIGFsbCBzeW1ib2xzLCBhbmQgdGhlIGxvb3AgdGVybWluYXRlcyB3aGVuXHJcbiAgICAgIGFsbCBjb2RlcyBvZiBsZW5ndGggbWF4LCBpLmUuIGFsbCBjb2RlcywgaGF2ZSBiZWVuIHByb2Nlc3NlZC4gIFRoaXNcclxuICAgICAgcm91dGluZSBwZXJtaXRzIGluY29tcGxldGUgY29kZXMsIHNvIGFub3RoZXIgbG9vcCBhZnRlciB0aGlzIG9uZSBmaWxsc1xyXG4gICAgICBpbiB0aGUgcmVzdCBvZiB0aGUgZGVjb2RpbmcgdGFibGVzIHdpdGggaW52YWxpZCBjb2RlIG1hcmtlcnMuXHJcbiAgICAqL1xyXG5cclxuICAgIC8qIHNldCB1cCBmb3IgY29kZSB0eXBlICovXHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgQ09ERVM6XHJcbiAgICAgICAgYmFzZSA9IGV4dHJhID0gd29yazsgICAgLyogZHVtbXkgdmFsdWUtLW5vdCB1c2VkICovXHJcbiAgICAgICAgYmFzZV9vZmZzZXQgPSAwO1xyXG4gICAgICAgIGV4dHJhX29mZnNldCA9IDA7XHJcbiAgICAgICAgZW5kID0gMTk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExFTlM6XHJcbiAgICAgICAgYmFzZSA9IGluZmxhdGVfdGFibGVfbGJhc2U7XHJcbiAgICAgICAgYmFzZV9vZmZzZXQgPSAtMjU3OyAvLyBiYXNlIC09IDI1NztcclxuICAgICAgICBleHRyYSA9IGluZmxhdGVfdGFibGVfbGV4dDtcclxuICAgICAgICBleHRyYV9vZmZzZXQgPSAtMjU3OyAvLyBleHRyYSAtPSAyNTc7XHJcbiAgICAgICAgZW5kID0gMjU2O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDogICAgICAgICAgICAvKiBESVNUUyAqL1xyXG4gICAgICAgIGJhc2UgPSBpbmZsYXRlX3RhYmxlX2RiYXNlO1xyXG4gICAgICAgIGV4dHJhID0gaW5mbGF0ZV90YWJsZV9kZXh0O1xyXG4gICAgICAgIGJhc2Vfb2Zmc2V0ID0gMDtcclxuICAgICAgICBleHRyYV9vZmZzZXQgPSAwO1xyXG4gICAgICAgIGVuZCA9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGluaXRpYWxpemUgc3RhdGUgZm9yIGxvb3AgKi9cclxuICAgIGh1ZmYgPSAwOyAgICAgICAgICAgICAgICAgICAvKiBzdGFydGluZyBjb2RlICovXHJcbiAgICBzeW0gPSAwOyAgICAgICAgICAgICAgICAgICAgLyogc3RhcnRpbmcgY29kZSBzeW1ib2wgKi9cclxuICAgIGxlbiA9IG1pbjsgICAgICAgICAgICAgICAgICAvKiBzdGFydGluZyBjb2RlIGxlbmd0aCAqL1xyXG4gICAgbmV4dCA9IHRhYmxlOyAgICAgICAgICAgICAgIC8qIGN1cnJlbnQgdGFibGUgdG8gZmlsbCBpbiAqL1xyXG4gICAgY3VyciA9IHJvb3Q7ICAgICAgICAgICAgICAgIC8qIGN1cnJlbnQgdGFibGUgaW5kZXggYml0cyAqL1xyXG4gICAgZHJvcCA9IDA7ICAgICAgICAgICAgICAgICAgIC8qIGN1cnJlbnQgYml0cyB0byBkcm9wIGZyb20gY29kZSBmb3IgaW5kZXggKi9cclxuICAgIGxvdyA9IC0xOyAgICAgICAgICAgICAgICAgICAvKiB0cmlnZ2VyIG5ldyBzdWItdGFibGUgd2hlbiBsZW4gPiByb290ICovXHJcbiAgICB1c2VkID0gMSA8PCByb290OyAgICAgICAgICAgLyogdXNlIHJvb3QgdGFibGUgZW50cmllcyAqL1xyXG4gICAgbWFzayA9IHVzZWQgLSAxOyAgICAgICAgICAgIC8qIG1hc2sgZm9yIGNvbXBhcmluZyBsb3cgKi9cclxuXHJcbiAgICAvKiBjaGVjayBhdmFpbGFibGUgdGFibGUgc3BhY2UgKi9cclxuICAgIGlmICgodHlwZSA9PSBMRU5TICYmIHVzZWQgPj0gRU5PVUdIX0xFTlMpIHx8XHJcbiAgICAgICAgKHR5cGUgPT0gRElTVFMgJiYgdXNlZCA+PSBFTk9VR0hfRElTVFMpKSB7XHJcbiAgICAgICAgc3RhdGUubmV4dCA9IHRhYmxlO1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHByb2Nlc3MgYWxsIGNvZGVzIGFuZCBtYWtlIHRhYmxlIGVudHJpZXMgKi9cclxuICAgIGZvciAoOzspIHtcclxuICAgICAgICAvKiBjcmVhdGUgdGFibGUgZW50cnkgKi9cclxuICAgICAgICBoZXJlID0ge29wOjAsIGJpdHM6bGVuIC0gZHJvcCwgdmFsOjB9O1xyXG4gICAgICAgIGlmICh3b3JrW3N5bV0gPCBlbmQpIHtcclxuICAgICAgICAgICAgaGVyZS52YWwgPSB3b3JrW3N5bV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdvcmtbc3ltXSA+IGVuZCkge1xyXG4gICAgICAgICAgICBoZXJlLm9wID0gZXh0cmFbZXh0cmFfb2Zmc2V0ICsgd29ya1tzeW1dXTtcclxuICAgICAgICAgICAgaGVyZS52YWwgPSBiYXNlW2Jhc2Vfb2Zmc2V0ICsgd29ya1tzeW1dXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhlcmUub3AgPSAzMiArIDY0OyAgICAgICAgIC8qIGVuZCBvZiBibG9jayAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogcmVwbGljYXRlIGZvciB0aG9zZSBpbmRpY2VzIHdpdGggbG93IGxlbiBiaXRzIGVxdWFsIHRvIGh1ZmYgKi9cclxuICAgICAgICBpbmNyID0gMSA8PCAobGVuIC0gZHJvcCk7XHJcbiAgICAgICAgZmlsbCA9IDEgPDwgY3VycjtcclxuICAgICAgICBtaW4gPSBmaWxsOyAgICAgICAgICAgICAgICAgLyogc2F2ZSBvZmZzZXQgdG8gbmV4dCB0YWJsZSAqL1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgZmlsbCAtPSBpbmNyO1xyXG4gICAgICAgICAgICBzdGF0ZV9jb2Rlc1tuZXh0ICsgKGh1ZmYgPj4+IGRyb3ApICsgZmlsbF0gPSBoZXJlO1xyXG4gICAgICAgIH0gd2hpbGUgKGZpbGwgIT0gMCk7XHJcblxyXG4gICAgICAgIC8qIGJhY2t3YXJkcyBpbmNyZW1lbnQgdGhlIGxlbi1iaXQgY29kZSBodWZmICovXHJcbiAgICAgICAgaW5jciA9IDEgPDwgKGxlbiAtIDEpO1xyXG4gICAgICAgIHdoaWxlIChodWZmICYgaW5jcilcclxuICAgICAgICAgICAgaW5jciA+Pj49IDE7XHJcbiAgICAgICAgaWYgKGluY3IgIT0gMCkge1xyXG4gICAgICAgICAgICBodWZmICY9IGluY3IgLSAxO1xyXG4gICAgICAgICAgICBodWZmICs9IGluY3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaHVmZiA9IDA7XHJcblxyXG4gICAgICAgIC8qIGdvIHRvIG5leHQgc3ltYm9sLCB1cGRhdGUgY291bnQsIGxlbiAqL1xyXG4gICAgICAgIHN5bSsrO1xyXG4gICAgICAgIGlmICgtLShjb3VudFtsZW5dKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChsZW4gPT0gbWF4KSBicmVhaztcclxuICAgICAgICAgICAgbGVuID0gbGVuc1tsZW5zX29mZnNldCArIHdvcmtbc3ltXV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBjcmVhdGUgbmV3IHN1Yi10YWJsZSBpZiBuZWVkZWQgKi9cclxuICAgICAgICBpZiAobGVuID4gcm9vdCAmJiAoaHVmZiAmIG1hc2spICE9IGxvdykge1xyXG4gICAgICAgICAgICAvKiBpZiBmaXJzdCB0aW1lLCB0cmFuc2l0aW9uIHRvIHN1Yi10YWJsZXMgKi9cclxuICAgICAgICAgICAgaWYgKGRyb3AgPT0gMClcclxuICAgICAgICAgICAgICAgIGRyb3AgPSByb290O1xyXG5cclxuICAgICAgICAgICAgLyogaW5jcmVtZW50IHBhc3QgbGFzdCB0YWJsZSAqL1xyXG4gICAgICAgICAgICBuZXh0ICs9IG1pbjsgICAgICAgICAgICAvKiBoZXJlIG1pbiBpcyAxIDw8IGN1cnIgKi9cclxuXHJcbiAgICAgICAgICAgIC8qIGRldGVybWluZSBsZW5ndGggb2YgbmV4dCB0YWJsZSAqL1xyXG4gICAgICAgICAgICBjdXJyID0gbGVuIC0gZHJvcDtcclxuICAgICAgICAgICAgbGVmdCA9ICgxIDw8IGN1cnIpO1xyXG4gICAgICAgICAgICB3aGlsZSAoY3VyciArIGRyb3AgPCBtYXgpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQgLT0gY291bnRbY3VyciArIGRyb3BdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnQgPD0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjdXJyKys7XHJcbiAgICAgICAgICAgICAgICBsZWZ0IDw8PSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBjaGVjayBmb3IgZW5vdWdoIHNwYWNlICovXHJcbiAgICAgICAgICAgIHVzZWQgKz0gMSA8PCBjdXJyO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT0gTEVOUyAmJiB1c2VkID49IEVOT1VHSF9MRU5TKSB8fFxyXG4gICAgICAgICAgICAgICAgKHR5cGUgPT0gRElTVFMgJiYgdXNlZCA+PSBFTk9VR0hfRElTVFMpKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5uZXh0ID0gdGFibGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogcG9pbnQgZW50cnkgaW4gcm9vdCB0YWJsZSB0byBzdWItdGFibGUgKi9cclxuICAgICAgICAgICAgbG93ID0gaHVmZiAmIG1hc2s7XHJcbiAgICAgICAgICAgIHN0YXRlX2NvZGVzW3RhYmxlICsgbG93XSA9IHtvcDpjdXJyLCBiaXRzOnJvb3QsIHZhbDpuZXh0IC0gdGFibGV9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBmaWxsIGluIHJlbWFpbmluZyB0YWJsZSBlbnRyeSBpZiBjb2RlIGlzIGluY29tcGxldGUgKGd1YXJhbnRlZWQgdG8gaGF2ZVxyXG4gICAgICAgYXQgbW9zdCBvbmUgcmVtYWluaW5nIGVudHJ5LCBzaW5jZSBpZiB0aGUgY29kZSBpcyBpbmNvbXBsZXRlLCB0aGVcclxuICAgICAgIG1heGltdW0gY29kZSBsZW5ndGggdGhhdCB3YXMgYWxsb3dlZCB0byBnZXQgdGhpcyBmYXIgaXMgb25lIGJpdCkgKi9cclxuICAgIGlmIChodWZmICE9IDApIHtcclxuICAgICAgICBzdGF0ZV9jb2Rlc1tuZXh0ICsgaHVmZl0gPSB7b3A6NjQsIGJpdHM6bGVuIC0gZHJvcCwgdmFsOjB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHNldCByZXR1cm4gcGFyYW1ldGVycyAqL1xyXG4gICAgc3RhdGUubmV4dCA9IHRhYmxlICsgdXNlZDtcclxuICAgIGlmKHR5cGUgPT0gRElTVFMpIHN0YXRlLmRpc3RiaXRzID0gcm9vdDsgZWxzZSBzdGF0ZS5sZW5iaXRzID0gcm9vdDsgLy8qYml0cyA9IHJvb3Q7XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5cclxuLyogaW5mZmFzdC5jIC0tIGZhc3QgZGVjb2RpbmdcclxuICogQ29weXJpZ2h0IChDKSAxOTk1LTIwMDgsIDIwMTAgTWFyayBBZGxlclxyXG4gKiBGb3IgY29uZGl0aW9ucyBvZiBkaXN0cmlidXRpb24gYW5kIHVzZSwgc2VlIGNvcHlyaWdodCBub3RpY2UgaW4gemxpYi5oXHJcbiAqL1xyXG5cclxuLypcclxuICAgRGVjb2RlIGxpdGVyYWwsIGxlbmd0aCwgYW5kIGRpc3RhbmNlIGNvZGVzIGFuZCB3cml0ZSBvdXQgdGhlIHJlc3VsdGluZ1xyXG4gICBsaXRlcmFsIGFuZCBtYXRjaCBieXRlcyB1bnRpbCBlaXRoZXIgbm90IGVub3VnaCBpbnB1dCBvciBvdXRwdXQgaXNcclxuICAgYXZhaWxhYmxlLCBhbiBlbmQtb2YtYmxvY2sgaXMgZW5jb3VudGVyZWQsIG9yIGEgZGF0YSBlcnJvciBpcyBlbmNvdW50ZXJlZC5cclxuICAgV2hlbiBsYXJnZSBlbm91Z2ggaW5wdXQgYW5kIG91dHB1dCBidWZmZXJzIGFyZSBzdXBwbGllZCB0byBpbmZsYXRlKCksIGZvclxyXG4gICBleGFtcGxlLCBhIDE2SyBpbnB1dCBidWZmZXIgYW5kIGEgNjRLIG91dHB1dCBidWZmZXIsIG1vcmUgdGhhbiA5NSUgb2YgdGhlXHJcbiAgIGluZmxhdGUgZXhlY3V0aW9uIHRpbWUgaXMgc3BlbnQgaW4gdGhpcyByb3V0aW5lLlxyXG5cclxuICAgRW50cnkgYXNzdW1wdGlvbnM6XHJcblxyXG4gICAgICAgIHN0YXRlLT5tb2RlID09IExFTlxyXG4gICAgICAgIHN0cm0tPmF2YWlsX2luID49IDZcclxuICAgICAgICBzdHJtLT5hdmFpbF9vdXQgPj0gMjU4XHJcbiAgICAgICAgc3RhcnQgPj0gc3RybS0+YXZhaWxfb3V0XHJcbiAgICAgICAgc3RhdGUtPmJpdHMgPCA4XHJcblxyXG4gICBPbiByZXR1cm4sIHN0YXRlLT5tb2RlIGlzIG9uZSBvZjpcclxuXHJcbiAgICAgICAgTEVOIC0tIHJhbiBvdXQgb2YgZW5vdWdoIG91dHB1dCBzcGFjZSBvciBlbm91Z2ggYXZhaWxhYmxlIGlucHV0XHJcbiAgICAgICAgVFlQRSAtLSByZWFjaGVkIGVuZCBvZiBibG9jayBjb2RlLCBpbmZsYXRlKCkgdG8gaW50ZXJwcmV0IG5leHQgYmxvY2tcclxuICAgICAgICBCQUQgLS0gZXJyb3IgaW4gYmxvY2sgZGF0YVxyXG5cclxuICAgTm90ZXM6XHJcblxyXG4gICAgLSBUaGUgbWF4aW11bSBpbnB1dCBiaXRzIHVzZWQgYnkgYSBsZW5ndGgvZGlzdGFuY2UgcGFpciBpcyAxNSBiaXRzIGZvciB0aGVcclxuICAgICAgbGVuZ3RoIGNvZGUsIDUgYml0cyBmb3IgdGhlIGxlbmd0aCBleHRyYSwgMTUgYml0cyBmb3IgdGhlIGRpc3RhbmNlIGNvZGUsXHJcbiAgICAgIGFuZCAxMyBiaXRzIGZvciB0aGUgZGlzdGFuY2UgZXh0cmEuICBUaGlzIHRvdGFscyA0OCBiaXRzLCBvciBzaXggYnl0ZXMuXHJcbiAgICAgIFRoZXJlZm9yZSBpZiBzdHJtLT5hdmFpbF9pbiA+PSA2LCB0aGVuIHRoZXJlIGlzIGVub3VnaCBpbnB1dCB0byBhdm9pZFxyXG4gICAgICBjaGVja2luZyBmb3IgYXZhaWxhYmxlIGlucHV0IHdoaWxlIGRlY29kaW5nLlxyXG5cclxuICAgIC0gVGhlIG1heGltdW0gYnl0ZXMgdGhhdCBhIHNpbmdsZSBsZW5ndGgvZGlzdGFuY2UgcGFpciBjYW4gb3V0cHV0IGlzIDI1OFxyXG4gICAgICBieXRlcywgd2hpY2ggaXMgdGhlIG1heGltdW0gbGVuZ3RoIHRoYXQgY2FuIGJlIGNvZGVkLiAgaW5mbGF0ZV9mYXN0KClcclxuICAgICAgcmVxdWlyZXMgc3RybS0+YXZhaWxfb3V0ID49IDI1OCBmb3IgZWFjaCBsb29wIHRvIGF2b2lkIGNoZWNraW5nIGZvclxyXG4gICAgICBvdXRwdXQgc3BhY2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbmZsYXRlX2Zhc3Qoc3RybSxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0KSAvKiBpbmZsYXRlKCkncyBzdGFydGluZyB2YWx1ZSBmb3Igc3RybS0+YXZhaWxfb3V0ICovXHJcbntcclxuICAgIHZhciBzdGF0ZTtcclxuICAgIHZhciBpbnB1dF9kYXRhOyAgICAgIC8qIGxvY2FsIHN0cm0tPmlucHV0X2RhdGEgKi9cclxuICAgIHZhciBuZXh0X2luOyAgICAgIC8qIHpsaWIuanM6IGluZGV4IG9mIGlucHV0X2RhdGEgKi9cclxuICAgIHZhciBsYXN0OyAgICAvKiB3aGlsZSBuZXh0X2luIDwgbGFzdCwgZW5vdWdoIGlucHV0IGF2YWlsYWJsZSAqL1xyXG4gICAgdmFyIG91dDsgICAgIC8qIGxvY2FsIHN0cm0ubmV4dF9vdXQgKi9cclxuICAgIHZhciBiZWc7ICAgICAvKiBpbmZsYXRlKCkncyBpbml0aWFsIHN0cm0ubmV4dF9vdXQgKi9cclxuICAgIHZhciBlbmQ7ICAgICAvKiB3aGlsZSBvdXQgPCBlbmQsIGVub3VnaCBzcGFjZSBhdmFpbGFibGUgKi9cclxuLy9OT1NQUlQgI2lmZGVmIElORkxBVEVfU1RSSUNUXHJcbi8vICAgIHVuc2lnbmVkIGRtYXg7ICAgICAgICAgICAgICAvKiBtYXhpbXVtIGRpc3RhbmNlIGZyb20gemxpYiBoZWFkZXIgKi9cclxuLy8jZW5kaWZcclxuICAgIHZhciB3c2l6ZTsgICAgICAgICAgICAgLyogd2luZG93IHNpemUgb3IgemVybyBpZiBub3QgdXNpbmcgd2luZG93ICovXHJcbiAgICB2YXIgd2hhdmU7ICAgICAgICAgICAgIC8qIHZhbGlkIGJ5dGVzIGluIHRoZSB3aW5kb3cgKi9cclxuICAgIHZhciB3bmV4dDsgICAgICAgICAgICAgLyogd2luZG93IHdyaXRlIGluZGV4ICovXHJcbiAgICB2YXIgd2luZG93OyAgLyogYWxsb2NhdGVkIHNsaWRpbmcgd2luZG93LCBpZiB3c2l6ZSAhPSAwICovXHJcbiAgICB2YXIgaG9sZDsgICAgICAgICAvKiBsb2NhbCBzdHJtLT5ob2xkICovXHJcbiAgICB2YXIgYml0czsgICAgICAgICAgICAgIC8qIGxvY2FsIHN0cm0tPmJpdHMgKi9cclxuICAgIHZhciBjb2RlczsgICAgICAgICAgICAgLyogemxpYi5qczogbG9jYWwgc3RhdGUuY29kZXMgKi9cclxuICAgIHZhciBsY29kZTsgICAgICAvKiBsb2NhbCBzdHJtLT5sZW5jb2RlICovXHJcbiAgICB2YXIgZGNvZGU7ICAgICAgLyogbG9jYWwgc3RybS0+ZGlzdGNvZGUgKi9cclxuICAgIHZhciBsbWFzazsgICAgICAgICAgICAgLyogbWFzayBmb3IgZmlyc3QgbGV2ZWwgb2YgbGVuZ3RoIGNvZGVzICovXHJcbiAgICB2YXIgZG1hc2s7ICAgICAgICAgICAgIC8qIG1hc2sgZm9yIGZpcnN0IGxldmVsIG9mIGRpc3RhbmNlIGNvZGVzICovXHJcbiAgICB2YXIgaGVyZTsgICAgICAgICAgICAgICAgICAvKiByZXRyaWV2ZWQgdGFibGUgZW50cnkgKi9cclxuICAgIHZhciBvcDsgICAgICAgICAgICAgICAgLyogY29kZSBiaXRzLCBvcGVyYXRpb24sIGV4dHJhIGJpdHMsIG9yICovXHJcbiAgICAvKiAgd2luZG93IHBvc2l0aW9uLCB3aW5kb3cgYnl0ZXMgdG8gY29weSAqL1xyXG4gICAgdmFyIGxlbjsgICAgICAgICAgICAgICAvKiBtYXRjaCBsZW5ndGgsIHVudXNlZCBieXRlcyAqL1xyXG4gICAgdmFyIGRpc3Q7ICAgICAgICAgICAgICAvKiBtYXRjaCBkaXN0YW5jZSAqL1xyXG4gICAgLy8gICAgdmFyIGZyb207ICAgIC8qIHdoZXJlIHRvIGNvcHkgbWF0Y2ggZnJvbSAqL1xyXG4gICAgdmFyIGZyb21fd2luZG93X29mZnNldCA9IC0xOyAvKiBpbmRleCBvZiB3aW5kb3dbXSAqL1xyXG4gICAgdmFyIGZyb21fb3V0X29mZnNldCA9IC0xOyAvKiBpbmRleCBvZiBuZXh0X291dFtdICovXHJcblxyXG4gICAgLyogY29weSBzdGF0ZSB0byBsb2NhbCB2YXJpYWJsZXMgKi9cclxuICAgIHN0YXRlID0gc3RybS5zdGF0ZTtcclxuICAgIGlucHV0X2RhdGEgPSBzdHJtLmlucHV0X2RhdGE7XHJcbiAgICBuZXh0X2luID0gc3RybS5uZXh0X2luO1xyXG4gICAgbGFzdCA9IG5leHRfaW4gKyBzdHJtLmF2YWlsX2luIC0gNTtcclxuICAgIG91dCA9IHN0cm0ubmV4dF9vdXQ7XHJcbiAgICBiZWcgPSBvdXQgLSAoc3RhcnQgLSBzdHJtLmF2YWlsX291dCk7XHJcbiAgICBlbmQgPSBvdXQgKyAoc3RybS5hdmFpbF9vdXQgLSAyNTcpO1xyXG4vL05PU1BSVCAjaWZkZWYgSU5GTEFURV9TVFJJQ1RcclxuLy8gICAgZG1heCA9IHN0YXRlLT5kbWF4O1xyXG4vLyNlbmRpZlxyXG4gICAgd3NpemUgPSBzdGF0ZS53c2l6ZTtcclxuICAgIHdoYXZlID0gc3RhdGUud2hhdmU7XHJcbiAgICB3bmV4dCA9IHN0YXRlLnduZXh0O1xyXG4gICAgd2luZG93ID0gc3RhdGUud2luZG93O1xyXG4gICAgaG9sZCA9IHN0YXRlLmhvbGQ7XHJcbiAgICBiaXRzID0gc3RhdGUuYml0cztcclxuICAgIGNvZGVzID0gc3RhdGUuY29kZXM7XHJcbiAgICBsY29kZSA9IHN0YXRlLmxlbmNvZGU7XHJcbiAgICBkY29kZSA9IHN0YXRlLmRpc3Rjb2RlO1xyXG4gICAgbG1hc2sgPSAoMSA8PCBzdGF0ZS5sZW5iaXRzKSAtIDE7XHJcbiAgICBkbWFzayA9ICgxIDw8IHN0YXRlLmRpc3RiaXRzKSAtIDE7XHJcblxyXG4gICAgLyogZGVjb2RlIGxpdGVyYWxzIGFuZCBsZW5ndGgvZGlzdGFuY2VzIHVudGlsIGVuZC1vZi1ibG9jayBvciBub3QgZW5vdWdoXHJcbiAgICAgICBpbnB1dCBkYXRhIG9yIG91dHB1dCBzcGFjZSAqL1xyXG5sb29wOiBkbyB7XHJcbiAgICAgICAgaWYgKGJpdHMgPCAxNSkge1xyXG4gICAgICAgICAgICBob2xkICs9IChpbnB1dF9kYXRhLmNoYXJDb2RlQXQobmV4dF9pbisrKSAmIDB4ZmYpIDw8IGJpdHM7XHJcbiAgICAgICAgICAgIGJpdHMgKz0gODtcclxuICAgICAgICAgICAgaG9sZCArPSAoaW5wdXRfZGF0YS5jaGFyQ29kZUF0KG5leHRfaW4rKykgJiAweGZmKSA8PCBiaXRzO1xyXG4gICAgICAgICAgICBiaXRzICs9IDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlcmUgPSBjb2Rlc1tsY29kZSArIChob2xkICYgbG1hc2spXTtcclxuICAgIGRvbGVuOiB3aGlsZSh0cnVlKSB7XHJcbiAgICAgICAgICAgIG9wID0gaGVyZS5iaXRzO1xyXG4gICAgICAgICAgICBob2xkID4+Pj0gb3A7XHJcbiAgICAgICAgICAgIGJpdHMgLT0gb3A7XHJcbiAgICAgICAgICAgIG9wID0gaGVyZS5vcDtcclxuICAgICAgICAgICAgaWYgKG9wID09IDApIHsgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGxpdGVyYWwgKi9cclxuLy8gICAgICAgICAgICBUcmFjZXZ2KChzdGRlcnIsIGhlcmUudmFsID49IDB4MjAgJiYgaGVyZS52YWwgPCAweDdmID9cclxuLy8gICAgICAgICAgICAgICAgICAgIFwiaW5mbGF0ZTogICAgICAgICBsaXRlcmFsICclYydcXG5cIiA6XHJcbi8vICAgICAgICAgICAgICAgICAgICBcImluZmxhdGU6ICAgICAgICAgbGl0ZXJhbCAweCUwMnhcXG5cIiwgaGVyZS52YWwpKTtcclxuICAgICAgICAgICAgICAgIHN0cm0ub3V0cHV0X2RhdGEgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoZXJlLnZhbCk7XHJcbiAgICAgICAgICAgICAgICBvdXQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvcCAmIDE2KSB7ICAgICAgICAgICAgICAgICAgICAgLyogbGVuZ3RoIGJhc2UgKi9cclxuICAgICAgICAgICAgICAgIGxlbiA9IGhlcmUudmFsO1xyXG4gICAgICAgICAgICAgICAgb3AgJj0gMTU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGV4dHJhIGJpdHMgKi9cclxuICAgICAgICAgICAgICAgIGlmIChvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiaXRzIDwgb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9sZCArPSAoaW5wdXRfZGF0YS5jaGFyQ29kZUF0KG5leHRfaW4rKykgJiAweGZmKSA8PCBiaXRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaXRzICs9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxlbiArPSBob2xkICYgKCgxIDw8IG9wKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhvbGQgPj4+PSBvcDtcclxuICAgICAgICAgICAgICAgICAgICBiaXRzIC09IG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIFRyYWNldnYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgICAgIGxlbmd0aCAldVxcblwiLCBsZW4pKTtcclxuICAgICAgICAgICAgICAgIGlmIChiaXRzIDwgMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICBob2xkICs9IChpbnB1dF9kYXRhLmNoYXJDb2RlQXQobmV4dF9pbisrKSAmIDB4ZmYpIDw8IGJpdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgYml0cyArPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhvbGQgKz0gKGlucHV0X2RhdGEuY2hhckNvZGVBdChuZXh0X2luKyspICYgMHhmZikgPDwgYml0cztcclxuICAgICAgICAgICAgICAgICAgICBiaXRzICs9IDg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoZXJlID0gY29kZXNbZGNvZGUgKyAoaG9sZCAmIGRtYXNrKV07XHJcbiAgICAgICAgICAgIGRvZGlzdDogd2hpbGUodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wID0gaGVyZS5iaXRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGhvbGQgPj4+PSBvcDtcclxuICAgICAgICAgICAgICAgICAgICBiaXRzIC09IG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wID0gaGVyZS5vcDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3AgJiAxNikgeyAgICAgICAgICAgICAgICAgICAgICAvKiBkaXN0YW5jZSBiYXNlICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3QgPSBoZXJlLnZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3AgJj0gMTU7ICAgICAgICAgICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgZXh0cmEgYml0cyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYml0cyA8IG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob2xkICs9IChpbnB1dF9kYXRhLmNoYXJDb2RlQXQobmV4dF9pbisrKSAmIDB4ZmYpIDw8IGJpdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaXRzICs9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYml0cyA8IG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZCArPSAoaW5wdXRfZGF0YS5jaGFyQ29kZUF0KG5leHRfaW4rKykgJiAweGZmKSA8PCBiaXRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpdHMgKz0gODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0ICs9IGhvbGQgJiAoKDEgPDwgb3ApIC0gMSk7XHJcbi8vTk9TUFJUICNpZmRlZiBJTkZMQVRFX1NUUklDVFxyXG4vLyAgICAgICAgICAgICAgICBpZiAoZGlzdCA+IGRtYXgpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIHN0cm0tPm1zZyA9IChjaGFyICopXCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgc3RhdGUtPm1vZGUgPSBCQUQ7XHJcbi8vICAgICAgICAgICAgICAgICAgICBicmVhayBsb29wO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vI2VuZGlmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvbGQgPj4+PSBvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYml0cyAtPSBvcDtcclxuLy8gICAgICAgICAgICAgICAgVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgZGlzdGFuY2UgJXVcXG5cIiwgZGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcCA9IG91dCAtIGJlZzsgICAgICAgICAgICAgICAgIC8qIG1heCBkaXN0YW5jZSBpbiBvdXRwdXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPiBvcCkgeyAgICAgICAgICAgICAgICAvKiBzZWUgaWYgY29weSBmcm9tIHdpbmRvdyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3AgPSBkaXN0IC0gb3A7ICAgICAgICAgICAgIC8qIGRpc3RhbmNlIGJhY2sgaW4gd2luZG93ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3AgPiB3aGF2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zYW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgbG9vcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vTk9TUFJUICNpZmRlZiBJTkZMQVRFX0FMTE9XX0lOVkFMSURfRElTVEFOQ0VfVE9PRkFSX0FSUlJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVuIDw9IG9wIC0gd2hhdmUpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUFVQKG91dCkgPSAwO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICgtLWxlbik7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBsZW4gLT0gb3AgLSB3aGF2ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBkbyB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBVUChvdXQpID0gMDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICgtLW9wID4gd2hhdmUpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcCA9PSAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gPSBvdXQgLSBkaXN0O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbyB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQVVAob3V0KSA9IFBVUChmcm9tKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1sZW4pO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vI2VuZGlmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IC8vIGlmIChvcCA+IHdoYXZlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fd2luZG93X29mZnNldCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tX291dF9vZmZzZXQgPSAtMTtcclxuXHRcdFx0XHRcdFx0XHRpZiAod25leHQgPT0gMCkgeyAgICAgICAgICAgLyogdmVyeSBjb21tb24gY2FzZSAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0ZnJvbV93aW5kb3dfb2Zmc2V0ICs9IHdzaXplIC0gb3A7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAob3AgPCBsZW4pIHsgICAgICAgICAvKiBzb21lIGZyb20gd2luZG93ICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxlbiAtPSBvcDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RybS5vdXRwdXRfZGF0YSArPSB3aW5kb3cuc3Vic3RyaW5nKGZyb21fd2luZG93X29mZnNldCwgZnJvbV93aW5kb3dfb2Zmc2V0ICsgb3ApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvdXQgKz0gb3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJvbV93aW5kb3dfb2Zmc2V0ID0gLTE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZyb21fb3V0X29mZnNldCA9IG91dCAtIGRpc3Q7ICAvKiByZXN0IGZyb20gb3V0cHV0ICovXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG4vL05PVFJFQUNIRUQgZWxzZSBpZiAod25leHQgPCBvcCkgeyAgICAgIC8qIHdyYXAgYXJvdW5kIHdpbmRvdyAqL1xyXG4vL05PVFJFQUNIRUQgICAgIGZyb20gKz0gd3NpemUgKyB3bmV4dCAtIG9wO1xyXG4vL05PVFJFQUNIRUQgICAgIG9wIC09IHduZXh0O1xyXG4vL05PVFJFQUNIRUQgICAgIGlmIChvcCA8IGxlbikgeyAgICAgICAgIC8qIHNvbWUgZnJvbSBlbmQgb2Ygd2luZG93ICovXHJcbi8vTk9UUkVBQ0hFRCAgICAgICAgIGxlbiAtPSBvcDtcclxuLy9OT1RSRUFDSEVEICAgICAgICAgZG8ge1xyXG4vL05PVFJFQUNIRUQgICAgICAgICAgICAgUFVQKG91dCkgPSBQVVAoZnJvbSk7XHJcbi8vTk9UUkVBQ0hFRCAgICAgICAgIH0gd2hpbGUgKC0tb3ApO1xyXG4vL05PVFJFQUNIRUQgICAgICAgICBmcm9tID0gd2luZG93IC0gT0ZGO1xyXG4vL05PVFJFQUNIRUQgICAgICAgICBpZiAod25leHQgPCBsZW4pIHsgIC8qIHNvbWUgZnJvbSBzdGFydCBvZiB3aW5kb3cgKi9cclxuLy9OT1RSRUFDSEVEICAgICAgICAgICAgIG9wID0gd25leHQ7XHJcbi8vTk9UUkVBQ0hFRCAgICAgICAgICAgICBsZW4gLT0gb3A7XHJcbi8vTk9UUkVBQ0hFRCAgICAgICAgICAgICBkbyB7XHJcbi8vTk9UUkVBQ0hFRCAgICAgICAgICAgICAgICAgUFVQKG91dCkgPSBQVVAoZnJvbSk7XHJcbi8vTk9UUkVBQ0hFRCAgICAgICAgICAgICB9IHdoaWxlICgtLW9wKTtcclxuLy9OT1RSRUFDSEVEICAgICAgICAgICAgIGZyb20gPSBvdXQgLSBkaXN0OyAgICAgIC8qIHJlc3QgZnJvbSBvdXRwdXQgKi9cclxuLy9OT1RSRUFDSEVEICAgICAgICAgfVxyXG4vL05PVFJFQUNIRUQgICAgIH1cclxuLy9OT1RSRUFDSEVEIH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgLyogY29udGlndW91cyBpbiB3aW5kb3cgKi9cclxuXHRcdFx0XHRcdFx0XHRcdGZyb21fd2luZG93X29mZnNldCArPSB3bmV4dCAtIG9wO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG9wIDwgbGVuKSB7ICAgICAgICAgLyogc29tZSBmcm9tIHdpbmRvdyAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZW4gLT0gb3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm0ub3V0cHV0X2RhdGEgKz0gd2luZG93LnN1YnN0cmluZyhmcm9tX3dpbmRvd19vZmZzZXQsIGZyb21fd2luZG93X29mZnNldCArIG9wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3V0ICs9IG9wO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmcm9tX3dpbmRvd19vZmZzZXQgPSAtMTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJvbV9vdXRfb2Zmc2V0ID0gb3V0IC0gZGlzdDsgIC8qIHJlc3QgZnJvbSBvdXRwdXQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tX3dpbmRvd19vZmZzZXQgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fb3V0X29mZnNldCA9IG91dCAtIGRpc3Q7ICAgICAgICAgIC8qIGNvcHkgZGlyZWN0IGZyb20gb3V0cHV0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcm9tX3dpbmRvd19vZmZzZXQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RybS5vdXRwdXRfZGF0YSArPSB3aW5kb3cuc3Vic3RyaW5nKGZyb21fd2luZG93X29mZnNldCwgZnJvbV93aW5kb3dfb2Zmc2V0ICsgbGVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBsZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tX3dpbmRvd19vZmZzZXQgKz0gbGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlbl9pbm5lciA9IGxlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxlbl9pbm5lciA+IG91dCAtIGZyb21fb3V0X29mZnNldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuX2lubmVyID0gb3V0IC0gZnJvbV9vdXRfb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RybS5vdXRwdXRfZGF0YSArPSBzdHJtLm91dHB1dF9kYXRhLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tX291dF9vZmZzZXQsIGZyb21fb3V0X29mZnNldCArIGxlbl9pbm5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXQgKz0gbGVuX2lubmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuIC09IGxlbl9pbm5lcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fb3V0X29mZnNldCArPSBsZW5faW5uZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXQgKz0gbGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxlbiA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJtLm91dHB1dF9kYXRhICs9IHN0cm0ub3V0cHV0X2RhdGEuY2hhckF0KGZyb21fb3V0X29mZnNldCsrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJtLm91dHB1dF9kYXRhICs9IHN0cm0ub3V0cHV0X2RhdGEuY2hhckF0KGZyb21fb3V0X29mZnNldCsrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJtLm91dHB1dF9kYXRhICs9IHN0cm0ub3V0cHV0X2RhdGEuY2hhckF0KGZyb21fb3V0X29mZnNldCsrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW4gLT0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJtLm91dHB1dF9kYXRhICs9IHN0cm0ub3V0cHV0X2RhdGEuY2hhckF0KGZyb21fb3V0X29mZnNldCsrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVuID4gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RybS5vdXRwdXRfZGF0YSArPSBzdHJtLm91dHB1dF9kYXRhLmNoYXJBdChmcm9tX291dF9vZmZzZXQrKyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKG9wICYgNjQpID09IDApIHsgICAgICAgICAgLyogMm5kIGxldmVsIGRpc3RhbmNlIGNvZGUgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVyZSA9IGNvZGVzW2Rjb2RlICsgKGhlcmUudmFsICsgKGhvbGQgJiAoKDEgPDwgb3ApIC0gMSkpKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIGRvZGlzdDsgLy8gZ290byBkb2Rpc3RcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgZGlzdGFuY2UgY29kZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGxvb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrIGRvZGlzdDsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKChvcCAmIDY0KSA9PSAwKSB7ICAgICAgICAgICAgICAvKiAybmQgbGV2ZWwgbGVuZ3RoIGNvZGUgKi9cclxuICAgICAgICAgICAgICAgIGhlcmUgPSBjb2Rlc1tsY29kZSArIChoZXJlLnZhbCArIChob2xkICYgKCgxIDw8IG9wKSAtIDEpKSldO1xyXG4gICAgICAgICAgICAgICAgY29udGludWUgZG9sZW47IC8vIGdvdG8gZG9sZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3AgJiAzMikgeyAgICAgICAgICAgICAgICAgICAgIC8qIGVuZC1vZi1ibG9jayAqL1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBUcmFjZXZ2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgICBlbmQgb2YgYmxvY2tcXG5cIikpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IFRZUEU7XHJcbiAgICAgICAgICAgICAgICBicmVhayBsb29wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhayBsb29wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrIGRvbGVuOyB9XHJcbiAgICB9IHdoaWxlIChuZXh0X2luIDwgbGFzdCAmJiBvdXQgPCBlbmQpO1xyXG5cclxuICAgIC8qIHJldHVybiB1bnVzZWQgYnl0ZXMgKG9uIGVudHJ5LCBiaXRzIDwgOCwgc28gaW4gd29uJ3QgZ28gdG9vIGZhciBiYWNrKSAqL1xyXG4gICAgbGVuID0gYml0cyA+Pj4gMztcclxuICAgIG5leHRfaW4gLT0gbGVuO1xyXG4gICAgYml0cyAtPSBsZW4gPDwgMztcclxuICAgIGhvbGQgJj0gKDEgPDwgYml0cykgLSAxO1xyXG5cclxuICAgIC8qIHVwZGF0ZSBzdGF0ZSBhbmQgcmV0dXJuICovXHJcbiAgICBzdHJtLm5leHRfaW4gPSBuZXh0X2luO1xyXG4gICAgc3RybS5uZXh0X291dCA9IG91dDtcclxuICAgIHN0cm0uYXZhaWxfaW4gPSAobmV4dF9pbiA8IGxhc3QgPyA1ICsgKGxhc3QgLSBuZXh0X2luKSA6IDUgLSAobmV4dF9pbiAtIGxhc3QpKTtcclxuICAgIHN0cm0uYXZhaWxfb3V0ID0gKG91dCA8IGVuZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAyNTcgKyAoZW5kIC0gb3V0KSA6IDI1NyAtIChvdXQgLSBlbmQpKTtcclxuICAgIHN0YXRlLmhvbGQgPSBob2xkO1xyXG4gICAgc3RhdGUuYml0cyA9IGJpdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld19hcnJheShzaXplKVxyXG57XHJcbiAgICB2YXIgaTtcclxuICAgIHZhciBhcnkgPSBuZXcgQXJyYXkoc2l6ZSk7XHJcbiAgICBmb3IoaSA9IDA7IGkgPCBzaXplOyBpKyspXHJcbiAgICAgICAgYXJ5W2ldID0gMDtcclxuICAgIHJldHVybiBhcnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldGFyZyhvcHRzLCBuYW1lLCBkZWZfdmFsdWUpXHJcbntcclxuICAgIHJldHVybiAob3B0cyAmJiAobmFtZSBpbiBvcHRzKSkgPyBvcHRzW25hbWVdIDogZGVmX3ZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja3N1bV9ub25lKClcclxue1xyXG5cdHJldHVybiAwO1xyXG59XHJcblxyXG4vKipcclxuICogel9zdHJlYW0gY29uc3RydWN0b3JcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBpbmZsYXRlX3N0YXRlKClcclxue1xyXG4gICAgdmFyIGk7XHJcblxyXG4gICAgdGhpcy5tb2RlID0gMDsgICAgICAgICAgICAgIC8qIGN1cnJlbnQgaW5mbGF0ZSBtb2RlICovXHJcbiAgICB0aGlzLmxhc3QgPSAwOyAgICAgICAgICAgICAgLyogdHJ1ZSBpZiBwcm9jZXNzaW5nIGxhc3QgYmxvY2sgKi9cclxuICAgIHRoaXMud3JhcCA9IDA7ICAgICAgICAgICAgICAvKiBiaXQgMCB0cnVlIGZvciB6bGliLCBiaXQgMSB0cnVlIGZvciBnemlwICovXHJcbiAgICB0aGlzLmhhdmVkaWN0ID0gMDsgICAgICAgICAgLyogdHJ1ZSBpZiBkaWN0aW9uYXJ5IHByb3ZpZGVkICovXHJcbiAgICB0aGlzLmZsYWdzID0gMDsgICAgICAgICAgICAgLyogZ3ppcCBoZWFkZXIgbWV0aG9kIGFuZCBmbGFncyAoMCBpZiB6bGliKSAqL1xyXG4gICAgdGhpcy5kbWF4ID0gMDsgICAgICAgICAgICAgIC8qIHpsaWIgaGVhZGVyIG1heCBkaXN0YW5jZSAoSU5GTEFURV9TVFJJQ1QpICovXHJcbiAgICB0aGlzLmNoZWNrID0gMDsgICAgICAgICAgICAgLyogcHJvdGVjdGVkIGNvcHkgb2YgY2hlY2sgdmFsdWUgKi9cclxuICAgIHRoaXMudG90YWwgPSAwOyAgICAgICAgICAgICAvKiBwcm90ZWN0ZWQgY29weSBvZiBvdXRwdXQgY291bnQgKi9cclxuICAgIHRoaXMuaGVhZCA9IG51bGw7ICAgICAgICAgICAvKiB3aGVyZSB0byBzYXZlIGd6aXAgaGVhZGVyIGluZm9ybWF0aW9uICovXHJcbiAgICAvKiBzbGlkaW5nIHdpbmRvdyAqL1xyXG4gICAgdGhpcy53Yml0cyA9IDA7ICAgICAgICAgICAgIC8qIGxvZyBiYXNlIDIgb2YgcmVxdWVzdGVkIHdpbmRvdyBzaXplICovXHJcbiAgICB0aGlzLndzaXplID0gMDsgICAgICAgICAgICAgLyogd2luZG93IHNpemUgb3IgemVybyBpZiBub3QgdXNpbmcgd2luZG93ICovXHJcbiAgICB0aGlzLndoYXZlID0gMDsgICAgICAgICAgICAgLyogdmFsaWQgYnl0ZXMgaW4gdGhlIHdpbmRvdyAqL1xyXG4gICAgdGhpcy53bmV4dCA9IDA7ICAgICAgICAgICAgIC8qIHdpbmRvdyB3cml0ZSBpbmRleCAoVE9ETyByZW1vdmUpICovXHJcbiAgICB0aGlzLndpbmRvdyA9IG51bGw7ICAgICAgICAgLyogYWxsb2NhdGVkIHNsaWRpbmcgd2luZG93LCBpZiBuZWVkZWQgKi9cclxuICAgIC8qIGJpdCBhY2N1bXVsYXRvciAqL1xyXG4gICAgdGhpcy5ob2xkID0gMDsgICAgICAgICAgICAgIC8qIGlucHV0IGJpdCBhY2N1bXVsYXRvciAqL1xyXG4gICAgdGhpcy5iaXRzID0gMDsgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBiaXRzIGluIFwiaW5cIiAqL1xyXG4gICAgLyogZm9yIHN0cmluZyBhbmQgc3RvcmVkIGJsb2NrIGNvcHlpbmcgKi9cclxuICAgIHRoaXMubGVuZ3RoID0gMDsgICAgICAgICAgICAvKiBsaXRlcmFsIG9yIGxlbmd0aCBvZiBkYXRhIHRvIGNvcHkgKi9cclxuICAgIHRoaXMub2Zmc2V0ID0gMDsgICAgICAgICAgICAvKiBkaXN0YW5jZSBiYWNrIHRvIGNvcHkgc3RyaW5nIGZyb20gKi9cclxuICAgIC8qIGZvciB0YWJsZSBhbmQgY29kZSBkZWNvZGluZyAqL1xyXG4gICAgdGhpcy5leHRyYSA9IDA7ICAgICAgICAgICAgIC8qIGV4dHJhIGJpdHMgbmVlZGVkICovXHJcbiAgICAvKiBmaXhlZCBhbmQgZHluYW1pYyBjb2RlIHRhYmxlcyAqL1xyXG5cclxuICAgIC8qIHpsaWIuanM6IG1vZGlmaWVkIGltcGxlbWVudGF0aW9uOiBsZW5jb2RlLCBkaXN0Y29kZSwgbmV4dCBhcmUgb2Zmc2V0IG9mIGNvZGVzW10gKi9cclxuICAgIHRoaXMubGVuY29kZSA9IDA7ICAgICAgICAgICAvKiBzdGFydGluZyB0YWJsZSBmb3IgbGVuZ3RoL2xpdGVyYWwgY29kZXMgKi9cclxuICAgIHRoaXMuZGlzdGNvZGUgPSAwOyAgICAgICAgICAvKiBzdGFydGluZyB0YWJsZSBmb3IgZGlzdGFuY2UgY29kZXMgKi9cclxuICAgIHRoaXMubGVuYml0cyA9IDA7ICAgICAgICAgICAvKiBpbmRleCBiaXRzIGZvciBsZW5jb2RlICovXHJcbiAgICB0aGlzLmRpc3RiaXRzID0gMDsgICAgICAgICAgLyogaW5kZXggYml0cyBmb3IgZGlzdGNvZGUgKi9cclxuICAgIC8qIGR5bmFtaWMgdGFibGUgYnVpbGRpbmcgKi9cclxuICAgIHRoaXMubmNvZGUgPSAwOyAgICAgICAgICAgICAvKiBudW1iZXIgb2YgY29kZSBsZW5ndGggY29kZSBsZW5ndGhzICovXHJcbiAgICB0aGlzLm5sZW4gPSAwOyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGxlbmd0aCBjb2RlIGxlbmd0aHMgKi9cclxuICAgIHRoaXMubmRpc3QgPSAwOyAgICAgICAgICAgICAvKiBudW1iZXIgb2YgZGlzdGFuY2UgY29kZSBsZW5ndGhzICovXHJcbiAgICB0aGlzLmhhdmUgPSAwOyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGNvZGUgbGVuZ3RocyBpbiBsZW5zW10gKi9cclxuICAgIHRoaXMubmV4dCA9IDA7ICAgICAgICAgICAgICAvKiBuZXh0IGF2YWlsYWJsZSBzcGFjZSBpbiBjb2Rlc1tdICovXHJcbiAgICB0aGlzLmxlbnMgPSBuZXdfYXJyYXkoMzIwKTsgLyogdGVtcG9yYXJ5IHN0b3JhZ2UgZm9yIGNvZGUgbGVuZ3RocyAqL1xyXG4gICAgdGhpcy53b3JrID0gbmV3X2FycmF5KDI4OCk7IC8qIHdvcmsgYXJlYSBmb3IgY29kZSB0YWJsZSBidWlsZGluZyAqL1xyXG4gICAgdGhpcy5jb2RlcyA9IG5ldyBBcnJheShFTk9VR0gpOyAgICAgICAgIC8qIHNwYWNlIGZvciBjb2RlIHRhYmxlcyAqL1xyXG4gICAgdmFyIGMgPSB7b3A6MCwgYml0czowLCB2YWw6MH07XHJcbiAgICBmb3IoaSA9IDA7IGkgPCBFTk9VR0g7IGkrKylcclxuICAgICAgICB0aGlzLmNvZGVzW2ldID0gYztcclxuICAgIHRoaXMuc2FuZSA9IDA7ICAgICAgICAgICAgICAvKiBpZiBmYWxzZSwgYWxsb3cgaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyICovXHJcbiAgICB0aGlzLmJhY2sgPSAwOyAgICAgICAgICAgICAgLyogYml0cyBiYWNrIG9mIGxhc3QgdW5wcm9jZXNzZWQgbGVuZ3RoL2xpdCAqL1xyXG4gICAgdGhpcy53YXMgPSAwOyAgICAgICAgICAgICAgIC8qIGluaXRpYWwgbGVuZ3RoIG9mIG1hdGNoICovXHJcbn1cclxuXHJcblpMSUIuaW5mbGF0ZVJlc2V0S2VlcCA9IGZ1bmN0aW9uKHN0cm0pXHJcbntcclxuICAgIHZhciBzdGF0ZTtcclxuXHJcbiAgICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUpIHJldHVybiBaTElCLlpfU1RSRUFNX0VSUk9SO1xyXG4gICAgc3RhdGUgPSBzdHJtLnN0YXRlO1xyXG4gICAgc3RybS50b3RhbF9pbiA9IHN0cm0udG90YWxfb3V0ID0gc3RhdGUudG90YWwgPSAwO1xyXG4gICAgc3RybS5tc2cgPSBudWxsO1xyXG4gICAgaWYgKHN0YXRlLndyYXApIHsgICAgICAgIC8qIHRvIHN1cHBvcnQgaWxsLWNvbmNlaXZlZCBKYXZhIHRlc3Qgc3VpdGUgKi9cclxuICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUud3JhcCAmIDE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGUubW9kZSA9IEhFQUQ7XHJcbiAgICBzdGF0ZS5sYXN0ID0gMDtcclxuICAgIHN0YXRlLmhhdmVkaWN0ID0gMDtcclxuICAgIHN0YXRlLmRtYXggPSAzMjc2ODtcclxuICAgIHN0YXRlLmhlYWQgPSBudWxsO1xyXG4gICAgc3RhdGUuaG9sZCA9IDA7XHJcbiAgICBzdGF0ZS5iaXRzID0gMDtcclxuICAgIHN0YXRlLmxlbmNvZGUgPSAwO1xyXG4gICAgc3RhdGUuZGlzdGNvZGUgPSAwO1xyXG4gICAgc3RhdGUubmV4dCA9IDA7XHJcbiAgICBzdGF0ZS5zYW5lID0gMTtcclxuICAgIHN0YXRlLmJhY2sgPSAtMTtcclxuICAgIHJldHVybiBaTElCLlpfT0s7XHJcbn07XHJcblxyXG4vLyBVc2FnZTogc3RybSA9IFpMSUIuaW5mbGF0ZVJlc2V0KHpfc3RyZWFtIFssIHdpbmRvd0JpdHNdKTtcclxuWkxJQi5pbmZsYXRlUmVzZXQgPSBmdW5jdGlvbihzdHJtLCB3aW5kb3dCaXRzKVxyXG57XHJcbiAgICB2YXIgd3JhcDtcclxuICAgIHZhciBzdGF0ZTtcclxuXHJcbiAgICAvKiBnZXQgdGhlIHN0YXRlICovXHJcbiAgICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUpIHJldHVybiBaTElCLlpfU1RSRUFNX0VSUk9SO1xyXG4gICAgc3RhdGUgPSBzdHJtLnN0YXRlO1xyXG5cclxuXHRpZih0eXBlb2Ygd2luZG93Qml0cyA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHdpbmRvd0JpdHMgPSBERUZfV0JJVFM7XHJcblxyXG4gICAgLyogZXh0cmFjdCB3cmFwIHJlcXVlc3QgZnJvbSB3aW5kb3dCaXRzIHBhcmFtZXRlciAqL1xyXG4gICAgaWYgKHdpbmRvd0JpdHMgPCAwKSB7XHJcbiAgICAgICAgd3JhcCA9IDA7XHJcbiAgICAgICAgd2luZG93Qml0cyA9IC13aW5kb3dCaXRzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgd3JhcCA9ICh3aW5kb3dCaXRzID4+PiA0KSArIDE7XHJcbiAgICAgICAgaWYgKHdpbmRvd0JpdHMgPCA0OClcclxuICAgICAgICAgICAgd2luZG93Qml0cyAmPSAxNTtcclxuICAgIH1cclxuXHJcblx0aWYod3JhcCA9PSAxICYmICh0eXBlb2YgWkxJQi5hZGxlcjMyID09PSAnZnVuY3Rpb24nKSkge1xyXG5cdFx0c3RybS5jaGVja3N1bV9mdW5jdGlvbiA9IFpMSUIuYWRsZXIzMjtcclxuXHR9IGVsc2UgaWYod3JhcCA9PSAyICYmICh0eXBlb2YgWkxJQi5jcmMzMiA9PT0gJ2Z1bmN0aW9uJykpIHtcclxuXHRcdHN0cm0uY2hlY2tzdW1fZnVuY3Rpb24gPSBaTElCLmNyYzMyO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHJtLmNoZWNrc3VtX2Z1bmN0aW9uID0gY2hlY2tzdW1fbm9uZTtcclxuXHR9XHJcblxyXG4gICAgLyogc2V0IG51bWJlciBvZiB3aW5kb3cgYml0cywgZnJlZSB3aW5kb3cgaWYgZGlmZmVyZW50ICovXHJcbiAgICBpZiAod2luZG93Qml0cyAmJiAod2luZG93Qml0cyA8IDggfHwgd2luZG93Qml0cyA+IDE1KSlcclxuICAgICAgICByZXR1cm4gWkxJQi5aX1NUUkVBTV9FUlJPUjtcclxuICAgIGlmIChzdGF0ZS53aW5kb3cgJiYgc3RhdGUud2JpdHMgIT0gd2luZG93Qml0cykge1xyXG4gICAgICAgIHN0YXRlLndpbmRvdyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyogdXBkYXRlIHN0YXRlIGFuZCByZXNldCB0aGUgcmVzdCBvZiBpdCAqL1xyXG4gICAgc3RhdGUud3JhcCA9IHdyYXA7XHJcbiAgICBzdGF0ZS53Yml0cyA9IHdpbmRvd0JpdHM7XHJcbiAgICBzdGF0ZS53c2l6ZSA9IDA7XHJcbiAgICBzdGF0ZS53aGF2ZSA9IDA7XHJcbiAgICBzdGF0ZS53bmV4dCA9IDA7XHJcbiAgICByZXR1cm4gWkxJQi5pbmZsYXRlUmVzZXRLZWVwKHN0cm0pO1xyXG59O1xyXG5cclxuLy8gVXNhZ2U6IHN0cm0gPSBaTElCLmluZmxhdGVJbml0KFt3aW5kb3dCaXRzXSk7XHJcblpMSUIuaW5mbGF0ZUluaXQgPSBmdW5jdGlvbih3aW5kb3dCaXRzKVxyXG57XHJcbiAgICB2YXIgc3RybSA9IG5ldyBaTElCLnpfc3RyZWFtKCk7XHJcbiAgICBzdHJtLnN0YXRlID0gbmV3IGluZmxhdGVfc3RhdGUoKTtcclxuICAgIFpMSUIuaW5mbGF0ZVJlc2V0KHN0cm0sIHdpbmRvd0JpdHMpO1xyXG4gICAgcmV0dXJuIHN0cm07XHJcbn07XHJcblxyXG5aTElCLmluZmxhdGVQcmltZSA9IGZ1bmN0aW9uKHN0cm0sIGJpdHMsIHZhbHVlKVxyXG57XHJcbiAgICB2YXIgc3RhdGU7XHJcblxyXG4gICAgaWYgKCFzdHJtIHx8ICFzdHJtLnN0YXRlKSByZXR1cm4gWkxJQi5aX1NUUkVBTV9FUlJPUjtcclxuICAgIHN0YXRlID0gc3RybS5zdGF0ZTtcclxuICAgIGlmIChiaXRzIDwgMCkge1xyXG4gICAgICAgIHN0YXRlLmhvbGQgPSAwO1xyXG4gICAgICAgIHN0YXRlLmJpdHMgPSAwO1xyXG4gICAgICAgIHJldHVybiBaTElCLlpfT0s7XHJcbiAgICB9XHJcbiAgICBpZiAoYml0cyA+IDE2IHx8IHN0YXRlLmJpdHMgKyBiaXRzID4gMzIpIHJldHVybiBaTElCLlpfU1RSRUFNX0VSUk9SO1xyXG4gICAgdmFsdWUgJj0gKDEgPDwgYml0cykgLSAxO1xyXG4gICAgc3RhdGUuaG9sZCArPSB2YWx1ZSA8PCBzdGF0ZS5iaXRzO1xyXG4gICAgc3RhdGUuYml0cyArPSBiaXRzO1xyXG4gICAgcmV0dXJuIFpMSUIuWl9PSztcclxufTtcclxuXHJcbnZhciBsZW5maXhfYXJ5ID0gbnVsbDtcclxudmFyIGxlbmZpeF9kZWYgPSBcIihbXFxcclxuICAgIHtvcDo5NixiaXRzOjcsdmFsOjB9LHtvcDowLGJpdHM6OCx2YWw6ODB9LHtvcDowLGJpdHM6OCx2YWw6MTZ9LHtvcDoyMCxiaXRzOjgsdmFsOjExNX0se29wOjE4LGJpdHM6Nyx2YWw6MzF9LHtvcDowLGJpdHM6OCx2YWw6MTEyfSx7b3A6MCxiaXRzOjgsdmFsOjQ4fSxcXFxyXG4gICAge29wOjAsYml0czo5LHZhbDoxOTJ9LHtvcDoxNixiaXRzOjcsdmFsOjEwfSx7b3A6MCxiaXRzOjgsdmFsOjk2fSx7b3A6MCxiaXRzOjgsdmFsOjMyfSx7b3A6MCxiaXRzOjksdmFsOjE2MH0se29wOjAsYml0czo4LHZhbDowfSx7b3A6MCxiaXRzOjgsdmFsOjEyOH0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6NjR9LHtvcDowLGJpdHM6OSx2YWw6MjI0fSx7b3A6MTYsYml0czo3LHZhbDo2fSx7b3A6MCxiaXRzOjgsdmFsOjg4fSx7b3A6MCxiaXRzOjgsdmFsOjI0fSx7b3A6MCxiaXRzOjksdmFsOjE0NH0se29wOjE5LGJpdHM6Nyx2YWw6NTl9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjEyMH0se29wOjAsYml0czo4LHZhbDo1Nn0se29wOjAsYml0czo5LHZhbDoyMDh9LHtvcDoxNyxiaXRzOjcsdmFsOjE3fSx7b3A6MCxiaXRzOjgsdmFsOjEwNH0se29wOjAsYml0czo4LHZhbDo0MH0se29wOjAsYml0czo5LHZhbDoxNzZ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjh9LHtvcDowLGJpdHM6OCx2YWw6MTM2fSx7b3A6MCxiaXRzOjgsdmFsOjcyfSx7b3A6MCxiaXRzOjksdmFsOjI0MH0se29wOjE2LGJpdHM6Nyx2YWw6NH0se29wOjAsYml0czo4LHZhbDo4NH0se29wOjAsYml0czo4LHZhbDoyMH0sXFxcclxuICAgIHtvcDoyMSxiaXRzOjgsdmFsOjIyN30se29wOjE5LGJpdHM6Nyx2YWw6NDN9LHtvcDowLGJpdHM6OCx2YWw6MTE2fSx7b3A6MCxiaXRzOjgsdmFsOjUyfSx7b3A6MCxiaXRzOjksdmFsOjIwMH0se29wOjE3LGJpdHM6Nyx2YWw6MTN9LHtvcDowLGJpdHM6OCx2YWw6MTAwfSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDozNn0se29wOjAsYml0czo5LHZhbDoxNjh9LHtvcDowLGJpdHM6OCx2YWw6NH0se29wOjAsYml0czo4LHZhbDoxMzJ9LHtvcDowLGJpdHM6OCx2YWw6Njh9LHtvcDowLGJpdHM6OSx2YWw6MjMyfSx7b3A6MTYsYml0czo3LHZhbDo4fSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDo5Mn0se29wOjAsYml0czo4LHZhbDoyOH0se29wOjAsYml0czo5LHZhbDoxNTJ9LHtvcDoyMCxiaXRzOjcsdmFsOjgzfSx7b3A6MCxiaXRzOjgsdmFsOjEyNH0se29wOjAsYml0czo4LHZhbDo2MH0se29wOjAsYml0czo5LHZhbDoyMTZ9LFxcXHJcbiAgICB7b3A6MTgsYml0czo3LHZhbDoyM30se29wOjAsYml0czo4LHZhbDoxMDh9LHtvcDowLGJpdHM6OCx2YWw6NDR9LHtvcDowLGJpdHM6OSx2YWw6MTg0fSx7b3A6MCxiaXRzOjgsdmFsOjEyfSx7b3A6MCxiaXRzOjgsdmFsOjE0MH0se29wOjAsYml0czo4LHZhbDo3Nn0sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MjQ4fSx7b3A6MTYsYml0czo3LHZhbDozfSx7b3A6MCxiaXRzOjgsdmFsOjgyfSx7b3A6MCxiaXRzOjgsdmFsOjE4fSx7b3A6MjEsYml0czo4LHZhbDoxNjN9LHtvcDoxOSxiaXRzOjcsdmFsOjM1fSx7b3A6MCxiaXRzOjgsdmFsOjExNH0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6NTB9LHtvcDowLGJpdHM6OSx2YWw6MTk2fSx7b3A6MTcsYml0czo3LHZhbDoxMX0se29wOjAsYml0czo4LHZhbDo5OH0se29wOjAsYml0czo4LHZhbDozNH0se29wOjAsYml0czo5LHZhbDoxNjR9LHtvcDowLGJpdHM6OCx2YWw6Mn0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTMwfSx7b3A6MCxiaXRzOjgsdmFsOjY2fSx7b3A6MCxiaXRzOjksdmFsOjIyOH0se29wOjE2LGJpdHM6Nyx2YWw6N30se29wOjAsYml0czo4LHZhbDo5MH0se29wOjAsYml0czo4LHZhbDoyNn0se29wOjAsYml0czo5LHZhbDoxNDh9LFxcXHJcbiAgICB7b3A6MjAsYml0czo3LHZhbDo2N30se29wOjAsYml0czo4LHZhbDoxMjJ9LHtvcDowLGJpdHM6OCx2YWw6NTh9LHtvcDowLGJpdHM6OSx2YWw6MjEyfSx7b3A6MTgsYml0czo3LHZhbDoxOX0se29wOjAsYml0czo4LHZhbDoxMDZ9LHtvcDowLGJpdHM6OCx2YWw6NDJ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjksdmFsOjE4MH0se29wOjAsYml0czo4LHZhbDoxMH0se29wOjAsYml0czo4LHZhbDoxMzh9LHtvcDowLGJpdHM6OCx2YWw6NzR9LHtvcDowLGJpdHM6OSx2YWw6MjQ0fSx7b3A6MTYsYml0czo3LHZhbDo1fSx7b3A6MCxiaXRzOjgsdmFsOjg2fSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDoyMn0se29wOjY0LGJpdHM6OCx2YWw6MH0se29wOjE5LGJpdHM6Nyx2YWw6NTF9LHtvcDowLGJpdHM6OCx2YWw6MTE4fSx7b3A6MCxiaXRzOjgsdmFsOjU0fSx7b3A6MCxiaXRzOjksdmFsOjIwNH0se29wOjE3LGJpdHM6Nyx2YWw6MTV9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjEwMn0se29wOjAsYml0czo4LHZhbDozOH0se29wOjAsYml0czo5LHZhbDoxNzJ9LHtvcDowLGJpdHM6OCx2YWw6Nn0se29wOjAsYml0czo4LHZhbDoxMzR9LHtvcDowLGJpdHM6OCx2YWw6NzB9LHtvcDowLGJpdHM6OSx2YWw6MjM2fSxcXFxyXG4gICAge29wOjE2LGJpdHM6Nyx2YWw6OX0se29wOjAsYml0czo4LHZhbDo5NH0se29wOjAsYml0czo4LHZhbDozMH0se29wOjAsYml0czo5LHZhbDoxNTZ9LHtvcDoyMCxiaXRzOjcsdmFsOjk5fSx7b3A6MCxiaXRzOjgsdmFsOjEyNn0se29wOjAsYml0czo4LHZhbDo2Mn0sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MjIwfSx7b3A6MTgsYml0czo3LHZhbDoyN30se29wOjAsYml0czo4LHZhbDoxMTB9LHtvcDowLGJpdHM6OCx2YWw6NDZ9LHtvcDowLGJpdHM6OSx2YWw6MTg4fSx7b3A6MCxiaXRzOjgsdmFsOjE0fSx7b3A6MCxiaXRzOjgsdmFsOjE0Mn0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6Nzh9LHtvcDowLGJpdHM6OSx2YWw6MjUyfSx7b3A6OTYsYml0czo3LHZhbDowfSx7b3A6MCxiaXRzOjgsdmFsOjgxfSx7b3A6MCxiaXRzOjgsdmFsOjE3fSx7b3A6MjEsYml0czo4LHZhbDoxMzF9LHtvcDoxOCxiaXRzOjcsdmFsOjMxfSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDoxMTN9LHtvcDowLGJpdHM6OCx2YWw6NDl9LHtvcDowLGJpdHM6OSx2YWw6MTk0fSx7b3A6MTYsYml0czo3LHZhbDoxMH0se29wOjAsYml0czo4LHZhbDo5N30se29wOjAsYml0czo4LHZhbDozM30se29wOjAsYml0czo5LHZhbDoxNjJ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjF9LHtvcDowLGJpdHM6OCx2YWw6MTI5fSx7b3A6MCxiaXRzOjgsdmFsOjY1fSx7b3A6MCxiaXRzOjksdmFsOjIyNn0se29wOjE2LGJpdHM6Nyx2YWw6Nn0se29wOjAsYml0czo4LHZhbDo4OX0se29wOjAsYml0czo4LHZhbDoyNX0sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MTQ2fSx7b3A6MTksYml0czo3LHZhbDo1OX0se29wOjAsYml0czo4LHZhbDoxMjF9LHtvcDowLGJpdHM6OCx2YWw6NTd9LHtvcDowLGJpdHM6OSx2YWw6MjEwfSx7b3A6MTcsYml0czo3LHZhbDoxN30se29wOjAsYml0czo4LHZhbDoxMDV9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjQxfSx7b3A6MCxiaXRzOjksdmFsOjE3OH0se29wOjAsYml0czo4LHZhbDo5fSx7b3A6MCxiaXRzOjgsdmFsOjEzN30se29wOjAsYml0czo4LHZhbDo3M30se29wOjAsYml0czo5LHZhbDoyNDJ9LHtvcDoxNixiaXRzOjcsdmFsOjR9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjg1fSx7b3A6MCxiaXRzOjgsdmFsOjIxfSx7b3A6MTYsYml0czo4LHZhbDoyNTh9LHtvcDoxOSxiaXRzOjcsdmFsOjQzfSx7b3A6MCxiaXRzOjgsdmFsOjExN30se29wOjAsYml0czo4LHZhbDo1M30se29wOjAsYml0czo5LHZhbDoyMDJ9LFxcXHJcbiAgICB7b3A6MTcsYml0czo3LHZhbDoxM30se29wOjAsYml0czo4LHZhbDoxMDF9LHtvcDowLGJpdHM6OCx2YWw6Mzd9LHtvcDowLGJpdHM6OSx2YWw6MTcwfSx7b3A6MCxiaXRzOjgsdmFsOjV9LHtvcDowLGJpdHM6OCx2YWw6MTMzfSx7b3A6MCxiaXRzOjgsdmFsOjY5fSxcXFxyXG4gICAge29wOjAsYml0czo5LHZhbDoyMzR9LHtvcDoxNixiaXRzOjcsdmFsOjh9LHtvcDowLGJpdHM6OCx2YWw6OTN9LHtvcDowLGJpdHM6OCx2YWw6Mjl9LHtvcDowLGJpdHM6OSx2YWw6MTU0fSx7b3A6MjAsYml0czo3LHZhbDo4M30se29wOjAsYml0czo4LHZhbDoxMjV9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjYxfSx7b3A6MCxiaXRzOjksdmFsOjIxOH0se29wOjE4LGJpdHM6Nyx2YWw6MjN9LHtvcDowLGJpdHM6OCx2YWw6MTA5fSx7b3A6MCxiaXRzOjgsdmFsOjQ1fSx7b3A6MCxiaXRzOjksdmFsOjE4Nn0se29wOjAsYml0czo4LHZhbDoxM30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTQxfSx7b3A6MCxiaXRzOjgsdmFsOjc3fSx7b3A6MCxiaXRzOjksdmFsOjI1MH0se29wOjE2LGJpdHM6Nyx2YWw6M30se29wOjAsYml0czo4LHZhbDo4M30se29wOjAsYml0czo4LHZhbDoxOX0se29wOjIxLGJpdHM6OCx2YWw6MTk1fSxcXFxyXG4gICAge29wOjE5LGJpdHM6Nyx2YWw6MzV9LHtvcDowLGJpdHM6OCx2YWw6MTE1fSx7b3A6MCxiaXRzOjgsdmFsOjUxfSx7b3A6MCxiaXRzOjksdmFsOjE5OH0se29wOjE3LGJpdHM6Nyx2YWw6MTF9LHtvcDowLGJpdHM6OCx2YWw6OTl9LHtvcDowLGJpdHM6OCx2YWw6MzV9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjksdmFsOjE2Nn0se29wOjAsYml0czo4LHZhbDozfSx7b3A6MCxiaXRzOjgsdmFsOjEzMX0se29wOjAsYml0czo4LHZhbDo2N30se29wOjAsYml0czo5LHZhbDoyMzB9LHtvcDoxNixiaXRzOjcsdmFsOjd9LHtvcDowLGJpdHM6OCx2YWw6OTF9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjI3fSx7b3A6MCxiaXRzOjksdmFsOjE1MH0se29wOjIwLGJpdHM6Nyx2YWw6Njd9LHtvcDowLGJpdHM6OCx2YWw6MTIzfSx7b3A6MCxiaXRzOjgsdmFsOjU5fSx7b3A6MCxiaXRzOjksdmFsOjIxNH0se29wOjE4LGJpdHM6Nyx2YWw6MTl9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjEwN30se29wOjAsYml0czo4LHZhbDo0M30se29wOjAsYml0czo5LHZhbDoxODJ9LHtvcDowLGJpdHM6OCx2YWw6MTF9LHtvcDowLGJpdHM6OCx2YWw6MTM5fSx7b3A6MCxiaXRzOjgsdmFsOjc1fSx7b3A6MCxiaXRzOjksdmFsOjI0Nn0sXFxcclxuICAgIHtvcDoxNixiaXRzOjcsdmFsOjV9LHtvcDowLGJpdHM6OCx2YWw6ODd9LHtvcDowLGJpdHM6OCx2YWw6MjN9LHtvcDo2NCxiaXRzOjgsdmFsOjB9LHtvcDoxOSxiaXRzOjcsdmFsOjUxfSx7b3A6MCxiaXRzOjgsdmFsOjExOX0se29wOjAsYml0czo4LHZhbDo1NX0sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MjA2fSx7b3A6MTcsYml0czo3LHZhbDoxNX0se29wOjAsYml0czo4LHZhbDoxMDN9LHtvcDowLGJpdHM6OCx2YWw6Mzl9LHtvcDowLGJpdHM6OSx2YWw6MTc0fSx7b3A6MCxiaXRzOjgsdmFsOjd9LHtvcDowLGJpdHM6OCx2YWw6MTM1fSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDo3MX0se29wOjAsYml0czo5LHZhbDoyMzh9LHtvcDoxNixiaXRzOjcsdmFsOjl9LHtvcDowLGJpdHM6OCx2YWw6OTV9LHtvcDowLGJpdHM6OCx2YWw6MzF9LHtvcDowLGJpdHM6OSx2YWw6MTU4fSx7b3A6MjAsYml0czo3LHZhbDo5OX0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTI3fSx7b3A6MCxiaXRzOjgsdmFsOjYzfSx7b3A6MCxiaXRzOjksdmFsOjIyMn0se29wOjE4LGJpdHM6Nyx2YWw6Mjd9LHtvcDowLGJpdHM6OCx2YWw6MTExfSx7b3A6MCxiaXRzOjgsdmFsOjQ3fSx7b3A6MCxiaXRzOjksdmFsOjE5MH0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTV9LHtvcDowLGJpdHM6OCx2YWw6MTQzfSx7b3A6MCxiaXRzOjgsdmFsOjc5fSx7b3A6MCxiaXRzOjksdmFsOjI1NH0se29wOjk2LGJpdHM6Nyx2YWw6MH0se29wOjAsYml0czo4LHZhbDo4MH0se29wOjAsYml0czo4LHZhbDoxNn0sXFxcclxuICAgIHtvcDoyMCxiaXRzOjgsdmFsOjExNX0se29wOjE4LGJpdHM6Nyx2YWw6MzF9LHtvcDowLGJpdHM6OCx2YWw6MTEyfSx7b3A6MCxiaXRzOjgsdmFsOjQ4fSx7b3A6MCxiaXRzOjksdmFsOjE5M30se29wOjE2LGJpdHM6Nyx2YWw6MTB9LHtvcDowLGJpdHM6OCx2YWw6OTZ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjMyfSx7b3A6MCxiaXRzOjksdmFsOjE2MX0se29wOjAsYml0czo4LHZhbDowfSx7b3A6MCxiaXRzOjgsdmFsOjEyOH0se29wOjAsYml0czo4LHZhbDo2NH0se29wOjAsYml0czo5LHZhbDoyMjV9LHtvcDoxNixiaXRzOjcsdmFsOjZ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjg4fSx7b3A6MCxiaXRzOjgsdmFsOjI0fSx7b3A6MCxiaXRzOjksdmFsOjE0NX0se29wOjE5LGJpdHM6Nyx2YWw6NTl9LHtvcDowLGJpdHM6OCx2YWw6MTIwfSx7b3A6MCxiaXRzOjgsdmFsOjU2fSx7b3A6MCxiaXRzOjksdmFsOjIwOX0sXFxcclxuICAgIHtvcDoxNyxiaXRzOjcsdmFsOjE3fSx7b3A6MCxiaXRzOjgsdmFsOjEwNH0se29wOjAsYml0czo4LHZhbDo0MH0se29wOjAsYml0czo5LHZhbDoxNzd9LHtvcDowLGJpdHM6OCx2YWw6OH0se29wOjAsYml0czo4LHZhbDoxMzZ9LHtvcDowLGJpdHM6OCx2YWw6NzJ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjksdmFsOjI0MX0se29wOjE2LGJpdHM6Nyx2YWw6NH0se29wOjAsYml0czo4LHZhbDo4NH0se29wOjAsYml0czo4LHZhbDoyMH0se29wOjIxLGJpdHM6OCx2YWw6MjI3fSx7b3A6MTksYml0czo3LHZhbDo0M30se29wOjAsYml0czo4LHZhbDoxMTZ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjUyfSx7b3A6MCxiaXRzOjksdmFsOjIwMX0se29wOjE3LGJpdHM6Nyx2YWw6MTN9LHtvcDowLGJpdHM6OCx2YWw6MTAwfSx7b3A6MCxiaXRzOjgsdmFsOjM2fSx7b3A6MCxiaXRzOjksdmFsOjE2OX0se29wOjAsYml0czo4LHZhbDo0fSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDoxMzJ9LHtvcDowLGJpdHM6OCx2YWw6Njh9LHtvcDowLGJpdHM6OSx2YWw6MjMzfSx7b3A6MTYsYml0czo3LHZhbDo4fSx7b3A6MCxiaXRzOjgsdmFsOjkyfSx7b3A6MCxiaXRzOjgsdmFsOjI4fSx7b3A6MCxiaXRzOjksdmFsOjE1M30sXFxcclxuICAgIHtvcDoyMCxiaXRzOjcsdmFsOjgzfSx7b3A6MCxiaXRzOjgsdmFsOjEyNH0se29wOjAsYml0czo4LHZhbDo2MH0se29wOjAsYml0czo5LHZhbDoyMTd9LHtvcDoxOCxiaXRzOjcsdmFsOjIzfSx7b3A6MCxiaXRzOjgsdmFsOjEwOH0se29wOjAsYml0czo4LHZhbDo0NH0sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MTg1fSx7b3A6MCxiaXRzOjgsdmFsOjEyfSx7b3A6MCxiaXRzOjgsdmFsOjE0MH0se29wOjAsYml0czo4LHZhbDo3Nn0se29wOjAsYml0czo5LHZhbDoyNDl9LHtvcDoxNixiaXRzOjcsdmFsOjN9LHtvcDowLGJpdHM6OCx2YWw6ODJ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjE4fSx7b3A6MjEsYml0czo4LHZhbDoxNjN9LHtvcDoxOSxiaXRzOjcsdmFsOjM1fSx7b3A6MCxiaXRzOjgsdmFsOjExNH0se29wOjAsYml0czo4LHZhbDo1MH0se29wOjAsYml0czo5LHZhbDoxOTd9LHtvcDoxNyxiaXRzOjcsdmFsOjExfSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDo5OH0se29wOjAsYml0czo4LHZhbDozNH0se29wOjAsYml0czo5LHZhbDoxNjV9LHtvcDowLGJpdHM6OCx2YWw6Mn0se29wOjAsYml0czo4LHZhbDoxMzB9LHtvcDowLGJpdHM6OCx2YWw6NjZ9LHtvcDowLGJpdHM6OSx2YWw6MjI5fSxcXFxyXG4gICAge29wOjE2LGJpdHM6Nyx2YWw6N30se29wOjAsYml0czo4LHZhbDo5MH0se29wOjAsYml0czo4LHZhbDoyNn0se29wOjAsYml0czo5LHZhbDoxNDl9LHtvcDoyMCxiaXRzOjcsdmFsOjY3fSx7b3A6MCxiaXRzOjgsdmFsOjEyMn0se29wOjAsYml0czo4LHZhbDo1OH0sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MjEzfSx7b3A6MTgsYml0czo3LHZhbDoxOX0se29wOjAsYml0czo4LHZhbDoxMDZ9LHtvcDowLGJpdHM6OCx2YWw6NDJ9LHtvcDowLGJpdHM6OSx2YWw6MTgxfSx7b3A6MCxiaXRzOjgsdmFsOjEwfSx7b3A6MCxiaXRzOjgsdmFsOjEzOH0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6NzR9LHtvcDowLGJpdHM6OSx2YWw6MjQ1fSx7b3A6MTYsYml0czo3LHZhbDo1fSx7b3A6MCxiaXRzOjgsdmFsOjg2fSx7b3A6MCxiaXRzOjgsdmFsOjIyfSx7b3A6NjQsYml0czo4LHZhbDowfSx7b3A6MTksYml0czo3LHZhbDo1MX0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTE4fSx7b3A6MCxiaXRzOjgsdmFsOjU0fSx7b3A6MCxiaXRzOjksdmFsOjIwNX0se29wOjE3LGJpdHM6Nyx2YWw6MTV9LHtvcDowLGJpdHM6OCx2YWw6MTAyfSx7b3A6MCxiaXRzOjgsdmFsOjM4fSx7b3A6MCxiaXRzOjksdmFsOjE3M30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6Nn0se29wOjAsYml0czo4LHZhbDoxMzR9LHtvcDowLGJpdHM6OCx2YWw6NzB9LHtvcDowLGJpdHM6OSx2YWw6MjM3fSx7b3A6MTYsYml0czo3LHZhbDo5fSx7b3A6MCxiaXRzOjgsdmFsOjk0fSx7b3A6MCxiaXRzOjgsdmFsOjMwfSxcXFxyXG4gICAge29wOjAsYml0czo5LHZhbDoxNTd9LHtvcDoyMCxiaXRzOjcsdmFsOjk5fSx7b3A6MCxiaXRzOjgsdmFsOjEyNn0se29wOjAsYml0czo4LHZhbDo2Mn0se29wOjAsYml0czo5LHZhbDoyMjF9LHtvcDoxOCxiaXRzOjcsdmFsOjI3fSx7b3A6MCxiaXRzOjgsdmFsOjExMH0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6NDZ9LHtvcDowLGJpdHM6OSx2YWw6MTg5fSx7b3A6MCxiaXRzOjgsdmFsOjE0fSx7b3A6MCxiaXRzOjgsdmFsOjE0Mn0se29wOjAsYml0czo4LHZhbDo3OH0se29wOjAsYml0czo5LHZhbDoyNTN9LHtvcDo5NixiaXRzOjcsdmFsOjB9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjgxfSx7b3A6MCxiaXRzOjgsdmFsOjE3fSx7b3A6MjEsYml0czo4LHZhbDoxMzF9LHtvcDoxOCxiaXRzOjcsdmFsOjMxfSx7b3A6MCxiaXRzOjgsdmFsOjExM30se29wOjAsYml0czo4LHZhbDo0OX0se29wOjAsYml0czo5LHZhbDoxOTV9LFxcXHJcbiAgICB7b3A6MTYsYml0czo3LHZhbDoxMH0se29wOjAsYml0czo4LHZhbDo5N30se29wOjAsYml0czo4LHZhbDozM30se29wOjAsYml0czo5LHZhbDoxNjN9LHtvcDowLGJpdHM6OCx2YWw6MX0se29wOjAsYml0czo4LHZhbDoxMjl9LHtvcDowLGJpdHM6OCx2YWw6NjV9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjksdmFsOjIyN30se29wOjE2LGJpdHM6Nyx2YWw6Nn0se29wOjAsYml0czo4LHZhbDo4OX0se29wOjAsYml0czo4LHZhbDoyNX0se29wOjAsYml0czo5LHZhbDoxNDd9LHtvcDoxOSxiaXRzOjcsdmFsOjU5fSx7b3A6MCxiaXRzOjgsdmFsOjEyMX0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6NTd9LHtvcDowLGJpdHM6OSx2YWw6MjExfSx7b3A6MTcsYml0czo3LHZhbDoxN30se29wOjAsYml0czo4LHZhbDoxMDV9LHtvcDowLGJpdHM6OCx2YWw6NDF9LHtvcDowLGJpdHM6OSx2YWw6MTc5fSx7b3A6MCxiaXRzOjgsdmFsOjl9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjEzN30se29wOjAsYml0czo4LHZhbDo3M30se29wOjAsYml0czo5LHZhbDoyNDN9LHtvcDoxNixiaXRzOjcsdmFsOjR9LHtvcDowLGJpdHM6OCx2YWw6ODV9LHtvcDowLGJpdHM6OCx2YWw6MjF9LHtvcDoxNixiaXRzOjgsdmFsOjI1OH0sXFxcclxuICAgIHtvcDoxOSxiaXRzOjcsdmFsOjQzfSx7b3A6MCxiaXRzOjgsdmFsOjExN30se29wOjAsYml0czo4LHZhbDo1M30se29wOjAsYml0czo5LHZhbDoyMDN9LHtvcDoxNyxiaXRzOjcsdmFsOjEzfSx7b3A6MCxiaXRzOjgsdmFsOjEwMX0se29wOjAsYml0czo4LHZhbDozN30sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MTcxfSx7b3A6MCxiaXRzOjgsdmFsOjV9LHtvcDowLGJpdHM6OCx2YWw6MTMzfSx7b3A6MCxiaXRzOjgsdmFsOjY5fSx7b3A6MCxiaXRzOjksdmFsOjIzNX0se29wOjE2LGJpdHM6Nyx2YWw6OH0se29wOjAsYml0czo4LHZhbDo5M30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6Mjl9LHtvcDowLGJpdHM6OSx2YWw6MTU1fSx7b3A6MjAsYml0czo3LHZhbDo4M30se29wOjAsYml0czo4LHZhbDoxMjV9LHtvcDowLGJpdHM6OCx2YWw6NjF9LHtvcDowLGJpdHM6OSx2YWw6MjE5fSx7b3A6MTgsYml0czo3LHZhbDoyM30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTA5fSx7b3A6MCxiaXRzOjgsdmFsOjQ1fSx7b3A6MCxiaXRzOjksdmFsOjE4N30se29wOjAsYml0czo4LHZhbDoxM30se29wOjAsYml0czo4LHZhbDoxNDF9LHtvcDowLGJpdHM6OCx2YWw6Nzd9LHtvcDowLGJpdHM6OSx2YWw6MjUxfSxcXFxyXG4gICAge29wOjE2LGJpdHM6Nyx2YWw6M30se29wOjAsYml0czo4LHZhbDo4M30se29wOjAsYml0czo4LHZhbDoxOX0se29wOjIxLGJpdHM6OCx2YWw6MTk1fSx7b3A6MTksYml0czo3LHZhbDozNX0se29wOjAsYml0czo4LHZhbDoxMTV9LHtvcDowLGJpdHM6OCx2YWw6NTF9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjksdmFsOjE5OX0se29wOjE3LGJpdHM6Nyx2YWw6MTF9LHtvcDowLGJpdHM6OCx2YWw6OTl9LHtvcDowLGJpdHM6OCx2YWw6MzV9LHtvcDowLGJpdHM6OSx2YWw6MTY3fSx7b3A6MCxiaXRzOjgsdmFsOjN9LHtvcDowLGJpdHM6OCx2YWw6MTMxfSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDo2N30se29wOjAsYml0czo5LHZhbDoyMzF9LHtvcDoxNixiaXRzOjcsdmFsOjd9LHtvcDowLGJpdHM6OCx2YWw6OTF9LHtvcDowLGJpdHM6OCx2YWw6Mjd9LHtvcDowLGJpdHM6OSx2YWw6MTUxfSx7b3A6MjAsYml0czo3LHZhbDo2N30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTIzfSx7b3A6MCxiaXRzOjgsdmFsOjU5fSx7b3A6MCxiaXRzOjksdmFsOjIxNX0se29wOjE4LGJpdHM6Nyx2YWw6MTl9LHtvcDowLGJpdHM6OCx2YWw6MTA3fSx7b3A6MCxiaXRzOjgsdmFsOjQzfSx7b3A6MCxiaXRzOjksdmFsOjE4M30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTF9LHtvcDowLGJpdHM6OCx2YWw6MTM5fSx7b3A6MCxiaXRzOjgsdmFsOjc1fSx7b3A6MCxiaXRzOjksdmFsOjI0N30se29wOjE2LGJpdHM6Nyx2YWw6NX0se29wOjAsYml0czo4LHZhbDo4N30se29wOjAsYml0czo4LHZhbDoyM30sXFxcclxuICAgIHtvcDo2NCxiaXRzOjgsdmFsOjB9LHtvcDoxOSxiaXRzOjcsdmFsOjUxfSx7b3A6MCxiaXRzOjgsdmFsOjExOX0se29wOjAsYml0czo4LHZhbDo1NX0se29wOjAsYml0czo5LHZhbDoyMDd9LHtvcDoxNyxiaXRzOjcsdmFsOjE1fSx7b3A6MCxiaXRzOjgsdmFsOjEwM30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6Mzl9LHtvcDowLGJpdHM6OSx2YWw6MTc1fSx7b3A6MCxiaXRzOjgsdmFsOjd9LHtvcDowLGJpdHM6OCx2YWw6MTM1fSx7b3A6MCxiaXRzOjgsdmFsOjcxfSx7b3A6MCxiaXRzOjksdmFsOjIzOX0se29wOjE2LGJpdHM6Nyx2YWw6OX0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6OTV9LHtvcDowLGJpdHM6OCx2YWw6MzF9LHtvcDowLGJpdHM6OSx2YWw6MTU5fSx7b3A6MjAsYml0czo3LHZhbDo5OX0se29wOjAsYml0czo4LHZhbDoxMjd9LHtvcDowLGJpdHM6OCx2YWw6NjN9LHtvcDowLGJpdHM6OSx2YWw6MjIzfSxcXFxyXG4gICAge29wOjE4LGJpdHM6Nyx2YWw6Mjd9LHtvcDowLGJpdHM6OCx2YWw6MTExfSx7b3A6MCxiaXRzOjgsdmFsOjQ3fSx7b3A6MCxiaXRzOjksdmFsOjE5MX0se29wOjAsYml0czo4LHZhbDoxNX0se29wOjAsYml0czo4LHZhbDoxNDN9LHtvcDowLGJpdHM6OCx2YWw6Nzl9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjksdmFsOjI1NX1cXFxyXG5dKVwiO1xyXG5cclxudmFyIGRpc3RmaXhfYXJ5ID0gbnVsbDtcclxudmFyIGRpc3RmaXhfZGVmID0gXCIoW1xcXHJcbiAgICB7b3A6MTYsYml0czo1LHZhbDoxfSx7b3A6MjMsYml0czo1LHZhbDoyNTd9LHtvcDoxOSxiaXRzOjUsdmFsOjE3fSx7b3A6MjcsYml0czo1LHZhbDo0MDk3fSx7b3A6MTcsYml0czo1LHZhbDo1fSx7b3A6MjUsYml0czo1LHZhbDoxMDI1fSxcXFxyXG4gICAge29wOjIxLGJpdHM6NSx2YWw6NjV9LHtvcDoyOSxiaXRzOjUsdmFsOjE2Mzg1fSx7b3A6MTYsYml0czo1LHZhbDozfSx7b3A6MjQsYml0czo1LHZhbDo1MTN9LHtvcDoyMCxiaXRzOjUsdmFsOjMzfSx7b3A6MjgsYml0czo1LHZhbDo4MTkzfSxcXFxyXG4gICAge29wOjE4LGJpdHM6NSx2YWw6OX0se29wOjI2LGJpdHM6NSx2YWw6MjA0OX0se29wOjIyLGJpdHM6NSx2YWw6MTI5fSx7b3A6NjQsYml0czo1LHZhbDowfSx7b3A6MTYsYml0czo1LHZhbDoyfSx7b3A6MjMsYml0czo1LHZhbDozODV9LFxcXHJcbiAgICB7b3A6MTksYml0czo1LHZhbDoyNX0se29wOjI3LGJpdHM6NSx2YWw6NjE0NX0se29wOjE3LGJpdHM6NSx2YWw6N30se29wOjI1LGJpdHM6NSx2YWw6MTUzN30se29wOjIxLGJpdHM6NSx2YWw6OTd9LHtvcDoyOSxiaXRzOjUsdmFsOjI0NTc3fSxcXFxyXG4gICAge29wOjE2LGJpdHM6NSx2YWw6NH0se29wOjI0LGJpdHM6NSx2YWw6NzY5fSx7b3A6MjAsYml0czo1LHZhbDo0OX0se29wOjI4LGJpdHM6NSx2YWw6MTIyODl9LHtvcDoxOCxiaXRzOjUsdmFsOjEzfSx7b3A6MjYsYml0czo1LHZhbDozMDczfSxcXFxyXG4gICAge29wOjIyLGJpdHM6NSx2YWw6MTkzfSx7b3A6NjQsYml0czo1LHZhbDowfVxcXHJcbl0pXCI7XHJcblxyXG5mdW5jdGlvbiBmaXhlZHRhYmxlcyhzdGF0ZSlcclxue1xyXG4gICAgdmFyIGk7XHJcbiAgICBpZighbGVuZml4X2FyeSlcclxuICAgICAgICBsZW5maXhfYXJ5ID0gZXZhbChsZW5maXhfZGVmKTtcclxuICAgIGlmKCFkaXN0Zml4X2FyeSlcclxuICAgICAgICBkaXN0Zml4X2FyeSA9IGV2YWwoZGlzdGZpeF9kZWYpO1xyXG4gICAgc3RhdGUubGVuY29kZSA9IDA7XHJcbiAgICBzdGF0ZS5kaXN0Y29kZSA9IDUxMjtcclxuICAgIGZvcihpID0gMDsgaSA8IDUxMjsgaSsrKSB7XHJcbiAgICAgICAgc3RhdGUuY29kZXNbaV0gPSBsZW5maXhfYXJ5W2ldO1xyXG4gICAgfVxyXG4gICAgZm9yKGkgPSAwOyBpIDwgMzI7IGkrKykge1xyXG4gICAgICAgIHN0YXRlLmNvZGVzW2kgKyA1MTJdID0gZGlzdGZpeF9hcnlbaV07XHJcbiAgICB9XHJcbiAgICBzdGF0ZS5sZW5iaXRzID0gOTtcclxuICAgIHN0YXRlLmRpc3RiaXRzID0gNTtcclxufVxyXG5cclxuLypcclxuICBVcGRhdGUgdGhlIHdpbmRvdyB3aXRoIHRoZSBsYXN0IHdzaXplIChub3JtYWxseSAzMkspIGJ5dGVzIHdyaXR0ZW4gYmVmb3JlXHJcbiAgcmV0dXJuaW5nLiAgSWYgd2luZG93IGRvZXMgbm90IGV4aXN0IHlldCwgY3JlYXRlIGl0LiAgVGhpcyBpcyBvbmx5IGNhbGxlZFxyXG4gIHdoZW4gYSB3aW5kb3cgaXMgYWxyZWFkeSBpbiB1c2UsIG9yIHdoZW4gb3V0cHV0IGhhcyBiZWVuIHdyaXR0ZW4gZHVyaW5nIHRoaXNcclxuICBpbmZsYXRlIGNhbGwsIGJ1dCB0aGUgZW5kIG9mIHRoZSBkZWZsYXRlIHN0cmVhbSBoYXMgbm90IGJlZW4gcmVhY2hlZCB5ZXQuXHJcbiAgSXQgaXMgYWxzbyBjYWxsZWQgdG8gY3JlYXRlIGEgd2luZG93IGZvciBkaWN0aW9uYXJ5IGRhdGEgd2hlbiBhIGRpY3Rpb25hcnlcclxuICBpcyBsb2FkZWQuXHJcblxyXG4gIFByb3ZpZGluZyBvdXRwdXQgYnVmZmVycyBsYXJnZXIgdGhhbiAzMksgdG8gaW5mbGF0ZSgpIHNob3VsZCBwcm92aWRlIGEgc3BlZWRcclxuICBhZHZhbnRhZ2UsIHNpbmNlIG9ubHkgdGhlIGxhc3QgMzJLIG9mIG91dHB1dCBpcyBjb3BpZWQgdG8gdGhlIHNsaWRpbmcgd2luZG93XHJcbiAgdXBvbiByZXR1cm4gZnJvbSBpbmZsYXRlKCksIGFuZCBzaW5jZSBhbGwgZGlzdGFuY2VzIGFmdGVyIHRoZSBmaXJzdCAzMksgb2ZcclxuICBvdXRwdXQgd2lsbCBmYWxsIGluIHRoZSBvdXRwdXQgZGF0YSwgbWFraW5nIG1hdGNoIGNvcGllcyBzaW1wbGVyIGFuZCBmYXN0ZXIuXHJcbiAgVGhlIGFkdmFudGFnZSBtYXkgYmUgZGVwZW5kZW50IG9uIHRoZSBzaXplIG9mIHRoZSBwcm9jZXNzb3IncyBkYXRhIGNhY2hlcy5cclxuKi9cclxuZnVuY3Rpb24gdXBkYXRld2luZG93KHN0cm0pXHJcbntcclxuICAgIHZhciBzdGF0ZSA9IHN0cm0uc3RhdGU7XHJcblx0dmFyIG91dCA9IHN0cm0ub3V0cHV0X2RhdGEubGVuZ3RoO1xyXG5cclxuICAgIC8qIGlmIGl0IGhhc24ndCBiZWVuIGRvbmUgYWxyZWFkeSwgYWxsb2NhdGUgc3BhY2UgZm9yIHRoZSB3aW5kb3cgKi9cclxuICAgIGlmIChzdGF0ZS53aW5kb3cgPT09IG51bGwpIHtcclxuICAgICAgICBzdGF0ZS53aW5kb3cgPSAnJztcclxuXHR9XHJcblxyXG4gICAgLyogaWYgd2luZG93IG5vdCBpbiB1c2UgeWV0LCBpbml0aWFsaXplICovXHJcbiAgICBpZiAoc3RhdGUud3NpemUgPT0gMCkge1xyXG4gICAgICAgIHN0YXRlLndzaXplID0gMSA8PCBzdGF0ZS53Yml0cztcclxuXHR9XHJcblxyXG4gICAgLy8gemxpYi5qczogU2xpZGluZyB3aW5kb3dcclxuICAgIGlmIChvdXQgPj0gc3RhdGUud3NpemUpIHtcclxuICAgICAgICBzdGF0ZS53aW5kb3cgPSBzdHJtLm91dHB1dF9kYXRhLnN1YnN0cmluZyhvdXQgLSBzdGF0ZS53c2l6ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGlmKHN0YXRlLndoYXZlICsgb3V0IDwgc3RhdGUud3NpemUpIHtcclxuXHRcdFx0c3RhdGUud2luZG93ICs9IHN0cm0ub3V0cHV0X2RhdGE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdGF0ZS53aW5kb3cgPSBzdGF0ZS53aW5kb3cuc3Vic3RyaW5nKHN0YXRlLndoYXZlIC0gKHN0YXRlLndzaXplIC0gb3V0KSkgKyBzdHJtLm91dHB1dF9kYXRhO1xyXG5cdFx0fVxyXG5cdH1cclxuICAgIHN0YXRlLndoYXZlID0gc3RhdGUud2luZG93Lmxlbmd0aDtcclxuXHRpZihzdGF0ZS53aGF2ZSA8IHN0YXRlLndzaXplKSB7XHJcblx0XHRzdGF0ZS53bmV4dCA9IHN0YXRlLndoYXZlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdGF0ZS53bmV4dCA9IDA7XHJcblx0fVxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuXHJcblxyXG4vLyAjaWZkZWYgR1VOWklQXHJcbmZ1bmN0aW9uIENSQzIoc3RybSwgd29yZClcclxue1xyXG5cdHZhciBoYnVmID0gW3dvcmQgJiAweGZmLCAod29yZCA+Pj4gOCkgJiAweGZmXTtcclxuXHRzdHJtLnN0YXRlLmNoZWNrID0gc3RybS5jaGVja3N1bV9mdW5jdGlvbihzdHJtLnN0YXRlLmNoZWNrLCBoYnVmLCAwLCAyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ1JDNChzdHJtLCB3b3JkKVxyXG57XHJcblx0dmFyIGhidWYgPSBbd29yZCAmIDB4ZmYsXHJcblx0XHRcdFx0KHdvcmQgPj4+IDgpICYgMHhmZixcclxuXHRcdFx0XHQod29yZCA+Pj4gMTYpICYgMHhmZixcclxuXHRcdFx0XHQod29yZCA+Pj4gMjQpICYgMHhmZl07XHJcblx0c3RybS5zdGF0ZS5jaGVjayA9IHN0cm0uY2hlY2tzdW1fZnVuY3Rpb24oc3RybS5zdGF0ZS5jaGVjaywgaGJ1ZiwgMCwgNCk7XHJcbn1cclxuXHJcbi8qIExvYWQgcmVnaXN0ZXJzIHdpdGggc3RhdGUgaW4gaW5mbGF0ZSgpIGZvciBzcGVlZCAqL1xyXG5mdW5jdGlvbiBMT0FEKHN0cm0sIHMpXHJcbntcclxuICAgIHMuc3RybSA9IHN0cm07ICAgICAgICAgICAgLyogel9zdHJlYW0gKi9cclxuICAgIHMubGVmdCA9IHN0cm0uYXZhaWxfb3V0OyAgLyogYXZhaWxhYmxlIG91dHB1dCAqL1xyXG4gICAgcy5uZXh0ID0gc3RybS5uZXh0X2luOyAvKiBuZXh0IGlucHV0ICovXHJcbiAgICBzLmhhdmUgPSBzdHJtLmF2YWlsX2luOyAgIC8qIGF2YWlsYWJsZSBpbnB1dCAqL1xyXG4gICAgcy5ob2xkID0gc3RybS5zdGF0ZS5ob2xkOyAvKiBiaXQgYnVmZmVyICovXHJcbiAgICBzLmJpdHMgPSBzdHJtLnN0YXRlLmJpdHM7IC8qIGJpdHMgaW4gYml0IGJ1ZmZlciAqL1xyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcbi8qIFJlc3RvcmUgc3RhdGUgZnJvbSByZWdpc3RlcnMgaW4gaW5mbGF0ZSgpICovXHJcbmZ1bmN0aW9uIFJFU1RPUkUocylcclxue1xyXG4gICAgdmFyIHN0cm0gPSBzLnN0cm07XHJcbiAgICBzdHJtLm5leHRfaW4gPSBzLm5leHQ7XHJcbiAgICBzdHJtLmF2YWlsX291dCA9IHMubGVmdDtcclxuICAgIHN0cm0uYXZhaWxfaW4gPSBzLmhhdmU7XHJcbiAgICBzdHJtLnN0YXRlLmhvbGQgPSBzLmhvbGQ7XHJcbiAgICBzdHJtLnN0YXRlLmJpdHMgPSBzLmJpdHM7XHJcbn1cclxuXHJcbi8qIENsZWFyIHRoZSBpbnB1dCBiaXQgYWNjdW11bGF0b3IgKi9cclxuZnVuY3Rpb24gSU5JVEJJVFMocylcclxue1xyXG4gICAgcy5ob2xkID0gMDtcclxuICAgIHMuYml0cyA9IDA7XHJcbn1cclxuXHJcbi8qIEdldCBhIGJ5dGUgb2YgaW5wdXQgaW50byB0aGUgYml0IGFjY3VtdWxhdG9yLCBvciByZXR1cm4gZnJvbSBpbmZsYXRlKClcclxuICAgaWYgdGhlcmUgaXMgbm8gaW5wdXQgYXZhaWxhYmxlLiAqL1xyXG5mdW5jdGlvbiBQVUxMQllURShzKVxyXG57XHJcbiAgICBpZiAocy5oYXZlID09IDApIHJldHVybiBmYWxzZTtcclxuICAgIHMuaGF2ZS0tO1xyXG4gICAgcy5ob2xkICs9IChzLnN0cm0uaW5wdXRfZGF0YS5jaGFyQ29kZUF0KHMubmV4dCsrKSAmIDB4ZmYpIDw8IHMuYml0cztcclxuICAgIHMuYml0cyArPSA4O1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qIEFzc3VyZSB0aGF0IHRoZXJlIGFyZSBhdCBsZWFzdCBuIGJpdHMgaW4gdGhlIGJpdCBhY2N1bXVsYXRvci4gIElmIHRoZXJlIGlzXHJcbiAgIG5vdCBlbm91Z2ggYXZhaWxhYmxlIGlucHV0IHRvIGRvIHRoYXQsIHRoZW4gcmV0dXJuIGZyb20gaW5mbGF0ZSgpLiAqL1xyXG5mdW5jdGlvbiBORUVEQklUUyhzLCBuKVxyXG57XHJcbiAgICAvLyBpZih0eXBlb2YgbiAhPSAnbnVtYmVyJykgdGhyb3cgJ0VSUk9SJztcclxuICAgIHdoaWxlIChzLmJpdHMgPCBuKSB7XHJcbiAgICAgICAgaWYoIVBVTExCWVRFKHMpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyogUmV0dXJuIHRoZSBsb3cgbiBiaXRzIG9mIHRoZSBiaXQgYWNjdW11bGF0b3IgKG4gPCAxNikgKi9cclxuZnVuY3Rpb24gQklUUyhzLCBuKVxyXG57XHJcbiAgICByZXR1cm4gcy5ob2xkICYgKCgxIDw8IG4pIC0gMSk7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSBuIGJpdHMgZnJvbSB0aGUgYml0IGFjY3VtdWxhdG9yICovXHJcbmZ1bmN0aW9uIERST1BCSVRTKHMsIG4pXHJcbntcclxuICAgIC8vIGlmKHR5cGVvZiBuICE9ICdudW1iZXInKSB0aHJvdyAnRVJST1InO1xyXG4gICAgcy5ob2xkID4+Pj0gbjtcclxuICAgIHMuYml0cyAtPSBuO1xyXG59XHJcblxyXG4vKiBSZW1vdmUgemVybyB0byBzZXZlbiBiaXRzIGFzIG5lZWRlZCB0byBnbyB0byBhIGJ5dGUgYm91bmRhcnkgKi9cclxuZnVuY3Rpb24gQllURUJJVFMocylcclxue1xyXG4gICAgcy5ob2xkID4+Pj0gcy5iaXRzICYgNztcclxuICAgIHMuYml0cyAtPSBzLmJpdHMgJiA3O1xyXG59XHJcblxyXG4vKiBSZXZlcnNlIHRoZSBieXRlcyBpbiBhIDMyLWJpdCB2YWx1ZSAqL1xyXG5mdW5jdGlvbiBSRVZFUlNFKHEpXHJcbntcclxuICAgIHJldHVybiAoKHEgPj4+IDI0KSAmIDB4ZmYpICtcclxuXHRcdCgocSA+Pj4gOCkgJiAweGZmMDApICtcclxuXHRcdCgocSAmIDB4ZmYwMCkgPDwgOCkgK1xyXG5cdFx0KChxICYgMHhmZikgPDwgMjQpO1xyXG59XHJcblxyXG4vKlxyXG4gICBpbmZsYXRlKCkgdXNlcyBhIHN0YXRlIG1hY2hpbmUgdG8gcHJvY2VzcyBhcyBtdWNoIGlucHV0IGRhdGEgYW5kIGdlbmVyYXRlIGFzXHJcbiAgIG11Y2ggb3V0cHV0IGRhdGEgYXMgcG9zc2libGUgYmVmb3JlIHJldHVybmluZy4gIFRoZSBzdGF0ZSBtYWNoaW5lIGlzXHJcbiAgIHN0cnVjdHVyZWQgcm91Z2hseSBhcyBmb2xsb3dzOlxyXG5cclxuICAgIGZvciAoOzspIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgIC4uLlxyXG4gICAgY2FzZSBTVEFURW46XHJcbiAgICAgICAgaWYgKG5vdCBlbm91Z2ggaW5wdXQgZGF0YSBvciBvdXRwdXQgc3BhY2UgdG8gbWFrZSBwcm9ncmVzcylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC4uLiBtYWtlIHByb2dyZXNzIC4uLlxyXG4gICAgICAgIHN0YXRlID0gU1RBVEVtO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgLi4uXHJcbiAgICB9XHJcblxyXG4gICBzbyB3aGVuIGluZmxhdGUoKSBpcyBjYWxsZWQgYWdhaW4sIHRoZSBzYW1lIGNhc2UgaXMgYXR0ZW1wdGVkIGFnYWluLCBhbmRcclxuICAgaWYgdGhlIGFwcHJvcHJpYXRlIHJlc291cmNlcyBhcmUgcHJvdmlkZWQsIHRoZSBtYWNoaW5lIHByb2NlZWRzIHRvIHRoZVxyXG4gICBuZXh0IHN0YXRlLiAgVGhlIE5FRURCSVRTKCkgbWFjcm8gaXMgdXN1YWxseSB0aGUgd2F5IHRoZSBzdGF0ZSBldmFsdWF0ZXNcclxuICAgd2hldGhlciBpdCBjYW4gcHJvY2VlZCBvciBzaG91bGQgcmV0dXJuLiAgTkVFREJJVFMoKSBkb2VzIHRoZSByZXR1cm4gaWZcclxuICAgdGhlIHJlcXVlc3RlZCBiaXRzIGFyZSBub3QgYXZhaWxhYmxlLiAgVGhlIHR5cGljYWwgdXNlIG9mIHRoZSBCSVRTIG1hY3Jvc1xyXG4gICBpczpcclxuXHJcbiAgICAgICAgTkVFREJJVFMobik7XHJcbiAgICAgICAgLi4uIGRvIHNvbWV0aGluZyB3aXRoIEJJVFMobikgLi4uXHJcbiAgICAgICAgRFJPUEJJVFMobik7XHJcblxyXG4gICB3aGVyZSBORUVEQklUUyhuKSBlaXRoZXIgcmV0dXJucyBmcm9tIGluZmxhdGUoKSBpZiB0aGVyZSBpc24ndCBlbm91Z2hcclxuICAgaW5wdXQgbGVmdCB0byBsb2FkIG4gYml0cyBpbnRvIHRoZSBhY2N1bXVsYXRvciwgb3IgaXQgY29udGludWVzLiAgQklUUyhuKVxyXG4gICBnaXZlcyB0aGUgbG93IG4gYml0cyBpbiB0aGUgYWNjdW11bGF0b3IuICBXaGVuIGRvbmUsIERST1BCSVRTKG4pIGRyb3BzXHJcbiAgIHRoZSBsb3cgbiBiaXRzIG9mZiB0aGUgYWNjdW11bGF0b3IuICBJTklUQklUUygpIGNsZWFycyB0aGUgYWNjdW11bGF0b3JcclxuICAgYW5kIHNldHMgdGhlIG51bWJlciBvZiBhdmFpbGFibGUgYml0cyB0byB6ZXJvLiAgQllURUJJVFMoKSBkaXNjYXJkcyBqdXN0XHJcbiAgIGVub3VnaCBiaXRzIHRvIHB1dCB0aGUgYWNjdW11bGF0b3Igb24gYSBieXRlIGJvdW5kYXJ5LiAgQWZ0ZXIgQllURUJJVFMoKVxyXG4gICBhbmQgYSBORUVEQklUUyg4KSwgdGhlbiBCSVRTKDgpIHdvdWxkIHJldHVybiB0aGUgbmV4dCBieXRlIGluIHRoZSBzdHJlYW0uXHJcblxyXG4gICBORUVEQklUUyhuKSB1c2VzIFBVTExCWVRFKCkgdG8gZ2V0IGFuIGF2YWlsYWJsZSBieXRlIG9mIGlucHV0LCBvciB0byByZXR1cm5cclxuICAgaWYgdGhlcmUgaXMgbm8gaW5wdXQgYXZhaWxhYmxlLiAgVGhlIGRlY29kaW5nIG9mIHZhcmlhYmxlIGxlbmd0aCBjb2RlcyB1c2VzXHJcbiAgIFBVTExCWVRFKCkgZGlyZWN0bHkgaW4gb3JkZXIgdG8gcHVsbCBqdXN0IGVub3VnaCBieXRlcyB0byBkZWNvZGUgdGhlIG5leHRcclxuICAgY29kZSwgYW5kIG5vIG1vcmUuXHJcblxyXG4gICBTb21lIHN0YXRlcyBsb29wIHVudGlsIHRoZXkgZ2V0IGVub3VnaCBpbnB1dCwgbWFraW5nIHN1cmUgdGhhdCBlbm91Z2hcclxuICAgc3RhdGUgaW5mb3JtYXRpb24gaXMgbWFpbnRhaW5lZCB0byBjb250aW51ZSB0aGUgbG9vcCB3aGVyZSBpdCBsZWZ0IG9mZlxyXG4gICBpZiBORUVEQklUUygpIHJldHVybnMgaW4gdGhlIGxvb3AuICBGb3IgZXhhbXBsZSwgd2FudCwgbmVlZCwgYW5kIGtlZXBcclxuICAgd291bGQgYWxsIGhhdmUgdG8gYWN0dWFsbHkgYmUgcGFydCBvZiB0aGUgc2F2ZWQgc3RhdGUgaW4gY2FzZSBORUVEQklUUygpXHJcbiAgIHJldHVybnM6XHJcblxyXG4gICAgY2FzZSBTVEFURXc6XHJcbiAgICAgICAgd2hpbGUgKHdhbnQgPCBuZWVkKSB7XHJcbiAgICAgICAgICAgIE5FRURCSVRTKG4pO1xyXG4gICAgICAgICAgICBrZWVwW3dhbnQrK10gPSBCSVRTKG4pO1xyXG4gICAgICAgICAgICBEUk9QQklUUyhuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUgPSBTVEFURXg7XHJcbiAgICBjYXNlIFNUQVRFeDpcclxuXHJcbiAgIEFzIHNob3duIGFib3ZlLCBpZiB0aGUgbmV4dCBzdGF0ZSBpcyBhbHNvIHRoZSBuZXh0IGNhc2UsIHRoZW4gdGhlIGJyZWFrXHJcbiAgIGlzIG9taXR0ZWQuXHJcblxyXG4gICBBIHN0YXRlIG1heSBhbHNvIHJldHVybiBpZiB0aGVyZSBpcyBub3QgZW5vdWdoIG91dHB1dCBzcGFjZSBhdmFpbGFibGUgdG9cclxuICAgY29tcGxldGUgdGhhdCBzdGF0ZS4gIFRob3NlIHN0YXRlcyBhcmUgY29weWluZyBzdG9yZWQgZGF0YSwgd3JpdGluZyBhXHJcbiAgIGxpdGVyYWwgYnl0ZSwgYW5kIGNvcHlpbmcgYSBtYXRjaGluZyBzdHJpbmcuXHJcblxyXG4gICBXaGVuIHJldHVybmluZywgYSBcImdvdG8gaW5mX2xlYXZlXCIgaXMgdXNlZCB0byB1cGRhdGUgdGhlIHRvdGFsIGNvdW50ZXJzLFxyXG4gICB1cGRhdGUgdGhlIGNoZWNrIHZhbHVlLCBhbmQgZGV0ZXJtaW5lIHdoZXRoZXIgYW55IHByb2dyZXNzIGhhcyBiZWVuIG1hZGVcclxuICAgZHVyaW5nIHRoYXQgaW5mbGF0ZSgpIGNhbGwgaW4gb3JkZXIgdG8gcmV0dXJuIHRoZSBwcm9wZXIgcmV0dXJuIGNvZGUuXHJcbiAgIFByb2dyZXNzIGlzIGRlZmluZWQgYXMgYSBjaGFuZ2UgaW4gZWl0aGVyIHN0cm0tPmF2YWlsX2luIG9yIHN0cm0tPmF2YWlsX291dC5cclxuICAgV2hlbiB0aGVyZSBpcyBhIHdpbmRvdywgZ290byBpbmZfbGVhdmUgd2lsbCB1cGRhdGUgdGhlIHdpbmRvdyB3aXRoIHRoZSBsYXN0XHJcbiAgIG91dHB1dCB3cml0dGVuLiAgSWYgYSBnb3RvIGluZl9sZWF2ZSBvY2N1cnMgaW4gdGhlIG1pZGRsZSBvZiBkZWNvbXByZXNzaW9uXHJcbiAgIGFuZCB0aGVyZSBpcyBubyB3aW5kb3cgY3VycmVudGx5LCBnb3RvIGluZl9sZWF2ZSB3aWxsIGNyZWF0ZSBvbmUgYW5kIGNvcHlcclxuICAgb3V0cHV0IHRvIHRoZSB3aW5kb3cgZm9yIHRoZSBuZXh0IGNhbGwgb2YgaW5mbGF0ZSgpLlxyXG5cclxuICAgSW4gdGhpcyBpbXBsZW1lbnRhdGlvbiwgdGhlIGZsdXNoIHBhcmFtZXRlciBvZiBpbmZsYXRlKCkgb25seSBhZmZlY3RzIHRoZVxyXG4gICByZXR1cm4gY29kZSAocGVyIHpsaWIuaCkuICBpbmZsYXRlKCkgYWx3YXlzIHdyaXRlcyBhcyBtdWNoIGFzIHBvc3NpYmxlIHRvXHJcbiAgIHN0cm0tPm5leHRfb3V0LCBnaXZlbiB0aGUgc3BhY2UgYXZhaWxhYmxlIGFuZCB0aGUgcHJvdmlkZWQgaW5wdXQtLXRoZSBlZmZlY3RcclxuICAgZG9jdW1lbnRlZCBpbiB6bGliLmggb2YgWl9TWU5DX0ZMVVNILiAgRnVydGhlcm1vcmUsIGluZmxhdGUoKSBhbHdheXMgZGVmZXJzXHJcbiAgIHRoZSBhbGxvY2F0aW9uIG9mIGFuZCBjb3B5aW5nIGludG8gYSBzbGlkaW5nIHdpbmRvdyB1bnRpbCBuZWNlc3NhcnksIHdoaWNoXHJcbiAgIHByb3ZpZGVzIHRoZSBlZmZlY3QgZG9jdW1lbnRlZCBpbiB6bGliLmggZm9yIFpfRklOSVNIIHdoZW4gdGhlIGVudGlyZSBpbnB1dFxyXG4gICBzdHJlYW0gYXZhaWxhYmxlLiAgU28gdGhlIG9ubHkgdGhpbmcgdGhlIGZsdXNoIHBhcmFtZXRlciBhY3R1YWxseSBkb2VzIGlzOlxyXG4gICB3aGVuIGZsdXNoIGlzIHNldCB0byBaX0ZJTklTSCwgaW5mbGF0ZSgpIGNhbm5vdCByZXR1cm4gWl9PSy4gIEluc3RlYWQgaXRcclxuICAgd2lsbCByZXR1cm4gWl9CVUZfRVJST1IgaWYgaXQgaGFzIG5vdCByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHN0cmVhbS5cclxuICovXHJcblxyXG4vKiBwZXJtdXRhdGlvbiBvZiBjb2RlIGxlbmd0aHMgKi9cclxudmFyIGluZmxhdGVfb3JkZXIgPSBbXHJcbiAgICAxNiwgMTcsIDE4LCAwLCA4LCA3LCA5LCA2LCAxMCwgNSwgMTEsIDQsIDEyLCAzLCAxMywgMiwgMTQsIDEsIDE1XTtcclxuWkxJQi5pbmZsYXRlID0gZnVuY3Rpb24oc3RybSwgZmx1c2gpXHJcbntcclxuICAgIHZhciBzdGF0ZTtcclxuICAgIHZhciBzO1xyXG4gICAgdmFyIF9pbiwgb3V0OyAgICAgICAgICAvKiBzYXZlIHN0YXJ0aW5nIGF2YWlsYWJsZSBpbnB1dCBhbmQgb3V0cHV0ICovXHJcbiAgICB2YXIgY29weTsgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBzdG9yZWQgb3IgbWF0Y2ggYnl0ZXMgdG8gY29weSAqL1xyXG4gICAgdmFyIGZyb21fd2luZG93X29mZnNldCA9IC0xOyAvKiBpbmRleCBvZiB3aW5kb3dbXSAqL1xyXG4gICAgdmFyIGZyb21fb3V0X29mZnNldCA9IC0xOyAvKiBpbmRleCBvZiBuZXh0X291dFtdICovXHJcbiAgICB2YXIgaGVyZTsgICAgICAgICAgICAgIC8qIGN1cnJlbnQgZGVjb2RpbmcgdGFibGUgZW50cnkgKi9cclxuICAgIHZhciBsYXN0OyAgICAgICAgICAgICAgLyogcGFyZW50IHRhYmxlIGVudHJ5ICovXHJcbiAgICB2YXIgbGVuOyAgICAgICAgICAgICAgIC8qIGxlbmd0aCB0byBjb3B5IGZvciByZXBlYXRzLCBiaXRzIHRvIGRyb3AgKi9cclxuICAgIHZhciByZXQ7ICAgICAgICAgICAgICAgLyogcmV0dXJuIGNvZGUgKi9cclxuXHJcbiAgICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUgfHxcclxuICAgICAgICAoIXN0cm0uaW5wdXRfZGF0YSAmJiBzdHJtLmF2YWlsX2luICE9IDApKVxyXG4gICAgICAgIHJldHVybiBaTElCLlpfU1RSRUFNX0VSUk9SO1xyXG5cclxuICAgIHN0YXRlID0gc3RybS5zdGF0ZTtcclxuICAgIGlmIChzdGF0ZS5tb2RlID09IFRZUEUpIHN0YXRlLm1vZGUgPSBUWVBFRE87ICAgICAgLyogc2tpcCBjaGVjayAqL1xyXG5cclxuICAgIC8vIExPQURcclxuICAgIHMgPSB7fTtcclxuICAgIExPQUQoc3RybSwgcyk7XHJcblxyXG4gICAgX2luID0gcy5oYXZlO1xyXG4gICAgb3V0ID0gcy5sZWZ0O1xyXG4gICAgcmV0ID0gWkxJQi5aX09LO1xyXG5pbmZfbGVhdmU6IGZvciAoOzspIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJTdGF0ZS5tb2RlXCIsIHN0YXRlLm1vZGUpXHJcbiAgICAvL2NvbnNvbGUubG9nKHN0cm0ubXNnKVxyXG4gICAgICAgIHN3aXRjaCAoc3RhdGUubW9kZSkge1xyXG4gICAgICAgIGNhc2UgSEVBRDpcclxuICAgICAgICAgICAgaWYgKHN0YXRlLndyYXAgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IFRZUEVETztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCAxNikpIGJyZWFrIGluZl9sZWF2ZTtcclxuLy8gI2lmZGVmIEdVTlpJUFxyXG4gICAgICAgICAgICBpZiAoKHN0YXRlLndyYXAgJiAyKSAmJiBzLmhvbGQgPT0gMHg4YjFmKSB7ICAvKiBnemlwIGhlYWRlciAqL1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuY2hlY2sgPSBzdHJtLmNoZWNrc3VtX2Z1bmN0aW9uKDAsIG51bGwsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgQ1JDMihzdHJtLCBzLmhvbGQpO1xyXG4gICAgICAgICAgICAgICAgSU5JVEJJVFMocyk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gRkxBR1M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5mbGFncyA9IDA7ICAgICAgICAgICAvKiBleHBlY3QgemxpYiBoZWFkZXIgKi9cclxuICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5oZWFkLmRvbmUgPSAtMTtcclxuICAgICAgICAgICAgaWYgKCEoc3RhdGUud3JhcCAmIDEpIHx8ICAgLyogY2hlY2sgaWYgemxpYiBoZWFkZXIgYWxsb3dlZCAqL1xyXG4vLyNlbHNlXHJcbi8vICAgICAgICAgIGlmIChcclxuLy8jZW5kaWZcclxuICAgICAgICAgICAgICAgICgoQklUUyhzLCA4KSA8PCA4KSArIChzLmhvbGQgPj4+IDgpKSAlIDMxKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbmNvcnJlY3QgaGVhZGVyIGNoZWNrJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoQklUUyhzLCA0KSAhPSBaTElCLlpfREVGTEFURUQpIHtcclxuICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ3Vua25vd24gY29tcHJlc3Npb24gbWV0aG9kJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRFJPUEJJVFMocywgNCk7XHJcbiAgICAgICAgICAgIGxlbiA9IEJJVFMocywgNCkgKyA4O1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUud2JpdHMgPT0gMClcclxuICAgICAgICAgICAgICAgIHN0YXRlLndiaXRzID0gbGVuO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChsZW4gPiBzdGF0ZS53Yml0cykge1xyXG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCB3aW5kb3cgc2l6ZSc7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuZG1heCA9IDEgPDwgbGVuO1xyXG4vLyAgICAgICAgICAgIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgemxpYiBoZWFkZXIgb2tcXG5cIikpO1xyXG5cdFx0XHRzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPSBzdHJtLmNoZWNrc3VtX2Z1bmN0aW9uKDAsIG51bGwsIDAsIDApO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gcy5ob2xkICYgMHgyMDAgPyBESUNUSUQgOiBUWVBFO1xyXG4gICAgICAgICAgICBJTklUQklUUyhzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbi8vICNpZmRlZiBHVU5aSVBcclxuICAgICAgICBjYXNlIEZMQUdTOlxyXG4gICAgICAgICAgICBpZighTkVFREJJVFMocywgMTYpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgIHN0YXRlLmZsYWdzID0gcy5ob2xkO1xyXG4gICAgICAgICAgICBpZiAoKHN0YXRlLmZsYWdzICYgMHhmZikgIT0gWkxJQi5aX0RFRkxBVEVEKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJtLm1zZyA9IFwidW5rbm93biBjb21wcmVzc2lvbiBtZXRob2RcIjtcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweGUwMDApIHtcclxuICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gXCJ1bmtub3duIGhlYWRlciBmbGFncyBzZXRcIjtcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuaGVhZCAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQudGV4dCA9IChzLmhvbGQgPj4+IDgpICYgMTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwMjAwKSB7XHJcblx0XHRcdFx0Q1JDMihzdHJtLCBzLmhvbGQpO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIElOSVRCSVRTKHMpO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gVElNRTtcclxuICAgICAgICBjYXNlIFRJTUU6XHJcbiAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCAzMikpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5oZWFkLnRpbWUgPSBzLmhvbGQ7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xyXG5cdFx0XHRcdENSQzQoc3RybSwgcy5ob2xkKTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICBJTklUQklUUyhzKTtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IE9TO1xyXG4gICAgICAgIGNhc2UgT1M6XHJcbiAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCAxNikpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQueGZsYWdzID0gcy5ob2xkICYgMHhmZjtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQub3MgPSBzLmhvbGQgPj4+IDg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwMjAwKSB7XHJcblx0XHRcdFx0Q1JDMihzdHJtLCBzLmhvbGQpO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIElOSVRCSVRTKHMpO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gRVhMRU47XHJcbiAgICAgICAgY2FzZSBFWExFTjpcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwNDAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZighTkVFREJJVFMocywgMTYpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5sZW5ndGggPSBzLmhvbGQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuaGVhZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQuZXh0cmFfbGVuID0gcy5ob2xkO1xyXG5cdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xyXG5cdFx0XHRcdFx0Q1JDMihzdHJtLCBzLmhvbGQpO1xyXG5cdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgIElOSVRCSVRTKHMpO1xyXG5cdFx0XHRcdHN0YXRlLmhlYWQuZXh0cmEgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQuZXh0cmEgPSBudWxsO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBFWFRSQTtcclxuICAgICAgICBjYXNlIEVYVFJBOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDA0MDApIHtcclxuICAgICAgICAgICAgICAgIGNvcHkgPSBzdGF0ZS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29weSA+IHMuaGF2ZSkgY29weSA9IHMuaGF2ZTtcclxuICAgICAgICAgICAgICAgIGlmIChjb3B5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuaGVhZC5leHRyYSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSBzdGF0ZS5oZWFkLmV4dHJhX2xlbiAtIHN0YXRlLmxlbmd0aDtcclxuLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgem1lbWNweShzdGF0ZS0+aGVhZC0+ZXh0cmEgKyBsZW4sIG5leHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuICsgY29weSA+IHN0YXRlLT5oZWFkLT5leHRyYV9tYXggP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLT5oZWFkLT5leHRyYV9tYXggLSBsZW4gOiBjb3B5KTtcclxuKi9cclxuXHRcdFx0XHRcdFx0c3RhdGUuaGVhZC5leHRyYSArPSBzdHJtLmlucHV0X2RhdGEuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdHMubmV4dCwgcy5uZXh0ICsgKGxlbiArIGNvcHkgPiBzdGF0ZS5oZWFkLmV4dHJhX21heCA/XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHN0YXRlLmhlYWQuZXh0cmFfbWF4IC0gbGVuIDogY29weSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwMjAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jaGVjayA9IHN0cm0uY2hlY2tzdW1fZnVuY3Rpb24oc3RhdGUuY2hlY2ssIHN0cm0uaW5wdXRfZGF0YSwgcy5uZXh0LCBjb3B5KTtcclxuICAgICAgICAgICAgICAgICAgICBzLmhhdmUgLT0gY29weTtcclxuICAgICAgICAgICAgICAgICAgICBzLm5leHQgKz0gY29weTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sZW5ndGggLT0gY29weTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5sZW5ndGgpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gTkFNRTtcclxuICAgICAgICBjYXNlIE5BTUU6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDgwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMuaGF2ZSA9PSAwKSBicmVhayBpbmZfbGVhdmU7XHJcblx0XHRcdFx0aWYgKHN0YXRlLmhlYWQgIT09IG51bGwgJiYgc3RhdGUuaGVhZC5uYW1lID09PSBudWxsKSB7XHJcblx0XHRcdFx0XHRzdGF0ZS5oZWFkLm5hbWUgPSBcIlwiO1xyXG5cdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgIGNvcHkgPSAwO1xyXG5cdFx0XHRcdC8vIFRPRE8gZW5kID0gc3RybS5pbnB1dF9kYXRhLmluZGV4T2YoXCJcXDBcIiwgcy5uZXh0KTtcclxuXHRcdFx0XHQvLyBUT0RPIHN0YXRlLmxlbmd0aCA9PiBzdGF0ZS5oZWFkLm5hbWUubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVuID0gc3RybS5pbnB1dF9kYXRhLmNoYXJBdChzLm5leHQgKyBjb3B5KTsgY29weSsrO1xyXG5cdFx0XHRcdFx0aWYobGVuID09PSBcIlxcMFwiKVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuaGVhZCAhPT0gbnVsbCAmJlxyXG5cdFx0XHRcdFx0XHRzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oZWFkLm5hbWVfbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQubmFtZSArPSBsZW47XHJcblx0XHRcdFx0XHRcdHN0YXRlLmxlbmd0aCsrO1xyXG5cdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoY29weSA8IHMuaGF2ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jaGVjayA9IHN0cm0uY2hlY2tzdW1fZnVuY3Rpb24oc3RhdGUuY2hlY2ssIHN0cm0uaW5wdXRfZGF0YSwgcy5uZXh0LCBjb3B5KTtcclxuXHRcdFx0XHR9XHJcbiAgICAgICAgICAgICAgICBzLmhhdmUgLT0gY29weTtcclxuICAgICAgICAgICAgICAgIHMubmV4dCArPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlbiAhPT0gXCJcXDBcIikgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5oZWFkLm5hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICBzdGF0ZS5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gQ09NTUVOVDtcclxuICAgICAgICBjYXNlIENPTU1FTlQ6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MTAwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMuaGF2ZSA9PSAwKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICBjb3B5ID0gMDtcclxuXHRcdFx0XHRpZiAoc3RhdGUuaGVhZCAhPT0gbnVsbCAmJiBzdGF0ZS5oZWFkLmNvbW1lbnQgPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdHN0YXRlLmhlYWQuY29tbWVudCA9IFwiXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIFRPRE8gZW5kID0gc3RybS5pbnB1dF9kYXRhLmluZGV4T2YoXCJcXDBcIiwgcy5uZXh0KTtcclxuXHRcdFx0XHQvLyBUT0RPIHN0YXRlLmxlbmd0aCA9PiBzdGF0ZS5oZWFkLmNvbW1lbnQubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVuID0gc3RybS5pbnB1dF9kYXRhLmNoYXJBdChzLm5leHQgKyBjb3B5KTsgY29weSsrO1xyXG5cdFx0XHRcdFx0aWYobGVuID09PSBcIlxcMFwiKVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuaGVhZCAhPT0gbnVsbCAmJlxyXG5cdFx0XHRcdFx0XHRzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oZWFkLmNvbW1fbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQuY29tbWVudCArPSBsZW47XHJcblx0XHRcdFx0XHRcdHN0YXRlLmxlbmd0aCsrO1xyXG5cdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoY29weSA8IHMuaGF2ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDAyMDApXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuY2hlY2sgPSBzdHJtLmNoZWNrc3VtX2Z1bmN0aW9uKHN0YXRlLmNoZWNrLCBzdHJtLmlucHV0X2RhdGEsIHMubmV4dCwgY29weSk7XHJcbiAgICAgICAgICAgICAgICBzLmhhdmUgLT0gY29weTtcclxuICAgICAgICAgICAgICAgIHMubmV4dCArPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlbiAhPT0gXCJcXDBcIikgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5oZWFkLmNvbW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gSENSQztcclxuICAgICAgICBjYXNlIEhDUkM6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYoIU5FRURCSVRTKHMsIDE2KSkgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMuaG9sZCAhPSAoc3RhdGUuY2hlY2sgJiAweGZmZmYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RybS5tc2cgPSBcImhlYWRlciBjcmMgbWlzbWF0Y2hcIjtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgSU5JVEJJVFMocyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQuaGNyYyA9IChzdGF0ZS5mbGFncyA+Pj4gOSkgJiAxO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaGVhZC5kb25lID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPSBzdHJtLmNoZWNrc3VtX2Z1bmN0aW9uKDAsIG51bGwsIDAsIDApO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gVFlQRTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbi8vI2VuZGlmXHJcbiAgICAgICAgY2FzZSBESUNUSUQ6XHJcbiAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCAzMikpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgc3RybS5hZGxlciA9IHN0YXRlLmNoZWNrID0gUkVWRVJTRShzLmhvbGQpO1xyXG4gICAgICAgICAgICBJTklUQklUUyhzKTtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IERJQ1Q7XHJcbiAgICAgICAgY2FzZSBESUNUOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuaGF2ZWRpY3QgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgUkVTVE9SRShzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBaTElCLlpfTkVFRF9ESUNUO1xyXG4gICAgICAgICAgICB9XHJcblx0XHRcdHN0cm0uYWRsZXIgPSBzdGF0ZS5jaGVjayA9IHN0cm0uY2hlY2tzdW1fZnVuY3Rpb24oMCwgbnVsbCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBUWVBFO1xyXG4gICAgICAgIGNhc2UgVFlQRTpcclxuICAgICAgICAgICAgaWYgKGZsdXNoID09IFpMSUIuWl9CTE9DSyB8fCBmbHVzaCA9PSBaTElCLlpfVFJFRVMpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICBjYXNlIFRZUEVETzpcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmxhc3QpIHtcclxuICAgICAgICAgICAgICAgIEJZVEVCSVRTKHMpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IENIRUNLO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIU5FRURCSVRTKHMsIDMpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhc3QgPSBCSVRTKHMsIDEpO1xyXG4gICAgICAgICAgICBEUk9QQklUUyhzLCAxKTtcclxuICAgICAgICAgICAgc3dpdGNoIChCSVRTKHMsIDIpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHN0b3JlZCBibG9jayAqL1xyXG4vLyAgICAgICAgICAgICAgICBUcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgc3RvcmVkIGJsb2NrJXNcXG5cIixcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS0+bGFzdCA/IFwiIChsYXN0KVwiIDogXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IFNUT1JFRDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBmaXhlZCBibG9jayAqL1xyXG4gICAgICAgICAgICAgICAgZml4ZWR0YWJsZXMoc3RhdGUpO1xyXG4vLyAgICAgICAgICAgICAgICBUcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgZml4ZWQgY29kZXMgYmxvY2slc1xcblwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLT5sYXN0ID8gXCIgKGxhc3QpXCIgOiBcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gTEVOXzsgICAgICAgICAgICAgLyogZGVjb2RlIGNvZGVzICovXHJcbiAgICAgICAgICAgICAgICBpZiAoZmx1c2ggPT0gWkxJQi5aX1RSRUVTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRFJPUEJJVFMocywgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGR5bmFtaWMgYmxvY2sgKi9cclxuLy8gICAgICAgICAgICAgICAgVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgIGR5bmFtaWMgY29kZXMgYmxvY2slc1xcblwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLT5sYXN0ID8gXCIgKGxhc3QpXCIgOiBcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gVEFCTEU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBibG9jayB0eXBlJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRFJPUEJJVFMocywgMik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU1RPUkVEOlxyXG4gICAgICAgICAgICBCWVRFQklUUyhzKTsgICAgICAgICAgICAgICAgICAgICAgICAgLyogZ28gdG8gYnl0ZSBib3VuZGFyeSAqL1xyXG4gICAgICAgICAgICBpZighTkVFREJJVFMocywgMzIpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgIGlmICgocy5ob2xkICYgMHhmZmZmKSAhPSAoKChzLmhvbGQgPj4+IDE2KSAmIDB4ZmZmZikgXiAweGZmZmYpKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIHN0b3JlZCBibG9jayBsZW5ndGhzJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5sZW5ndGggPSBzLmhvbGQgJiAweGZmZmY7XHJcbi8vICAgICAgICAgICAgVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgc3RvcmVkIGxlbmd0aCAldVxcblwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgc3RhdGUtPmxlbmd0aCkpO1xyXG4gICAgICAgICAgICBJTklUQklUUyhzKTtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IENPUFlfO1xyXG4gICAgICAgICAgICBpZiAoZmx1c2ggPT0gWkxJQi5aX1RSRUVTKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgY2FzZSBDT1BZXzpcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IENPUFk7XHJcbiAgICAgICAgY2FzZSBDT1BZOlxyXG4gICAgICAgICAgICBjb3B5ID0gc3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAoY29weSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvcHkgPiBzLmhhdmUpIGNvcHkgPSBzLmhhdmU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29weSA+IHMubGVmdCkgY29weSA9IHMubGVmdDtcclxuICAgICAgICAgICAgICAgIGlmIChjb3B5ID09IDApIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgICAgIHN0cm0ub3V0cHV0X2RhdGEgKz0gc3RybS5pbnB1dF9kYXRhLnN1YnN0cmluZyhzLm5leHQsIHMubmV4dCArIGNvcHkpO1xyXG4gICAgICAgICAgICAgICAgc3RybS5uZXh0X291dCArPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgcy5oYXZlIC09IGNvcHk7XHJcbiAgICAgICAgICAgICAgICBzLm5leHQgKz0gY29weTtcclxuICAgICAgICAgICAgICAgIHMubGVmdCAtPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubGVuZ3RoIC09IGNvcHk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIHN0b3JlZCBlbmRcXG5cIikpO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gVFlQRTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUQUJMRTpcclxuICAgICAgICAgICAgaWYoIU5FRURCSVRTKHMsIDE0KSkgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICBzdGF0ZS5ubGVuID0gQklUUyhzLCA1KSArIDI1NztcclxuICAgICAgICAgICAgRFJPUEJJVFMocywgNSk7XHJcbiAgICAgICAgICAgIHN0YXRlLm5kaXN0ID0gQklUUyhzLCA1KSArIDE7XHJcbiAgICAgICAgICAgIERST1BCSVRTKHMsIDUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5uY29kZSA9IEJJVFMocywgNCkgKyA0O1xyXG4gICAgICAgICAgICBEUk9QQklUUyhzLCA0KTtcclxuLy8jaWZuZGVmIFBLWklQX0JVR19XT1JLQVJPVU5EXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5ubGVuID4gMjg2IHx8IHN0YXRlLm5kaXN0ID4gMzApIHtcclxuICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ3RvbyBtYW55IGxlbmd0aCBvciBkaXN0YW5jZSBzeW1ib2xzJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4vLyNlbmRpZlxyXG4vLyAgICAgICAgICAgIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIHRhYmxlIHNpemVzIG9rXFxuXCIpKTtcclxuICAgICAgICAgICAgc3RhdGUuaGF2ZSA9IDA7XHJcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBMRU5MRU5TO1xyXG4gICAgICAgIGNhc2UgTEVOTEVOUzpcclxuICAgICAgICAgICAgd2hpbGUgKHN0YXRlLmhhdmUgPCBzdGF0ZS5uY29kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoIU5FRURCSVRTKHMsIDMpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wID0gQklUUyhzLCAzKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmxlbnNbaW5mbGF0ZV9vcmRlcltzdGF0ZS5oYXZlKytdXSA9IHRtcDtcclxuICAgICAgICAgICAgICAgIERST1BCSVRTKHMsIDMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlIChzdGF0ZS5oYXZlIDwgMTkpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5sZW5zW2luZmxhdGVfb3JkZXJbc3RhdGUuaGF2ZSsrXV0gPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZS5uZXh0ID0gMDtcclxuICAgICAgICAgICAgc3RhdGUubGVuY29kZSA9IDA7XHJcbiAgICAgICAgICAgIHN0YXRlLmxlbmJpdHMgPSA3O1xyXG5cclxuLy8gICAgICAgICAgICByZXQgPSBpbmZsYXRlX3RhYmxlKENPREVTLCBzdGF0ZS0+bGVucywgMTksICYoc3RhdGUtPm5leHQpLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJihzdGF0ZS0+bGVuYml0cyksIHN0YXRlLT53b3JrKTtcclxuICAgICAgICAgICAgcmV0ID0gaW5mbGF0ZV90YWJsZShzdGF0ZSwgQ09ERVMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJldCkge1xyXG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBjb2RlIGxlbmd0aHMgc2V0JztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIGNvZGUgbGVuZ3RocyBva1xcblwiKSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmhhdmUgPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gQ09ERUxFTlM7XHJcbiAgICAgICAgY2FzZSBDT0RFTEVOUzpcclxuICAgICAgICAgICAgd2hpbGUgKHN0YXRlLmhhdmUgPCBzdGF0ZS5ubGVuICsgc3RhdGUubmRpc3QpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoOzspIHtcclxuICAgICAgICAgICAgICAgICAgICBoZXJlID0gc3RhdGUuY29kZXNbc3RhdGUubGVuY29kZSArIEJJVFMocywgc3RhdGUubGVuYml0cyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZXJlLmJpdHMgPD0gcy5iaXRzKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBpZighUFVMTEJZVEUocykpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChoZXJlLnZhbCA8IDE2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRFJPUEJJVFMocywgaGVyZS5iaXRzKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sZW5zW3N0YXRlLmhhdmUrK10gPSBoZXJlLnZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZXJlLnZhbCA9PSAxNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighTkVFREJJVFMocywgaGVyZS5iaXRzICsgMikpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRFJPUEJJVFMocywgaGVyZS5iaXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmhhdmUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuID0gc3RhdGUubGVuc1tzdGF0ZS5oYXZlIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcHkgPSAzICsgQklUUyhzLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRFJPUEJJVFMocywgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGhlcmUudmFsID09IDE3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCBoZXJlLmJpdHMgKyAzKSkgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEUk9QQklUUyhzLCBoZXJlLmJpdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3B5ID0gMyArIEJJVFMocywgMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERST1BCSVRTKHMsIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIU5FRURCSVRTKHMsIGhlcmUuYml0cyArIDcpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERST1BCSVRTKHMsIGhlcmUuYml0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcHkgPSAxMSArIEJJVFMocywgNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERST1BCSVRTKHMsIDcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuaGF2ZSArIGNvcHkgPiBzdGF0ZS5ubGVuICsgc3RhdGUubmRpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY29weS0tKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sZW5zW3N0YXRlLmhhdmUrK10gPSBsZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGhhbmRsZSBlcnJvciBicmVha3MgaW4gd2hpbGUgKi9cclxuICAgICAgICAgICAgaWYgKHN0YXRlLm1vZGUgPT0gQkFEKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8qIGNoZWNrIGZvciBlbmQtb2YtYmxvY2sgY29kZSAoYmV0dGVyIGhhdmUgb25lKSAqL1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUubGVuc1syNTZdID09IDApIHtcclxuICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgY29kZSAtLSBtaXNzaW5nIGVuZC1vZi1ibG9jayc7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGJ1aWxkIGNvZGUgdGFibGVzIC0tIG5vdGU6IGRvIG5vdCBjaGFuZ2UgdGhlIGxlbmJpdHMgb3IgZGlzdGJpdHNcclxuICAgICAgICAgICAgICAgdmFsdWVzIGhlcmUgKDkgYW5kIDYpIHdpdGhvdXQgcmVhZGluZyB0aGUgY29tbWVudHMgaW4gaW5mdHJlZXMuaFxyXG4gICAgICAgICAgICAgICBjb25jZXJuaW5nIHRoZSBFTk9VR0ggY29uc3RhbnRzLCB3aGljaCBkZXBlbmQgb24gdGhvc2UgdmFsdWVzICovXHJcbiAgICAgICAgICAgIHN0YXRlLm5leHQgPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZS5sZW5jb2RlID0gc3RhdGUubmV4dDtcclxuICAgICAgICAgICAgc3RhdGUubGVuYml0cyA9IDk7XHJcbi8vICAgICAgICAgICAgcmV0ID0gaW5mbGF0ZV90YWJsZShMRU5TLCBzdGF0ZS0+bGVucywgc3RhdGUtPm5sZW4sICYoc3RhdGUtPm5leHQpLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJihzdGF0ZS0+bGVuYml0cyksIHN0YXRlLT53b3JrKTtcclxuICAgICAgICAgICAgcmV0ID0gaW5mbGF0ZV90YWJsZShzdGF0ZSwgTEVOUyk7XHJcbiAgICAgICAgICAgIGlmIChyZXQpIHtcclxuICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgbGl0ZXJhbC9sZW5ndGhzIHNldCc7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuZGlzdGNvZGUgPSBzdGF0ZS5uZXh0O1xyXG4gICAgICAgICAgICBzdGF0ZS5kaXN0Yml0cyA9IDY7XHJcbi8vICAgICAgICAgICAgcmV0ID0gaW5mbGF0ZV90YWJsZShESVNUUywgc3RhdGUtPmxlbnMgKyBzdGF0ZS0+bmxlbiwgc3RhdGUtPm5kaXN0LCAmKHN0YXRlLT5uZXh0KSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJihzdGF0ZS0+ZGlzdGJpdHMpLCBzdGF0ZS0+d29yayk7XHJcbiAgICAgICAgICAgIHJldCA9IGluZmxhdGVfdGFibGUoc3RhdGUsIERJU1RTKTtcclxuICAgICAgICAgICAgaWYgKHJldCkge1xyXG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBkaXN0YW5jZXMgc2V0JztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIGNvZGVzIG9rXFxuXCIpKTtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IExFTl87XHJcbiAgICAgICAgICAgIGlmIChmbHVzaCA9PSBaTElCLlpfVFJFRVMpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICBjYXNlIExFTl86XHJcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBMRU47XHJcbiAgICAgICAgY2FzZSBMRU46XHJcbiAgICAgICAgICAgIGlmIChzLmhhdmUgPj0gNiAmJiBzLmxlZnQgPj0gMjU4KSB7XHJcbiAgICAgICAgICAgICAgICBSRVNUT1JFKHMpO1xyXG4gICAgICAgICAgICAgICAgaW5mbGF0ZV9mYXN0KHN0cm0sIG91dCk7XHJcbiAgICAgICAgICAgICAgICBMT0FEKHN0cm0sIHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLm1vZGUgPT0gVFlQRSlcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYWNrID0gLTE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5iYWNrID0gMDtcclxuICAgICAgICAgICAgZm9yICg7Oykge1xyXG4gICAgICAgICAgICAgICAgaGVyZSA9IHN0YXRlLmNvZGVzW3N0YXRlLmxlbmNvZGUgKyBCSVRTKHMsIHN0YXRlLmxlbmJpdHMpXTtcclxuICAgICAgICAgICAgICAgIGlmIChoZXJlLmJpdHMgPD0gcy5iaXRzKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGlmKCFQVUxMQllURShzKSkgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoZXJlLm9wICYmIChoZXJlLm9wICYgMHhmMCkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGFzdCA9IGhlcmU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKDs7KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVyZSA9IHN0YXRlLmNvZGVzW3N0YXRlLmxlbmNvZGUgKyBsYXN0LnZhbCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChCSVRTKHMsIGxhc3QuYml0cyArIGxhc3Qub3ApID4+PiBsYXN0LmJpdHMpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdC5iaXRzICsgaGVyZS5iaXRzIDw9IHMuYml0cykgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIVBVTExCWVRFKHMpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEUk9QQklUUyhzLCBsYXN0LmJpdHMpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmFjayArPSBsYXN0LmJpdHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRFJPUEJJVFMocywgaGVyZS5iaXRzKTtcclxuICAgICAgICAgICAgc3RhdGUuYmFjayArPSBoZXJlLmJpdHM7XHJcbiAgICAgICAgICAgIHN0YXRlLmxlbmd0aCA9IGhlcmUudmFsO1xyXG4gICAgICAgICAgICBpZiAoaGVyZS5vcCA9PSAwKSB7XHJcbi8vICAgICAgICAgICAgICBUcmFjZXZ2KChzdGRlcnIsIGhlcmUudmFsID49IDB4MjAgJiYgaGVyZS52YWwgPCAweDdmID9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBcImluZmxhdGU6ICAgICAgICAgbGl0ZXJhbCAnJWMnXFxuXCIgOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5mbGF0ZTogICAgICAgICBsaXRlcmFsIDB4JTAyeFxcblwiLCBoZXJlLnZhbCkpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IExJVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoZXJlLm9wICYgMzIpIHtcclxuLy8gICAgICAgICAgICAgICAgVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgZW5kIG9mIGJsb2NrXFxuXCIpKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJhY2sgPSAtMTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBUWVBFO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhlcmUub3AgJiA2NCkge1xyXG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5leHRyYSA9IGhlcmUub3AgJiAxNTtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IExFTkVYVDtcclxuICAgICAgICBjYXNlIExFTkVYVDpcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmV4dHJhKSB7XHJcbiAgICAgICAgICAgICAgICBpZighTkVFREJJVFMocywgc3RhdGUuZXh0cmEpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5sZW5ndGggKz0gQklUUyhzLCBzdGF0ZS5leHRyYSk7XHJcbiAgICAgICAgICAgICAgICBEUk9QQklUUyhzLCBzdGF0ZS5leHRyYSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iYWNrICs9IHN0YXRlLmV4dHJhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgbGVuZ3RoICV1XFxuXCIsIHN0YXRlLT5sZW5ndGgpKTtcclxuICAgICAgICAgICAgc3RhdGUud2FzID0gc3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gRElTVDtcclxuICAgICAgICBjYXNlIERJU1Q6XHJcbiAgICAgICAgICAgIGZvciAoOzspIHtcclxuICAgICAgICAgICAgICAgIGhlcmUgPSBzdGF0ZS5jb2Rlc1tzdGF0ZS5kaXN0Y29kZSArIEJJVFMocywgc3RhdGUuZGlzdGJpdHMpXTtcclxuICAgICAgICAgICAgICAgIGlmIChoZXJlLmJpdHMgPD0gcy5iaXRzKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGlmKCFQVUxMQllURShzKSkgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoaGVyZS5vcCAmIDB4ZjApID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxhc3QgPSBoZXJlO1xyXG4gICAgICAgICAgICAgICAgZm9yICg7Oykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlcmUgPSBzdGF0ZS5jb2Rlc1tzdGF0ZS5kaXN0Y29kZSArIGxhc3QudmFsICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEJJVFMocywgbGFzdC5iaXRzICsgbGFzdC5vcCkgPj4+IGxhc3QuYml0cyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgobGFzdC5iaXRzICsgaGVyZS5iaXRzKSA8PSBzLmJpdHMpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFQVUxMQllURShzKSkgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRFJPUEJJVFMocywgbGFzdC5iaXRzKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJhY2sgKz0gbGFzdC5iaXRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIERST1BCSVRTKHMsIGhlcmUuYml0cyk7XHJcbiAgICAgICAgICAgIHN0YXRlLmJhY2sgKz0gaGVyZS5iaXRzO1xyXG4gICAgICAgICAgICBpZiAoaGVyZS5vcCAmIDY0KSB7XHJcbiAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIGNvZGUnO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXRlLm9mZnNldCA9IGhlcmUudmFsO1xyXG4gICAgICAgICAgICBzdGF0ZS5leHRyYSA9IGhlcmUub3AgJiAxNTtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IERJU1RFWFQ7XHJcbiAgICAgICAgY2FzZSBESVNURVhUOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZXh0cmEpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCBzdGF0ZS5leHRyYSkpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLm9mZnNldCArPSBCSVRTKHMsIHN0YXRlLmV4dHJhKTtcclxuICAgICAgICAgICAgICAgIERST1BCSVRTKHMsIHN0YXRlLmV4dHJhKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJhY2sgKz0gc3RhdGUuZXh0cmE7XHJcbiAgICAgICAgICAgIH1cclxuLy9OT1NQUlQgI2lmZGVmIElORkxBVEVfU1RSSUNUXHJcbi8vICAgICAgICAgICAgaWYgKHN0YXRlLT5vZmZzZXQgPiBzdGF0ZS0+ZG1heCkge1xyXG4vLyAgICAgICAgICAgICAgICBzdHJtLT5tc2cgPSAoY2hhciAqKVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIjtcclxuLy8gICAgICAgICAgICAgICAgc3RhdGUtPm1vZGUgPSBCQUQ7XHJcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8jZW5kaWZcclxuLy8gICAgICAgICAgICBUcmFjZXZ2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgICBkaXN0YW5jZSAldVxcblwiLCBzdGF0ZS0+b2Zmc2V0KSk7XHJcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBNQVRDSDtcclxuICAgICAgICBjYXNlIE1BVENIOlxyXG4gICAgICAgICAgICBpZiAocy5sZWZ0ID09IDApIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgY29weSA9IG91dCAtIHMubGVmdDtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLm9mZnNldCA+IGNvcHkpIHsgICAgICAgICAvKiBjb3B5IGZyb20gd2luZG93ICovXHJcbiAgICAgICAgICAgICAgICBjb3B5ID0gc3RhdGUub2Zmc2V0IC0gY29weTtcclxuICAgICAgICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUud2hhdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc2FuZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFjayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuLy9OT1NQUlQgI2lmZGVmIElORkxBVEVfQUxMT1dfSU5WQUxJRF9ESVNUQU5DRV9UT09GQVJfQVJSUlxyXG4vLyAgICAgICAgICAgICAgICAgICAgVHJhY2UoKHN0ZGVyciwgXCJpbmZsYXRlLmMgdG9vIGZhclxcblwiKSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICBjb3B5IC09IHN0YXRlLT53aGF2ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUtPmxlbmd0aCkgY29weSA9IHN0YXRlLT5sZW5ndGg7XHJcbi8vICAgICAgICAgICAgICAgICAgICBpZiAoY29weSA+IGxlZnQpIGNvcHkgPSBsZWZ0O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgbGVmdCAtPSBjb3B5O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgc3RhdGUtPmxlbmd0aCAtPSBjb3B5O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgZG8ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICpwdXQrKyA9IDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICgtLWNvcHkpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLT5sZW5ndGggPT0gMCkgc3RhdGUtPm1vZGUgPSBMRU47XHJcbi8vICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8jZW5kaWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUud25leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5IC09IHN0YXRlLnduZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZyb20gPSBzdGF0ZS0+d2luZG93ICsgKHN0YXRlLT53c2l6ZSAtIGNvcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb21fd2luZG93X29mZnNldCA9IHN0YXRlLndzaXplIC0gY29weTtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tX291dF9vZmZzZXQgPSAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZyb20gPSBzdGF0ZS0+d2luZG93ICsgKHN0YXRlLT53bmV4dCAtIGNvcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb21fd2luZG93X29mZnNldCA9IHN0YXRlLnduZXh0IC0gY29weTtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tX291dF9vZmZzZXQgPSAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUubGVuZ3RoKSBjb3B5ID0gc3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGNvcHkgZnJvbSBvdXRwdXQgKi9cclxuICAgICAgICAgICAgICAgIC8vIGZyb20gPSBwdXQgLSBzdGF0ZS0+b2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZnJvbV93aW5kb3dfb2Zmc2V0ID0gLTE7XHJcbiAgICAgICAgICAgICAgICBmcm9tX291dF9vZmZzZXQgPSBzdHJtLm5leHRfb3V0IC0gc3RhdGUub2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgY29weSA9IHN0YXRlLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29weSA+IHMubGVmdCkgY29weSA9IHMubGVmdDtcclxuICAgICAgICAgICAgcy5sZWZ0IC09IGNvcHk7XHJcbiAgICAgICAgICAgIHN0YXRlLmxlbmd0aCAtPSBjb3B5O1xyXG4gICAgICAgICAgICBpZiggZnJvbV93aW5kb3dfb2Zmc2V0ID49IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJtLm91dHB1dF9kYXRhICs9IHN0YXRlLndpbmRvdy5zdWJzdHJpbmcoZnJvbV93aW5kb3dfb2Zmc2V0LCBmcm9tX3dpbmRvd19vZmZzZXQgKyBjb3B5KTtcclxuICAgICAgICAgICAgICAgIHN0cm0ubmV4dF9vdXQgKz0gY29weTtcclxuICAgICAgICAgICAgICAgIGNvcHkgPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RybS5uZXh0X291dCArPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm0ub3V0cHV0X2RhdGEgKz0gc3RybS5vdXRwdXRfZGF0YS5jaGFyQXQoZnJvbV9vdXRfb2Zmc2V0KyspO1xyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1jb3B5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUubGVuZ3RoID09IDApIHN0YXRlLm1vZGUgPSBMRU47XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTElUOlxyXG4gICAgICAgICAgICBpZiAocy5sZWZ0ID09IDApIGJyZWFrIGluZl9sZWF2ZTtcclxuXHJcbiAgICAgICAgICAgIHN0cm0ub3V0cHV0X2RhdGEgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShzdGF0ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBzdHJtLm5leHRfb3V0Kys7XHJcbiAgICAgICAgICAgIC8vKnB1dCsrID0gKHVuc2lnbmVkIGNoYXIpKHN0YXRlLT5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgcy5sZWZ0LS07XHJcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBMRU47XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hFQ0s6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS53cmFwKSB7XHJcbiAgICAgICAgICAgICAgICBpZighTkVFREJJVFMocywgMzIpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICBvdXQgLT0gcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgc3RybS50b3RhbF9vdXQgKz0gb3V0O1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudG90YWwgKz0gb3V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKG91dClcclxuICAgICAgICAgICAgICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJtLmNoZWNrc3VtX2Z1bmN0aW9uKHN0YXRlLmNoZWNrLCBzdHJtLm91dHB1dF9kYXRhLCBzdHJtLm91dHB1dF9kYXRhLmxlbmd0aCAtIG91dCwgb3V0KTtcclxuICAgICAgICAgICAgICAgIG91dCA9IHMubGVmdDtcclxuICAgICAgICAgICAgICAgIGlmICgoXHJcbi8vICNpZmRlZiBHVU5aSVBcclxuICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZmxhZ3MgPyBzLmhvbGQgOlxyXG4vLyNlbmRpZlxyXG4gICAgICAgICAgICAgICAgICAgICBSRVZFUlNFKHMuaG9sZCkpICE9IHN0YXRlLmNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RybS5tc2cgPSBcImluY29ycmVjdCBkYXRhIGNoZWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIElOSVRCSVRTKHMpO1xyXG4vL2RlYnVnKFwiIyMgaW5mbGF0ZTogICBjaGVjayBtYXRjaGVzIHRyYWlsZXJcXG5cIik7XHJcbi8vICAgICAgICAgICAgICAgIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgY2hlY2sgbWF0Y2hlcyB0cmFpbGVyXFxuXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4vLyNpZmRlZiBHVU5aSVBcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IExFTkdUSDtcclxuICAgICAgICBjYXNlIExFTkdUSDpcclxuICAgICAgICAgICAgaWYgKHN0YXRlLndyYXAgJiYgc3RhdGUuZmxhZ3MpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCAzMikpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgICAgIGlmIChzLmhvbGQgIT0gKHN0YXRlLnRvdGFsICYgMHhmZmZmZmZmZikpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbmNvcnJlY3QgbGVuZ3RoIGNoZWNrJztcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgSU5JVEJJVFMocyk7XHJcbiAgICAgICAgICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgbGVuZ3RoIG1hdGNoZXMgdHJhaWxlclxcblwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuLy8jZW5kaWZcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IERPTkU7XHJcbiAgICAgICAgY2FzZSBET05FOlxyXG4gICAgICAgICAgICByZXQgPSBaTElCLlpfU1RSRUFNX0VORDtcclxuICAgICAgICAgICAgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgIGNhc2UgQkFEOlxyXG4gICAgICAgICAgICByZXQgPSBaTElCLlpfREFUQV9FUlJPUjtcclxuICAgICAgICAgICAgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgIGNhc2UgTUVNOlxyXG4gICAgICAgICAgICByZXR1cm4gWkxJQi5aX01FTV9FUlJPUjtcclxuICAgICAgICBjYXNlIFNZTkM6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFpMSUIuWl9TVFJFQU1fRVJST1I7XHJcbiAgICAgICAgfSB9XHJcblxyXG4gICAgLypcclxuICAgICAgUmV0dXJuIGZyb20gaW5mbGF0ZSgpLCB1cGRhdGluZyB0aGUgdG90YWwgY291bnRzIGFuZCB0aGUgY2hlY2sgdmFsdWUuXHJcbiAgICAgIElmIHRoZXJlIHdhcyBubyBwcm9ncmVzcyBkdXJpbmcgdGhlIGluZmxhdGUoKSBjYWxsLCByZXR1cm4gYSBidWZmZXJcclxuICAgICAgZXJyb3IuICBDYWxsIHVwZGF0ZXdpbmRvdygpIHRvIGNyZWF0ZSBhbmQvb3IgdXBkYXRlIHRoZSB3aW5kb3cgc3RhdGUuXHJcbiAgICAgIE5vdGU6IGEgbWVtb3J5IGVycm9yIGZyb20gaW5mbGF0ZSgpIGlzIG5vbi1yZWNvdmVyYWJsZS5cclxuICAgICovXHJcbmluZl9sZWF2ZTpcclxuICAgIFJFU1RPUkUocyk7XHJcbiAgICBpZiAoc3RhdGUud3NpemUgfHwgKG91dCAhPSBzdHJtLmF2YWlsX291dCAmJiBzdGF0ZS5tb2RlIDwgQkFEICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZS5tb2RlIDwgQ0hFQ0sgfHwgZmx1c2ggIT0gWkxJQi5aX0ZJTklTSCkpKVxyXG4gICAgICAgIGlmICh1cGRhdGV3aW5kb3coc3RybSkpIHtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IE1FTTtcclxuICAgICAgICAgICAgcmV0dXJuIFpMSUIuWl9NRU1fRVJST1I7XHJcbiAgICAgICAgfVxyXG4gICAgX2luIC09IHN0cm0uYXZhaWxfaW47XHJcbiAgICBvdXQgLT0gc3RybS5hdmFpbF9vdXQ7XHJcbiAgICBzdHJtLnRvdGFsX2luICs9IF9pbjtcclxuICAgIHN0cm0udG90YWxfb3V0ICs9IG91dDtcclxuICAgIHN0YXRlLnRvdGFsICs9IG91dDtcclxuICAgIGlmIChzdGF0ZS53cmFwICYmIG91dClcclxuXHQgICAgc3RybS5hZGxlciA9IHN0YXRlLmNoZWNrID0gc3RybS5jaGVja3N1bV9mdW5jdGlvbihzdGF0ZS5jaGVjaywgc3RybS5vdXRwdXRfZGF0YSwgMCwgc3RybS5vdXRwdXRfZGF0YS5sZW5ndGgpO1xyXG4gICAgc3RybS5kYXRhX3R5cGUgPSBzdGF0ZS5iaXRzICsgKHN0YXRlLmxhc3QgPyA2NCA6IDApICtcclxuXHQgICAgKHN0YXRlLm1vZGUgPT0gVFlQRSA/IDEyOCA6IDApICtcclxuXHQgICAgKHN0YXRlLm1vZGUgPT0gTEVOXyB8fCBzdGF0ZS5tb2RlID09IENPUFlfID8gMjU2IDogMCk7XHJcbiAgICBpZiAoKChfaW4gPT0gMCAmJiBvdXQgPT0gMCkgfHwgZmx1c2ggPT0gWkxJQi5aX0ZJTklTSCkgJiYgcmV0ID09IFpMSUIuWl9PSylcclxuICAgICAgICByZXQgPSBaTElCLlpfQlVGX0VSUk9SO1xyXG4gICAgcmV0dXJuIHJldDtcclxufTtcclxuXHJcblpMSUIuaW5mbGF0ZUVuZCA9IGZ1bmN0aW9uKHN0cm0pXHJcbntcclxuICAgIHZhciBzdGF0ZTtcclxuICAgIGlmICghc3RybSB8fCAhc3RybS5zdGF0ZSApXHJcbiAgICAgICAgcmV0dXJuIFpMSUIuWl9TVFJFQU1fRVJST1I7XHJcbiAgICBzdGF0ZSA9IHN0cm0uc3RhdGU7XHJcbiAgICBzdGF0ZS53aW5kb3cgPSBudWxsO1xyXG4gICAgc3RybS5zdGF0ZSA9IG51bGw7XHJcbiAgICAvLyAgICBUcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiBlbmRcXG5cIikpO1xyXG4gICAgcmV0dXJuIFpMSUIuWl9PSztcclxufTtcclxuXHJcblpMSUIuel9zdHJlYW0ucHJvdG90eXBlLmluZmxhdGUgPSBmdW5jdGlvbihpbnB1dF9zdHJpbmcsIG9wdHMpXHJcbntcclxuICAgIHZhciBmbHVzaDtcclxuICAgIHZhciBhdmFpbF9vdXQ7XHJcblx0dmFyIERFRkFVTFRfQlVGRkVSX1NJWkUgPSAxNjM4NDtcclxuXHJcbiAgICB0aGlzLmlucHV0X2RhdGEgPSBpbnB1dF9zdHJpbmc7XHJcbiAgICB0aGlzLm5leHRfaW4gPSBnZXRhcmcob3B0cywgJ25leHRfaW4nLCAwKTtcclxuICAgIHRoaXMuYXZhaWxfaW4gPSBnZXRhcmcob3B0cywgJ2F2YWlsX2luJywgaW5wdXRfc3RyaW5nLmxlbmd0aCAtIHRoaXMubmV4dF9pbik7XHJcblxyXG4gICAgZmx1c2ggPSBnZXRhcmcob3B0cywgJ2ZsdXNoJywgWkxJQi5aX1NZTkNfRkxVU0gpO1xyXG4gICAgYXZhaWxfb3V0ID0gZ2V0YXJnKG9wdHMsICdhdmFpbF9vdXQnLCAtMSk7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9ICcnO1xyXG4gICAgZG8ge1xyXG4gICAgICAgIHRoaXMuYXZhaWxfb3V0ID0gKGF2YWlsX291dCA+PSAwID8gYXZhaWxfb3V0IDogREVGQVVMVF9CVUZGRVJfU0laRSk7XHJcbiAgICAgICAgdGhpcy5vdXRwdXRfZGF0YSA9ICcnO1xyXG4gICAgICAgIHRoaXMubmV4dF9vdXQgPSAwO1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSBaTElCLmluZmxhdGUodGhpcywgZmx1c2gpO1xyXG4gICAgICAgIGlmKHRoaXMuZXJyb3IgIT0gMCkgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiemxpYiBlcnJvclwiLCB0aGlzLmVycm9yKVxyXG4gICAgICAgIGlmKGF2YWlsX291dCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dHB1dF9kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgKz0gdGhpcy5vdXRwdXRfZGF0YTtcclxuXHRcdGlmKHRoaXMuYXZhaWxfb3V0ID4gMCkge1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuICAgIH0gd2hpbGUodGhpcy5lcnJvciA9PSBaTElCLlpfT0spO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5aTElCLnpfc3RyZWFtLnByb3RvdHlwZS5pbmZsYXRlUmVzZXQgPSBmdW5jdGlvbih3aW5kb3dCaXRzKVxyXG57XHJcbiAgICByZXR1cm4gWkxJQi5pbmZsYXRlUmVzZXQodGhpcywgd2luZG93Qml0cyk7XHJcbn07XHJcblxyXG59KCkpO1xyXG4vKiB6bGliLWFkbGVyMzIuanMgLS0gSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHpsaWIgYWRsZXIzMi5cclxuICBWZXJzaW9uOiAwLjIuMFxyXG4gIExhc3RNb2RpZmllZDogQXByIDEyIDIwMTJcclxuICBDb3B5cmlnaHQgKEMpIDIwMTIgTWFzYW5hbyBJenVtbyA8aXpAb25pY29zLmNvLmpwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICBBUEkgZG9jdW1lbnRhdGlvblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuVXNhZ2U6IGFkbGVyID0gWkxJQi5hZGxlcjMyKGFkbGVyLCBidWYsIG9mZnNldCwgbGVuKTtcclxuXHJcbiAgICAgVXBkYXRlIGEgcnVubmluZyBBZGxlci0zMiBjaGVja3N1bSB3aXRoIHRoZSBieXRlcyBidWZbb2Zmc2V0Li5vZmZzZXQrbGVuLTFdIGFuZFxyXG4gICByZXR1cm4gdGhlIHVwZGF0ZWQgY2hlY2tzdW0uICBJZiBidWYgaXMgbnVsbCwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZVxyXG4gICByZXF1aXJlZCBpbml0aWFsIHZhbHVlIGZvciB0aGUgY2hlY2tzdW0uXHJcblxyXG4gICAgIEFuIEFkbGVyLTMyIGNoZWNrc3VtIGlzIGFsbW9zdCBhcyByZWxpYWJsZSBhcyBhIENSQzMyIGJ1dCBjYW4gYmUgY29tcHV0ZWRcclxuICAgbXVjaCBmYXN0ZXIuXHJcblxyXG4gICBVc2FnZSBleGFtcGxlOlxyXG5cclxuICAgICB2YXIgYWRsZXIgPSBaTElCLmFkbGVyMzIoMCwgbnVsbCwgMCwgMCk7XHJcblxyXG4gICAgIHdoaWxlIChyZWFkX2J1ZmZlcihidWZmZXIsIGxlbmd0aCkgIT0gRU9GKSB7XHJcbiAgICAgICBhZGxlciA9IFpMSUIuYWRsZXIzMihhZGxlciwgYnVmZmVyLCAwLCBsZW5ndGgpO1xyXG4gICAgIH1cclxuICAgICBpZiAoYWRsZXIgIT0gb3JpZ2luYWxfYWRsZXIpIGVycm9yKCk7XHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuVXNhZ2U6IGFkbGVyID0gWkxJQi5hZGxlcjMyX2NvbWJpbmUoYWRsZXIxLCBhZGxlcjIsIGxlbjIpO1xyXG5cclxuICAgICBDb21iaW5lIHR3byBBZGxlci0zMiBjaGVja3N1bXMgaW50byBvbmUuICBGb3IgdHdvIHNlcXVlbmNlcyBvZiBieXRlcywgc2VxMVxyXG4gICBhbmQgc2VxMiB3aXRoIGxlbmd0aHMgbGVuMSBhbmQgbGVuMiwgQWRsZXItMzIgY2hlY2tzdW1zIHdlcmUgY2FsY3VsYXRlZCBmb3JcclxuICAgZWFjaCwgYWRsZXIxIGFuZCBhZGxlcjIuICBhZGxlcjMyX2NvbWJpbmUoKSByZXR1cm5zIHRoZSBBZGxlci0zMiBjaGVja3N1bSBvZlxyXG4gICBzZXExIGFuZCBzZXEyIGNvbmNhdGVuYXRlZCwgcmVxdWlyaW5nIG9ubHkgYWRsZXIxLCBhZGxlcjIsIGFuZCBsZW4yLiAgTm90ZVxyXG4gICB0aGF0IHRoZSB6X29mZl90IHR5cGUgKGxpa2Ugb2ZmX3QpIGlzIGEgc2lnbmVkIGludGVnZXIuICBJZiBsZW4yIGlzXHJcbiAgIG5lZ2F0aXZlLCB0aGUgcmVzdWx0IGhhcyBubyBtZWFuaW5nIG9yIHV0aWxpdHkuXHJcbiovXHJcblxyXG5pZiggdHlwZW9mIFpMSUIgPT09ICd1bmRlZmluZWQnICkge1xyXG4gICAgYWxlcnQoJ1pMSUIgaXMgbm90IGRlZmluZWQuICBTUkMgemxpYi5qcyBiZWZvcmUgemxpYi1hZGxlcjMyLmpzJylcclxufVxyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cclxuLyogYWRsZXIzMi5jIC0tIGNvbXB1dGUgdGhlIEFkbGVyLTMyIGNoZWNrc3VtIG9mIGEgZGF0YSBzdHJlYW1cclxuICogQ29weXJpZ2h0IChDKSAxOTk1LTIwMTEgTWFyayBBZGxlclxyXG4gKiBGb3IgY29uZGl0aW9ucyBvZiBkaXN0cmlidXRpb24gYW5kIHVzZSwgc2VlIGNvcHlyaWdodCBub3RpY2UgaW4gemxpYi5oXHJcbiAqL1xyXG5cclxudmFyIEJBU0UgPSA2NTUyMTsgICAgICAvKiBsYXJnZXN0IHByaW1lIHNtYWxsZXIgdGhhbiA2NTUzNiAqL1xyXG52YXIgTk1BWCA9ICA1NTUyO1xyXG4vKiBOTUFYIGlzIHRoZSBsYXJnZXN0IG4gc3VjaCB0aGF0IDI1NW4obisxKS8yICsgKG4rMSkoQkFTRS0xKSA8PSAyXjMyLTEgKi9cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuZnVuY3Rpb24gYWRsZXIzMl9zdHJpbmcoYWRsZXIsIGJ1Ziwgb2Zmc2V0LCBsZW4pXHJcbntcclxuICAgIHZhciBzdW0yO1xyXG4gICAgdmFyIG47XHJcblxyXG4gICAgLyogc3BsaXQgQWRsZXItMzIgaW50byBjb21wb25lbnQgc3VtcyAqL1xyXG4gICAgc3VtMiA9IChhZGxlciA+Pj4gMTYpICYgMHhmZmZmO1xyXG4gICAgYWRsZXIgJj0gMHhmZmZmO1xyXG5cclxuICAgIC8qIGluIGNhc2UgdXNlciBsaWtlcyBkb2luZyBhIGJ5dGUgYXQgYSB0aW1lLCBrZWVwIGl0IGZhc3QgKi9cclxuICAgIGlmIChsZW4gPT0gMSkge1xyXG5cdFx0YWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KSAmIDB4ZmY7XHJcbiAgICAgICAgaWYgKGFkbGVyID49IEJBU0UpXHJcbiAgICAgICAgICAgIGFkbGVyIC09IEJBU0U7XHJcbiAgICAgICAgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICBpZiAoc3VtMiA+PSBCQVNFKVxyXG4gICAgICAgICAgICBzdW0yIC09IEJBU0U7XHJcbiAgICAgICAgcmV0dXJuIGFkbGVyIHwgKHN1bTIgPDwgMTYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGluaXRpYWwgQWRsZXItMzIgdmFsdWUgKGRlZmVycmVkIGNoZWNrIGZvciBsZW4gPT0gMSBzcGVlZCkgKi9cclxuICAgIGlmIChidWYgPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIDE7XHJcblxyXG4gICAgLyogaW4gY2FzZSBzaG9ydCBsZW5ndGhzIGFyZSBwcm92aWRlZCwga2VlcCBpdCBzb21ld2hhdCBmYXN0ICovXHJcbiAgICBpZiAobGVuIDwgMTYpIHtcclxuICAgICAgICB3aGlsZSAobGVuLS0pIHtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjtcclxuICAgICAgICAgICAgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFkbGVyID49IEJBU0UpXHJcbiAgICAgICAgICAgIGFkbGVyIC09IEJBU0U7XHJcblx0XHRzdW0yICU9IEJBU0U7ICAgICAgICAgICAvKiBvbmx5IGFkZGVkIHNvIG1hbnkgQkFTRSdzICovXHJcbiAgICAgICAgcmV0dXJuIGFkbGVyIHwgKHN1bTIgPDwgMTYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGRvIGxlbmd0aCBOTUFYIGJsb2NrcyAtLSByZXF1aXJlcyBqdXN0IG9uZSBtb2R1bG8gb3BlcmF0aW9uICovXHJcbiAgICB3aGlsZSAobGVuID49IE5NQVgpIHtcclxuICAgICAgICBsZW4gLT0gTk1BWDtcclxuICAgICAgICBuID0gTk1BWCA+PiA0OyAgICAgICAgICAvKiBOTUFYIGlzIGRpdmlzaWJsZSBieSAxNiAqL1xyXG4gICAgICAgIGRvIHtcclxuXHRcdFx0LyogMTYgc3VtcyB1bnJvbGxlZCAqL1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgIH0gd2hpbGUgKC0tbik7XHJcbiAgICAgICAgYWRsZXIgJT0gQkFTRTtcclxuICAgICAgICBzdW0yICU9IEJBU0U7XHJcbiAgICB9XHJcblxyXG4gICAgLyogZG8gcmVtYWluaW5nIGJ5dGVzIChsZXNzIHRoYW4gTk1BWCwgc3RpbGwganVzdCBvbmUgbW9kdWxvKSAqL1xyXG4gICAgaWYgKGxlbikgeyAgICAgICAgICAgICAgICAgIC8qIGF2b2lkIG1vZHVsb3MgaWYgbm9uZSByZW1haW5pbmcgKi9cclxuICAgICAgICB3aGlsZSAobGVuID49IDE2KSB7XHJcbiAgICAgICAgICAgIGxlbiAtPSAxNjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGxlbi0tKSB7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCsrKSAmIDB4ZmY7IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkbGVyICU9IEJBU0U7XHJcbiAgICAgICAgc3VtMiAlPSBCQVNFO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHJldHVybiByZWNvbWJpbmVkIHN1bXMgKi9cclxuICAgIHJldHVybiBhZGxlciB8IChzdW0yIDw8IDE2KTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5mdW5jdGlvbiBhZGxlcjMyX2FycmF5KGFkbGVyLCBidWYsIG9mZnNldCwgbGVuKVxyXG57XHJcbiAgICB2YXIgc3VtMjtcclxuICAgIHZhciBuO1xyXG5cclxuICAgIC8qIHNwbGl0IEFkbGVyLTMyIGludG8gY29tcG9uZW50IHN1bXMgKi9cclxuICAgIHN1bTIgPSAoYWRsZXIgPj4+IDE2KSAmIDB4ZmZmZjtcclxuICAgIGFkbGVyICY9IDB4ZmZmZjtcclxuXHJcbiAgICAvKiBpbiBjYXNlIHVzZXIgbGlrZXMgZG9pbmcgYSBieXRlIGF0IGEgdGltZSwga2VlcCBpdCBmYXN0ICovXHJcbiAgICBpZiAobGVuID09IDEpIHtcclxuXHRcdGFkbGVyICs9IGJ1ZltvZmZzZXRdO1xyXG4gICAgICAgIGlmIChhZGxlciA+PSBCQVNFKVxyXG4gICAgICAgICAgICBhZGxlciAtPSBCQVNFO1xyXG4gICAgICAgIHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgaWYgKHN1bTIgPj0gQkFTRSlcclxuICAgICAgICAgICAgc3VtMiAtPSBCQVNFO1xyXG4gICAgICAgIHJldHVybiBhZGxlciB8IChzdW0yIDw8IDE2KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBpbml0aWFsIEFkbGVyLTMyIHZhbHVlIChkZWZlcnJlZCBjaGVjayBmb3IgbGVuID09IDEgc3BlZWQpICovXHJcbiAgICBpZiAoYnVmID09PSBudWxsKVxyXG4gICAgICAgIHJldHVybiAxO1xyXG5cclxuICAgIC8qIGluIGNhc2Ugc2hvcnQgbGVuZ3RocyBhcmUgcHJvdmlkZWQsIGtlZXAgaXQgc29tZXdoYXQgZmFzdCAqL1xyXG4gICAgaWYgKGxlbiA8IDE2KSB7XHJcbiAgICAgICAgd2hpbGUgKGxlbi0tKSB7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107XHJcbiAgICAgICAgICAgIHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhZGxlciA+PSBCQVNFKVxyXG4gICAgICAgICAgICBhZGxlciAtPSBCQVNFO1xyXG5cdFx0c3VtMiAlPSBCQVNFOyAgICAgICAgICAgLyogb25seSBhZGRlZCBzbyBtYW55IEJBU0UncyAqL1xyXG4gICAgICAgIHJldHVybiBhZGxlciB8IChzdW0yIDw8IDE2KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBkbyBsZW5ndGggTk1BWCBibG9ja3MgLS0gcmVxdWlyZXMganVzdCBvbmUgbW9kdWxvIG9wZXJhdGlvbiAqL1xyXG4gICAgd2hpbGUgKGxlbiA+PSBOTUFYKSB7XHJcbiAgICAgICAgbGVuIC09IE5NQVg7XHJcbiAgICAgICAgbiA9IE5NQVggPj4gNDsgICAgICAgICAgLyogTk1BWCBpcyBkaXZpc2libGUgYnkgMTYgKi9cclxuICAgICAgICBkbyB7XHJcblx0XHRcdC8qIDE2IHN1bXMgdW5yb2xsZWQgKi9cclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICB9IHdoaWxlICgtLW4pO1xyXG4gICAgICAgIGFkbGVyICU9IEJBU0U7XHJcbiAgICAgICAgc3VtMiAlPSBCQVNFO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGRvIHJlbWFpbmluZyBieXRlcyAobGVzcyB0aGFuIE5NQVgsIHN0aWxsIGp1c3Qgb25lIG1vZHVsbykgKi9cclxuICAgIGlmIChsZW4pIHsgICAgICAgICAgICAgICAgICAvKiBhdm9pZCBtb2R1bG9zIGlmIG5vbmUgcmVtYWluaW5nICovXHJcbiAgICAgICAgd2hpbGUgKGxlbiA+PSAxNikge1xyXG4gICAgICAgICAgICBsZW4gLT0gMTY7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChsZW4tLSkge1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWZbb2Zmc2V0KytdOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGxlciAlPSBCQVNFO1xyXG4gICAgICAgIHN1bTIgJT0gQkFTRTtcclxuICAgIH1cclxuXHJcbiAgICAvKiByZXR1cm4gcmVjb21iaW5lZCBzdW1zICovXHJcbiAgICByZXR1cm4gYWRsZXIgfCAoc3VtMiA8PCAxNik7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuWkxJQi5hZGxlcjMyID0gZnVuY3Rpb24oYWRsZXIsIGJ1Ziwgb2Zmc2V0LCBsZW4pXHJcbntcclxuXHRpZih0eXBlb2YgYnVmID09PSAnc3RyaW5nJykge1xyXG5cdFx0cmV0dXJuIGFkbGVyMzJfc3RyaW5nKGFkbGVyLCBidWYsIG9mZnNldCwgbGVuKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIGFkbGVyMzJfYXJyYXkoYWRsZXIsIGJ1Ziwgb2Zmc2V0LCBsZW4pO1xyXG5cdH1cclxufTtcclxuXHJcblpMSUIuYWRsZXIzMl9jb21iaW5lID0gZnVuY3Rpb24oYWRsZXIxLCBhZGxlcjIsIGxlbjIpXHJcbntcclxuICAgIHZhciBzdW0xO1xyXG4gICAgdmFyIHN1bTI7XHJcbiAgICB2YXIgcmVtO1xyXG5cclxuICAgIC8qIGZvciBuZWdhdGl2ZSBsZW4sIHJldHVybiBpbnZhbGlkIGFkbGVyMzIgYXMgYSBjbHVlIGZvciBkZWJ1Z2dpbmcgKi9cclxuICAgIGlmIChsZW4yIDwgMClcclxuICAgICAgICByZXR1cm4gMHhmZmZmZmZmZjtcclxuXHJcbiAgICAvKiB0aGUgZGVyaXZhdGlvbiBvZiB0aGlzIGZvcm11bGEgaXMgbGVmdCBhcyBhbiBleGVyY2lzZSBmb3IgdGhlIHJlYWRlciAqL1xyXG4gICAgbGVuMiAlPSBCQVNFOyAgICAgICAgICAgICAgICAvKiBhc3N1bWVzIGxlbjIgPj0gMCAqL1xyXG4gICAgcmVtID0gbGVuMjtcclxuICAgIHN1bTEgPSBhZGxlcjEgJiAweGZmZmY7XHJcbiAgICBzdW0yID0gcmVtICogc3VtMTtcclxuICAgIHN1bTIgJT0gQkFTRTtcclxuICAgIHN1bTEgKz0gKGFkbGVyMiAmIDB4ZmZmZikgKyBCQVNFIC0gMTtcclxuICAgIHN1bTIgKz0gKChhZGxlcjEgPj4gMTYpICYgMHhmZmZmKSArICgoYWRsZXIyID4+IDE2KSAmIDB4ZmZmZikgKyBCQVNFIC0gcmVtO1xyXG4gICAgaWYgKHN1bTEgPj0gQkFTRSkgc3VtMSAtPSBCQVNFO1xyXG4gICAgaWYgKHN1bTEgPj0gQkFTRSkgc3VtMSAtPSBCQVNFO1xyXG4gICAgaWYgKHN1bTIgPj0gKEJBU0UgPDwgMSkpIHN1bTIgLT0gKEJBU0UgPDwgMSk7XHJcbiAgICBpZiAoc3VtMiA+PSBCQVNFKSBzdW0yIC09IEJBU0U7XHJcbiAgICByZXR1cm4gc3VtMSB8IChzdW0yIDw8IDE2KTtcclxufVxyXG5cclxufSgpKTtcclxuLyogemxpYi1hZGxlcjMyLmpzIC0tIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gZm9yIHRoZSB6bGliIGNyYzMyLlxyXG4gIFZlcnNpb246IDAuMi4wXHJcbiAgTGFzdE1vZGlmaWVkOiBBcHIgMTIgMjAxMlxyXG4gIENvcHlyaWdodCAoQykgMjAxMiBNYXNhbmFvIEl6dW1vIDxpekBvbmljb3MuY28uanA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIEFQSSBkb2N1bWVudGF0aW9uXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5Vc2FnZTogY3JjID0gWkxJQi5jcmMzMihjcmMsIGJ1Ziwgb2Zmc2V0LCBsZW4pO1xyXG5cclxuICAgICBVcGRhdGUgYSBydW5uaW5nIENSQy0zMiB3aXRoIHRoZSBieXRlcyBidWZbb2Zmc2V0Li5vZmZzZXQrbGVuLTFdIGFuZCByZXR1cm4gdGhlXHJcbiAgIHVwZGF0ZWQgQ1JDLTMyLiAgSWYgYnVmIGlzIG51bGwsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWlyZWRcclxuICAgaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIGZvciB0aGUgY3JjLiAgUHJlLSBhbmQgcG9zdC1jb25kaXRpb25pbmcgKG9uZSdzXHJcbiAgIGNvbXBsZW1lbnQpIGlzIHBlcmZvcm1lZCB3aXRoaW4gdGhpcyBmdW5jdGlvbiBzbyBpdCBzaG91bGRuJ3QgYmUgZG9uZSBieSB0aGVcclxuICAgYXBwbGljYXRpb24uXHJcblxyXG4gICBVc2FnZSBleGFtcGxlOlxyXG5cclxuICAgICB2YXIgY3JjID0gWkxJQi5jcmMzMigwLCBudWxsLCAwLCAwKTtcclxuXHJcbiAgICAgd2hpbGUgKHJlYWRfYnVmZmVyKGJ1ZmZlciwgbGVuZ3RoKSAhPSBFT0YpIHtcclxuICAgICAgIGNyYyA9IFpMSUIuY3JjMzIoY3JjLCBidWZmZXIsIDAsIGxlbmd0aCk7XHJcbiAgICAgfVxyXG4gICAgIGlmIChjcmMgIT0gb3JpZ2luYWxfY3JjKSBlcnJvcigpO1xyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblVzYWdlOiBjcmMgPSBjcmMzMl9jb21iaW5lKGNyYzEsIGNyYzIsIGxlbjIpO1xyXG5cclxuICAgICBDb21iaW5lIHR3byBDUkMtMzIgY2hlY2sgdmFsdWVzIGludG8gb25lLiAgRm9yIHR3byBzZXF1ZW5jZXMgb2YgYnl0ZXMsXHJcbiAgIHNlcTEgYW5kIHNlcTIgd2l0aCBsZW5ndGhzIGxlbjEgYW5kIGxlbjIsIENSQy0zMiBjaGVjayB2YWx1ZXMgd2VyZVxyXG4gICBjYWxjdWxhdGVkIGZvciBlYWNoLCBjcmMxIGFuZCBjcmMyLiAgY3JjMzJfY29tYmluZSgpIHJldHVybnMgdGhlIENSQy0zMlxyXG4gICBjaGVjayB2YWx1ZSBvZiBzZXExIGFuZCBzZXEyIGNvbmNhdGVuYXRlZCwgcmVxdWlyaW5nIG9ubHkgY3JjMSwgY3JjMiwgYW5kXHJcbiAgIGxlbjIuXHJcbiovXHJcblxyXG5pZiggdHlwZW9mIFpMSUIgPT09ICd1bmRlZmluZWQnICkge1xyXG4gICAgYWxlcnQoJ1pMSUIgaXMgbm90IGRlZmluZWQuICBTUkMgemxpYi5qcyBiZWZvcmUgemxpYi1jcmMzMi5qcycpXHJcbn1cclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHJcbi8qIGNyYzMyLmMgLS0gY29tcHV0ZSB0aGUgQ1JDLTMyIG9mIGEgZGF0YSBzdHJlYW1cclxuICogQ29weXJpZ2h0IChDKSAxOTk1LTIwMDYsIDIwMTAsIDIwMTEgTWFyayBBZGxlclxyXG4gKiBGb3IgY29uZGl0aW9ucyBvZiBkaXN0cmlidXRpb24gYW5kIHVzZSwgc2VlIGNvcHlyaWdodCBub3RpY2UgaW4gemxpYi5oXHJcbiAqXHJcbiAqIFRoYW5rcyB0byBSb2RuZXkgQnJvd24gPHJicm93bjY0QGNzYy5jb20uYXU+IGZvciBoaXMgY29udHJpYnV0aW9uIG9mIGZhc3RlclxyXG4gKiBDUkMgbWV0aG9kczogZXhjbHVzaXZlLW9yaW5nIDMyIGJpdHMgb2YgZGF0YSBhdCBhIHRpbWUsIGFuZCBwcmUtY29tcHV0aW5nXHJcbiAqIHRhYmxlcyBmb3IgdXBkYXRpbmcgdGhlIHNoaWZ0IHJlZ2lzdGVyIGluIG9uZSBzdGVwIHdpdGggdGhyZWUgZXhjbHVzaXZlLW9yc1xyXG4gKiBpbnN0ZWFkIG9mIGZvdXIgc3RlcHMgd2l0aCBmb3VyIGV4Y2x1c2l2ZS1vcnMuICBUaGlzIHJlc3VsdHMgaW4gYWJvdXQgYVxyXG4gKiBmYWN0b3Igb2YgdHdvIGluY3JlYXNlIGluIHNwZWVkIG9uIGEgUG93ZXIgUEMgRzQgKFBQQzc0NTUpIHVzaW5nIGdjYyAtTzMuXHJcbiAqL1xyXG5cclxudmFyIGNyY190YWJsZSA9IFtcclxuICAgIDB4MDAwMDAwMDAsIDB4NzcwNzMwOTYsIDB4ZWUwZTYxMmMsIDB4OTkwOTUxYmEsIDB4MDc2ZGM0MTksXHJcbiAgICAweDcwNmFmNDhmLCAweGU5NjNhNTM1LCAweDllNjQ5NWEzLCAweDBlZGI4ODMyLCAweDc5ZGNiOGE0LFxyXG4gICAgMHhlMGQ1ZTkxZSwgMHg5N2QyZDk4OCwgMHgwOWI2NGMyYiwgMHg3ZWIxN2NiZCwgMHhlN2I4MmQwNyxcclxuICAgIDB4OTBiZjFkOTEsIDB4MWRiNzEwNjQsIDB4NmFiMDIwZjIsIDB4ZjNiOTcxNDgsIDB4ODRiZTQxZGUsXHJcbiAgICAweDFhZGFkNDdkLCAweDZkZGRlNGViLCAweGY0ZDRiNTUxLCAweDgzZDM4NWM3LCAweDEzNmM5ODU2LFxyXG4gICAgMHg2NDZiYThjMCwgMHhmZDYyZjk3YSwgMHg4YTY1YzllYywgMHgxNDAxNWM0ZiwgMHg2MzA2NmNkOSxcclxuICAgIDB4ZmEwZjNkNjMsIDB4OGQwODBkZjUsIDB4M2I2ZTIwYzgsIDB4NGM2OTEwNWUsIDB4ZDU2MDQxZTQsXHJcbiAgICAweGEyNjc3MTcyLCAweDNjMDNlNGQxLCAweDRiMDRkNDQ3LCAweGQyMGQ4NWZkLCAweGE1MGFiNTZiLFxyXG4gICAgMHgzNWI1YThmYSwgMHg0MmIyOTg2YywgMHhkYmJiYzlkNiwgMHhhY2JjZjk0MCwgMHgzMmQ4NmNlMyxcclxuICAgIDB4NDVkZjVjNzUsIDB4ZGNkNjBkY2YsIDB4YWJkMTNkNTksIDB4MjZkOTMwYWMsIDB4NTFkZTAwM2EsXHJcbiAgICAweGM4ZDc1MTgwLCAweGJmZDA2MTE2LCAweDIxYjRmNGI1LCAweDU2YjNjNDIzLCAweGNmYmE5NTk5LFxyXG4gICAgMHhiOGJkYTUwZiwgMHgyODAyYjg5ZSwgMHg1ZjA1ODgwOCwgMHhjNjBjZDliMiwgMHhiMTBiZTkyNCxcclxuICAgIDB4MmY2ZjdjODcsIDB4NTg2ODRjMTEsIDB4YzE2MTFkYWIsIDB4YjY2NjJkM2QsIDB4NzZkYzQxOTAsXHJcbiAgICAweDAxZGI3MTA2LCAweDk4ZDIyMGJjLCAweGVmZDUxMDJhLCAweDcxYjE4NTg5LCAweDA2YjZiNTFmLFxyXG4gICAgMHg5ZmJmZTRhNSwgMHhlOGI4ZDQzMywgMHg3ODA3YzlhMiwgMHgwZjAwZjkzNCwgMHg5NjA5YTg4ZSxcclxuICAgIDB4ZTEwZTk4MTgsIDB4N2Y2YTBkYmIsIDB4MDg2ZDNkMmQsIDB4OTE2NDZjOTcsIDB4ZTY2MzVjMDEsXHJcbiAgICAweDZiNmI1MWY0LCAweDFjNmM2MTYyLCAweDg1NjUzMGQ4LCAweGYyNjIwMDRlLCAweDZjMDY5NWVkLFxyXG4gICAgMHgxYjAxYTU3YiwgMHg4MjA4ZjRjMSwgMHhmNTBmYzQ1NywgMHg2NWIwZDljNiwgMHgxMmI3ZTk1MCxcclxuICAgIDB4OGJiZWI4ZWEsIDB4ZmNiOTg4N2MsIDB4NjJkZDFkZGYsIDB4MTVkYTJkNDksIDB4OGNkMzdjZjMsXHJcbiAgICAweGZiZDQ0YzY1LCAweDRkYjI2MTU4LCAweDNhYjU1MWNlLCAweGEzYmMwMDc0LCAweGQ0YmIzMGUyLFxyXG4gICAgMHg0YWRmYTU0MSwgMHgzZGQ4OTVkNywgMHhhNGQxYzQ2ZCwgMHhkM2Q2ZjRmYiwgMHg0MzY5ZTk2YSxcclxuICAgIDB4MzQ2ZWQ5ZmMsIDB4YWQ2Nzg4NDYsIDB4ZGE2MGI4ZDAsIDB4NDQwNDJkNzMsIDB4MzMwMzFkZTUsXHJcbiAgICAweGFhMGE0YzVmLCAweGRkMGQ3Y2M5LCAweDUwMDU3MTNjLCAweDI3MDI0MWFhLCAweGJlMGIxMDEwLFxyXG4gICAgMHhjOTBjMjA4NiwgMHg1NzY4YjUyNSwgMHgyMDZmODViMywgMHhiOTY2ZDQwOSwgMHhjZTYxZTQ5ZixcclxuICAgIDB4NWVkZWY5MGUsIDB4MjlkOWM5OTgsIDB4YjBkMDk4MjIsIDB4YzdkN2E4YjQsIDB4NTliMzNkMTcsXHJcbiAgICAweDJlYjQwZDgxLCAweGI3YmQ1YzNiLCAweGMwYmE2Y2FkLCAweGVkYjg4MzIwLCAweDlhYmZiM2I2LFxyXG4gICAgMHgwM2I2ZTIwYywgMHg3NGIxZDI5YSwgMHhlYWQ1NDczOSwgMHg5ZGQyNzdhZiwgMHgwNGRiMjYxNSxcclxuICAgIDB4NzNkYzE2ODMsIDB4ZTM2MzBiMTIsIDB4OTQ2NDNiODQsIDB4MGQ2ZDZhM2UsIDB4N2E2YTVhYTgsXHJcbiAgICAweGU0MGVjZjBiLCAweDkzMDlmZjlkLCAweDBhMDBhZTI3LCAweDdkMDc5ZWIxLCAweGYwMGY5MzQ0LFxyXG4gICAgMHg4NzA4YTNkMiwgMHgxZTAxZjI2OCwgMHg2OTA2YzJmZSwgMHhmNzYyNTc1ZCwgMHg4MDY1NjdjYixcclxuICAgIDB4MTk2YzM2NzEsIDB4NmU2YjA2ZTcsIDB4ZmVkNDFiNzYsIDB4ODlkMzJiZTAsIDB4MTBkYTdhNWEsXHJcbiAgICAweDY3ZGQ0YWNjLCAweGY5YjlkZjZmLCAweDhlYmVlZmY5LCAweDE3YjdiZTQzLCAweDYwYjA4ZWQ1LFxyXG4gICAgMHhkNmQ2YTNlOCwgMHhhMWQxOTM3ZSwgMHgzOGQ4YzJjNCwgMHg0ZmRmZjI1MiwgMHhkMWJiNjdmMSxcclxuICAgIDB4YTZiYzU3NjcsIDB4M2ZiNTA2ZGQsIDB4NDhiMjM2NGIsIDB4ZDgwZDJiZGEsIDB4YWYwYTFiNGMsXHJcbiAgICAweDM2MDM0YWY2LCAweDQxMDQ3YTYwLCAweGRmNjBlZmMzLCAweGE4NjdkZjU1LCAweDMxNmU4ZWVmLFxyXG4gICAgMHg0NjY5YmU3OSwgMHhjYjYxYjM4YywgMHhiYzY2ODMxYSwgMHgyNTZmZDJhMCwgMHg1MjY4ZTIzNixcclxuICAgIDB4Y2MwYzc3OTUsIDB4YmIwYjQ3MDMsIDB4MjIwMjE2YjksIDB4NTUwNTI2MmYsIDB4YzViYTNiYmUsXHJcbiAgICAweGIyYmQwYjI4LCAweDJiYjQ1YTkyLCAweDVjYjM2YTA0LCAweGMyZDdmZmE3LCAweGI1ZDBjZjMxLFxyXG4gICAgMHgyY2Q5OWU4YiwgMHg1YmRlYWUxZCwgMHg5YjY0YzJiMCwgMHhlYzYzZjIyNiwgMHg3NTZhYTM5YyxcclxuICAgIDB4MDI2ZDkzMGEsIDB4OWMwOTA2YTksIDB4ZWIwZTM2M2YsIDB4NzIwNzY3ODUsIDB4MDUwMDU3MTMsXHJcbiAgICAweDk1YmY0YTgyLCAweGUyYjg3YTE0LCAweDdiYjEyYmFlLCAweDBjYjYxYjM4LCAweDkyZDI4ZTliLFxyXG4gICAgMHhlNWQ1YmUwZCwgMHg3Y2RjZWZiNywgMHgwYmRiZGYyMSwgMHg4NmQzZDJkNCwgMHhmMWQ0ZTI0MixcclxuICAgIDB4NjhkZGIzZjgsIDB4MWZkYTgzNmUsIDB4ODFiZTE2Y2QsIDB4ZjZiOTI2NWIsIDB4NmZiMDc3ZTEsXHJcbiAgICAweDE4Yjc0Nzc3LCAweDg4MDg1YWU2LCAweGZmMGY2YTcwLCAweDY2MDYzYmNhLCAweDExMDEwYjVjLFxyXG4gICAgMHg4ZjY1OWVmZiwgMHhmODYyYWU2OSwgMHg2MTZiZmZkMywgMHgxNjZjY2Y0NSwgMHhhMDBhZTI3OCxcclxuICAgIDB4ZDcwZGQyZWUsIDB4NGUwNDgzNTQsIDB4MzkwM2IzYzIsIDB4YTc2NzI2NjEsIDB4ZDA2MDE2ZjcsXHJcbiAgICAweDQ5Njk0NzRkLCAweDNlNmU3N2RiLCAweGFlZDE2YTRhLCAweGQ5ZDY1YWRjLCAweDQwZGYwYjY2LFxyXG4gICAgMHgzN2Q4M2JmMCwgMHhhOWJjYWU1MywgMHhkZWJiOWVjNSwgMHg0N2IyY2Y3ZiwgMHgzMGI1ZmZlOSxcclxuICAgIDB4YmRiZGYyMWMsIDB4Y2FiYWMyOGEsIDB4NTNiMzkzMzAsIDB4MjRiNGEzYTYsIDB4YmFkMDM2MDUsXHJcbiAgICAweGNkZDcwNjkzLCAweDU0ZGU1NzI5LCAweDIzZDk2N2JmLCAweGIzNjY3YTJlLCAweGM0NjE0YWI4LFxyXG4gICAgMHg1ZDY4MWIwMiwgMHgyYTZmMmI5NCwgMHhiNDBiYmUzNywgMHhjMzBjOGVhMSwgMHg1YTA1ZGYxYixcclxuICAgIDB4MmQwMmVmOGQgXTtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuZnVuY3Rpb24gY3JjMzJfc3RyaW5nKGNyYywgYnVmLCBvZmZzZXQsIGxlbilcclxue1xyXG5cdGlmIChidWYgPT0gbnVsbCkgcmV0dXJuIDA7XHJcblxyXG4gICAgY3JjID0gY3JjIF4gMHhmZmZmZmZmZjtcclxuICAgIHdoaWxlIChsZW4gPj0gOCkge1xyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG4gICAgICAgIGxlbiAtPSA4O1xyXG4gICAgfVxyXG4gICAgaWYgKGxlbikgZG8ge1xyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG4gICAgfSB3aGlsZSAoLS1sZW4pO1xyXG4gICAgcmV0dXJuIGNyYyBeIDB4ZmZmZmZmZmY7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuZnVuY3Rpb24gY3JjMzJfYXJyYXkoY3JjLCBidWYsIG9mZnNldCwgbGVuKVxyXG57XHJcblx0aWYgKGJ1ZiA9PSBudWxsKSByZXR1cm4gMDtcclxuXHJcbiAgICBjcmMgPSBjcmMgXiAweGZmZmZmZmZmO1xyXG4gICAgd2hpbGUgKGxlbiA+PSA4KSB7XHJcblx0XHRjcmMgPSBjcmNfdGFibGVbKGNyYyBeIGJ1ZltvZmZzZXQrK10pICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWZbb2Zmc2V0KytdKSAmIDB4ZmZdIF4gKGNyYyA+Pj4gOClcclxuXHRcdGNyYyA9IGNyY190YWJsZVsoY3JjIF4gYnVmW29mZnNldCsrXSkgJiAweGZmXSBeIChjcmMgPj4+IDgpXHJcblx0XHRjcmMgPSBjcmNfdGFibGVbKGNyYyBeIGJ1ZltvZmZzZXQrK10pICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWZbb2Zmc2V0KytdKSAmIDB4ZmZdIF4gKGNyYyA+Pj4gOClcclxuXHRcdGNyYyA9IGNyY190YWJsZVsoY3JjIF4gYnVmW29mZnNldCsrXSkgJiAweGZmXSBeIChjcmMgPj4+IDgpXHJcblx0XHRjcmMgPSBjcmNfdGFibGVbKGNyYyBeIGJ1ZltvZmZzZXQrK10pICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWZbb2Zmc2V0KytdKSAmIDB4ZmZdIF4gKGNyYyA+Pj4gOClcclxuICAgICAgICBsZW4gLT0gODtcclxuICAgIH1cclxuICAgIGlmIChsZW4pIGRvIHtcclxuXHRcdGNyYyA9IGNyY190YWJsZVsoY3JjIF4gYnVmW29mZnNldCsrXSkgJiAweGZmXSBeIChjcmMgPj4+IDgpXHJcbiAgICB9IHdoaWxlICgtLWxlbik7XHJcbiAgICByZXR1cm4gY3JjIF4gMHhmZmZmZmZmZjtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5aTElCLmNyYzMyID0gZnVuY3Rpb24oY3JjLCBidWYsIG9mZnNldCwgbGVuKVxyXG57XHJcblx0aWYodHlwZW9mIGJ1ZiA9PT0gJ3N0cmluZycpIHtcclxuXHRcdHJldHVybiBjcmMzMl9zdHJpbmcoY3JjLCBidWYsIG9mZnNldCwgbGVuKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIGNyYzMyX2FycmF5KGNyYywgYnVmLCBvZmZzZXQsIGxlbik7XHJcblx0fVxyXG59O1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG52YXIgR0YyX0RJTSA9IDMyOyAvKiBkaW1lbnNpb24gb2YgR0YoMikgdmVjdG9ycyAobGVuZ3RoIG9mIENSQykgKi9cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuZnVuY3Rpb24gZ2YyX21hdHJpeF90aW1lcyhtYXQsIHZlYylcclxue1xyXG4gICAgdmFyIHN1bTtcclxuXHR2YXIgbWF0X2kgPSAwO1xyXG5cclxuICAgIHN1bSA9IDA7XHJcbiAgICB3aGlsZSAodmVjKSB7XHJcbiAgICAgICAgaWYgKHZlYyAmIDEpXHJcbiAgICAgICAgICAgIHN1bSBePSBtYXRbbWF0X2ldO1xyXG4gICAgICAgIHZlYyA+Pj0gMTtcclxuICAgICAgICBtYXRfaSsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1bTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5mdW5jdGlvbiBnZjJfbWF0cml4X3NxdWFyZShzcXVhcmUsIG1hdClcclxue1xyXG4gICAgdmFyIG47XHJcblxyXG4gICAgZm9yIChuID0gMDsgbiA8IEdGMl9ESU07IG4rKylcclxuICAgICAgICBzcXVhcmVbbl0gPSBnZjJfbWF0cml4X3RpbWVzKG1hdCwgbWF0W25dKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5aTElCLmNyYzMyX2NvbWJpbmUgPSBmdW5jdGlvbihjcmMxLCBjcmMyLCBsZW4yKVxyXG57XHJcbiAgICB2YXIgbjtcclxuICAgIHZhciByb3c7XHJcbiAgICB2YXIgZXZlbjsgICAgLyogZXZlbi1wb3dlci1vZi10d28gemVyb3Mgb3BlcmF0b3IgKi9cclxuICAgIHZhciBvZGQ7ICAgICAvKiBvZGQtcG93ZXItb2YtdHdvIHplcm9zIG9wZXJhdG9yICovXHJcblxyXG4gICAgLyogZGVnZW5lcmF0ZSBjYXNlIChhbHNvIGRpc2FsbG93IG5lZ2F0aXZlIGxlbmd0aHMpICovXHJcbiAgICBpZiAobGVuMiA8PSAwKVxyXG4gICAgICAgIHJldHVybiBjcmMxO1xyXG5cclxuICAgIGV2ZW4gPSBuZXcgQXJyYXkoR0YyX0RJTSk7XHJcbiAgICBvZGQgPSBuZXcgQXJyYXkoR0YyX0RJTSk7XHJcblxyXG4gICAgLyogcHV0IG9wZXJhdG9yIGZvciBvbmUgemVybyBiaXQgaW4gb2RkICovXHJcbiAgICBvZGRbMF0gPSAweGVkYjg4MzIwOyAgICAgICAgICAvKiBDUkMtMzIgcG9seW5vbWlhbCAqL1xyXG4gICAgcm93ID0gMTtcclxuICAgIGZvciAobiA9IDE7IG4gPCBHRjJfRElNOyBuKyspIHtcclxuICAgICAgICBvZGRbbl0gPSByb3c7XHJcbiAgICAgICAgcm93IDw8PSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHB1dCBvcGVyYXRvciBmb3IgdHdvIHplcm8gYml0cyBpbiBldmVuICovXHJcbiAgICBnZjJfbWF0cml4X3NxdWFyZShldmVuLCBvZGQpO1xyXG5cclxuICAgIC8qIHB1dCBvcGVyYXRvciBmb3IgZm91ciB6ZXJvIGJpdHMgaW4gb2RkICovXHJcbiAgICBnZjJfbWF0cml4X3NxdWFyZShvZGQsIGV2ZW4pO1xyXG5cclxuICAgIC8qIGFwcGx5IGxlbjIgemVyb3MgdG8gY3JjMSAoZmlyc3Qgc3F1YXJlIHdpbGwgcHV0IHRoZSBvcGVyYXRvciBmb3Igb25lXHJcbiAgICAgICB6ZXJvIGJ5dGUsIGVpZ2h0IHplcm8gYml0cywgaW4gZXZlbikgKi9cclxuICAgIGRvIHtcclxuICAgICAgICAvKiBhcHBseSB6ZXJvcyBvcGVyYXRvciBmb3IgdGhpcyBiaXQgb2YgbGVuMiAqL1xyXG4gICAgICAgIGdmMl9tYXRyaXhfc3F1YXJlKGV2ZW4sIG9kZCk7XHJcbiAgICAgICAgaWYgKGxlbjIgJiAxKVxyXG4gICAgICAgICAgICBjcmMxID0gZ2YyX21hdHJpeF90aW1lcyhldmVuLCBjcmMxKTtcclxuICAgICAgICBsZW4yID4+PSAxO1xyXG5cclxuICAgICAgICAvKiBpZiBubyBtb3JlIGJpdHMgc2V0LCB0aGVuIGRvbmUgKi9cclxuICAgICAgICBpZiAobGVuMiA9PSAwKVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLyogYW5vdGhlciBpdGVyYXRpb24gb2YgdGhlIGxvb3Agd2l0aCBvZGQgYW5kIGV2ZW4gc3dhcHBlZCAqL1xyXG4gICAgICAgIGdmMl9tYXRyaXhfc3F1YXJlKG9kZCwgZXZlbik7XHJcbiAgICAgICAgaWYgKGxlbjIgJiAxKVxyXG4gICAgICAgICAgICBjcmMxID0gZ2YyX21hdHJpeF90aW1lcyhvZGQsIGNyYzEpO1xyXG4gICAgICAgIGxlbjIgPj49IDE7XHJcblxyXG4gICAgICAgIC8qIGlmIG5vIG1vcmUgYml0cyBzZXQsIHRoZW4gZG9uZSAqL1xyXG4gICAgfSB3aGlsZSAobGVuMiAhPSAwKTtcclxuXHJcbiAgICAvKiByZXR1cm4gY29tYmluZWQgY3JjICovXHJcbiAgICBjcmMxIF49IGNyYzI7XHJcbiAgICByZXR1cm4gY3JjMTtcclxufTtcclxuXHJcbn0oKSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFpMSUIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgSURhdGFQcm9jZXNzb3IsIElLdm1EYXRhQ29tbXVuaWNhdG9yLCBJTG9nZ2VyLCBMb2dMZXZlbCwgRGF0YVByb2Nlc3NvciwgRGVza3RvcCwgQU1US3ZtRGF0YVJlZGlyZWN0b3IsIEFNVERlc2t0b3AsIFByb3RvY29sLCBDb25zb2xlTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vY29yZSdcclxuaW1wb3J0IHsgTW91c2VIZWxwZXIsIEtleUJvYXJkSGVscGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9VdGlsaXRpZXMnXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJ1xyXG5pbXBvcnQgeyBQdXJlQ2FudmFzIH0gZnJvbSAnLi9QdXJlQ2FudmFzJ1xyXG5pbXBvcnQgeyBpc0ZhbHN5IH0gZnJvbSAnLi4vc2hhcmVkL1V0aWxpdGllcydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0ICcuL1VJLnNjc3MnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtWTVByb3BzIHtcclxuICBkZXZpY2VJZDogc3RyaW5nIHwgbnVsbFxyXG4gIG1wc1NlcnZlcjogc3RyaW5nIHwgbnVsbFxyXG4gIG1vdXNlRGVib3VuY2VUaW1lOiBudW1iZXJcclxuICBjYW52YXNIZWlnaHQ6IHN0cmluZ1xyXG4gIGNhbnZhc1dpZHRoOiBzdHJpbmdcclxuICBhdXRvQ29ubmVjdD86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtWTSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxLVk1Qcm9wcywgeyBrdm1zdGF0ZTogbnVtYmVyLCBlbmNvZGluZ09wdGlvbjogbnVtYmVyIH0+IHtcclxuICBtb2R1bGU6IERlc2t0b3AgfCBhbnlcclxuICBkYXRhUHJvY2Vzc29yOiBJRGF0YVByb2Nlc3NvciB8IGFueVxyXG4gIHJlZGlyZWN0b3I6IElLdm1EYXRhQ29tbXVuaWNhdG9yIHwgYW55XHJcbiAgbW91c2VIZWxwZXI6IE1vdXNlSGVscGVyIHwgYW55XHJcbiAgbG9nZ2VyOiBJTG9nZ2VyXHJcbiAga2V5Ym9hcmQ6IEtleUJvYXJkSGVscGVyIHwgYW55XHJcbiAgZGVza3RvcFNldHRpbmdzQ2hhbmdlID0gZmFsc2VcclxuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxyXG4gIGZyOiBGaWxlUmVhZGVyXHJcbiAgY29uc3RydWN0b3IgKHByb3BzOiBLVk1Qcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0geyBrdm1zdGF0ZTogMCwgZW5jb2RpbmdPcHRpb246IDEgfVxyXG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgQ29uc29sZUxvZ2dlcihMb2dMZXZlbC5FUlJPUilcclxuICAgIHRoaXMuc2F2ZUNvbnRleHQgPSB0aGlzLnNhdmVDb250ZXh0LmJpbmQodGhpcylcclxuICAgIHRoaXMuc3RhcnRLVk0gPSB0aGlzLnN0YXJ0S1ZNLmJpbmQodGhpcylcclxuICAgIHRoaXMuc3RvcEtWTSA9IHRoaXMuc3RvcEtWTS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUNvbm5lY3RDbGljayA9IHRoaXMuaGFuZGxlQ29ubmVjdENsaWNrLmJpbmQodGhpcylcclxuICAgIHRoaXMuZ2V0UmVuZGVyU3RhdHVzID0gdGhpcy5nZXRSZW5kZXJTdGF0dXMuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5PbkNvbm5lY3Rpb25TdGF0ZUNoYW5nZSA9IHRoaXMuT25Db25uZWN0aW9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5jaGFuZ2VEZXNrdG9wU2V0dGluZ3MgPSB0aGlzLmNoYW5nZURlc2t0b3BTZXR0aW5ncy5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBzYXZlQ29udGV4dCAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdzYXZlIGNvbnRleHQgY2FsbGVkJylcclxuICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICB0aGlzLmluaXQoKVxyXG4gIH1cclxuXHJcbiAgaW5pdCAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBkZXZpY2VVdWlkOiBzdHJpbmcgPSB0aGlzLnByb3BzLmRldmljZUlkICE9IG51bGwgPyB0aGlzLnByb3BzLmRldmljZUlkIDogJydcclxuICAgIGNvbnN0IHNlcnZlcjogc3RyaW5nID0gdGhpcy5wcm9wcy5tcHNTZXJ2ZXIgIT0gbnVsbCA/IHRoaXMucHJvcHMubXBzU2VydmVyLnJlcGxhY2UoJ2h0dHAnLCAnd3MnKSA6ICcnXHJcbiAgICB0aGlzLm1vZHVsZSA9IG5ldyBBTVREZXNrdG9wKHRoaXMubG9nZ2VyLCB0aGlzLmN0eClcclxuICAgIHRoaXMucmVkaXJlY3RvciA9IG5ldyBBTVRLdm1EYXRhUmVkaXJlY3Rvcih0aGlzLmxvZ2dlciwgUHJvdG9jb2wuS1ZNLCBuZXcgRmlsZVJlYWRlcigpLCBkZXZpY2VVdWlkLCAxNjk5NCwgJycsICcnLCAwLCAwLCBzZXJ2ZXIpXHJcbiAgICB0aGlzLmRhdGFQcm9jZXNzb3IgPSBuZXcgRGF0YVByb2Nlc3Nvcih0aGlzLmxvZ2dlciwgdGhpcy5yZWRpcmVjdG9yLCB0aGlzLm1vZHVsZSlcclxuICAgIHRoaXMubW91c2VIZWxwZXIgPSBuZXcgTW91c2VIZWxwZXIodGhpcy5tb2R1bGUsIHRoaXMucmVkaXJlY3RvciwgdGhpcy5wcm9wcy5tb3VzZURlYm91bmNlVGltZSA8IDIwMCA/IDIwMCA6IHRoaXMucHJvcHMubW91c2VEZWJvdW5jZVRpbWUpIC8vIGFueXRoaW5nIGxlc3MgdGhhbiAyMDAgbXMgY2F1c2VzIHRpbWVvdXRcclxuICAgIHRoaXMua2V5Ym9hcmQgPSBuZXcgS2V5Qm9hcmRIZWxwZXIodGhpcy5tb2R1bGUsIHRoaXMucmVkaXJlY3RvcilcclxuXHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25Qcm9jZXNzRGF0YSA9IHRoaXMubW9kdWxlLnByb2Nlc3NEYXRhLmJpbmQodGhpcy5tb2R1bGUpXHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25TdGFydCA9IHRoaXMubW9kdWxlLnN0YXJ0LmJpbmQodGhpcy5tb2R1bGUpXHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25OZXdTdGF0ZSA9IHRoaXMubW9kdWxlLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzLm1vZHVsZSlcclxuICAgIHRoaXMucmVkaXJlY3Rvci5vblNlbmRLdm1EYXRhID0gdGhpcy5tb2R1bGUub25TZW5kS3ZtRGF0YS5iaW5kKHRoaXMubW9kdWxlKVxyXG4gICAgdGhpcy5yZWRpcmVjdG9yLm9uU3RhdGVDaGFuZ2VkID0gdGhpcy5PbkNvbm5lY3Rpb25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25FcnJvciA9IHRoaXMub25SZWRpcmVjdG9yRXJyb3IuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5tb2R1bGUub25TZW5kID0gdGhpcy5yZWRpcmVjdG9yLnNlbmQuYmluZCh0aGlzLnJlZGlyZWN0b3IpXHJcbiAgICB0aGlzLm1vZHVsZS5vblByb2Nlc3NEYXRhID0gdGhpcy5kYXRhUHJvY2Vzc29yLnByb2Nlc3NEYXRhLmJpbmQodGhpcy5kYXRhUHJvY2Vzc29yKVxyXG4gICAgdGhpcy5tb2R1bGUuYnBwID0gdGhpcy5zdGF0ZS5lbmNvZGluZ09wdGlvblxyXG4gIH1cclxuXHJcbiAgY2xlYW5VcCAoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vZHVsZSA9IG51bGxcclxuICAgIHRoaXMucmVkaXJlY3RvciA9IG51bGxcclxuICAgIHRoaXMuZGF0YVByb2Nlc3NvciA9IG51bGxcclxuICAgIHRoaXMubW91c2VIZWxwZXIgPSBudWxsXHJcbiAgICB0aGlzLmtleWJvYXJkID0gbnVsbFxyXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQsIHRoaXMuY3R4LmNhbnZhcy53aWR0aClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcEtWTSgpXHJcbiAgfVxyXG5cclxuICBvblJlZGlyZWN0b3JFcnJvciAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0KClcclxuICB9XHJcblxyXG4gIHJlc2V0ICgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYW5VcCgpXHJcbiAgICB0aGlzLmluaXQoKVxyXG4gIH1cclxuXHJcbiAgT25Db25uZWN0aW9uU3RhdGVDaGFuZ2UgKHJlZGlyZWN0b3I6IGFueSwgc3RhdGU6IG51bWJlcik6IGFueSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsga3Ztc3RhdGU6IHN0YXRlIH0pXHJcbiAgICBpZiAodGhpcy5kZXNrdG9wU2V0dGluZ3NDaGFuZ2UgJiYgc3RhdGUgPT09IDApIHtcclxuICAgICAgdGhpcy5kZXNrdG9wU2V0dGluZ3NDaGFuZ2UgPSBmYWxzZVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3RhcnRLVk0oKSwgMjAwMCkgLy8gSW50cm9kdWNlZCBkZWxheSB0byBzdGFydCBLVk1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZURlc2t0b3BTZXR0aW5ncyAoc2V0dGluZ3M6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUua3Ztc3RhdGUgPT09IDIpIHtcclxuICAgICAgdGhpcy5kZXNrdG9wU2V0dGluZ3NDaGFuZ2UgPSB0cnVlXHJcbiAgICAgIHRoaXMubW9kdWxlLmJwcCA9IHNldHRpbmdzLmVuY29kaW5nXHJcbiAgICAgIHRoaXMuc3RvcEtWTSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBlbmNvZGluZ09wdGlvbjogcGFyc2VJbnQoc2V0dGluZ3MuZW5jb2RpbmcpXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMubW9kdWxlLmJwcCA9IHBhcnNlSW50KHNldHRpbmdzLmVuY29kaW5nKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnRLVk0gKCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0b3IgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnRLVk1cIilcclxuICAgICAgdGhpcy5yZWRpcmVjdG9yLnN0YXJ0KFdlYlNvY2tldClcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdGhpcy5rZXlib2FyZCAhPT0gJ3VuZGVmaW5lZCcpIHRoaXMua2V5Ym9hcmQuR3JhYktleUlucHV0KClcclxuICB9XHJcblxyXG4gIHN0b3BLVk0gKCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0b3IgIT09ICd1bmRlZmluZWQnKSB0aGlzLnJlZGlyZWN0b3Iuc3RvcCgpXHJcbiAgICBpZiAodHlwZW9mIHRoaXMua2V5Ym9hcmQgIT09ICd1bmRlZmluZWQnKSB0aGlzLmtleWJvYXJkLlVuR3JhYktleUlucHV0KClcclxuICAgIHRoaXMucmVzZXQoKVxyXG4gIH1cclxuXHJcbiAgZ2V0UmVuZGVyU3RhdHVzICgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kdWxlLnN0YXRlIC8vIHVzZWQgdG8gY2hlY2sgaWYgY2FudmFzIGlzIGluIHRoZSBtaWRkbGUgb2YgcmVuZGVyaW5nIGEgY29tcGxldGUgZnJhbWUuXHJcbiAgfVxyXG5cclxuICBoYW5kbGVDb25uZWN0Q2xpY2sgKGUpOiB2b2lkIHtcclxuICAgIGUucGVyc2lzdCgpXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5rdm1zdGF0ZSA9PT0gMCkge1xyXG4gICAgICB0aGlzLnN0YXJ0S1ZNKClcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5rdm1zdGF0ZSA9PT0gMSkge1xyXG4gICAgICAvLyBUYWtlIEFjdGlvblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmt2bXN0YXRlID09PSAyKSB7XHJcbiAgICAgIHRoaXMuc3RvcEtWTSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBUYWtlIEFjdGlvblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMpOiB2b2lkIHtcclxuICAgIGlmIChwcmV2UHJvcHMuZGV2aWNlSWQgIT09IHRoaXMucHJvcHMuZGV2aWNlSWQpIHtcclxuICAgICAgdGhpcy5zdG9wS1ZNKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbnZhcy1jb250YWluZXJcIj5cclxuICAgICAgICAgeyFpc0ZhbHN5KHRoaXMucHJvcHMuYXV0b0Nvbm5lY3QpXHJcbiAgICAgICAgICAgPyA8SGVhZGVyIGtleT1cImt2bV9oZWFkZXJcIiBoYW5kbGVDb25uZWN0Q2xpY2s9e3RoaXMuaGFuZGxlQ29ubmVjdENsaWNrfSBnZXRDb25uZWN0U3RhdGU9eygpID0+IHRoaXMuc3RhdGUua3Ztc3RhdGV9IGt2bXN0YXRlPXt0aGlzLnN0YXRlLmt2bXN0YXRlfSBjaGFuZ2VEZXNrdG9wU2V0dGluZ3M9e3RoaXMuY2hhbmdlRGVza3RvcFNldHRpbmdzfSBkZXZpY2VJZD17dGhpcy5wcm9wcy5kZXZpY2VJZH0gc2VydmVyPXt0aGlzLnByb3BzLm1wc1NlcnZlcn1cclxuICAgICAgICAgLz5cclxuICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICA8UHVyZUNhbnZhcyBrZXk9XCJrdm1fY29tcFwiIGNvbnRleHRSZWY9e2N0eCA9PiB0aGlzLnNhdmVDb250ZXh0KGN0eCl9IGNhbnZhc0hlaWdodD17dGhpcy5wcm9wcy5jYW52YXNIZWlnaHR9IGNhbnZhc1dpZHRoPXt0aGlzLnByb3BzLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgIG1vdXNlTW92ZT17ZXZlbnQgPT4geyBpZiAodHlwZW9mIHRoaXMubW91c2VIZWxwZXIgIT09ICd1bmRlZmluZWQnKSB0aGlzLm1vdXNlSGVscGVyLm1vdXNlbW92ZShldmVudCkgfX1cclxuICAgICAgICAgICBtb3VzZURvd249e2V2ZW50ID0+IHsgaWYgKHR5cGVvZiB0aGlzLm1vdXNlSGVscGVyICE9PSAndW5kZWZpbmVkJykgdGhpcy5tb3VzZUhlbHBlci5tb3VzZWRvd24oZXZlbnQpIH19XHJcbiAgICAgICAgICAgbW91c2VVcD17ZXZlbnQgPT4geyBpZiAodHlwZW9mIHRoaXMubW91c2VIZWxwZXIgIT09ICd1bmRlZmluZWQnKSB0aGlzLm1vdXNlSGVscGVyLm1vdXNldXAoZXZlbnQpIH19XHJcbiAgICAgICAgIC8+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=