(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ui-toolkit"] = factory();
	else
		root["ui-toolkit"] = factory();
})(self, function() {
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
/******/ 			// no module.id needed
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
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
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














})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91aS10b29sa2l0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vbm9kZV9tb2R1bGVzL2NoYXJlbmMvY2hhcmVuYy5qcyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vbm9kZV9tb2R1bGVzL2NyeXB0L2NyeXB0LmpzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9ub2RlX21vZHVsZXMvbWQ1L21kNS5qcyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvQU1URGVza3RvcC50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvQU1US3ZtRGF0YVJlZGlyZWN0b3IudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL0FNVFJlZGlyZWN0b3IudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL0FNVFRlcm1pbmFsLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9Db25zb2xlTG9nZ2VyLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9Db252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL0Rlc2t0b3AudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL0ltYWdlRGF0YS9EYXRhUHJvY2Vzc29yLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9JbWFnZURhdGEvUkxFRGVjb2Rlci50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvSW1hZ2VEYXRhL2luZGV4LnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9JbnRlcmZhY2VzL0lMb2dnZXIudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL0ludGVyZmFjZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1JGQlN0YXRlUHJvY2Vzc29ycy9FbmNvZGluZy50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvUkZCU3RhdGVQcm9jZXNzb3JzL0ZyYW1lQnVmZmVyQmVsbFNlcnZlckN1dFRleHQudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1JGQlN0YXRlUHJvY2Vzc29ycy9IYW5kc2hha2VTdGF0ZS50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvUkZCU3RhdGVQcm9jZXNzb3JzL1NlY3VyaXR5T3B0aW9ucy50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvUkZCU3RhdGVQcm9jZXNzb3JzL1NlY3VyaXR5UmVzcG9uc2UudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1JGQlN0YXRlUHJvY2Vzc29ycy9TZXJ2ZXJDdXRUZXh0SGFuZGxlci50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvUkZCU3RhdGVQcm9jZXNzb3JzL1NlcnZlckluaXQudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1JGQlN0YXRlUHJvY2Vzc29ycy9pbmRleC50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvU3RhdGVQcm9jZXNzb3JGYWN0b3J5LnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9UZXJtaW5hbERhdGFQcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1V0aWxpdGllcy9BTVRLZXlDb2RlQ29udmVydGVyLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9VdGlsaXRpZXMvQU1US2V5Q29kZVRhYmxlLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9VdGlsaXRpZXMvQ29tbXNIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1V0aWxpdGllcy9JbWFnZUhlbHBlci50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvVXRpbGl0aWVzL0tleWJvYXJkSGVscGVyLnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS9VdGlsaXRpZXMvTW91c2VIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL1V0aWxpdGllcy9VdGlsaXR5TWV0aG9kcy50cyIsIndlYnBhY2s6Ly91aS10b29sa2l0Ly4vc3JjL2NvcmUvVXRpbGl0aWVzL2luZGV4LnRzIiwid2VicGFjazovL3VpLXRvb2xraXQvLi9zcmMvY29yZS96bGliL3psaWIuanMiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91aS10b29sa2l0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VpLXRvb2xraXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VpLXRvb2xraXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91aS10b29sa2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdWktdG9vbGtpdC8uL3NyYy9jb3JlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7QUFD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QUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQO1FBRUQsd0JBQW1CLEdBQUc7WUFDcEIsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFD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LEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELE9BQU8sQ0FBRSxDQUFTLEVBQUUsQ0FBUztRQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsUUFBUSxDQUFFLENBQVMsRUFBRSxDQUFTO1FBQzVCLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxRQUFRLENBQUUsQ0FBUyxFQUFFLENBQVM7UUFDNUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQy9ELENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7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QUFDLElBQUksQ0FBQztTQUM1QztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBQywrQkFBK0I7SUFDOUQsQ0FBQztJQUVELEtBQUssQ0FBRSxNQUFlLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDMUMsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUM7UUFDbkMsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFBRSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUM7UUFDcEYsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFBRSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUM7UUFDcEYsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUM7UUFDbkMsT0FBTyxDQUFDO0lBQ1YsQ0FBQztJQUVELEtBQUssQ0FBRSxNQUFlLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDMUMsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUM7UUFDbkMsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUM7UUFDbkMsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFBRSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUM7UUFDckYsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFBRSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDcEYsT0FBTyxDQUFDO0lBQ1YsQ0FBQztJQUVELEtBQUssQ0FBRSxNQUFlLEVB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QUksTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FBRTtRQUUvSCx3REFBd0Q7UUFDeEQsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUk7WUFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzdFLE1BQU0sVUFBVSxHQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUN2RCxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDNUIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRTtRQUM3QixVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzFELElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDO1lBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDO1lBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDM0csSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3pJLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDO1lBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFFNUcsNkVBQTZFO1FBQzdFLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUU7U0FBRTtRQUMvSCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFO1NBQUU7UUFDL0gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDM0QsTUFBTSxDQUFDLFFBQVEsR0FBRyxXQUFXO1FBQzdCLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0s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QUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLFNBQVM7WUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLGVBQWU7WUFDekMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLGNBQWM7WUFDeEMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLGFBQWE7WUFDdkMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLE1BQU07WUFDaEMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLFNBQVM7WUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLFdBQVc7WUFDckMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLE1BQU07WUFDaEMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLE9BQU87WUFDakMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLE9BQU87WUFDakMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLEtBQUs7WUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLFFBQVE7WUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLE9BQU87WUFDakMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLFNBQVM7WUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxFQUFFLEdBQUcsTUFBTSxFQUFDLFNBQVM7WUFDbkMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHO2dCQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFDLGtCQUFrQjtZQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsUUFBUTtZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsUUFBUTtZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsUUFBUTtZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsUUFBUTtZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsUUFBUTtZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsSUFBSTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsSUFBSTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsSUFBSTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsSUFBSTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsSUFBSTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsSUFBSTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsSUFBSTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsSUFBSTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsSUFBSTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsS0FBSztZQUM1QixJQUFJLENBQUMsS0FB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QWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQzFKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CO0FBQ3pKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQ3pKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzNKLEtBQUssa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQ3ZKLEtBQUsscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzdKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQ3hKLEtBQUssbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzFKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQzFKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzNKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCO0FBQ3hKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQ3pKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQzNKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQ3pKLEtBQUssbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzFKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQ3pKLEtBQUssbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQ3pKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzNKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CO0FBQzFKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzFKLEtBQUssa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQ3ZKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzVKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQ3hKLEtBQUssbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzNKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQ3pKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzFKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQzFKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCO0FBQzFKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQzFKLEtBQUssb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQ3hKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzNKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzFKLEtBQUssbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQ3hKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CO0FBQzFKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQ3pKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzNKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQ3hKLEtBQUsscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQzVKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQ3hKLEtBQUssbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzFKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQ3pKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzNKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCO0FBQ3pKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQ3pKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQzNKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQ3pKLEtBQUssbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzVKLEtBQUssbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQ3hKLEtBQUssbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQ3pKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzNKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQ3hKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzNKLEtBQUssa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQ3ZKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzVKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQ3pKLEtBQUssbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzNKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQ3hKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzFKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCO0FBQ3pKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCO0FBQzFKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQzNKLEtBQUssb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQ3hKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzNKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzFKLEtBQUssbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQzFKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CO0FBQ3pKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQ3pKLEtBQUssb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzNKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQ3hKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzNKLEtBQUssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQ3hKLEtBQUssbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO0FBQzFKLEtBQUssb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CO0FBQzFKLEtBQUssb0JBQW9CO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSxLQUFLLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLHNCQUFzQjtBQUMxSSxLQUFLLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQjtBQUM1SSxLQUFLLG1CQUFtQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQjtBQUN4SSxLQUFLLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLHVCQUF1QjtBQUM3SSxLQUFLLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQjtBQUM1SSxLQUFLLHFCQUFxQixFQUFFLG1CQUFtQjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QixhQUFhO0FBQ2IsYUFBYTtBQUNiLFlBQVk7QUFDWixZQUFZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsYUFBYTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQscUI7Ozs7OztVQzNuRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDb0I7QUFDSjtBQUNkO0FBQ0k7QUFDSjtBQUNSO0FBQzRCO0FBQ0E7QUFDbkM7QUFDRDtBQUNTO0FBQ1QiLCJmaWxlIjoiY29yZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ1aS10b29sa2l0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInVpLXRvb2xraXRcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJ2YXIgY2hhcmVuYyA9IHtcbiAgLy8gVVRGLTggZW5jb2RpbmdcbiAgdXRmODoge1xuICAgIC8vIENvbnZlcnQgYSBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgc3RyaW5nVG9CeXRlczogZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gY2hhcmVuYy5iaW4uc3RyaW5nVG9CeXRlcyh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSkpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIHN0cmluZ1xuICAgIGJ5dGVzVG9TdHJpbmc6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShjaGFyZW5jLmJpbi5ieXRlc1RvU3RyaW5nKGJ5dGVzKSkpO1xuICAgIH1cbiAgfSxcblxuICAvLyBCaW5hcnkgZW5jb2RpbmdcbiAgYmluOiB7XG4gICAgLy8gQ29udmVydCBhIHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBzdHJpbmdUb0J5dGVzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKVxuICAgICAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRik7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgc3RyaW5nXG4gICAgYnl0ZXNUb1N0cmluZzogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIHN0ciA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICBzdHIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKSk7XG4gICAgICByZXR1cm4gc3RyLmpvaW4oJycpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjaGFyZW5jO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgYmFzZTY0bWFwXG4gICAgICA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJyxcblxuICBjcnlwdCA9IHtcbiAgICAvLyBCaXQtd2lzZSByb3RhdGlvbiBsZWZ0XG4gICAgcm90bDogZnVuY3Rpb24obiwgYikge1xuICAgICAgcmV0dXJuIChuIDw8IGIpIHwgKG4gPj4+ICgzMiAtIGIpKTtcbiAgICB9LFxuXG4gICAgLy8gQml0LXdpc2Ugcm90YXRpb24gcmlnaHRcbiAgICByb3RyOiBmdW5jdGlvbihuLCBiKSB7XG4gICAgICByZXR1cm4gKG4gPDwgKDMyIC0gYikpIHwgKG4gPj4+IGIpO1xuICAgIH0sXG5cbiAgICAvLyBTd2FwIGJpZy1lbmRpYW4gdG8gbGl0dGxlLWVuZGlhbiBhbmQgdmljZSB2ZXJzYVxuICAgIGVuZGlhbjogZnVuY3Rpb24obikge1xuICAgICAgLy8gSWYgbnVtYmVyIGdpdmVuLCBzd2FwIGVuZGlhblxuICAgICAgaWYgKG4uY29uc3RydWN0b3IgPT0gTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBjcnlwdC5yb3RsKG4sIDgpICYgMHgwMEZGMDBGRiB8IGNyeXB0LnJvdGwobiwgMjQpICYgMHhGRjAwRkYwMDtcbiAgICAgIH1cblxuICAgICAgLy8gRWxzZSwgYXNzdW1lIGFycmF5IGFuZCBzd2FwIGFsbCBpdGVtc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKVxuICAgICAgICBuW2ldID0gY3J5cHQuZW5kaWFuKG5baV0pO1xuICAgICAgcmV0dXJuIG47XG4gICAgfSxcblxuICAgIC8vIEdlbmVyYXRlIGFuIGFycmF5IG9mIGFueSBsZW5ndGggb2YgcmFuZG9tIGJ5dGVzXG4gICAgcmFuZG9tQnl0ZXM6IGZ1bmN0aW9uKG4pIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW107IG4gPiAwOyBuLS0pXG4gICAgICAgIGJ5dGVzLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSk7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGJpZy1lbmRpYW4gMzItYml0IHdvcmRzXG4gICAgYnl0ZXNUb1dvcmRzOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgd29yZHMgPSBbXSwgaSA9IDAsIGIgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyssIGIgKz0gOClcbiAgICAgICAgd29yZHNbYiA+Pj4gNV0gfD0gYnl0ZXNbaV0gPDwgKDI0IC0gYiAlIDMyKTtcbiAgICAgIHJldHVybiB3b3JkcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBiaWctZW5kaWFuIDMyLWJpdCB3b3JkcyB0byBhIGJ5dGUgYXJyYXlcbiAgICB3b3Jkc1RvQnl0ZXM6IGZ1bmN0aW9uKHdvcmRzKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBiID0gMDsgYiA8IHdvcmRzLmxlbmd0aCAqIDMyOyBiICs9IDgpXG4gICAgICAgIGJ5dGVzLnB1c2goKHdvcmRzW2IgPj4+IDVdID4+PiAoMjQgLSBiICUgMzIpKSAmIDB4RkYpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIGhleCBzdHJpbmdcbiAgICBieXRlc1RvSGV4OiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgaGV4ID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaGV4LnB1c2goKGJ5dGVzW2ldID4+PiA0KS50b1N0cmluZygxNikpO1xuICAgICAgICBoZXgucHVzaCgoYnl0ZXNbaV0gJiAweEYpLnRvU3RyaW5nKDE2KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGV4LmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgaGV4IHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBoZXhUb0J5dGVzOiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGMgPSAwOyBjIDwgaGV4Lmxlbmd0aDsgYyArPSAyKVxuICAgICAgICBieXRlcy5wdXNoKHBhcnNlSW50KGhleC5zdWJzdHIoYywgMiksIDE2KSk7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgYmFzZS02NCBzdHJpbmdcbiAgICBieXRlc1RvQmFzZTY0OiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgYmFzZTY0ID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgdmFyIHRyaXBsZXQgPSAoYnl0ZXNbaV0gPDwgMTYpIHwgKGJ5dGVzW2kgKyAxXSA8PCA4KSB8IGJ5dGVzW2kgKyAyXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspXG4gICAgICAgICAgaWYgKGkgKiA4ICsgaiAqIDYgPD0gYnl0ZXMubGVuZ3RoICogOClcbiAgICAgICAgICAgIGJhc2U2NC5wdXNoKGJhc2U2NG1hcC5jaGFyQXQoKHRyaXBsZXQgPj4+IDYgKiAoMyAtIGopKSAmIDB4M0YpKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBiYXNlNjQucHVzaCgnPScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJhc2U2NC5qb2luKCcnKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJhc2UtNjQgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIGJhc2U2NFRvQnl0ZXM6IGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgICAgLy8gUmVtb3ZlIG5vbi1iYXNlLTY0IGNoYXJhY3RlcnNcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5yZXBsYWNlKC9bXkEtWjAtOStcXC9dL2lnLCAnJyk7XG5cbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGkgPSAwLCBpbW9kNCA9IDA7IGkgPCBiYXNlNjQubGVuZ3RoO1xuICAgICAgICAgIGltb2Q0ID0gKytpICUgNCkge1xuICAgICAgICBpZiAoaW1vZDQgPT0gMCkgY29udGludWU7XG4gICAgICAgIGJ5dGVzLnB1c2goKChiYXNlNjRtYXAuaW5kZXhPZihiYXNlNjQuY2hhckF0KGkgLSAxKSlcbiAgICAgICAgICAgICYgKE1hdGgucG93KDIsIC0yICogaW1vZDQgKyA4KSAtIDEpKSA8PCAoaW1vZDQgKiAyKSlcbiAgICAgICAgICAgIHwgKGJhc2U2NG1hcC5pbmRleE9mKGJhc2U2NC5jaGFyQXQoaSkpID4+PiAoNiAtIGltb2Q0ICogMikpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBjcnlwdDtcbn0pKCk7XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsIihmdW5jdGlvbigpe1xyXG4gIHZhciBjcnlwdCA9IHJlcXVpcmUoJ2NyeXB0JyksXHJcbiAgICAgIHV0ZjggPSByZXF1aXJlKCdjaGFyZW5jJykudXRmOCxcclxuICAgICAgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKSxcclxuICAgICAgYmluID0gcmVxdWlyZSgnY2hhcmVuYycpLmJpbixcclxuXHJcbiAgLy8gVGhlIGNvcmVcclxuICBtZDUgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgLy8gQ29udmVydCB0byBieXRlIGFycmF5XHJcbiAgICBpZiAobWVzc2FnZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmcpXHJcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RpbmcgPT09ICdiaW5hcnknKVxyXG4gICAgICAgIG1lc3NhZ2UgPSBiaW4uc3RyaW5nVG9CeXRlcyhtZXNzYWdlKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIG1lc3NhZ2UgPSB1dGY4LnN0cmluZ1RvQnl0ZXMobWVzc2FnZSk7XHJcbiAgICBlbHNlIGlmIChpc0J1ZmZlcihtZXNzYWdlKSlcclxuICAgICAgbWVzc2FnZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG1lc3NhZ2UsIDApO1xyXG4gICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZSkgJiYgbWVzc2FnZS5jb25zdHJ1Y3RvciAhPT0gVWludDhBcnJheSlcclxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UudG9TdHJpbmcoKTtcclxuICAgIC8vIGVsc2UsIGFzc3VtZSBieXRlIGFycmF5IGFscmVhZHlcclxuXHJcbiAgICB2YXIgbSA9IGNyeXB0LmJ5dGVzVG9Xb3JkcyhtZXNzYWdlKSxcclxuICAgICAgICBsID0gbWVzc2FnZS5sZW5ndGggKiA4LFxyXG4gICAgICAgIGEgPSAgMTczMjU4NDE5MyxcclxuICAgICAgICBiID0gLTI3MTczMzg3OSxcclxuICAgICAgICBjID0gLTE3MzI1ODQxOTQsXHJcbiAgICAgICAgZCA9ICAyNzE3MzM4Nzg7XHJcblxyXG4gICAgLy8gU3dhcCBlbmRpYW5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtW2ldID0gKChtW2ldIDw8ICA4KSB8IChtW2ldID4+PiAyNCkpICYgMHgwMEZGMDBGRiB8XHJcbiAgICAgICAgICAgICAoKG1baV0gPDwgMjQpIHwgKG1baV0gPj4+ICA4KSkgJiAweEZGMDBGRjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhZGRpbmdcclxuICAgIG1bbCA+Pj4gNV0gfD0gMHg4MCA8PCAobCAlIDMyKTtcclxuICAgIG1bKCgobCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBsO1xyXG5cclxuICAgIC8vIE1ldGhvZCBzaG9ydGN1dHNcclxuICAgIHZhciBGRiA9IG1kNS5fZmYsXHJcbiAgICAgICAgR0cgPSBtZDUuX2dnLFxyXG4gICAgICAgIEhIID0gbWQ1Ll9oaCxcclxuICAgICAgICBJSSA9IG1kNS5faWk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmxlbmd0aDsgaSArPSAxNikge1xyXG5cclxuICAgICAgdmFyIGFhID0gYSxcclxuICAgICAgICAgIGJiID0gYixcclxuICAgICAgICAgIGNjID0gYyxcclxuICAgICAgICAgIGRkID0gZDtcclxuXHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDBdLCAgNywgLTY4MDg3NjkzNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDFdLCAxMiwgLTM4OTU2NDU4Nik7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krIDJdLCAxNywgIDYwNjEwNTgxOSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyA0XSwgIDcsIC0xNzY0MTg4OTcpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyA1XSwgMTIsICAxMjAwMDgwNDI2KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDddLCAyMiwgLTQ1NzA1OTgzKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgOF0sICA3LCAgMTc3MDAzNTQxNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTcsIC00MjA2Myk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKzEyXSwgIDcsICAxODA0NjAzNjgyKTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsxM10sIDEyLCAtNDAzNDExMDEpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsxNV0sIDIyLCAgMTIzNjUzNTMyOSk7XHJcblxyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyAxXSwgIDUsIC0xNjU3OTY1MTApO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyA2XSwgIDksIC0xMDY5NTAxNjMyKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsxMV0sIDE0LCAgNjQzNzE3NzEzKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgMF0sIDIwLCAtMzczODk3MzAyKTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgNV0sICA1LCAtNzAxNTU4NjkxKTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsxMF0sICA5LCAgMzgwMTYwODMpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKzE1XSwgMTQsIC02NjA0NzgzMzUpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyA5XSwgIDUsICA1Njg0NDY0MzgpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKzE0XSwgIDksIC0xMDE5ODAzNjkwKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsgM10sIDE0LCAtMTg3MzYzOTYxKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgOF0sIDIwLCAgMTE2MzUzMTUwMSk7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krMTNdLCAgNSwgLTE0NDQ2ODE0NjcpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyAyXSwgIDksIC01MTQwMzc4NCk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krIDddLCAxNCwgIDE3MzUzMjg0NzMpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKzEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcclxuXHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDVdLCAgNCwgLTM3ODU1OCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKzExXSwgMTYsICAxODM5MDMwNTYyKTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsxNF0sIDIzLCAtMzUzMDk1NTYpO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyAxXSwgIDQsIC0xNTMwOTkyMDYwKTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgNF0sIDExLCAgMTI3Mjg5MzM1Myk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krIDddLCAxNiwgLTE1NTQ5NzYzMik7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKzEzXSwgIDQsICA2ODEyNzkxNzQpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyAwXSwgMTEsIC0zNTg1MzcyMjIpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKyA2XSwgMjMsICA3NjAyOTE4OSk7XHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDldLCAgNCwgLTY0MDM2NDQ4Nyk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krMTJdLCAxMSwgLTQyMTgxNTgzNSk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krMTVdLCAxNiwgIDUzMDc0MjUyMCk7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krIDJdLCAyMywgLTk5NTMzODY1MSk7XHJcblxyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyAwXSwgIDYsIC0xOTg2MzA4NDQpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKyA3XSwgMTAsICAxMTI2ODkxNDE1KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDVdLCAyMSwgLTU3NDM0MDU1KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsxMl0sICA2LCAgMTcwMDQ4NTU3MSk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTUsIC0xMDUxNTIzKTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDhdLCAgNiwgIDE4NzMzMTMzNTkpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKzE1XSwgMTAsIC0zMDYxMTc0NCk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDZdLCAxNSwgLTE1NjAxOTgzODApO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKzEzXSwgMjEsICAxMzA5MTUxNjQ5KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgNF0sICA2LCAtMTQ1NTIzMDcwKTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDJdLCAxNSwgIDcxODc4NzI1OSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDldLCAyMSwgLTM0MzQ4NTU1MSk7XHJcblxyXG4gICAgICBhID0gKGEgKyBhYSkgPj4+IDA7XHJcbiAgICAgIGIgPSAoYiArIGJiKSA+Pj4gMDtcclxuICAgICAgYyA9IChjICsgY2MpID4+PiAwO1xyXG4gICAgICBkID0gKGQgKyBkZCkgPj4+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyeXB0LmVuZGlhbihbYSwgYiwgYywgZF0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEF1eGlsaWFyeSBmdW5jdGlvbnNcclxuICBtZDUuX2ZmICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGMgfCB+YiAmIGQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2dnICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGQgfCBjICYgfmQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2hoICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiBeIGMgXiBkKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9paSAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGMgXiAoYiB8IH5kKSkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG5cclxuICAvLyBQYWNrYWdlIHByaXZhdGUgYmxvY2tzaXplXHJcbiAgbWQ1Ll9ibG9ja3NpemUgPSAxNjtcclxuICBtZDUuX2RpZ2VzdHNpemUgPSAxNjtcclxuXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgaWYgKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCB8fCBtZXNzYWdlID09PSBudWxsKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYXJndW1lbnQgJyArIG1lc3NhZ2UpO1xyXG5cclxuICAgIHZhciBkaWdlc3RieXRlcyA9IGNyeXB0LndvcmRzVG9CeXRlcyhtZDUobWVzc2FnZSwgb3B0aW9ucykpO1xyXG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5hc0J5dGVzID8gZGlnZXN0Ynl0ZXMgOlxyXG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5hc1N0cmluZyA/IGJpbi5ieXRlc1RvU3RyaW5nKGRpZ2VzdGJ5dGVzKSA6XHJcbiAgICAgICAgY3J5cHQuYnl0ZXNUb0hleChkaWdlc3RieXRlcyk7XHJcbiAgfTtcclxuXHJcbn0pKCk7XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuaW1wb3J0IHsgRGVza3RvcCB9IGZyb20gJy4vRGVza3RvcCdcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gJy4vSW50ZXJmYWNlcydcclxuaW1wb3J0IHsgVHlwZUNvbnZlcnRlciB9IGZyb20gJy4uL2NvcmUvQ29udmVydGVyJ1xyXG5pbXBvcnQgeyBpc1RydXRoeSB9IGZyb20gJy4vVXRpbGl0aWVzL1V0aWxpdHlNZXRob2RzJ1xyXG5pbXBvcnQgIFpMSUIgZnJvbSAnLi4vY29yZS96bGliL3psaWInXHJcblxyXG4vKipcclxuICogQU1URGVza3RvcCByZXByZXNlbnRzIHRoZSBEZXNrdG9wIG9uIHRoZSBicm93c2VyLiBDb25zdHJ1Y3RlZCB1c2luZyB0aGUgY2FudmFzIGNvbnRleHQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQU1URGVza3RvcCBleHRlbmRzIERlc2t0b3Age1xyXG4gIHJvdGF0aW9uOiBudW1iZXJcclxuICB1c2VaUkxFOiBib29sZWFuXHJcbiAgb2xkTW91c2VYOiBudW1iZXJcclxuICBvbGRNb3VzZVk6IG51bWJlclxyXG4gIGxhc3RNb3VzZVg6IG51bWJlclxyXG4gIGxhc3RNb3VzZVk6IG51bWJlclxyXG4gIGJwcDogbnVtYmVyIC8vIEJ5dGVzIHBlciBwaXhlbFxyXG4gIGt2bURhdGFTdXBwb3J0ZWQ6IGJvb2xlYW5cclxuICBvbkt2bURhdGFBY2s6IGFueVxyXG4gIHVybHZhcnM6IGFueVxyXG4gIG9uS3ZtRGF0YVBlbmRpbmc6IGFueVtdXHJcbiAgc3BhcmV3OiBudW1iZXJcclxuICBzcGFyZWg6IG51bWJlclxyXG4gIHNwYXJldzI6IG51bWJlclxyXG4gIHNwYXJlaDI6IG51bWJlclxyXG4gIHNwYXJlOiBhbnlcclxuICBzcGFyZWNhY2hlOiBhbnlcclxuICBmcmFtZVJhdGVEZWxheTogbnVtYmVyXHJcbiAgaW5mbGF0ZTogYW55XHJcbiAgbG9nZ2VyOiBJTG9nZ2VyXHJcbiAgaG9sZGluZzogYm9vbGVhblxyXG4gIGNhbnZhc0N0eDogYW55XHJcbiAgdGNhbnZhczogYW55XHJcbiAgd2lkdGg6IG51bWJlclxyXG4gIGhlaWdodDogbnVtYmVyXHJcbiAgY2FudmFzSWQ6IHN0cmluZ1xyXG4gIGZvY3VzTW9kZTogbnVtYmVyXHJcbiAgcndpZHRoOiBudW1iZXJcclxuICByaGVpZ2h0OiBudW1iZXJcclxuICBTY3JlZW5XaWR0aDogbnVtYmVyXHJcbiAgU2NyZWVuSGVpZ2h0OiBudW1iZXJcclxuICBsYXN0S2VlcEFsaXZlOiBudW1iZXJcclxuICBidXR0b25tYXNrOiBudW1iZXJcclxuICBzdGF0ZTogbnVtYmVyXHJcbiAgY2FudmFzQ29udHJvbDogYW55XHJcbiAgc2Nyb2xsZGl2OiBhbnlcclxuICBsYXN0TW91c2VYMjogbnVtYmVyXHJcbiAgbm9Nb3VzZVJvdGF0ZTogYm9vbGVhblxyXG4gIHVwZGF0ZVNjcmVlbkRpbWVuc2lvbnM6ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4gdm9pZFxyXG4gIG9uS3ZtRGF0YTogKGRhdGE6IHN0cmluZykgPT4gdm9pZFxyXG4gIG9uU2NyZWVuUmVzaXplOiAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNhbnZhc0lkOiBzdHJpbmcpID0+IHZvaWRcclxuICBvblNjcmVlblNpemVDaGFuZ2U6ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4gdm9pZFxyXG4gIHNldERlc2tGb2N1czogKGVsOiBzdHJpbmcsIGZvY3VzbW9kZTogbnVtYmVyKSA9PiB2b2lkXHJcbiAgZ2V0RGVza0ZvY3VzOiAoZWw6IHN0cmluZykgPT4gYW55XHJcblxyXG4gIHByb3RvY29sOiBudW1iZXIgPSAyXHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdHMgdGhlIEFNVCBEZXNrdG9wXHJcbiAgICogQHBhcmFtIGxvZ2dlciBsb2dnZXIgdG8gdXNlIGZvciBpbnRlcm5hbCBsb2dnaW5nXHJcbiAgICogQHBhcmFtIGN0eCBDYW52YXMgQ29udGV4dCB0byBkcmF3IGltYWdlc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yIChsb2dnZXI6IElMb2dnZXIsIGN0eDogYW55KSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLmluZmxhdGUgPSBaTElCLmluZmxhdGVJbml0KDE1KVxyXG4gICAgdGhpcy5icHAgPSAxXHJcbiAgICB0aGlzLnN0YXRlID0gMFxyXG4gICAgdGhpcy5mb2N1c01vZGUgPSAwXHJcbiAgICB0aGlzLnVzZVpSTEUgPSB0cnVlXHJcbiAgICB0aGlzLmZyYW1lUmF0ZURlbGF5ID0gMlxyXG4gICAgdGhpcy5jYW52YXNDdHggPSBjdHhcclxuICAgIHRoaXMuc3BhcmVjYWNoZSA9IHt9XHJcbiAgICB0aGlzLmJ1dHRvbm1hc2sgPSAwXHJcbiAgICB0aGlzLmNhbnZhc0NvbnRyb2wgPSB0aGlzLmNhbnZhc0N0eC5jYW52YXNcclxuICAgIHRoaXMubGFzdE1vdXNlTW92ZVRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlclxyXG4gICAgdGhpcy5zZXREZXNrRm9jdXMgPSAoZWwsIG1vZGUpID0+IHtcclxuXHJcbiAgICB9XHJcbiAgICB0aGlzLmdldERlc2tGb2N1cyA9IChlbCkgPT4ge1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuXHJcbiAgICogQHBhcmFtIGRhdGEgZGF0YSB0byBmb3J3YXJkIHRvIERhdGFQcm9jZXNzb3JcclxuICAgKi9cclxuICBwcm9jZXNzRGF0YSAoZGF0YTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uUHJvY2Vzc0RhdGEoZGF0YSlcclxuICB9XHJcblxyXG4gIG9uU3RhdGVDaGFuZ2UgKHN0YXRlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoYHN0YXRlIGNoYW5nZSBpbiBBTVREZXNrdG9wOiAke3N0YXRlfWApXHJcbiAgICBpZiAoc3RhdGUgPT09IDApIHtcclxuICAgICAgLy8gQ2xlYXIgQ2FudmFzXHJcbiAgICAgIHRoaXMuY2FudmFzQ3R4LmZpbGxTdHlsZSA9ICcjRkZGRkZGJ1xyXG4gICAgICB0aGlzLmNhbnZhc0N0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhc0N0eC5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzQ3R4LmNhbnZhcy53aWR0aClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0ICgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoJ1N0YXJ0aW5nIGRlc2t0b3AgaGVyZScpXHJcbiAgICB0aGlzLnN0YXRlID0gMFxyXG4gICAgdGhpcy5pbmZsYXRlLmluZmxhdGVSZXNldCgpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmluZmxhdGUpXHJcbiAgICAvLyB0aGlzLlpSTEVmaXJzdCA9IDE7XHJcbiAgICAvLyBvYmouaW5ieXRlcyA9IDA7XHJcbiAgICAvLyBvYmoub3V0Ynl0ZXMgPSAwO1xyXG4gICAgdGhpcy5vbkt2bURhdGFQZW5kaW5nID0gW11cclxuICAgIHRoaXMub25Ldm1EYXRhQWNrID0gLTFcclxuICAgIHRoaXMua3ZtRGF0YVN1cHBvcnRlZCA9IGZhbHNlXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWR5bmFtaWMtZGVsZXRlXHJcbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5zcGFyZWNhY2hlKSB7IGRlbGV0ZSB0aGlzLnNwYXJlY2FjaGVbaV0gfVxyXG4gIH1cclxuXHJcbiAgb25TZW5kS3ZtRGF0YSAoZGF0YTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vbkt2bURhdGFBY2sgIT09IHRydWUpIHtcclxuICAgICAgdGhpcy5vbkt2bURhdGFQZW5kaW5nLnB1c2goZGF0YSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChpc1RydXRoeSh0aGlzLnVybHZhcnMpICYmIGlzVHJ1dGh5KHRoaXMudXJsdmFycy5rdm1kYXRhdHJhY2UpKSB7IGNvbnNvbGUubG9nKGBLVk0tU2VuZCAoJHtkYXRhLmxlbmd0aH0pIGRhdGFgKSB9XHJcbiAgICAgIGRhdGEgPSAnXFwwS3ZtRGF0YUNoYW5uZWxcXDAnICsgZGF0YVxyXG4gICAgICB0aGlzLm9uU2VuZChTdHJpbmcuZnJvbUNoYXJDb2RlKDYsIDAsIDAsIDApICsgVHlwZUNvbnZlcnRlci5JbnRUb1N0cihkYXRhLmxlbmd0aCkgKyBkYXRhKVxyXG4gICAgICB0aGlzLm9uS3ZtRGF0YUFjayA9IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNlbmQ6IChkYXRhOiBzdHJpbmcpID0+IHZvaWRcclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmltcG9ydCB7IEFNVFJlZGlyZWN0b3IgfSBmcm9tICcuL0FNVFJlZGlyZWN0b3InXHJcbmltcG9ydCB7IElMb2dnZXIsIElLdm1EYXRhQ29tbXVuaWNhdG9yIH0gZnJvbSAnLi9JbnRlcmZhY2VzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFNVEt2bURhdGFSZWRpcmVjdG9yIGV4dGVuZHMgQU1UUmVkaXJlY3RvciBpbXBsZW1lbnRzIElLdm1EYXRhQ29tbXVuaWNhdG9yIHtcclxuICBvblNlbmRLdm1EYXRhOiAoZGF0YTogc3RyaW5nKSA9PiB2b2lkXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2VsZXNzLWNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IgKGxvZ2dlcjogSUxvZ2dlciwgcHJvdG9jb2w6IG51bWJlciwgZnI6IEZpbGVSZWFkZXIsIGhvc3Q6IHN0cmluZywgcG9ydDogbnVtYmVyLCB1c2VyOiBzdHJpbmcsIHBhc3M6IHN0cmluZywgdGxzOiBudW1iZXIsIHRsczFvbmx5OiBudW1iZXIsIHNlcnZlcj86IHN0cmluZykge1xyXG4gICAgc3VwZXIobG9nZ2VyLCBwcm90b2NvbCwgZnIsIGhvc3QsIHBvcnQsIHVzZXIsIHBhc3MsIHRscywgdGxzMW9ubHksIHNlcnZlcilcclxuICB9XHJcbn1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5pbXBvcnQgeyBUeXBlQ29udmVydGVyIH0gZnJvbSAnLi9Db252ZXJ0ZXInXHJcbmltcG9ydCB7IElDb21tdW5pY2F0b3IsIElMb2dnZXIgfSBmcm9tICcuL0ludGVyZmFjZXMnXHJcbmltcG9ydCBtZDUgZnJvbSAnbWQ1J1xyXG5pbXBvcnQgeyBpc1RydXRoeSB9IGZyb20gJy4vVXRpbGl0aWVzL1V0aWxpdHlNZXRob2RzJ1xyXG4vKipcclxuICogUHJvdG9jb2wgZm9yIGRpZmZlcmVudCBSZWRpciBwcm90b2NvbHMuIFNPTD0xLEtWTT0yLElERVI9VVNCLVJcclxuICovXHJcbmV4cG9ydCBlbnVtIFByb3RvY29sIHtcclxuICBTT0wgPSAxLFxyXG4gIEtWTSA9IDIsXHJcbiAgSURFUiA9IDNcclxufVxyXG4vKipcclxuICogQU1UUmVkaXJlY3RvciBwcm92aWRlcyBhbGwgY29tbXVuaWNhdGlvbiBvdmVyIFdlYlNvY2tldHNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBTVRSZWRpcmVjdG9yIGltcGxlbWVudHMgSUNvbW11bmljYXRvciB7XHJcbiAgc3RhdGU6IG51bWJlclxyXG4gIHNvY2tldDogYW55XHJcbiAgaG9zdDogc3RyaW5nXHJcbiAgcG9ydDogbnVtYmVyXHJcbiAgdXNlcjogc3RyaW5nXHJcbiAgcGFzczogc3RyaW5nXHJcbiAgdGxzOiBudW1iZXJcclxuICBhdXRoVXJpOiBzdHJpbmdcclxuICB0bHN2MW9ubHk6IG51bWJlclxyXG4gIGNvbm5lY3RTdGF0ZTogbnVtYmVyXHJcbiAgcHJvdG9jb2w6IFByb3RvY29sXHJcbiAgYW10QWNjdW11bGF0b3I6IHN0cmluZ1xyXG4gIGFtdFNlcXVlbmNlOiBudW1iZXJcclxuICBhbXRLZWVwQWxpdmVUaW1lcjogYW55XHJcblxyXG4gIGZpbGVSZWFkZXI6IEZpbGVSZWFkZXJcclxuICBmaWxlUmVhZGVySW5Vc2U6IGJvb2xlYW5cclxuICBmaWxlUmVhZGVyQWNjOiBhbnlbXVxyXG4gIHJhbmRvbU5vbmNlQ2hhcnM6IHN0cmluZ1xyXG4gIFJlZGlyZWN0U3RhcnRTb2w6IHN0cmluZ1xyXG4gIFJlZGlyZWN0U3RhcnRLdm06IHN0cmluZ1xyXG4gIFJlZGlyZWN0U3RhcnRJZGVyOiBzdHJpbmdcclxuICB1cmx2YXJzOiBhbnlcclxuICBpbkRhdGFDb3VudDogbnVtYmVyXHJcbiAgc2VydmVyOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuICBsb2dnZXI6IElMb2dnZXJcclxuICBvblByb2Nlc3NEYXRhOiAoZGF0YTogc3RyaW5nKSA9PiB2b2lkXHJcbiAgb25TdGFydDogKCkgPT4gdm9pZFxyXG4gIG9uTmV3U3RhdGU6IChzdGF0ZTogbnVtYmVyKSA9PiB2b2lkXHJcbiAgb25TdGF0ZUNoYW5nZWQ6IChyZWRpcmVjdG9yOiBhbnksIHN0YXRlOiBudW1iZXIpID0+IHZvaWRcclxuICBvbkVycm9yOiAoKSA9PiB2b2lkXHJcblxyXG4gIGNvbnN0cnVjdG9yIChsb2dnZXI6IElMb2dnZXIsIHByb3RvY29sOiBudW1iZXIsIGZyOiBGaWxlUmVhZGVyLCBob3N0OiBzdHJpbmcsIHBvcnQ6IG51bWJlciwgdXNlcjogc3RyaW5nLCBwYXNzOiBzdHJpbmcsIHRsczogbnVtYmVyLCB0bHMxb25seTogbnVtYmVyLCBzZXJ2ZXI/OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZmlsZVJlYWRlciA9IGZyXHJcbiAgICB0aGlzLnJhbmRvbU5vbmNlQ2hhcnMgPSAnYWJjZGVmMDEyMzQ1Njc4OSdcclxuICAgIHRoaXMuaG9zdCA9IGhvc3RcclxuICAgIHRoaXMucG9ydCA9IHBvcnRcclxuICAgIHRoaXMudXNlciA9IHVzZXJcclxuICAgIHRoaXMucGFzcyA9IHBhc3NcclxuICAgIHRoaXMudGxzID0gdGxzXHJcbiAgICB0aGlzLnRsc3Yxb25seSA9IHRsczFvbmx5XHJcbiAgICB0aGlzLnByb3RvY29sID0gcHJvdG9jb2xcclxuICAgIHRoaXMuUmVkaXJlY3RTdGFydFNvbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgxMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHg1MywgMHg0RiwgMHg0QywgMHgyMClcclxuICAgIHRoaXMuUmVkaXJlY3RTdGFydEt2bSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgxMCwgMHgwMSwgMHgwMCwgMHgwMCwgMHg0YiwgMHg1NiwgMHg0ZCwgMHg1MilcclxuICAgIHRoaXMuUmVkaXJlY3RTdGFydElkZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MTAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4NDksIDB4NDQsIDB4NDUsIDB4NTIpXHJcbiAgICB0aGlzLnVybHZhcnMgPSB7fVxyXG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXJcclxuICAgIHRoaXMuYW10QWNjdW11bGF0b3IgPSAnJ1xyXG4gICAgdGhpcy5hdXRoVXJpID0gJydcclxuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIFdlYlNvY2tldCBwYXRoIHRvIGNvbm5lY3QgdG8gdXNpbmcgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAgICogVXNlcyBob3N0KGRldmljZWlkKSwgcG9ydCwgdGxzLCB0bHN2MW9ubHksIHVzZXIsIHBhc3Mgb3B0aW9ucyB0byBidWlsZCB0aGUgdXJsLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0V3NMb2NhdGlvbiAoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmlzQnJvd3NlcigpICYmICFpc1RydXRoeSh0aGlzLnNlcnZlcikpIHtcclxuICAgICAgcmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbC5yZXBsYWNlKCdodHRwJywgJ3dzJyl9Ly9cclxuICAgICAgJHt3aW5kb3cubG9jYXRpb24uaG9zdH1cclxuICAgICAgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDAsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5sYXN0SW5kZXhPZignLycpKX1cclxuICAgICAgL3dlYnJlbGF5LmFzaHg/cD0yJmhvc3Q9JHt0aGlzLmhvc3R9JnBvcnQ9JHt0aGlzLnBvcnR9JnRscz0ke3RoaXMudGxzfSR7KCh0aGlzLnVzZXIgPT09ICcqJykgPyAnJnNlcnZlcmF1dGg9MScgOiAnJyl9JHsoKHR5cGVvZiB0aGlzLnBhc3MgPT09ICd1bmRlZmluZWQnKSA/ICgnJnNlcnZlcmF1dGg9MSZ1c2VyPScgKyB0aGlzLnVzZXIpIDogJycpfSZ0bHMxb25seT0ke3RoaXMudGxzdjFvbmx5fWBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBgJHtTdHJpbmcodGhpcy5zZXJ2ZXIpfS93ZWJyZWxheS5hc2h4P3A9MiZob3N0PSR7dGhpcy5ob3N0fSZwb3J0PSR7dGhpcy5wb3J0fSZ0bHM9JHt0aGlzLnRsc30keygodGhpcy51c2VyID09PSAnKicpID8gJyZzZXJ2ZXJhdXRoPTEnIDogJycpfSR7KCh0eXBlb2YgdGhpcy5wYXNzID09PSAndW5kZWZpbmVkJykgPyAoJyZzZXJ2ZXJhdXRoPTEmdXNlcj0nICsgdGhpcy51c2VyKSA6ICcnKX0mdGxzMW9ubHk9JHt0aGlzLnRsc3Yxb25seX1gXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBjdXJyZW50IGVudmlyb25tZW50IGlzIGJyb3dzZXIgb3IgdGVzdFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaXNCcm93c2VyICgpOiBib29sZWFuIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGlzV2ViID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICBpZiAoaXNXZWIpIHRoaXMubG9nZ2VyLmRlYnVnKCchISEhIUJST1dTRVIhISEhIScpXHJcbiAgICAgIHJldHVybiBpc1dlYlxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGdldHMgV3MgTG9jYXRpb24gYW5kIHN0YXJ0cyBhIHdlYnNvY2tldCBmb3IgbGlzdGVuaW5nXHJcbiAgICogQHBhcmFtIGMgaXMgYmFzZSB0eXBlIGZvciBXZWJTb2NrZXRcclxuICAgKi9cclxuICBzdGFydDxUPiAoYzogbmV3KHBhdGg6IHN0cmluZykgPT4gVCk6IGFueSB7IC8vIFVzaW5nIHRoaXMgZ2VuZXJpYyBzaWduYXR1cmUgYWxsb3dzIHVzIHRvIHBhc3MgdGhlIFdlYlNvY2tldCB0eXBlIGZyb20gdW5pdCB0ZXN0cyBvciBpbiBwcm9kdWNpb24gZnJvbSBhIHdlYiBicm93c2VyXHJcbiAgICB0aGlzLmNvbm5lY3RTdGF0ZSA9IDBcclxuICAgIC8vIGxldCB3cyA9IG5ldyBjKHRoaXMuZ2V0V3NMb2NhdGlvbigpKSAvLyB1c2luZyBjcmVhdGUgZnVuY3Rpb24gYyBpbnZva2VzIHRoZSBjb25zdHJ1Y3RvciBXZWJTb2NrZXQoKVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXBcclxuICAgIHRoaXMuc29ja2V0ID0gbmV3IGModGhpcy5nZXRXc0xvY2F0aW9uKCkpIC8vIFRoZSBcInA9MlwiIGluZGljYXRlcyB0byB0aGUgcmVsYXkgdGhhdCB0aGlzIGlzIGEgUkVESVJFQ1RJT04gc2Vzc2lvblxyXG4gICAgdGhpcy5zb2NrZXQub25vcGVuID0gdGhpcy5vblNvY2tldENvbm5lY3RlZC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gdGhpcy5vblNvY2tldENsb3NlZC5iaW5kKHRoaXMpXHJcbiAgICBjb25zdCBvbmxvYWQgPSAoZTogYW55KTogYW55ID0+IHtcclxuICAgICAgdGhpcy5vblNvY2tldERhdGEoZS50YXJnZXQucmVzdWx0KVxyXG4gICAgICBpZiAodGhpcy5maWxlUmVhZGVyQWNjLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVJlYWRlckluVXNlID0gZmFsc2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZpbGVSZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKG5ldyBCbG9iKFt0aGlzLmZpbGVSZWFkZXJBY2Muc2hpZnQoKV0pKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbmxvYWRlbmQgPSAoZTogYW55KTogYW55ID0+IHtcclxuICAgICAgdGhpcy5vblNvY2tldERhdGEoZS50YXJnZXQucmVzdWx0KVxyXG4gICAgICBpZiAodGhpcy5maWxlUmVhZGVyQWNjLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVJlYWRlckluVXNlID0gZmFsc2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodGhpcy5maWxlUmVhZGVyQWNjLnNoaWZ0KCkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc1RydXRoeSh0aGlzLmZpbGVSZWFkZXIpICYmIGlzVHJ1dGh5KHRoaXMuZmlsZVJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcpKSB7XHJcbiAgICAvLyBDaHJvbWUgJiBGaXJlZm94IChEcmFmdClcclxuICAgICAgdGhpcy5maWxlUmVhZGVyLm9ubG9hZCA9IG9ubG9hZC5iaW5kKHRoaXMpXHJcbiAgICB9IGVsc2UgaWYgKGlzVHJ1dGh5KHRoaXMuZmlsZVJlYWRlcikgJiYgaXNUcnV0aHkodGhpcy5maWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKSkge1xyXG4gICAgLy8gQ2hyb21lICYgRmlyZWZveCAoU3BlYylcclxuICAgICAgdGhpcy5maWxlUmVhZGVyLm9ubG9hZGVuZCA9IG9ubG9hZGVuZC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcbiAgICB0aGlzLmxvZ2dlci52ZXJib3NlKCdDb25uZWN0aW5nIHRvIHdlYnNvY2tldCcpXHJcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2UoMSlcclxuICB9XHJcblxyXG4gIG9uU29ja2V0Q29ubmVjdGVkICgpOiBhbnkge1xyXG4gICAgaWYgKGlzVHJ1dGh5KHRoaXMudXJsdmFycykgJiYgaXNUcnV0aHkodGhpcy51cmx2YXJzLnJlZGlydHJhY2UpKSBjb25zb2xlLmxvZygnUkVESVItQ09OTkVDVCcpXHJcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2UoMilcclxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoYENvbm5lY3RlZCB0byB3ZWJzb2NrZXQgc2VydmVyLiBXaXRoIHByb3RvY29sICR7dGhpcy5wcm90b2NvbH0gKDIgPSBLVk0pYClcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oYFN0YXJ0IFJlZGlyZWN0IFNlc3Npb24gZm9yIHByb3RvY29sLiAke3RoaXMucHJvdG9jb2x9YClcclxuICAgIGlmICh0aGlzLnByb3RvY29sID09PSBQcm90b2NvbC5TT0wpIHRoaXMuc29ja2V0U2VuZCh0aGlzLlJlZGlyZWN0U3RhcnRTb2wpIC8vIFRPRE86IFB1dCB0aGVzZSBzdHJpbmdzIGluIGhpZ2hlciBsZXZlbCBtb2R1bGUgdG8gdGlnaHRlbiBjb2RlXHJcbiAgICBpZiAodGhpcy5wcm90b2NvbCA9PT0gUHJvdG9jb2wuS1ZNKSB0aGlzLnNvY2tldFNlbmQodGhpcy5SZWRpcmVjdFN0YXJ0S3ZtKSAvLyBEb24ndCBuZWVkIHRoZXNlIGlzIHRoZSBmZWF0dXJlIGlzIG5vdCBjb21waWxlZC1pbi5cclxuICAgIGlmICh0aGlzLnByb3RvY29sID09PSBQcm90b2NvbC5JREVSKSB0aGlzLnNvY2tldFNlbmQodGhpcy5SZWRpcmVjdFN0YXJ0SWRlcilcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIHRoZXJlIGlzIG5ldyBkYXRhIG9uIHRoZSB3ZWJzb2NrZXRcclxuICAgKiBAcGFyYW0gZSBkYXRhIHJlY2VpdmVkIG92ZXIgdGhlIHdlYnNvY2tldFxyXG4gICAqL1xyXG4gIG9uTWVzc2FnZSAoZTogYW55KTogYW55IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGF0YSlcclxuICAgICAgdGhpcy5pbkRhdGFDb3VudCsrXHJcbiAgICAgIGlmICh0eXBlb2YgZS5kYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbGVSZWFkZXJJblVzZSkge1xyXG4gICAgICAgICAgdGhpcy5maWxlUmVhZGVyQWNjLnB1c2goZS5kYXRhKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZpbGVSZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nICE9IG51bGwpIHtcclxuICAgICAgICAgIC8vIENocm9tZSAmIEZpcmVmb3ggKERyYWZ0KVxyXG4gICAgICAgICAgdGhpcy5maWxlUmVhZGVySW5Vc2UgPSB0cnVlXHJcbiAgICAgICAgICB0aGlzLmZpbGVSZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKG5ldyBCbG9iKFtlLmRhdGFdKSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAvLyBDaHJvbWUgJiBGaXJlZm94IChTcGVjKVxyXG4gICAgICAgICAgdGhpcy5maWxlUmVhZGVySW5Vc2UgPSB0cnVlXHJcbiAgICAgICAgICB0aGlzLmZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZS5kYXRhKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBJRTEwLCByZWFkQXNCaW5hcnlTdHJpbmcgZG9lcyBub3QgZXhpc3QsIHVzZSBhbiBhbHRlcm5hdGl2ZS5cclxuICAgICAgICAgIGxldCBiaW5hcnkgPSAnJzsgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShlLmRhdGEpOyBjb25zdCBsZW5ndGggPSBieXRlcy5ieXRlTGVuZ3RoXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7IGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKSB9XHJcbiAgICAgICAgICB0aGlzLm9uU29ja2V0RGF0YShiaW5hcnkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIElmIHdlIGdldCBhIHN0cmluZyBvYmplY3QsIGl0IG1heWJlIHRoZSBXZWJSVEMgY29uZmlybS4gSWdub3JlIGl0LlxyXG4gICAgICAgIC8vIHRoaXMuZGVidWcoXCJNZXNoRGF0YUNoYW5uZWwgLSBPbkRhdGEgLSBcIiArIHR5cGVvZiBlLmRhdGEgKyBcIiAtIFwiICsgZS5kYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5vblNvY2tldERhdGEoZS5kYXRhKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcilcclxuICAgICAgdGhpcy5zdG9wKClcclxuICAgICAgdGhpcy5vbkVycm9yKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCBmcm9tIG9uTWVzc2FnZVxyXG4gICAqIEBwYXJhbSBkYXRhIGRhdGEgb3ZlciB0aGUgd2lyZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgb25Tb2NrZXREYXRhIChkYXRhOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYgKCFpc1RydXRoeShkYXRhKSB8fCB0aGlzLmNvbm5lY3RTdGF0ZSA9PT0gLTEpIHJldHVyblxyXG5cclxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgLy8gVGhpcyBpcyBhbiBBcnJheUJ1ZmZlciwgY29udmVydCBpdCB0byBhIHN0cmluZyBhcnJheSAodXNlZCBpbiBJRSlcclxuICAgICAgbGV0IGJpbmFyeSA9ICcnXHJcbiAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSlcclxuICAgICAgY29uc3QgbGVuZ3RoID0gYnl0ZXMuYnl0ZUxlbmd0aFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7IGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKSB9XHJcbiAgICAgIGRhdGEgPSBiaW5hcnlcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSB7IHJldHVybiB9XHJcblxyXG4gICAgaWYgKCh0aGlzLnByb3RvY29sID09PSBQcm90b2NvbC5LVk0gfHwgdGhpcy5wcm90b2NvbCA9PT0gUHJvdG9jb2wuSURFUikgJiYgdGhpcy5jb25uZWN0U3RhdGUgPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub25Qcm9jZXNzRGF0YShkYXRhKVxyXG4gICAgfSAvLyBLVk0gdHJhZmZpYywgZm9yd2FyZCBpdCBkaXJlY3RseS5cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnYmVmb3JlOiAnLCB0aGlzLmFtdEFjY3VtdWxhdG9yKVxyXG4gICAgdGhpcy5hbXRBY2N1bXVsYXRvciArPSBkYXRhXHJcbiAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXI6ICcsIHRoaXMuYW10QWNjdW11bGF0b3IpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlJFRElSLVJFQ1YoXCIgKyB0aGlzLmFtdEFjY3VtdWxhdG9yLmxlbmd0aCArIFwiKTogXCIgKyBUeXBlQ29udmVydGVyLnJzdHIyaGV4KHRoaXMuYW10QWNjdW11bGF0b3IpKTtcclxuICAgIHdoaWxlICh0aGlzLmFtdEFjY3VtdWxhdG9yLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgIGxldCBjbWRzaXplID0gMFxyXG4gICAgICBzd2l0Y2ggKHRoaXMuYW10QWNjdW11bGF0b3IuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgIGNhc2UgMHgxMTogeyAvLyBTdGFydFJlZGlyZWN0aW9uU2Vzc2lvblJlcGx5ICgxNylcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoYFN0YXJ0IFJlZGlyZWN0aW9uIFNlc3Npb24gcmVwbHkgcmVjZWl2ZWQgZm9yICAke3RoaXMucHJvdG9jb2x9YClcclxuICAgICAgICAgIGlmICh0aGlzLmFtdEFjY3VtdWxhdG9yLmxlbmd0aCA8IDQpIHJldHVyblxyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzY29kZSA9IHRoaXMuYW10QWNjdW11bGF0b3IuY2hhckNvZGVBdCgxKVxyXG4gICAgICAgICAgc3dpdGNoIChzdGF0dXNjb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogeyAvLyBTVEFUVVNfU1VDQ0VTU1xyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoJ1Nlc3Npb24gc3RhdHVzIHN1Y2Nlc3MuIFN0YXJ0IGhhbmRzaGFrZScpXHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYW10QWNjdW11bGF0b3IubGVuZ3RoIDwgMTMpIHJldHVyblxyXG4gICAgICAgICAgICAgIGNvbnN0IG9lbWxlbiA9IHRoaXMuYW10QWNjdW11bGF0b3IuY2hhckNvZGVBdCgxMilcclxuICAgICAgICAgICAgICBpZiAodGhpcy5hbXRBY2N1bXVsYXRvci5sZW5ndGggPCAxMyArIG9lbWxlbikgcmV0dXJuXHJcblxyXG4gICAgICAgICAgICAgIC8vIFF1ZXJ5IGZvciBhdmFpbGFibGUgYXV0aGVudGljYXRpb25cclxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKCdRdWVyeSBmb3IgYXZhaWxhYmxlIGF1dGhlbnRpY2F0aW9uJylcclxuICAgICAgICAgICAgICB0aGlzLnNvY2tldFNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgweDEzLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwKSkgLy8gUXVlcnkgYXV0aGVudGljYXRpb24gc3VwcG9ydFxyXG4gICAgICAgICAgICAgIGNtZHNpemUgPSAoMTMgKyBvZW1sZW4pXHJcbiAgICAgICAgICAgICAgYnJlYWsgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIHRoaXMuc3RvcCgpXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrIH1cclxuICAgICAgICBjYXNlIDB4MTQ6IHsgLy8gQXV0aGVudGljYXRlU2Vzc2lvblJlcGx5ICgyMClcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoJ0F2YWlsYWJsZSBBdXRoZW50aWNhdGlvbnMgcmVwbHkgcmVjZWl2ZWQuJylcclxuICAgICAgICAgIGlmICh0aGlzLmFtdEFjY3VtdWxhdG9yLmxlbmd0aCA8IDkpIHJldHVyblxyXG4gICAgICAgICAgY29uc3QgYXV0aERhdGFMZW4gPSBUeXBlQ29udmVydGVyLlJlYWRJbnRYKHRoaXMuYW10QWNjdW11bGF0b3IsIDUpXHJcbiAgICAgICAgICBpZiAodGhpcy5hbXRBY2N1bXVsYXRvci5sZW5ndGggPCA5ICsgYXV0aERhdGFMZW4pIHJldHVyblxyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gdGhpcy5hbXRBY2N1bXVsYXRvci5jaGFyQ29kZUF0KDEpXHJcbiAgICAgICAgICBjb25zdCBhdXRoVHlwZSA9IHRoaXMuYW10QWNjdW11bGF0b3IuY2hhckNvZGVBdCg0KVxyXG4gICAgICAgICAgY29uc3QgYXV0aERhdGE6IGFueSA9IFtdXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF1dGhEYXRhTGVuOyBpKyspIHsgYXV0aERhdGEucHVzaCh0aGlzLmFtdEFjY3VtdWxhdG9yLmNoYXJDb2RlQXQoOSArIGkpKSB9XHJcbiAgICAgICAgICBjb25zdCBhdXRoRGF0YUJ1ZiA9IHRoaXMuYW10QWNjdW11bGF0b3Iuc3Vic3RyaW5nKDksIDkgKyBhdXRoRGF0YUxlbilcclxuICAgICAgICAgIGNtZHNpemUgPSA5ICsgYXV0aERhdGFMZW5cclxuXHJcbiAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gUXVlcnlcclxuICAgICAgICAgICAgaWYgKGlzVHJ1dGh5KGF1dGhEYXRhLmluY2x1ZGVzKDQpKSkge1xyXG4gICAgICAgICAgICAgIC8vIEdvb2QgRGlnZXN0IEF1dGggKFdpdGggY25vbmNlIGFuZCBhbGwpXHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZSgnR29vZCBEaWdlc3QgQXV0aCAoV2l0aCBjbm9uY2UgYW5kIGFsbCknKVxyXG4gICAgICAgICAgICAgIHRoaXMuc29ja2V0U2VuZChTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MTMsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDQpICsgVHlwZUNvbnZlcnRlci5JbnRUb1N0clgodGhpcy51c2VyLmxlbmd0aCArIHRoaXMuYXV0aFVyaS5sZW5ndGggKyA4KSArIFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy51c2VyLmxlbmd0aCkgKyB0aGlzLnVzZXIgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MDAsIDB4MDApICsgU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmF1dGhVcmkubGVuZ3RoKSArIHRoaXMuYXV0aFVyaSArIFN0cmluZy5mcm9tQ2hhckNvZGUoMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNUcnV0aHkoYXV0aERhdGEuaW5jbHVkZXMoMykpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybignQmFkIERpZ2VzdCBBdXRoJylcclxuICAgICAgICAgICAgICAvLyBCYWQgRGlnZXN0IEF1dGggKE5vdCBzdXJlIHdoeSB0aGlzIGlzIHN1cHBvcnRlZCwgY25vbmNlIGlzIG5vdCB1c2VkISlcclxuICAgICAgICAgICAgICB0aGlzLnNvY2tldFNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgweDEzLCAweDAwLCAweDAwLCAweDAwLCAweDAzKSArIFR5cGVDb252ZXJ0ZXIuSW50VG9TdHJYKHRoaXMudXNlci5sZW5ndGggKyB0aGlzLmF1dGhVcmkubGVuZ3RoICsgNykgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMudXNlci5sZW5ndGgpICsgdGhpcy51c2VyICsgU3RyaW5nLmZyb21DaGFyQ29kZSgweDAwLCAweDAwKSArIFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5hdXRoVXJpLmxlbmd0aCkgKyB0aGlzLmF1dGhVcmkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MDAsIDB4MDAsIDB4MDApKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzVHJ1dGh5KGF1dGhEYXRhLmluY2x1ZGVzKDEpKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoJ0Jhc2ljIEF1dGgnKVxyXG4gICAgICAgICAgICAgIC8vIEJhc2ljIEF1dGggKFByb2JhYmx5IGEgZ29vZCBpZGVhIHRvIG5vdCBzdXBwb3J0IHRoaXMgdW5sZXNzIHRoaXMgaXMgYW4gb2xkIHZlcnNpb24gb2YgSW50ZWwgQU1UKVxyXG4gICAgICAgICAgICAgIHRoaXMuc29ja2V0U2VuZChTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MTMsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEpICsgVHlwZUNvbnZlcnRlci5JbnRUb1N0clgodGhpcy51c2VyLmxlbmd0aCArIHRoaXMucGFzcy5sZW5ndGggKyAyKSArIFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy51c2VyLmxlbmd0aCkgKyB0aGlzLnVzZXIgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMucGFzcy5sZW5ndGgpICsgdGhpcy5wYXNzKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdBdXRoIFR5cGUgbm90IHJlY29nbml6ZWQuIFN0b3BwaW5nLicpXHJcbiAgICAgICAgICAgICAgdGhpcy5zdG9wKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmICgoYXV0aFR5cGUgPT09IDMgfHwgYXV0aFR5cGUgPT09IDQpICYmIHN0YXR1cyA9PT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgY3VycHRyID0gMFxyXG5cclxuICAgICAgICAgICAgLy8gUmVhbG1cclxuICAgICAgICAgICAgY29uc3QgcmVhbG1sZW4gPSBhdXRoRGF0YUJ1Zi5jaGFyQ29kZUF0KGN1cnB0cilcclxuICAgICAgICAgICAgY29uc3QgcmVhbG0gPSBhdXRoRGF0YUJ1Zi5zdWJzdHJpbmcoY3VycHRyICsgMSwgY3VycHRyICsgMSArIHJlYWxtbGVuKVxyXG4gICAgICAgICAgICBjdXJwdHIgKz0gKHJlYWxtbGVuICsgMSlcclxuXHJcbiAgICAgICAgICAgIC8vIE5vbmNlXHJcbiAgICAgICAgICAgIGNvbnN0IG5vbmNlbGVuID0gYXV0aERhdGFCdWYuY2hhckNvZGVBdChjdXJwdHIpXHJcbiAgICAgICAgICAgIGNvbnN0IG5vbmNlID0gYXV0aERhdGFCdWYuc3Vic3RyaW5nKGN1cnB0ciArIDEsIGN1cnB0ciArIDEgKyBub25jZWxlbilcclxuICAgICAgICAgICAgY3VycHRyICs9IChub25jZWxlbiArIDEpXHJcblxyXG4gICAgICAgICAgICAvLyBRT1BcclxuICAgICAgICAgICAgbGV0IHFvcGxlbiA9IDBcclxuICAgICAgICAgICAgbGV0IHFvcDogYW55ID0gbnVsbFxyXG4gICAgICAgICAgICBjb25zdCBjbm9uY2U6IHN0cmluZyA9IHRoaXMuZ2VuZXJhdGVSYW5kb21Ob25jZSgzMilcclxuICAgICAgICAgICAgY29uc3Qgc25jID0gJzAwMDAwMDAyJ1xyXG4gICAgICAgICAgICBsZXQgZXh0cmEgPSAnJ1xyXG4gICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICBxb3BsZW4gPSBhdXRoRGF0YUJ1Zi5jaGFyQ29kZUF0KGN1cnB0cilcclxuICAgICAgICAgICAgICBxb3AgPSBhdXRoRGF0YUJ1Zi5zdWJzdHJpbmcoY3VycHRyICsgMSwgY3VycHRyICsgMSArIHFvcGxlbilcclxuICAgICAgICAgICAgICBjdXJwdHIgKz0gKHFvcGxlbiArIDEpXHJcbiAgICAgICAgICAgICAgZXh0cmEgPSBgJHtzbmN9OiR7Y25vbmNlfToke1N0cmluZyhxb3ApfSA6YFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaWdlc3QgPSB0aGlzLmhleF9tZDUodGhpcy5oZXhfbWQ1KHRoaXMudXNlciArICc6JyArIHJlYWxtICsgJzonICsgdGhpcy5wYXNzKSArICc6JyArIG5vbmNlICsgJzonICsgZXh0cmEgKyB0aGlzLmhleF9tZDUoJ1BPU1Q6JyArIHRoaXMuYXV0aFVyaSkpXHJcbiAgICAgICAgICAgIGxldCB0b3RhbGxlbjogbnVtYmVyID0gdGhpcy51c2VyLmxlbmd0aCArIHJlYWxtLmxlbmd0aCArIG5vbmNlLmxlbmd0aCArIHRoaXMuYXV0aFVyaS5sZW5ndGggKyBjbm9uY2UubGVuZ3RoICsgc25jLmxlbmd0aCArIGRpZ2VzdC5sZW5ndGggKyA3XHJcbiAgICAgICAgICAgIGlmIChhdXRoVHlwZSA9PT0gNCkgdG90YWxsZW4gKz0gKHBhcnNlSW50KHFvcC5sZW5ndGgpICsgMSlcclxuICAgICAgICAgICAgbGV0IGJ1ZjogYW55ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDEzLCAweDAwLCAweDAwLCAweDAwLCBhdXRoVHlwZSkgKyBUeXBlQ29udmVydGVyLkludFRvU3RyWCh0b3RhbGxlbikgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMudXNlci5sZW5ndGgpICsgdGhpcy51c2VyICsgU3RyaW5nLmZyb21DaGFyQ29kZShyZWFsbS5sZW5ndGgpICsgcmVhbG0gKyBTdHJpbmcuZnJvbUNoYXJDb2RlKG5vbmNlLmxlbmd0aCkgKyBub25jZSArIFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5hdXRoVXJpLmxlbmd0aCkgKyB0aGlzLmF1dGhVcmkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNub25jZS5sZW5ndGgpICsgY25vbmNlICsgU3RyaW5nLmZyb21DaGFyQ29kZShzbmMubGVuZ3RoKSArIHNuYyArIFN0cmluZy5mcm9tQ2hhckNvZGUoZGlnZXN0Lmxlbmd0aCkgKyBkaWdlc3RcclxuICAgICAgICAgICAgaWYgKGF1dGhUeXBlID09PSA0KSBidWYgPSBTdHJpbmcoYnVmKSArIChTdHJpbmcuZnJvbUNoYXJDb2RlKHFvcC5sZW5ndGgpICsgU3RyaW5nKHFvcCkpXHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0U2VuZChidWYpXHJcbiAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IDApIHsgLy8gU3VjY2Vzc1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm90b2NvbCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIC8vIFNlcmlhbC1vdmVyLUxBTjogU2VuZCBJbnRlbCBBTVQgc2VyaWFsIHNldHRpbmdzLi4uXHJcbiAgICAgICAgICAgICAgY29uc3QgTWF4VHhCdWZmZXIgPSAxMDAwMFxyXG4gICAgICAgICAgICAgIGNvbnN0IFR4VGltZW91dCA9IDEwMFxyXG4gICAgICAgICAgICAgIGNvbnN0IFR4T3ZlcmZsb3dUaW1lb3V0ID0gMFxyXG4gICAgICAgICAgICAgIGNvbnN0IFJ4VGltZW91dCA9IDEwMDAwXHJcbiAgICAgICAgICAgICAgY29uc3QgUnhGbHVzaFRpbWVvdXQgPSAxMDBcclxuICAgICAgICAgICAgICBjb25zdCBIZWFydGJlYXQgPSAwLy8gNTAwMDtcclxuICAgICAgICAgICAgICB0aGlzLnNvY2tldFNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgweDIwLCAweDAwLCAweDAwLCAweDAwKSArIFR5cGVDb252ZXJ0ZXIuSW50VG9TdHJYKHRoaXMuYW10U2VxdWVuY2UrKykgKyBUeXBlQ29udmVydGVyLlNob3J0VG9TdHJYKE1heFR4QnVmZmVyKSArXHJcbiAgICAgICAgICAgICAgICAgIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0clgoVHhUaW1lb3V0KSArIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0clgoVHhPdmVyZmxvd1RpbWVvdXQpICsgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyWChSeFRpbWVvdXQpICtcclxuICAgICAgICAgICAgICAgICAgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyWChSeEZsdXNoVGltZW91dCkgKyBUeXBlQ29udmVydGVyLlNob3J0VG9TdHJYKEhlYXJ0YmVhdCkgKyBUeXBlQ29udmVydGVyLkludFRvU3RyWCgwKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm90b2NvbCA9PT0gMikge1xyXG4gICAgICAgICAgICAgIC8vIFJlbW90ZSBEZXNrdG9wOiBTZW5kIHRyYWZmaWMgZGlyZWN0bHkuLi5cclxuICAgICAgICAgICAgICB0aGlzLnNvY2tldFNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgweDQwLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm90b2NvbCA9PT0gMykge1xyXG4gICAgICAgICAgICAgIC8vIFJlbW90ZSBJREVSOiBTZW5kIHRyYWZmaWMgZGlyZWN0bHkuLi5cclxuICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RTdGF0ZSA9IDFcclxuICAgICAgICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UoMylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHRoaXMuc3RvcCgpXHJcbiAgICAgICAgICBicmVhayB9XHJcbiAgICAgICAgY2FzZSAweDIxOiB7IC8vIFJlc3BvbnNlIHRvIHNldHRpbmdzICgzMylcclxuICAgICAgICAgIGlmICh0aGlzLmFtdEFjY3VtdWxhdG9yLmxlbmd0aCA8IDIzKSBicmVha1xyXG4gICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZSgnUmVzcG9uc2UgdG8gc2V0dGluZ3MnKVxyXG4gICAgICAgICAgY21kc2l6ZSA9IDIzXHJcbiAgICAgICAgICB0aGlzLnNvY2tldFNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgweDI3LCAweDAwLCAweDAwLCAweDAwKSArIFR5cGVDb252ZXJ0ZXIuSW50VG9TdHJYKHRoaXMuYW10U2VxdWVuY2UrKykgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MDAsIDB4MDAsIDB4MUIsIDB4MDAsIDB4MDAsIDB4MDApKVxyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1pbXBsaWVkLWV2YWxcclxuICAgICAgICAgIGlmICh0aGlzLnByb3RvY29sID09PSAxKSB7IHRoaXMuYW10S2VlcEFsaXZlVGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnNlbmRBbXRLZWVwQWxpdmUuYmluZCh0aGlzKSwgMjAwMCkgfVxyXG4gICAgICAgICAgdGhpcy5jb25uZWN0U3RhdGUgPSAxXHJcbiAgICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UoMylcclxuICAgICAgICAgIGJyZWFrIH1cclxuICAgICAgICBjYXNlIDB4Mjk6IC8vIFNlcmlhbCBTZXR0aW5ncyAoNDEpXHJcbiAgICAgICAgICBpZiAodGhpcy5hbXRBY2N1bXVsYXRvci5sZW5ndGggPCAxMCkgYnJlYWtcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoJ1NlcmlhbCBTZXR0aW5ncycpXHJcbiAgICAgICAgICBjbWRzaXplID0gMTBcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAweDJBOiB7IC8vIEluY29taW5nIGRpc3BsYXkgZGF0YSAoNDIpXHJcbiAgICAgICAgICBpZiAodGhpcy5hbXRBY2N1bXVsYXRvci5sZW5ndGggPCAxMCkgYnJlYWtcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoJ0luY29taW5nIGRpc3BsYXkgZGF0YScpXHJcbiAgICAgICAgICBjb25zdCBjcyA9ICgxMCArICgodGhpcy5hbXRBY2N1bXVsYXRvci5jaGFyQ29kZUF0KDkpICYgMHhGRikgPDwgOCkgKyAodGhpcy5hbXRBY2N1bXVsYXRvci5jaGFyQ29kZUF0KDgpICYgMHhGRikpXHJcbiAgICAgICAgICBpZiAodGhpcy5hbXRBY2N1bXVsYXRvci5sZW5ndGggPCBjcykgYnJlYWtcclxuICAgICAgICAgIHRoaXMub25Qcm9jZXNzRGF0YSh0aGlzLmFtdEFjY3VtdWxhdG9yLnN1YnN0cmluZygxMCwgY3MpKVxyXG4gICAgICAgICAgY21kc2l6ZSA9IGNzXHJcbiAgICAgICAgICBicmVhayB9XHJcbiAgICAgICAgY2FzZSAweDJCOiAvLyBLZWVwIGFsaXZlIG1lc3NhZ2UgKDQzKVxyXG4gICAgICAgICAgaWYgKHRoaXMuYW10QWNjdW11bGF0b3IubGVuZ3RoIDwgOCkgYnJlYWtcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoJ0tlZXAgQWx2ZSBtZXNzYWdlJylcclxuICAgICAgICAgIGNtZHNpemUgPSA4XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgMHg0MTpcclxuICAgICAgICAgIGlmICh0aGlzLmFtdEFjY3VtdWxhdG9yLmxlbmd0aCA8IDgpIGJyZWFrXHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKCdLVk0gdHJhZmZpYy4gQ2FsbCBvblN0YXJ0IGhhbmRsZXIuIEFuZCBmb3J3YXJkIHJlc3Qgb2YgYWNjIGRpcmVjdGx5LicpXHJcbiAgICAgICAgICB0aGlzLmNvbm5lY3RTdGF0ZSA9IDFcclxuICAgICAgICAgIHRoaXMub25TdGFydCgpXHJcbiAgICAgICAgICAvLyBLVk0gdHJhZmZpYywgZm9yd2FyZCByZXN0IG9mIGFjY3VtdWxhdG9yIGRpcmVjdGx5LlxyXG4gICAgICAgICAgaWYgKHRoaXMuYW10QWNjdW11bGF0b3IubGVuZ3RoID4gOCkgeyB0aGlzLm9uUHJvY2Vzc0RhdGEodGhpcy5hbXRBY2N1bXVsYXRvci5zdWJzdHJpbmcoOCkpIH1cclxuICAgICAgICAgIGNtZHNpemUgPSB0aGlzLmFtdEFjY3VtdWxhdG9yLmxlbmd0aFxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYFVua25vd24gSW50ZWwgQU1UIGNvbW1hbmQ6ICAke3RoaXMuYW10QWNjdW11bGF0b3IuY2hhckNvZGVBdCgwKX0gIGFjY2xlbj0ke3RoaXMuYW10QWNjdW11bGF0b3IubGVuZ3RofWApXHJcbiAgICAgICAgICB0aGlzLnN0b3AoKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNtZHNpemUgPT09IDApIHJldHVyblxyXG4gICAgICB0aGlzLmFtdEFjY3VtdWxhdG9yID0gdGhpcy5hbXRBY2N1bXVsYXRvci5zdWJzdHJpbmcoY21kc2l6ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhleF9tZDUgKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoJ01ENSB0aGUgc3RyaW5nJylcclxuICAgIHJldHVybiBtZDUoc3RyKVxyXG4gIH1cclxuXHJcbiAgc29ja2V0U2VuZCAoZGF0YTogc3RyaW5nKTogYW55IHsgLy8geHhTZW5kXHJcbiAgICBpZiAoaXNUcnV0aHkodGhpcy51cmx2YXJzKSAmJiBpc1RydXRoeSh0aGlzLnVybHZhcnMucmVkaXJ0cmFjZSkpIHsgdGhpcy5sb2dnZXIudmVyYm9zZShgUkVESVItU0VORCgke2RhdGEubGVuZ3RofSk6ICR7VHlwZUNvbnZlcnRlci5yc3RyMmhleChkYXRhKX1gKSB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHRoaXMuc29ja2V0ICE9IG51bGwgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gMSkgeyAvLyAxID0gV2ViU29ja2V0Lk9QRU5cclxuICAgICAgICBjb25zdCBiID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGgpXHJcbiAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShgUmVkaXIgU2VuZCggJHtkYXRhLmxlbmd0aH0pOiAke1R5cGVDb252ZXJ0ZXIucnN0cjJoZXgoZGF0YSl9YClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHsgYltpXSA9IGRhdGEuY2hhckNvZGVBdChpKSB9XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChiLmJ1ZmZlcilcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYFNvY2tldCBzZW5kIGVycm9yOiAke1N0cmluZyhlcnJvcil9YClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmQgc2VuZHMgZGF0YSBvdmVyIHRoZSB3ZWJzb2NrZXQgdG8gdGhlIHNlcnZlci5cclxuICAgKiBAcGFyYW0gZGF0YSBkYXRhIHRvIHNlbmQgdG8gc2VydmVyXHJcbiAgICovXHJcbiAgc2VuZCAoZGF0YTogc3RyaW5nKTogYW55IHsgLy8gc2VuZFxyXG4gICAgdGhpcy5sb2dnZXIudmVyYm9zZSgnU2VuZCBjYWxsZWQgJyArIGRhdGEpXHJcbiAgICBpZiAodGhpcy5zb2NrZXQgPT0gbnVsbCB8fCB0aGlzLmNvbm5lY3RTdGF0ZSAhPT0gMSkgcmV0dXJuXHJcbiAgICBpZiAodGhpcy5wcm90b2NvbCA9PT0gUHJvdG9jb2wuU09MKSB7XHJcbiAgICAgIHRoaXMuc29ja2V0U2VuZChTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjgsIDB4MDAsIDB4MDAsIDB4MDApICtcclxuICAgICAgICBUeXBlQ29udmVydGVyLkludFRvU3RyWCh0aGlzLmFtdFNlcXVlbmNlKyspICtcclxuICAgICAgICBUeXBlQ29udmVydGVyLlNob3J0VG9TdHJYKGRhdGEubGVuZ3RoKSArXHJcbiAgICAgICAgZGF0YSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc29ja2V0U2VuZChkYXRhKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZEFtdEtlZXBBbGl2ZSAoKTogYW55IHtcclxuICAgIGlmICh0aGlzLnNvY2tldCA9PSBudWxsKSByZXR1cm5cclxuICAgIHRoaXMuc29ja2V0U2VuZChTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MkIsIDB4MDAsIDB4MDAsIDB4MDApICsgVHlwZUNvbnZlcnRlci5JbnRUb1N0clgodGhpcy5hbXRTZXF1ZW5jZSsrKSlcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlUmFuZG9tTm9uY2UgKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCByOiBzdHJpbmcgPSAnJ1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyByICs9IHRoaXMucmFuZG9tTm9uY2VDaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5yYW5kb21Ob25jZUNoYXJzLmxlbmd0aCkpIH1cclxuICAgIHJldHVybiByXHJcbiAgfVxyXG5cclxuICBvblNvY2tldENsb3NlZCAoZTogRXZlbnQpOiBhbnkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSlcclxuICAgIGlmIChpc1RydXRoeSh0aGlzLnVybHZhcnMpICYmIGlzVHJ1dGh5KHRoaXMudXJsdmFycy5yZWRpcnRyYWNlKSkgeyBjb25zb2xlLmxvZygnUkVESVItQ0xPU0VEJykgfVxyXG4gICAgdGhpcy5sb2dnZXIud2FybignUmVkaXIgU29ja2V0IENsb3NlZCcpXHJcbiAgICB0aGlzLnN0b3AoKVxyXG4gIH1cclxuXHJcbiAgb25TdGF0ZUNoYW5nZSAobmV3c3RhdGU6IG51bWJlcik6IGFueSB7XHJcbiAgICBjb25zb2xlLmluZm8oJ29uc3RhdGVjaGFuZ2UnLCBuZXdzdGF0ZSlcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSBuZXdzdGF0ZSkgcmV0dXJuXHJcbiAgICB0aGlzLnN0YXRlID0gbmV3c3RhdGVcclxuICAgIHRoaXMub25OZXdTdGF0ZSh0aGlzLnN0YXRlKVxyXG4gICAgaWYgKHRoaXMub25TdGF0ZUNoYW5nZWQgIT0gbnVsbCkgdGhpcy5vblN0YXRlQ2hhbmdlZCh0aGlzLCB0aGlzLnN0YXRlKVxyXG4gIH1cclxuXHJcbiAgc3RvcCAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKCdTdG9wIGNhbGxlZCBvbiBSZWRpcmVjdG9yLiBDaGFuZ2Ugc3RhdGUgdG8gMCBhbmQgY2xvc2UgU29ja2V0LicpXHJcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2UoMClcclxuICAgIHRoaXMuY29ubmVjdFN0YXRlID0gLTFcclxuICAgIHRoaXMuYW10QWNjdW11bGF0b3IgPSAnJ1xyXG4gICAgaWYgKHRoaXMuc29ja2V0ICE9IG51bGwpIHsgdGhpcy5zb2NrZXQuY2xvc2UoKTsgdGhpcy5zb2NrZXQgPSBudWxsIH1cclxuICAgIGlmICh0aGlzLmFtdEtlZXBBbGl2ZVRpbWVyICE9IG51bGwpIHsgY2xlYXJJbnRlcnZhbCh0aGlzLmFtdEtlZXBBbGl2ZVRpbWVyKTsgdGhpcy5hbXRLZWVwQWxpdmVUaW1lciA9IG51bGwgfVxyXG4gIH1cclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBBbXRUZXJtaW5hbCB7XHJcbiAgdGVybWluYWxFbXVsYXRpb24gPSAxXHJcbiAgZnhFbXVsYXRpb24gPSAwXHJcbiAgZnhMaW5lQnJlYWsgPSAwIC8vIDAgPSBDUitMRiwgMSA9IExGXHJcblxyXG4gIC8qKiB1c2VkIHRvIG1hcCBBc2NpaSB2YWx1ZXMgcmVjZWl2ZWQgZnJvbSBzZXJpYWwgcG9ydCB0byB1bmljb2RlIGNoYXJhY3RlcnMgKi9cclxuICBBc2NpaVRvVW5pY29kZSA9IFtcclxuICAgIDB4MDBjNyxcclxuICAgIDB4MDBmYyxcclxuICAgIDB4MDBlOSxcclxuICAgIDB4MDBlMixcclxuICAgIDB4MDBlNCxcclxuICAgIDB4MDBlMCxcclxuICAgIDB4MDBlNSxcclxuICAgIDB4MDBlNyxcclxuICAgIDB4MDBlYSxcclxuICAgIDB4MDBlYixcclxuICAgIDB4MDBlOCxcclxuICAgIDB4MDBlZixcclxuICAgIDB4MDBlZSxcclxuICAgIDB4MDBlYyxcclxuICAgIDB4MDBjNCxcclxuICAgIDB4MDBjNSxcclxuICAgIDB4MDBjOSxcclxuICAgIDB4MDBlNixcclxuICAgIDB4MDBjNixcclxuICAgIDB4MDBmNCxcclxuICAgIDB4MDBmNixcclxuICAgIDB4MDBmMixcclxuICAgIDB4MDBmYixcclxuICAgIDB4MDBmOSxcclxuICAgIDB4MDBmZixcclxuICAgIDB4MDBkNixcclxuICAgIDB4MDBkYyxcclxuICAgIDB4MDBhMixcclxuICAgIDB4MDBhMyxcclxuICAgIDB4MDBhNSxcclxuICAgIDB4MjBhNyxcclxuICAgIDB4MDE5MixcclxuICAgIDB4MDBlMSxcclxuICAgIDB4MDBlZCxcclxuICAgIDB4MDBmMyxcclxuICAgIDB4MDBmYSxcclxuICAgIDB4MDBmMSxcclxuICAgIDB4MDBkMSxcclxuICAgIDB4MDBhYSxcclxuICAgIDB4MDBkYSxcclxuICAgIDB4MDBiZixcclxuICAgIDB4MjMxMCxcclxuICAgIDB4MDBhYyxcclxuICAgIDB4MDBiZCxcclxuICAgIDB4MDBiYyxcclxuICAgIDB4MDBhMSxcclxuICAgIDB4MDBhYixcclxuICAgIDB4MDBiYixcclxuICAgIDB4MjU5MyxcclxuICAgIDB4MjU5MixcclxuICAgIDB4MjU5MSxcclxuICAgIDB4MjUwMixcclxuICAgIDB4MjUyNCxcclxuICAgIDB4MjU2MSxcclxuICAgIDB4MjU2MixcclxuICAgIDB4MjU1NixcclxuICAgIDB4MjU1NSxcclxuICAgIDB4MjU2MyxcclxuICAgIDB4MjU1MSxcclxuICAgIDB4MjU1NyxcclxuICAgIDB4MjU1ZCxcclxuICAgIDB4MjU1YyxcclxuICAgIDB4MjU1YixcclxuICAgIDB4MjUxMCxcclxuICAgIDB4MjUxNCxcclxuICAgIDB4MjUzNCxcclxuICAgIDB4MjUyYyxcclxuICAgIDB4MjUxYyxcclxuICAgIDB4MjUwMCxcclxuICAgIDB4MjUzYyxcclxuICAgIDB4MjU1ZSxcclxuICAgIDB4MjU1ZixcclxuICAgIDB4MjU1YSxcclxuICAgIDB4MjU1NCxcclxuICAgIDB4MjU2OSxcclxuICAgIDB4MjU2NixcclxuICAgIDB4MjU2MCxcclxuICAgIDB4MjU1MCxcclxuICAgIDB4MjU2YyxcclxuICAgIDB4MjU2NyxcclxuICAgIDB4MjU2OCxcclxuICAgIDB4MjU2NCxcclxuICAgIDB4MjU2NSxcclxuICAgIDB4MjU2OCxcclxuICAgIDB4MjU1OCxcclxuICAgIDB4MjU1MixcclxuICAgIDB4MjU1MyxcclxuICAgIDB4MjU2YixcclxuICAgIDB4MjU2YSxcclxuICAgIDB4MjUxOCxcclxuICAgIDB4MjUwYyxcclxuICAgIDB4MjU4OCxcclxuICAgIDB4MjU4NCxcclxuICAgIDB4MjU4YixcclxuICAgIDB4MjU5MCxcclxuICAgIDB4MjU4MCxcclxuICAgIDB4MDNiMSxcclxuICAgIDB4MDBkZixcclxuICAgIDB4MDM5MyxcclxuICAgIDB4MDNjMCxcclxuICAgIDB4MDNhMyxcclxuICAgIDB4MDNjMyxcclxuICAgIDB4MDBiNSxcclxuICAgIDB4MDNjNCxcclxuICAgIDB4MDNjNixcclxuICAgIDB4MDNiOCxcclxuICAgIDB4MjEyNixcclxuICAgIDB4MDNiNCxcclxuICAgIDB4MjIxZSxcclxuICAgIDB4MDBmOCxcclxuICAgIDB4MDNiNSxcclxuICAgIDB4MjIwZixcclxuICAgIDB4MjI2MSxcclxuICAgIDB4MDBiMSxcclxuICAgIDB4MjI2NSxcclxuICAgIDB4MjI2NixcclxuICAgIDB4MjMyMCxcclxuICAgIDB4MjMyMSxcclxuICAgIDB4MDBmNyxcclxuICAgIDB4MjI0OCxcclxuICAgIDB4MDBiMCxcclxuICAgIDB4MjAyMixcclxuICAgIDB4MDBiNyxcclxuICAgIDB4MjIxYSxcclxuICAgIDB4MjA3ZixcclxuICAgIDB4MDBiMixcclxuICAgIDB4MjIwZSxcclxuICAgIDB4MDBhMFxyXG4gIF1cclxuXHJcbiAgQXNjaWlUb1VuaWNvZGVJbnRlbCA9IFtcclxuICAgIDB4MDBjNyxcclxuICAgIDB4MDBmYyxcclxuICAgIDB4MDBlOSxcclxuICAgIDB4MDBlMixcclxuICAgIDB4MDBlNCxcclxuICAgIDB4MDBlMCxcclxuICAgIDB4MDBlNSxcclxuICAgIDB4MDBlNyxcclxuICAgIDB4MDBlYSxcclxuICAgIDB4MDBlYixcclxuICAgIDB4MDBlOCxcclxuICAgIDB4MDBlZixcclxuICAgIDB4MDBlZSxcclxuICAgIDB4MDBlYyxcclxuICAgIDB4MDBjNCxcclxuICAgIDB4MDBjNSxcclxuICAgIDB4MDBjOSxcclxuICAgIDB4MDBlNixcclxuICAgIDB4MDBjNixcclxuICAgIDB4MDBmNCxcclxuICAgIDB4MDBmNixcclxuICAgIDB4MDBmMixcclxuICAgIDB4MDBmYixcclxuICAgIDB4MDBmOSxcclxuICAgIDB4MDBmZixcclxuICAgIDB4MDBkNixcclxuICAgIDB4MDBkYyxcclxuICAgIDB4MDBhMixcclxuICAgIDB4MDBhMyxcclxuICAgIDB4MDBhNSxcclxuICAgIDB4MjBhNyxcclxuICAgIDB4MDE5MixcclxuICAgIDB4MDBlMSxcclxuICAgIDB4MDBlZCxcclxuICAgIDB4MDBmMyxcclxuICAgIDB4MDBmYSxcclxuICAgIDB4MDBmMSxcclxuICAgIDB4MDBkMSxcclxuICAgIDB4MDBhYSxcclxuICAgIDB4MDBkYSxcclxuICAgIDB4MDBiZixcclxuICAgIDB4MjMxMCxcclxuICAgIDB4MDBhYyxcclxuICAgIDB4MDBiZCxcclxuICAgIDB4MDBiYyxcclxuICAgIDB4MDBhMSxcclxuICAgIDB4MDBhZSxcclxuICAgIDB4MDBiYixcclxuICAgIDB4MjU5MyxcclxuICAgIDB4MjU5MixcclxuICAgIDB4MjU5MSxcclxuICAgIDB4MjUwMixcclxuICAgIDB4MjUyNCxcclxuICAgIDB4MjU2MSxcclxuICAgIDB4MjU2MixcclxuICAgIDB4MjU1NixcclxuICAgIDB4MjU1NSxcclxuICAgIDB4MjU2MyxcclxuICAgIDB4MjU1MSxcclxuICAgIDB4MjU1NyxcclxuICAgIDB4MjU1ZCxcclxuICAgIDB4MjU1YyxcclxuICAgIDB4MjU1YixcclxuICAgIDB4MjUxMCxcclxuICAgIDB4MjUxNCxcclxuICAgIDB4MjUzNCxcclxuICAgIDB4MjUyYyxcclxuICAgIDB4MjUxYyxcclxuICAgIDB4MjUwMCxcclxuICAgIDB4MjUzYyxcclxuICAgIDB4MjU1ZSxcclxuICAgIDB4MjU1ZixcclxuICAgIDB4MjU1YSxcclxuICAgIDB4MjU1NCxcclxuICAgIDB4MjU2OSxcclxuICAgIDB4MjU2NixcclxuICAgIDB4MjU2MCxcclxuICAgIDB4MjU1MCxcclxuICAgIDB4MjU2YyxcclxuICAgIDB4MjU2NyxcclxuICAgIDB4MjU2OCxcclxuICAgIDB4MjU2NCxcclxuICAgIDB4MjU2NSxcclxuICAgIDB4MjU2OCxcclxuICAgIDB4MjU1OCxcclxuICAgIDB4MjU1MixcclxuICAgIDB4MjU1MyxcclxuICAgIDB4MjU2YixcclxuICAgIDB4MjU2YSxcclxuICAgIDB4MjUxOCxcclxuICAgIDB4MjUwYyxcclxuICAgIDB4MjU4OCxcclxuICAgIDB4MjU4NCxcclxuICAgIDB4MjU4YixcclxuICAgIDB4MjU5MCxcclxuICAgIDB4MjU4MCxcclxuICAgIDB4MDNiMSxcclxuICAgIDB4MDBkZixcclxuICAgIDB4MDM5MyxcclxuICAgIDB4MDNjMCxcclxuICAgIDB4MDNhMyxcclxuICAgIDB4MDNjMyxcclxuICAgIDB4MDBiNSxcclxuICAgIDB4MDNjNCxcclxuICAgIDB4MDNjNixcclxuICAgIDB4MDNiOCxcclxuICAgIDB4MjEyNixcclxuICAgIDB4MDNiNCxcclxuICAgIDB4MjIxZSxcclxuICAgIDB4MDBmOCxcclxuICAgIDB4MDNiNSxcclxuICAgIDB4MjIwZixcclxuICAgIDB4MjI2MSxcclxuICAgIDB4MDBiMSxcclxuICAgIDB4MjI2NSxcclxuICAgIDB4MjI2NixcclxuICAgIDB4MjMyMCxcclxuICAgIDB4MjMyMSxcclxuICAgIDB4MDBmNyxcclxuICAgIDB4MjI0OCxcclxuICAgIDB4MDBiMCxcclxuICAgIDB4MjAyMixcclxuICAgIDB4MDBiNyxcclxuICAgIDB4MjIxYSxcclxuICAgIDB4MjA3ZixcclxuICAgIDB4MDBiMixcclxuICAgIDB4MjIwZSxcclxuICAgIDB4MDBhMFxyXG4gIF1cclxuXHJcbiAgU3RhdGVDaGFuZ2UgPSAobmV3U3RhdGUpOiBhbnkgPT4geyB9XHJcblxyXG4gIC8qKiBzZW5kaW5nICBtdWx0aXBsZSB1bmljb2RlIHZhbHVlcyB0byBzb2NrZXQgKi9cclxuICBUZXJtU2VuZEtleXMgPSAoa2V5cyk6IGFueSA9PiB0aGlzLm9uU2VuZChrZXlzKVxyXG5cclxuICBvblNlbmQ6IChkYXRhOiBhbnkpID0+IHZvaWRcclxuXHJcbiAgUHJvY2Vzc0RhdGE6IChzdHI6IHN0cmluZykgPT4gdm9pZFxyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuaW1wb3J0IHsgSUxvZ2dlciwgTG9nTGV2ZWwgfSBmcm9tICcuL0ludGVyZmFjZXMnXHJcblxyXG4vKipcclxuICogQ29uc29sZUxvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIgdG8gcHJvdmlkZSBiYXNpYyBjb25zb2xlIGxvZ2dpbmcgZnVuY3Rpb25hbGl0eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlTG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XHJcbiAgbWluTGV2ZWw6IExvZ0xldmVsXHJcbiAgY29uc3RydWN0b3IgKGxldmVsOiBMb2dMZXZlbCkge1xyXG4gICAgdGhpcy5taW5MZXZlbCA9IGxldmVsXHJcbiAgfVxyXG5cclxuICBsb2cgKGxldmVsOiBMb2dMZXZlbCwgZGF0YTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgIGNhc2UgTG9nTGV2ZWwuVkVSQk9TRTpcclxuICAgICAgICB0aGlzLnZlcmJvc2UoZGF0YSlcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIExvZ0xldmVsLklORk86XHJcbiAgICAgICAgdGhpcy5pbmZvKGRhdGEpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBMb2dMZXZlbC5ERUJVRzpcclxuICAgICAgICB0aGlzLmRlYnVnKGRhdGEpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBMb2dMZXZlbC5XQVJOSU5HOlxyXG4gICAgICAgIHRoaXMud2FybihkYXRhKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgTG9nTGV2ZWwuRVJST1I6XHJcbiAgICAgICAgdGhpcy5lcnJvcihkYXRhKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlYnVnIChsb2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWluTGV2ZWwgPj0gTG9nTGV2ZWwuREVCVUcpIGNvbnNvbGUuZGVidWcobG9nKVxyXG4gIH1cclxuXHJcbiAgaW5mbyAobG9nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1pbkxldmVsID49IExvZ0xldmVsLklORk8pIGNvbnNvbGUuaW5mbyhsb2cpXHJcbiAgfVxyXG5cclxuICBlcnJvciAobG9nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1pbkxldmVsID49IExvZ0xldmVsLkVSUk9SKSBjb25zb2xlLmVycm9yKGxvZylcclxuICB9XHJcblxyXG4gIHdhcm4gKGxvZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5taW5MZXZlbCA+PSBMb2dMZXZlbC5XQVJOSU5HKSBjb25zb2xlLndhcm4obG9nKVxyXG4gIH1cclxuXHJcbiAgdmVyYm9zZSAobG9nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1pbkxldmVsID49IExvZ0xldmVsLlZFUkJPU0UpIGNvbnNvbGUubG9nKGxvZylcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNUcnV0aHkgfSBmcm9tICcuL1V0aWxpdGllcy9VdGlsaXR5TWV0aG9kcydcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFZpbmF5IEdcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmV4cG9ydCBjb25zdCBUeXBlQ29udmVydGVyID0ge1xyXG4gIC8vIEJpbmFyeSBlbmNvZGluZyBhbmQgZGVjb2RpbmcgZnVuY3Rpb25zXHJcbiAgUmVhZFNob3J0ICh2OiBzdHJpbmcsIHA6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAvL1xyXG4gICAgcmV0dXJuICh2LmNoYXJDb2RlQXQocCkgPDwgOCkgKyB2LmNoYXJDb2RlQXQocCArIDEpXHJcbiAgfSxcclxuXHJcbiAgUmVhZFNob3J0WCAodjogc3RyaW5nLCBwOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuICh2LmNoYXJDb2RlQXQocCArIDEpIDw8IDgpICsgdi5jaGFyQ29kZUF0KHApXHJcbiAgfSxcclxuXHJcbiAgUmVhZEludCAodjogc3RyaW5nLCBwOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuICh2LmNoYXJDb2RlQXQocCkgKiAweDEwMDAwMDApICsgKHYuY2hhckNvZGVBdChwICsgMSkgPDwgMTYpICtcclxuICAgICAgICAgICAodi5jaGFyQ29kZUF0KHAgKyAyKSA8PCA4KSArIHYuY2hhckNvZGVBdChwICsgMylcclxuICB9LCAvLyBXZSB1c2UgXCIqMHgxMDAwMDAwXCIgaW5zdGVhZCBvZiBcIjw8MjRcIiBiZWNhdXNlIHRoZSBzaGlmdCBjb252ZXJ0cyB0aGUgbnVtYmVyIHRvIHNpZ25lZCBpbnQzMi5cclxuXHJcbiAgUmVhZFNJbnQgKHY6IHN0cmluZywgcDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAodi5jaGFyQ29kZUF0KHApIDw8IDI0KSArICh2LmNoYXJDb2RlQXQocCArIDEpIDw8IDE2KSArXHJcbiAgICAgICAgICAgKHYuY2hhckNvZGVBdChwICsgMikgPDwgOCkgKyB2LmNoYXJDb2RlQXQocCArIDMpXHJcbiAgfSxcclxuXHJcbiAgUmVhZEludFggKHY6IHN0cmluZywgcDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAodi5jaGFyQ29kZUF0KHAgKyAzKSAqIDB4MTAwMDAwMCkgKyAodi5jaGFyQ29kZUF0KHAgKyAyKSA8PCAxNikgK1xyXG4gICAgICAgICAgICh2LmNoYXJDb2RlQXQocCArIDEpIDw8IDgpICsgdi5jaGFyQ29kZUF0KHApXHJcbiAgfSxcclxuXHJcbiAgU2hvcnRUb1N0ciAodjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKCh2ID4+IDgpICYgMHhGRiwgdiAmIDB4RkYpXHJcbiAgfSxcclxuXHJcbiAgU2hvcnRUb1N0clggKHY6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh2ICYgMHhGRiwgKHYgPj4gOCkgJiAweEZGKVxyXG4gIH0sXHJcblxyXG4gIEludFRvU3RyICh2OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoKHYgPj4gMjQpICYgMHhGRiwgKHYgPj4gMTYpICYgMHhGRiwgKHYgPj4gOCkgJiAweEZGLCB2ICYgMHhGRilcclxuICB9LFxyXG5cclxuICBJbnRUb1N0clggKHY6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh2ICYgMHhGRiwgKHYgPj4gOCkgJiAweEZGLCAodiA+PiAxNikgJiAweEZGLCAodiA+PiAyNCkgJiAweEZGKVxyXG4gIH0sXHJcblxyXG4gIFNwbGl0QXJyYXkgKHY6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB2LnNwbGl0KCcsJylcclxuICB9LFxyXG5cclxuICBDbG9uZSAodjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHYpKVxyXG4gIH0sXHJcblxyXG4gIEVzY2FwZUh0bWwgKHg6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4pOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIHgucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7JylcclxuICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB4ID09PSAnYm9vbGVhbicpIHsgcmV0dXJuIHggfVxyXG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykgeyByZXR1cm4geCB9XHJcbiAgfSxcclxuXHJcbiAgLy8gTW92ZSBhbiBlbGVtZW50IGZyb20gb25lIHBvc2l0aW9uIGluIGFuIGFycmF5IHRvIGEgbmV3IHBvc2l0aW9uXHJcbiAgQXJyYXlFbGVtZW50TW92ZSAoYXJyOiBudW1iZXJbXSwgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBhcnIuc3BsaWNlKHRvLCAwLCBhcnIuc3BsaWNlKGZyb20sIDEpWzBdKVxyXG4gIH0sXHJcblxyXG4gIC8vIFByaW50IG9iamVjdCBmb3IgSFRNTFxyXG4gIE9iamVjdFRvU3RyaW5nRXggKHg6IGFueSwgYzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCByOiBzdHJpbmcgPSAnJ1xyXG4gICAgaWYgKHggIT09IDAgJiYgKCFpc1RydXRoeSh4KSB8fCB4ID09IG51bGwpKSByZXR1cm4gJyhOdWxsKSdcclxuICAgIGlmICh4IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mb3ItaW4tYXJyYXlcclxuICAgICAgZm9yIChjb25zdCBpIGluIHgpIHtcclxuICAgICAgICByID0gciArICc8YnIgLz4nICsgU3RyaW5nKHRoaXMuZ2FwKGMpKSArICdJdGVtICMnICsgU3RyaW5nKGkpICsgJzogJyArIFN0cmluZyh0aGlzLk9iamVjdFRvU3RyaW5nRXgoeFtpXSwgYyArIDEpKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHggaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgZm9yIChjb25zdCBqIGluIHgpIHtcclxuICAgICAgICByID0gciArICc8YnIgLz4nICsgU3RyaW5nKHRoaXMuZ2FwKGMpKSArIFN0cmluZyhqKSArICcgPSAnICsgU3RyaW5nKHRoaXMuT2JqZWN0VG9TdHJpbmdFeCh4W2pdLCBjICsgMSkpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHIgPSByICsgU3RyaW5nKHRoaXMuRXNjYXBlSHRtbCh4KSlcclxuICAgIH1cclxuICAgIHJldHVybiByXHJcbiAgfSxcclxuXHJcbiAgLy8gUHJpbnQgb2JqZWN0IGZvciBjb25zb2xlXHJcbiAgT2JqZWN0VG9TdHJpbmdFeDIgKHg6IGFueSwgYzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCByOiBzdHJpbmcgPSAnJ1xyXG4gICAgaWYgKHggIT09IDAgJiYgKCFpc1RydXRoeSh4KSB8fCB4ID09IG51bGwpKSB7IHJldHVybiAnKE51bGwpJyB9XHJcbiAgICBpZiAoeCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZm9yLWluLWFycmF5XHJcbiAgICAgIGZvciAoY29uc3QgaSBpbiB4KSB7XHJcbiAgICAgICAgciA9IHIgKyAnXFxyXFxuJyArIFN0cmluZyh0aGlzLmdhcDIoYykpICsgJ0l0ZW0gIycgKyBTdHJpbmcoaSkgKyAnOiAnICsgU3RyaW5nKHRoaXMuT2JqZWN0VG9TdHJpbmdFeDIoeFtpXSwgYyArIDEpKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHggaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgZm9yIChjb25zdCBqIGluIHgpIHtcclxuICAgICAgICByID0gciArICdcXHJcXG4nICsgU3RyaW5nKHRoaXMuZ2FwMihjKSkgKyBTdHJpbmcoaikgKyAnID0gJyArIFN0cmluZyh0aGlzLk9iamVjdFRvU3RyaW5nRXgyKHhbal0sIGMgKyAxKSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgciA9IHIgKyBTdHJpbmcodGhpcy5Fc2NhcGVIdG1sKHgpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJcclxuICB9LFxyXG5cclxuICAvLyBDcmVhdGUgYW4gaWRlbnQgZ2FwXHJcbiAgZ2FwIChjOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHggPSAnJ1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYyAqIDQpOyBpKyspIHtcclxuICAgICAgeCArPSAnJm5ic3A7J1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHhcclxuICB9LFxyXG5cclxuICBnYXAyIChjOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHggPSAnJ1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYyAqIDQpOyBpKyspIHtcclxuICAgICAgeCArPSAnICdcclxuICAgIH1cclxuICAgIHJldHVybiB4XHJcbiAgfSxcclxuXHJcbiAgLy8gUHJpbnQgYW4gb2JqZWN0IGluIGh0bWxcclxuICBPYmplY3RUb1N0cmluZyAoeDogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLk9iamVjdFRvU3RyaW5nRXgoeCwgMClcclxuICB9LFxyXG5cclxuICBPYmplY3RUb1N0cmluZzIgKHg6IGFueSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5PYmplY3RUb1N0cmluZ0V4Mih4LCAwKVxyXG4gIH0sXHJcblxyXG4gIC8vIENvbnZlcnQgZGVjaW1hbCB0byBoZXhcclxuICBjaGFyMmhleCAoaTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKC0yKS50b1VwcGVyQ2FzZSgpXHJcbiAgfSxcclxuXHJcbiAgLy8gQ29udmVydCBhIHJhdyBzdHJpbmcgdG8gYSBoZXggc3RyaW5nXHJcbiAgcnN0cjJoZXggKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IHIgPSAnJzsgbGV0IGlcclxuICAgIGZvciAoaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICByID0gciArIFN0cmluZyh0aGlzLmNoYXIyaGV4KGlucHV0LmNoYXJDb2RlQXQoaSkpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJcclxuICB9LFxyXG5cclxuICAvLyBVVEYtOCBlbmNvZGluZyAmIGRlY29kaW5nIGZ1bmN0aW9uc1xyXG4gIGVuY29kZV91dGY4IChzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzKSlcclxuICB9LFxyXG5cclxuICBkZWNvZGVfdXRmOCAoczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKHMpKVxyXG4gIH0sXHJcblxyXG4gIC8vIENvbnZlcnQgYSBzdHJpbmcgaW50byBhIGJsb2JcclxuICBkYXRhMmJsb2IgKGRhdGE6IHN0cmluZyk6IGFueSB7XHJcbiAgICBjb25zdCBieXRlcyA9IG5ldyBBcnJheShkYXRhLmxlbmd0aClcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykgeyBieXRlc1tpXSA9IGRhdGEuY2hhckNvZGVBdChpKSB9XHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KGJ5dGVzKV0pXHJcbiAgICByZXR1cm4gYmxvYlxyXG4gIH0sXHJcblxyXG4gIC8vIEdlbmVyYXRlIHJhbmRvbSBudW1iZXJzXHJcbiAgcmFuZG9tIChtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KVxyXG4gIH0sXHJcblxyXG4gIC8vIFRyYWRlbWFya3NcclxuICB0cmFkZW1hcmtzICh4OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHgucmVwbGFjZSgvXFwoUlxcKS9nLCAnJnJlZzsnKS5yZXBsYWNlKC9cXChUTVxcKS9nLCAnJnRyYWRlOycpXHJcbiAgfVxyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuaW1wb3J0IHsgSUxvZ2dlciwgSU1vZHVsZSB9IGZyb20gJy4vSW50ZXJmYWNlcydcclxuaW1wb3J0IHsgUHJvdG9jb2wgfSBmcm9tICcuL0FNVFJlZGlyZWN0b3InXHJcblxyXG4vKipcclxuICogRGVza3RvcCBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgaGFuZGxpbmcgUmVtb3RlIERlc2t0b3AgZnVuY3Rpb25hbGl0eVxyXG4gKi9cclxuY2xhc3MgRGVza3RvcCBpbXBsZW1lbnRzIElNb2R1bGUge1xyXG4gIHJvdGF0aW9uOiBudW1iZXJcclxuICB1c2VaUkxFOiBib29sZWFuXHJcbiAgb2xkTW91c2VYOiBudW1iZXJcclxuICBvbGRNb3VzZVk6IG51bWJlclxyXG4gIGxhc3RNb3VzZVg6IG51bWJlclxyXG4gIGxhc3RNb3VzZVk6IG51bWJlclxyXG4gIGJwcDogbnVtYmVyXHJcbiAga3ZtRGF0YVN1cHBvcnRlZDogYm9vbGVhblxyXG4gIG9uS3ZtRGF0YUFjazogYW55XHJcbiAgdXJsdmFyczogYW55XHJcbiAgb25Ldm1EYXRhUGVuZGluZzogYW55W11cclxuICBzcGFyZXc6IG51bWJlclxyXG4gIHNwYXJlaDogbnVtYmVyXHJcbiAgc3BhcmV3MjogbnVtYmVyXHJcbiAgc3BhcmVoMjogbnVtYmVyXHJcbiAgc3BhcmU6IGFueVxyXG4gIHNwYXJlY2FjaGU6IGFueVxyXG4gIGZyYW1lUmF0ZURlbGF5OiBudW1iZXJcclxuICBpbmZsYXRlOiBhbnlcclxuICBsb2dnZXI6IElMb2dnZXJcclxuICBob2xkaW5nOiBib29sZWFuXHJcbiAgY2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuICB0Y2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxyXG4gIHdpZHRoOiBudW1iZXJcclxuICBoZWlnaHQ6IG51bWJlclxyXG4gIGNhbnZhc0lkOiBzdHJpbmdcclxuICBmb2N1c01vZGU6IG51bWJlclxyXG4gIHJ3aWR0aDogbnVtYmVyXHJcbiAgcmhlaWdodDogbnVtYmVyXHJcbiAgU2NyZWVuV2lkdGg6IG51bWJlclxyXG4gIFNjcmVlbkhlaWdodDogbnVtYmVyXHJcbiAgbGFzdEtlZXBBbGl2ZTogbnVtYmVyXHJcbiAgYnV0dG9ubWFzazogbnVtYmVyXHJcbiAgc3RhdGU6IG51bWJlclxyXG4gIGNhbnZhc0NvbnRyb2w6IEhUTUxDYW52YXNFbGVtZW50XHJcbiAgc2Nyb2xsZGl2OiBIVE1MRWxlbWVudFxyXG4gIGxhc3RNb3VzZVgyOiBudW1iZXJcclxuICBub01vdXNlUm90YXRlOiBib29sZWFuXHJcbiAgcHJvdG9jb2w6IFByb3RvY29sXHJcbiAgWkxJQjogYW55XHJcbiAgbGFzdE1vdXNlTW92ZVRpbWU6IG51bWJlclxyXG5cclxuICBwcm9jZXNzRGF0YSAoZGF0YTogc3RyaW5nKTogYW55IHt9XHJcbiAgdXBkYXRlU2NyZWVuRGltZW5zaW9uczogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB2b2lkXHJcbiAgb25TdGF0ZUNoYW5nZSAoc3RhdGU6IG51bWJlcik6IGFueSB7fVxyXG4gIG9uS3ZtRGF0YTogKGRhdGE6IHN0cmluZykgPT4gdm9pZFxyXG4gIG9uU2NyZWVuUmVzaXplOiAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNhbnZhc0lkOiBzdHJpbmcpID0+IHZvaWRcclxuICBvblNjcmVlblNpemVDaGFuZ2U6ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4gdm9pZFxyXG4gIHNldERlc2tGb2N1czogKGVsOiBzdHJpbmcsIGZvY3VzbW9kZTogbnVtYmVyKSA9PiB2b2lkXHJcbiAgZ2V0RGVza0ZvY3VzOiAoZWw6IHN0cmluZykgPT4gQ1NTU3R5bGVEZWNsYXJhdGlvblxyXG4gIHN0YXJ0ICgpOiBhbnkge31cclxuICBvblNlbmRLdm1EYXRhIChkYXRhOiBzdHJpbmcpOiBhbnkge31cclxuXHJcbiAgb25TZW5kOiAoZGF0YTogc3RyaW5nKSA9PiB2b2lkXHJcbiAgb25Qcm9jZXNzRGF0YTogKGRhdGE6IHN0cmluZykgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgeyBEZXNrdG9wIH1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgSVN0YXRlUHJvY2Vzc29yLCBJRGF0YVByb2Nlc3NvciwgSUxvZ2dlciwgSUNvbW11bmljYXRvciB9IGZyb20gJy4uL0ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFN0YXRlUHJvY2Vzc29yRmFjdG9yeSB9IGZyb20gJy4uL1N0YXRlUHJvY2Vzc29yRmFjdG9yeSdcclxuaW1wb3J0IHsgRGVza3RvcCB9IGZyb20gJy4uL0Rlc2t0b3AnXHJcbmltcG9ydCB7IGlzVHJ1dGh5IH0gZnJvbSAnLi4vVXRpbGl0aWVzL1V0aWxpdHlNZXRob2RzJ1xyXG5cclxuLyoqXHJcbiAqIERhdGFQcm9jZXNzb3IgcHJvdmlkZXMgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIHByb2Nlc3NpbmcgZGlmZmVyZW50IHN0YXRlcyBvZiBSRkIgbGV2ZXJhZ2luZ1xyXG4gKiB0aGUgZGlmZmVyZW50IFN0YXRlUHJvY2Vzc29yc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERhdGFQcm9jZXNzb3IgaW1wbGVtZW50cyBJRGF0YVByb2Nlc3NvciB7XHJcbiAgYWNjOiBzdHJpbmdcclxuICByZW1vdGVGcmFtZUJ1ZmZlclN0YXRlTWFuYWdlcjogSVN0YXRlUHJvY2Vzc29yXHJcbiAgc3RhdGVQcm9jZXNzb3JGYWM6IFN0YXRlUHJvY2Vzc29yRmFjdG9yeVxyXG4gIHBhcmVudDogRGVza3RvcFxyXG4gIGxvZ2dlcjogSUxvZ2dlclxyXG4gIGNvbnN0cnVjdG9yIChsb2dnZXI6IElMb2dnZXIsIGNvbW06IElDb21tdW5pY2F0b3IsIHBhcmVudDogRGVza3RvcCkge1xyXG4gICAgdGhpcy5hY2MgPSAnJ1xyXG4gICAgdGhpcy5zdGF0ZVByb2Nlc3NvckZhYyA9IG5ldyBTdGF0ZVByb2Nlc3NvckZhY3RvcnkoY29tbSwgcGFyZW50LCB0aGlzLnVwZGF0ZVJGQlN0YXRlLmJpbmQodGhpcykpXHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxyXG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXJcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHByb2Nlc3NEYXRhIGlzIGNhbGxlZCBmcm9tIElDb21tdW5pY2F0b3Igb24gbmV3IGRhdGEgY29taW5nIG92ZXIgdGhlIHdpcmVcclxuICAgKiBAcGFyYW0gZGF0YSBpcyB0aGUgY3VycmVudCBkYXRhIGJsb2NrIHJlY2VpdmVkIG9uIHRoZSB3ZWIgc29ja2V0XHJcbiAgICovXHJcbiAgcHJvY2Vzc0RhdGEgKGRhdGE6IHN0cmluZyk6IGFueSB7XHJcbiAgICBpZiAoIWlzVHJ1dGh5KGRhdGEpKSByZXR1cm5cclxuICAgIHRoaXMuYWNjICs9IGRhdGFcclxuICAgIGxldCBjbWRTaXplID0gMFxyXG4gICAgdGhpcy5sb2dnZXIudmVyYm9zZShgUHJvY2VzcyBEYXRhIEFDQyBsZW5ndGg6ICAke3RoaXMuYWNjLmxlbmd0aH1gKVxyXG4gICAgd2hpbGUgKHRoaXMuYWNjLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc3RhdGVQcm9jZXNzb3I6IElTdGF0ZVByb2Nlc3NvciA9IHRoaXMuc3RhdGVQcm9jZXNzb3JGYWMuZ2V0UHJvY2Vzc29yKHRoaXMucGFyZW50LnN0YXRlKVxyXG4gICAgICBjb25zdCBwcmV2U3RhdGUgPSB0aGlzLnBhcmVudC5zdGF0ZVxyXG4gICAgICBjbWRTaXplID0gc3RhdGVQcm9jZXNzb3IucHJvY2Vzc1N0YXRlKHRoaXMuYWNjKVxyXG4gICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKGBTdGF0ZSAgJHtwcmV2U3RhdGV9ICBQcm9jZXNzZWQuIGNtZFNpemUgcmV0dXJuZWQgJHtjbWRTaXplfWApXHJcbiAgICAgIGlmIChjbWRTaXplID09PSAwKSByZXR1cm5cclxuICAgICAgLy8gY29uc29sZS5sb2coJ2JlZm9yZSBhY2MgJywgdGhpcy5hY2MpXHJcbiAgICAgIHRoaXMuYWNjID0gdGhpcy5hY2Muc3Vic3RyaW5nKGNtZFNpemUpXHJcbiAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoYHJlbWFpbmluZyBhY2MgICR7dGhpcy5hY2MubGVuZ3RofSBjb21tYW5kIHNpemU6ICR7Y21kU2l6ZX0gbmV3IHBhcmVudCBzdGF0ZTogJHt0aGlzLnBhcmVudC5zdGF0ZX1gKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUkZCU3RhdGUgKHN0YXRlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMucGFyZW50LnN0YXRlID0gc3RhdGVcclxuICB9XHJcbn1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgSVJMRURlY29kZXIgfSBmcm9tICcuLi9JbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBEZXNrdG9wIH0gZnJvbSAnLi4vRGVza3RvcCdcclxuaW1wb3J0IHsgSW1hZ2VIZWxwZXIgfSBmcm9tICcuLi9VdGlsaXRpZXMvSW1hZ2VIZWxwZXInXHJcbmNsYXNzIFJMRURlY29kZXIgaW1wbGVtZW50cyBJUkxFRGVjb2RlciB7XHJcbiAgcGFyZW50OiBEZXNrdG9wXHJcbiAgY29uc3RydWN0b3IgKHBhcmVudDogRGVza3RvcCkge1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcclxuICB9XHJcblxyXG4gIERlY29kZSAoZGF0YTogc3RyaW5nLCBwdHI6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzOiBudW1iZXIsIGRhdGFsZW46IG51bWJlcik6IGFueSB7XHJcbiAgICBjb25zdCBzdWJlbmNvZGluZyA9IGRhdGEuY2hhckNvZGVBdChwdHIrKylcclxuICAgIGxldCBpbmRleFxyXG4gICAgbGV0IHZcclxuICAgIGxldCBydW5sZW5ndGhkZWNvZGVcclxuICAgIGNvbnN0IHBhbGV0dGU6IGFueSA9IHt9XHJcbiAgICBsZXQgcmxlY291bnQgPSAwXHJcbiAgICBsZXQgcnVubGVuZ3RoID0gMFxyXG4gICAgbGV0IGlcclxuICAgIC8vIHRoaXMucGFyZW50LkRlYnVnKFwiUkVDVCBSTEUgKFwiICsgKGRhdGFsZW4gLSA1KSArIFwiLCBcIiArIHN1YmVuY29kaW5nICsgXCIpOlwiICsgcnN0cjJoZXgoZGF0YS5zdWJzdHJpbmcoMjEsIDIxICsgKGRhdGFsZW4gLSA1KSkpKTtcclxuICAgIGlmIChzdWJlbmNvZGluZyA9PT0gMCkge1xyXG4gICAgICAvLyBSQVcgZW5jb2RpbmdcclxuICAgICAgdGhpcy5wYXJlbnQubG9nZ2VyLnZlcmJvc2UoJ1JhdyBlbmNvZGluZycpXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzOyBpKyspIHsgSW1hZ2VIZWxwZXIuc2V0UGl4ZWwodGhpcy5wYXJlbnQsIGRhdGEuY2hhckNvZGVBdChwdHIrKykgKyAoKHRoaXMucGFyZW50LmJwcCA9PT0gMikgPyAoZGF0YS5jaGFyQ29kZUF0KHB0cisrKSA8PCA4KSA6IDApLCBpKSB9XHJcbiAgICAgIEltYWdlSGVscGVyLnB1dEltYWdlKHRoaXMucGFyZW50LCB4LCB5KVxyXG4gICAgfSBlbHNlIGlmIChzdWJlbmNvZGluZyA9PT0gMSkge1xyXG4gICAgICAvLyBTb2xpZCBjb2xvciB0aWxlXHJcbiAgICAgIHYgPSBkYXRhLmNoYXJDb2RlQXQocHRyKyspICsgKCh0aGlzLnBhcmVudC5icHAgPT09IDIpID8gKGRhdGEuY2hhckNvZGVBdChwdHIrKykgPDwgOCkgOiAwKVxyXG4gICAgICB0aGlzLnBhcmVudC5jYW52YXNDdHguZmlsbFN0eWxlID0gJ3JnYignICsgKCh0aGlzLnBhcmVudC5icHAgPT09IDEpID8gKGAkeyh2ICYgMjI0KX0sICR7KCh2ICYgMjgpIDw8IDMpfSwgJHtJbWFnZUhlbHBlci5maXhDb2xvcigodiAmIDMpIDw8IDYpfWApIDogKGAkeygodiA+PiA4KSAmIDI0OCl9LCAkeygodiA+PiAzKSAmIDI1Mil9LCR7KCh2ICYgMzEpIDw8IDMpfWApKSArICcpJ1xyXG5cclxuICAgICAgdGhpcy5wYXJlbnQubG9nZ2VyLnZlcmJvc2UoJ2ZpbGxzdHlsZTogJyArIHRoaXMucGFyZW50LmNhbnZhc0N0eC5maWxsU3R5bGUpXHJcbiAgICAgIGNvbnN0IHh4ID0gSW1hZ2VIZWxwZXIucm90WCh0aGlzLnBhcmVudCwgeCwgeSlcclxuICAgICAgeSA9IEltYWdlSGVscGVyLnJvdFkodGhpcy5wYXJlbnQsIHgsIHkpXHJcbiAgICAgIHggPSB4eFxyXG5cclxuICAgICAgdGhpcy5wYXJlbnQuY2FudmFzQ3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpXHJcbiAgICB9IGVsc2UgaWYgKHN1YmVuY29kaW5nID4gMSAmJiBzdWJlbmNvZGluZyA8IDE3KSB7IC8vIFBhY2tlZCBwYWxldHRlIGVuY29kZWQgdGlsZVxyXG4gICAgICAvLyBSZWFkIHRoZSBwYWxldHRlXHJcbiAgICAgIHRoaXMucGFyZW50LmxvZ2dlci52ZXJib3NlKCdSZWFkIHRoZSBwYWNrZWQgcGFsZXR0ZScpXHJcbiAgICAgIGxldCBiciA9IDQ7IGxldCBibSA9IDE1IC8vIGJyIGlzIEJpdFJlYWQgYW5kIGJtIGlzIEJpdE1hc2suIEJ5IGFkanVzdGluZyB0aGVzZSB0d28gd2UgY2FuIHN1cHBvcnQgYWxsIHRoZSB2YXJpYXRpb25zIGluIHRoaXMgZW5jb2RpbmcuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzdWJlbmNvZGluZzsgaSsrKSB7IHBhbGV0dGVbaV0gPSBkYXRhLmNoYXJDb2RlQXQocHRyKyspICsgKCh0aGlzLnBhcmVudC5icHAgPT09IDIpID8gKGRhdGEuY2hhckNvZGVBdChwdHIrKykgPDwgOCkgOiAwKSB9XHJcblxyXG4gICAgICAvLyBDb21wdXRlIGJpdHMgdG8gcmVhZCAmIGJpdCBtYXJrXHJcbiAgICAgIGlmIChzdWJlbmNvZGluZyA9PT0gMikgeyBiciA9IDE7IGJtID0gMSB9IGVsc2UgaWYgKHN1YmVuY29kaW5nIDw9IDQpIHsgYnIgPSAyOyBibSA9IDMgfVxyXG5cclxuICAgICAgLy8gRGlzcGxheSBhbGwgdGhlIGJpdHNcclxuICAgICAgd2hpbGUgKHJsZWNvdW50IDwgcyAmJiBwdHIgPCBkYXRhLmxlbmd0aCkgeyB2ID0gZGF0YS5jaGFyQ29kZUF0KHB0cisrKTsgZm9yIChpID0gKDggLSBicik7IGkgPj0gMDsgaSAtPSBicikgeyBJbWFnZUhlbHBlci5zZXRQaXhlbCh0aGlzLnBhcmVudCwgcGFsZXR0ZVsodiA+PiBpKSAmIGJtXSwgcmxlY291bnQrKykgfSB9XHJcbiAgICAgIEltYWdlSGVscGVyLnB1dEltYWdlKHRoaXMucGFyZW50LCB4LCB5KVxyXG4gICAgfSBlbHNlIGlmIChzdWJlbmNvZGluZyA9PT0gMTI4KSB7IC8vIFJMRSBlbmNvZGVkIHRpbGVcclxuICAgICAgdGhpcy5wYXJlbnQubG9nZ2VyLnZlcmJvc2UoJ1JMRSBlbmNvZGVkIHRpbGUnKVxyXG4gICAgICB3aGlsZSAocmxlY291bnQgPCBzICYmIHB0ciA8IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBydW4gY29sb3JcclxuICAgICAgICB2ID0gZGF0YS5jaGFyQ29kZUF0KHB0cisrKSArICgodGhpcy5wYXJlbnQuYnBwID09PSAyKSA/IChkYXRhLmNoYXJDb2RlQXQocHRyKyspIDw8IDgpIDogMClcclxuXHJcbiAgICAgICAgLy8gRGVjb2RlIHRoZSBydW4gbGVuZ3RoLiBUaGlzIGlzIHRoZSBmYXN0ZXN0IGFuZCBtb3N0IGNvbXBhY3Qgd2F5IEkgZm91bmQgdG8gZG8gdGhpcy5cclxuICAgICAgICBydW5sZW5ndGggPSAxOyBkbyB7IHJ1bmxlbmd0aCArPSAocnVubGVuZ3RoZGVjb2RlID0gZGF0YS5jaGFyQ29kZUF0KHB0cisrKSkgfSB3aGlsZSAocnVubGVuZ3RoZGVjb2RlID09PSAyNTUpXHJcblxyXG4gICAgICAgIC8vIERyYXcgYSBydW5cclxuICAgICAgICB3aGlsZSAoLS1ydW5sZW5ndGggPj0gMCkgeyBJbWFnZUhlbHBlci5zZXRQaXhlbCh0aGlzLnBhcmVudCwgdiwgcmxlY291bnQrKykgfVxyXG4gICAgICB9XHJcbiAgICAgIEltYWdlSGVscGVyLnB1dEltYWdlKHRoaXMucGFyZW50LCB4LCB5KVxyXG4gICAgfSBlbHNlIGlmIChzdWJlbmNvZGluZyA+IDEyOSkgeyAvLyBQYWxldHRlIFJMRSBlbmNvZGVkIHRpbGVcclxuICAgICAgdGhpcy5wYXJlbnQubG9nZ2VyLnZlcmJvc2UoJ1JlYWQgdGhlIFJMRSBwYWxldHRlJylcclxuICAgICAgLy8gUmVhZCB0aGUgcGFsZXR0ZVxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgKHN1YmVuY29kaW5nIC0gMTI4KTsgaSsrKSB7IHBhbGV0dGVbaV0gPSBkYXRhLmNoYXJDb2RlQXQocHRyKyspICsgKCh0aGlzLnBhcmVudC5icHAgPT09IDIpID8gKGRhdGEuY2hhckNvZGVBdChwdHIrKykgPDwgOCkgOiAwKSB9XHJcbiAgICAgIHRoaXMucGFyZW50LmxvZ2dlci52ZXJib3NlKCdEZWNvZGUgUkxFIG9uIHBhbGV0dGUnKVxyXG4gICAgICAvLyBEZWNvZGUgUkxFICBvbiBwYWxldHRlXHJcbiAgICAgIHdoaWxlIChybGVjb3VudCA8IHMgJiYgcHRyIDwgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAvLyBTZXR1cCB0aGUgcnVuLCBnZXQgdGhlIGNvbG9yIGluZGV4IGFuZCBnZXQgdGhlIGNvbG9yIGZyb20gdGhlIHBhbGV0dGUuXHJcbiAgICAgICAgcnVubGVuZ3RoID0gMTsgaW5kZXggPSBkYXRhLmNoYXJDb2RlQXQocHRyKyspOyB2ID0gcGFsZXR0ZVtpbmRleCAlIDEyOF1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGluZGV4IHN0YXJ0cyB3aXRoIGhpZ2ggb3JkZXIgYml0IDEsIHRoaXMgaXMgYSBydW4gYW5kIGRlY29kZSB0aGUgcnVuIGxlbmd0aC5cclxuICAgICAgICBpZiAoaW5kZXggPiAxMjcpIHsgZG8geyBydW5sZW5ndGggKz0gKHJ1bmxlbmd0aGRlY29kZSA9IGRhdGEuY2hhckNvZGVBdChwdHIrKykpIH0gd2hpbGUgKHJ1bmxlbmd0aGRlY29kZSA9PT0gMjU1KSB9XHJcblxyXG4gICAgICAgIC8vIERyYXcgYSBydW5cclxuICAgICAgICB3aGlsZSAoLS1ydW5sZW5ndGggPj0gMCkgeyBJbWFnZUhlbHBlci5zZXRQaXhlbCh0aGlzLnBhcmVudCwgdiwgcmxlY291bnQrKykgfVxyXG4gICAgICB9XHJcbiAgICAgIEltYWdlSGVscGVyLnB1dEltYWdlKHRoaXMucGFyZW50LCB4LCB5KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUkxFRGVjb2RlciB9XHJcbiIsImV4cG9ydCB7IERhdGFQcm9jZXNzb3IgfSBmcm9tICcuL0RhdGFQcm9jZXNzb3InXHJcbmV4cG9ydCB7IFJMRURlY29kZXIgfSBmcm9tICcuL1JMRURlY29kZXInXHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmludGVyZmFjZSBJTG9nZ2VyIHtcclxuICBkZWJ1ZzogKGxvZzogc3RyaW5nKSA9PiB2b2lkXHJcbiAgaW5mbzogKGxvZzogc3RyaW5nKSA9PiB2b2lkXHJcbiAgZXJyb3I6IChsb2c6IHN0cmluZykgPT4gdm9pZFxyXG4gIHdhcm46IChsb2c6IHN0cmluZykgPT4gdm9pZFxyXG4gIHZlcmJvc2U6IChsb2c6IHN0cmluZykgPT4gdm9pZFxyXG59XHJcbmVudW0gTG9nTGV2ZWwge1xyXG4gIFZFUkJPU0UgPSA1LFxyXG4gIElORk8gPSA0LFxyXG4gIERFQlVHID0gMyxcclxuICBXQVJOSU5HID0gMixcclxuICBFUlJPUiA9IDFcclxufVxyXG5leHBvcnQgeyBJTG9nZ2VyLCBMb2dMZXZlbCB9XHJcbiIsImV4cG9ydCB7IElEYXRhUHJvY2Vzc29yIH0gZnJvbSAnLi9JRGF0YVByb2Nlc3NvcidcclxuZXhwb3J0IHsgSUxvZ2dlciwgTG9nTGV2ZWwgfSBmcm9tICcuL0lMb2dnZXInXHJcbmV4cG9ydCB7IElNb2R1bGUgfSBmcm9tICcuL0lNb2R1bGUnXHJcbmV4cG9ydCB7IElSTEVEZWNvZGVyIH0gZnJvbSAnLi9JUkxFRGVjb2RlcidcclxuZXhwb3J0IHsgSVNlcnZlckN1dFRleHRIYW5kbGVyIH0gZnJvbSAnLi9JU2VydmVyQ3V0VGV4dEhhbmRsZXInXHJcbmV4cG9ydCB7IElTdGF0ZVByb2Nlc3NvciB9IGZyb20gJy4vSVN0YXRlUHJvY2Vzc29yJ1xyXG5leHBvcnQgeyBJQ29tbXVuaWNhdG9yLCBJS3ZtRGF0YUNvbW11bmljYXRvciB9IGZyb20gJy4vSUNvbW11bmljYXRvcidcclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgSUNvbW11bmljYXRvciwgSVN0YXRlUHJvY2Vzc29yLCBJUkxFRGVjb2RlciB9IGZyb20gJy4uL0ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFR5cGVDb252ZXJ0ZXIgfSBmcm9tICcuLi9Db252ZXJ0ZXInXHJcbmltcG9ydCB7IERlc2t0b3AgfSBmcm9tICcuLi9EZXNrdG9wJ1xyXG5pbXBvcnQgeyBJbWFnZUhlbHBlciwgQ29tbXNIZWxwZXIsIGlzVHJ1dGh5IH0gZnJvbSAnLi4vVXRpbGl0aWVzJ1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZSBlbmNvZGVkIFJGQiBwYWNrZXRzLiBTdXBwb3J0ZWQgZW5jb2RpbmdzLCBSQVcsIFpSTEUuXHJcbiAqL1xyXG5cclxuY2xhc3MgRW5jb2RpbmcgaW1wbGVtZW50cyBJU3RhdGVQcm9jZXNzb3Ige1xyXG4gIHdzU29ja2V0OiBJQ29tbXVuaWNhdG9yXHJcbiAgbmV4dDogSVN0YXRlUHJvY2Vzc29yXHJcblxyXG4gIHBhcmVudDogRGVza3RvcFxyXG4gIHJsZURlY29kZXI6IElSTEVEZWNvZGVyXHJcbiAgdXBkYXRlUkZCU3RhdGU6IGFueVxyXG4gIGNvbnN0cnVjdG9yIChjb21tOiBJQ29tbXVuaWNhdG9yLCBwYXJlbnQ6IERlc2t0b3AsIHJsZURlY29kZXI6IElSTEVEZWNvZGVyLCB1cGRhdGVSRkJTdGF0ZTogKHN0YXRlOiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgIHRoaXMud3NTb2NrZXQgPSBjb21tXHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxyXG4gICAgdGhpcy5ybGVEZWNvZGVyID0gcmxlRGVjb2RlclxyXG4gICAgdGhpcy51cGRhdGVSRkJTdGF0ZSA9IHVwZGF0ZVJGQlN0YXRlXHJcbiAgfVxyXG5cclxuICBwcm9jZXNzU3RhdGUgKGFjYzogc3RyaW5nKTogbnVtYmVyIHsgLy8gYWNjIGlzIHRoZSBhY2N1bXVsYXRlZCBieXRlIGVuY29kZWQgc3RyaW5nIHNvIGZhclxyXG4gICAgLy8gY29uc29sZS5sb2coVHlwZUNvbnZlcnRlci5yc3RyMmhleChhY2MpKVxyXG4gICAgbGV0IGNtZFNpemUgPSAwXHJcbiAgICBpZiAoYWNjLmxlbmd0aCA+PSAxMikge1xyXG4gICAgICBjb25zdCB4ID0gVHlwZUNvbnZlcnRlci5SZWFkU2hvcnQoYWNjLCAwKVxyXG4gICAgICBjb25zdCB5ID0gVHlwZUNvbnZlcnRlci5SZWFkU2hvcnQoYWNjLCAyKVxyXG4gICAgICBjb25zdCB3aWR0aCA9IFR5cGVDb252ZXJ0ZXIuUmVhZFNob3J0KGFjYywgNClcclxuICAgICAgY29uc3QgaGVpZ2h0ID0gVHlwZUNvbnZlcnRlci5SZWFkU2hvcnQoYWNjLCA2KVxyXG4gICAgICBjb25zdCBzID0gd2lkdGggKiBoZWlnaHRcclxuICAgICAgY29uc3QgZW5jb2RpbmcgPSBUeXBlQ29udmVydGVyLlJlYWRJbnQoYWNjLCA4KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzLCBlbmNvZGluZylcclxuICAgICAgaWYgKGVuY29kaW5nIDwgMTcpIHtcclxuICAgICAgICBpZiAod2lkdGggPCAxIHx8IHdpZHRoID4gNjQgfHwgaGVpZ2h0IDwgMSB8fCBoZWlnaHQgPiA2NCkge1xyXG4gICAgICAgICAgdGhpcy5wYXJlbnQubG9nZ2VyLmVycm9yKGBJbnZhbGlkIHRpbGUgc2l6ZSAoJHt3aWR0aH0sJHtoZWlnaHR9KSwgZGlzY29ubmVjdGluZy5gKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRpbGUgc2l6ZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIHNwYXJlIGJpdG1hcCB0byB0aGUgcmlndGggc2l6ZSBpZiBpdCdzIG5vdCBhbHJlYWR5LiBUaGlzIGFsbG93cyB1cyB0byByZWN5Y2xlIHRoZSBzcGFyZSBtb3N0IGlmIG5vdCBhbGwgdGhlIHRpbWUuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LnNwYXJldyAhPT0gd2lkdGggfHwgdGhpcy5wYXJlbnQuc3BhcmVoICE9PSBoZWlnaHQpIHtcclxuICAgICAgICAgIHRoaXMucGFyZW50LnNwYXJldyA9IHRoaXMucGFyZW50LnNwYXJldzIgPSB3aWR0aFxyXG4gICAgICAgICAgdGhpcy5wYXJlbnQuc3BhcmVoID0gdGhpcy5wYXJlbnQuc3BhcmVoMiA9IGhlaWdodFxyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5yb3RhdGlvbiA9PT0gMSB8fCB0aGlzLnBhcmVudC5yb3RhdGlvbiA9PT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5zcGFyZXcyID0gaGVpZ2h0XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnNwYXJlaDIgPSB3aWR0aFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgeHNwYWNlY2FjaGVuYW1lID0gYCR7dGhpcy5wYXJlbnQuc3BhcmV3Mn14JHt0aGlzLnBhcmVudC5zcGFyZWgyfWBcclxuICAgICAgICAgIHRoaXMucGFyZW50LnNwYXJlID0gdGhpcy5wYXJlbnQuc3BhcmVjYWNoZVt4c3BhY2VjYWNoZW5hbWVdXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBhcmVudC5zcGFyZSlcclxuICAgICAgICAgIGlmICghaXNUcnV0aHkodGhpcy5wYXJlbnQuc3BhcmUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnNwYXJlY2FjaGVbeHNwYWNlY2FjaGVuYW1lXSA9IHRoaXMucGFyZW50LnNwYXJlID0gdGhpcy5wYXJlbnQuY2FudmFzQ3R4LmNyZWF0ZUltYWdlRGF0YSh0aGlzLnBhcmVudC5zcGFyZXcyLCB0aGlzLnBhcmVudC5zcGFyZWgyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wYXJlbnQuc3BhcmVjYWNoZVt4c3BhY2VjYWNoZW5hbWVdKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVuY29kaW5nID09PSAweEZGRkZGRjIxKSB7XHJcbiAgICAgICAgLy8gRGVza3RvcCBTaXplICgweEZGRkZGRjIxLCAtMjIzKVxyXG4gICAgICAgIHRoaXMucGFyZW50LmxvZ2dlci52ZXJib3NlKCdEZXNrdG9wIHNpemUnKVxyXG4gICAgICAgIHRoaXMucGFyZW50LmNhbnZhc0N0eC5jYW52YXMud2lkdGggPSB0aGlzLnBhcmVudC5TY3JlZW5XaWR0aCA9IHRoaXMucGFyZW50LnJ3aWR0aCA9IHRoaXMucGFyZW50LndpZHRoID0gd2lkdGhcclxuICAgICAgICB0aGlzLnBhcmVudC5jYW52YXNDdHguY2FudmFzLmhlaWdodCA9IHRoaXMucGFyZW50LlNjcmVlbkhlaWdodCA9IHRoaXMucGFyZW50LnJoZWlnaHQgPSB0aGlzLnBhcmVudC5oZWlnaHQgPSBoZWlnaHRcclxuICAgICAgICB0aGlzLndzU29ja2V0LnNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgzLCAwLCAwLCAwLCAwLCAwKSArIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0cih0aGlzLnBhcmVudC53aWR0aCkgKyBUeXBlQ29udmVydGVyLlNob3J0VG9TdHIodGhpcy5wYXJlbnQuaGVpZ2h0KSkgLy8gRnJhbWVidWZmZXJVcGRhdGVSZXF1ZXN0XHJcbiAgICAgICAgY21kU2l6ZSA9IDEyXHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Lm9uU2NyZWVuU2l6ZUNoYW5nZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLnBhcmVudC5vblNjcmVlblNpemVDaGFuZ2UodGhpcy5wYXJlbnQuU2NyZWVuV2lkdGgsIHRoaXMucGFyZW50LlNjcmVlbkhlaWdodClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5wYXJlbnQuRGVidWcoXCJOZXcgZGVza3RvcCB3aWR0aDogXCIgKyB0aGlzLnBhcmVudC53aWR0aCArIFwiLCBoZWlnaHQ6IFwiICsgdGhpcy5wYXJlbnQuaGVpZ2h0KTtcclxuICAgICAgfSBlbHNlIGlmIChlbmNvZGluZyA9PT0gMCkge1xyXG4gICAgICAgIC8vIFJBVyBlbmNvZGluZ1xyXG5cclxuICAgICAgICBsZXQgcHRyID0gMTI7IGNvbnN0IGNzID0gMTIgKyAocyAqIHRoaXMucGFyZW50LmJwcClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnUkFXIGVuY29kaW5nICcsIGFjYy5sZW5ndGgsIGNzKVxyXG4gICAgICAgIGlmIChhY2MubGVuZ3RoIDwgY3MpIHJldHVybiAwIC8vIENoZWNrIHdlIGhhdmUgYWxsIHRoZSBkYXRhIG5lZWRlZCBhbmQgd2UgY2FuIG9ubHkgZHJhdyA2NHg2NCB0aWxlcy5cclxuICAgICAgICBjbWRTaXplID0gY3NcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZW5jb2RpbmcgY21kU2l6ZScsIGVuY29kaW5nLCB0aGlzLmNtZFNpemUpXHJcblxyXG4gICAgICAgIC8vIENSSVRJQ0FMIExPT1AsIG9wdGltaXplIHRoaXMgYXMgbXVjaCBhcyBwb3NzaWJsZVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgczsgaSsrKSB7XHJcbiAgICAgICAgICBJbWFnZUhlbHBlci5zZXRQaXhlbCh0aGlzLnBhcmVudCwgYWNjLmNoYXJDb2RlQXQocHRyKyspICsgKCh0aGlzLnBhcmVudC5icHAgPT09IDIpID8gKGFjYy5jaGFyQ29kZUF0KHB0cisrKSA8PCA4KSA6IDApLCBpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBJbWFnZUhlbHBlci5wdXRJbWFnZSh0aGlzLnBhcmVudCwgeCwgeSlcclxuICAgICAgfSBlbHNlIGlmIChlbmNvZGluZyA9PT0gMTYpIHtcclxuICAgICAgICAvLyBaUkxFIGVuY29kaW5nXHJcbiAgICAgICAgaWYgKGFjYy5sZW5ndGggPCAxNikgcmV0dXJuIDBcclxuICAgICAgICBjb25zdCBkYXRhbGVuID0gVHlwZUNvbnZlcnRlci5SZWFkSW50KGFjYywgMTIpXHJcbiAgICAgICAgaWYgKGFjYy5sZW5ndGggPCAoMTYgKyBkYXRhbGVuKSkgcmV0dXJuIDBcclxuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKFwiUkVDVCBaUkxFIChcIiArIHggKyBcIixcIiArIHkgKyBcIixcIiArIHdpZHRoICsgXCIsXCIgKyBoZWlnaHQgKyBcIikgTEVOID0gXCIgKyBkYXRhbGVuKTtcclxuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKFwiUkVDVCBaUkxFIExFTjogXCIgKyBUeXBlQ29udmVydGVyLlJlYWRTaG9ydFgoYWNjLCAxNykgKyBcIiwgREFUQTogXCIgKyBUeXBlQ29udmVydGVyLnJzdHIyaGV4KGFjYy5zdWJzdHJpbmcoMTYpKSk7XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3MgdGhlIFpMaWIgaGVhZGVyIGlmIHRoaXMgaXMgdGhlIGZpcnN0IGJsb2NrXHJcbiAgICAgICAgY29uc3QgcHRyID0gMTY7IGNvbnN0IGRlbHRhID0gNTsgY29uc3QgZHggPSAwXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coVHlwZUNvbnZlcnRlci5yc3RyMmhleChhY2MpKVxyXG4gICAgICAgIC8vIDAwMDAwMDAwMDA0MDAwNDAwMDAwMDAxMDAwMDAwMDBBNzg5QzYyNjQwMDAwMDAwMEZGRkYwMDQwMDAwMDAwNDAwMDQwMDAwMDAwMTAwMDAwMDAwODYyNjQwMDAwMDAwMEZGRkZcclxuICAgICAgICBpZiAoZGF0YWxlbiA+IDUgJiYgYWNjLmNoYXJDb2RlQXQocHRyKSA9PT0gMCAmJiBUeXBlQ29udmVydGVyLlJlYWRTaG9ydFgoYWNjLCBwdHIgKyAxKSA9PT0gKGRhdGFsZW4gLSBkZWx0YSkpIHtcclxuICAgICAgICAgIC8vIFRoaXMgaXMgYW4gdW5jb21wcmVzc2VkIFpMaWIgZGF0YSBibG9ja1xyXG4gICAgICAgICAgdGhpcy5ybGVEZWNvZGVyLkRlY29kZShhY2MsIHB0ciArIDUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHMsIGRhdGFsZW4pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFRoaXMgaXMgY29tcHJlc3NlZCBaTGliIGRhdGEsIGRlY29tcHJlc3MgYW5kIHByb2Nlc3MgaXQuXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWNjbGVuZ3RoPScsYWNjLmxlbmd0aCwncHRyPScscHRyLCdkYXRhbGVuPScsZGF0YWxlbiwnZHg9JyxkeClcclxuICAgICAgICAgIGNvbnN0IHpsaWJzdHJpbmcgPSBhY2Muc3Vic3RyaW5nKHB0ciwgcHRyICsgZGF0YWxlbiAtIGR4KVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coemxpYnN0cmluZylcclxuICAgICAgICAgIGNvbnN0IGFyciA9IHRoaXMucGFyZW50LmluZmxhdGUuaW5mbGF0ZSh6bGlic3RyaW5nKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VuemlwcGVkIHN0cmVhbScsIGFycilcclxuICAgICAgICAgIGlmIChhcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJsZURlY29kZXIuRGVjb2RlKGFyciwgMCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgcywgYXJyLmxlbmd0aClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmxvZ2dlci5lcnJvcignSW52YWxpZCBkZWZsYXRlIGRhdGEuJylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGRlZmxhdGUgZGF0YScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbWRTaXplID0gMTYgKyBkYXRhbGVuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQubG9nZ2VyLmVycm9yKGBVbmtub3duIEVuY29kaW5nOiAke2VuY29kaW5nfSAsIEhFWDogJHtUeXBlQ29udmVydGVyLnJzdHIyaGV4KGFjYyl9YClcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gRW5jb2Rpbmc6ICR7ZW5jb2Rpbmd9YClcclxuICAgICAgfVxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RhdGUgJywgdGhpcy5wYXJlbnQuc3RhdGUsICdhY2MgJywgYWNjLmxlbmd0aClcclxuICAgICAgaWYgKC0tdGhpcy5wYXJlbnQuc3RhdGUgPT09IDEwMCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50LmxvZ2dlci5kZWJ1ZygnRnJhbWUgY29tcGxldGVkLiBVcGRhdGUgc3RhdGUgYW5kIHJlcXVlc3QgbmV3IGZyYW1lJylcclxuICAgICAgICB0aGlzLnVwZGF0ZVJGQlN0YXRlKDQpXHJcbiAgICAgICAgY29uc3Qgc2VuZFJlZnJlc2hDYWxsYmFjayA9ICgpOiBhbnkgPT4gQ29tbXNIZWxwZXIuc2VuZFJlZnJlc2godGhpcy5wYXJlbnQsIHRoaXMud3NTb2NrZXQpXHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmZyYW1lUmF0ZURlbGF5ID09PSAwKSB7XHJcbiAgICAgICAgICBDb21tc0hlbHBlci5zZW5kUmVmcmVzaCh0aGlzLnBhcmVudCwgdGhpcy53c1NvY2tldCkgLy8gQXNrIGZvciBuZXcgZnJhbWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0VGltZW91dChzZW5kUmVmcmVzaENhbGxiYWNrLCB0aGlzLnBhcmVudC5mcmFtZVJhdGVEZWxheSkgLy8gSG9sZCB4IG1pbGlzZWNvbmRzIGJlZm9yZSBhc2tpbmcgZm9yIGEgbmV3IGZyYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY21kU2l6ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRW5jb2RpbmcgfVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBJQ29tbXVuaWNhdG9yLCBJU3RhdGVQcm9jZXNzb3IsIElTZXJ2ZXJDdXRUZXh0SGFuZGxlciB9IGZyb20gJy4uL0ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFR5cGVDb252ZXJ0ZXIgfSBmcm9tICcuLi9Db252ZXJ0ZXInXHJcblxyXG5jbGFzcyBGcmFtZUJ1ZmZlckJlbGxTZXJ2ZXJDdXRUZXh0IGltcGxlbWVudHMgSVN0YXRlUHJvY2Vzc29yIHtcclxuICB3c1NvY2tldDogSUNvbW11bmljYXRvclxyXG4gIG5leHQ6IElTdGF0ZVByb2Nlc3NvclxyXG4gIGNtZFNpemU6IG51bWJlclxyXG4gIHNlcnZlckN1dFRleHRIYW5kbGVyOiBJU2VydmVyQ3V0VGV4dEhhbmRsZXJcclxuICB1cGRhdGVSRkJTdGF0ZTogYW55XHJcbiAgY29uc3RydWN0b3IgKGNvbW06IElDb21tdW5pY2F0b3IsIHNlcnZlckN1dFRleHRIYW5kbGVyOiBJU2VydmVyQ3V0VGV4dEhhbmRsZXIsIHVwZGF0ZVJGQlN0YXRlOiAoc3RhdGU6IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgdGhpcy53c1NvY2tldCA9IGNvbW1cclxuICAgIHRoaXMuc2VydmVyQ3V0VGV4dEhhbmRsZXIgPSBzZXJ2ZXJDdXRUZXh0SGFuZGxlclxyXG4gICAgdGhpcy51cGRhdGVSRkJTdGF0ZSA9IHVwZGF0ZVJGQlN0YXRlXHJcbiAgfVxyXG5cclxuICBwcm9jZXNzU3RhdGUgKGFjYzogc3RyaW5nKTogbnVtYmVyIHsgLy8gYWNjIGlzIHRoZSBhY2N1bXVsYXRlZCBieXRlIGVuY29kZWQgc3RyaW5nIHNvIGZhclxyXG4gICAgbGV0IGNtZHNpemUgPSAwXHJcbiAgICBsZXQgbGVuID0gMFxyXG4gICAgc3dpdGNoIChhY2MuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICBjYXNlIDA6IC8vIEZyYW1lYnVmZmVyVXBkYXRlXHJcbiAgICAgICAgaWYgKGFjYy5sZW5ndGggPCA0KSByZXR1cm4gMFxyXG4gICAgICAgIHRoaXMudXBkYXRlUkZCU3RhdGUoMTAwICsgVHlwZUNvbnZlcnRlci5SZWFkU2hvcnQoYWNjLCAyKSkgLy8gUmVhZCB0aGUgbnVtYmVyIG9mIHRpbGVzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHNlbnQsIGFkZCAxMDAgYW5kIHVzZSB0aGF0IGFzIG91ciBwcm90b2NvbCBzdGF0ZS5cclxuICAgICAgICBjbWRzaXplID0gNFxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgMjogLy8gVGhpcyBpcyB0aGUgYmVsbCwgZG8gbm90aGluZy5cclxuICAgICAgICBjbWRzaXplID0gMVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgMzogLy8gVGhpcyBpcyBTZXJ2ZXJDdXRUZXh0XHJcbiAgICAgICAgaWYgKGFjYy5sZW5ndGggPCA4KSByZXR1cm4gMFxyXG4gICAgICAgIGxlbiA9IFR5cGVDb252ZXJ0ZXIuUmVhZEludChhY2MsIDQpICsgOFxyXG4gICAgICAgIGlmIChhY2MubGVuZ3RoIDwgbGVuKSByZXR1cm4gMFxyXG4gICAgICAgIGNtZHNpemUgPSB0aGlzLnNlcnZlckN1dFRleHRIYW5kbGVyLmhhbmRsZVNlcnZlckN1dFRleHQoYWNjKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY21kc2l6ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRnJhbWVCdWZmZXJCZWxsU2VydmVyQ3V0VGV4dCB9XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCB7IElDb21tdW5pY2F0b3IsIElTdGF0ZVByb2Nlc3NvciB9IGZyb20gJy4uL0ludGVyZmFjZXMnXHJcblxyXG4vKipcclxuICogSW5pdGlhbCBoYW5kc2hha2UgYW5kIHNlbmQgUkZCIHByb3RvY29sIHN1cHBvcnRlZCBvbiBjbGllbnRcclxuICovXHJcbmNsYXNzIEhhbmRzaGFrZVN0YXRlIGltcGxlbWVudHMgSVN0YXRlUHJvY2Vzc29yIHtcclxuICB3c1NvY2tldDogSUNvbW11bmljYXRvclxyXG4gIG5leHQ6IElTdGF0ZVByb2Nlc3NvclxyXG5cclxuICB1cGRhdGVSRkJTdGF0ZTogYW55XHJcbiAgY29uc3RydWN0b3IgKGNvbW06IElDb21tdW5pY2F0b3IsIHVwZGF0ZVJGQlN0YXRlOiAoc3RhdGU6IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgdGhpcy53c1NvY2tldCA9IGNvbW1cclxuICAgIHRoaXMudXBkYXRlUkZCU3RhdGUgPSB1cGRhdGVSRkJTdGF0ZVxyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1N0YXRlIChhY2M6IHN0cmluZyk6IG51bWJlciB7IC8vIGFjYyBpcyB0aGUgYWNjdW11bGF0ZWQgYnl0ZSBlbmNvZGVkIHN0cmluZyBzbyBmYXJcclxuICAgIGxldCBjbWRTaXplID0gMFxyXG4gICAgaWYgKGFjYy5sZW5ndGggPj0gMTIpIHtcclxuICAgICAgLy8gR2V0dGluZyBoYW5kc2hha2UgJiB2ZXJzaW9uXHJcbiAgICAgIGNtZFNpemUgPSAxMlxyXG4gICAgICAvLyBpZiAob2JqLmFjYy5zdWJzdHJpbmcoMCwgNCkgIT0gXCJSRkIgXCIpIHsgcmV0dXJuIG9iai5TdG9wKCk7IH1cclxuICAgICAgLy8gdmFyIHZlcnNpb24gPSBwYXJzZUZsb2F0KG9iai5hY2Muc3Vic3RyaW5nKDQsIDExKSk7XHJcbiAgICAgIC8vIG9iai5EZWJ1ZyhcIktWZXJzaW9uOiBcIiArIHZlcnNpb24pO1xyXG4gICAgICB0aGlzLnVwZGF0ZVJGQlN0YXRlKDEpXHJcbiAgICAgIHRoaXMud3NTb2NrZXQuc2VuZCgnUkZCIDAwMy4wMDhcXG4nKVxyXG5cclxuICAgICAgcmV0dXJuIGNtZFNpemVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgSGFuZHNoYWtlU3RhdGUgfVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBJQ29tbXVuaWNhdG9yLCBJU3RhdGVQcm9jZXNzb3IgfSBmcm9tICcuLi9JbnRlcmZhY2VzJ1xyXG5cclxuLyoqXHJcbiAqIEdldCBzZWN1cml0eSBvcHRpb25zIGZyb20gcmVtb3RlIGRldmljZS4gU2VuZCBhdXRoIHR5cGUuXHJcbiAqL1xyXG5jbGFzcyBTZWN1cml0eU9wdGlvbnMgaW1wbGVtZW50cyBJU3RhdGVQcm9jZXNzb3Ige1xyXG4gIHdzU29ja2V0OiBJQ29tbXVuaWNhdG9yXHJcbiAgbmV4dDogSVN0YXRlUHJvY2Vzc29yXHJcbiAgdXBkYXRlUkZCU3RhdGU6IGFueVxyXG4gIGNvbnN0cnVjdG9yIChjb21tOiBJQ29tbXVuaWNhdG9yLCB1cGRhdGVSRkJTdGF0ZTogKHN0YXRlOiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgIHRoaXMud3NTb2NrZXQgPSBjb21tXHJcbiAgICB0aGlzLnVwZGF0ZVJGQlN0YXRlID0gdXBkYXRlUkZCU3RhdGVcclxuICB9XHJcblxyXG4gIHByb2Nlc3NTdGF0ZSAoYWNjOiBzdHJpbmcpOiBudW1iZXIgeyAvLyBhY2MgaXMgdGhlIGFjY3VtdWxhdGVkIGJ5dGUgZW5jb2RlZCBzdHJpbmcgc28gZmFyXHJcbiAgICBsZXQgY21kU2l6ZSA9IDBcclxuICAgIGlmIChhY2MubGVuZ3RoID49IDEpIHtcclxuICAgICAgLy8gR2V0dGluZyBzZWN1cml0eSBvcHRpb25zXHJcbiAgICAgIGNtZFNpemUgPSBhY2MuY2hhckNvZGVBdCgwKSArIDFcclxuICAgICAgdGhpcy53c1NvY2tldC5zZW5kKFN0cmluZy5mcm9tQ2hhckNvZGUoMSkpIC8vIFNlbmQgdGhlIFwiTm9uZVwiIHNlY3VyaXR5IHR5cGUuIFNpbmNlIHdlIGFscmVhZHkgYXV0aGVudGljYXRlZCB1c2luZyByZWRpcmVjdGlvbiBkaWdlc3QgYXV0aCwgd2UgZG9uJ3QgbmVlZCB0byBkbyB0aGlzIGFnYWluLlxyXG4gICAgICB0aGlzLnVwZGF0ZVJGQlN0YXRlKDIpXHJcbiAgICAgIHJldHVybiBjbWRTaXplXHJcbiAgICB9XHJcbiAgICByZXR1cm4gMFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU2VjdXJpdHlPcHRpb25zIH1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgSUNvbW11bmljYXRvciwgSVN0YXRlUHJvY2Vzc29yIH0gZnJvbSAnLi4vSW50ZXJmYWNlcydcclxuaW1wb3J0IHsgVHlwZUNvbnZlcnRlciB9IGZyb20gJy4uL0NvbnZlcnRlcidcclxuXHJcbi8qKlxyXG4gKiBHZXQgYXV0aCBzZWN1cml0eSByZXNwb25zZSBhbmQgcHJvY2VlZCB3aXRoIHNoYXJlIGRlc2t0b3AgZmxhZ1xyXG4gKi9cclxuY2xhc3MgU2VjdXJpdHlSZXNwb25zZSBpbXBsZW1lbnRzIElTdGF0ZVByb2Nlc3NvciB7XHJcbiAgd3NTb2NrZXQ6IElDb21tdW5pY2F0b3JcclxuICBuZXh0OiBJU3RhdGVQcm9jZXNzb3JcclxuICB1cGRhdGVSRkJTdGF0ZTogYW55XHJcbiAgY29uc3RydWN0b3IgKGNvbW06IElDb21tdW5pY2F0b3IsIHVwZGF0ZVJGQlN0YXRlOiAoc3RhdGU6IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgdGhpcy53c1NvY2tldCA9IGNvbW1cclxuICAgIHRoaXMudXBkYXRlUkZCU3RhdGUgPSB1cGRhdGVSRkJTdGF0ZVxyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1N0YXRlIChhY2M6IHN0cmluZyk6IG51bWJlciB7IC8vIGFjYyBpcyB0aGUgYWNjdW11bGF0ZWQgYnl0ZSBlbmNvZGVkIHN0cmluZyBzbyBmYXJcclxuICAgIGxldCBjbWRTaXplID0gMFxyXG4gICAgaWYgKGFjYy5sZW5ndGggPj0gNCkge1xyXG4gICAgICAvLyBHZXR0aW5nIHNlY3VyaXR5IHJlc3BvbnNlXHJcbiAgICAgIGNtZFNpemUgPSA0XHJcbiAgICAgIGlmIChUeXBlQ29udmVydGVyLlJlYWRJbnQoYWNjLCAwKSAhPT0gMCkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlYXNvbkxlbmd0aCA9IFR5cGVDb252ZXJ0ZXIuUmVhZEludChhY2MsIDQpXHJcbiAgICAgICAgLy8gY29uc3QgcmVhc29uU3RyaW5nID0gYWNjLnN1YnN0cmluZyg4LCA4ICsgcmVhc29uTGVuZ3RoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlYXNvblN0cmluZylcclxuICAgICAgICAvLyBOZWVkIHRvIGJlIGZpeGVkLiBDbG9zZSB0aGUgY29ubmVjdGlvbiB3aGVuIHRoaXMgaGFwcGVuc1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IuIFN0b3BwaW5nLiBTZWN1cml0eSByZXNwb25zZSBub3QgTm9uZS4nKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMud3NTb2NrZXQuc2VuZChTdHJpbmcuZnJvbUNoYXJDb2RlKDEpKSAvLyBTZW5kIHNoYXJlIGRlc2t0b3AgZmxhZ1xyXG4gICAgICB0aGlzLnVwZGF0ZVJGQlN0YXRlKDMpXHJcbiAgICAgIHJldHVybiBjbWRTaXplXHJcbiAgICB9XHJcbiAgICByZXR1cm4gMFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU2VjdXJpdHlSZXNwb25zZSB9XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCB7IElLdm1EYXRhQ29tbXVuaWNhdG9yLCBJU2VydmVyQ3V0VGV4dEhhbmRsZXIgfSBmcm9tICcuLi9JbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBEZXNrdG9wIH0gZnJvbSAnLi4vRGVza3RvcCdcclxuaW1wb3J0IHsgVHlwZUNvbnZlcnRlciB9IGZyb20gJy4uL0NvbnZlcnRlcidcclxuaW1wb3J0IHsgaXNUcnV0aHkgfSBmcm9tICcuLi9VdGlsaXRpZXMvVXRpbGl0eU1ldGhvZHMnXHJcbmNsYXNzIFNlcnZlckN1dFRleHRIYW5kbGVyIGltcGxlbWVudHMgSVNlcnZlckN1dFRleHRIYW5kbGVyIHtcclxuICB3c1NvY2tldDogSUt2bURhdGFDb21tdW5pY2F0b3JcclxuICBwYXJlbnQ6IERlc2t0b3BcclxuICBjb25zdHJ1Y3RvciAoY29tbTogSUt2bURhdGFDb21tdW5pY2F0b3IsIHBhcmVudDogRGVza3RvcCkge1xyXG4gICAgdGhpcy53c1NvY2tldCA9IGNvbW1cclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTZXJ2ZXJDdXRUZXh0IChhY2M6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBpZiAoYWNjLmxlbmd0aCA8IDgpIHJldHVybiAwXHJcbiAgICBjb25zdCBsZW4gPSBUeXBlQ29udmVydGVyLlJlYWRJbnQoYWNjLCA0KSArIDhcclxuICAgIGlmIChhY2MubGVuZ3RoIDwgbGVuKSByZXR1cm4gMFxyXG5cclxuICAgIGlmICh0aGlzLnBhcmVudC5vbkt2bURhdGEgIT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBkID0gYWNjLnN1YnN0cmluZyg4LCBsZW4pXHJcbiAgICAgIGlmICgoZC5sZW5ndGggPj0gMTYpICYmIChkLnN1YnN0cmluZygwLCAxNSkgPT09ICdcXDBLdm1EYXRhQ2hhbm5lbCcpKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudC5rdm1EYXRhU3VwcG9ydGVkKSB7IHRoaXMucGFyZW50Lmt2bURhdGFTdXBwb3J0ZWQgPSB0cnVlOyBjb25zb2xlLmxvZygnS1ZNIERhdGEgQ2hhbm5lbCBTdXBwb3J0ZWQuJykgfVxyXG4gICAgICAgIGlmICgoKHRoaXMucGFyZW50Lm9uS3ZtRGF0YUFjayA9PT0gLTEpICYmIChkLmxlbmd0aCA9PT0gMTYpKSB8fCAoZC5jaGFyQ29kZUF0KDE1KSAhPT0gMCkpIHsgdGhpcy5wYXJlbnQub25Ldm1EYXRhQWNrID0gdHJ1ZSB9XHJcbiAgICAgICAgaWYgKGlzVHJ1dGh5KHRoaXMucGFyZW50LnVybHZhcnMpICYmIGlzVHJ1dGh5KHRoaXMucGFyZW50LnVybHZhcnMua3ZtZGF0YXRyYWNlKSkgeyBjb25zb2xlLmxvZyhgS1ZNLVJlY3YoKCR7ZC5sZW5ndGggLSAxNn0pKTogICR7ZC5zdWJzdHJpbmcoMTYpfWApIH1cclxuICAgICAgICBpZiAoZC5sZW5ndGggPiAxNikgeyB0aGlzLnBhcmVudC5vbkt2bURhdGEoZC5zdWJzdHJpbmcoMTYpKSB9IC8vIEV2ZW50IHRoZSBkYXRhIGFuZCBhY2tcclxuICAgICAgICBpZiAoKHRoaXMucGFyZW50Lm9uS3ZtRGF0YUFjayA9PT0gdHJ1ZSkgJiYgKHRoaXMucGFyZW50Lm9uS3ZtRGF0YVBlbmRpbmcubGVuZ3RoID4gMCkpIHsgdGhpcy53c1NvY2tldC5vblNlbmRLdm1EYXRhKHRoaXMucGFyZW50Lm9uS3ZtRGF0YVBlbmRpbmcuc2hpZnQoKSkgfSAvLyBTZW5kIHBlbmRpbmcgZGF0YVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBTZXJ2ZXJDdXRUZXh0SGFuZGxlciB9XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCB7IElDb21tdW5pY2F0b3IsIElTdGF0ZVByb2Nlc3NvciB9IGZyb20gJy4uL0ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFR5cGVDb252ZXJ0ZXIgfSBmcm9tICcuLi9Db252ZXJ0ZXInXHJcbmltcG9ydCB7IERlc2t0b3AgfSBmcm9tICcuLi9EZXNrdG9wJ1xyXG5pbXBvcnQgeyBDb21tc0hlbHBlciB9IGZyb20gJy4uL1V0aWxpdGllcy9Db21tc0hlbHBlcidcclxuXHJcbi8qKlxyXG4gKiBTZXQgc3VwcG9ydGVkIGVuY29kaW5ncyBmb3IgUkZCXHJcbiAqL1xyXG5jbGFzcyBTZXJ2ZXJJbml0IGltcGxlbWVudHMgSVN0YXRlUHJvY2Vzc29yIHtcclxuICB3c1NvY2tldDogSUNvbW11bmljYXRvclxyXG4gIG5leHQ6IElTdGF0ZVByb2Nlc3NvclxyXG5cclxuICBwYXJlbnQ6IERlc2t0b3BcclxuICB1cGRhdGVSRkJTdGF0ZTogYW55XHJcbiAgY29uc3RydWN0b3IgKGNvbW06IElDb21tdW5pY2F0b3IsIHBhcmVudDogRGVza3RvcCwgdXBkYXRlUkZCU3RhdGU6IChzdGF0ZTogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLndzU29ja2V0ID0gY29tbVxyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcclxuICAgIHRoaXMudXBkYXRlUkZCU3RhdGUgPSB1cGRhdGVSRkJTdGF0ZVxyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1N0YXRlIChhY2M6IHN0cmluZyk6IG51bWJlciB7IC8vIGFjYyBpcyB0aGUgYWNjdW11bGF0ZWQgYnl0ZSBlbmNvZGVkIHN0cmluZyBzbyBmYXJcclxuICAgIGxldCBjbWRTaXplOiBudW1iZXIgPSAwXHJcbiAgICBpZiAoYWNjLmxlbmd0aCA+PSAyNCkge1xyXG4gICAgICAvLyBHZXR0aW5nIHNlcnZlciBpbml0XHJcblxyXG4gICAgICB0aGlzLnBhcmVudC5yb3RhdGlvbiA9IDAgLy8gV2UgZG9uJ3QgY3VycmVudGx5IHN1cHBvcnQgc2NyZWVuIGluaXQgd2hpbGUgcm90YXRlZC5cclxuICAgICAgY29uc3QgbmFtZWxlbiA9IFR5cGVDb252ZXJ0ZXIuUmVhZEludChhY2MsIDIwKVxyXG4gICAgICBpZiAoYWNjLmxlbmd0aCA8IDI0ICsgbmFtZWxlbikgcmV0dXJuIDBcclxuICAgICAgY21kU2l6ZSA9IDI0ICsgbmFtZWxlblxyXG5cclxuICAgICAgaWYgKHRoaXMucGFyZW50LnVwZGF0ZVNjcmVlbkRpbWVuc2lvbnMgIT0gbnVsbCkgeyB0aGlzLnBhcmVudC51cGRhdGVTY3JlZW5EaW1lbnNpb25zKFR5cGVDb252ZXJ0ZXIuUmVhZFNob3J0KGFjYywgMCksIFR5cGVDb252ZXJ0ZXIuUmVhZFNob3J0KGFjYywgMikpIH1cclxuICAgICAgdGhpcy5wYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy53aWR0aCA9IHRoaXMucGFyZW50LlNjcmVlbldpZHRoID0gdGhpcy5wYXJlbnQucndpZHRoID0gdGhpcy5wYXJlbnQud2lkdGggPSBUeXBlQ29udmVydGVyLlJlYWRTaG9ydChhY2MsIDApXHJcbiAgICAgIHRoaXMucGFyZW50LmNhbnZhc0N0eC5jYW52YXMuaGVpZ2h0ID0gdGhpcy5wYXJlbnQuU2NyZWVuSGVpZ2h0ID0gdGhpcy5wYXJlbnQucmhlaWdodCA9IHRoaXMucGFyZW50LmhlaWdodCA9IFR5cGVDb252ZXJ0ZXIuUmVhZFNob3J0KGFjYywgMilcclxuICAgICAgLy8gb2JqLmNhbnZhcy5jYW52YXMud2lkdGggPSBvYmoucndpZHRoID0gb2JqLndpZHRoID0gb2JqLlNjcmVlbldpZHRoID0gUmVhZFNob3J0KG9iai5hY2MsIDApO1xyXG4gICAgICAvLyBvYmouY2FudmFzLmNhbnZhcy5oZWlnaHQgPSBvYmoucmhlaWdodCA9IG9iai5oZWlnaHQgPSBvYmouU2NyZWVuSGVpZ2h0ID0gUmVhZFNob3J0KG9iai5hY2MsIDIpO1xyXG5cclxuICAgICAgLy8gU2V0RW5jb2RpbmdzLCB3aXRoIEFNVCB3ZSBjYW4ndCBvbWl0IFJBVywgbXVzdCBiZSBzcGVjaWZpZWQuXHJcbiAgICAgIC8vIEludGVsIEFNVCBzdXBwb3J0cyBlbmNvZGluZ3M6IFJBVyAoMCksIFpSTEUgKDE2KSwgRGVza3RvcCBTaXplICgweEZGRkZGRjIxLCAtMjIzKSwgS1ZNIERhdGEgQ2hhbm5lbCAoMTA5MilcclxuXHJcbiAgICAgIGxldCBzdXBwb3J0ZWRFbmNvZGluZ3M6IHN0cmluZyA9ICcnXHJcbiAgICAgIGlmICh0aGlzLnBhcmVudC51c2VaUkxFKSBzdXBwb3J0ZWRFbmNvZGluZ3MgKz0gVHlwZUNvbnZlcnRlci5JbnRUb1N0cigxNilcclxuICAgICAgc3VwcG9ydGVkRW5jb2RpbmdzICs9IFR5cGVDb252ZXJ0ZXIuSW50VG9TdHIoMClcclxuXHJcbiAgICAgIHN1cHBvcnRlZEVuY29kaW5ncyArPSBUeXBlQ29udmVydGVyLkludFRvU3RyKDEwOTIpXHJcbiAgICAgIHRoaXMucGFyZW50LmxvZ2dlci52ZXJib3NlKCdTZW5kIHN1cHBvcnRlZCBlbmNvZGluZ3MnKVxyXG4gICAgICB0aGlzLndzU29ja2V0LnNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgyLCAwKSArIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0cigoc3VwcG9ydGVkRW5jb2RpbmdzLmxlbmd0aCAvIDQpICsgMSkgKyBzdXBwb3J0ZWRFbmNvZGluZ3MgKyBUeXBlQ29udmVydGVyLkludFRvU3RyKC0yMjMpKSAvLyBTdXBwb3J0ZWQgRW5jb2RpbmdzICsgRGVza3RvcCBTaXplXHJcblxyXG4gICAgICAvLyBTZXQgdGhlIHBpeGVsIGVuY29kaW5nIHRvIHNvbWV0aGluZyBtdWNoIHNtYWxsZXJcclxuICAgICAgLy8gb2JqLlNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgwLCAwLCAwLCAwLCAxNiwgMTYsIDAsIDEpICsgU2hvcnRUb1N0cigzMSkgKyBTaG9ydFRvU3RyKDYzKSArIFNob3J0VG9TdHIoMzEpICsgU3RyaW5nLmZyb21DaGFyQ29kZSgxMSwgNSwgMCwgMCwgMCwgMCkpOyAgICAgICAgICAgICAgICAgICAgIC8vIFNldHVwIDE2IGJpdCBjb2xvciBSR0I1NjUgKFRoaXMgaXMgdGhlIGRlZmF1bHQsIHNvIHdlIGRvbid0IG5lZWQgdG8gc2V0IGl0KVxyXG4gICAgICBpZiAodGhpcy5wYXJlbnQuYnBwID09PSAxKSB7IHRoaXMud3NTb2NrZXQuc2VuZChTdHJpbmcuZnJvbUNoYXJDb2RlKDAsIDAsIDAsIDAsIDgsIDgsIDAsIDEpICsgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyKDcpICsgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyKDcpICsgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyKDMpICsgU3RyaW5nLmZyb21DaGFyQ29kZSg1LCAyLCAwLCAwLCAwLCAwKSkgfSAvLyBTZXR1cCA4IGJpdCBjb2xvciBSR0IzMzJcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlUkZCU3RhdGUoNClcclxuXHJcbiAgICAgIHRoaXMucGFyZW50Lm9uU3RhdGVDaGFuZ2UoMylcclxuICAgICAgdGhpcy5wYXJlbnQubG9nZ2VyLmluZm8oJ1N0YXJ0IG5ldyBmcmFtZS4nKVxyXG4gICAgICBDb21tc0hlbHBlci5zZW5kUmVmcmVzaCh0aGlzLnBhcmVudCwgdGhpcy53c1NvY2tldClcclxuICAgICAgLy8gb2JqLnRpbWVyID0gc2V0SW50ZXJ2YWwob2JqLnh4T25UaW1lciwgNTApO1xyXG4gICAgICB0aGlzLnBhcmVudC5vbGRNb3VzZVggPSAtMSAvLyBPbGQgbW91c2UgeCBwb3NpdGlvblxyXG5cclxuICAgICAgLy8gaWYgKHRoaXMucGFyZW50Lm9uU2NyZWVuU2l6ZUNoYW5nZSAhPSBudWxsKVxyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgdGhpcy5wYXJlbnQub25TY3JlZW5TaXplQ2hhbmdlKG9iaiwgb2JqLlNjcmVlbldpZHRoLCBvYmouU2NyZWVuSGVpZ2h0KTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgcmV0dXJuIGNtZFNpemVcclxuICAgIH1cclxuICAgIHJldHVybiAwXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBTZXJ2ZXJJbml0IH1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgRW5jb2RpbmcgfSBmcm9tICcuL0VuY29kaW5nJ1xyXG5pbXBvcnQgeyBIYW5kc2hha2VTdGF0ZSB9IGZyb20gJy4vSGFuZHNoYWtlU3RhdGUnXHJcbmltcG9ydCB7IEZyYW1lQnVmZmVyQmVsbFNlcnZlckN1dFRleHQgfSBmcm9tICcuL0ZyYW1lQnVmZmVyQmVsbFNlcnZlckN1dFRleHQnXHJcbmltcG9ydCB7IFNlY3VyaXR5T3B0aW9ucyB9IGZyb20gJy4vU2VjdXJpdHlPcHRpb25zJ1xyXG5pbXBvcnQgeyBTZWN1cml0eVJlc3BvbnNlIH0gZnJvbSAnLi9TZWN1cml0eVJlc3BvbnNlJ1xyXG5pbXBvcnQgeyBTZXJ2ZXJJbml0IH0gZnJvbSAnLi9TZXJ2ZXJJbml0J1xyXG5cclxuZXhwb3J0IHsgRW5jb2RpbmcsIEhhbmRzaGFrZVN0YXRlLCBGcmFtZUJ1ZmZlckJlbGxTZXJ2ZXJDdXRUZXh0LCBTZWN1cml0eU9wdGlvbnMsIFNlY3VyaXR5UmVzcG9uc2UsIFNlcnZlckluaXQgfVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBJU3RhdGVQcm9jZXNzb3IsIElDb21tdW5pY2F0b3IsIElLdm1EYXRhQ29tbXVuaWNhdG9yIH0gZnJvbSAnLi9JbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBIYW5kc2hha2VTdGF0ZSwgU2VjdXJpdHlPcHRpb25zLCBTZWN1cml0eVJlc3BvbnNlLCBTZXJ2ZXJJbml0LCBGcmFtZUJ1ZmZlckJlbGxTZXJ2ZXJDdXRUZXh0LCBFbmNvZGluZyB9IGZyb20gJy4vUkZCU3RhdGVQcm9jZXNzb3JzJ1xyXG5pbXBvcnQgeyBEZXNrdG9wIH0gZnJvbSAnLi9EZXNrdG9wJ1xyXG5pbXBvcnQgeyBTZXJ2ZXJDdXRUZXh0SGFuZGxlciB9IGZyb20gJy4vUkZCU3RhdGVQcm9jZXNzb3JzL1NlcnZlckN1dFRleHRIYW5kbGVyJ1xyXG5pbXBvcnQgeyBSTEVEZWNvZGVyIH0gZnJvbSAnLi9JbWFnZURhdGEvUkxFRGVjb2RlcidcclxuXHJcbi8qKlxyXG4gKiBTdGF0ZVByb2Nlc3NvckZhY3RvcnkgaXMgdGhlIGZhY3RvcnkgY2xhc3MgdG8gcmV0dXJuIHRoZSBwcm9jZXNzb3IgZm9yIGN1cnJlbnQgc3RhdGUuXHJcbiAqL1xyXG5jbGFzcyBTdGF0ZVByb2Nlc3NvckZhY3Rvcnkge1xyXG4gIHN0YXRlUHJvY2Vzc29yczogYW55XHJcbiAgY29uc3RydWN0b3IgKGNvbW06IElDb21tdW5pY2F0b3IsIHBhcmVudDogRGVza3RvcCwgdXBkYXRlUkZCU3RhdGU6IChzdGF0ZTogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLnN0YXRlUHJvY2Vzc29ycyA9IHt9XHJcbiAgICB0aGlzLnN0YXRlUHJvY2Vzc29yc1swXSA9IG5ldyBIYW5kc2hha2VTdGF0ZShjb21tLCB1cGRhdGVSRkJTdGF0ZSkgLy8gR290IHNlcnZlciB2ZXJzaW9uLiBTZW5kIGNsaWVudCB2ZXJzaW9uXHJcbiAgICB0aGlzLnN0YXRlUHJvY2Vzc29yc1sxXSA9IG5ldyBTZWN1cml0eU9wdGlvbnMoY29tbSwgdXBkYXRlUkZCU3RhdGUpIC8vIEdvdCBzZWN1cml0eSBvcHRpb25zLCBzZW5kIE5vbmUgc2VjdXJpdHkgdHlwZVxyXG4gICAgdGhpcy5zdGF0ZVByb2Nlc3NvcnNbMl0gPSBuZXcgU2VjdXJpdHlSZXNwb25zZShjb21tLCB1cGRhdGVSRkJTdGF0ZSkgLy8gR290IHNlY3VyaXR5IHJlc3BvbnNlLiBTZW5kIHNoYXJlIGRlc2t0b3AgZmxhZ1xyXG4gICAgdGhpcy5zdGF0ZVByb2Nlc3NvcnNbM10gPSBuZXcgU2VydmVySW5pdChjb21tLCBwYXJlbnQsIHVwZGF0ZVJGQlN0YXRlKSAvLyBHb3Qgc2VydmVyIGluaXQuIFNlbmQgZW5jb2RpbmcgbGlzdFxyXG4gICAgY29uc3Qgc2VydmVyQ3V0VGV4dEhhbmRsZXIgPSBuZXcgU2VydmVyQ3V0VGV4dEhhbmRsZXIoY29tbSBhcyBJS3ZtRGF0YUNvbW11bmljYXRvciwgcGFyZW50KVxyXG4gICAgdGhpcy5zdGF0ZVByb2Nlc3NvcnNbNF0gPSBuZXcgRnJhbWVCdWZmZXJCZWxsU2VydmVyQ3V0VGV4dChjb21tLCBzZXJ2ZXJDdXRUZXh0SGFuZGxlciwgdXBkYXRlUkZCU3RhdGUpIC8vIGhhbmRsZXMgMyBkaWZmZXJlbnQgc3RhdGVzLCBGcmFtZWJ1ZmZlcnVwZGF0ZSwgYmVsbCBhbmQgU2VydmVyQ3V0VGV4dFxyXG4gICAgdGhpcy5zdGF0ZVByb2Nlc3NvcnNbJzEwMHBsdXMnXSA9IG5ldyBFbmNvZGluZyhjb21tLCBwYXJlbnQsIG5ldyBSTEVEZWNvZGVyKHBhcmVudCksIHVwZGF0ZVJGQlN0YXRlKSAvLyBoYW5kbGVzIHRpbGUgY291bnQgYW5kIGVuY29kaW5nXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBnZXRQcm9jZXNzb3IgcmV0dXJucyB0aGUgU3RhdGVQcm9jZXNzb3IgdG8gaGFuZGxlIHRoZSBuZXh0IFJGQiBzdGF0ZVxyXG4gICAqIEBwYXJhbSBzdGF0ZSBSRkIgc3RhdGUgdG8gcHJvY2VzcyBuZXh0XHJcbiAgICovXHJcbiAgZ2V0UHJvY2Vzc29yIChzdGF0ZTogbnVtYmVyKTogSVN0YXRlUHJvY2Vzc29yIHtcclxuICAgIGlmIChzdGF0ZSA8PSAxMDApIHsgLy8gcmVndWxhciBzdGF0ZXMgYmVmb3JlIGVuY29kaW5nIGluZm9ybWF0aW9uXHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlUHJvY2Vzc29yc1tzdGF0ZV1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlUHJvY2Vzc29yc1snMTAwcGx1cyddIC8vIHdoZW4gaXQgcmVhY2hlcyB0aGUgZW5jb2Rpbmcgc3RhZ2UgMTAwIGlzIGFkZGVkIHRvIG51bWJlciBvZiB0aWxlcyBpbiB0aGUgaW1hZ2UgYW5kIHByb2Nlc3NlZCBieSB0aGUgRW5jb2RpbmcgcHJvY2Vzc29yXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBTdGF0ZVByb2Nlc3NvckZhY3RvcnkgfVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCB7IElEYXRhUHJvY2Vzc29yIH0gZnJvbSAnLi9JbnRlcmZhY2VzJ1xyXG5cclxuLyoqIGNsYXNzIHRvIHByb2Nlc3Mgc2VyaWFsIG92ZXIgbGFuIGRhdGEgKiovXHJcbmV4cG9ydCBjbGFzcyBUZXJtaW5hbERhdGFQcm9jZXNzb3IgaW1wbGVtZW50cyBJRGF0YVByb2Nlc3NvciB7XHJcbiAgdGVybWluYWw6IGFueVxyXG4gIGNvbnN0cnVjdG9yICh0ZXJtaW5hbCkge1xyXG4gICAgdGhpcy50ZXJtaW5hbCA9IHRlcm1pbmFsXHJcbiAgfVxyXG5cclxuICBwcm9jZXNzRGF0YVRvWHRlcm06IChzdHI6IGFueSkgPT4gdm9pZFxyXG4gIGNsZWFyVGVybWluYWw6ICgpID0+IHZvaWRcclxuXHJcbiAgLyoqIHByb2Nlc3NpbmcgZGF0YSByZWNlaXZlZCBmcm9tIHNlcmlhbCBwb3J0KiovXHJcbiAgcHJvY2Vzc0RhdGEgPSAoc3RyOiBzdHJpbmcpOiBhbnkgPT4ge1xyXG4gICAgaWYgKHRoaXMudGVybWluYWwuY2FwdHVyZSAhPSBudWxsKSB0aGlzLnRlcm1pbmFsLmNhcHR1cmUgPSBTdHJpbmcodGhpcy50ZXJtaW5hbC5jYXB0dXJlKSArIHN0clxyXG4gICAgbGV0IGM6IHN0cmluZyA9ICcnXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjaCA9IHN0ci5jaGFyQ29kZUF0KGkpXHJcbiAgICAgIGlmIChzdHJbaV0gPT09ICdKJykge1xyXG4gICAgICAgIHRoaXMuY2xlYXJUZXJtaW5hbCgpXHJcbiAgICAgIH0gZWxzZSBpZiAoKGNoICYgMHg4MCkgIT09IDApIHtcclxuICAgICAgICBjICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy50ZXJtaW5hbC5Bc2NpaVRvVW5pY29kZVtjaCAmIDB4N2ZdKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGMgKz0gYCR7c3RyW2ldfWBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9jZXNzRGF0YVRvWHRlcm0oYylcclxuICB9XHJcbn1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5pbXBvcnQgQU1US2V5Q29kZVRhYmxlIGZyb20gJy4vQU1US2V5Q29kZVRhYmxlJ1xyXG5pbXBvcnQgeyBpc1RydXRoeSB9IGZyb20gJy4vVXRpbGl0eU1ldGhvZHMnXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBjb2RlIGxvb2t1cCBmdW5jdGlvbnMgZm9yIGRpZmZlcmVudCBzcGVjaWFsIGtleXMgdG8gc2VuZCBvdmVyIHRoZSBzb2NrZXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQU1US2V5Q29kZUNvbnZlcnRlciA9IHtcclxuICBjb252ZXJ0QU1US2V5Q29kZSAoZTogYW55KTogYW55IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVzdHJpY3QtcGx1cy1vcGVyYW5kc1xyXG4gICAgaWYgKGlzVHJ1dGh5KGUuY29kZS5zdGFydHNXaXRoKCdLZXknKSkgJiYgZS5jb2RlLmxlbmd0aCA9PT0gNCkgeyByZXR1cm4gZS5jb2RlLmNoYXJDb2RlQXQoMykgKyAoKGUuc2hpZnRLZXkgPT09IGZhbHNlKSA/IDMyIDogMCkgfVxyXG4gICAgaWYgKGlzVHJ1dGh5KGUuY29kZS5zdGFydHNXaXRoKCdEaWdpdCcpKSAmJiBlLmNvZGUubGVuZ3RoID09PSA2KSB7IHJldHVybiBlLmNvZGUuY2hhckNvZGVBdCg1KSB9XHJcbiAgICBpZiAoaXNUcnV0aHkoZS5jb2RlLnN0YXJ0c1dpdGgoJ051bXBhZCcpKSAmJiBlLmNvZGUubGVuZ3RoID09PSA3KSB7IHJldHVybiBlLmNvZGUuY2hhckNvZGVBdCg2KSB9XHJcbiAgICByZXR1cm4gQU1US2V5Q29kZVRhYmxlW2UuY29kZSBhcyBzdHJpbmddXHJcbiAgfVxyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKlxyXG4gKiBLZXkgY29kZSB0YWJsZSB1c2VkIGZvciBzcGVjaWFsIGtleSBoYW5kbGluZ1xyXG4gKi9cclxuY29uc3QgQU1US2V5Q29kZVRhYmxlID0ge1xyXG4gIFBhdXNlOiAxOSxcclxuICBDYXBzTG9jazogMjAsXHJcbiAgU3BhY2U6IDMyLFxyXG4gIFF1b3RlOiAzOSxcclxuICBNaW51czogNDUsXHJcbiAgTnVtcGFkTXVsdGlwbHk6IDQyLFxyXG4gIE51bXBhZEFkZDogNDMsXHJcbiAgUHJpbnRTY3JlZW46IDQ0LFxyXG4gIENvbW1hOiA0NCxcclxuICBOdW1wYWRTdWJ0cmFjdDogNDUsXHJcbiAgTnVtcGFkRGVjaW1hbDogNDYsXHJcbiAgUGVyaW9kOiA0NixcclxuICBTbGFzaDogNDcsXHJcbiAgTnVtcGFkRGl2aWRlOiA0NyxcclxuICBTZW1pY29sb246IDU5LFxyXG4gIEVxdWFsOiA2MSxcclxuICBPU0xlZnQ6IDkxLFxyXG4gIEJyYWNrZXRMZWZ0OiA5MSxcclxuICBPU1JpZ2h0OiA5MSxcclxuICBCYWNrc2xhc2g6IDkyLFxyXG4gIEJyYWNrZXRSaWdodDogOTMsXHJcbiAgQ29udGV4dE1lbnU6IDkzLFxyXG4gIEJhY2txdW90ZTogOTYsXHJcbiAgTnVtTG9jazogMTQ0LFxyXG4gIFNjcm9sbExvY2s6IDE0NSxcclxuICBCYWNrc3BhY2U6IDB4ZmYwOCxcclxuICBUYWI6IDB4ZmYwOSxcclxuICBFbnRlcjogMHhmZjBkLFxyXG4gIE51bXBhZEVudGVyOiAweGZmMGQsXHJcbiAgRXNjYXBlOiAweGZmMWIsXHJcbiAgRGVsZXRlOiAweGZmZmYsXHJcbiAgSG9tZTogMHhmZjUwLFxyXG4gIFBhZ2VVcDogMHhmZjU1LFxyXG4gIFBhZ2VEb3duOiAweGZmNTYsXHJcbiAgQXJyb3dMZWZ0OiAweGZmNTEsXHJcbiAgQXJyb3dVcDogMHhmZjUyLFxyXG4gIEFycm93UmlnaHQ6IDB4ZmY1MyxcclxuICBBcnJvd0Rvd246IDB4ZmY1NCxcclxuICBFbmQ6IDB4ZmY1NyxcclxuICBJbnNlcnQ6IDB4ZmY2MyxcclxuICBGMTogMHhmZmJlLFxyXG4gIEYyOiAweGZmYmYsXHJcbiAgRjM6IDB4ZmZjMCxcclxuICBGNDogMHhmZmMxLFxyXG4gIEY1OiAweGZmYzIsXHJcbiAgRjY6IDB4ZmZjMyxcclxuICBGNzogMHhmZmM0LFxyXG4gIEY4OiAweGZmYzUsXHJcbiAgRjk6IDB4ZmZjNixcclxuICBGMTA6IDB4ZmZjNyxcclxuICBGMTE6IDB4ZmZjOCxcclxuICBGMTI6IDB4ZmZjOSxcclxuICBTaGlmdExlZnQ6IDB4ZmZlMSxcclxuICBTaGlmdFJpZ2h0OiAweGZmZTIsXHJcbiAgQ29udHJvbExlZnQ6IDB4ZmZlMyxcclxuICBDb250cm9sUmlnaHQ6IDB4ZmZlNCxcclxuICBBbHRMZWZ0OiAweGZmZTksXHJcbiAgQWx0UmlnaHQ6IDB4ZmZlYSxcclxuICBNZXRhTGVmdDogMHhmZmU3LFxyXG4gIE1ldGFSaWdodDogMHhmZmU4XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFNVEtleUNvZGVUYWJsZVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBEZXNrdG9wIH0gZnJvbSAnLi4vRGVza3RvcCdcclxuaW1wb3J0IHsgVHlwZUNvbnZlcnRlciB9IGZyb20gJy4uL0NvbnZlcnRlcidcclxuaW1wb3J0IHsgSUNvbW11bmljYXRvciB9IGZyb20gJy4uL0ludGVyZmFjZXMvSUNvbW11bmljYXRvcidcclxuaW1wb3J0IHsgaXNUcnV0aHkgfSBmcm9tICcuL1V0aWxpdHlNZXRob2RzJ1xyXG5pbXBvcnQgeyBVcERvd24gfSBmcm9tICcuL0tleWJvYXJkSGVscGVyJ1xyXG5cclxuY29uc3QgQ29tbXNIZWxwZXIgPSB7XHJcbiAgc2VuZFJlZnJlc2ggKHBhcmVudDogRGVza3RvcCwgY29tbTogSUNvbW11bmljYXRvcik6IHZvaWQge1xyXG4gICAgaWYgKHBhcmVudC5ob2xkaW5nKSByZXR1cm5cclxuXHJcbiAgICBpZiAocGFyZW50LmZvY3VzTW9kZSA+IDApIHtcclxuICAgICAgLy8gUmVxdWVzdCBvbmx5IHBpeGVscyBhcm91bmQgdGhlIGxhc3QgbW91c2UgcG9zaXRpb25cclxuICAgICAgY29uc3QgZGYgPSBwYXJlbnQuZm9jdXNNb2RlICogMlxyXG4gICAgICBjb21tLnNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgzLCAxKSArXHJcbiAgICAgICAgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyKE1hdGgubWF4KE1hdGgubWluKHBhcmVudC5vbGRNb3VzZVgsIHBhcmVudC5sYXN0TW91c2VYKSAtIHBhcmVudC5mb2N1c01vZGUsIDApKSArXHJcbiAgICAgICAgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyKE1hdGgubWF4KE1hdGgubWluKHBhcmVudC5vbGRNb3VzZVksIHBhcmVudC5sYXN0TW91c2VZKSAtIHBhcmVudC5mb2N1c01vZGUsIDApKSArXHJcbiAgICAgICAgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyKGRmICsgTWF0aC5hYnMocGFyZW50Lm9sZE1vdXNlWCAtIHBhcmVudC5sYXN0TW91c2VYKSkgK1xyXG4gICAgICAgIFR5cGVDb252ZXJ0ZXIuU2hvcnRUb1N0cihkZiArIE1hdGguYWJzKHBhcmVudC5vbGRNb3VzZVkgLSBwYXJlbnQubGFzdE1vdXNlWSkpKSAvLyBGcmFtZWJ1ZmZlclVwZGF0ZVJlcXVlc3RcclxuICAgICAgcGFyZW50Lm9sZE1vdXNlWCA9IHBhcmVudC5sYXN0TW91c2VYXHJcbiAgICAgIHBhcmVudC5vbGRNb3VzZVkgPSBwYXJlbnQubGFzdE1vdXNlWVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmVxdWVzdCB0aGUgZW50aXJlIHNjcmVlblxyXG4gICAgICBjb21tLnNlbmQoU3RyaW5nLmZyb21DaGFyQ29kZSgzLCAxLCAwLCAwLCAwLCAwKSArXHJcbiAgICAgICAgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyKHBhcmVudC5yd2lkdGgpICtcclxuICAgICAgICBUeXBlQ29udmVydGVyLlNob3J0VG9TdHIocGFyZW50LnJoZWlnaHQpKSAvLyBGcmFtZWJ1ZmZlclVwZGF0ZVJlcXVlc3RcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZW5kS2V5IChjb21tOiBJQ29tbXVuaWNhdG9yLCBrOiBudW1iZXIgfGFueSwgZDogVXBEb3duKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIGsgPT09ICdvYmplY3QnKSB7IGZvciAoY29uc3QgaSBpbiBrKSB7IHRoaXMuc2VuZEtleShjb21tLCBrW2ldWzBdLCBrW2ldWzFdKSB9IH0gZWxzZSB7IGNvbW0uc2VuZChTdHJpbmcuZnJvbUNoYXJDb2RlKDQsIGQsIDAsIDApICsgVHlwZUNvbnZlcnRlci5JbnRUb1N0cihrKSkgfVxyXG4gIH0sXHJcblxyXG4gIHNlbmRLdm1EYXRhIChwYXJlbnQ6IERlc2t0b3AsIGNvbW06IElDb21tdW5pY2F0b3IsIHg6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHBhcmVudC5vbkt2bURhdGFBY2sgIT09IHRydWUpIHtcclxuICAgICAgcGFyZW50Lm9uS3ZtRGF0YVBlbmRpbmcucHVzaCh4KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGlzVHJ1dGh5KHBhcmVudC51cmx2YXJzKSAmJiBpc1RydXRoeShwYXJlbnQudXJsdmFycy5rdm1kYXRhdHJhY2UpKSB7IGNvbnNvbGUubG9nKGBLVk0tU2VuZCgke1N0cmluZyh4Lmxlbmd0aCl9KTogJHtTdHJpbmcoeCl9YCkgfVxyXG4gICAgICB4ID0gJ1xcMEt2bURhdGFDaGFubmVsXFwwJyArIFN0cmluZyh4KVxyXG4gICAgICBjb21tLnNlbmQoYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2LCAwLCAwLCAwKX0ke1R5cGVDb252ZXJ0ZXIuSW50VG9TdHIoeC5sZW5ndGgpfSR7U3RyaW5nKHgpfWApXHJcbiAgICAgIHBhcmVudC5vbkt2bURhdGFBY2sgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNlbmRLZWVwQWxpdmUgKHBhcmVudDogRGVza3RvcCwgY29tbTogSUNvbW11bmljYXRvcik6IHZvaWQge1xyXG4gICAgaWYgKHBhcmVudC5sYXN0S2VlcEFsaXZlIDwgRGF0ZS5ub3coKSAtIDUwMDApIHtcclxuICAgICAgcGFyZW50Lmxhc3RLZWVwQWxpdmUgPSBEYXRlLm5vdygpXHJcbiAgICAgIGNvbW0uc2VuZChTdHJpbmcuZnJvbUNoYXJDb2RlKDYsIDAsIDAsIDApICsgVHlwZUNvbnZlcnRlci5JbnRUb1N0cigxNikgKyAnXFwwS3ZtRGF0YUNoYW5uZWxcXDAnKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNlbmRDdHJsQWx0RGVsTXNnIChjb21tOiBJQ29tbXVuaWNhdG9yKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbmRDYWQoY29tbSlcclxuICB9LFxyXG5cclxuICBzZW5kQ2FkIChjb21tOiBJQ29tbXVuaWNhdG9yKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbmRLZXkoY29tbSwgMHhGRkUzLCAxKSAvLyBDb250cm9sXHJcbiAgICB0aGlzLnNlbmRLZXkoY29tbSwgMHhGRkU5LCAxKSAvLyBBbHRcclxuICAgIHRoaXMuc2VuZEtleShjb21tLCAweEZGRkYsIDEpIC8vIERlbGV0ZVxyXG4gICAgdGhpcy5zZW5kS2V5KGNvbW0sIDB4RkZGRiwgMCkgLy8gRGVsZXRlXHJcbiAgICB0aGlzLnNlbmRLZXkoY29tbSwgMHhGRkU5LCAwKSAvLyBBbHRcclxuICAgIHRoaXMuc2VuZEtleShjb21tLCAweEZGRTMsIDApIC8vIENvbnRyb2xcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IENvbW1zSGVscGVyIH1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEludGVsIENvcnBvcmF0aW9uIDIwMTlcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQXV0aG9yIDogUmFtdSBCYWNoYWxhXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgRGVza3RvcCB9IGZyb20gJy4uL0Rlc2t0b3AnXHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byBoYW5kbGUgaW1hZ2UgcGl4ZWwgZGF0YS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBJbWFnZUhlbHBlciA9IHtcclxuICAvKipcclxuICAgKiBwdXRzIGltYWdlIG9uIGNhbnZhcyB1c2luZyB0aGUgcGFyZW50IGNhbnZhcyBjdHguXHJcbiAgICogQHBhcmFtIHBhcmVudCBwYXJlbnQgZGVza3RvcCB3aXRoIENUWCBmb3IgY2FudmFzXHJcbiAgICogQHBhcmFtIHggeCBsb2NcclxuICAgKiBAcGFyYW0geSB5IGxvY1xyXG4gICAqL1xyXG4gIHB1dEltYWdlIChwYXJlbnQ6IERlc2t0b3AsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAocGFyZW50LmhvbGRpbmcpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IHh4ID0gSW1hZ2VIZWxwZXIuYXJvdFgocGFyZW50LCB4LCB5KVxyXG4gICAgeSA9IEltYWdlSGVscGVyLmFyb3RZKHBhcmVudCwgeCwgeSlcclxuICAgIHggPSB4eFxyXG4gICAgcGFyZW50LmNhbnZhc0N0eC5wdXRJbWFnZURhdGEocGFyZW50LnNwYXJlLCB4LCB5KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBhcmVudCBwYXJlbnQgZGVza3RvcFxyXG4gICAqIEBwYXJhbSB2YWx1ZSBwaXhlbCB2YWx1ZSBhdCBwdHJcclxuICAgKiBAcGFyYW0gcHRyIHB0ciBpbnRvIHRoZSBpbWFnZSBwaXhlbCBkYXRhXHJcbiAgICovXHJcbiAgc2V0UGl4ZWwgKHBhcmVudDogRGVza3RvcCwgdmFsdWU6IG51bWJlciwgcHRyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBwcCA9IHB0ciAqIDRcclxuICAgIGxldCB4OiBudW1iZXJcclxuICAgIGxldCB5OiBudW1iZXJcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPiAwKSB7XHJcbiAgICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDEpIHtcclxuICAgICAgICB4ID0gcHRyICUgcGFyZW50LnNwYXJld1xyXG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHB0ciAvIHBhcmVudC5zcGFyZXcpXHJcbiAgICAgICAgcHRyID0gKHggKiBwYXJlbnQuc3BhcmV3MikgKyAocGFyZW50LnNwYXJldzIgLSAxIC0geSlcclxuICAgICAgICBwcCA9IHB0ciAqIDRcclxuICAgICAgfSBlbHNlIGlmIChwYXJlbnQucm90YXRpb24gPT09IDIpIHsgcHAgPSAocGFyZW50LnNwYXJldyAqIHBhcmVudC5zcGFyZWggKiA0KSAtIDQgLSBwcCB9IGVsc2UgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMykge1xyXG4gICAgICAgIHggPSBwdHIgJSBwYXJlbnQuc3BhcmV3XHJcbiAgICAgICAgeSA9IE1hdGguZmxvb3IocHRyIC8gcGFyZW50LnNwYXJldylcclxuICAgICAgICBwdHIgPSAoKHBhcmVudC5zcGFyZXcyIC0gMSAtIHgpICogcGFyZW50LnNwYXJldzIpICsgKHkpXHJcbiAgICAgICAgcHAgPSBwdHIgKiA0XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyZW50LmJwcCA9PT0gMSkge1xyXG4gICAgICAvLyBTZXQgOGJpdCBjb2xvciBSR0IzMzJcclxuICAgICAgcGFyZW50LnNwYXJlLmRhdGFbcHArK10gPSB2YWx1ZSAmIDIyNFxyXG4gICAgICBwYXJlbnQuc3BhcmUuZGF0YVtwcCsrXSA9ICh2YWx1ZSAmIDI4KSA8PCAzXHJcbiAgICAgIHBhcmVudC5zcGFyZS5kYXRhW3BwKytdID0gSW1hZ2VIZWxwZXIuZml4Q29sb3IoKHZhbHVlICYgMykgPDwgNilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFNldCAxNmJpdCBjb2xvciBSR0I1NjVcclxuICAgICAgcGFyZW50LnNwYXJlLmRhdGFbcHArK10gPSAodmFsdWUgPj4gOCkgJiAyNDhcclxuICAgICAgcGFyZW50LnNwYXJlLmRhdGFbcHArK10gPSAodmFsdWUgPj4gMykgJiAyNTJcclxuICAgICAgcGFyZW50LnNwYXJlLmRhdGFbcHArK10gPSAodmFsdWUgJiAzMSkgPDwgM1xyXG4gICAgfVxyXG4gICAgcGFyZW50LnNwYXJlLmRhdGFbcHBdID0gMHhGRiAvLyBTZXQgYWxwaGEgY2hhbm5lbCB0byBvcGFxdWUuXHJcbiAgfSxcclxuXHJcbiAgYXJvdFggKHBhcmVudDogRGVza3RvcCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMCkgcmV0dXJuIHhcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDEpIHJldHVybiBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy53aWR0aCAtIHBhcmVudC5zcGFyZXcyIC0geVxyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMikgcmV0dXJuIHBhcmVudC5jYW52YXNDdHguY2FudmFzLndpZHRoIC0gcGFyZW50LnNwYXJldzIgLSB4XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAzKSByZXR1cm4geVxyXG4gICAgcmV0dXJuIDBcclxuICB9LFxyXG5cclxuICBhcm90WSAocGFyZW50OiBEZXNrdG9wLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAwKSByZXR1cm4geVxyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMSkgcmV0dXJuIHhcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDIpIHJldHVybiBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLSBwYXJlbnQuc3BhcmVoMiAtIHlcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDMpIHJldHVybiBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLSBwYXJlbnQuc3BhcmVoIC0geFxyXG4gICAgcmV0dXJuIDBcclxuICB9LFxyXG5cclxuICBjcm90WCAocGFyZW50OiBEZXNrdG9wLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAwKSByZXR1cm4geFxyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMSkgcmV0dXJuIHlcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDIpIHJldHVybiBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy53aWR0aCAtIHhcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDMpIHJldHVybiBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLSB5XHJcbiAgICByZXR1cm4gMFxyXG4gIH0sXHJcblxyXG4gIGNyb3RZIChwYXJlbnQ6IERlc2t0b3AsIHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDApIHJldHVybiB5XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAxKSByZXR1cm4gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMud2lkdGggLSB4XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAyKSByZXR1cm4gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC0geVxyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMykgcmV0dXJuIHhcclxuICAgIHJldHVybiAwXHJcbiAgfSxcclxuXHJcbiAgcm90WCAocGFyZW50OiBEZXNrdG9wLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAwKSByZXR1cm4geFxyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMSkgcmV0dXJuIHhcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDIpIHJldHVybiB4IC0gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMud2lkdGhcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDMpIHJldHVybiB4IC0gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMuaGVpZ2h0XHJcbiAgICByZXR1cm4gMFxyXG4gIH0sXHJcblxyXG4gIHJvdFkgKHBhcmVudDogRGVza3RvcCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMCkgcmV0dXJuIHlcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDEpIHJldHVybiB5IC0gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMud2lkdGhcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDIpIHJldHVybiB5IC0gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMuaGVpZ2h0XHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAzKSByZXR1cm4geVxyXG4gICAgcmV0dXJuIDBcclxuICB9LFxyXG5cclxuICBzZXRSb3RhdGlvbiAocGFyZW50OiBEZXNrdG9wLCB4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHdoaWxlICh4IDwgMCkgeyB4ICs9IDQgfVxyXG4gICAgY29uc3QgbmV3cm90YXRpb246IGFueSA9IHggJSA0XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaGFyZC1yb3Q6ICcgKyBuZXdyb3RhdGlvbik7XHJcblxyXG4gICAgaWYgKHBhcmVudC5ob2xkaW5nKSB7IHBhcmVudC5yb3RhdGlvbiA9IG5ld3JvdGF0aW9uOyByZXR1cm4gZmFsc2UgfVxyXG5cclxuICAgIGlmIChuZXdyb3RhdGlvbiA9PT0gcGFyZW50LnJvdGF0aW9uKSByZXR1cm4gdHJ1ZVxyXG4gICAgbGV0IHJ3ID0gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMud2lkdGhcclxuICAgIGxldCByaCA9IHBhcmVudC5jYW52YXNDdHguY2FudmFzLmhlaWdodFxyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMSB8fCBwYXJlbnQucm90YXRpb24gPT09IDMpIHsgcncgPSBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQ7IHJoID0gcGFyZW50LmNhbnZhc0N0eC5jYW52YXMud2lkdGggfVxyXG5cclxuICAgIC8vIENvcHkgdGhlIGNhbnZhcywgcHV0IGl0IGJhY2sgaW4gdGhlIGNvcnJlY3QgZGlyZWN0aW9uXHJcbiAgICBpZiAocGFyZW50LnRjYW52YXMgPT0gbnVsbCkgcGFyZW50LnRjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxyXG4gICAgY29uc3QgdGNhbnZhc2N0eDogYW55ID0gcGFyZW50LnRjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG4gICAgdGNhbnZhc2N0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcclxuICAgIHRjYW52YXNjdHguY2FudmFzLndpZHRoID0gcndcclxuICAgIHRjYW52YXNjdHguY2FudmFzLmhlaWdodCA9IHJoXHJcbiAgICB0Y2FudmFzY3R4LnJvdGF0ZSgocGFyZW50LnJvdGF0aW9uICogLTkwKSAqIE1hdGguUEkgLyAxODApXHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAwKSB0Y2FudmFzY3R4LmRyYXdJbWFnZShwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcywgMCwgMClcclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDEpIHRjYW52YXNjdHguZHJhd0ltYWdlKHBhcmVudC5jYW52YXNDdHguY2FudmFzLCAtcGFyZW50LmNhbnZhc0N0eC5jYW52YXMud2lkdGgsIDApXHJcbiAgICBpZiAocGFyZW50LnJvdGF0aW9uID09PSAyKSB0Y2FudmFzY3R4LmRyYXdJbWFnZShwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcywgLXBhcmVudC5jYW52YXNDdHguY2FudmFzLndpZHRoLCAtcGFyZW50LmNhbnZhc0N0eC5jYW52YXMuaGVpZ2h0KVxyXG4gICAgaWYgKHBhcmVudC5yb3RhdGlvbiA9PT0gMykgdGNhbnZhc2N0eC5kcmF3SW1hZ2UocGFyZW50LmNhbnZhc0N0eC5jYW52YXMsIDAsIC1wYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQpXHJcblxyXG4gICAgLy8gQ2hhbmdlIHRoZSBzaXplIGFuZCBvcmllbnRhdGlvbiBhbmQgY29weSB0aGUgY2FudmFzIGJhY2sgaW50byB0aGUgcm90YXRpb25cclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDAgfHwgcGFyZW50LnJvdGF0aW9uID09PSAyKSB7IHBhcmVudC5jYW52YXNDdHguY2FudmFzLmhlaWdodCA9IHJ3OyBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy53aWR0aCA9IHJoIH1cclxuICAgIGlmIChwYXJlbnQucm90YXRpb24gPT09IDEgfHwgcGFyZW50LnJvdGF0aW9uID09PSAzKSB7IHBhcmVudC5jYW52YXNDdHguY2FudmFzLmhlaWdodCA9IHJoOyBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy53aWR0aCA9IHJ3IH1cclxuICAgIHBhcmVudC5jYW52YXNDdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApXHJcbiAgICBwYXJlbnQuY2FudmFzQ3R4LnJvdGF0ZSgobmV3cm90YXRpb24gKiA5MCkgKiBNYXRoLlBJIC8gMTgwKVxyXG4gICAgcGFyZW50LnJvdGF0aW9uID0gbmV3cm90YXRpb25cclxuICAgIHBhcmVudC5jYW52YXNDdHguZHJhd0ltYWdlKHBhcmVudC50Y2FudmFzLCBJbWFnZUhlbHBlci5yb3RYKHBhcmVudCwgMCwgMCksIEltYWdlSGVscGVyLnJvdFkocGFyZW50LCAwLCAwKSlcclxuXHJcbiAgICBwYXJlbnQud2lkdGggPSBwYXJlbnQuY2FudmFzQ3R4LmNhbnZhcy53aWR0aFxyXG4gICAgcGFyZW50LmhlaWdodCA9IHBhcmVudC5jYW52YXNDdHguY2FudmFzLmhlaWdodFxyXG4gICAgaWYgKHBhcmVudC5vblNjcmVlblJlc2l6ZSAhPSBudWxsKSBwYXJlbnQub25TY3JlZW5SZXNpemUocGFyZW50LndpZHRoLCBwYXJlbnQuaGVpZ2h0LCBwYXJlbnQuY2FudmFzSWQpXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH0sXHJcblxyXG4gIGZpeENvbG9yIChjOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChjID4gMTI3KSA/IChjICsgMzIpIDogY1xyXG4gIH1cclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENvcHlyaWdodCAoYykgSW50ZWwgQ29ycG9yYXRpb24gMjAxOVxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBBdXRob3IgOiBSYW11IEJhY2hhbGFcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmltcG9ydCB7IEFNVEtleUNvZGVDb252ZXJ0ZXIgfSBmcm9tICcuL0FNVEtleUNvZGVDb252ZXJ0ZXInXHJcbmltcG9ydCB7IElDb21tdW5pY2F0b3IgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lDb21tdW5pY2F0b3InXHJcbmltcG9ydCB7IENvbW1zSGVscGVyIH0gZnJvbSAnLi9Db21tc0hlbHBlcidcclxuaW1wb3J0IHsgRGVza3RvcCB9IGZyb20gJy4uL0Rlc2t0b3AnXHJcbmltcG9ydCB7IGlzVHJ1dGh5IH0gZnJvbSAnLi9VdGlsaXR5TWV0aG9kcydcclxuXHJcbmV4cG9ydCBlbnVtIFVwRG93biB7XHJcbiAgVXAgPSAwLFxyXG4gIERvd24gPSAxXHJcbn1cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gaGFuZGxlIGtleWJvYXJkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgS2V5Qm9hcmRIZWxwZXIge1xyXG4gIEtleUlucHV0R3JhYjogYm9vbGVhblxyXG4gIENvbW1zOiBJQ29tbXVuaWNhdG9yXHJcbiAgcGFyZW50OiBEZXNrdG9wXHJcbiAgY29uc3RydWN0b3IgKHBhcmVudDogRGVza3RvcCwgY29tbXM6IElDb21tdW5pY2F0b3IpIHtcclxuICAgIHRoaXMuQ29tbXMgPSBjb21tc1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyBncmFiYmluZyBrZXlib2FyZCBldmVudHMgb24gdGhlIGRvY3VtZW50IG9iamVjdFxyXG4gICAqL1xyXG4gIEdyYWJLZXlJbnB1dCAoKTogYW55IHtcclxuICAgIGlmICh0aGlzLktleUlucHV0R3JhYikgeyByZXR1cm4gfVxyXG4gICAgZG9jdW1lbnQub25rZXl1cCA9IHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKVxyXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcylcclxuICAgIGRvY3VtZW50Lm9ua2V5cHJlc3MgPSB0aGlzLmhhbmRsZUtleXMuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5LZXlJbnB1dEdyYWIgPSB0cnVlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZWxlYXNlcyBldmVudCBoYW5kbGVycyB1c2VkIGZvciBrZXlib2FyZCBldmVudCBoYW5kbGluZ1xyXG4gICAqL1xyXG4gIFVuR3JhYktleUlucHV0ICgpOiBhbnkge1xyXG4gICAgaWYgKCF0aGlzLktleUlucHV0R3JhYikgeyByZXR1cm4gfVxyXG4gICAgZG9jdW1lbnQub25rZXl1cCA9IG51bGxcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGxcclxuICAgIGRvY3VtZW50Lm9ua2V5cHJlc3MgPSBudWxsXHJcbiAgICB0aGlzLktleUlucHV0R3JhYiA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlzIChlOiBFdmVudCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5oYWx0RXZlbnQoZSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGhhbHRzIGRlZmF1bHQga2V5Ym9hcmQgZXZlbnQgIGhhbmRsaW5nLiBTaW5jZSB0aGUgc29sZSBwdXJwb3NlIG9mIHRoaXMgZXZlbnQgaXMgdG8gc2VuZCBpdCB0byB0aGUgcmVtb3RlIGRlc2t0b3BcclxuICAgKiBAcGFyYW0gZSBrZXlib2FyZCBldmVudFxyXG4gICAqL1xyXG4gIGhhbHRFdmVudCAoZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoaXNUcnV0aHkoZS5wcmV2ZW50RGVmYXVsdCkpIHsgZS5wcmV2ZW50RGVmYXVsdCgpIH1cclxuICAgIGlmIChpc1RydXRoeShlLnN0b3BQcm9wYWdhdGlvbikpIHsgZS5zdG9wUHJvcGFnYXRpb24oKSB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleVVwIChlOiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVLZXlFdmVudChVcERvd24uVXAsIGUpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlEb3duIChlOiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVLZXlFdmVudChVcERvd24uRG93biwgZSlcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleUV2ZW50IChkOiBVcERvd24sIGtlOiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgZTogYW55ID0ga2VcclxuICAgIGlmICghaXNUcnV0aHkoZSkpIHsgZSA9IHdpbmRvdy5ldmVudCB9XHJcblxyXG4gICAgaWYgKGlzVHJ1dGh5KGUuY29kZSkpIHtcclxuICAgICAgLy8gRm9yIG5ldyBicm93c2VycywgdGhpcyBtYXBwaW5nIGlzIGtleWJvYXJkIGxhbmd1YWdlIGluZGVwZW5kZW50XHJcbiAgICAgIGNvbnN0IGsgPSBBTVRLZXlDb2RlQ29udmVydGVyLmNvbnZlcnRBTVRLZXlDb2RlKGUpXHJcbiAgICAgIHRoaXMucGFyZW50LmxvZ2dlci52ZXJib3NlKGBLZXkgJHtkfSA6ICR7U3RyaW5nKGspfWApXHJcbiAgICAgIGlmIChrICE9IG51bGwpIHsgQ29tbXNIZWxwZXIuc2VuZEtleSh0aGlzLkNvbW1zLCBrLCBkKSB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgazogbnVtYmVyID0gZS5rZXlDb2RlXHJcbiAgICAgIGlmIChrID09PSAxNzMpIGsgPSAxODkgLy8gJy0nIGtleSAoRmlyZWZveClcclxuICAgICAgaWYgKGsgPT09IDYxKSBrID0gMTg3IC8vICc9JyBrZXkgKEZpcmVmb3gpXHJcbiAgICAgIGxldCBrayA9IGtcclxuICAgICAgaWYgKGUuc2hpZnRLZXkgPT09IGZhbHNlICYmIGsgPj0gNjUgJiYgayA8PSA5MCkga2sgPSBrICsgMzJcclxuICAgICAgaWYgKGsgPj0gMTEyICYmIGsgPD0gMTI0KSBrayA9IGsgKyAweEZGNEVcclxuICAgICAgaWYgKGsgPT09IDgpIGtrID0gMHhmZjA4IC8vIEJhY2tzcGFjZVxyXG4gICAgICBpZiAoayA9PT0gOSkga2sgPSAweGZmMDkgLy8gVGFiXHJcbiAgICAgIGlmIChrID09PSAxMykga2sgPSAweGZmMGQgLy8gUmV0dXJuXHJcbiAgICAgIGlmIChrID09PSAxNikga2sgPSAweGZmZTEgLy8gU2hpZnQgKExlZnQpXHJcbiAgICAgIGlmIChrID09PSAxNykga2sgPSAweGZmZTMgLy8gQ3RybCAoTGVmdClcclxuICAgICAgaWYgKGsgPT09IDE4KSBrayA9IDB4ZmZlOSAvLyBBbHQgKExlZnQpXHJcbiAgICAgIGlmIChrID09PSAyNykga2sgPSAweGZmMWIgLy8gRVNDXHJcbiAgICAgIGlmIChrID09PSAzMykga2sgPSAweGZmNTUgLy8gUGFnZVVwXHJcbiAgICAgIGlmIChrID09PSAzNCkga2sgPSAweGZmNTYgLy8gUGFnZURvd25cclxuICAgICAgaWYgKGsgPT09IDM1KSBrayA9IDB4ZmY1NyAvLyBFbmRcclxuICAgICAgaWYgKGsgPT09IDM2KSBrayA9IDB4ZmY1MCAvLyBIb21lXHJcbiAgICAgIGlmIChrID09PSAzNykga2sgPSAweGZmNTEgLy8gTGVmdFxyXG4gICAgICBpZiAoayA9PT0gMzgpIGtrID0gMHhmZjUyIC8vIFVwXHJcbiAgICAgIGlmIChrID09PSAzOSkga2sgPSAweGZmNTMgLy8gUmlnaHRcclxuICAgICAgaWYgKGsgPT09IDQwKSBrayA9IDB4ZmY1NCAvLyBEb3duXHJcbiAgICAgIGlmIChrID09PSA0NSkga2sgPSAweGZmNjMgLy8gSW5zZXJ0XHJcbiAgICAgIGlmIChrID09PSA0Nikga2sgPSAweGZmZmYgLy8gRGVsZXRlXHJcbiAgICAgIGlmIChrID49IDk2ICYmIGsgPD0gMTA1KSBrayA9IGsgLSA0OCAvLyBLZXkgcGFkIG51bWJlcnNcclxuICAgICAgaWYgKGsgPT09IDEwNikga2sgPSA0MiAvLyBQYWQgKlxyXG4gICAgICBpZiAoayA9PT0gMTA3KSBrayA9IDQzIC8vIFBhZCArXHJcbiAgICAgIGlmIChrID09PSAxMDkpIGtrID0gNDUgLy8gUGFkIC1cclxuICAgICAgaWYgKGsgPT09IDExMCkga2sgPSA0NiAvLyBQYWQgLlxyXG4gICAgICBpZiAoayA9PT0gMTExKSBrayA9IDQ3IC8vIFBhZCAvXHJcbiAgICAgIGlmIChrID09PSAxODYpIGtrID0gNTkgLy8gO1xyXG4gICAgICBpZiAoayA9PT0gMTg3KSBrayA9IDYxIC8vID1cclxuICAgICAgaWYgKGsgPT09IDE4OCkga2sgPSA0NCAvLyAsXHJcbiAgICAgIGlmIChrID09PSAxODkpIGtrID0gNDUgLy8gLVxyXG4gICAgICBpZiAoayA9PT0gMTkwKSBrayA9IDQ2IC8vIC5cclxuICAgICAgaWYgKGsgPT09IDE5MSkga2sgPSA0NyAvLyAvXHJcbiAgICAgIGlmIChrID09PSAxOTIpIGtrID0gOTYgLy8gYFxyXG4gICAgICBpZiAoayA9PT0gMjE5KSBrayA9IDkxIC8vIFtcclxuICAgICAgaWYgKGsgPT09IDIyMCkga2sgPSA5MiAvLyBcXFxyXG4gICAgICBpZiAoayA9PT0gMjIxKSBrayA9IDkzIC8vIF10XHJcbiAgICAgIGlmIChrID09PSAyMjIpIGtrID0gMzkgLy8gJ1xyXG4gICAgICB0aGlzLnBhcmVudC5sb2dnZXIudmVyYm9zZShgS2V5ICR7ZH06ICR7a30gID0gJHtra31gKVxyXG4gICAgICBDb21tc0hlbHBlci5zZW5kS2V5KHRoaXMuQ29tbXMsIGtrLCBkKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaGFsdEV2ZW50KGUpXHJcbiAgfVxyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDE5XHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIEF1dGhvciA6IFJhbXUgQmFjaGFsYVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuaW1wb3J0IHsgSUNvbW11bmljYXRvciB9IGZyb20gJy4uL0ludGVyZmFjZXMvSUNvbW11bmljYXRvcidcclxuaW1wb3J0IHsgRGVza3RvcCB9IGZyb20gJy4uL0Rlc2t0b3AnXHJcbmltcG9ydCB7IFR5cGVDb252ZXJ0ZXIgfSBmcm9tICcuLi9Db252ZXJ0ZXInXHJcbmltcG9ydCB7IEltYWdlSGVscGVyIH0gZnJvbSAnLi9JbWFnZUhlbHBlcidcclxuaW1wb3J0IHsgaXNUcnV0aHkgfSBmcm9tICcuL1V0aWxpdHlNZXRob2RzJ1xyXG5cclxuLyoqXHJcbiAqIE1vdXNlaGVscGVyIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgZm9yIGhhbmRsaW5nIG1vdXNlIGV2ZW50cy4gbW91c2V1cCwgbW91c2Vkb3duLCBtb3VzZW1vdmVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNb3VzZUhlbHBlciB7XHJcbiAgcGFyZW50OiBEZXNrdG9wIHwgYW55XHJcbiAgY29tbTogSUNvbW11bmljYXRvclxyXG4gIE1vdXNlSW5wdXRHcmFiOiBib29sZWFuXHJcbiAgbGFzdEV2ZW50OiBhbnlcclxuICBkZWJvdW5jZVRpbWU6IG51bWJlclxyXG4gIG1vdXNlQ2xpY2tDb21wbGV0ZWQ6IGJvb2xlYW5cclxuICBjb25zdHJ1Y3RvciAocGFyZW50OiBEZXNrdG9wLCBjb21tOiBJQ29tbXVuaWNhdG9yLCBkZWJvdW5jZVRpbWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcclxuICAgIHRoaXMuY29tbSA9IGNvbW1cclxuICAgIHRoaXMuZGVib3VuY2VUaW1lID0gZGVib3VuY2VUaW1lXHJcbiAgICB0aGlzLm1vdXNlQ2xpY2tDb21wbGV0ZWQgPSB0cnVlXHJcbiAgICB0aGlzLmxhc3RFdmVudCA9IG51bGxcclxuICB9XHJcblxyXG4gIEdyYWJNb3VzZUlucHV0ICgpOiBhbnkge1xyXG4gICAgaWYgKHRoaXMuTW91c2VJbnB1dEdyYWIpIHJldHVyblxyXG4gICAgdGhpcy5Nb3VzZUlucHV0R3JhYiA9IHRydWVcclxuICB9XHJcblxyXG4gIFVuR3JhYk1vdXNlSW5wdXQgKCk6IGFueSB7XHJcbiAgICBpZiAoIXRoaXMuTW91c2VJbnB1dEdyYWIpIHJldHVyblxyXG4gICAgY29uc3QgYyA9IHRoaXMucGFyZW50LmNhbnZhc0N0eC5jYW52YXNcclxuICAgIGMub25tb3VzZW1vdmUgPSBudWxsXHJcbiAgICBjLm9ubW91c2V1cCA9IG51bGxcclxuICAgIGMub25tb3VzZWRvd24gPSBudWxsXHJcbiAgICAvLyBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvbW96aWxsYS9pKSkgYy5ET01Nb3VzZVNjcm9sbCA9IG51bGw7IGVsc2UgYy5vbm1vdXNld2hlZWwgPSBudWxsO1xyXG4gICAgdGhpcy5Nb3VzZUlucHV0R3JhYiA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICBtb3VzZWRvd24gKGU6IE1vdXNlRXZlbnQpOiBhbnkge1xyXG4gICAgdGhpcy5wYXJlbnQuYnV0dG9ubWFzayB8PSAoMSA8PCBlLmJ1dHRvbilcclxuICAgIHJldHVybiB0aGlzLm1vdXNlbW92ZShlKVxyXG4gIH1cclxuXHJcbiAgbW91c2V1cCAoZTogTW91c2VFdmVudCk6IGFueSB7XHJcbiAgICB0aGlzLnBhcmVudC5idXR0b25tYXNrICY9ICgweEZGRkYgLSAoMSA8PCBlLmJ1dHRvbikpXHJcbiAgICByZXR1cm4gdGhpcy5tb3VzZW1vdmUoZSlcclxuICB9XHJcblxyXG4gIG1vdXNlbW92ZSAoZTogTW91c2VFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMucGFyZW50LnN0YXRlICE9PSA0KSByZXR1cm4gdHJ1ZVxyXG4gICAgY29uc3QgcG9zID0gdGhpcy5nZXRQb3NpdGlvbk9mQ29udHJvbCh0aGlzLnBhcmVudC5jYW52YXNDb250cm9sKVxyXG4gICAgdGhpcy5wYXJlbnQubGFzdE1vdXNlWCA9IChlLnBhZ2VYIC0gcG9zWzBdKSAqICh0aGlzLnBhcmVudC5jYW52YXNDb250cm9sLmhlaWdodCAvIHRoaXMucGFyZW50LmNhbnZhc0NvbnRyb2wub2Zmc2V0SGVpZ2h0KVxyXG4gICAgdGhpcy5wYXJlbnQubGFzdE1vdXNlWSA9ICgoTnVtYmVyKGUucGFnZVkgLSBwb3NbMV0pICsgKGlzVHJ1dGh5KHRoaXMucGFyZW50LnNjcm9sbGRpdikgPyBOdW1iZXIodGhpcy5wYXJlbnQuc2Nyb2xsZGl2LnNjcm9sbFRvcCkgOiAwKSkgKiAodGhpcy5wYXJlbnQuY2FudmFzQ29udHJvbC53aWR0aCAvIHRoaXMucGFyZW50LmNhbnZhc0NvbnRyb2wub2Zmc2V0V2lkdGgpKVxyXG5cclxuICAgIGlmICghaXNUcnV0aHkodGhpcy5wYXJlbnQubm9Nb3VzZVJvdGF0ZSkpIHtcclxuICAgICAgdGhpcy5wYXJlbnQubGFzdE1vdXNlWDIgPSBJbWFnZUhlbHBlci5jcm90WCh0aGlzLnBhcmVudCwgdGhpcy5wYXJlbnQubGFzdE1vdXNlWCwgdGhpcy5wYXJlbnQubGFzdE1vdXNlWSlcclxuICAgICAgdGhpcy5wYXJlbnQubGFzdE1vdXNlWSA9IEltYWdlSGVscGVyLmNyb3RZKHRoaXMucGFyZW50LCB0aGlzLnBhcmVudC5sYXN0TW91c2VYLCB0aGlzLnBhcmVudC5sYXN0TW91c2VZKVxyXG4gICAgICB0aGlzLnBhcmVudC5sYXN0TW91c2VYID0gdGhpcy5wYXJlbnQubGFzdE1vdXNlWDJcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbW0uc2VuZChTdHJpbmcuZnJvbUNoYXJDb2RlKDUsIHRoaXMucGFyZW50LmJ1dHRvbm1hc2spICsgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyKHRoaXMucGFyZW50Lmxhc3RNb3VzZVgpICsgVHlwZUNvbnZlcnRlci5TaG9ydFRvU3RyKHRoaXMucGFyZW50Lmxhc3RNb3VzZVkpKVxyXG5cclxuICAgIC8vIFVwZGF0ZSBmb2N1cyBhcmVhIGlmIHdlIGFyZSBpbiBmb2N1cyBtb2RlXHJcbiAgICB0aGlzLnBhcmVudC5zZXREZXNrRm9jdXMoJ0Rlc2tGb2N1cycsIHRoaXMucGFyZW50LmZvY3VzTW9kZSlcclxuICAgIGlmICh0aGlzLnBhcmVudC5mb2N1c01vZGUgIT09IDApIHtcclxuICAgICAgY29uc3QgeCA9IE1hdGgubWluKHRoaXMucGFyZW50Lmxhc3RNb3VzZVgsIHRoaXMucGFyZW50LmNhbnZhc0NvbnRyb2wud2lkdGggLSB0aGlzLnBhcmVudC5mb2N1c01vZGUpXHJcbiAgICAgIGNvbnN0IHkgPSBNYXRoLm1pbih0aGlzLnBhcmVudC5sYXN0TW91c2VZLCB0aGlzLnBhcmVudC5jYW52YXNDb250cm9sLmhlaWdodCAtIHRoaXMucGFyZW50LmZvY3VzTW9kZSlcclxuICAgICAgY29uc3QgZGYgPSB0aGlzLnBhcmVudC5mb2N1c01vZGUgKiAyXHJcbiAgICAgIGNvbnN0IGMgPSB0aGlzLnBhcmVudC5jYW52YXNDb250cm9sXHJcbiAgICAgIGNvbnN0IHF4ID0gYy5vZmZzZXRIZWlnaHQgLyB0aGlzLnBhcmVudC5jYW52YXNDb250cm9sLmhlaWdodFxyXG4gICAgICBjb25zdCBxeSA9IGMub2Zmc2V0V2lkdGggLyB0aGlzLnBhcmVudC5jYW52YXNDb250cm9sLndpZHRoXHJcbiAgICAgIGNvbnN0IHEgPSB0aGlzLnBhcmVudC5nZXREZXNrRm9jdXMoJ0Rlc2tGb2N1cycpXHJcbiAgICAgIGNvbnN0IHBwb3MgPSB0aGlzLmdldFBvc2l0aW9uT2ZDb250cm9sKHRoaXMucGFyZW50LmNhbnZhc0NvbnRyb2wucGFyZW50RWxlbWVudClcclxuICAgICAgcS5sZWZ0ID0gYCR7KE1hdGgubWF4KCgoeCAtIHRoaXMucGFyZW50LmZvY3VzTW9kZSkgKiBxeCksIDApICsgKHBvc1swXSAtIHBwb3NbMF0pKX1weGBcclxuICAgICAgcS50b3AgPSBgJHsoTWF0aC5tYXgoKCh5IC0gdGhpcy5wYXJlbnQuZm9jdXNNb2RlKSAqIHF5KSwgMCkgKyAocG9zWzFdIC0gcHBvc1sxXSkpfXB4YFxyXG4gICAgICBxLndpZHRoID0gYCR7KChkZiAqIHF4KSAtIDYpfXB4YFxyXG4gICAgICBxLmhlaWdodCA9IGAkeygoZGYgKiBxeCkgLSA2KX1weGBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5oYWx0RXZlbnQoZSlcclxuICB9XHJcblxyXG4gIGhhbHRFdmVudCAoZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoaXNUcnV0aHkoZS5wcmV2ZW50RGVmYXVsdCkpIHsgZS5wcmV2ZW50RGVmYXVsdCgpIH1cclxuICAgIGlmIChpc1RydXRoeShlLnN0b3BQcm9wYWdhdGlvbikpIHsgZS5zdG9wUHJvcGFnYXRpb24oKSB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGdldFBvc2l0aW9uT2ZDb250cm9sIChjOiBIVE1MRWxlbWVudCk6IGFueSB7XHJcbiAgICBjb25zdCBQb3NpdGlvbiA9IEFycmF5KDIpXHJcbiAgICBQb3NpdGlvblswXSA9IFBvc2l0aW9uWzFdID0gMFxyXG4gICAgbGV0IGNvbnRyb2w6IEhUTUxFbGVtZW50ID0gY1xyXG4gICAgd2hpbGUgKGNvbnRyb2wgIT0gbnVsbCkge1xyXG4gICAgICBQb3NpdGlvblswXSA9IE51bWJlcihQb3NpdGlvblswXSkgKyBOdW1iZXIoY29udHJvbC5vZmZzZXRMZWZ0KVxyXG4gICAgICBQb3NpdGlvblsxXSA9IE51bWJlcihQb3NpdGlvblsxXSkgKyBOdW1iZXIoY29udHJvbC5vZmZzZXRUb3ApXHJcbiAgICAgIGNvbnRyb2wgPSBjb250cm9sLm9mZnNldFBhcmVudCBhcyBIVE1MRWxlbWVudFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBvc2l0aW9uXHJcbiAgfVxyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChjKSBJbnRlbCBDb3Jwb3JhdGlvbiAyMDIxXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzVHJ1dGh5ID0gKHZhbHVlOiBhbnkpOiBib29sZWFuID0+IHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSBmYWxzZSAmJiB2YWx1ZSAhPT0gMFxyXG4iLCJleHBvcnQgeyBBTVRLZXlDb2RlQ29udmVydGVyIH0gZnJvbSAnLi9BTVRLZXlDb2RlQ29udmVydGVyJ1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbW1zSGVscGVyJ1xyXG5leHBvcnQgeyBJbWFnZUhlbHBlciB9IGZyb20gJy4vSW1hZ2VIZWxwZXInXHJcbmV4cG9ydCB7IEtleUJvYXJkSGVscGVyIH0gZnJvbSAnLi9LZXlib2FyZEhlbHBlcidcclxuZXhwb3J0IHsgTW91c2VIZWxwZXIgfSBmcm9tICcuL01vdXNlSGVscGVyJ1xyXG5leHBvcnQgeyBpc1RydXRoeSB9IGZyb20gJy4vVXRpbGl0eU1ldGhvZHMnXHJcbiIsIi8qIHpsaWIuanMgLS0gSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHpsaWIuXHJcbiAgVmVyc2lvbjogMC4yLjBcclxuICBMYXN0TW9kaWZpZWQ6IEFwciAxMiAyMDEyXHJcbiAgQ29weXJpZ2h0IChDKSAyMDEyIE1hc2FuYW8gSXp1bW8gPGl6QG9uaWNvcy5jby5qcD5cclxuXHJcbiAgVGhlIG9yaWdpbmFsIGNvcHlyaWdodCBub3RpY2UgKHpsaWIgMS4yLjYpOlxyXG5cclxuICBDb3B5cmlnaHQgKEMpIDE5OTUtMjAxMiBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXHJcblxyXG4gIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXHJcbiAgd2FycmFudHkuICBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xyXG4gIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXHJcblxyXG4gIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxyXG4gIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcclxuICBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XHJcblxyXG4gIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XHJcbiAgICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcclxuICAgICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcclxuICAgICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxyXG4gIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXHJcbiAgICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxyXG4gIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXHJcblxyXG4gIEplYW4tbG91cCBHYWlsbHkgICAgICAgIE1hcmsgQWRsZXJcclxuICBqbG91cEBnemlwLm9yZyAgICAgICAgICBtYWRsZXJAYWx1bW5pLmNhbHRlY2guZWR1XHJcblxyXG5cclxuICBUaGUgZGF0YSBmb3JtYXQgdXNlZCBieSB0aGUgemxpYiBsaWJyYXJ5IGlzIGRlc2NyaWJlZCBieSBSRkNzIChSZXF1ZXN0IGZvclxyXG4gIENvbW1lbnRzKSAxOTUwIHRvIDE5NTIgaW4gdGhlIGZpbGVzIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzE5NTBcclxuICAoemxpYiBmb3JtYXQpLCByZmMxOTUxIChkZWZsYXRlIGZvcm1hdCkgYW5kIHJmYzE5NTIgKGd6aXAgZm9ybWF0KS5cclxuKi9cclxuXHJcbnZhciBaTElCID0gKCBaTElCIHx8IHt9ICk7IC8vIFpMSUIgbmFtZXNwYWNlIGluaXRpYWxpemF0aW9uXHJcblxyXG4vLyBjb21tb24gZGVmaW5pdGlvbnNcclxuaWYodHlwZW9mIFpMSUIuY29tbW9uX2luaXRpYWxpemVkID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgWkxJQi5aX05PX0ZMVVNIICAgICAgPSAwO1xyXG4gICAgWkxJQi5aX1BBUlRJQUxfRkxVU0ggPSAxO1xyXG4gICAgWkxJQi5aX1NZTkNfRkxVU0ggICAgPSAyO1xyXG4gICAgWkxJQi5aX0ZVTExfRkxVU0ggICAgPSAzO1xyXG4gICAgWkxJQi5aX0ZJTklTSCAgICAgICAgPSA0O1xyXG4gICAgWkxJQi5aX0JMT0NLICAgICAgICAgPSA1O1xyXG4gICAgWkxJQi5aX1RSRUVTICAgICAgICAgPSA2O1xyXG4gICAgLyogQWxsb3dlZCBmbHVzaCB2YWx1ZXM7IHNlZSBkZWZsYXRlKCkgYW5kIGluZmxhdGUoKSBiZWxvdyBmb3IgZGV0YWlscyAqL1xyXG5cclxuICAgIFpMSUIuWl9PSyAgICAgICAgICAgPSAgMDtcclxuICAgIFpMSUIuWl9TVFJFQU1fRU5EICAgPSAgMTtcclxuICAgIFpMSUIuWl9ORUVEX0RJQ1QgICAgPSAgMjtcclxuICAgIFpMSUIuWl9FUlJOTyAgICAgICAgPSAoLTEpO1xyXG4gICAgWkxJQi5aX1NUUkVBTV9FUlJPUiA9ICgtMik7XHJcbiAgICBaTElCLlpfREFUQV9FUlJPUiAgID0gKC0zKTtcclxuICAgIFpMSUIuWl9NRU1fRVJST1IgICAgPSAoLTQpO1xyXG4gICAgWkxJQi5aX0JVRl9FUlJPUiAgICA9ICgtNSk7XHJcbiAgICBaTElCLlpfVkVSU0lPTl9FUlJPUiA9ICgtNik7XHJcbiAgICAvKiBSZXR1cm4gY29kZXMgZm9yIHRoZSBjb21wcmVzc2lvbi9kZWNvbXByZXNzaW9uIGZ1bmN0aW9ucy4gTmVnYXRpdmUgdmFsdWVzXHJcbiAgICAgKiBhcmUgZXJyb3JzLCBwb3NpdGl2ZSB2YWx1ZXMgYXJlIHVzZWQgZm9yIHNwZWNpYWwgYnV0IG5vcm1hbCBldmVudHMuXHJcbiAgICAgKi9cclxuXHJcbiAgICBaTElCLlpfREVGTEFURUQgPSA4OyAvKiBUaGUgZGVmbGF0ZSBjb21wcmVzc2lvbiBtZXRob2QgKHRoZSBvbmx5IG9uZSBzdXBwb3J0ZWQgaW4gdGhpcyB2ZXJzaW9uKSAqL1xyXG5cclxuICAgIC8qKlxyXG5cdCAqIHpfc3RyZWFtIGNvbnN0cnVjdG9yXHJcblx0ICogQGNvbnN0cnVjdG9yXHJcblx0ICovXHJcblx0WkxJQi56X3N0cmVhbSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLm5leHRfaW4gPSAwOyAgICAgICAgLyogbmV4dCBpbnB1dCBieXRlICovXHJcblx0XHRcdHRoaXMuYXZhaWxfaW4gPSAwOyAgICAgICAvKiBudW1iZXIgb2YgYnl0ZXMgYXZhaWxhYmxlIGluIGlucHV0X2RhdGEgKi9cclxuXHRcdFx0dGhpcy50b3RhbF9pbiA9IDA7ICAgICAgIC8qIHRvdGFsIG51bWJlciBvZiBpbnB1dCBieXRlcyByZWFkIHNvIGZhciAqL1xyXG5cclxuXHRcdFx0dGhpcy5uZXh0X291dCA9IDA7ICAgICAgIC8qIG5leHQgb3V0cHV0IGJ5dGUgKi9cclxuXHRcdFx0dGhpcy5hdmFpbF9vdXQgPSAwOyAgICAgIC8qIHJlbWFpbmluZyBmcmVlIHNwYWNlIGF0IG5leHRfb3V0ICovXHJcblx0XHRcdHRoaXMudG90YWxfb3V0ID0gMDsgICAgICAvKiB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgb3V0cHV0IHNvIGZhciAqL1xyXG5cclxuXHRcdFx0dGhpcy5tc2cgPSBudWxsOyAgICAgICAgIC8qIGxhc3QgZXJyb3IgbWVzc2FnZSwgbnVsbCBpZiBubyBlcnJvciAqL1xyXG5cdFx0XHR0aGlzLnN0YXRlID0gbnVsbDsgICAgICAgLyogbm90IHZpc2libGUgYnkgYXBwbGljYXRpb25zICovXHJcblxyXG5cdFx0XHR0aGlzLmRhdGFfdHlwZSA9IDA7ICAgICAgLyogYmVzdCBndWVzcyBhYm91dCB0aGUgZGF0YSB0eXBlOiBiaW5hcnkgb3IgdGV4dCAqL1xyXG5cdFx0XHR0aGlzLmFkbGVyID0gMDsgICAgICAgICAgLyogVE9ETzogYWRsZXIzMiB2YWx1ZSBvZiB0aGUgdW5jb21wcmVzc2VkIGRhdGEgKi9cclxuXHJcblx0XHRcdC8vIHpsaWIuanNcclxuXHRcdFx0dGhpcy5pbnB1dF9kYXRhID0gJyc7ICAgIC8qIGlucHV0IGRhdGEgKi9cclxuXHRcdFx0dGhpcy5vdXRwdXRfZGF0YSA9ICcnOyAgIC8qIG91dHB1dCBkYXRhICovXHJcblx0XHRcdHRoaXMuZXJyb3IgPSAwOyAgICAgICAgICAvKiBlcnJvciBjb2RlICovXHJcblx0XHRcdHRoaXMuY2hlY2tzdW1fZnVuY3Rpb24gPSBudWxsOyAvKiBjcmMzMihmb3IgZ3ppcCkgb3IgYWRsZXIzMihmb3IgemxpYikgKi9cclxuXHR9O1xyXG5cclxuICAgIC8qKlxyXG5cdCAqIFRPRE9cclxuXHQgKiBAY29uc3RydWN0b3JcclxuXHQgKi9cclxuXHRaTElCLmd6X2hlYWRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy50ZXh0ID0gMDsgICAgICAvKiB0cnVlIGlmIGNvbXByZXNzZWQgZGF0YSBiZWxpZXZlZCB0byBiZSB0ZXh0ICovXHJcblx0ICAgIHRoaXMudGltZSA9IDA7ICAgICAgLyogbW9kaWZpY2F0aW9uIHRpbWUgKi9cclxuXHRcdHRoaXMueGZsYWdzID0gMDsgICAgLyogZXh0cmEgZmxhZ3MgKG5vdCB1c2VkIHdoZW4gd3JpdGluZyBhIGd6aXAgZmlsZSkgKi9cclxuXHRcdHRoaXMub3MgPSAweGZmOyAgICAgLyogb3BlcmF0aW5nIHN5c3RlbSAqL1xyXG5cdFx0dGhpcy5leHRyYSA9IG51bGw7ICAvKiBleHRyYSBmaWVsZCBzdHJpbmcgb3IgbnVsbCBpZiBub25lICovXHJcblx0XHR0aGlzLmV4dHJhX2xlbiA9IDA7IC8qIHRoaXMuZXh0cmEubGVuZ3RoIChvbmx5IHdoZW4gcmVhZGluZyBoZWFkZXIpICovXHJcblx0XHR0aGlzLmV4dHJhX21heCA9IDA7IC8qIHNwYWNlIGF0IGV4dHJhIChvbmx5IHdoZW4gcmVhZGluZyBoZWFkZXIpICovXHJcblx0XHR0aGlzLm5hbWUgPSBudWxsOyAgIC8qIGZpbGUgbmFtZSBzdHJpbmcgb3IgbnVsbCBpZiBub25lICovXHJcblx0XHR0aGlzLm5hbWVfbWF4ID0gMDsgIC8qIHNwYWNlIGF0IG5hbWUgKG9ubHkgd2hlbiByZWFkaW5nIGhlYWRlcikgKi9cclxuXHRcdHRoaXMuY29tbWVudCA9IG51bGw7IC8qIGNvbW1lbnQgc3RyaW5nIG9yIG51bGwgaWYgbm9uZSAqL1xyXG5cdFx0dGhpcy5jb21tX21heCA9IDA7ICAvKiBzcGFjZSBhdCBjb21tZW50IChvbmx5IHdoZW4gcmVhZGluZyBoZWFkZXIpICovXHJcblx0XHR0aGlzLmhjcmMgPSAwOyAgICAgIC8qIHRydWUgaWYgdGhlcmUgd2FzIG9yIHdpbGwgYmUgYSBoZWFkZXIgY3JjICovXHJcblx0XHR0aGlzLmRvbmUgPSAwOyAgICAgIC8qIHRydWUgd2hlbiBkb25lIHJlYWRpbmcgZ3ppcCBoZWFkZXIgKG5vdCB1c2VkXHJcblx0XHRcdFx0XHRcdFx0ICAgd2hlbiB3cml0aW5nIGEgZ3ppcCBmaWxlKSAqL1xyXG5cdH07XHJcblxyXG5cdFpMSUIuY29tbW9uX2luaXRpYWxpemVkID0gdHJ1ZTtcclxufSAvLyBjb21tb24gZGVmaW5pdGlvbnNcclxuLyogemxpYi1pbmZsYXRlLmpzIC0tIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gZm9yIHRoZSB6bGliIGluZmxhdGUuXHJcbiAgVmVyc2lvbjogMC4yLjBcclxuICBMYXN0TW9kaWZpZWQ6IEFwciAxMiAyMDEyXHJcbiAgQ29weXJpZ2h0IChDKSAyMDEyIE1hc2FuYW8gSXp1bW8gPGl6QG9uaWNvcy5jby5qcD5cclxuXHJcbiAgVGhpcyBsaWJyYXJ5IGlzIG9uZSBvZiB0aGUgSmF2YVNjcmlwdCB6bGliIGltcGxlbWVudGF0aW9uLlxyXG4gIFNvbWUgQVBJJ3MgYXJlIG1vZGlmaWVkIGZyb20gdGhlIG9yaWdpbmFsLlxyXG4gIE9ubHkgaW5mbGF0ZSBBUEkgaXMgaW1wbGVtZW50ZWQuXHJcblxyXG4gIFRoZSBvcmlnaW5hbCBjb3B5cmlnaHQgbm90aWNlICh6bGliIDEuMi42KTpcclxuXHJcbiAgQ29weXJpZ2h0IChDKSAxOTk1LTIwMTIgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxyXG5cclxuICBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxyXG4gIHdhcnJhbnR5LiAgSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcclxuICBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxyXG5cclxuICBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcclxuICBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XHJcbiAgZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxyXG5cclxuICAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxyXG4gICAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXHJcbiAgICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXHJcbiAgICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cclxuICAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxyXG4gICAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cclxuICAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxyXG5cclxuICBKZWFuLWxvdXAgR2FpbGx5ICAgICAgICBNYXJrIEFkbGVyXHJcbiAgamxvdXBAZ3ppcC5vcmcgICAgICAgICAgbWFkbGVyQGFsdW1uaS5jYWx0ZWNoLmVkdVxyXG5cclxuXHJcbiAgVGhlIGRhdGEgZm9ybWF0IHVzZWQgYnkgdGhlIHpsaWIgbGlicmFyeSBpcyBkZXNjcmliZWQgYnkgUkZDcyAoUmVxdWVzdCBmb3JcclxuICBDb21tZW50cykgMTk1MCB0byAxOTUyIGluIHRoZSBmaWxlcyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMxOTUwXHJcbiAgKHpsaWIgZm9ybWF0KSwgcmZjMTk1MSAoZGVmbGF0ZSBmb3JtYXQpIGFuZCByZmMxOTUyIChnemlwIGZvcm1hdCkuXHJcbiovXHJcblxyXG4vKlxyXG4gICAgICAgICAgICAgICAgICAgICAgIEFQSSBkb2N1bWVudGF0aW9uXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5Vc2FnZTogel9zdHJlYW0gPSBaTElCLmluZmxhdGVJbml0KFt3aW5kb3dCaXRzXSk7XHJcblxyXG4gICAgIENyZWF0ZSB0aGUgc3RyZWFtIG9iamVjdCBmb3IgZGVjb21wcmVzc2lvbi5cclxuICAgICBTZWUgemxpYi5oIGZvciB3aW5kb3dCaXRzIGluZm9ybWF0aW9uLlxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblVzYWdlOiBkZWNvZGVkX3N0cmluZyA9IHpfc3RyZWFtLmluZmxhdGUoZW5jb2RlZF9zdHJpbmcgWywge09QVElPTlMuLi59XSk7XHJcblxyXG5PUFRJT05TOlxyXG4gICAgbmV4dF9pbjogZGVjb2RlIHN0YXJ0IG9mZnNldCBmb3IgZW5jb2RlZF9zdHJpbmcuXHJcblxyXG4gICAgYXZhaWxfaW46IC8vIFRPRE8gZG9jdW1lbnQuICBTZWUgemxpYi5oIGZvciB0aGUgaW5mb3JtYXRpb24uXHJcblxyXG4gICAgYXZhaWxfb3V0OiAvLyBUT0RPIGRvY3VtZW50LiAgU2VlIHpsaWIuaCBmb3IgdGhlIGluZm9ybWF0aW9uLlxyXG5cclxuICAgIGZsdXNoOiAvLyBUT0RPIGRvY3VtZW50LiAgU2VlIHpsaWIuaCBmb3IgdGhlIGluZm9ybWF0aW9uLlxyXG5cclxuRXg6IGRlY29kZWRfc3RyaW5nID0gel9zdHJlYW0uaW5mbGF0ZShlbmNvZGVkX3N0cmluZyk7XHJcbiAgICBkZWNvZGVkX3N0cmluZyA9IHpfc3RyZWFtLmluZmxhdGUoZW5jb2RlZF9zdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7bmV4dF9pbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbF9pbjogZW5jb2RlZF9zdHJpbmcubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsX291dDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVzaDogWkxJQi5aX05PX0ZMVVNIfSk7XHJcblxyXG4gICAgIFNlZSB6bGliLmggZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuVXNhZ2U6IHpfc3RyZWFtLmluZmxhdGVSZXNldCgpO1xyXG4gICAgVE9ETyBkb2N1bWVudFxyXG5cclxuKi9cclxuXHJcbmlmKCB0eXBlb2YgWkxJQiA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcbiAgICBhbGVydCgnWkxJQiBpcyBub3QgZGVmaW5lZC4gIFNSQyB6bGliLmpzIGJlZm9yZSB6bGliLWluZmxhdGUuanMnKVxyXG59XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblxyXG4vKiBpbmZsYXRlLmMgLS0gemxpYiBkZWNvbXByZXNzaW9uXHJcbiAqIENvcHlyaWdodCAoQykgMTk5NS0yMDExIE1hcmsgQWRsZXJcclxuICogRm9yIGNvbmRpdGlvbnMgb2YgZGlzdHJpYnV0aW9uIGFuZCB1c2UsIHNlZSBjb3B5cmlnaHQgbm90aWNlIGluIHpsaWIuaFxyXG4gKi9cclxuXHJcbnZhciBERUZfV0JJVFMgPSAxNTtcclxuXHJcbi8vIGluZmxhdGVfbW9kZVxyXG52YXIgSEVBRCAgICAgPSAgMDsgLyogaTogd2FpdGluZyBmb3IgbWFnaWMgaGVhZGVyICovXHJcbnZhciBGTEFHUyAgICA9ICAxOyAvKiBpOiB3YWl0aW5nIGZvciBtZXRob2QgYW5kIGZsYWdzIChnemlwKSAqL1xyXG52YXIgVElNRSAgICAgPSAgMjsgLyogaTogd2FpdGluZyBmb3IgbW9kaWZpY2F0aW9uIHRpbWUgKGd6aXApICovXHJcbnZhciBPUyAgICAgICA9ICAzOyAvKiBpOiB3YWl0aW5nIGZvciBleHRyYSBmbGFncyBhbmQgb3BlcmF0aW5nIHN5c3RlbSAoZ3ppcCkgKi9cclxudmFyIEVYTEVOICAgID0gIDQ7IC8qIGk6IHdhaXRpbmcgZm9yIGV4dHJhIGxlbmd0aCAoZ3ppcCkgKi9cclxudmFyIEVYVFJBICAgID0gIDU7IC8qIGk6IHdhaXRpbmcgZm9yIGV4dHJhIGJ5dGVzIChnemlwKSAqL1xyXG52YXIgTkFNRSAgICAgPSAgNjsgLyogaTogd2FpdGluZyBmb3IgZW5kIG9mIGZpbGUgbmFtZSAoZ3ppcCkgKi9cclxudmFyIENPTU1FTlQgID0gIDc7IC8qIGk6IHdhaXRpbmcgZm9yIGVuZCBvZiBjb21tZW50IChnemlwKSAqL1xyXG52YXIgSENSQyAgICAgPSAgODsgLyogaTogd2FpdGluZyBmb3IgaGVhZGVyIGNyYyAoZ3ppcCkgKi9cclxudmFyIERJQ1RJRCAgID0gIDk7IC8qIGk6IHdhaXRpbmcgZm9yIGRpY3Rpb25hcnkgY2hlY2sgdmFsdWUgKi9cclxudmFyIERJQ1QgICAgID0gMTA7IC8qIHdhaXRpbmcgZm9yIGluZmxhdGVTZXREaWN0aW9uYXJ5KCkgY2FsbCAqL1xyXG52YXIgVFlQRSAgICAgPSAxMTsgLyogaTogd2FpdGluZyBmb3IgdHlwZSBiaXRzLCBpbmNsdWRpbmcgbGFzdC1mbGFnIGJpdCAqL1xyXG52YXIgVFlQRURPICAgPSAxMjsgLyogaTogc2FtZSwgYnV0IHNraXAgY2hlY2sgdG8gZXhpdCBpbmZsYXRlIG9uIG5ldyBibG9jayAqL1xyXG52YXIgU1RPUkVEICAgPSAxMzsgLyogaTogd2FpdGluZyBmb3Igc3RvcmVkIHNpemUgKGxlbmd0aCBhbmQgY29tcGxlbWVudCkgKi9cclxudmFyIENPUFlfICAgID0gMTQ7IC8qIGkvbzogc2FtZSBhcyBDT1BZIGJlbG93LCBidXQgb25seSBmaXJzdCB0aW1lIGluICovXHJcbnZhciBDT1BZICAgICA9IDE1OyAvKiBpL286IHdhaXRpbmcgZm9yIGlucHV0IG9yIG91dHB1dCB0byBjb3B5IHN0b3JlZCBibG9jayAqL1xyXG52YXIgVEFCTEUgICAgPSAxNjsgLyogaTogd2FpdGluZyBmb3IgZHluYW1pYyBibG9jayB0YWJsZSBsZW5ndGhzICovXHJcbnZhciBMRU5MRU5TICA9IDE3OyAvKiBpOiB3YWl0aW5nIGZvciBjb2RlIGxlbmd0aCBjb2RlIGxlbmd0aHMgKi9cclxudmFyIENPREVMRU5TID0gMTg7IC8qIGk6IHdhaXRpbmcgZm9yIGxlbmd0aC9saXQgYW5kIGRpc3RhbmNlIGNvZGUgbGVuZ3RocyAqL1xyXG52YXIgTEVOXyAgICAgPSAxOTsgLyogaTogc2FtZSBhcyBMRU4gYmVsb3csIGJ1dCBvbmx5IGZpcnN0IHRpbWUgaW4gKi9cclxudmFyIExFTiAgICAgID0gMjA7IC8qIGk6IHdhaXRpbmcgZm9yIGxlbmd0aC9saXQvZW9iIGNvZGUgKi9cclxudmFyIExFTkVYVCAgID0gMjE7IC8qIGk6IHdhaXRpbmcgZm9yIGxlbmd0aCBleHRyYSBiaXRzICovXHJcbnZhciBESVNUICAgICA9IDIyOyAvKiBpOiB3YWl0aW5nIGZvciBkaXN0YW5jZSBjb2RlICovXHJcbnZhciBESVNURVhUICA9IDIzOyAvKiBpOiB3YWl0aW5nIGZvciBkaXN0YW5jZSBleHRyYSBiaXRzICovXHJcbnZhciBNQVRDSCAgICA9IDI0OyAvKiBvOiB3YWl0aW5nIGZvciBvdXRwdXQgc3BhY2UgdG8gY29weSBzdHJpbmcgKi9cclxudmFyIExJVCAgICAgID0gMjU7IC8qIG86IHdhaXRpbmcgZm9yIG91dHB1dCBzcGFjZSB0byB3cml0ZSBsaXRlcmFsICovXHJcbnZhciBDSEVDSyAgICA9IDI2OyAvKiBpOiB3YWl0aW5nIGZvciAzMi1iaXQgY2hlY2sgdmFsdWUgKi9cclxudmFyIExFTkdUSCAgID0gMjc7IC8qIGk6IHdhaXRpbmcgZm9yIDMyLWJpdCBsZW5ndGggKGd6aXApICovXHJcbnZhciBET05FICAgICA9IDI4OyAvKiBmaW5pc2hlZCBjaGVjaywgZG9uZSAtLSByZW1haW4gaGVyZSB1bnRpbCByZXNldCAqL1xyXG52YXIgQkFEICAgICAgPSAyOTsgLyogZ290IGEgZGF0YSBlcnJvciAtLSByZW1haW4gaGVyZSB1bnRpbCByZXNldCAqL1xyXG52YXIgTUVNICAgICAgPSAzMDsgLyogZ290IGFuIGluZmxhdGUoKSBtZW1vcnkgZXJyb3IgLS0gcmVtYWluIGhlcmUgdW50aWwgcmVzZXQgKi9cclxudmFyIFNZTkMgICAgID0gMzE7IC8qIGxvb2tpbmcgZm9yIHN5bmNocm9uaXphdGlvbiBieXRlcyB0byByZXN0YXJ0IGluZmxhdGUoKSAqL1xyXG5cclxuLyogTWF4aW11bSBzaXplIG9mIHRoZSBkeW5hbWljIHRhYmxlLiAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGNvZGUgc3RydWN0dXJlcyBpc1xyXG4gICAxNDQ0LCB3aGljaCBpcyB0aGUgc3VtIG9mIDg1MiBmb3IgbGl0ZXJhbC9sZW5ndGggY29kZXMgYW5kIDU5MiBmb3IgZGlzdGFuY2VcclxuICAgY29kZXMuICBUaGVzZSB2YWx1ZXMgd2VyZSBmb3VuZCBieSBleGhhdXN0aXZlIHNlYXJjaGVzIHVzaW5nIHRoZSBwcm9ncmFtXHJcbiAgIGV4YW1wbGVzL2Vub3VnaC5jIGZvdW5kIGluIHRoZSB6bGliIGRpc3RyaWJ0dXRpb24uICBUaGUgYXJndW1lbnRzIHRvIHRoYXRcclxuICAgcHJvZ3JhbSBhcmUgdGhlIG51bWJlciBvZiBzeW1ib2xzLCB0aGUgaW5pdGlhbCByb290IHRhYmxlIHNpemUsIGFuZCB0aGVcclxuICAgbWF4aW11bSBiaXQgbGVuZ3RoIG9mIGEgY29kZS4gIFwiZW5vdWdoIDI4NiA5IDE1XCIgZm9yIGxpdGVyYWwvbGVuZ3RoIGNvZGVzXHJcbiAgIHJldHVybnMgcmV0dXJucyA4NTIsIGFuZCBcImVub3VnaCAzMCA2IDE1XCIgZm9yIGRpc3RhbmNlIGNvZGVzIHJldHVybnMgNTkyLlxyXG4gICBUaGUgaW5pdGlhbCByb290IHRhYmxlIHNpemUgKDkgb3IgNikgaXMgZm91bmQgaW4gdGhlIGZpZnRoIGFyZ3VtZW50IG9mIHRoZVxyXG4gICBpbmZsYXRlX3RhYmxlKCkgY2FsbHMgaW4gaW5mbGF0ZS5jIGFuZCBpbmZiYWNrLmMuICBJZiB0aGUgcm9vdCB0YWJsZSBzaXplIGlzXHJcbiAgIGNoYW5nZWQsIHRoZW4gdGhlc2UgbWF4aW11bSBzaXplcyB3b3VsZCBiZSBuZWVkIHRvIGJlIHJlY2FsY3VsYXRlZCBhbmRcclxuICAgdXBkYXRlZC4gKi9cclxudmFyIEVOT1VHSF9MRU5TID0gODUyO1xyXG52YXIgRU5PVUdIX0RJU1RTID0gNTkyO1xyXG52YXIgRU5PVUdIID0gKEVOT1VHSF9MRU5TICsgRU5PVUdIX0RJU1RTKTtcclxuXHJcbi8qIFR5cGUgb2YgY29kZSB0byBidWlsZCBmb3IgaW5mbGF0ZV90YWJsZSgpICovXHJcbnZhciBDT0RFUyA9IDA7XHJcbnZhciBMRU5TID0gMTtcclxudmFyIERJU1RTID0gMjtcclxuXHJcblxyXG5cclxudmFyIGluZmxhdGVfdGFibGVfbGJhc2UgPSBbIC8qIExlbmd0aCBjb2RlcyAyNTcuLjI4NSBiYXNlICovXHJcbiAgICAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEzLCAxNSwgMTcsIDE5LCAyMywgMjcsIDMxLFxyXG4gICAgMzUsIDQzLCA1MSwgNTksIDY3LCA4MywgOTksIDExNSwgMTMxLCAxNjMsIDE5NSwgMjI3LCAyNTgsIDAsIDBdO1xyXG52YXIgaW5mbGF0ZV90YWJsZV9sZXh0ID0gWyAvKiBMZW5ndGggY29kZXMgMjU3Li4yODUgZXh0cmEgKi9cclxuICAgIDE2LCAxNiwgMTYsIDE2LCAxNiwgMTYsIDE2LCAxNiwgMTcsIDE3LCAxNywgMTcsIDE4LCAxOCwgMTgsIDE4LFxyXG4gICAgMTksIDE5LCAxOSwgMTksIDIwLCAyMCwgMjAsIDIwLCAyMSwgMjEsIDIxLCAyMSwgMTYsIDIwMywgNjldO1xyXG52YXIgaW5mbGF0ZV90YWJsZV9kYmFzZSA9IFsgLyogRGlzdGFuY2UgY29kZXMgMC4uMjkgYmFzZSAqL1xyXG4gICAgMSwgMiwgMywgNCwgNSwgNywgOSwgMTMsIDE3LCAyNSwgMzMsIDQ5LCA2NSwgOTcsIDEyOSwgMTkzLFxyXG4gICAgMjU3LCAzODUsIDUxMywgNzY5LCAxMDI1LCAxNTM3LCAyMDQ5LCAzMDczLCA0MDk3LCA2MTQ1LFxyXG4gICAgODE5MywgMTIyODksIDE2Mzg1LCAyNDU3NywgMCwgMF07XHJcbnZhciBpbmZsYXRlX3RhYmxlX2RleHQgPSBbIC8qIERpc3RhbmNlIGNvZGVzIDAuLjI5IGV4dHJhICovXHJcbiAgICAxNiwgMTYsIDE2LCAxNiwgMTcsIDE3LCAxOCwgMTgsIDE5LCAxOSwgMjAsIDIwLCAyMSwgMjEsIDIyLCAyMixcclxuICAgIDIzLCAyMywgMjQsIDI0LCAyNSwgMjUsIDI2LCAyNiwgMjcsIDI3LFxyXG4gICAgMjgsIDI4LCAyOSwgMjksIDY0LCA2NF07XHJcblxyXG4vKiBpbmZ0cmVlcy5jIC0tIGdlbmVyYXRlIEh1ZmZtYW4gdHJlZXMgZm9yIGVmZmljaWVudCBkZWNvZGluZ1xyXG4gKiBDb3B5cmlnaHQgKEMpIDE5OTUtMjAxMiBNYXJrIEFkbGVyXHJcbiAqIEZvciBjb25kaXRpb25zIG9mIGRpc3RyaWJ1dGlvbiBhbmQgdXNlLCBzZWUgY29weXJpZ2h0IG5vdGljZSBpbiB6bGliLmhcclxuICovXHJcblxyXG5aTElCLmluZmxhdGVfY29weXJpZ2h0ID1cclxuICAgJyBpbmZsYXRlIDEuMi42IENvcHlyaWdodCAxOTk1LTIwMTIgTWFyayBBZGxlciAnO1xyXG4vKlxyXG4gIElmIHlvdSB1c2UgdGhlIHpsaWIgbGlicmFyeSBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGlzIHdlbGNvbWVcclxuICBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB5b3VyIHByb2R1Y3QuIElmIGZvciBzb21lIHJlYXNvbiB5b3UgY2Fubm90XHJcbiAgaW5jbHVkZSBzdWNoIGFuIGFja25vd2xlZGdtZW50LCBJIHdvdWxkIGFwcHJlY2lhdGUgdGhhdCB5b3Uga2VlcCB0aGlzXHJcbiAgY29weXJpZ2h0IHN0cmluZyBpbiB0aGUgZXhlY3V0YWJsZSBvZiB5b3VyIHByb2R1Y3QuXHJcbiAqL1xyXG5cclxuLypcclxuICBCdWlsZCBhIHNldCBvZiB0YWJsZXMgdG8gZGVjb2RlIHRoZSBwcm92aWRlZCBjYW5vbmljYWwgSHVmZm1hbiBjb2RlLlxyXG4gIFRoZSBjb2RlIGxlbmd0aHMgYXJlIGxlbnNbMC4uY29kZXMtMV0uICBUaGUgcmVzdWx0IHN0YXJ0cyBhdCAqdGFibGUsXHJcbiAgd2hvc2UgaW5kaWNlcyBhcmUgMC4uMl5iaXRzLTEuICB3b3JrIGlzIGEgd3JpdGFibGUgYXJyYXkgb2YgYXQgbGVhc3RcclxuICBsZW5zIHNob3J0cywgd2hpY2ggaXMgdXNlZCBhcyBhIHdvcmsgYXJlYS4gIHR5cGUgaXMgdGhlIHR5cGUgb2YgY29kZVxyXG4gIHRvIGJlIGdlbmVyYXRlZCwgQ09ERVMsIExFTlMsIG9yIERJU1RTLiAgT24gcmV0dXJuLCB6ZXJvIGlzIHN1Y2Nlc3MsXHJcbiAgLTEgaXMgYW4gaW52YWxpZCBjb2RlLCBhbmQgKzEgbWVhbnMgdGhhdCBFTk9VR0ggaXNuJ3QgZW5vdWdoLiAgdGFibGVcclxuICBvbiByZXR1cm4gcG9pbnRzIHRvIHRoZSBuZXh0IGF2YWlsYWJsZSBlbnRyeSdzIGFkZHJlc3MuICBiaXRzIGlzIHRoZVxyXG4gIHJlcXVlc3RlZCByb290IHRhYmxlIGluZGV4IGJpdHMsIGFuZCBvbiByZXR1cm4gaXQgaXMgdGhlIGFjdHVhbCByb290XHJcbiAgdGFibGUgaW5kZXggYml0cy4gIEl0IHdpbGwgZGlmZmVyIGlmIHRoZSByZXF1ZXN0IGlzIGdyZWF0ZXIgdGhhbiB0aGVcclxuICBsb25nZXN0IGNvZGUgb3IgaWYgaXQgaXMgbGVzcyB0aGFuIHRoZSBzaG9ydGVzdCBjb2RlLlxyXG4qL1xyXG5mdW5jdGlvbiBpbmZsYXRlX3RhYmxlKHN0YXRlLCB0eXBlKVxyXG57XHJcbiAgICB2YXIgTUFYQklUUyA9IDE1O1xyXG4gICAgdmFyIHRhYmxlID0gc3RhdGUubmV4dDtcclxuICAgIHZhciBiaXRzID0gKHR5cGUgPT0gRElTVFMgPyBzdGF0ZS5kaXN0Yml0cyA6IHN0YXRlLmxlbmJpdHMpO1xyXG4gICAgdmFyIHdvcmsgPSBzdGF0ZS53b3JrO1xyXG4gICAgdmFyIGxlbnMgPSBzdGF0ZS5sZW5zO1xyXG4gICAgdmFyIGxlbnNfb2Zmc2V0ID0gKHR5cGUgPT0gRElTVFMgPyBzdGF0ZS5ubGVuIDogMCk7XHJcbiAgICB2YXIgc3RhdGVfY29kZXMgPSBzdGF0ZS5jb2RlcztcclxuICAgIHZhciBjb2RlcztcclxuICAgIGlmKHR5cGUgPT0gTEVOUylcclxuICAgICAgICBjb2RlcyA9IHN0YXRlLm5sZW47XHJcbiAgICBlbHNlIGlmKHR5cGUgPT0gRElTVFMpXHJcbiAgICAgICAgY29kZXMgPSBzdGF0ZS5uZGlzdDtcclxuICAgIGVsc2UgLy8gQ09ERVNcclxuICAgICAgICBjb2RlcyA9IDE5O1xyXG5cclxuICAgIHZhciBsZW47ICAgICAgICAgICAgICAgLyogYSBjb2RlJ3MgbGVuZ3RoIGluIGJpdHMgKi9cclxuICAgIHZhciBzeW07ICAgICAgICAgICAgICAgLyogaW5kZXggb2YgY29kZSBzeW1ib2xzICovXHJcbiAgICB2YXIgbWluLCBtYXg7ICAgICAgICAgIC8qIG1pbmltdW0gYW5kIG1heGltdW0gY29kZSBsZW5ndGhzICovXHJcbiAgICB2YXIgcm9vdDsgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBpbmRleCBiaXRzIGZvciByb290IHRhYmxlICovXHJcbiAgICB2YXIgY3VycjsgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBpbmRleCBiaXRzIGZvciBjdXJyZW50IHRhYmxlICovXHJcbiAgICB2YXIgZHJvcDsgICAgICAgICAgICAgIC8qIGNvZGUgYml0cyB0byBkcm9wIGZvciBzdWItdGFibGUgKi9cclxuICAgIHZhciBsZWZ0OyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIHByZWZpeCBjb2RlcyBhdmFpbGFibGUgKi9cclxuICAgIHZhciB1c2VkOyAgICAgICAgICAgICAgLyogY29kZSBlbnRyaWVzIGluIHRhYmxlIHVzZWQgKi9cclxuICAgIHZhciBodWZmOyAgICAgICAgICAgICAgLyogSHVmZm1hbiBjb2RlICovXHJcbiAgICB2YXIgaW5jcjsgICAgICAgICAgICAgIC8qIGZvciBpbmNyZW1lbnRpbmcgY29kZSwgaW5kZXggKi9cclxuICAgIHZhciBmaWxsOyAgICAgICAgICAgICAgLyogaW5kZXggZm9yIHJlcGxpY2F0aW5nIGVudHJpZXMgKi9cclxuICAgIHZhciBsb3c7ICAgICAgICAgICAgICAgLyogbG93IGJpdHMgZm9yIGN1cnJlbnQgcm9vdCBlbnRyeSAqL1xyXG4gICAgdmFyIG1hc2s7ICAgICAgICAgICAgICAvKiBtYXNrIGZvciBsb3cgcm9vdCBiaXRzICovXHJcbiAgICB2YXIgaGVyZTsgICAgICAgICAgICAgIC8qIHRhYmxlIGVudHJ5IGZvciBkdXBsaWNhdGlvbiAqL1xyXG4gICAgdmFyIG5leHQ7ICAgICAgICAgICAgICAvKiBuZXh0IGF2YWlsYWJsZSBzcGFjZSBpbiB0YWJsZSAqL1xyXG4gICAgdmFyIGJhc2U7ICAgICAgICAgICAgICAvKiBiYXNlIHZhbHVlIHRhYmxlIHRvIHVzZSAqL1xyXG4gICAgdmFyIGJhc2Vfb2Zmc2V0O1xyXG4gICAgdmFyIGV4dHJhOyAgICAgICAgICAgICAvKiBleHRyYSBiaXRzIHRhYmxlIHRvIHVzZSAqL1xyXG4gICAgdmFyIGV4dHJhX29mZnNldDtcclxuICAgIHZhciBlbmQ7ICAgICAgICAgICAgICAgICAgICAvKiB1c2UgYmFzZSBhbmQgZXh0cmEgZm9yIHN5bWJvbCA+IGVuZCAqL1xyXG4gICAgdmFyIGNvdW50ID0gbmV3IEFycmF5KE1BWEJJVFMrMSk7ICAgIC8qIG51bWJlciBvZiBjb2RlcyBvZiBlYWNoIGxlbmd0aCAqL1xyXG4gICAgdmFyIG9mZnMgPSBuZXcgQXJyYXkoTUFYQklUUysxKTsgICAgIC8qIG9mZnNldHMgaW4gdGFibGUgZm9yIGVhY2ggbGVuZ3RoICovXHJcblxyXG4gICAgLypcclxuICAgICAgUHJvY2VzcyBhIHNldCBvZiBjb2RlIGxlbmd0aHMgdG8gY3JlYXRlIGEgY2Fub25pY2FsIEh1ZmZtYW4gY29kZS4gIFRoZVxyXG4gICAgICBjb2RlIGxlbmd0aHMgYXJlIGxlbnNbMC4uY29kZXMtMV0uICBFYWNoIGxlbmd0aCBjb3JyZXNwb25kcyB0byB0aGVcclxuICAgICAgc3ltYm9scyAwLi5jb2Rlcy0xLiAgVGhlIEh1ZmZtYW4gY29kZSBpcyBnZW5lcmF0ZWQgYnkgZmlyc3Qgc29ydGluZyB0aGVcclxuICAgICAgc3ltYm9scyBieSBsZW5ndGggZnJvbSBzaG9ydCB0byBsb25nLCBhbmQgcmV0YWluaW5nIHRoZSBzeW1ib2wgb3JkZXJcclxuICAgICAgZm9yIGNvZGVzIHdpdGggZXF1YWwgbGVuZ3Rocy4gIFRoZW4gdGhlIGNvZGUgc3RhcnRzIHdpdGggYWxsIHplcm8gYml0c1xyXG4gICAgICBmb3IgdGhlIGZpcnN0IGNvZGUgb2YgdGhlIHNob3J0ZXN0IGxlbmd0aCwgYW5kIHRoZSBjb2RlcyBhcmUgaW50ZWdlclxyXG4gICAgICBpbmNyZW1lbnRzIGZvciB0aGUgc2FtZSBsZW5ndGgsIGFuZCB6ZXJvcyBhcmUgYXBwZW5kZWQgYXMgdGhlIGxlbmd0aFxyXG4gICAgICBpbmNyZWFzZXMuICBGb3IgdGhlIGRlZmxhdGUgZm9ybWF0LCB0aGVzZSBiaXRzIGFyZSBzdG9yZWQgYmFja3dhcmRzXHJcbiAgICAgIGZyb20gdGhlaXIgbW9yZSBuYXR1cmFsIGludGVnZXIgaW5jcmVtZW50IG9yZGVyaW5nLCBhbmQgc28gd2hlbiB0aGVcclxuICAgICAgZGVjb2RpbmcgdGFibGVzIGFyZSBidWlsdCBpbiB0aGUgbGFyZ2UgbG9vcCBiZWxvdywgdGhlIGludGVnZXIgY29kZXNcclxuICAgICAgYXJlIGluY3JlbWVudGVkIGJhY2t3YXJkcy5cclxuXHJcbiAgICAgIFRoaXMgcm91dGluZSBhc3N1bWVzLCBidXQgZG9lcyBub3QgY2hlY2ssIHRoYXQgYWxsIG9mIHRoZSBlbnRyaWVzIGluXHJcbiAgICAgIGxlbnNbXSBhcmUgaW4gdGhlIHJhbmdlIDAuLk1BWEJJVFMuICBUaGUgY2FsbGVyIG11c3QgYXNzdXJlIHRoaXMuXHJcbiAgICAgIDEuLk1BWEJJVFMgaXMgaW50ZXJwcmV0ZWQgYXMgdGhhdCBjb2RlIGxlbmd0aC4gIHplcm8gbWVhbnMgdGhhdCB0aGF0XHJcbiAgICAgIHN5bWJvbCBkb2VzIG5vdCBvY2N1ciBpbiB0aGlzIGNvZGUuXHJcblxyXG4gICAgICBUaGUgY29kZXMgYXJlIHNvcnRlZCBieSBjb21wdXRpbmcgYSBjb3VudCBvZiBjb2RlcyBmb3IgZWFjaCBsZW5ndGgsXHJcbiAgICAgIGNyZWF0aW5nIGZyb20gdGhhdCBhIHRhYmxlIG9mIHN0YXJ0aW5nIGluZGljZXMgZm9yIGVhY2ggbGVuZ3RoIGluIHRoZVxyXG4gICAgICBzb3J0ZWQgdGFibGUsIGFuZCB0aGVuIGVudGVyaW5nIHRoZSBzeW1ib2xzIGluIG9yZGVyIGluIHRoZSBzb3J0ZWRcclxuICAgICAgdGFibGUuICBUaGUgc29ydGVkIHRhYmxlIGlzIHdvcmtbXSwgd2l0aCB0aGF0IHNwYWNlIGJlaW5nIHByb3ZpZGVkIGJ5XHJcbiAgICAgIHRoZSBjYWxsZXIuXHJcblxyXG4gICAgICBUaGUgbGVuZ3RoIGNvdW50cyBhcmUgdXNlZCBmb3Igb3RoZXIgcHVycG9zZXMgYXMgd2VsbCwgaS5lLiBmaW5kaW5nXHJcbiAgICAgIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGxlbmd0aCBjb2RlcywgZGV0ZXJtaW5pbmcgaWYgdGhlcmUgYXJlIGFueVxyXG4gICAgICBjb2RlcyBhdCBhbGwsIGNoZWNraW5nIGZvciBhIHZhbGlkIHNldCBvZiBsZW5ndGhzLCBhbmQgbG9va2luZyBhaGVhZFxyXG4gICAgICBhdCBsZW5ndGggY291bnRzIHRvIGRldGVybWluZSBzdWItdGFibGUgc2l6ZXMgd2hlbiBidWlsZGluZyB0aGVcclxuICAgICAgZGVjb2RpbmcgdGFibGVzLlxyXG4gICAgKi9cclxuXHJcbiAgICAvKiBhY2N1bXVsYXRlIGxlbmd0aHMgZm9yIGNvZGVzIChhc3N1bWVzIGxlbnNbXSBhbGwgaW4gMC4uTUFYQklUUykgKi9cclxuICAgIGZvciAobGVuID0gMDsgbGVuIDw9IE1BWEJJVFM7IGxlbisrKVxyXG4gICAgICAgIGNvdW50W2xlbl0gPSAwO1xyXG4gICAgZm9yIChzeW0gPSAwOyBzeW0gPCBjb2Rlczsgc3ltKyspXHJcbiAgICAgICAgY291bnRbbGVuc1tsZW5zX29mZnNldCArIHN5bV1dKys7XHJcblxyXG4gICAgLyogYm91bmQgY29kZSBsZW5ndGhzLCBmb3JjZSByb290IHRvIGJlIHdpdGhpbiBjb2RlIGxlbmd0aHMgKi9cclxuICAgIHJvb3QgPSBiaXRzO1xyXG5cclxuICAgIGZvciAobWF4ID0gTUFYQklUUzsgbWF4ID49IDE7IG1heC0tKVxyXG4gICAgICAgIGlmIChjb3VudFttYXhdICE9IDApIGJyZWFrO1xyXG4gICAgaWYgKHJvb3QgPiBtYXgpIHJvb3QgPSBtYXg7XHJcbiAgICBpZiAobWF4ID09IDApIHtcclxuICAgICAgICAvKiBubyBzeW1ib2xzIHRvIGNvZGUgYXQgYWxsICovXHJcbiAgICAgICAgLyogaW52YWxpZCBjb2RlIG1hcmtlciAqL1xyXG4gICAgICAgIGhlcmUgPSB7b3A6NjQsIGJpdHM6MSwgdmFsOjB9O1xyXG4gICAgICAgIHN0YXRlX2NvZGVzW3RhYmxlKytdID0gaGVyZTsgLyogbWFrZSBhIHRhYmxlIHRvIGZvcmNlIGFuIGVycm9yICovXHJcbiAgICAgICAgc3RhdGVfY29kZXNbdGFibGUrK10gPSBoZXJlO1xyXG4gICAgICAgIGlmKHR5cGUgPT0gRElTVFMpIHN0YXRlLmRpc3RiaXRzID0gMTsgZWxzZSBzdGF0ZS5sZW5iaXRzID0gMTsgLy8gKmJpdHMgPSAxO1xyXG4gICAgICAgIHN0YXRlLm5leHQgPSB0YWJsZTtcclxuICAgICAgICByZXR1cm4gMDsgICAgIC8qIG5vIHN5bWJvbHMsIGJ1dCB3YWl0IGZvciBkZWNvZGluZyB0byByZXBvcnQgZXJyb3IgKi9cclxuICAgIH1cclxuICAgIGZvciAobWluID0gMTsgbWluIDwgbWF4OyBtaW4rKylcclxuICAgICAgICBpZiAoY291bnRbbWluXSAhPSAwKSBicmVhaztcclxuICAgIGlmIChyb290IDwgbWluKSByb290ID0gbWluO1xyXG5cclxuICAgIC8qIGNoZWNrIGZvciBhbiBvdmVyLXN1YnNjcmliZWQgb3IgaW5jb21wbGV0ZSBzZXQgb2YgbGVuZ3RocyAqL1xyXG4gICAgbGVmdCA9IDE7XHJcbiAgICBmb3IgKGxlbiA9IDE7IGxlbiA8PSBNQVhCSVRTOyBsZW4rKykge1xyXG4gICAgICAgIGxlZnQgPDw9IDE7XHJcbiAgICAgICAgbGVmdCAtPSBjb3VudFtsZW5dO1xyXG4gICAgICAgIGlmIChsZWZ0IDwgMCkgcmV0dXJuIC0xOyAgICAgICAgLyogb3Zlci1zdWJzY3JpYmVkICovXHJcbiAgICB9XHJcbiAgICBpZiAobGVmdCA+IDAgJiYgKHR5cGUgPT0gQ09ERVMgfHwgbWF4ICE9IDEpKSB7XHJcbiAgICAgICAgc3RhdGUubmV4dCA9IHRhYmxlO1xyXG4gICAgICAgIHJldHVybiAtMTsgICAgICAgICAgICAgICAgICAgICAgLyogaW5jb21wbGV0ZSBzZXQgKi9cclxuICAgIH1cclxuXHJcbiAgICAvKiBnZW5lcmF0ZSBvZmZzZXRzIGludG8gc3ltYm9sIHRhYmxlIGZvciBlYWNoIGxlbmd0aCBmb3Igc29ydGluZyAqL1xyXG4gICAgb2Zmc1sxXSA9IDA7XHJcbiAgICBmb3IgKGxlbiA9IDE7IGxlbiA8IE1BWEJJVFM7IGxlbisrKVxyXG4gICAgICAgIG9mZnNbbGVuICsgMV0gPSBvZmZzW2xlbl0gKyBjb3VudFtsZW5dO1xyXG5cclxuICAgIC8qIHNvcnQgc3ltYm9scyBieSBsZW5ndGgsIGJ5IHN5bWJvbCBvcmRlciB3aXRoaW4gZWFjaCBsZW5ndGggKi9cclxuICAgIGZvciAoc3ltID0gMDsgc3ltIDwgY29kZXM7IHN5bSsrKVxyXG4gICAgICAgIGlmIChsZW5zW2xlbnNfb2Zmc2V0ICsgc3ltXSAhPSAwKSB3b3JrW29mZnNbbGVuc1tsZW5zX29mZnNldCArIHN5bV1dKytdID0gc3ltO1xyXG5cclxuICAgIC8qXHJcbiAgICAgIENyZWF0ZSBhbmQgZmlsbCBpbiBkZWNvZGluZyB0YWJsZXMuICBJbiB0aGlzIGxvb3AsIHRoZSB0YWJsZSBiZWluZ1xyXG4gICAgICBmaWxsZWQgaXMgYXQgbmV4dCBhbmQgaGFzIGN1cnIgaW5kZXggYml0cy4gIFRoZSBjb2RlIGJlaW5nIHVzZWQgaXMgaHVmZlxyXG4gICAgICB3aXRoIGxlbmd0aCBsZW4uICBUaGF0IGNvZGUgaXMgY29udmVydGVkIHRvIGFuIGluZGV4IGJ5IGRyb3BwaW5nIGRyb3BcclxuICAgICAgYml0cyBvZmYgb2YgdGhlIGJvdHRvbS4gIEZvciBjb2RlcyB3aGVyZSBsZW4gaXMgbGVzcyB0aGFuIGRyb3AgKyBjdXJyLFxyXG4gICAgICB0aG9zZSB0b3AgZHJvcCArIGN1cnIgLSBsZW4gYml0cyBhcmUgaW5jcmVtZW50ZWQgdGhyb3VnaCBhbGwgdmFsdWVzIHRvXHJcbiAgICAgIGZpbGwgdGhlIHRhYmxlIHdpdGggcmVwbGljYXRlZCBlbnRyaWVzLlxyXG5cclxuICAgICAgcm9vdCBpcyB0aGUgbnVtYmVyIG9mIGluZGV4IGJpdHMgZm9yIHRoZSByb290IHRhYmxlLiAgV2hlbiBsZW4gZXhjZWVkc1xyXG4gICAgICByb290LCBzdWItdGFibGVzIGFyZSBjcmVhdGVkIHBvaW50ZWQgdG8gYnkgdGhlIHJvb3QgZW50cnkgd2l0aCBhbiBpbmRleFxyXG4gICAgICBvZiB0aGUgbG93IHJvb3QgYml0cyBvZiBodWZmLiAgVGhpcyBpcyBzYXZlZCBpbiBsb3cgdG8gY2hlY2sgZm9yIHdoZW4gYVxyXG4gICAgICBuZXcgc3ViLXRhYmxlIHNob3VsZCBiZSBzdGFydGVkLiAgZHJvcCBpcyB6ZXJvIHdoZW4gdGhlIHJvb3QgdGFibGUgaXNcclxuICAgICAgYmVpbmcgZmlsbGVkLCBhbmQgZHJvcCBpcyByb290IHdoZW4gc3ViLXRhYmxlcyBhcmUgYmVpbmcgZmlsbGVkLlxyXG5cclxuICAgICAgV2hlbiBhIG5ldyBzdWItdGFibGUgaXMgbmVlZGVkLCBpdCBpcyBuZWNlc3NhcnkgdG8gbG9vayBhaGVhZCBpbiB0aGVcclxuICAgICAgY29kZSBsZW5ndGhzIHRvIGRldGVybWluZSB3aGF0IHNpemUgc3ViLXRhYmxlIGlzIG5lZWRlZC4gIFRoZSBsZW5ndGhcclxuICAgICAgY291bnRzIGFyZSB1c2VkIGZvciB0aGlzLCBhbmQgc28gY291bnRbXSBpcyBkZWNyZW1lbnRlZCBhcyBjb2RlcyBhcmVcclxuICAgICAgZW50ZXJlZCBpbiB0aGUgdGFibGVzLlxyXG5cclxuICAgICAgdXNlZCBrZWVwcyB0cmFjayBvZiBob3cgbWFueSB0YWJsZSBlbnRyaWVzIGhhdmUgYmVlbiBhbGxvY2F0ZWQgZnJvbSB0aGVcclxuICAgICAgcHJvdmlkZWQgKnRhYmxlIHNwYWNlLiAgSXQgaXMgY2hlY2tlZCBmb3IgTEVOUyBhbmQgRElTVCB0YWJsZXMgYWdhaW5zdFxyXG4gICAgICB0aGUgY29uc3RhbnRzIEVOT1VHSF9MRU5TIGFuZCBFTk9VR0hfRElTVFMgdG8gZ3VhcmQgYWdhaW5zdCBjaGFuZ2VzIGluXHJcbiAgICAgIHRoZSBpbml0aWFsIHJvb3QgdGFibGUgc2l6ZSBjb25zdGFudHMuICBTZWUgdGhlIGNvbW1lbnRzIGluIGluZnRyZWVzLmhcclxuICAgICAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcblxyXG4gICAgICBzeW0gaW5jcmVtZW50cyB0aHJvdWdoIGFsbCBzeW1ib2xzLCBhbmQgdGhlIGxvb3AgdGVybWluYXRlcyB3aGVuXHJcbiAgICAgIGFsbCBjb2RlcyBvZiBsZW5ndGggbWF4LCBpLmUuIGFsbCBjb2RlcywgaGF2ZSBiZWVuIHByb2Nlc3NlZC4gIFRoaXNcclxuICAgICAgcm91dGluZSBwZXJtaXRzIGluY29tcGxldGUgY29kZXMsIHNvIGFub3RoZXIgbG9vcCBhZnRlciB0aGlzIG9uZSBmaWxsc1xyXG4gICAgICBpbiB0aGUgcmVzdCBvZiB0aGUgZGVjb2RpbmcgdGFibGVzIHdpdGggaW52YWxpZCBjb2RlIG1hcmtlcnMuXHJcbiAgICAqL1xyXG5cclxuICAgIC8qIHNldCB1cCBmb3IgY29kZSB0eXBlICovXHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgQ09ERVM6XHJcbiAgICAgICAgYmFzZSA9IGV4dHJhID0gd29yazsgICAgLyogZHVtbXkgdmFsdWUtLW5vdCB1c2VkICovXHJcbiAgICAgICAgYmFzZV9vZmZzZXQgPSAwO1xyXG4gICAgICAgIGV4dHJhX29mZnNldCA9IDA7XHJcbiAgICAgICAgZW5kID0gMTk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExFTlM6XHJcbiAgICAgICAgYmFzZSA9IGluZmxhdGVfdGFibGVfbGJhc2U7XHJcbiAgICAgICAgYmFzZV9vZmZzZXQgPSAtMjU3OyAvLyBiYXNlIC09IDI1NztcclxuICAgICAgICBleHRyYSA9IGluZmxhdGVfdGFibGVfbGV4dDtcclxuICAgICAgICBleHRyYV9vZmZzZXQgPSAtMjU3OyAvLyBleHRyYSAtPSAyNTc7XHJcbiAgICAgICAgZW5kID0gMjU2O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDogICAgICAgICAgICAvKiBESVNUUyAqL1xyXG4gICAgICAgIGJhc2UgPSBpbmZsYXRlX3RhYmxlX2RiYXNlO1xyXG4gICAgICAgIGV4dHJhID0gaW5mbGF0ZV90YWJsZV9kZXh0O1xyXG4gICAgICAgIGJhc2Vfb2Zmc2V0ID0gMDtcclxuICAgICAgICBleHRyYV9vZmZzZXQgPSAwO1xyXG4gICAgICAgIGVuZCA9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGluaXRpYWxpemUgc3RhdGUgZm9yIGxvb3AgKi9cclxuICAgIGh1ZmYgPSAwOyAgICAgICAgICAgICAgICAgICAvKiBzdGFydGluZyBjb2RlICovXHJcbiAgICBzeW0gPSAwOyAgICAgICAgICAgICAgICAgICAgLyogc3RhcnRpbmcgY29kZSBzeW1ib2wgKi9cclxuICAgIGxlbiA9IG1pbjsgICAgICAgICAgICAgICAgICAvKiBzdGFydGluZyBjb2RlIGxlbmd0aCAqL1xyXG4gICAgbmV4dCA9IHRhYmxlOyAgICAgICAgICAgICAgIC8qIGN1cnJlbnQgdGFibGUgdG8gZmlsbCBpbiAqL1xyXG4gICAgY3VyciA9IHJvb3Q7ICAgICAgICAgICAgICAgIC8qIGN1cnJlbnQgdGFibGUgaW5kZXggYml0cyAqL1xyXG4gICAgZHJvcCA9IDA7ICAgICAgICAgICAgICAgICAgIC8qIGN1cnJlbnQgYml0cyB0byBkcm9wIGZyb20gY29kZSBmb3IgaW5kZXggKi9cclxuICAgIGxvdyA9IC0xOyAgICAgICAgICAgICAgICAgICAvKiB0cmlnZ2VyIG5ldyBzdWItdGFibGUgd2hlbiBsZW4gPiByb290ICovXHJcbiAgICB1c2VkID0gMSA8PCByb290OyAgICAgICAgICAgLyogdXNlIHJvb3QgdGFibGUgZW50cmllcyAqL1xyXG4gICAgbWFzayA9IHVzZWQgLSAxOyAgICAgICAgICAgIC8qIG1hc2sgZm9yIGNvbXBhcmluZyBsb3cgKi9cclxuXHJcbiAgICAvKiBjaGVjayBhdmFpbGFibGUgdGFibGUgc3BhY2UgKi9cclxuICAgIGlmICgodHlwZSA9PSBMRU5TICYmIHVzZWQgPj0gRU5PVUdIX0xFTlMpIHx8XHJcbiAgICAgICAgKHR5cGUgPT0gRElTVFMgJiYgdXNlZCA+PSBFTk9VR0hfRElTVFMpKSB7XHJcbiAgICAgICAgc3RhdGUubmV4dCA9IHRhYmxlO1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHByb2Nlc3MgYWxsIGNvZGVzIGFuZCBtYWtlIHRhYmxlIGVudHJpZXMgKi9cclxuICAgIGZvciAoOzspIHtcclxuICAgICAgICAvKiBjcmVhdGUgdGFibGUgZW50cnkgKi9cclxuICAgICAgICBoZXJlID0ge29wOjAsIGJpdHM6bGVuIC0gZHJvcCwgdmFsOjB9O1xyXG4gICAgICAgIGlmICh3b3JrW3N5bV0gPCBlbmQpIHtcclxuICAgICAgICAgICAgaGVyZS52YWwgPSB3b3JrW3N5bV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdvcmtbc3ltXSA+IGVuZCkge1xyXG4gICAgICAgICAgICBoZXJlLm9wID0gZXh0cmFbZXh0cmFfb2Zmc2V0ICsgd29ya1tzeW1dXTtcclxuICAgICAgICAgICAgaGVyZS52YWwgPSBiYXNlW2Jhc2Vfb2Zmc2V0ICsgd29ya1tzeW1dXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhlcmUub3AgPSAzMiArIDY0OyAgICAgICAgIC8qIGVuZCBvZiBibG9jayAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogcmVwbGljYXRlIGZvciB0aG9zZSBpbmRpY2VzIHdpdGggbG93IGxlbiBiaXRzIGVxdWFsIHRvIGh1ZmYgKi9cclxuICAgICAgICBpbmNyID0gMSA8PCAobGVuIC0gZHJvcCk7XHJcbiAgICAgICAgZmlsbCA9IDEgPDwgY3VycjtcclxuICAgICAgICBtaW4gPSBmaWxsOyAgICAgICAgICAgICAgICAgLyogc2F2ZSBvZmZzZXQgdG8gbmV4dCB0YWJsZSAqL1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgZmlsbCAtPSBpbmNyO1xyXG4gICAgICAgICAgICBzdGF0ZV9jb2Rlc1tuZXh0ICsgKGh1ZmYgPj4+IGRyb3ApICsgZmlsbF0gPSBoZXJlO1xyXG4gICAgICAgIH0gd2hpbGUgKGZpbGwgIT0gMCk7XHJcblxyXG4gICAgICAgIC8qIGJhY2t3YXJkcyBpbmNyZW1lbnQgdGhlIGxlbi1iaXQgY29kZSBodWZmICovXHJcbiAgICAgICAgaW5jciA9IDEgPDwgKGxlbiAtIDEpO1xyXG4gICAgICAgIHdoaWxlIChodWZmICYgaW5jcilcclxuICAgICAgICAgICAgaW5jciA+Pj49IDE7XHJcbiAgICAgICAgaWYgKGluY3IgIT0gMCkge1xyXG4gICAgICAgICAgICBodWZmICY9IGluY3IgLSAxO1xyXG4gICAgICAgICAgICBodWZmICs9IGluY3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaHVmZiA9IDA7XHJcblxyXG4gICAgICAgIC8qIGdvIHRvIG5leHQgc3ltYm9sLCB1cGRhdGUgY291bnQsIGxlbiAqL1xyXG4gICAgICAgIHN5bSsrO1xyXG4gICAgICAgIGlmICgtLShjb3VudFtsZW5dKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChsZW4gPT0gbWF4KSBicmVhaztcclxuICAgICAgICAgICAgbGVuID0gbGVuc1tsZW5zX29mZnNldCArIHdvcmtbc3ltXV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBjcmVhdGUgbmV3IHN1Yi10YWJsZSBpZiBuZWVkZWQgKi9cclxuICAgICAgICBpZiAobGVuID4gcm9vdCAmJiAoaHVmZiAmIG1hc2spICE9IGxvdykge1xyXG4gICAgICAgICAgICAvKiBpZiBmaXJzdCB0aW1lLCB0cmFuc2l0aW9uIHRvIHN1Yi10YWJsZXMgKi9cclxuICAgICAgICAgICAgaWYgKGRyb3AgPT0gMClcclxuICAgICAgICAgICAgICAgIGRyb3AgPSByb290O1xyXG5cclxuICAgICAgICAgICAgLyogaW5jcmVtZW50IHBhc3QgbGFzdCB0YWJsZSAqL1xyXG4gICAgICAgICAgICBuZXh0ICs9IG1pbjsgICAgICAgICAgICAvKiBoZXJlIG1pbiBpcyAxIDw8IGN1cnIgKi9cclxuXHJcbiAgICAgICAgICAgIC8qIGRldGVybWluZSBsZW5ndGggb2YgbmV4dCB0YWJsZSAqL1xyXG4gICAgICAgICAgICBjdXJyID0gbGVuIC0gZHJvcDtcclxuICAgICAgICAgICAgbGVmdCA9ICgxIDw8IGN1cnIpO1xyXG4gICAgICAgICAgICB3aGlsZSAoY3VyciArIGRyb3AgPCBtYXgpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQgLT0gY291bnRbY3VyciArIGRyb3BdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnQgPD0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjdXJyKys7XHJcbiAgICAgICAgICAgICAgICBsZWZ0IDw8PSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBjaGVjayBmb3IgZW5vdWdoIHNwYWNlICovXHJcbiAgICAgICAgICAgIHVzZWQgKz0gMSA8PCBjdXJyO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT0gTEVOUyAmJiB1c2VkID49IEVOT1VHSF9MRU5TKSB8fFxyXG4gICAgICAgICAgICAgICAgKHR5cGUgPT0gRElTVFMgJiYgdXNlZCA+PSBFTk9VR0hfRElTVFMpKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5uZXh0ID0gdGFibGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogcG9pbnQgZW50cnkgaW4gcm9vdCB0YWJsZSB0byBzdWItdGFibGUgKi9cclxuICAgICAgICAgICAgbG93ID0gaHVmZiAmIG1hc2s7XHJcbiAgICAgICAgICAgIHN0YXRlX2NvZGVzW3RhYmxlICsgbG93XSA9IHtvcDpjdXJyLCBiaXRzOnJvb3QsIHZhbDpuZXh0IC0gdGFibGV9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBmaWxsIGluIHJlbWFpbmluZyB0YWJsZSBlbnRyeSBpZiBjb2RlIGlzIGluY29tcGxldGUgKGd1YXJhbnRlZWQgdG8gaGF2ZVxyXG4gICAgICAgYXQgbW9zdCBvbmUgcmVtYWluaW5nIGVudHJ5LCBzaW5jZSBpZiB0aGUgY29kZSBpcyBpbmNvbXBsZXRlLCB0aGVcclxuICAgICAgIG1heGltdW0gY29kZSBsZW5ndGggdGhhdCB3YXMgYWxsb3dlZCB0byBnZXQgdGhpcyBmYXIgaXMgb25lIGJpdCkgKi9cclxuICAgIGlmIChodWZmICE9IDApIHtcclxuICAgICAgICBzdGF0ZV9jb2Rlc1tuZXh0ICsgaHVmZl0gPSB7b3A6NjQsIGJpdHM6bGVuIC0gZHJvcCwgdmFsOjB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHNldCByZXR1cm4gcGFyYW1ldGVycyAqL1xyXG4gICAgc3RhdGUubmV4dCA9IHRhYmxlICsgdXNlZDtcclxuICAgIGlmKHR5cGUgPT0gRElTVFMpIHN0YXRlLmRpc3RiaXRzID0gcm9vdDsgZWxzZSBzdGF0ZS5sZW5iaXRzID0gcm9vdDsgLy8qYml0cyA9IHJvb3Q7XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5cclxuLyogaW5mZmFzdC5jIC0tIGZhc3QgZGVjb2RpbmdcclxuICogQ29weXJpZ2h0IChDKSAxOTk1LTIwMDgsIDIwMTAgTWFyayBBZGxlclxyXG4gKiBGb3IgY29uZGl0aW9ucyBvZiBkaXN0cmlidXRpb24gYW5kIHVzZSwgc2VlIGNvcHlyaWdodCBub3RpY2UgaW4gemxpYi5oXHJcbiAqL1xyXG5cclxuLypcclxuICAgRGVjb2RlIGxpdGVyYWwsIGxlbmd0aCwgYW5kIGRpc3RhbmNlIGNvZGVzIGFuZCB3cml0ZSBvdXQgdGhlIHJlc3VsdGluZ1xyXG4gICBsaXRlcmFsIGFuZCBtYXRjaCBieXRlcyB1bnRpbCBlaXRoZXIgbm90IGVub3VnaCBpbnB1dCBvciBvdXRwdXQgaXNcclxuICAgYXZhaWxhYmxlLCBhbiBlbmQtb2YtYmxvY2sgaXMgZW5jb3VudGVyZWQsIG9yIGEgZGF0YSBlcnJvciBpcyBlbmNvdW50ZXJlZC5cclxuICAgV2hlbiBsYXJnZSBlbm91Z2ggaW5wdXQgYW5kIG91dHB1dCBidWZmZXJzIGFyZSBzdXBwbGllZCB0byBpbmZsYXRlKCksIGZvclxyXG4gICBleGFtcGxlLCBhIDE2SyBpbnB1dCBidWZmZXIgYW5kIGEgNjRLIG91dHB1dCBidWZmZXIsIG1vcmUgdGhhbiA5NSUgb2YgdGhlXHJcbiAgIGluZmxhdGUgZXhlY3V0aW9uIHRpbWUgaXMgc3BlbnQgaW4gdGhpcyByb3V0aW5lLlxyXG5cclxuICAgRW50cnkgYXNzdW1wdGlvbnM6XHJcblxyXG4gICAgICAgIHN0YXRlLT5tb2RlID09IExFTlxyXG4gICAgICAgIHN0cm0tPmF2YWlsX2luID49IDZcclxuICAgICAgICBzdHJtLT5hdmFpbF9vdXQgPj0gMjU4XHJcbiAgICAgICAgc3RhcnQgPj0gc3RybS0+YXZhaWxfb3V0XHJcbiAgICAgICAgc3RhdGUtPmJpdHMgPCA4XHJcblxyXG4gICBPbiByZXR1cm4sIHN0YXRlLT5tb2RlIGlzIG9uZSBvZjpcclxuXHJcbiAgICAgICAgTEVOIC0tIHJhbiBvdXQgb2YgZW5vdWdoIG91dHB1dCBzcGFjZSBvciBlbm91Z2ggYXZhaWxhYmxlIGlucHV0XHJcbiAgICAgICAgVFlQRSAtLSByZWFjaGVkIGVuZCBvZiBibG9jayBjb2RlLCBpbmZsYXRlKCkgdG8gaW50ZXJwcmV0IG5leHQgYmxvY2tcclxuICAgICAgICBCQUQgLS0gZXJyb3IgaW4gYmxvY2sgZGF0YVxyXG5cclxuICAgTm90ZXM6XHJcblxyXG4gICAgLSBUaGUgbWF4aW11bSBpbnB1dCBiaXRzIHVzZWQgYnkgYSBsZW5ndGgvZGlzdGFuY2UgcGFpciBpcyAxNSBiaXRzIGZvciB0aGVcclxuICAgICAgbGVuZ3RoIGNvZGUsIDUgYml0cyBmb3IgdGhlIGxlbmd0aCBleHRyYSwgMTUgYml0cyBmb3IgdGhlIGRpc3RhbmNlIGNvZGUsXHJcbiAgICAgIGFuZCAxMyBiaXRzIGZvciB0aGUgZGlzdGFuY2UgZXh0cmEuICBUaGlzIHRvdGFscyA0OCBiaXRzLCBvciBzaXggYnl0ZXMuXHJcbiAgICAgIFRoZXJlZm9yZSBpZiBzdHJtLT5hdmFpbF9pbiA+PSA2LCB0aGVuIHRoZXJlIGlzIGVub3VnaCBpbnB1dCB0byBhdm9pZFxyXG4gICAgICBjaGVja2luZyBmb3IgYXZhaWxhYmxlIGlucHV0IHdoaWxlIGRlY29kaW5nLlxyXG5cclxuICAgIC0gVGhlIG1heGltdW0gYnl0ZXMgdGhhdCBhIHNpbmdsZSBsZW5ndGgvZGlzdGFuY2UgcGFpciBjYW4gb3V0cHV0IGlzIDI1OFxyXG4gICAgICBieXRlcywgd2hpY2ggaXMgdGhlIG1heGltdW0gbGVuZ3RoIHRoYXQgY2FuIGJlIGNvZGVkLiAgaW5mbGF0ZV9mYXN0KClcclxuICAgICAgcmVxdWlyZXMgc3RybS0+YXZhaWxfb3V0ID49IDI1OCBmb3IgZWFjaCBsb29wIHRvIGF2b2lkIGNoZWNraW5nIGZvclxyXG4gICAgICBvdXRwdXQgc3BhY2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbmZsYXRlX2Zhc3Qoc3RybSxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0KSAvKiBpbmZsYXRlKCkncyBzdGFydGluZyB2YWx1ZSBmb3Igc3RybS0+YXZhaWxfb3V0ICovXHJcbntcclxuICAgIHZhciBzdGF0ZTtcclxuICAgIHZhciBpbnB1dF9kYXRhOyAgICAgIC8qIGxvY2FsIHN0cm0tPmlucHV0X2RhdGEgKi9cclxuICAgIHZhciBuZXh0X2luOyAgICAgIC8qIHpsaWIuanM6IGluZGV4IG9mIGlucHV0X2RhdGEgKi9cclxuICAgIHZhciBsYXN0OyAgICAvKiB3aGlsZSBuZXh0X2luIDwgbGFzdCwgZW5vdWdoIGlucHV0IGF2YWlsYWJsZSAqL1xyXG4gICAgdmFyIG91dDsgICAgIC8qIGxvY2FsIHN0cm0ubmV4dF9vdXQgKi9cclxuICAgIHZhciBiZWc7ICAgICAvKiBpbmZsYXRlKCkncyBpbml0aWFsIHN0cm0ubmV4dF9vdXQgKi9cclxuICAgIHZhciBlbmQ7ICAgICAvKiB3aGlsZSBvdXQgPCBlbmQsIGVub3VnaCBzcGFjZSBhdmFpbGFibGUgKi9cclxuLy9OT1NQUlQgI2lmZGVmIElORkxBVEVfU1RSSUNUXHJcbi8vICAgIHVuc2lnbmVkIGRtYXg7ICAgICAgICAgICAgICAvKiBtYXhpbXVtIGRpc3RhbmNlIGZyb20gemxpYiBoZWFkZXIgKi9cclxuLy8jZW5kaWZcclxuICAgIHZhciB3c2l6ZTsgICAgICAgICAgICAgLyogd2luZG93IHNpemUgb3IgemVybyBpZiBub3QgdXNpbmcgd2luZG93ICovXHJcbiAgICB2YXIgd2hhdmU7ICAgICAgICAgICAgIC8qIHZhbGlkIGJ5dGVzIGluIHRoZSB3aW5kb3cgKi9cclxuICAgIHZhciB3bmV4dDsgICAgICAgICAgICAgLyogd2luZG93IHdyaXRlIGluZGV4ICovXHJcbiAgICB2YXIgd2luZG93OyAgLyogYWxsb2NhdGVkIHNsaWRpbmcgd2luZG93LCBpZiB3c2l6ZSAhPSAwICovXHJcbiAgICB2YXIgaG9sZDsgICAgICAgICAvKiBsb2NhbCBzdHJtLT5ob2xkICovXHJcbiAgICB2YXIgYml0czsgICAgICAgICAgICAgIC8qIGxvY2FsIHN0cm0tPmJpdHMgKi9cclxuICAgIHZhciBjb2RlczsgICAgICAgICAgICAgLyogemxpYi5qczogbG9jYWwgc3RhdGUuY29kZXMgKi9cclxuICAgIHZhciBsY29kZTsgICAgICAvKiBsb2NhbCBzdHJtLT5sZW5jb2RlICovXHJcbiAgICB2YXIgZGNvZGU7ICAgICAgLyogbG9jYWwgc3RybS0+ZGlzdGNvZGUgKi9cclxuICAgIHZhciBsbWFzazsgICAgICAgICAgICAgLyogbWFzayBmb3IgZmlyc3QgbGV2ZWwgb2YgbGVuZ3RoIGNvZGVzICovXHJcbiAgICB2YXIgZG1hc2s7ICAgICAgICAgICAgIC8qIG1hc2sgZm9yIGZpcnN0IGxldmVsIG9mIGRpc3RhbmNlIGNvZGVzICovXHJcbiAgICB2YXIgaGVyZTsgICAgICAgICAgICAgICAgICAvKiByZXRyaWV2ZWQgdGFibGUgZW50cnkgKi9cclxuICAgIHZhciBvcDsgICAgICAgICAgICAgICAgLyogY29kZSBiaXRzLCBvcGVyYXRpb24sIGV4dHJhIGJpdHMsIG9yICovXHJcbiAgICAvKiAgd2luZG93IHBvc2l0aW9uLCB3aW5kb3cgYnl0ZXMgdG8gY29weSAqL1xyXG4gICAgdmFyIGxlbjsgICAgICAgICAgICAgICAvKiBtYXRjaCBsZW5ndGgsIHVudXNlZCBieXRlcyAqL1xyXG4gICAgdmFyIGRpc3Q7ICAgICAgICAgICAgICAvKiBtYXRjaCBkaXN0YW5jZSAqL1xyXG4gICAgLy8gICAgdmFyIGZyb207ICAgIC8qIHdoZXJlIHRvIGNvcHkgbWF0Y2ggZnJvbSAqL1xyXG4gICAgdmFyIGZyb21fd2luZG93X29mZnNldCA9IC0xOyAvKiBpbmRleCBvZiB3aW5kb3dbXSAqL1xyXG4gICAgdmFyIGZyb21fb3V0X29mZnNldCA9IC0xOyAvKiBpbmRleCBvZiBuZXh0X291dFtdICovXHJcblxyXG4gICAgLyogY29weSBzdGF0ZSB0byBsb2NhbCB2YXJpYWJsZXMgKi9cclxuICAgIHN0YXRlID0gc3RybS5zdGF0ZTtcclxuICAgIGlucHV0X2RhdGEgPSBzdHJtLmlucHV0X2RhdGE7XHJcbiAgICBuZXh0X2luID0gc3RybS5uZXh0X2luO1xyXG4gICAgbGFzdCA9IG5leHRfaW4gKyBzdHJtLmF2YWlsX2luIC0gNTtcclxuICAgIG91dCA9IHN0cm0ubmV4dF9vdXQ7XHJcbiAgICBiZWcgPSBvdXQgLSAoc3RhcnQgLSBzdHJtLmF2YWlsX291dCk7XHJcbiAgICBlbmQgPSBvdXQgKyAoc3RybS5hdmFpbF9vdXQgLSAyNTcpO1xyXG4vL05PU1BSVCAjaWZkZWYgSU5GTEFURV9TVFJJQ1RcclxuLy8gICAgZG1heCA9IHN0YXRlLT5kbWF4O1xyXG4vLyNlbmRpZlxyXG4gICAgd3NpemUgPSBzdGF0ZS53c2l6ZTtcclxuICAgIHdoYXZlID0gc3RhdGUud2hhdmU7XHJcbiAgICB3bmV4dCA9IHN0YXRlLnduZXh0O1xyXG4gICAgd2luZG93ID0gc3RhdGUud2luZG93O1xyXG4gICAgaG9sZCA9IHN0YXRlLmhvbGQ7XHJcbiAgICBiaXRzID0gc3RhdGUuYml0cztcclxuICAgIGNvZGVzID0gc3RhdGUuY29kZXM7XHJcbiAgICBsY29kZSA9IHN0YXRlLmxlbmNvZGU7XHJcbiAgICBkY29kZSA9IHN0YXRlLmRpc3Rjb2RlO1xyXG4gICAgbG1hc2sgPSAoMSA8PCBzdGF0ZS5sZW5iaXRzKSAtIDE7XHJcbiAgICBkbWFzayA9ICgxIDw8IHN0YXRlLmRpc3RiaXRzKSAtIDE7XHJcblxyXG4gICAgLyogZGVjb2RlIGxpdGVyYWxzIGFuZCBsZW5ndGgvZGlzdGFuY2VzIHVudGlsIGVuZC1vZi1ibG9jayBvciBub3QgZW5vdWdoXHJcbiAgICAgICBpbnB1dCBkYXRhIG9yIG91dHB1dCBzcGFjZSAqL1xyXG5sb29wOiBkbyB7XHJcbiAgICAgICAgaWYgKGJpdHMgPCAxNSkge1xyXG4gICAgICAgICAgICBob2xkICs9IChpbnB1dF9kYXRhLmNoYXJDb2RlQXQobmV4dF9pbisrKSAmIDB4ZmYpIDw8IGJpdHM7XHJcbiAgICAgICAgICAgIGJpdHMgKz0gODtcclxuICAgICAgICAgICAgaG9sZCArPSAoaW5wdXRfZGF0YS5jaGFyQ29kZUF0KG5leHRfaW4rKykgJiAweGZmKSA8PCBiaXRzO1xyXG4gICAgICAgICAgICBiaXRzICs9IDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlcmUgPSBjb2Rlc1tsY29kZSArIChob2xkICYgbG1hc2spXTtcclxuICAgIGRvbGVuOiB3aGlsZSh0cnVlKSB7XHJcbiAgICAgICAgICAgIG9wID0gaGVyZS5iaXRzO1xyXG4gICAgICAgICAgICBob2xkID4+Pj0gb3A7XHJcbiAgICAgICAgICAgIGJpdHMgLT0gb3A7XHJcbiAgICAgICAgICAgIG9wID0gaGVyZS5vcDtcclxuICAgICAgICAgICAgaWYgKG9wID09IDApIHsgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGxpdGVyYWwgKi9cclxuLy8gICAgICAgICAgICBUcmFjZXZ2KChzdGRlcnIsIGhlcmUudmFsID49IDB4MjAgJiYgaGVyZS52YWwgPCAweDdmID9cclxuLy8gICAgICAgICAgICAgICAgICAgIFwiaW5mbGF0ZTogICAgICAgICBsaXRlcmFsICclYydcXG5cIiA6XHJcbi8vICAgICAgICAgICAgICAgICAgICBcImluZmxhdGU6ICAgICAgICAgbGl0ZXJhbCAweCUwMnhcXG5cIiwgaGVyZS52YWwpKTtcclxuICAgICAgICAgICAgICAgIHN0cm0ub3V0cHV0X2RhdGEgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoZXJlLnZhbCk7XHJcbiAgICAgICAgICAgICAgICBvdXQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvcCAmIDE2KSB7ICAgICAgICAgICAgICAgICAgICAgLyogbGVuZ3RoIGJhc2UgKi9cclxuICAgICAgICAgICAgICAgIGxlbiA9IGhlcmUudmFsO1xyXG4gICAgICAgICAgICAgICAgb3AgJj0gMTU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGV4dHJhIGJpdHMgKi9cclxuICAgICAgICAgICAgICAgIGlmIChvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiaXRzIDwgb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9sZCArPSAoaW5wdXRfZGF0YS5jaGFyQ29kZUF0KG5leHRfaW4rKykgJiAweGZmKSA8PCBiaXRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaXRzICs9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxlbiArPSBob2xkICYgKCgxIDw8IG9wKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhvbGQgPj4+PSBvcDtcclxuICAgICAgICAgICAgICAgICAgICBiaXRzIC09IG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIFRyYWNldnYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgICAgIGxlbmd0aCAldVxcblwiLCBsZW4pKTtcclxuICAgICAgICAgICAgICAgIGlmIChiaXRzIDwgMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICBob2xkICs9IChpbnB1dF9kYXRhLmNoYXJDb2RlQXQobmV4dF9pbisrKSAmIDB4ZmYpIDw8IGJpdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgYml0cyArPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhvbGQgKz0gKGlucHV0X2RhdGEuY2hhckNvZGVBdChuZXh0X2luKyspICYgMHhmZikgPDwgYml0cztcclxuICAgICAgICAgICAgICAgICAgICBiaXRzICs9IDg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoZXJlID0gY29kZXNbZGNvZGUgKyAoaG9sZCAmIGRtYXNrKV07XHJcbiAgICAgICAgICAgIGRvZGlzdDogd2hpbGUodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wID0gaGVyZS5iaXRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGhvbGQgPj4+PSBvcDtcclxuICAgICAgICAgICAgICAgICAgICBiaXRzIC09IG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wID0gaGVyZS5vcDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3AgJiAxNikgeyAgICAgICAgICAgICAgICAgICAgICAvKiBkaXN0YW5jZSBiYXNlICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3QgPSBoZXJlLnZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3AgJj0gMTU7ICAgICAgICAgICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgZXh0cmEgYml0cyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYml0cyA8IG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob2xkICs9IChpbnB1dF9kYXRhLmNoYXJDb2RlQXQobmV4dF9pbisrKSAmIDB4ZmYpIDw8IGJpdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaXRzICs9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYml0cyA8IG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZCArPSAoaW5wdXRfZGF0YS5jaGFyQ29kZUF0KG5leHRfaW4rKykgJiAweGZmKSA8PCBiaXRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpdHMgKz0gODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0ICs9IGhvbGQgJiAoKDEgPDwgb3ApIC0gMSk7XHJcbi8vTk9TUFJUICNpZmRlZiBJTkZMQVRFX1NUUklDVFxyXG4vLyAgICAgICAgICAgICAgICBpZiAoZGlzdCA+IGRtYXgpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIHN0cm0tPm1zZyA9IChjaGFyICopXCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgc3RhdGUtPm1vZGUgPSBCQUQ7XHJcbi8vICAgICAgICAgICAgICAgICAgICBicmVhayBsb29wO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vI2VuZGlmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvbGQgPj4+PSBvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYml0cyAtPSBvcDtcclxuLy8gICAgICAgICAgICAgICAgVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgZGlzdGFuY2UgJXVcXG5cIiwgZGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcCA9IG91dCAtIGJlZzsgICAgICAgICAgICAgICAgIC8qIG1heCBkaXN0YW5jZSBpbiBvdXRwdXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPiBvcCkgeyAgICAgICAgICAgICAgICAvKiBzZWUgaWYgY29weSBmcm9tIHdpbmRvdyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3AgPSBkaXN0IC0gb3A7ICAgICAgICAgICAgIC8qIGRpc3RhbmNlIGJhY2sgaW4gd2luZG93ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3AgPiB3aGF2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zYW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgbG9vcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vTk9TUFJUICNpZmRlZiBJTkZMQVRFX0FMTE9XX0lOVkFMSURfRElTVEFOQ0VfVE9PRkFSX0FSUlJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVuIDw9IG9wIC0gd2hhdmUpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUFVQKG91dCkgPSAwO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICgtLWxlbik7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBsZW4gLT0gb3AgLSB3aGF2ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBkbyB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBVUChvdXQpID0gMDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICgtLW9wID4gd2hhdmUpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcCA9PSAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gPSBvdXQgLSBkaXN0O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbyB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQVVAob3V0KSA9IFBVUChmcm9tKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1sZW4pO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vI2VuZGlmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IC8vIGlmIChvcCA+IHdoYXZlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fd2luZG93X29mZnNldCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tX291dF9vZmZzZXQgPSAtMTtcclxuXHRcdFx0XHRcdFx0XHRpZiAod25leHQgPT0gMCkgeyAgICAgICAgICAgLyogdmVyeSBjb21tb24gY2FzZSAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0ZnJvbV93aW5kb3dfb2Zmc2V0ICs9IHdzaXplIC0gb3A7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAob3AgPCBsZW4pIHsgICAgICAgICAvKiBzb21lIGZyb20gd2luZG93ICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxlbiAtPSBvcDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RybS5vdXRwdXRfZGF0YSArPSB3aW5kb3cuc3Vic3RyaW5nKGZyb21fd2luZG93X29mZnNldCwgZnJvbV93aW5kb3dfb2Zmc2V0ICsgb3ApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvdXQgKz0gb3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJvbV93aW5kb3dfb2Zmc2V0ID0gLTE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZyb21fb3V0X29mZnNldCA9IG91dCAtIGRpc3Q7ICAvKiByZXN0IGZyb20gb3V0cHV0ICovXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG4vL05PVFJFQUNIRUQgZWxzZSBpZiAod25leHQgPCBvcCkgeyAgICAgIC8qIHdyYXAgYXJvdW5kIHdpbmRvdyAqL1xyXG4vL05PVFJFQUNIRUQgICAgIGZyb20gKz0gd3NpemUgKyB3bmV4dCAtIG9wO1xyXG4vL05PVFJFQUNIRUQgICAgIG9wIC09IHduZXh0O1xyXG4vL05PVFJFQUNIRUQgICAgIGlmIChvcCA8IGxlbikgeyAgICAgICAgIC8qIHNvbWUgZnJvbSBlbmQgb2Ygd2luZG93ICovXHJcbi8vTk9UUkVBQ0hFRCAgICAgICAgIGxlbiAtPSBvcDtcclxuLy9OT1RSRUFDSEVEICAgICAgICAgZG8ge1xyXG4vL05PVFJFQUNIRUQgICAgICAgICAgICAgUFVQKG91dCkgPSBQVVAoZnJvbSk7XHJcbi8vTk9UUkVBQ0hFRCAgICAgICAgIH0gd2hpbGUgKC0tb3ApO1xyXG4vL05PVFJFQUNIRUQgICAgICAgICBmcm9tID0gd2luZG93IC0gT0ZGO1xyXG4vL05PVFJFQUNIRUQgICAgICAgICBpZiAod25leHQgPCBsZW4pIHsgIC8qIHNvbWUgZnJvbSBzdGFydCBvZiB3aW5kb3cgKi9cclxuLy9OT1RSRUFDSEVEICAgICAgICAgICAgIG9wID0gd25leHQ7XHJcbi8vTk9UUkVBQ0hFRCAgICAgICAgICAgICBsZW4gLT0gb3A7XHJcbi8vTk9UUkVBQ0hFRCAgICAgICAgICAgICBkbyB7XHJcbi8vTk9UUkVBQ0hFRCAgICAgICAgICAgICAgICAgUFVQKG91dCkgPSBQVVAoZnJvbSk7XHJcbi8vTk9UUkVBQ0hFRCAgICAgICAgICAgICB9IHdoaWxlICgtLW9wKTtcclxuLy9OT1RSRUFDSEVEICAgICAgICAgICAgIGZyb20gPSBvdXQgLSBkaXN0OyAgICAgIC8qIHJlc3QgZnJvbSBvdXRwdXQgKi9cclxuLy9OT1RSRUFDSEVEICAgICAgICAgfVxyXG4vL05PVFJFQUNIRUQgICAgIH1cclxuLy9OT1RSRUFDSEVEIH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgLyogY29udGlndW91cyBpbiB3aW5kb3cgKi9cclxuXHRcdFx0XHRcdFx0XHRcdGZyb21fd2luZG93X29mZnNldCArPSB3bmV4dCAtIG9wO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG9wIDwgbGVuKSB7ICAgICAgICAgLyogc29tZSBmcm9tIHdpbmRvdyAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZW4gLT0gb3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm0ub3V0cHV0X2RhdGEgKz0gd2luZG93LnN1YnN0cmluZyhmcm9tX3dpbmRvd19vZmZzZXQsIGZyb21fd2luZG93X29mZnNldCArIG9wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3V0ICs9IG9wO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmcm9tX3dpbmRvd19vZmZzZXQgPSAtMTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJvbV9vdXRfb2Zmc2V0ID0gb3V0IC0gZGlzdDsgIC8qIHJlc3QgZnJvbSBvdXRwdXQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tX3dpbmRvd19vZmZzZXQgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fb3V0X29mZnNldCA9IG91dCAtIGRpc3Q7ICAgICAgICAgIC8qIGNvcHkgZGlyZWN0IGZyb20gb3V0cHV0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcm9tX3dpbmRvd19vZmZzZXQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RybS5vdXRwdXRfZGF0YSArPSB3aW5kb3cuc3Vic3RyaW5nKGZyb21fd2luZG93X29mZnNldCwgZnJvbV93aW5kb3dfb2Zmc2V0ICsgbGVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBsZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tX3dpbmRvd19vZmZzZXQgKz0gbGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlbl9pbm5lciA9IGxlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxlbl9pbm5lciA+IG91dCAtIGZyb21fb3V0X29mZnNldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuX2lubmVyID0gb3V0IC0gZnJvbV9vdXRfb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RybS5vdXRwdXRfZGF0YSArPSBzdHJtLm91dHB1dF9kYXRhLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tX291dF9vZmZzZXQsIGZyb21fb3V0X29mZnNldCArIGxlbl9pbm5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXQgKz0gbGVuX2lubmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuIC09IGxlbl9pbm5lcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fb3V0X29mZnNldCArPSBsZW5faW5uZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXQgKz0gbGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxlbiA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJtLm91dHB1dF9kYXRhICs9IHN0cm0ub3V0cHV0X2RhdGEuY2hhckF0KGZyb21fb3V0X29mZnNldCsrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJtLm91dHB1dF9kYXRhICs9IHN0cm0ub3V0cHV0X2RhdGEuY2hhckF0KGZyb21fb3V0X29mZnNldCsrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJtLm91dHB1dF9kYXRhICs9IHN0cm0ub3V0cHV0X2RhdGEuY2hhckF0KGZyb21fb3V0X29mZnNldCsrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW4gLT0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJtLm91dHB1dF9kYXRhICs9IHN0cm0ub3V0cHV0X2RhdGEuY2hhckF0KGZyb21fb3V0X29mZnNldCsrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVuID4gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RybS5vdXRwdXRfZGF0YSArPSBzdHJtLm91dHB1dF9kYXRhLmNoYXJBdChmcm9tX291dF9vZmZzZXQrKyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKG9wICYgNjQpID09IDApIHsgICAgICAgICAgLyogMm5kIGxldmVsIGRpc3RhbmNlIGNvZGUgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVyZSA9IGNvZGVzW2Rjb2RlICsgKGhlcmUudmFsICsgKGhvbGQgJiAoKDEgPDwgb3ApIC0gMSkpKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIGRvZGlzdDsgLy8gZ290byBkb2Rpc3RcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgZGlzdGFuY2UgY29kZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGxvb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrIGRvZGlzdDsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKChvcCAmIDY0KSA9PSAwKSB7ICAgICAgICAgICAgICAvKiAybmQgbGV2ZWwgbGVuZ3RoIGNvZGUgKi9cclxuICAgICAgICAgICAgICAgIGhlcmUgPSBjb2Rlc1tsY29kZSArIChoZXJlLnZhbCArIChob2xkICYgKCgxIDw8IG9wKSAtIDEpKSldO1xyXG4gICAgICAgICAgICAgICAgY29udGludWUgZG9sZW47IC8vIGdvdG8gZG9sZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3AgJiAzMikgeyAgICAgICAgICAgICAgICAgICAgIC8qIGVuZC1vZi1ibG9jayAqL1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBUcmFjZXZ2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgICBlbmQgb2YgYmxvY2tcXG5cIikpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IFRZUEU7XHJcbiAgICAgICAgICAgICAgICBicmVhayBsb29wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhayBsb29wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrIGRvbGVuOyB9XHJcbiAgICB9IHdoaWxlIChuZXh0X2luIDwgbGFzdCAmJiBvdXQgPCBlbmQpO1xyXG5cclxuICAgIC8qIHJldHVybiB1bnVzZWQgYnl0ZXMgKG9uIGVudHJ5LCBiaXRzIDwgOCwgc28gaW4gd29uJ3QgZ28gdG9vIGZhciBiYWNrKSAqL1xyXG4gICAgbGVuID0gYml0cyA+Pj4gMztcclxuICAgIG5leHRfaW4gLT0gbGVuO1xyXG4gICAgYml0cyAtPSBsZW4gPDwgMztcclxuICAgIGhvbGQgJj0gKDEgPDwgYml0cykgLSAxO1xyXG5cclxuICAgIC8qIHVwZGF0ZSBzdGF0ZSBhbmQgcmV0dXJuICovXHJcbiAgICBzdHJtLm5leHRfaW4gPSBuZXh0X2luO1xyXG4gICAgc3RybS5uZXh0X291dCA9IG91dDtcclxuICAgIHN0cm0uYXZhaWxfaW4gPSAobmV4dF9pbiA8IGxhc3QgPyA1ICsgKGxhc3QgLSBuZXh0X2luKSA6IDUgLSAobmV4dF9pbiAtIGxhc3QpKTtcclxuICAgIHN0cm0uYXZhaWxfb3V0ID0gKG91dCA8IGVuZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAyNTcgKyAoZW5kIC0gb3V0KSA6IDI1NyAtIChvdXQgLSBlbmQpKTtcclxuICAgIHN0YXRlLmhvbGQgPSBob2xkO1xyXG4gICAgc3RhdGUuYml0cyA9IGJpdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld19hcnJheShzaXplKVxyXG57XHJcbiAgICB2YXIgaTtcclxuICAgIHZhciBhcnkgPSBuZXcgQXJyYXkoc2l6ZSk7XHJcbiAgICBmb3IoaSA9IDA7IGkgPCBzaXplOyBpKyspXHJcbiAgICAgICAgYXJ5W2ldID0gMDtcclxuICAgIHJldHVybiBhcnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldGFyZyhvcHRzLCBuYW1lLCBkZWZfdmFsdWUpXHJcbntcclxuICAgIHJldHVybiAob3B0cyAmJiAobmFtZSBpbiBvcHRzKSkgPyBvcHRzW25hbWVdIDogZGVmX3ZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja3N1bV9ub25lKClcclxue1xyXG5cdHJldHVybiAwO1xyXG59XHJcblxyXG4vKipcclxuICogel9zdHJlYW0gY29uc3RydWN0b3JcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBpbmZsYXRlX3N0YXRlKClcclxue1xyXG4gICAgdmFyIGk7XHJcblxyXG4gICAgdGhpcy5tb2RlID0gMDsgICAgICAgICAgICAgIC8qIGN1cnJlbnQgaW5mbGF0ZSBtb2RlICovXHJcbiAgICB0aGlzLmxhc3QgPSAwOyAgICAgICAgICAgICAgLyogdHJ1ZSBpZiBwcm9jZXNzaW5nIGxhc3QgYmxvY2sgKi9cclxuICAgIHRoaXMud3JhcCA9IDA7ICAgICAgICAgICAgICAvKiBiaXQgMCB0cnVlIGZvciB6bGliLCBiaXQgMSB0cnVlIGZvciBnemlwICovXHJcbiAgICB0aGlzLmhhdmVkaWN0ID0gMDsgICAgICAgICAgLyogdHJ1ZSBpZiBkaWN0aW9uYXJ5IHByb3ZpZGVkICovXHJcbiAgICB0aGlzLmZsYWdzID0gMDsgICAgICAgICAgICAgLyogZ3ppcCBoZWFkZXIgbWV0aG9kIGFuZCBmbGFncyAoMCBpZiB6bGliKSAqL1xyXG4gICAgdGhpcy5kbWF4ID0gMDsgICAgICAgICAgICAgIC8qIHpsaWIgaGVhZGVyIG1heCBkaXN0YW5jZSAoSU5GTEFURV9TVFJJQ1QpICovXHJcbiAgICB0aGlzLmNoZWNrID0gMDsgICAgICAgICAgICAgLyogcHJvdGVjdGVkIGNvcHkgb2YgY2hlY2sgdmFsdWUgKi9cclxuICAgIHRoaXMudG90YWwgPSAwOyAgICAgICAgICAgICAvKiBwcm90ZWN0ZWQgY29weSBvZiBvdXRwdXQgY291bnQgKi9cclxuICAgIHRoaXMuaGVhZCA9IG51bGw7ICAgICAgICAgICAvKiB3aGVyZSB0byBzYXZlIGd6aXAgaGVhZGVyIGluZm9ybWF0aW9uICovXHJcbiAgICAvKiBzbGlkaW5nIHdpbmRvdyAqL1xyXG4gICAgdGhpcy53Yml0cyA9IDA7ICAgICAgICAgICAgIC8qIGxvZyBiYXNlIDIgb2YgcmVxdWVzdGVkIHdpbmRvdyBzaXplICovXHJcbiAgICB0aGlzLndzaXplID0gMDsgICAgICAgICAgICAgLyogd2luZG93IHNpemUgb3IgemVybyBpZiBub3QgdXNpbmcgd2luZG93ICovXHJcbiAgICB0aGlzLndoYXZlID0gMDsgICAgICAgICAgICAgLyogdmFsaWQgYnl0ZXMgaW4gdGhlIHdpbmRvdyAqL1xyXG4gICAgdGhpcy53bmV4dCA9IDA7ICAgICAgICAgICAgIC8qIHdpbmRvdyB3cml0ZSBpbmRleCAoVE9ETyByZW1vdmUpICovXHJcbiAgICB0aGlzLndpbmRvdyA9IG51bGw7ICAgICAgICAgLyogYWxsb2NhdGVkIHNsaWRpbmcgd2luZG93LCBpZiBuZWVkZWQgKi9cclxuICAgIC8qIGJpdCBhY2N1bXVsYXRvciAqL1xyXG4gICAgdGhpcy5ob2xkID0gMDsgICAgICAgICAgICAgIC8qIGlucHV0IGJpdCBhY2N1bXVsYXRvciAqL1xyXG4gICAgdGhpcy5iaXRzID0gMDsgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBiaXRzIGluIFwiaW5cIiAqL1xyXG4gICAgLyogZm9yIHN0cmluZyBhbmQgc3RvcmVkIGJsb2NrIGNvcHlpbmcgKi9cclxuICAgIHRoaXMubGVuZ3RoID0gMDsgICAgICAgICAgICAvKiBsaXRlcmFsIG9yIGxlbmd0aCBvZiBkYXRhIHRvIGNvcHkgKi9cclxuICAgIHRoaXMub2Zmc2V0ID0gMDsgICAgICAgICAgICAvKiBkaXN0YW5jZSBiYWNrIHRvIGNvcHkgc3RyaW5nIGZyb20gKi9cclxuICAgIC8qIGZvciB0YWJsZSBhbmQgY29kZSBkZWNvZGluZyAqL1xyXG4gICAgdGhpcy5leHRyYSA9IDA7ICAgICAgICAgICAgIC8qIGV4dHJhIGJpdHMgbmVlZGVkICovXHJcbiAgICAvKiBmaXhlZCBhbmQgZHluYW1pYyBjb2RlIHRhYmxlcyAqL1xyXG5cclxuICAgIC8qIHpsaWIuanM6IG1vZGlmaWVkIGltcGxlbWVudGF0aW9uOiBsZW5jb2RlLCBkaXN0Y29kZSwgbmV4dCBhcmUgb2Zmc2V0IG9mIGNvZGVzW10gKi9cclxuICAgIHRoaXMubGVuY29kZSA9IDA7ICAgICAgICAgICAvKiBzdGFydGluZyB0YWJsZSBmb3IgbGVuZ3RoL2xpdGVyYWwgY29kZXMgKi9cclxuICAgIHRoaXMuZGlzdGNvZGUgPSAwOyAgICAgICAgICAvKiBzdGFydGluZyB0YWJsZSBmb3IgZGlzdGFuY2UgY29kZXMgKi9cclxuICAgIHRoaXMubGVuYml0cyA9IDA7ICAgICAgICAgICAvKiBpbmRleCBiaXRzIGZvciBsZW5jb2RlICovXHJcbiAgICB0aGlzLmRpc3RiaXRzID0gMDsgICAgICAgICAgLyogaW5kZXggYml0cyBmb3IgZGlzdGNvZGUgKi9cclxuICAgIC8qIGR5bmFtaWMgdGFibGUgYnVpbGRpbmcgKi9cclxuICAgIHRoaXMubmNvZGUgPSAwOyAgICAgICAgICAgICAvKiBudW1iZXIgb2YgY29kZSBsZW5ndGggY29kZSBsZW5ndGhzICovXHJcbiAgICB0aGlzLm5sZW4gPSAwOyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGxlbmd0aCBjb2RlIGxlbmd0aHMgKi9cclxuICAgIHRoaXMubmRpc3QgPSAwOyAgICAgICAgICAgICAvKiBudW1iZXIgb2YgZGlzdGFuY2UgY29kZSBsZW5ndGhzICovXHJcbiAgICB0aGlzLmhhdmUgPSAwOyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGNvZGUgbGVuZ3RocyBpbiBsZW5zW10gKi9cclxuICAgIHRoaXMubmV4dCA9IDA7ICAgICAgICAgICAgICAvKiBuZXh0IGF2YWlsYWJsZSBzcGFjZSBpbiBjb2Rlc1tdICovXHJcbiAgICB0aGlzLmxlbnMgPSBuZXdfYXJyYXkoMzIwKTsgLyogdGVtcG9yYXJ5IHN0b3JhZ2UgZm9yIGNvZGUgbGVuZ3RocyAqL1xyXG4gICAgdGhpcy53b3JrID0gbmV3X2FycmF5KDI4OCk7IC8qIHdvcmsgYXJlYSBmb3IgY29kZSB0YWJsZSBidWlsZGluZyAqL1xyXG4gICAgdGhpcy5jb2RlcyA9IG5ldyBBcnJheShFTk9VR0gpOyAgICAgICAgIC8qIHNwYWNlIGZvciBjb2RlIHRhYmxlcyAqL1xyXG4gICAgdmFyIGMgPSB7b3A6MCwgYml0czowLCB2YWw6MH07XHJcbiAgICBmb3IoaSA9IDA7IGkgPCBFTk9VR0g7IGkrKylcclxuICAgICAgICB0aGlzLmNvZGVzW2ldID0gYztcclxuICAgIHRoaXMuc2FuZSA9IDA7ICAgICAgICAgICAgICAvKiBpZiBmYWxzZSwgYWxsb3cgaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyICovXHJcbiAgICB0aGlzLmJhY2sgPSAwOyAgICAgICAgICAgICAgLyogYml0cyBiYWNrIG9mIGxhc3QgdW5wcm9jZXNzZWQgbGVuZ3RoL2xpdCAqL1xyXG4gICAgdGhpcy53YXMgPSAwOyAgICAgICAgICAgICAgIC8qIGluaXRpYWwgbGVuZ3RoIG9mIG1hdGNoICovXHJcbn1cclxuXHJcblpMSUIuaW5mbGF0ZVJlc2V0S2VlcCA9IGZ1bmN0aW9uKHN0cm0pXHJcbntcclxuICAgIHZhciBzdGF0ZTtcclxuXHJcbiAgICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUpIHJldHVybiBaTElCLlpfU1RSRUFNX0VSUk9SO1xyXG4gICAgc3RhdGUgPSBzdHJtLnN0YXRlO1xyXG4gICAgc3RybS50b3RhbF9pbiA9IHN0cm0udG90YWxfb3V0ID0gc3RhdGUudG90YWwgPSAwO1xyXG4gICAgc3RybS5tc2cgPSBudWxsO1xyXG4gICAgaWYgKHN0YXRlLndyYXApIHsgICAgICAgIC8qIHRvIHN1cHBvcnQgaWxsLWNvbmNlaXZlZCBKYXZhIHRlc3Qgc3VpdGUgKi9cclxuICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUud3JhcCAmIDE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGUubW9kZSA9IEhFQUQ7XHJcbiAgICBzdGF0ZS5sYXN0ID0gMDtcclxuICAgIHN0YXRlLmhhdmVkaWN0ID0gMDtcclxuICAgIHN0YXRlLmRtYXggPSAzMjc2ODtcclxuICAgIHN0YXRlLmhlYWQgPSBudWxsO1xyXG4gICAgc3RhdGUuaG9sZCA9IDA7XHJcbiAgICBzdGF0ZS5iaXRzID0gMDtcclxuICAgIHN0YXRlLmxlbmNvZGUgPSAwO1xyXG4gICAgc3RhdGUuZGlzdGNvZGUgPSAwO1xyXG4gICAgc3RhdGUubmV4dCA9IDA7XHJcbiAgICBzdGF0ZS5zYW5lID0gMTtcclxuICAgIHN0YXRlLmJhY2sgPSAtMTtcclxuICAgIHJldHVybiBaTElCLlpfT0s7XHJcbn07XHJcblxyXG4vLyBVc2FnZTogc3RybSA9IFpMSUIuaW5mbGF0ZVJlc2V0KHpfc3RyZWFtIFssIHdpbmRvd0JpdHNdKTtcclxuWkxJQi5pbmZsYXRlUmVzZXQgPSBmdW5jdGlvbihzdHJtLCB3aW5kb3dCaXRzKVxyXG57XHJcbiAgICB2YXIgd3JhcDtcclxuICAgIHZhciBzdGF0ZTtcclxuXHJcbiAgICAvKiBnZXQgdGhlIHN0YXRlICovXHJcbiAgICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUpIHJldHVybiBaTElCLlpfU1RSRUFNX0VSUk9SO1xyXG4gICAgc3RhdGUgPSBzdHJtLnN0YXRlO1xyXG5cclxuXHRpZih0eXBlb2Ygd2luZG93Qml0cyA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHdpbmRvd0JpdHMgPSBERUZfV0JJVFM7XHJcblxyXG4gICAgLyogZXh0cmFjdCB3cmFwIHJlcXVlc3QgZnJvbSB3aW5kb3dCaXRzIHBhcmFtZXRlciAqL1xyXG4gICAgaWYgKHdpbmRvd0JpdHMgPCAwKSB7XHJcbiAgICAgICAgd3JhcCA9IDA7XHJcbiAgICAgICAgd2luZG93Qml0cyA9IC13aW5kb3dCaXRzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgd3JhcCA9ICh3aW5kb3dCaXRzID4+PiA0KSArIDE7XHJcbiAgICAgICAgaWYgKHdpbmRvd0JpdHMgPCA0OClcclxuICAgICAgICAgICAgd2luZG93Qml0cyAmPSAxNTtcclxuICAgIH1cclxuXHJcblx0aWYod3JhcCA9PSAxICYmICh0eXBlb2YgWkxJQi5hZGxlcjMyID09PSAnZnVuY3Rpb24nKSkge1xyXG5cdFx0c3RybS5jaGVja3N1bV9mdW5jdGlvbiA9IFpMSUIuYWRsZXIzMjtcclxuXHR9IGVsc2UgaWYod3JhcCA9PSAyICYmICh0eXBlb2YgWkxJQi5jcmMzMiA9PT0gJ2Z1bmN0aW9uJykpIHtcclxuXHRcdHN0cm0uY2hlY2tzdW1fZnVuY3Rpb24gPSBaTElCLmNyYzMyO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHJtLmNoZWNrc3VtX2Z1bmN0aW9uID0gY2hlY2tzdW1fbm9uZTtcclxuXHR9XHJcblxyXG4gICAgLyogc2V0IG51bWJlciBvZiB3aW5kb3cgYml0cywgZnJlZSB3aW5kb3cgaWYgZGlmZmVyZW50ICovXHJcbiAgICBpZiAod2luZG93Qml0cyAmJiAod2luZG93Qml0cyA8IDggfHwgd2luZG93Qml0cyA+IDE1KSlcclxuICAgICAgICByZXR1cm4gWkxJQi5aX1NUUkVBTV9FUlJPUjtcclxuICAgIGlmIChzdGF0ZS53aW5kb3cgJiYgc3RhdGUud2JpdHMgIT0gd2luZG93Qml0cykge1xyXG4gICAgICAgIHN0YXRlLndpbmRvdyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyogdXBkYXRlIHN0YXRlIGFuZCByZXNldCB0aGUgcmVzdCBvZiBpdCAqL1xyXG4gICAgc3RhdGUud3JhcCA9IHdyYXA7XHJcbiAgICBzdGF0ZS53Yml0cyA9IHdpbmRvd0JpdHM7XHJcbiAgICBzdGF0ZS53c2l6ZSA9IDA7XHJcbiAgICBzdGF0ZS53aGF2ZSA9IDA7XHJcbiAgICBzdGF0ZS53bmV4dCA9IDA7XHJcbiAgICByZXR1cm4gWkxJQi5pbmZsYXRlUmVzZXRLZWVwKHN0cm0pO1xyXG59O1xyXG5cclxuLy8gVXNhZ2U6IHN0cm0gPSBaTElCLmluZmxhdGVJbml0KFt3aW5kb3dCaXRzXSk7XHJcblpMSUIuaW5mbGF0ZUluaXQgPSBmdW5jdGlvbih3aW5kb3dCaXRzKVxyXG57XHJcbiAgICB2YXIgc3RybSA9IG5ldyBaTElCLnpfc3RyZWFtKCk7XHJcbiAgICBzdHJtLnN0YXRlID0gbmV3IGluZmxhdGVfc3RhdGUoKTtcclxuICAgIFpMSUIuaW5mbGF0ZVJlc2V0KHN0cm0sIHdpbmRvd0JpdHMpO1xyXG4gICAgcmV0dXJuIHN0cm07XHJcbn07XHJcblxyXG5aTElCLmluZmxhdGVQcmltZSA9IGZ1bmN0aW9uKHN0cm0sIGJpdHMsIHZhbHVlKVxyXG57XHJcbiAgICB2YXIgc3RhdGU7XHJcblxyXG4gICAgaWYgKCFzdHJtIHx8ICFzdHJtLnN0YXRlKSByZXR1cm4gWkxJQi5aX1NUUkVBTV9FUlJPUjtcclxuICAgIHN0YXRlID0gc3RybS5zdGF0ZTtcclxuICAgIGlmIChiaXRzIDwgMCkge1xyXG4gICAgICAgIHN0YXRlLmhvbGQgPSAwO1xyXG4gICAgICAgIHN0YXRlLmJpdHMgPSAwO1xyXG4gICAgICAgIHJldHVybiBaTElCLlpfT0s7XHJcbiAgICB9XHJcbiAgICBpZiAoYml0cyA+IDE2IHx8IHN0YXRlLmJpdHMgKyBiaXRzID4gMzIpIHJldHVybiBaTElCLlpfU1RSRUFNX0VSUk9SO1xyXG4gICAgdmFsdWUgJj0gKDEgPDwgYml0cykgLSAxO1xyXG4gICAgc3RhdGUuaG9sZCArPSB2YWx1ZSA8PCBzdGF0ZS5iaXRzO1xyXG4gICAgc3RhdGUuYml0cyArPSBiaXRzO1xyXG4gICAgcmV0dXJuIFpMSUIuWl9PSztcclxufTtcclxuXHJcbnZhciBsZW5maXhfYXJ5ID0gbnVsbDtcclxudmFyIGxlbmZpeF9kZWYgPSBcIihbXFxcclxuICAgIHtvcDo5NixiaXRzOjcsdmFsOjB9LHtvcDowLGJpdHM6OCx2YWw6ODB9LHtvcDowLGJpdHM6OCx2YWw6MTZ9LHtvcDoyMCxiaXRzOjgsdmFsOjExNX0se29wOjE4LGJpdHM6Nyx2YWw6MzF9LHtvcDowLGJpdHM6OCx2YWw6MTEyfSx7b3A6MCxiaXRzOjgsdmFsOjQ4fSxcXFxyXG4gICAge29wOjAsYml0czo5LHZhbDoxOTJ9LHtvcDoxNixiaXRzOjcsdmFsOjEwfSx7b3A6MCxiaXRzOjgsdmFsOjk2fSx7b3A6MCxiaXRzOjgsdmFsOjMyfSx7b3A6MCxiaXRzOjksdmFsOjE2MH0se29wOjAsYml0czo4LHZhbDowfSx7b3A6MCxiaXRzOjgsdmFsOjEyOH0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6NjR9LHtvcDowLGJpdHM6OSx2YWw6MjI0fSx7b3A6MTYsYml0czo3LHZhbDo2fSx7b3A6MCxiaXRzOjgsdmFsOjg4fSx7b3A6MCxiaXRzOjgsdmFsOjI0fSx7b3A6MCxiaXRzOjksdmFsOjE0NH0se29wOjE5LGJpdHM6Nyx2YWw6NTl9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjEyMH0se29wOjAsYml0czo4LHZhbDo1Nn0se29wOjAsYml0czo5LHZhbDoyMDh9LHtvcDoxNyxiaXRzOjcsdmFsOjE3fSx7b3A6MCxiaXRzOjgsdmFsOjEwNH0se29wOjAsYml0czo4LHZhbDo0MH0se29wOjAsYml0czo5LHZhbDoxNzZ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjh9LHtvcDowLGJpdHM6OCx2YWw6MTM2fSx7b3A6MCxiaXRzOjgsdmFsOjcyfSx7b3A6MCxiaXRzOjksdmFsOjI0MH0se29wOjE2LGJpdHM6Nyx2YWw6NH0se29wOjAsYml0czo4LHZhbDo4NH0se29wOjAsYml0czo4LHZhbDoyMH0sXFxcclxuICAgIHtvcDoyMSxiaXRzOjgsdmFsOjIyN30se29wOjE5LGJpdHM6Nyx2YWw6NDN9LHtvcDowLGJpdHM6OCx2YWw6MTE2fSx7b3A6MCxiaXRzOjgsdmFsOjUyfSx7b3A6MCxiaXRzOjksdmFsOjIwMH0se29wOjE3LGJpdHM6Nyx2YWw6MTN9LHtvcDowLGJpdHM6OCx2YWw6MTAwfSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDozNn0se29wOjAsYml0czo5LHZhbDoxNjh9LHtvcDowLGJpdHM6OCx2YWw6NH0se29wOjAsYml0czo4LHZhbDoxMzJ9LHtvcDowLGJpdHM6OCx2YWw6Njh9LHtvcDowLGJpdHM6OSx2YWw6MjMyfSx7b3A6MTYsYml0czo3LHZhbDo4fSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDo5Mn0se29wOjAsYml0czo4LHZhbDoyOH0se29wOjAsYml0czo5LHZhbDoxNTJ9LHtvcDoyMCxiaXRzOjcsdmFsOjgzfSx7b3A6MCxiaXRzOjgsdmFsOjEyNH0se29wOjAsYml0czo4LHZhbDo2MH0se29wOjAsYml0czo5LHZhbDoyMTZ9LFxcXHJcbiAgICB7b3A6MTgsYml0czo3LHZhbDoyM30se29wOjAsYml0czo4LHZhbDoxMDh9LHtvcDowLGJpdHM6OCx2YWw6NDR9LHtvcDowLGJpdHM6OSx2YWw6MTg0fSx7b3A6MCxiaXRzOjgsdmFsOjEyfSx7b3A6MCxiaXRzOjgsdmFsOjE0MH0se29wOjAsYml0czo4LHZhbDo3Nn0sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MjQ4fSx7b3A6MTYsYml0czo3LHZhbDozfSx7b3A6MCxiaXRzOjgsdmFsOjgyfSx7b3A6MCxiaXRzOjgsdmFsOjE4fSx7b3A6MjEsYml0czo4LHZhbDoxNjN9LHtvcDoxOSxiaXRzOjcsdmFsOjM1fSx7b3A6MCxiaXRzOjgsdmFsOjExNH0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6NTB9LHtvcDowLGJpdHM6OSx2YWw6MTk2fSx7b3A6MTcsYml0czo3LHZhbDoxMX0se29wOjAsYml0czo4LHZhbDo5OH0se29wOjAsYml0czo4LHZhbDozNH0se29wOjAsYml0czo5LHZhbDoxNjR9LHtvcDowLGJpdHM6OCx2YWw6Mn0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTMwfSx7b3A6MCxiaXRzOjgsdmFsOjY2fSx7b3A6MCxiaXRzOjksdmFsOjIyOH0se29wOjE2LGJpdHM6Nyx2YWw6N30se29wOjAsYml0czo4LHZhbDo5MH0se29wOjAsYml0czo4LHZhbDoyNn0se29wOjAsYml0czo5LHZhbDoxNDh9LFxcXHJcbiAgICB7b3A6MjAsYml0czo3LHZhbDo2N30se29wOjAsYml0czo4LHZhbDoxMjJ9LHtvcDowLGJpdHM6OCx2YWw6NTh9LHtvcDowLGJpdHM6OSx2YWw6MjEyfSx7b3A6MTgsYml0czo3LHZhbDoxOX0se29wOjAsYml0czo4LHZhbDoxMDZ9LHtvcDowLGJpdHM6OCx2YWw6NDJ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjksdmFsOjE4MH0se29wOjAsYml0czo4LHZhbDoxMH0se29wOjAsYml0czo4LHZhbDoxMzh9LHtvcDowLGJpdHM6OCx2YWw6NzR9LHtvcDowLGJpdHM6OSx2YWw6MjQ0fSx7b3A6MTYsYml0czo3LHZhbDo1fSx7b3A6MCxiaXRzOjgsdmFsOjg2fSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDoyMn0se29wOjY0LGJpdHM6OCx2YWw6MH0se29wOjE5LGJpdHM6Nyx2YWw6NTF9LHtvcDowLGJpdHM6OCx2YWw6MTE4fSx7b3A6MCxiaXRzOjgsdmFsOjU0fSx7b3A6MCxiaXRzOjksdmFsOjIwNH0se29wOjE3LGJpdHM6Nyx2YWw6MTV9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjEwMn0se29wOjAsYml0czo4LHZhbDozOH0se29wOjAsYml0czo5LHZhbDoxNzJ9LHtvcDowLGJpdHM6OCx2YWw6Nn0se29wOjAsYml0czo4LHZhbDoxMzR9LHtvcDowLGJpdHM6OCx2YWw6NzB9LHtvcDowLGJpdHM6OSx2YWw6MjM2fSxcXFxyXG4gICAge29wOjE2LGJpdHM6Nyx2YWw6OX0se29wOjAsYml0czo4LHZhbDo5NH0se29wOjAsYml0czo4LHZhbDozMH0se29wOjAsYml0czo5LHZhbDoxNTZ9LHtvcDoyMCxiaXRzOjcsdmFsOjk5fSx7b3A6MCxiaXRzOjgsdmFsOjEyNn0se29wOjAsYml0czo4LHZhbDo2Mn0sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MjIwfSx7b3A6MTgsYml0czo3LHZhbDoyN30se29wOjAsYml0czo4LHZhbDoxMTB9LHtvcDowLGJpdHM6OCx2YWw6NDZ9LHtvcDowLGJpdHM6OSx2YWw6MTg4fSx7b3A6MCxiaXRzOjgsdmFsOjE0fSx7b3A6MCxiaXRzOjgsdmFsOjE0Mn0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6Nzh9LHtvcDowLGJpdHM6OSx2YWw6MjUyfSx7b3A6OTYsYml0czo3LHZhbDowfSx7b3A6MCxiaXRzOjgsdmFsOjgxfSx7b3A6MCxiaXRzOjgsdmFsOjE3fSx7b3A6MjEsYml0czo4LHZhbDoxMzF9LHtvcDoxOCxiaXRzOjcsdmFsOjMxfSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDoxMTN9LHtvcDowLGJpdHM6OCx2YWw6NDl9LHtvcDowLGJpdHM6OSx2YWw6MTk0fSx7b3A6MTYsYml0czo3LHZhbDoxMH0se29wOjAsYml0czo4LHZhbDo5N30se29wOjAsYml0czo4LHZhbDozM30se29wOjAsYml0czo5LHZhbDoxNjJ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjF9LHtvcDowLGJpdHM6OCx2YWw6MTI5fSx7b3A6MCxiaXRzOjgsdmFsOjY1fSx7b3A6MCxiaXRzOjksdmFsOjIyNn0se29wOjE2LGJpdHM6Nyx2YWw6Nn0se29wOjAsYml0czo4LHZhbDo4OX0se29wOjAsYml0czo4LHZhbDoyNX0sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MTQ2fSx7b3A6MTksYml0czo3LHZhbDo1OX0se29wOjAsYml0czo4LHZhbDoxMjF9LHtvcDowLGJpdHM6OCx2YWw6NTd9LHtvcDowLGJpdHM6OSx2YWw6MjEwfSx7b3A6MTcsYml0czo3LHZhbDoxN30se29wOjAsYml0czo4LHZhbDoxMDV9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjQxfSx7b3A6MCxiaXRzOjksdmFsOjE3OH0se29wOjAsYml0czo4LHZhbDo5fSx7b3A6MCxiaXRzOjgsdmFsOjEzN30se29wOjAsYml0czo4LHZhbDo3M30se29wOjAsYml0czo5LHZhbDoyNDJ9LHtvcDoxNixiaXRzOjcsdmFsOjR9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjg1fSx7b3A6MCxiaXRzOjgsdmFsOjIxfSx7b3A6MTYsYml0czo4LHZhbDoyNTh9LHtvcDoxOSxiaXRzOjcsdmFsOjQzfSx7b3A6MCxiaXRzOjgsdmFsOjExN30se29wOjAsYml0czo4LHZhbDo1M30se29wOjAsYml0czo5LHZhbDoyMDJ9LFxcXHJcbiAgICB7b3A6MTcsYml0czo3LHZhbDoxM30se29wOjAsYml0czo4LHZhbDoxMDF9LHtvcDowLGJpdHM6OCx2YWw6Mzd9LHtvcDowLGJpdHM6OSx2YWw6MTcwfSx7b3A6MCxiaXRzOjgsdmFsOjV9LHtvcDowLGJpdHM6OCx2YWw6MTMzfSx7b3A6MCxiaXRzOjgsdmFsOjY5fSxcXFxyXG4gICAge29wOjAsYml0czo5LHZhbDoyMzR9LHtvcDoxNixiaXRzOjcsdmFsOjh9LHtvcDowLGJpdHM6OCx2YWw6OTN9LHtvcDowLGJpdHM6OCx2YWw6Mjl9LHtvcDowLGJpdHM6OSx2YWw6MTU0fSx7b3A6MjAsYml0czo3LHZhbDo4M30se29wOjAsYml0czo4LHZhbDoxMjV9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjYxfSx7b3A6MCxiaXRzOjksdmFsOjIxOH0se29wOjE4LGJpdHM6Nyx2YWw6MjN9LHtvcDowLGJpdHM6OCx2YWw6MTA5fSx7b3A6MCxiaXRzOjgsdmFsOjQ1fSx7b3A6MCxiaXRzOjksdmFsOjE4Nn0se29wOjAsYml0czo4LHZhbDoxM30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTQxfSx7b3A6MCxiaXRzOjgsdmFsOjc3fSx7b3A6MCxiaXRzOjksdmFsOjI1MH0se29wOjE2LGJpdHM6Nyx2YWw6M30se29wOjAsYml0czo4LHZhbDo4M30se29wOjAsYml0czo4LHZhbDoxOX0se29wOjIxLGJpdHM6OCx2YWw6MTk1fSxcXFxyXG4gICAge29wOjE5LGJpdHM6Nyx2YWw6MzV9LHtvcDowLGJpdHM6OCx2YWw6MTE1fSx7b3A6MCxiaXRzOjgsdmFsOjUxfSx7b3A6MCxiaXRzOjksdmFsOjE5OH0se29wOjE3LGJpdHM6Nyx2YWw6MTF9LHtvcDowLGJpdHM6OCx2YWw6OTl9LHtvcDowLGJpdHM6OCx2YWw6MzV9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjksdmFsOjE2Nn0se29wOjAsYml0czo4LHZhbDozfSx7b3A6MCxiaXRzOjgsdmFsOjEzMX0se29wOjAsYml0czo4LHZhbDo2N30se29wOjAsYml0czo5LHZhbDoyMzB9LHtvcDoxNixiaXRzOjcsdmFsOjd9LHtvcDowLGJpdHM6OCx2YWw6OTF9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjI3fSx7b3A6MCxiaXRzOjksdmFsOjE1MH0se29wOjIwLGJpdHM6Nyx2YWw6Njd9LHtvcDowLGJpdHM6OCx2YWw6MTIzfSx7b3A6MCxiaXRzOjgsdmFsOjU5fSx7b3A6MCxiaXRzOjksdmFsOjIxNH0se29wOjE4LGJpdHM6Nyx2YWw6MTl9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjEwN30se29wOjAsYml0czo4LHZhbDo0M30se29wOjAsYml0czo5LHZhbDoxODJ9LHtvcDowLGJpdHM6OCx2YWw6MTF9LHtvcDowLGJpdHM6OCx2YWw6MTM5fSx7b3A6MCxiaXRzOjgsdmFsOjc1fSx7b3A6MCxiaXRzOjksdmFsOjI0Nn0sXFxcclxuICAgIHtvcDoxNixiaXRzOjcsdmFsOjV9LHtvcDowLGJpdHM6OCx2YWw6ODd9LHtvcDowLGJpdHM6OCx2YWw6MjN9LHtvcDo2NCxiaXRzOjgsdmFsOjB9LHtvcDoxOSxiaXRzOjcsdmFsOjUxfSx7b3A6MCxiaXRzOjgsdmFsOjExOX0se29wOjAsYml0czo4LHZhbDo1NX0sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MjA2fSx7b3A6MTcsYml0czo3LHZhbDoxNX0se29wOjAsYml0czo4LHZhbDoxMDN9LHtvcDowLGJpdHM6OCx2YWw6Mzl9LHtvcDowLGJpdHM6OSx2YWw6MTc0fSx7b3A6MCxiaXRzOjgsdmFsOjd9LHtvcDowLGJpdHM6OCx2YWw6MTM1fSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDo3MX0se29wOjAsYml0czo5LHZhbDoyMzh9LHtvcDoxNixiaXRzOjcsdmFsOjl9LHtvcDowLGJpdHM6OCx2YWw6OTV9LHtvcDowLGJpdHM6OCx2YWw6MzF9LHtvcDowLGJpdHM6OSx2YWw6MTU4fSx7b3A6MjAsYml0czo3LHZhbDo5OX0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTI3fSx7b3A6MCxiaXRzOjgsdmFsOjYzfSx7b3A6MCxiaXRzOjksdmFsOjIyMn0se29wOjE4LGJpdHM6Nyx2YWw6Mjd9LHtvcDowLGJpdHM6OCx2YWw6MTExfSx7b3A6MCxiaXRzOjgsdmFsOjQ3fSx7b3A6MCxiaXRzOjksdmFsOjE5MH0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTV9LHtvcDowLGJpdHM6OCx2YWw6MTQzfSx7b3A6MCxiaXRzOjgsdmFsOjc5fSx7b3A6MCxiaXRzOjksdmFsOjI1NH0se29wOjk2LGJpdHM6Nyx2YWw6MH0se29wOjAsYml0czo4LHZhbDo4MH0se29wOjAsYml0czo4LHZhbDoxNn0sXFxcclxuICAgIHtvcDoyMCxiaXRzOjgsdmFsOjExNX0se29wOjE4LGJpdHM6Nyx2YWw6MzF9LHtvcDowLGJpdHM6OCx2YWw6MTEyfSx7b3A6MCxiaXRzOjgsdmFsOjQ4fSx7b3A6MCxiaXRzOjksdmFsOjE5M30se29wOjE2LGJpdHM6Nyx2YWw6MTB9LHtvcDowLGJpdHM6OCx2YWw6OTZ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjMyfSx7b3A6MCxiaXRzOjksdmFsOjE2MX0se29wOjAsYml0czo4LHZhbDowfSx7b3A6MCxiaXRzOjgsdmFsOjEyOH0se29wOjAsYml0czo4LHZhbDo2NH0se29wOjAsYml0czo5LHZhbDoyMjV9LHtvcDoxNixiaXRzOjcsdmFsOjZ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjg4fSx7b3A6MCxiaXRzOjgsdmFsOjI0fSx7b3A6MCxiaXRzOjksdmFsOjE0NX0se29wOjE5LGJpdHM6Nyx2YWw6NTl9LHtvcDowLGJpdHM6OCx2YWw6MTIwfSx7b3A6MCxiaXRzOjgsdmFsOjU2fSx7b3A6MCxiaXRzOjksdmFsOjIwOX0sXFxcclxuICAgIHtvcDoxNyxiaXRzOjcsdmFsOjE3fSx7b3A6MCxiaXRzOjgsdmFsOjEwNH0se29wOjAsYml0czo4LHZhbDo0MH0se29wOjAsYml0czo5LHZhbDoxNzd9LHtvcDowLGJpdHM6OCx2YWw6OH0se29wOjAsYml0czo4LHZhbDoxMzZ9LHtvcDowLGJpdHM6OCx2YWw6NzJ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjksdmFsOjI0MX0se29wOjE2LGJpdHM6Nyx2YWw6NH0se29wOjAsYml0czo4LHZhbDo4NH0se29wOjAsYml0czo4LHZhbDoyMH0se29wOjIxLGJpdHM6OCx2YWw6MjI3fSx7b3A6MTksYml0czo3LHZhbDo0M30se29wOjAsYml0czo4LHZhbDoxMTZ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjUyfSx7b3A6MCxiaXRzOjksdmFsOjIwMX0se29wOjE3LGJpdHM6Nyx2YWw6MTN9LHtvcDowLGJpdHM6OCx2YWw6MTAwfSx7b3A6MCxiaXRzOjgsdmFsOjM2fSx7b3A6MCxiaXRzOjksdmFsOjE2OX0se29wOjAsYml0czo4LHZhbDo0fSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDoxMzJ9LHtvcDowLGJpdHM6OCx2YWw6Njh9LHtvcDowLGJpdHM6OSx2YWw6MjMzfSx7b3A6MTYsYml0czo3LHZhbDo4fSx7b3A6MCxiaXRzOjgsdmFsOjkyfSx7b3A6MCxiaXRzOjgsdmFsOjI4fSx7b3A6MCxiaXRzOjksdmFsOjE1M30sXFxcclxuICAgIHtvcDoyMCxiaXRzOjcsdmFsOjgzfSx7b3A6MCxiaXRzOjgsdmFsOjEyNH0se29wOjAsYml0czo4LHZhbDo2MH0se29wOjAsYml0czo5LHZhbDoyMTd9LHtvcDoxOCxiaXRzOjcsdmFsOjIzfSx7b3A6MCxiaXRzOjgsdmFsOjEwOH0se29wOjAsYml0czo4LHZhbDo0NH0sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MTg1fSx7b3A6MCxiaXRzOjgsdmFsOjEyfSx7b3A6MCxiaXRzOjgsdmFsOjE0MH0se29wOjAsYml0czo4LHZhbDo3Nn0se29wOjAsYml0czo5LHZhbDoyNDl9LHtvcDoxNixiaXRzOjcsdmFsOjN9LHtvcDowLGJpdHM6OCx2YWw6ODJ9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjE4fSx7b3A6MjEsYml0czo4LHZhbDoxNjN9LHtvcDoxOSxiaXRzOjcsdmFsOjM1fSx7b3A6MCxiaXRzOjgsdmFsOjExNH0se29wOjAsYml0czo4LHZhbDo1MH0se29wOjAsYml0czo5LHZhbDoxOTd9LHtvcDoxNyxiaXRzOjcsdmFsOjExfSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDo5OH0se29wOjAsYml0czo4LHZhbDozNH0se29wOjAsYml0czo5LHZhbDoxNjV9LHtvcDowLGJpdHM6OCx2YWw6Mn0se29wOjAsYml0czo4LHZhbDoxMzB9LHtvcDowLGJpdHM6OCx2YWw6NjZ9LHtvcDowLGJpdHM6OSx2YWw6MjI5fSxcXFxyXG4gICAge29wOjE2LGJpdHM6Nyx2YWw6N30se29wOjAsYml0czo4LHZhbDo5MH0se29wOjAsYml0czo4LHZhbDoyNn0se29wOjAsYml0czo5LHZhbDoxNDl9LHtvcDoyMCxiaXRzOjcsdmFsOjY3fSx7b3A6MCxiaXRzOjgsdmFsOjEyMn0se29wOjAsYml0czo4LHZhbDo1OH0sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MjEzfSx7b3A6MTgsYml0czo3LHZhbDoxOX0se29wOjAsYml0czo4LHZhbDoxMDZ9LHtvcDowLGJpdHM6OCx2YWw6NDJ9LHtvcDowLGJpdHM6OSx2YWw6MTgxfSx7b3A6MCxiaXRzOjgsdmFsOjEwfSx7b3A6MCxiaXRzOjgsdmFsOjEzOH0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6NzR9LHtvcDowLGJpdHM6OSx2YWw6MjQ1fSx7b3A6MTYsYml0czo3LHZhbDo1fSx7b3A6MCxiaXRzOjgsdmFsOjg2fSx7b3A6MCxiaXRzOjgsdmFsOjIyfSx7b3A6NjQsYml0czo4LHZhbDowfSx7b3A6MTksYml0czo3LHZhbDo1MX0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTE4fSx7b3A6MCxiaXRzOjgsdmFsOjU0fSx7b3A6MCxiaXRzOjksdmFsOjIwNX0se29wOjE3LGJpdHM6Nyx2YWw6MTV9LHtvcDowLGJpdHM6OCx2YWw6MTAyfSx7b3A6MCxiaXRzOjgsdmFsOjM4fSx7b3A6MCxiaXRzOjksdmFsOjE3M30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6Nn0se29wOjAsYml0czo4LHZhbDoxMzR9LHtvcDowLGJpdHM6OCx2YWw6NzB9LHtvcDowLGJpdHM6OSx2YWw6MjM3fSx7b3A6MTYsYml0czo3LHZhbDo5fSx7b3A6MCxiaXRzOjgsdmFsOjk0fSx7b3A6MCxiaXRzOjgsdmFsOjMwfSxcXFxyXG4gICAge29wOjAsYml0czo5LHZhbDoxNTd9LHtvcDoyMCxiaXRzOjcsdmFsOjk5fSx7b3A6MCxiaXRzOjgsdmFsOjEyNn0se29wOjAsYml0czo4LHZhbDo2Mn0se29wOjAsYml0czo5LHZhbDoyMjF9LHtvcDoxOCxiaXRzOjcsdmFsOjI3fSx7b3A6MCxiaXRzOjgsdmFsOjExMH0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6NDZ9LHtvcDowLGJpdHM6OSx2YWw6MTg5fSx7b3A6MCxiaXRzOjgsdmFsOjE0fSx7b3A6MCxiaXRzOjgsdmFsOjE0Mn0se29wOjAsYml0czo4LHZhbDo3OH0se29wOjAsYml0czo5LHZhbDoyNTN9LHtvcDo5NixiaXRzOjcsdmFsOjB9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjgxfSx7b3A6MCxiaXRzOjgsdmFsOjE3fSx7b3A6MjEsYml0czo4LHZhbDoxMzF9LHtvcDoxOCxiaXRzOjcsdmFsOjMxfSx7b3A6MCxiaXRzOjgsdmFsOjExM30se29wOjAsYml0czo4LHZhbDo0OX0se29wOjAsYml0czo5LHZhbDoxOTV9LFxcXHJcbiAgICB7b3A6MTYsYml0czo3LHZhbDoxMH0se29wOjAsYml0czo4LHZhbDo5N30se29wOjAsYml0czo4LHZhbDozM30se29wOjAsYml0czo5LHZhbDoxNjN9LHtvcDowLGJpdHM6OCx2YWw6MX0se29wOjAsYml0czo4LHZhbDoxMjl9LHtvcDowLGJpdHM6OCx2YWw6NjV9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjksdmFsOjIyN30se29wOjE2LGJpdHM6Nyx2YWw6Nn0se29wOjAsYml0czo4LHZhbDo4OX0se29wOjAsYml0czo4LHZhbDoyNX0se29wOjAsYml0czo5LHZhbDoxNDd9LHtvcDoxOSxiaXRzOjcsdmFsOjU5fSx7b3A6MCxiaXRzOjgsdmFsOjEyMX0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6NTd9LHtvcDowLGJpdHM6OSx2YWw6MjExfSx7b3A6MTcsYml0czo3LHZhbDoxN30se29wOjAsYml0czo4LHZhbDoxMDV9LHtvcDowLGJpdHM6OCx2YWw6NDF9LHtvcDowLGJpdHM6OSx2YWw6MTc5fSx7b3A6MCxiaXRzOjgsdmFsOjl9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjgsdmFsOjEzN30se29wOjAsYml0czo4LHZhbDo3M30se29wOjAsYml0czo5LHZhbDoyNDN9LHtvcDoxNixiaXRzOjcsdmFsOjR9LHtvcDowLGJpdHM6OCx2YWw6ODV9LHtvcDowLGJpdHM6OCx2YWw6MjF9LHtvcDoxNixiaXRzOjgsdmFsOjI1OH0sXFxcclxuICAgIHtvcDoxOSxiaXRzOjcsdmFsOjQzfSx7b3A6MCxiaXRzOjgsdmFsOjExN30se29wOjAsYml0czo4LHZhbDo1M30se29wOjAsYml0czo5LHZhbDoyMDN9LHtvcDoxNyxiaXRzOjcsdmFsOjEzfSx7b3A6MCxiaXRzOjgsdmFsOjEwMX0se29wOjAsYml0czo4LHZhbDozN30sXFxcclxuICAgIHtvcDowLGJpdHM6OSx2YWw6MTcxfSx7b3A6MCxiaXRzOjgsdmFsOjV9LHtvcDowLGJpdHM6OCx2YWw6MTMzfSx7b3A6MCxiaXRzOjgsdmFsOjY5fSx7b3A6MCxiaXRzOjksdmFsOjIzNX0se29wOjE2LGJpdHM6Nyx2YWw6OH0se29wOjAsYml0czo4LHZhbDo5M30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6Mjl9LHtvcDowLGJpdHM6OSx2YWw6MTU1fSx7b3A6MjAsYml0czo3LHZhbDo4M30se29wOjAsYml0czo4LHZhbDoxMjV9LHtvcDowLGJpdHM6OCx2YWw6NjF9LHtvcDowLGJpdHM6OSx2YWw6MjE5fSx7b3A6MTgsYml0czo3LHZhbDoyM30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTA5fSx7b3A6MCxiaXRzOjgsdmFsOjQ1fSx7b3A6MCxiaXRzOjksdmFsOjE4N30se29wOjAsYml0czo4LHZhbDoxM30se29wOjAsYml0czo4LHZhbDoxNDF9LHtvcDowLGJpdHM6OCx2YWw6Nzd9LHtvcDowLGJpdHM6OSx2YWw6MjUxfSxcXFxyXG4gICAge29wOjE2LGJpdHM6Nyx2YWw6M30se29wOjAsYml0czo4LHZhbDo4M30se29wOjAsYml0czo4LHZhbDoxOX0se29wOjIxLGJpdHM6OCx2YWw6MTk1fSx7b3A6MTksYml0czo3LHZhbDozNX0se29wOjAsYml0czo4LHZhbDoxMTV9LHtvcDowLGJpdHM6OCx2YWw6NTF9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjksdmFsOjE5OX0se29wOjE3LGJpdHM6Nyx2YWw6MTF9LHtvcDowLGJpdHM6OCx2YWw6OTl9LHtvcDowLGJpdHM6OCx2YWw6MzV9LHtvcDowLGJpdHM6OSx2YWw6MTY3fSx7b3A6MCxiaXRzOjgsdmFsOjN9LHtvcDowLGJpdHM6OCx2YWw6MTMxfSxcXFxyXG4gICAge29wOjAsYml0czo4LHZhbDo2N30se29wOjAsYml0czo5LHZhbDoyMzF9LHtvcDoxNixiaXRzOjcsdmFsOjd9LHtvcDowLGJpdHM6OCx2YWw6OTF9LHtvcDowLGJpdHM6OCx2YWw6Mjd9LHtvcDowLGJpdHM6OSx2YWw6MTUxfSx7b3A6MjAsYml0czo3LHZhbDo2N30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTIzfSx7b3A6MCxiaXRzOjgsdmFsOjU5fSx7b3A6MCxiaXRzOjksdmFsOjIxNX0se29wOjE4LGJpdHM6Nyx2YWw6MTl9LHtvcDowLGJpdHM6OCx2YWw6MTA3fSx7b3A6MCxiaXRzOjgsdmFsOjQzfSx7b3A6MCxiaXRzOjksdmFsOjE4M30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6MTF9LHtvcDowLGJpdHM6OCx2YWw6MTM5fSx7b3A6MCxiaXRzOjgsdmFsOjc1fSx7b3A6MCxiaXRzOjksdmFsOjI0N30se29wOjE2LGJpdHM6Nyx2YWw6NX0se29wOjAsYml0czo4LHZhbDo4N30se29wOjAsYml0czo4LHZhbDoyM30sXFxcclxuICAgIHtvcDo2NCxiaXRzOjgsdmFsOjB9LHtvcDoxOSxiaXRzOjcsdmFsOjUxfSx7b3A6MCxiaXRzOjgsdmFsOjExOX0se29wOjAsYml0czo4LHZhbDo1NX0se29wOjAsYml0czo5LHZhbDoyMDd9LHtvcDoxNyxiaXRzOjcsdmFsOjE1fSx7b3A6MCxiaXRzOjgsdmFsOjEwM30sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6Mzl9LHtvcDowLGJpdHM6OSx2YWw6MTc1fSx7b3A6MCxiaXRzOjgsdmFsOjd9LHtvcDowLGJpdHM6OCx2YWw6MTM1fSx7b3A6MCxiaXRzOjgsdmFsOjcxfSx7b3A6MCxiaXRzOjksdmFsOjIzOX0se29wOjE2LGJpdHM6Nyx2YWw6OX0sXFxcclxuICAgIHtvcDowLGJpdHM6OCx2YWw6OTV9LHtvcDowLGJpdHM6OCx2YWw6MzF9LHtvcDowLGJpdHM6OSx2YWw6MTU5fSx7b3A6MjAsYml0czo3LHZhbDo5OX0se29wOjAsYml0czo4LHZhbDoxMjd9LHtvcDowLGJpdHM6OCx2YWw6NjN9LHtvcDowLGJpdHM6OSx2YWw6MjIzfSxcXFxyXG4gICAge29wOjE4LGJpdHM6Nyx2YWw6Mjd9LHtvcDowLGJpdHM6OCx2YWw6MTExfSx7b3A6MCxiaXRzOjgsdmFsOjQ3fSx7b3A6MCxiaXRzOjksdmFsOjE5MX0se29wOjAsYml0czo4LHZhbDoxNX0se29wOjAsYml0czo4LHZhbDoxNDN9LHtvcDowLGJpdHM6OCx2YWw6Nzl9LFxcXHJcbiAgICB7b3A6MCxiaXRzOjksdmFsOjI1NX1cXFxyXG5dKVwiO1xyXG5cclxudmFyIGRpc3RmaXhfYXJ5ID0gbnVsbDtcclxudmFyIGRpc3RmaXhfZGVmID0gXCIoW1xcXHJcbiAgICB7b3A6MTYsYml0czo1LHZhbDoxfSx7b3A6MjMsYml0czo1LHZhbDoyNTd9LHtvcDoxOSxiaXRzOjUsdmFsOjE3fSx7b3A6MjcsYml0czo1LHZhbDo0MDk3fSx7b3A6MTcsYml0czo1LHZhbDo1fSx7b3A6MjUsYml0czo1LHZhbDoxMDI1fSxcXFxyXG4gICAge29wOjIxLGJpdHM6NSx2YWw6NjV9LHtvcDoyOSxiaXRzOjUsdmFsOjE2Mzg1fSx7b3A6MTYsYml0czo1LHZhbDozfSx7b3A6MjQsYml0czo1LHZhbDo1MTN9LHtvcDoyMCxiaXRzOjUsdmFsOjMzfSx7b3A6MjgsYml0czo1LHZhbDo4MTkzfSxcXFxyXG4gICAge29wOjE4LGJpdHM6NSx2YWw6OX0se29wOjI2LGJpdHM6NSx2YWw6MjA0OX0se29wOjIyLGJpdHM6NSx2YWw6MTI5fSx7b3A6NjQsYml0czo1LHZhbDowfSx7b3A6MTYsYml0czo1LHZhbDoyfSx7b3A6MjMsYml0czo1LHZhbDozODV9LFxcXHJcbiAgICB7b3A6MTksYml0czo1LHZhbDoyNX0se29wOjI3LGJpdHM6NSx2YWw6NjE0NX0se29wOjE3LGJpdHM6NSx2YWw6N30se29wOjI1LGJpdHM6NSx2YWw6MTUzN30se29wOjIxLGJpdHM6NSx2YWw6OTd9LHtvcDoyOSxiaXRzOjUsdmFsOjI0NTc3fSxcXFxyXG4gICAge29wOjE2LGJpdHM6NSx2YWw6NH0se29wOjI0LGJpdHM6NSx2YWw6NzY5fSx7b3A6MjAsYml0czo1LHZhbDo0OX0se29wOjI4LGJpdHM6NSx2YWw6MTIyODl9LHtvcDoxOCxiaXRzOjUsdmFsOjEzfSx7b3A6MjYsYml0czo1LHZhbDozMDczfSxcXFxyXG4gICAge29wOjIyLGJpdHM6NSx2YWw6MTkzfSx7b3A6NjQsYml0czo1LHZhbDowfVxcXHJcbl0pXCI7XHJcblxyXG5mdW5jdGlvbiBmaXhlZHRhYmxlcyhzdGF0ZSlcclxue1xyXG4gICAgdmFyIGk7XHJcbiAgICBpZighbGVuZml4X2FyeSlcclxuICAgICAgICBsZW5maXhfYXJ5ID0gZXZhbChsZW5maXhfZGVmKTtcclxuICAgIGlmKCFkaXN0Zml4X2FyeSlcclxuICAgICAgICBkaXN0Zml4X2FyeSA9IGV2YWwoZGlzdGZpeF9kZWYpO1xyXG4gICAgc3RhdGUubGVuY29kZSA9IDA7XHJcbiAgICBzdGF0ZS5kaXN0Y29kZSA9IDUxMjtcclxuICAgIGZvcihpID0gMDsgaSA8IDUxMjsgaSsrKSB7XHJcbiAgICAgICAgc3RhdGUuY29kZXNbaV0gPSBsZW5maXhfYXJ5W2ldO1xyXG4gICAgfVxyXG4gICAgZm9yKGkgPSAwOyBpIDwgMzI7IGkrKykge1xyXG4gICAgICAgIHN0YXRlLmNvZGVzW2kgKyA1MTJdID0gZGlzdGZpeF9hcnlbaV07XHJcbiAgICB9XHJcbiAgICBzdGF0ZS5sZW5iaXRzID0gOTtcclxuICAgIHN0YXRlLmRpc3RiaXRzID0gNTtcclxufVxyXG5cclxuLypcclxuICBVcGRhdGUgdGhlIHdpbmRvdyB3aXRoIHRoZSBsYXN0IHdzaXplIChub3JtYWxseSAzMkspIGJ5dGVzIHdyaXR0ZW4gYmVmb3JlXHJcbiAgcmV0dXJuaW5nLiAgSWYgd2luZG93IGRvZXMgbm90IGV4aXN0IHlldCwgY3JlYXRlIGl0LiAgVGhpcyBpcyBvbmx5IGNhbGxlZFxyXG4gIHdoZW4gYSB3aW5kb3cgaXMgYWxyZWFkeSBpbiB1c2UsIG9yIHdoZW4gb3V0cHV0IGhhcyBiZWVuIHdyaXR0ZW4gZHVyaW5nIHRoaXNcclxuICBpbmZsYXRlIGNhbGwsIGJ1dCB0aGUgZW5kIG9mIHRoZSBkZWZsYXRlIHN0cmVhbSBoYXMgbm90IGJlZW4gcmVhY2hlZCB5ZXQuXHJcbiAgSXQgaXMgYWxzbyBjYWxsZWQgdG8gY3JlYXRlIGEgd2luZG93IGZvciBkaWN0aW9uYXJ5IGRhdGEgd2hlbiBhIGRpY3Rpb25hcnlcclxuICBpcyBsb2FkZWQuXHJcblxyXG4gIFByb3ZpZGluZyBvdXRwdXQgYnVmZmVycyBsYXJnZXIgdGhhbiAzMksgdG8gaW5mbGF0ZSgpIHNob3VsZCBwcm92aWRlIGEgc3BlZWRcclxuICBhZHZhbnRhZ2UsIHNpbmNlIG9ubHkgdGhlIGxhc3QgMzJLIG9mIG91dHB1dCBpcyBjb3BpZWQgdG8gdGhlIHNsaWRpbmcgd2luZG93XHJcbiAgdXBvbiByZXR1cm4gZnJvbSBpbmZsYXRlKCksIGFuZCBzaW5jZSBhbGwgZGlzdGFuY2VzIGFmdGVyIHRoZSBmaXJzdCAzMksgb2ZcclxuICBvdXRwdXQgd2lsbCBmYWxsIGluIHRoZSBvdXRwdXQgZGF0YSwgbWFraW5nIG1hdGNoIGNvcGllcyBzaW1wbGVyIGFuZCBmYXN0ZXIuXHJcbiAgVGhlIGFkdmFudGFnZSBtYXkgYmUgZGVwZW5kZW50IG9uIHRoZSBzaXplIG9mIHRoZSBwcm9jZXNzb3IncyBkYXRhIGNhY2hlcy5cclxuKi9cclxuZnVuY3Rpb24gdXBkYXRld2luZG93KHN0cm0pXHJcbntcclxuICAgIHZhciBzdGF0ZSA9IHN0cm0uc3RhdGU7XHJcblx0dmFyIG91dCA9IHN0cm0ub3V0cHV0X2RhdGEubGVuZ3RoO1xyXG5cclxuICAgIC8qIGlmIGl0IGhhc24ndCBiZWVuIGRvbmUgYWxyZWFkeSwgYWxsb2NhdGUgc3BhY2UgZm9yIHRoZSB3aW5kb3cgKi9cclxuICAgIGlmIChzdGF0ZS53aW5kb3cgPT09IG51bGwpIHtcclxuICAgICAgICBzdGF0ZS53aW5kb3cgPSAnJztcclxuXHR9XHJcblxyXG4gICAgLyogaWYgd2luZG93IG5vdCBpbiB1c2UgeWV0LCBpbml0aWFsaXplICovXHJcbiAgICBpZiAoc3RhdGUud3NpemUgPT0gMCkge1xyXG4gICAgICAgIHN0YXRlLndzaXplID0gMSA8PCBzdGF0ZS53Yml0cztcclxuXHR9XHJcblxyXG4gICAgLy8gemxpYi5qczogU2xpZGluZyB3aW5kb3dcclxuICAgIGlmIChvdXQgPj0gc3RhdGUud3NpemUpIHtcclxuICAgICAgICBzdGF0ZS53aW5kb3cgPSBzdHJtLm91dHB1dF9kYXRhLnN1YnN0cmluZyhvdXQgLSBzdGF0ZS53c2l6ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGlmKHN0YXRlLndoYXZlICsgb3V0IDwgc3RhdGUud3NpemUpIHtcclxuXHRcdFx0c3RhdGUud2luZG93ICs9IHN0cm0ub3V0cHV0X2RhdGE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdGF0ZS53aW5kb3cgPSBzdGF0ZS53aW5kb3cuc3Vic3RyaW5nKHN0YXRlLndoYXZlIC0gKHN0YXRlLndzaXplIC0gb3V0KSkgKyBzdHJtLm91dHB1dF9kYXRhO1xyXG5cdFx0fVxyXG5cdH1cclxuICAgIHN0YXRlLndoYXZlID0gc3RhdGUud2luZG93Lmxlbmd0aDtcclxuXHRpZihzdGF0ZS53aGF2ZSA8IHN0YXRlLndzaXplKSB7XHJcblx0XHRzdGF0ZS53bmV4dCA9IHN0YXRlLndoYXZlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdGF0ZS53bmV4dCA9IDA7XHJcblx0fVxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuXHJcblxyXG4vLyAjaWZkZWYgR1VOWklQXHJcbmZ1bmN0aW9uIENSQzIoc3RybSwgd29yZClcclxue1xyXG5cdHZhciBoYnVmID0gW3dvcmQgJiAweGZmLCAod29yZCA+Pj4gOCkgJiAweGZmXTtcclxuXHRzdHJtLnN0YXRlLmNoZWNrID0gc3RybS5jaGVja3N1bV9mdW5jdGlvbihzdHJtLnN0YXRlLmNoZWNrLCBoYnVmLCAwLCAyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ1JDNChzdHJtLCB3b3JkKVxyXG57XHJcblx0dmFyIGhidWYgPSBbd29yZCAmIDB4ZmYsXHJcblx0XHRcdFx0KHdvcmQgPj4+IDgpICYgMHhmZixcclxuXHRcdFx0XHQod29yZCA+Pj4gMTYpICYgMHhmZixcclxuXHRcdFx0XHQod29yZCA+Pj4gMjQpICYgMHhmZl07XHJcblx0c3RybS5zdGF0ZS5jaGVjayA9IHN0cm0uY2hlY2tzdW1fZnVuY3Rpb24oc3RybS5zdGF0ZS5jaGVjaywgaGJ1ZiwgMCwgNCk7XHJcbn1cclxuXHJcbi8qIExvYWQgcmVnaXN0ZXJzIHdpdGggc3RhdGUgaW4gaW5mbGF0ZSgpIGZvciBzcGVlZCAqL1xyXG5mdW5jdGlvbiBMT0FEKHN0cm0sIHMpXHJcbntcclxuICAgIHMuc3RybSA9IHN0cm07ICAgICAgICAgICAgLyogel9zdHJlYW0gKi9cclxuICAgIHMubGVmdCA9IHN0cm0uYXZhaWxfb3V0OyAgLyogYXZhaWxhYmxlIG91dHB1dCAqL1xyXG4gICAgcy5uZXh0ID0gc3RybS5uZXh0X2luOyAvKiBuZXh0IGlucHV0ICovXHJcbiAgICBzLmhhdmUgPSBzdHJtLmF2YWlsX2luOyAgIC8qIGF2YWlsYWJsZSBpbnB1dCAqL1xyXG4gICAgcy5ob2xkID0gc3RybS5zdGF0ZS5ob2xkOyAvKiBiaXQgYnVmZmVyICovXHJcbiAgICBzLmJpdHMgPSBzdHJtLnN0YXRlLmJpdHM7IC8qIGJpdHMgaW4gYml0IGJ1ZmZlciAqL1xyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcbi8qIFJlc3RvcmUgc3RhdGUgZnJvbSByZWdpc3RlcnMgaW4gaW5mbGF0ZSgpICovXHJcbmZ1bmN0aW9uIFJFU1RPUkUocylcclxue1xyXG4gICAgdmFyIHN0cm0gPSBzLnN0cm07XHJcbiAgICBzdHJtLm5leHRfaW4gPSBzLm5leHQ7XHJcbiAgICBzdHJtLmF2YWlsX291dCA9IHMubGVmdDtcclxuICAgIHN0cm0uYXZhaWxfaW4gPSBzLmhhdmU7XHJcbiAgICBzdHJtLnN0YXRlLmhvbGQgPSBzLmhvbGQ7XHJcbiAgICBzdHJtLnN0YXRlLmJpdHMgPSBzLmJpdHM7XHJcbn1cclxuXHJcbi8qIENsZWFyIHRoZSBpbnB1dCBiaXQgYWNjdW11bGF0b3IgKi9cclxuZnVuY3Rpb24gSU5JVEJJVFMocylcclxue1xyXG4gICAgcy5ob2xkID0gMDtcclxuICAgIHMuYml0cyA9IDA7XHJcbn1cclxuXHJcbi8qIEdldCBhIGJ5dGUgb2YgaW5wdXQgaW50byB0aGUgYml0IGFjY3VtdWxhdG9yLCBvciByZXR1cm4gZnJvbSBpbmZsYXRlKClcclxuICAgaWYgdGhlcmUgaXMgbm8gaW5wdXQgYXZhaWxhYmxlLiAqL1xyXG5mdW5jdGlvbiBQVUxMQllURShzKVxyXG57XHJcbiAgICBpZiAocy5oYXZlID09IDApIHJldHVybiBmYWxzZTtcclxuICAgIHMuaGF2ZS0tO1xyXG4gICAgcy5ob2xkICs9IChzLnN0cm0uaW5wdXRfZGF0YS5jaGFyQ29kZUF0KHMubmV4dCsrKSAmIDB4ZmYpIDw8IHMuYml0cztcclxuICAgIHMuYml0cyArPSA4O1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qIEFzc3VyZSB0aGF0IHRoZXJlIGFyZSBhdCBsZWFzdCBuIGJpdHMgaW4gdGhlIGJpdCBhY2N1bXVsYXRvci4gIElmIHRoZXJlIGlzXHJcbiAgIG5vdCBlbm91Z2ggYXZhaWxhYmxlIGlucHV0IHRvIGRvIHRoYXQsIHRoZW4gcmV0dXJuIGZyb20gaW5mbGF0ZSgpLiAqL1xyXG5mdW5jdGlvbiBORUVEQklUUyhzLCBuKVxyXG57XHJcbiAgICAvLyBpZih0eXBlb2YgbiAhPSAnbnVtYmVyJykgdGhyb3cgJ0VSUk9SJztcclxuICAgIHdoaWxlIChzLmJpdHMgPCBuKSB7XHJcbiAgICAgICAgaWYoIVBVTExCWVRFKHMpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyogUmV0dXJuIHRoZSBsb3cgbiBiaXRzIG9mIHRoZSBiaXQgYWNjdW11bGF0b3IgKG4gPCAxNikgKi9cclxuZnVuY3Rpb24gQklUUyhzLCBuKVxyXG57XHJcbiAgICByZXR1cm4gcy5ob2xkICYgKCgxIDw8IG4pIC0gMSk7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSBuIGJpdHMgZnJvbSB0aGUgYml0IGFjY3VtdWxhdG9yICovXHJcbmZ1bmN0aW9uIERST1BCSVRTKHMsIG4pXHJcbntcclxuICAgIC8vIGlmKHR5cGVvZiBuICE9ICdudW1iZXInKSB0aHJvdyAnRVJST1InO1xyXG4gICAgcy5ob2xkID4+Pj0gbjtcclxuICAgIHMuYml0cyAtPSBuO1xyXG59XHJcblxyXG4vKiBSZW1vdmUgemVybyB0byBzZXZlbiBiaXRzIGFzIG5lZWRlZCB0byBnbyB0byBhIGJ5dGUgYm91bmRhcnkgKi9cclxuZnVuY3Rpb24gQllURUJJVFMocylcclxue1xyXG4gICAgcy5ob2xkID4+Pj0gcy5iaXRzICYgNztcclxuICAgIHMuYml0cyAtPSBzLmJpdHMgJiA3O1xyXG59XHJcblxyXG4vKiBSZXZlcnNlIHRoZSBieXRlcyBpbiBhIDMyLWJpdCB2YWx1ZSAqL1xyXG5mdW5jdGlvbiBSRVZFUlNFKHEpXHJcbntcclxuICAgIHJldHVybiAoKHEgPj4+IDI0KSAmIDB4ZmYpICtcclxuXHRcdCgocSA+Pj4gOCkgJiAweGZmMDApICtcclxuXHRcdCgocSAmIDB4ZmYwMCkgPDwgOCkgK1xyXG5cdFx0KChxICYgMHhmZikgPDwgMjQpO1xyXG59XHJcblxyXG4vKlxyXG4gICBpbmZsYXRlKCkgdXNlcyBhIHN0YXRlIG1hY2hpbmUgdG8gcHJvY2VzcyBhcyBtdWNoIGlucHV0IGRhdGEgYW5kIGdlbmVyYXRlIGFzXHJcbiAgIG11Y2ggb3V0cHV0IGRhdGEgYXMgcG9zc2libGUgYmVmb3JlIHJldHVybmluZy4gIFRoZSBzdGF0ZSBtYWNoaW5lIGlzXHJcbiAgIHN0cnVjdHVyZWQgcm91Z2hseSBhcyBmb2xsb3dzOlxyXG5cclxuICAgIGZvciAoOzspIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgIC4uLlxyXG4gICAgY2FzZSBTVEFURW46XHJcbiAgICAgICAgaWYgKG5vdCBlbm91Z2ggaW5wdXQgZGF0YSBvciBvdXRwdXQgc3BhY2UgdG8gbWFrZSBwcm9ncmVzcylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC4uLiBtYWtlIHByb2dyZXNzIC4uLlxyXG4gICAgICAgIHN0YXRlID0gU1RBVEVtO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgLi4uXHJcbiAgICB9XHJcblxyXG4gICBzbyB3aGVuIGluZmxhdGUoKSBpcyBjYWxsZWQgYWdhaW4sIHRoZSBzYW1lIGNhc2UgaXMgYXR0ZW1wdGVkIGFnYWluLCBhbmRcclxuICAgaWYgdGhlIGFwcHJvcHJpYXRlIHJlc291cmNlcyBhcmUgcHJvdmlkZWQsIHRoZSBtYWNoaW5lIHByb2NlZWRzIHRvIHRoZVxyXG4gICBuZXh0IHN0YXRlLiAgVGhlIE5FRURCSVRTKCkgbWFjcm8gaXMgdXN1YWxseSB0aGUgd2F5IHRoZSBzdGF0ZSBldmFsdWF0ZXNcclxuICAgd2hldGhlciBpdCBjYW4gcHJvY2VlZCBvciBzaG91bGQgcmV0dXJuLiAgTkVFREJJVFMoKSBkb2VzIHRoZSByZXR1cm4gaWZcclxuICAgdGhlIHJlcXVlc3RlZCBiaXRzIGFyZSBub3QgYXZhaWxhYmxlLiAgVGhlIHR5cGljYWwgdXNlIG9mIHRoZSBCSVRTIG1hY3Jvc1xyXG4gICBpczpcclxuXHJcbiAgICAgICAgTkVFREJJVFMobik7XHJcbiAgICAgICAgLi4uIGRvIHNvbWV0aGluZyB3aXRoIEJJVFMobikgLi4uXHJcbiAgICAgICAgRFJPUEJJVFMobik7XHJcblxyXG4gICB3aGVyZSBORUVEQklUUyhuKSBlaXRoZXIgcmV0dXJucyBmcm9tIGluZmxhdGUoKSBpZiB0aGVyZSBpc24ndCBlbm91Z2hcclxuICAgaW5wdXQgbGVmdCB0byBsb2FkIG4gYml0cyBpbnRvIHRoZSBhY2N1bXVsYXRvciwgb3IgaXQgY29udGludWVzLiAgQklUUyhuKVxyXG4gICBnaXZlcyB0aGUgbG93IG4gYml0cyBpbiB0aGUgYWNjdW11bGF0b3IuICBXaGVuIGRvbmUsIERST1BCSVRTKG4pIGRyb3BzXHJcbiAgIHRoZSBsb3cgbiBiaXRzIG9mZiB0aGUgYWNjdW11bGF0b3IuICBJTklUQklUUygpIGNsZWFycyB0aGUgYWNjdW11bGF0b3JcclxuICAgYW5kIHNldHMgdGhlIG51bWJlciBvZiBhdmFpbGFibGUgYml0cyB0byB6ZXJvLiAgQllURUJJVFMoKSBkaXNjYXJkcyBqdXN0XHJcbiAgIGVub3VnaCBiaXRzIHRvIHB1dCB0aGUgYWNjdW11bGF0b3Igb24gYSBieXRlIGJvdW5kYXJ5LiAgQWZ0ZXIgQllURUJJVFMoKVxyXG4gICBhbmQgYSBORUVEQklUUyg4KSwgdGhlbiBCSVRTKDgpIHdvdWxkIHJldHVybiB0aGUgbmV4dCBieXRlIGluIHRoZSBzdHJlYW0uXHJcblxyXG4gICBORUVEQklUUyhuKSB1c2VzIFBVTExCWVRFKCkgdG8gZ2V0IGFuIGF2YWlsYWJsZSBieXRlIG9mIGlucHV0LCBvciB0byByZXR1cm5cclxuICAgaWYgdGhlcmUgaXMgbm8gaW5wdXQgYXZhaWxhYmxlLiAgVGhlIGRlY29kaW5nIG9mIHZhcmlhYmxlIGxlbmd0aCBjb2RlcyB1c2VzXHJcbiAgIFBVTExCWVRFKCkgZGlyZWN0bHkgaW4gb3JkZXIgdG8gcHVsbCBqdXN0IGVub3VnaCBieXRlcyB0byBkZWNvZGUgdGhlIG5leHRcclxuICAgY29kZSwgYW5kIG5vIG1vcmUuXHJcblxyXG4gICBTb21lIHN0YXRlcyBsb29wIHVudGlsIHRoZXkgZ2V0IGVub3VnaCBpbnB1dCwgbWFraW5nIHN1cmUgdGhhdCBlbm91Z2hcclxuICAgc3RhdGUgaW5mb3JtYXRpb24gaXMgbWFpbnRhaW5lZCB0byBjb250aW51ZSB0aGUgbG9vcCB3aGVyZSBpdCBsZWZ0IG9mZlxyXG4gICBpZiBORUVEQklUUygpIHJldHVybnMgaW4gdGhlIGxvb3AuICBGb3IgZXhhbXBsZSwgd2FudCwgbmVlZCwgYW5kIGtlZXBcclxuICAgd291bGQgYWxsIGhhdmUgdG8gYWN0dWFsbHkgYmUgcGFydCBvZiB0aGUgc2F2ZWQgc3RhdGUgaW4gY2FzZSBORUVEQklUUygpXHJcbiAgIHJldHVybnM6XHJcblxyXG4gICAgY2FzZSBTVEFURXc6XHJcbiAgICAgICAgd2hpbGUgKHdhbnQgPCBuZWVkKSB7XHJcbiAgICAgICAgICAgIE5FRURCSVRTKG4pO1xyXG4gICAgICAgICAgICBrZWVwW3dhbnQrK10gPSBCSVRTKG4pO1xyXG4gICAgICAgICAgICBEUk9QQklUUyhuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUgPSBTVEFURXg7XHJcbiAgICBjYXNlIFNUQVRFeDpcclxuXHJcbiAgIEFzIHNob3duIGFib3ZlLCBpZiB0aGUgbmV4dCBzdGF0ZSBpcyBhbHNvIHRoZSBuZXh0IGNhc2UsIHRoZW4gdGhlIGJyZWFrXHJcbiAgIGlzIG9taXR0ZWQuXHJcblxyXG4gICBBIHN0YXRlIG1heSBhbHNvIHJldHVybiBpZiB0aGVyZSBpcyBub3QgZW5vdWdoIG91dHB1dCBzcGFjZSBhdmFpbGFibGUgdG9cclxuICAgY29tcGxldGUgdGhhdCBzdGF0ZS4gIFRob3NlIHN0YXRlcyBhcmUgY29weWluZyBzdG9yZWQgZGF0YSwgd3JpdGluZyBhXHJcbiAgIGxpdGVyYWwgYnl0ZSwgYW5kIGNvcHlpbmcgYSBtYXRjaGluZyBzdHJpbmcuXHJcblxyXG4gICBXaGVuIHJldHVybmluZywgYSBcImdvdG8gaW5mX2xlYXZlXCIgaXMgdXNlZCB0byB1cGRhdGUgdGhlIHRvdGFsIGNvdW50ZXJzLFxyXG4gICB1cGRhdGUgdGhlIGNoZWNrIHZhbHVlLCBhbmQgZGV0ZXJtaW5lIHdoZXRoZXIgYW55IHByb2dyZXNzIGhhcyBiZWVuIG1hZGVcclxuICAgZHVyaW5nIHRoYXQgaW5mbGF0ZSgpIGNhbGwgaW4gb3JkZXIgdG8gcmV0dXJuIHRoZSBwcm9wZXIgcmV0dXJuIGNvZGUuXHJcbiAgIFByb2dyZXNzIGlzIGRlZmluZWQgYXMgYSBjaGFuZ2UgaW4gZWl0aGVyIHN0cm0tPmF2YWlsX2luIG9yIHN0cm0tPmF2YWlsX291dC5cclxuICAgV2hlbiB0aGVyZSBpcyBhIHdpbmRvdywgZ290byBpbmZfbGVhdmUgd2lsbCB1cGRhdGUgdGhlIHdpbmRvdyB3aXRoIHRoZSBsYXN0XHJcbiAgIG91dHB1dCB3cml0dGVuLiAgSWYgYSBnb3RvIGluZl9sZWF2ZSBvY2N1cnMgaW4gdGhlIG1pZGRsZSBvZiBkZWNvbXByZXNzaW9uXHJcbiAgIGFuZCB0aGVyZSBpcyBubyB3aW5kb3cgY3VycmVudGx5LCBnb3RvIGluZl9sZWF2ZSB3aWxsIGNyZWF0ZSBvbmUgYW5kIGNvcHlcclxuICAgb3V0cHV0IHRvIHRoZSB3aW5kb3cgZm9yIHRoZSBuZXh0IGNhbGwgb2YgaW5mbGF0ZSgpLlxyXG5cclxuICAgSW4gdGhpcyBpbXBsZW1lbnRhdGlvbiwgdGhlIGZsdXNoIHBhcmFtZXRlciBvZiBpbmZsYXRlKCkgb25seSBhZmZlY3RzIHRoZVxyXG4gICByZXR1cm4gY29kZSAocGVyIHpsaWIuaCkuICBpbmZsYXRlKCkgYWx3YXlzIHdyaXRlcyBhcyBtdWNoIGFzIHBvc3NpYmxlIHRvXHJcbiAgIHN0cm0tPm5leHRfb3V0LCBnaXZlbiB0aGUgc3BhY2UgYXZhaWxhYmxlIGFuZCB0aGUgcHJvdmlkZWQgaW5wdXQtLXRoZSBlZmZlY3RcclxuICAgZG9jdW1lbnRlZCBpbiB6bGliLmggb2YgWl9TWU5DX0ZMVVNILiAgRnVydGhlcm1vcmUsIGluZmxhdGUoKSBhbHdheXMgZGVmZXJzXHJcbiAgIHRoZSBhbGxvY2F0aW9uIG9mIGFuZCBjb3B5aW5nIGludG8gYSBzbGlkaW5nIHdpbmRvdyB1bnRpbCBuZWNlc3NhcnksIHdoaWNoXHJcbiAgIHByb3ZpZGVzIHRoZSBlZmZlY3QgZG9jdW1lbnRlZCBpbiB6bGliLmggZm9yIFpfRklOSVNIIHdoZW4gdGhlIGVudGlyZSBpbnB1dFxyXG4gICBzdHJlYW0gYXZhaWxhYmxlLiAgU28gdGhlIG9ubHkgdGhpbmcgdGhlIGZsdXNoIHBhcmFtZXRlciBhY3R1YWxseSBkb2VzIGlzOlxyXG4gICB3aGVuIGZsdXNoIGlzIHNldCB0byBaX0ZJTklTSCwgaW5mbGF0ZSgpIGNhbm5vdCByZXR1cm4gWl9PSy4gIEluc3RlYWQgaXRcclxuICAgd2lsbCByZXR1cm4gWl9CVUZfRVJST1IgaWYgaXQgaGFzIG5vdCByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHN0cmVhbS5cclxuICovXHJcblxyXG4vKiBwZXJtdXRhdGlvbiBvZiBjb2RlIGxlbmd0aHMgKi9cclxudmFyIGluZmxhdGVfb3JkZXIgPSBbXHJcbiAgICAxNiwgMTcsIDE4LCAwLCA4LCA3LCA5LCA2LCAxMCwgNSwgMTEsIDQsIDEyLCAzLCAxMywgMiwgMTQsIDEsIDE1XTtcclxuWkxJQi5pbmZsYXRlID0gZnVuY3Rpb24oc3RybSwgZmx1c2gpXHJcbntcclxuICAgIHZhciBzdGF0ZTtcclxuICAgIHZhciBzO1xyXG4gICAgdmFyIF9pbiwgb3V0OyAgICAgICAgICAvKiBzYXZlIHN0YXJ0aW5nIGF2YWlsYWJsZSBpbnB1dCBhbmQgb3V0cHV0ICovXHJcbiAgICB2YXIgY29weTsgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBzdG9yZWQgb3IgbWF0Y2ggYnl0ZXMgdG8gY29weSAqL1xyXG4gICAgdmFyIGZyb21fd2luZG93X29mZnNldCA9IC0xOyAvKiBpbmRleCBvZiB3aW5kb3dbXSAqL1xyXG4gICAgdmFyIGZyb21fb3V0X29mZnNldCA9IC0xOyAvKiBpbmRleCBvZiBuZXh0X291dFtdICovXHJcbiAgICB2YXIgaGVyZTsgICAgICAgICAgICAgIC8qIGN1cnJlbnQgZGVjb2RpbmcgdGFibGUgZW50cnkgKi9cclxuICAgIHZhciBsYXN0OyAgICAgICAgICAgICAgLyogcGFyZW50IHRhYmxlIGVudHJ5ICovXHJcbiAgICB2YXIgbGVuOyAgICAgICAgICAgICAgIC8qIGxlbmd0aCB0byBjb3B5IGZvciByZXBlYXRzLCBiaXRzIHRvIGRyb3AgKi9cclxuICAgIHZhciByZXQ7ICAgICAgICAgICAgICAgLyogcmV0dXJuIGNvZGUgKi9cclxuXHJcbiAgICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUgfHxcclxuICAgICAgICAoIXN0cm0uaW5wdXRfZGF0YSAmJiBzdHJtLmF2YWlsX2luICE9IDApKVxyXG4gICAgICAgIHJldHVybiBaTElCLlpfU1RSRUFNX0VSUk9SO1xyXG5cclxuICAgIHN0YXRlID0gc3RybS5zdGF0ZTtcclxuICAgIGlmIChzdGF0ZS5tb2RlID09IFRZUEUpIHN0YXRlLm1vZGUgPSBUWVBFRE87ICAgICAgLyogc2tpcCBjaGVjayAqL1xyXG5cclxuICAgIC8vIExPQURcclxuICAgIHMgPSB7fTtcclxuICAgIExPQUQoc3RybSwgcyk7XHJcblxyXG4gICAgX2luID0gcy5oYXZlO1xyXG4gICAgb3V0ID0gcy5sZWZ0O1xyXG4gICAgcmV0ID0gWkxJQi5aX09LO1xyXG5pbmZfbGVhdmU6IGZvciAoOzspIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJTdGF0ZS5tb2RlXCIsIHN0YXRlLm1vZGUpXHJcbiAgICAvL2NvbnNvbGUubG9nKHN0cm0ubXNnKVxyXG4gICAgICAgIHN3aXRjaCAoc3RhdGUubW9kZSkge1xyXG4gICAgICAgIGNhc2UgSEVBRDpcclxuICAgICAgICAgICAgaWYgKHN0YXRlLndyYXAgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IFRZUEVETztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCAxNikpIGJyZWFrIGluZl9sZWF2ZTtcclxuLy8gI2lmZGVmIEdVTlpJUFxyXG4gICAgICAgICAgICBpZiAoKHN0YXRlLndyYXAgJiAyKSAmJiBzLmhvbGQgPT0gMHg4YjFmKSB7ICAvKiBnemlwIGhlYWRlciAqL1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuY2hlY2sgPSBzdHJtLmNoZWNrc3VtX2Z1bmN0aW9uKDAsIG51bGwsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgQ1JDMihzdHJtLCBzLmhvbGQpO1xyXG4gICAgICAgICAgICAgICAgSU5JVEJJVFMocyk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gRkxBR1M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5mbGFncyA9IDA7ICAgICAgICAgICAvKiBleHBlY3QgemxpYiBoZWFkZXIgKi9cclxuICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5oZWFkLmRvbmUgPSAtMTtcclxuICAgICAgICAgICAgaWYgKCEoc3RhdGUud3JhcCAmIDEpIHx8ICAgLyogY2hlY2sgaWYgemxpYiBoZWFkZXIgYWxsb3dlZCAqL1xyXG4vLyNlbHNlXHJcbi8vICAgICAgICAgIGlmIChcclxuLy8jZW5kaWZcclxuICAgICAgICAgICAgICAgICgoQklUUyhzLCA4KSA8PCA4KSArIChzLmhvbGQgPj4+IDgpKSAlIDMxKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbmNvcnJlY3QgaGVhZGVyIGNoZWNrJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoQklUUyhzLCA0KSAhPSBaTElCLlpfREVGTEFURUQpIHtcclxuICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ3Vua25vd24gY29tcHJlc3Npb24gbWV0aG9kJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRFJPUEJJVFMocywgNCk7XHJcbiAgICAgICAgICAgIGxlbiA9IEJJVFMocywgNCkgKyA4O1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUud2JpdHMgPT0gMClcclxuICAgICAgICAgICAgICAgIHN0YXRlLndiaXRzID0gbGVuO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChsZW4gPiBzdGF0ZS53Yml0cykge1xyXG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCB3aW5kb3cgc2l6ZSc7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuZG1heCA9IDEgPDwgbGVuO1xyXG4vLyAgICAgICAgICAgIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgemxpYiBoZWFkZXIgb2tcXG5cIikpO1xyXG5cdFx0XHRzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPSBzdHJtLmNoZWNrc3VtX2Z1bmN0aW9uKDAsIG51bGwsIDAsIDApO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gcy5ob2xkICYgMHgyMDAgPyBESUNUSUQgOiBUWVBFO1xyXG4gICAgICAgICAgICBJTklUQklUUyhzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbi8vICNpZmRlZiBHVU5aSVBcclxuICAgICAgICBjYXNlIEZMQUdTOlxyXG4gICAgICAgICAgICBpZighTkVFREJJVFMocywgMTYpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgIHN0YXRlLmZsYWdzID0gcy5ob2xkO1xyXG4gICAgICAgICAgICBpZiAoKHN0YXRlLmZsYWdzICYgMHhmZikgIT0gWkxJQi5aX0RFRkxBVEVEKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJtLm1zZyA9IFwidW5rbm93biBjb21wcmVzc2lvbiBtZXRob2RcIjtcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweGUwMDApIHtcclxuICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gXCJ1bmtub3duIGhlYWRlciBmbGFncyBzZXRcIjtcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuaGVhZCAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQudGV4dCA9IChzLmhvbGQgPj4+IDgpICYgMTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwMjAwKSB7XHJcblx0XHRcdFx0Q1JDMihzdHJtLCBzLmhvbGQpO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIElOSVRCSVRTKHMpO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gVElNRTtcclxuICAgICAgICBjYXNlIFRJTUU6XHJcbiAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCAzMikpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5oZWFkLnRpbWUgPSBzLmhvbGQ7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xyXG5cdFx0XHRcdENSQzQoc3RybSwgcy5ob2xkKTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICBJTklUQklUUyhzKTtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IE9TO1xyXG4gICAgICAgIGNhc2UgT1M6XHJcbiAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCAxNikpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQueGZsYWdzID0gcy5ob2xkICYgMHhmZjtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQub3MgPSBzLmhvbGQgPj4+IDg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwMjAwKSB7XHJcblx0XHRcdFx0Q1JDMihzdHJtLCBzLmhvbGQpO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIElOSVRCSVRTKHMpO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gRVhMRU47XHJcbiAgICAgICAgY2FzZSBFWExFTjpcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwNDAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZighTkVFREJJVFMocywgMTYpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5sZW5ndGggPSBzLmhvbGQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuaGVhZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQuZXh0cmFfbGVuID0gcy5ob2xkO1xyXG5cdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xyXG5cdFx0XHRcdFx0Q1JDMihzdHJtLCBzLmhvbGQpO1xyXG5cdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgIElOSVRCSVRTKHMpO1xyXG5cdFx0XHRcdHN0YXRlLmhlYWQuZXh0cmEgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQuZXh0cmEgPSBudWxsO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBFWFRSQTtcclxuICAgICAgICBjYXNlIEVYVFJBOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDA0MDApIHtcclxuICAgICAgICAgICAgICAgIGNvcHkgPSBzdGF0ZS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29weSA+IHMuaGF2ZSkgY29weSA9IHMuaGF2ZTtcclxuICAgICAgICAgICAgICAgIGlmIChjb3B5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuaGVhZC5leHRyYSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSBzdGF0ZS5oZWFkLmV4dHJhX2xlbiAtIHN0YXRlLmxlbmd0aDtcclxuLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgem1lbWNweShzdGF0ZS0+aGVhZC0+ZXh0cmEgKyBsZW4sIG5leHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuICsgY29weSA+IHN0YXRlLT5oZWFkLT5leHRyYV9tYXggP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLT5oZWFkLT5leHRyYV9tYXggLSBsZW4gOiBjb3B5KTtcclxuKi9cclxuXHRcdFx0XHRcdFx0c3RhdGUuaGVhZC5leHRyYSArPSBzdHJtLmlucHV0X2RhdGEuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdHMubmV4dCwgcy5uZXh0ICsgKGxlbiArIGNvcHkgPiBzdGF0ZS5oZWFkLmV4dHJhX21heCA/XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHN0YXRlLmhlYWQuZXh0cmFfbWF4IC0gbGVuIDogY29weSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwMjAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jaGVjayA9IHN0cm0uY2hlY2tzdW1fZnVuY3Rpb24oc3RhdGUuY2hlY2ssIHN0cm0uaW5wdXRfZGF0YSwgcy5uZXh0LCBjb3B5KTtcclxuICAgICAgICAgICAgICAgICAgICBzLmhhdmUgLT0gY29weTtcclxuICAgICAgICAgICAgICAgICAgICBzLm5leHQgKz0gY29weTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sZW5ndGggLT0gY29weTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5sZW5ndGgpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gTkFNRTtcclxuICAgICAgICBjYXNlIE5BTUU6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDgwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMuaGF2ZSA9PSAwKSBicmVhayBpbmZfbGVhdmU7XHJcblx0XHRcdFx0aWYgKHN0YXRlLmhlYWQgIT09IG51bGwgJiYgc3RhdGUuaGVhZC5uYW1lID09PSBudWxsKSB7XHJcblx0XHRcdFx0XHRzdGF0ZS5oZWFkLm5hbWUgPSBcIlwiO1xyXG5cdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgIGNvcHkgPSAwO1xyXG5cdFx0XHRcdC8vIFRPRE8gZW5kID0gc3RybS5pbnB1dF9kYXRhLmluZGV4T2YoXCJcXDBcIiwgcy5uZXh0KTtcclxuXHRcdFx0XHQvLyBUT0RPIHN0YXRlLmxlbmd0aCA9PiBzdGF0ZS5oZWFkLm5hbWUubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVuID0gc3RybS5pbnB1dF9kYXRhLmNoYXJBdChzLm5leHQgKyBjb3B5KTsgY29weSsrO1xyXG5cdFx0XHRcdFx0aWYobGVuID09PSBcIlxcMFwiKVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuaGVhZCAhPT0gbnVsbCAmJlxyXG5cdFx0XHRcdFx0XHRzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oZWFkLm5hbWVfbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQubmFtZSArPSBsZW47XHJcblx0XHRcdFx0XHRcdHN0YXRlLmxlbmd0aCsrO1xyXG5cdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoY29weSA8IHMuaGF2ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jaGVjayA9IHN0cm0uY2hlY2tzdW1fZnVuY3Rpb24oc3RhdGUuY2hlY2ssIHN0cm0uaW5wdXRfZGF0YSwgcy5uZXh0LCBjb3B5KTtcclxuXHRcdFx0XHR9XHJcbiAgICAgICAgICAgICAgICBzLmhhdmUgLT0gY29weTtcclxuICAgICAgICAgICAgICAgIHMubmV4dCArPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlbiAhPT0gXCJcXDBcIikgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5oZWFkLm5hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICBzdGF0ZS5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gQ09NTUVOVDtcclxuICAgICAgICBjYXNlIENPTU1FTlQ6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MTAwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMuaGF2ZSA9PSAwKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICBjb3B5ID0gMDtcclxuXHRcdFx0XHRpZiAoc3RhdGUuaGVhZCAhPT0gbnVsbCAmJiBzdGF0ZS5oZWFkLmNvbW1lbnQgPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdHN0YXRlLmhlYWQuY29tbWVudCA9IFwiXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIFRPRE8gZW5kID0gc3RybS5pbnB1dF9kYXRhLmluZGV4T2YoXCJcXDBcIiwgcy5uZXh0KTtcclxuXHRcdFx0XHQvLyBUT0RPIHN0YXRlLmxlbmd0aCA9PiBzdGF0ZS5oZWFkLmNvbW1lbnQubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVuID0gc3RybS5pbnB1dF9kYXRhLmNoYXJBdChzLm5leHQgKyBjb3B5KTsgY29weSsrO1xyXG5cdFx0XHRcdFx0aWYobGVuID09PSBcIlxcMFwiKVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuaGVhZCAhPT0gbnVsbCAmJlxyXG5cdFx0XHRcdFx0XHRzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oZWFkLmNvbW1fbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQuY29tbWVudCArPSBsZW47XHJcblx0XHRcdFx0XHRcdHN0YXRlLmxlbmd0aCsrO1xyXG5cdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoY29weSA8IHMuaGF2ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDAyMDApXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuY2hlY2sgPSBzdHJtLmNoZWNrc3VtX2Z1bmN0aW9uKHN0YXRlLmNoZWNrLCBzdHJtLmlucHV0X2RhdGEsIHMubmV4dCwgY29weSk7XHJcbiAgICAgICAgICAgICAgICBzLmhhdmUgLT0gY29weTtcclxuICAgICAgICAgICAgICAgIHMubmV4dCArPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlbiAhPT0gXCJcXDBcIikgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5oZWFkLmNvbW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gSENSQztcclxuICAgICAgICBjYXNlIEhDUkM6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYoIU5FRURCSVRTKHMsIDE2KSkgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMuaG9sZCAhPSAoc3RhdGUuY2hlY2sgJiAweGZmZmYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RybS5tc2cgPSBcImhlYWRlciBjcmMgbWlzbWF0Y2hcIjtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgSU5JVEJJVFMocyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQuaGNyYyA9IChzdGF0ZS5mbGFncyA+Pj4gOSkgJiAxO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaGVhZC5kb25lID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPSBzdHJtLmNoZWNrc3VtX2Z1bmN0aW9uKDAsIG51bGwsIDAsIDApO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gVFlQRTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbi8vI2VuZGlmXHJcbiAgICAgICAgY2FzZSBESUNUSUQ6XHJcbiAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCAzMikpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgc3RybS5hZGxlciA9IHN0YXRlLmNoZWNrID0gUkVWRVJTRShzLmhvbGQpO1xyXG4gICAgICAgICAgICBJTklUQklUUyhzKTtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IERJQ1Q7XHJcbiAgICAgICAgY2FzZSBESUNUOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuaGF2ZWRpY3QgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgUkVTVE9SRShzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBaTElCLlpfTkVFRF9ESUNUO1xyXG4gICAgICAgICAgICB9XHJcblx0XHRcdHN0cm0uYWRsZXIgPSBzdGF0ZS5jaGVjayA9IHN0cm0uY2hlY2tzdW1fZnVuY3Rpb24oMCwgbnVsbCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBUWVBFO1xyXG4gICAgICAgIGNhc2UgVFlQRTpcclxuICAgICAgICAgICAgaWYgKGZsdXNoID09IFpMSUIuWl9CTE9DSyB8fCBmbHVzaCA9PSBaTElCLlpfVFJFRVMpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICBjYXNlIFRZUEVETzpcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmxhc3QpIHtcclxuICAgICAgICAgICAgICAgIEJZVEVCSVRTKHMpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IENIRUNLO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIU5FRURCSVRTKHMsIDMpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhc3QgPSBCSVRTKHMsIDEpO1xyXG4gICAgICAgICAgICBEUk9QQklUUyhzLCAxKTtcclxuICAgICAgICAgICAgc3dpdGNoIChCSVRTKHMsIDIpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHN0b3JlZCBibG9jayAqL1xyXG4vLyAgICAgICAgICAgICAgICBUcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgc3RvcmVkIGJsb2NrJXNcXG5cIixcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS0+bGFzdCA/IFwiIChsYXN0KVwiIDogXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IFNUT1JFRDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBmaXhlZCBibG9jayAqL1xyXG4gICAgICAgICAgICAgICAgZml4ZWR0YWJsZXMoc3RhdGUpO1xyXG4vLyAgICAgICAgICAgICAgICBUcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgZml4ZWQgY29kZXMgYmxvY2slc1xcblwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLT5sYXN0ID8gXCIgKGxhc3QpXCIgOiBcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gTEVOXzsgICAgICAgICAgICAgLyogZGVjb2RlIGNvZGVzICovXHJcbiAgICAgICAgICAgICAgICBpZiAoZmx1c2ggPT0gWkxJQi5aX1RSRUVTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRFJPUEJJVFMocywgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGR5bmFtaWMgYmxvY2sgKi9cclxuLy8gICAgICAgICAgICAgICAgVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgIGR5bmFtaWMgY29kZXMgYmxvY2slc1xcblwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLT5sYXN0ID8gXCIgKGxhc3QpXCIgOiBcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gVEFCTEU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBibG9jayB0eXBlJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRFJPUEJJVFMocywgMik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU1RPUkVEOlxyXG4gICAgICAgICAgICBCWVRFQklUUyhzKTsgICAgICAgICAgICAgICAgICAgICAgICAgLyogZ28gdG8gYnl0ZSBib3VuZGFyeSAqL1xyXG4gICAgICAgICAgICBpZighTkVFREJJVFMocywgMzIpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgIGlmICgocy5ob2xkICYgMHhmZmZmKSAhPSAoKChzLmhvbGQgPj4+IDE2KSAmIDB4ZmZmZikgXiAweGZmZmYpKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIHN0b3JlZCBibG9jayBsZW5ndGhzJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5sZW5ndGggPSBzLmhvbGQgJiAweGZmZmY7XHJcbi8vICAgICAgICAgICAgVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgc3RvcmVkIGxlbmd0aCAldVxcblwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgc3RhdGUtPmxlbmd0aCkpO1xyXG4gICAgICAgICAgICBJTklUQklUUyhzKTtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IENPUFlfO1xyXG4gICAgICAgICAgICBpZiAoZmx1c2ggPT0gWkxJQi5aX1RSRUVTKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgY2FzZSBDT1BZXzpcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IENPUFk7XHJcbiAgICAgICAgY2FzZSBDT1BZOlxyXG4gICAgICAgICAgICBjb3B5ID0gc3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAoY29weSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvcHkgPiBzLmhhdmUpIGNvcHkgPSBzLmhhdmU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29weSA+IHMubGVmdCkgY29weSA9IHMubGVmdDtcclxuICAgICAgICAgICAgICAgIGlmIChjb3B5ID09IDApIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgICAgIHN0cm0ub3V0cHV0X2RhdGEgKz0gc3RybS5pbnB1dF9kYXRhLnN1YnN0cmluZyhzLm5leHQsIHMubmV4dCArIGNvcHkpO1xyXG4gICAgICAgICAgICAgICAgc3RybS5uZXh0X291dCArPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgcy5oYXZlIC09IGNvcHk7XHJcbiAgICAgICAgICAgICAgICBzLm5leHQgKz0gY29weTtcclxuICAgICAgICAgICAgICAgIHMubGVmdCAtPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubGVuZ3RoIC09IGNvcHk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIHN0b3JlZCBlbmRcXG5cIikpO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gVFlQRTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUQUJMRTpcclxuICAgICAgICAgICAgaWYoIU5FRURCSVRTKHMsIDE0KSkgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICBzdGF0ZS5ubGVuID0gQklUUyhzLCA1KSArIDI1NztcclxuICAgICAgICAgICAgRFJPUEJJVFMocywgNSk7XHJcbiAgICAgICAgICAgIHN0YXRlLm5kaXN0ID0gQklUUyhzLCA1KSArIDE7XHJcbiAgICAgICAgICAgIERST1BCSVRTKHMsIDUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5uY29kZSA9IEJJVFMocywgNCkgKyA0O1xyXG4gICAgICAgICAgICBEUk9QQklUUyhzLCA0KTtcclxuLy8jaWZuZGVmIFBLWklQX0JVR19XT1JLQVJPVU5EXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5ubGVuID4gMjg2IHx8IHN0YXRlLm5kaXN0ID4gMzApIHtcclxuICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ3RvbyBtYW55IGxlbmd0aCBvciBkaXN0YW5jZSBzeW1ib2xzJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4vLyNlbmRpZlxyXG4vLyAgICAgICAgICAgIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIHRhYmxlIHNpemVzIG9rXFxuXCIpKTtcclxuICAgICAgICAgICAgc3RhdGUuaGF2ZSA9IDA7XHJcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBMRU5MRU5TO1xyXG4gICAgICAgIGNhc2UgTEVOTEVOUzpcclxuICAgICAgICAgICAgd2hpbGUgKHN0YXRlLmhhdmUgPCBzdGF0ZS5uY29kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoIU5FRURCSVRTKHMsIDMpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wID0gQklUUyhzLCAzKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmxlbnNbaW5mbGF0ZV9vcmRlcltzdGF0ZS5oYXZlKytdXSA9IHRtcDtcclxuICAgICAgICAgICAgICAgIERST1BCSVRTKHMsIDMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlIChzdGF0ZS5oYXZlIDwgMTkpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5sZW5zW2luZmxhdGVfb3JkZXJbc3RhdGUuaGF2ZSsrXV0gPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZS5uZXh0ID0gMDtcclxuICAgICAgICAgICAgc3RhdGUubGVuY29kZSA9IDA7XHJcbiAgICAgICAgICAgIHN0YXRlLmxlbmJpdHMgPSA3O1xyXG5cclxuLy8gICAgICAgICAgICByZXQgPSBpbmZsYXRlX3RhYmxlKENPREVTLCBzdGF0ZS0+bGVucywgMTksICYoc3RhdGUtPm5leHQpLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJihzdGF0ZS0+bGVuYml0cyksIHN0YXRlLT53b3JrKTtcclxuICAgICAgICAgICAgcmV0ID0gaW5mbGF0ZV90YWJsZShzdGF0ZSwgQ09ERVMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJldCkge1xyXG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBjb2RlIGxlbmd0aHMgc2V0JztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIGNvZGUgbGVuZ3RocyBva1xcblwiKSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmhhdmUgPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gQ09ERUxFTlM7XHJcbiAgICAgICAgY2FzZSBDT0RFTEVOUzpcclxuICAgICAgICAgICAgd2hpbGUgKHN0YXRlLmhhdmUgPCBzdGF0ZS5ubGVuICsgc3RhdGUubmRpc3QpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoOzspIHtcclxuICAgICAgICAgICAgICAgICAgICBoZXJlID0gc3RhdGUuY29kZXNbc3RhdGUubGVuY29kZSArIEJJVFMocywgc3RhdGUubGVuYml0cyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZXJlLmJpdHMgPD0gcy5iaXRzKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBpZighUFVMTEJZVEUocykpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChoZXJlLnZhbCA8IDE2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRFJPUEJJVFMocywgaGVyZS5iaXRzKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sZW5zW3N0YXRlLmhhdmUrK10gPSBoZXJlLnZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZXJlLnZhbCA9PSAxNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighTkVFREJJVFMocywgaGVyZS5iaXRzICsgMikpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRFJPUEJJVFMocywgaGVyZS5iaXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmhhdmUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuID0gc3RhdGUubGVuc1tzdGF0ZS5oYXZlIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcHkgPSAzICsgQklUUyhzLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRFJPUEJJVFMocywgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGhlcmUudmFsID09IDE3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCBoZXJlLmJpdHMgKyAzKSkgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEUk9QQklUUyhzLCBoZXJlLmJpdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3B5ID0gMyArIEJJVFMocywgMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERST1BCSVRTKHMsIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIU5FRURCSVRTKHMsIGhlcmUuYml0cyArIDcpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERST1BCSVRTKHMsIGhlcmUuYml0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcHkgPSAxMSArIEJJVFMocywgNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERST1BCSVRTKHMsIDcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuaGF2ZSArIGNvcHkgPiBzdGF0ZS5ubGVuICsgc3RhdGUubmRpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY29weS0tKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sZW5zW3N0YXRlLmhhdmUrK10gPSBsZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGhhbmRsZSBlcnJvciBicmVha3MgaW4gd2hpbGUgKi9cclxuICAgICAgICAgICAgaWYgKHN0YXRlLm1vZGUgPT0gQkFEKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8qIGNoZWNrIGZvciBlbmQtb2YtYmxvY2sgY29kZSAoYmV0dGVyIGhhdmUgb25lKSAqL1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUubGVuc1syNTZdID09IDApIHtcclxuICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgY29kZSAtLSBtaXNzaW5nIGVuZC1vZi1ibG9jayc7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGJ1aWxkIGNvZGUgdGFibGVzIC0tIG5vdGU6IGRvIG5vdCBjaGFuZ2UgdGhlIGxlbmJpdHMgb3IgZGlzdGJpdHNcclxuICAgICAgICAgICAgICAgdmFsdWVzIGhlcmUgKDkgYW5kIDYpIHdpdGhvdXQgcmVhZGluZyB0aGUgY29tbWVudHMgaW4gaW5mdHJlZXMuaFxyXG4gICAgICAgICAgICAgICBjb25jZXJuaW5nIHRoZSBFTk9VR0ggY29uc3RhbnRzLCB3aGljaCBkZXBlbmQgb24gdGhvc2UgdmFsdWVzICovXHJcbiAgICAgICAgICAgIHN0YXRlLm5leHQgPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZS5sZW5jb2RlID0gc3RhdGUubmV4dDtcclxuICAgICAgICAgICAgc3RhdGUubGVuYml0cyA9IDk7XHJcbi8vICAgICAgICAgICAgcmV0ID0gaW5mbGF0ZV90YWJsZShMRU5TLCBzdGF0ZS0+bGVucywgc3RhdGUtPm5sZW4sICYoc3RhdGUtPm5leHQpLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJihzdGF0ZS0+bGVuYml0cyksIHN0YXRlLT53b3JrKTtcclxuICAgICAgICAgICAgcmV0ID0gaW5mbGF0ZV90YWJsZShzdGF0ZSwgTEVOUyk7XHJcbiAgICAgICAgICAgIGlmIChyZXQpIHtcclxuICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgbGl0ZXJhbC9sZW5ndGhzIHNldCc7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuZGlzdGNvZGUgPSBzdGF0ZS5uZXh0O1xyXG4gICAgICAgICAgICBzdGF0ZS5kaXN0Yml0cyA9IDY7XHJcbi8vICAgICAgICAgICAgcmV0ID0gaW5mbGF0ZV90YWJsZShESVNUUywgc3RhdGUtPmxlbnMgKyBzdGF0ZS0+bmxlbiwgc3RhdGUtPm5kaXN0LCAmKHN0YXRlLT5uZXh0KSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJihzdGF0ZS0+ZGlzdGJpdHMpLCBzdGF0ZS0+d29yayk7XHJcbiAgICAgICAgICAgIHJldCA9IGluZmxhdGVfdGFibGUoc3RhdGUsIERJU1RTKTtcclxuICAgICAgICAgICAgaWYgKHJldCkge1xyXG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBkaXN0YW5jZXMgc2V0JztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIGNvZGVzIG9rXFxuXCIpKTtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IExFTl87XHJcbiAgICAgICAgICAgIGlmIChmbHVzaCA9PSBaTElCLlpfVFJFRVMpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICBjYXNlIExFTl86XHJcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBMRU47XHJcbiAgICAgICAgY2FzZSBMRU46XHJcbiAgICAgICAgICAgIGlmIChzLmhhdmUgPj0gNiAmJiBzLmxlZnQgPj0gMjU4KSB7XHJcbiAgICAgICAgICAgICAgICBSRVNUT1JFKHMpO1xyXG4gICAgICAgICAgICAgICAgaW5mbGF0ZV9mYXN0KHN0cm0sIG91dCk7XHJcbiAgICAgICAgICAgICAgICBMT0FEKHN0cm0sIHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLm1vZGUgPT0gVFlQRSlcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYWNrID0gLTE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5iYWNrID0gMDtcclxuICAgICAgICAgICAgZm9yICg7Oykge1xyXG4gICAgICAgICAgICAgICAgaGVyZSA9IHN0YXRlLmNvZGVzW3N0YXRlLmxlbmNvZGUgKyBCSVRTKHMsIHN0YXRlLmxlbmJpdHMpXTtcclxuICAgICAgICAgICAgICAgIGlmIChoZXJlLmJpdHMgPD0gcy5iaXRzKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGlmKCFQVUxMQllURShzKSkgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoZXJlLm9wICYmIChoZXJlLm9wICYgMHhmMCkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGFzdCA9IGhlcmU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKDs7KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVyZSA9IHN0YXRlLmNvZGVzW3N0YXRlLmxlbmNvZGUgKyBsYXN0LnZhbCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChCSVRTKHMsIGxhc3QuYml0cyArIGxhc3Qub3ApID4+PiBsYXN0LmJpdHMpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdC5iaXRzICsgaGVyZS5iaXRzIDw9IHMuYml0cykgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIVBVTExCWVRFKHMpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEUk9QQklUUyhzLCBsYXN0LmJpdHMpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmFjayArPSBsYXN0LmJpdHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRFJPUEJJVFMocywgaGVyZS5iaXRzKTtcclxuICAgICAgICAgICAgc3RhdGUuYmFjayArPSBoZXJlLmJpdHM7XHJcbiAgICAgICAgICAgIHN0YXRlLmxlbmd0aCA9IGhlcmUudmFsO1xyXG4gICAgICAgICAgICBpZiAoaGVyZS5vcCA9PSAwKSB7XHJcbi8vICAgICAgICAgICAgICBUcmFjZXZ2KChzdGRlcnIsIGhlcmUudmFsID49IDB4MjAgJiYgaGVyZS52YWwgPCAweDdmID9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBcImluZmxhdGU6ICAgICAgICAgbGl0ZXJhbCAnJWMnXFxuXCIgOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5mbGF0ZTogICAgICAgICBsaXRlcmFsIDB4JTAyeFxcblwiLCBoZXJlLnZhbCkpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IExJVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoZXJlLm9wICYgMzIpIHtcclxuLy8gICAgICAgICAgICAgICAgVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgZW5kIG9mIGJsb2NrXFxuXCIpKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJhY2sgPSAtMTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBUWVBFO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhlcmUub3AgJiA2NCkge1xyXG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlJztcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5leHRyYSA9IGhlcmUub3AgJiAxNTtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IExFTkVYVDtcclxuICAgICAgICBjYXNlIExFTkVYVDpcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmV4dHJhKSB7XHJcbiAgICAgICAgICAgICAgICBpZighTkVFREJJVFMocywgc3RhdGUuZXh0cmEpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5sZW5ndGggKz0gQklUUyhzLCBzdGF0ZS5leHRyYSk7XHJcbiAgICAgICAgICAgICAgICBEUk9QQklUUyhzLCBzdGF0ZS5leHRyYSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iYWNrICs9IHN0YXRlLmV4dHJhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgbGVuZ3RoICV1XFxuXCIsIHN0YXRlLT5sZW5ndGgpKTtcclxuICAgICAgICAgICAgc3RhdGUud2FzID0gc3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gRElTVDtcclxuICAgICAgICBjYXNlIERJU1Q6XHJcbiAgICAgICAgICAgIGZvciAoOzspIHtcclxuICAgICAgICAgICAgICAgIGhlcmUgPSBzdGF0ZS5jb2Rlc1tzdGF0ZS5kaXN0Y29kZSArIEJJVFMocywgc3RhdGUuZGlzdGJpdHMpXTtcclxuICAgICAgICAgICAgICAgIGlmIChoZXJlLmJpdHMgPD0gcy5iaXRzKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGlmKCFQVUxMQllURShzKSkgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoaGVyZS5vcCAmIDB4ZjApID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxhc3QgPSBoZXJlO1xyXG4gICAgICAgICAgICAgICAgZm9yICg7Oykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlcmUgPSBzdGF0ZS5jb2Rlc1tzdGF0ZS5kaXN0Y29kZSArIGxhc3QudmFsICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEJJVFMocywgbGFzdC5iaXRzICsgbGFzdC5vcCkgPj4+IGxhc3QuYml0cyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgobGFzdC5iaXRzICsgaGVyZS5iaXRzKSA8PSBzLmJpdHMpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFQVUxMQllURShzKSkgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRFJPUEJJVFMocywgbGFzdC5iaXRzKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJhY2sgKz0gbGFzdC5iaXRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIERST1BCSVRTKHMsIGhlcmUuYml0cyk7XHJcbiAgICAgICAgICAgIHN0YXRlLmJhY2sgKz0gaGVyZS5iaXRzO1xyXG4gICAgICAgICAgICBpZiAoaGVyZS5vcCAmIDY0KSB7XHJcbiAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIGNvZGUnO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXRlLm9mZnNldCA9IGhlcmUudmFsO1xyXG4gICAgICAgICAgICBzdGF0ZS5leHRyYSA9IGhlcmUub3AgJiAxNTtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IERJU1RFWFQ7XHJcbiAgICAgICAgY2FzZSBESVNURVhUOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZXh0cmEpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCBzdGF0ZS5leHRyYSkpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLm9mZnNldCArPSBCSVRTKHMsIHN0YXRlLmV4dHJhKTtcclxuICAgICAgICAgICAgICAgIERST1BCSVRTKHMsIHN0YXRlLmV4dHJhKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJhY2sgKz0gc3RhdGUuZXh0cmE7XHJcbiAgICAgICAgICAgIH1cclxuLy9OT1NQUlQgI2lmZGVmIElORkxBVEVfU1RSSUNUXHJcbi8vICAgICAgICAgICAgaWYgKHN0YXRlLT5vZmZzZXQgPiBzdGF0ZS0+ZG1heCkge1xyXG4vLyAgICAgICAgICAgICAgICBzdHJtLT5tc2cgPSAoY2hhciAqKVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIjtcclxuLy8gICAgICAgICAgICAgICAgc3RhdGUtPm1vZGUgPSBCQUQ7XHJcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8jZW5kaWZcclxuLy8gICAgICAgICAgICBUcmFjZXZ2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgICBkaXN0YW5jZSAldVxcblwiLCBzdGF0ZS0+b2Zmc2V0KSk7XHJcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBNQVRDSDtcclxuICAgICAgICBjYXNlIE1BVENIOlxyXG4gICAgICAgICAgICBpZiAocy5sZWZ0ID09IDApIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgY29weSA9IG91dCAtIHMubGVmdDtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLm9mZnNldCA+IGNvcHkpIHsgICAgICAgICAvKiBjb3B5IGZyb20gd2luZG93ICovXHJcbiAgICAgICAgICAgICAgICBjb3B5ID0gc3RhdGUub2Zmc2V0IC0gY29weTtcclxuICAgICAgICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUud2hhdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc2FuZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFjayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuLy9OT1NQUlQgI2lmZGVmIElORkxBVEVfQUxMT1dfSU5WQUxJRF9ESVNUQU5DRV9UT09GQVJfQVJSUlxyXG4vLyAgICAgICAgICAgICAgICAgICAgVHJhY2UoKHN0ZGVyciwgXCJpbmZsYXRlLmMgdG9vIGZhclxcblwiKSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICBjb3B5IC09IHN0YXRlLT53aGF2ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUtPmxlbmd0aCkgY29weSA9IHN0YXRlLT5sZW5ndGg7XHJcbi8vICAgICAgICAgICAgICAgICAgICBpZiAoY29weSA+IGxlZnQpIGNvcHkgPSBsZWZ0O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgbGVmdCAtPSBjb3B5O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgc3RhdGUtPmxlbmd0aCAtPSBjb3B5O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgZG8ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICpwdXQrKyA9IDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICgtLWNvcHkpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLT5sZW5ndGggPT0gMCkgc3RhdGUtPm1vZGUgPSBMRU47XHJcbi8vICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8jZW5kaWZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUud25leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5IC09IHN0YXRlLnduZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZyb20gPSBzdGF0ZS0+d2luZG93ICsgKHN0YXRlLT53c2l6ZSAtIGNvcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb21fd2luZG93X29mZnNldCA9IHN0YXRlLndzaXplIC0gY29weTtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tX291dF9vZmZzZXQgPSAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZyb20gPSBzdGF0ZS0+d2luZG93ICsgKHN0YXRlLT53bmV4dCAtIGNvcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb21fd2luZG93X29mZnNldCA9IHN0YXRlLnduZXh0IC0gY29weTtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tX291dF9vZmZzZXQgPSAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUubGVuZ3RoKSBjb3B5ID0gc3RhdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGNvcHkgZnJvbSBvdXRwdXQgKi9cclxuICAgICAgICAgICAgICAgIC8vIGZyb20gPSBwdXQgLSBzdGF0ZS0+b2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZnJvbV93aW5kb3dfb2Zmc2V0ID0gLTE7XHJcbiAgICAgICAgICAgICAgICBmcm9tX291dF9vZmZzZXQgPSBzdHJtLm5leHRfb3V0IC0gc3RhdGUub2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgY29weSA9IHN0YXRlLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29weSA+IHMubGVmdCkgY29weSA9IHMubGVmdDtcclxuICAgICAgICAgICAgcy5sZWZ0IC09IGNvcHk7XHJcbiAgICAgICAgICAgIHN0YXRlLmxlbmd0aCAtPSBjb3B5O1xyXG4gICAgICAgICAgICBpZiggZnJvbV93aW5kb3dfb2Zmc2V0ID49IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJtLm91dHB1dF9kYXRhICs9IHN0YXRlLndpbmRvdy5zdWJzdHJpbmcoZnJvbV93aW5kb3dfb2Zmc2V0LCBmcm9tX3dpbmRvd19vZmZzZXQgKyBjb3B5KTtcclxuICAgICAgICAgICAgICAgIHN0cm0ubmV4dF9vdXQgKz0gY29weTtcclxuICAgICAgICAgICAgICAgIGNvcHkgPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RybS5uZXh0X291dCArPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm0ub3V0cHV0X2RhdGEgKz0gc3RybS5vdXRwdXRfZGF0YS5jaGFyQXQoZnJvbV9vdXRfb2Zmc2V0KyspO1xyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1jb3B5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUubGVuZ3RoID09IDApIHN0YXRlLm1vZGUgPSBMRU47XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTElUOlxyXG4gICAgICAgICAgICBpZiAocy5sZWZ0ID09IDApIGJyZWFrIGluZl9sZWF2ZTtcclxuXHJcbiAgICAgICAgICAgIHN0cm0ub3V0cHV0X2RhdGEgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShzdGF0ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBzdHJtLm5leHRfb3V0Kys7XHJcbiAgICAgICAgICAgIC8vKnB1dCsrID0gKHVuc2lnbmVkIGNoYXIpKHN0YXRlLT5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgcy5sZWZ0LS07XHJcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBMRU47XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hFQ0s6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS53cmFwKSB7XHJcbiAgICAgICAgICAgICAgICBpZighTkVFREJJVFMocywgMzIpKSBicmVhayBpbmZfbGVhdmU7XHJcbiAgICAgICAgICAgICAgICBvdXQgLT0gcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgc3RybS50b3RhbF9vdXQgKz0gb3V0O1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudG90YWwgKz0gb3V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKG91dClcclxuICAgICAgICAgICAgICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJtLmNoZWNrc3VtX2Z1bmN0aW9uKHN0YXRlLmNoZWNrLCBzdHJtLm91dHB1dF9kYXRhLCBzdHJtLm91dHB1dF9kYXRhLmxlbmd0aCAtIG91dCwgb3V0KTtcclxuICAgICAgICAgICAgICAgIG91dCA9IHMubGVmdDtcclxuICAgICAgICAgICAgICAgIGlmICgoXHJcbi8vICNpZmRlZiBHVU5aSVBcclxuICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZmxhZ3MgPyBzLmhvbGQgOlxyXG4vLyNlbmRpZlxyXG4gICAgICAgICAgICAgICAgICAgICBSRVZFUlNFKHMuaG9sZCkpICE9IHN0YXRlLmNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RybS5tc2cgPSBcImluY29ycmVjdCBkYXRhIGNoZWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIElOSVRCSVRTKHMpO1xyXG4vL2RlYnVnKFwiIyMgaW5mbGF0ZTogICBjaGVjayBtYXRjaGVzIHRyYWlsZXJcXG5cIik7XHJcbi8vICAgICAgICAgICAgICAgIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgY2hlY2sgbWF0Y2hlcyB0cmFpbGVyXFxuXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4vLyNpZmRlZiBHVU5aSVBcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IExFTkdUSDtcclxuICAgICAgICBjYXNlIExFTkdUSDpcclxuICAgICAgICAgICAgaWYgKHN0YXRlLndyYXAgJiYgc3RhdGUuZmxhZ3MpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFORUVEQklUUyhzLCAzMikpIGJyZWFrIGluZl9sZWF2ZTtcclxuICAgICAgICAgICAgICAgIGlmIChzLmhvbGQgIT0gKHN0YXRlLnRvdGFsICYgMHhmZmZmZmZmZikpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbmNvcnJlY3QgbGVuZ3RoIGNoZWNrJztcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgSU5JVEJJVFMocyk7XHJcbiAgICAgICAgICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgbGVuZ3RoIG1hdGNoZXMgdHJhaWxlclxcblwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuLy8jZW5kaWZcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IERPTkU7XHJcbiAgICAgICAgY2FzZSBET05FOlxyXG4gICAgICAgICAgICByZXQgPSBaTElCLlpfU1RSRUFNX0VORDtcclxuICAgICAgICAgICAgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgIGNhc2UgQkFEOlxyXG4gICAgICAgICAgICByZXQgPSBaTElCLlpfREFUQV9FUlJPUjtcclxuICAgICAgICAgICAgYnJlYWsgaW5mX2xlYXZlO1xyXG4gICAgICAgIGNhc2UgTUVNOlxyXG4gICAgICAgICAgICByZXR1cm4gWkxJQi5aX01FTV9FUlJPUjtcclxuICAgICAgICBjYXNlIFNZTkM6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFpMSUIuWl9TVFJFQU1fRVJST1I7XHJcbiAgICAgICAgfSB9XHJcblxyXG4gICAgLypcclxuICAgICAgUmV0dXJuIGZyb20gaW5mbGF0ZSgpLCB1cGRhdGluZyB0aGUgdG90YWwgY291bnRzIGFuZCB0aGUgY2hlY2sgdmFsdWUuXHJcbiAgICAgIElmIHRoZXJlIHdhcyBubyBwcm9ncmVzcyBkdXJpbmcgdGhlIGluZmxhdGUoKSBjYWxsLCByZXR1cm4gYSBidWZmZXJcclxuICAgICAgZXJyb3IuICBDYWxsIHVwZGF0ZXdpbmRvdygpIHRvIGNyZWF0ZSBhbmQvb3IgdXBkYXRlIHRoZSB3aW5kb3cgc3RhdGUuXHJcbiAgICAgIE5vdGU6IGEgbWVtb3J5IGVycm9yIGZyb20gaW5mbGF0ZSgpIGlzIG5vbi1yZWNvdmVyYWJsZS5cclxuICAgICovXHJcbmluZl9sZWF2ZTpcclxuICAgIFJFU1RPUkUocyk7XHJcbiAgICBpZiAoc3RhdGUud3NpemUgfHwgKG91dCAhPSBzdHJtLmF2YWlsX291dCAmJiBzdGF0ZS5tb2RlIDwgQkFEICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZS5tb2RlIDwgQ0hFQ0sgfHwgZmx1c2ggIT0gWkxJQi5aX0ZJTklTSCkpKVxyXG4gICAgICAgIGlmICh1cGRhdGV3aW5kb3coc3RybSkpIHtcclxuICAgICAgICAgICAgc3RhdGUubW9kZSA9IE1FTTtcclxuICAgICAgICAgICAgcmV0dXJuIFpMSUIuWl9NRU1fRVJST1I7XHJcbiAgICAgICAgfVxyXG4gICAgX2luIC09IHN0cm0uYXZhaWxfaW47XHJcbiAgICBvdXQgLT0gc3RybS5hdmFpbF9vdXQ7XHJcbiAgICBzdHJtLnRvdGFsX2luICs9IF9pbjtcclxuICAgIHN0cm0udG90YWxfb3V0ICs9IG91dDtcclxuICAgIHN0YXRlLnRvdGFsICs9IG91dDtcclxuICAgIGlmIChzdGF0ZS53cmFwICYmIG91dClcclxuXHQgICAgc3RybS5hZGxlciA9IHN0YXRlLmNoZWNrID0gc3RybS5jaGVja3N1bV9mdW5jdGlvbihzdGF0ZS5jaGVjaywgc3RybS5vdXRwdXRfZGF0YSwgMCwgc3RybS5vdXRwdXRfZGF0YS5sZW5ndGgpO1xyXG4gICAgc3RybS5kYXRhX3R5cGUgPSBzdGF0ZS5iaXRzICsgKHN0YXRlLmxhc3QgPyA2NCA6IDApICtcclxuXHQgICAgKHN0YXRlLm1vZGUgPT0gVFlQRSA/IDEyOCA6IDApICtcclxuXHQgICAgKHN0YXRlLm1vZGUgPT0gTEVOXyB8fCBzdGF0ZS5tb2RlID09IENPUFlfID8gMjU2IDogMCk7XHJcbiAgICBpZiAoKChfaW4gPT0gMCAmJiBvdXQgPT0gMCkgfHwgZmx1c2ggPT0gWkxJQi5aX0ZJTklTSCkgJiYgcmV0ID09IFpMSUIuWl9PSylcclxuICAgICAgICByZXQgPSBaTElCLlpfQlVGX0VSUk9SO1xyXG4gICAgcmV0dXJuIHJldDtcclxufTtcclxuXHJcblpMSUIuaW5mbGF0ZUVuZCA9IGZ1bmN0aW9uKHN0cm0pXHJcbntcclxuICAgIHZhciBzdGF0ZTtcclxuICAgIGlmICghc3RybSB8fCAhc3RybS5zdGF0ZSApXHJcbiAgICAgICAgcmV0dXJuIFpMSUIuWl9TVFJFQU1fRVJST1I7XHJcbiAgICBzdGF0ZSA9IHN0cm0uc3RhdGU7XHJcbiAgICBzdGF0ZS53aW5kb3cgPSBudWxsO1xyXG4gICAgc3RybS5zdGF0ZSA9IG51bGw7XHJcbiAgICAvLyAgICBUcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiBlbmRcXG5cIikpO1xyXG4gICAgcmV0dXJuIFpMSUIuWl9PSztcclxufTtcclxuXHJcblpMSUIuel9zdHJlYW0ucHJvdG90eXBlLmluZmxhdGUgPSBmdW5jdGlvbihpbnB1dF9zdHJpbmcsIG9wdHMpXHJcbntcclxuICAgIHZhciBmbHVzaDtcclxuICAgIHZhciBhdmFpbF9vdXQ7XHJcblx0dmFyIERFRkFVTFRfQlVGRkVSX1NJWkUgPSAxNjM4NDtcclxuXHJcbiAgICB0aGlzLmlucHV0X2RhdGEgPSBpbnB1dF9zdHJpbmc7XHJcbiAgICB0aGlzLm5leHRfaW4gPSBnZXRhcmcob3B0cywgJ25leHRfaW4nLCAwKTtcclxuICAgIHRoaXMuYXZhaWxfaW4gPSBnZXRhcmcob3B0cywgJ2F2YWlsX2luJywgaW5wdXRfc3RyaW5nLmxlbmd0aCAtIHRoaXMubmV4dF9pbik7XHJcblxyXG4gICAgZmx1c2ggPSBnZXRhcmcob3B0cywgJ2ZsdXNoJywgWkxJQi5aX1NZTkNfRkxVU0gpO1xyXG4gICAgYXZhaWxfb3V0ID0gZ2V0YXJnKG9wdHMsICdhdmFpbF9vdXQnLCAtMSk7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9ICcnO1xyXG4gICAgZG8ge1xyXG4gICAgICAgIHRoaXMuYXZhaWxfb3V0ID0gKGF2YWlsX291dCA+PSAwID8gYXZhaWxfb3V0IDogREVGQVVMVF9CVUZGRVJfU0laRSk7XHJcbiAgICAgICAgdGhpcy5vdXRwdXRfZGF0YSA9ICcnO1xyXG4gICAgICAgIHRoaXMubmV4dF9vdXQgPSAwO1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSBaTElCLmluZmxhdGUodGhpcywgZmx1c2gpO1xyXG4gICAgICAgIGlmKHRoaXMuZXJyb3IgIT0gMCkgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiemxpYiBlcnJvclwiLCB0aGlzLmVycm9yKVxyXG4gICAgICAgIGlmKGF2YWlsX291dCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dHB1dF9kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgKz0gdGhpcy5vdXRwdXRfZGF0YTtcclxuXHRcdGlmKHRoaXMuYXZhaWxfb3V0ID4gMCkge1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuICAgIH0gd2hpbGUodGhpcy5lcnJvciA9PSBaTElCLlpfT0spO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5aTElCLnpfc3RyZWFtLnByb3RvdHlwZS5pbmZsYXRlUmVzZXQgPSBmdW5jdGlvbih3aW5kb3dCaXRzKVxyXG57XHJcbiAgICByZXR1cm4gWkxJQi5pbmZsYXRlUmVzZXQodGhpcywgd2luZG93Qml0cyk7XHJcbn07XHJcblxyXG59KCkpO1xyXG4vKiB6bGliLWFkbGVyMzIuanMgLS0gSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHpsaWIgYWRsZXIzMi5cclxuICBWZXJzaW9uOiAwLjIuMFxyXG4gIExhc3RNb2RpZmllZDogQXByIDEyIDIwMTJcclxuICBDb3B5cmlnaHQgKEMpIDIwMTIgTWFzYW5hbyBJenVtbyA8aXpAb25pY29zLmNvLmpwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICBBUEkgZG9jdW1lbnRhdGlvblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuVXNhZ2U6IGFkbGVyID0gWkxJQi5hZGxlcjMyKGFkbGVyLCBidWYsIG9mZnNldCwgbGVuKTtcclxuXHJcbiAgICAgVXBkYXRlIGEgcnVubmluZyBBZGxlci0zMiBjaGVja3N1bSB3aXRoIHRoZSBieXRlcyBidWZbb2Zmc2V0Li5vZmZzZXQrbGVuLTFdIGFuZFxyXG4gICByZXR1cm4gdGhlIHVwZGF0ZWQgY2hlY2tzdW0uICBJZiBidWYgaXMgbnVsbCwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZVxyXG4gICByZXF1aXJlZCBpbml0aWFsIHZhbHVlIGZvciB0aGUgY2hlY2tzdW0uXHJcblxyXG4gICAgIEFuIEFkbGVyLTMyIGNoZWNrc3VtIGlzIGFsbW9zdCBhcyByZWxpYWJsZSBhcyBhIENSQzMyIGJ1dCBjYW4gYmUgY29tcHV0ZWRcclxuICAgbXVjaCBmYXN0ZXIuXHJcblxyXG4gICBVc2FnZSBleGFtcGxlOlxyXG5cclxuICAgICB2YXIgYWRsZXIgPSBaTElCLmFkbGVyMzIoMCwgbnVsbCwgMCwgMCk7XHJcblxyXG4gICAgIHdoaWxlIChyZWFkX2J1ZmZlcihidWZmZXIsIGxlbmd0aCkgIT0gRU9GKSB7XHJcbiAgICAgICBhZGxlciA9IFpMSUIuYWRsZXIzMihhZGxlciwgYnVmZmVyLCAwLCBsZW5ndGgpO1xyXG4gICAgIH1cclxuICAgICBpZiAoYWRsZXIgIT0gb3JpZ2luYWxfYWRsZXIpIGVycm9yKCk7XHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuVXNhZ2U6IGFkbGVyID0gWkxJQi5hZGxlcjMyX2NvbWJpbmUoYWRsZXIxLCBhZGxlcjIsIGxlbjIpO1xyXG5cclxuICAgICBDb21iaW5lIHR3byBBZGxlci0zMiBjaGVja3N1bXMgaW50byBvbmUuICBGb3IgdHdvIHNlcXVlbmNlcyBvZiBieXRlcywgc2VxMVxyXG4gICBhbmQgc2VxMiB3aXRoIGxlbmd0aHMgbGVuMSBhbmQgbGVuMiwgQWRsZXItMzIgY2hlY2tzdW1zIHdlcmUgY2FsY3VsYXRlZCBmb3JcclxuICAgZWFjaCwgYWRsZXIxIGFuZCBhZGxlcjIuICBhZGxlcjMyX2NvbWJpbmUoKSByZXR1cm5zIHRoZSBBZGxlci0zMiBjaGVja3N1bSBvZlxyXG4gICBzZXExIGFuZCBzZXEyIGNvbmNhdGVuYXRlZCwgcmVxdWlyaW5nIG9ubHkgYWRsZXIxLCBhZGxlcjIsIGFuZCBsZW4yLiAgTm90ZVxyXG4gICB0aGF0IHRoZSB6X29mZl90IHR5cGUgKGxpa2Ugb2ZmX3QpIGlzIGEgc2lnbmVkIGludGVnZXIuICBJZiBsZW4yIGlzXHJcbiAgIG5lZ2F0aXZlLCB0aGUgcmVzdWx0IGhhcyBubyBtZWFuaW5nIG9yIHV0aWxpdHkuXHJcbiovXHJcblxyXG5pZiggdHlwZW9mIFpMSUIgPT09ICd1bmRlZmluZWQnICkge1xyXG4gICAgYWxlcnQoJ1pMSUIgaXMgbm90IGRlZmluZWQuICBTUkMgemxpYi5qcyBiZWZvcmUgemxpYi1hZGxlcjMyLmpzJylcclxufVxyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cclxuLyogYWRsZXIzMi5jIC0tIGNvbXB1dGUgdGhlIEFkbGVyLTMyIGNoZWNrc3VtIG9mIGEgZGF0YSBzdHJlYW1cclxuICogQ29weXJpZ2h0IChDKSAxOTk1LTIwMTEgTWFyayBBZGxlclxyXG4gKiBGb3IgY29uZGl0aW9ucyBvZiBkaXN0cmlidXRpb24gYW5kIHVzZSwgc2VlIGNvcHlyaWdodCBub3RpY2UgaW4gemxpYi5oXHJcbiAqL1xyXG5cclxudmFyIEJBU0UgPSA2NTUyMTsgICAgICAvKiBsYXJnZXN0IHByaW1lIHNtYWxsZXIgdGhhbiA2NTUzNiAqL1xyXG52YXIgTk1BWCA9ICA1NTUyO1xyXG4vKiBOTUFYIGlzIHRoZSBsYXJnZXN0IG4gc3VjaCB0aGF0IDI1NW4obisxKS8yICsgKG4rMSkoQkFTRS0xKSA8PSAyXjMyLTEgKi9cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuZnVuY3Rpb24gYWRsZXIzMl9zdHJpbmcoYWRsZXIsIGJ1Ziwgb2Zmc2V0LCBsZW4pXHJcbntcclxuICAgIHZhciBzdW0yO1xyXG4gICAgdmFyIG47XHJcblxyXG4gICAgLyogc3BsaXQgQWRsZXItMzIgaW50byBjb21wb25lbnQgc3VtcyAqL1xyXG4gICAgc3VtMiA9IChhZGxlciA+Pj4gMTYpICYgMHhmZmZmO1xyXG4gICAgYWRsZXIgJj0gMHhmZmZmO1xyXG5cclxuICAgIC8qIGluIGNhc2UgdXNlciBsaWtlcyBkb2luZyBhIGJ5dGUgYXQgYSB0aW1lLCBrZWVwIGl0IGZhc3QgKi9cclxuICAgIGlmIChsZW4gPT0gMSkge1xyXG5cdFx0YWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KSAmIDB4ZmY7XHJcbiAgICAgICAgaWYgKGFkbGVyID49IEJBU0UpXHJcbiAgICAgICAgICAgIGFkbGVyIC09IEJBU0U7XHJcbiAgICAgICAgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICBpZiAoc3VtMiA+PSBCQVNFKVxyXG4gICAgICAgICAgICBzdW0yIC09IEJBU0U7XHJcbiAgICAgICAgcmV0dXJuIGFkbGVyIHwgKHN1bTIgPDwgMTYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGluaXRpYWwgQWRsZXItMzIgdmFsdWUgKGRlZmVycmVkIGNoZWNrIGZvciBsZW4gPT0gMSBzcGVlZCkgKi9cclxuICAgIGlmIChidWYgPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIDE7XHJcblxyXG4gICAgLyogaW4gY2FzZSBzaG9ydCBsZW5ndGhzIGFyZSBwcm92aWRlZCwga2VlcCBpdCBzb21ld2hhdCBmYXN0ICovXHJcbiAgICBpZiAobGVuIDwgMTYpIHtcclxuICAgICAgICB3aGlsZSAobGVuLS0pIHtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjtcclxuICAgICAgICAgICAgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFkbGVyID49IEJBU0UpXHJcbiAgICAgICAgICAgIGFkbGVyIC09IEJBU0U7XHJcblx0XHRzdW0yICU9IEJBU0U7ICAgICAgICAgICAvKiBvbmx5IGFkZGVkIHNvIG1hbnkgQkFTRSdzICovXHJcbiAgICAgICAgcmV0dXJuIGFkbGVyIHwgKHN1bTIgPDwgMTYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGRvIGxlbmd0aCBOTUFYIGJsb2NrcyAtLSByZXF1aXJlcyBqdXN0IG9uZSBtb2R1bG8gb3BlcmF0aW9uICovXHJcbiAgICB3aGlsZSAobGVuID49IE5NQVgpIHtcclxuICAgICAgICBsZW4gLT0gTk1BWDtcclxuICAgICAgICBuID0gTk1BWCA+PiA0OyAgICAgICAgICAvKiBOTUFYIGlzIGRpdmlzaWJsZSBieSAxNiAqL1xyXG4gICAgICAgIGRvIHtcclxuXHRcdFx0LyogMTYgc3VtcyB1bnJvbGxlZCAqL1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWYuY2hhckNvZGVBdChvZmZzZXQrKykgJiAweGZmOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgIH0gd2hpbGUgKC0tbik7XHJcbiAgICAgICAgYWRsZXIgJT0gQkFTRTtcclxuICAgICAgICBzdW0yICU9IEJBU0U7XHJcbiAgICB9XHJcblxyXG4gICAgLyogZG8gcmVtYWluaW5nIGJ5dGVzIChsZXNzIHRoYW4gTk1BWCwgc3RpbGwganVzdCBvbmUgbW9kdWxvKSAqL1xyXG4gICAgaWYgKGxlbikgeyAgICAgICAgICAgICAgICAgIC8qIGF2b2lkIG1vZHVsb3MgaWYgbm9uZSByZW1haW5pbmcgKi9cclxuICAgICAgICB3aGlsZSAobGVuID49IDE2KSB7XHJcbiAgICAgICAgICAgIGxlbiAtPSAxNjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmLmNoYXJDb2RlQXQob2Zmc2V0KyspICYgMHhmZjsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGxlbi0tKSB7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCsrKSAmIDB4ZmY7IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkbGVyICU9IEJBU0U7XHJcbiAgICAgICAgc3VtMiAlPSBCQVNFO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHJldHVybiByZWNvbWJpbmVkIHN1bXMgKi9cclxuICAgIHJldHVybiBhZGxlciB8IChzdW0yIDw8IDE2KTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5mdW5jdGlvbiBhZGxlcjMyX2FycmF5KGFkbGVyLCBidWYsIG9mZnNldCwgbGVuKVxyXG57XHJcbiAgICB2YXIgc3VtMjtcclxuICAgIHZhciBuO1xyXG5cclxuICAgIC8qIHNwbGl0IEFkbGVyLTMyIGludG8gY29tcG9uZW50IHN1bXMgKi9cclxuICAgIHN1bTIgPSAoYWRsZXIgPj4+IDE2KSAmIDB4ZmZmZjtcclxuICAgIGFkbGVyICY9IDB4ZmZmZjtcclxuXHJcbiAgICAvKiBpbiBjYXNlIHVzZXIgbGlrZXMgZG9pbmcgYSBieXRlIGF0IGEgdGltZSwga2VlcCBpdCBmYXN0ICovXHJcbiAgICBpZiAobGVuID09IDEpIHtcclxuXHRcdGFkbGVyICs9IGJ1ZltvZmZzZXRdO1xyXG4gICAgICAgIGlmIChhZGxlciA+PSBCQVNFKVxyXG4gICAgICAgICAgICBhZGxlciAtPSBCQVNFO1xyXG4gICAgICAgIHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgaWYgKHN1bTIgPj0gQkFTRSlcclxuICAgICAgICAgICAgc3VtMiAtPSBCQVNFO1xyXG4gICAgICAgIHJldHVybiBhZGxlciB8IChzdW0yIDw8IDE2KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBpbml0aWFsIEFkbGVyLTMyIHZhbHVlIChkZWZlcnJlZCBjaGVjayBmb3IgbGVuID09IDEgc3BlZWQpICovXHJcbiAgICBpZiAoYnVmID09PSBudWxsKVxyXG4gICAgICAgIHJldHVybiAxO1xyXG5cclxuICAgIC8qIGluIGNhc2Ugc2hvcnQgbGVuZ3RocyBhcmUgcHJvdmlkZWQsIGtlZXAgaXQgc29tZXdoYXQgZmFzdCAqL1xyXG4gICAgaWYgKGxlbiA8IDE2KSB7XHJcbiAgICAgICAgd2hpbGUgKGxlbi0tKSB7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107XHJcbiAgICAgICAgICAgIHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhZGxlciA+PSBCQVNFKVxyXG4gICAgICAgICAgICBhZGxlciAtPSBCQVNFO1xyXG5cdFx0c3VtMiAlPSBCQVNFOyAgICAgICAgICAgLyogb25seSBhZGRlZCBzbyBtYW55IEJBU0UncyAqL1xyXG4gICAgICAgIHJldHVybiBhZGxlciB8IChzdW0yIDw8IDE2KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBkbyBsZW5ndGggTk1BWCBibG9ja3MgLS0gcmVxdWlyZXMganVzdCBvbmUgbW9kdWxvIG9wZXJhdGlvbiAqL1xyXG4gICAgd2hpbGUgKGxlbiA+PSBOTUFYKSB7XHJcbiAgICAgICAgbGVuIC09IE5NQVg7XHJcbiAgICAgICAgbiA9IE5NQVggPj4gNDsgICAgICAgICAgLyogTk1BWCBpcyBkaXZpc2libGUgYnkgMTYgKi9cclxuICAgICAgICBkbyB7XHJcblx0XHRcdC8qIDE2IHN1bXMgdW5yb2xsZWQgKi9cclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICAgICAgYWRsZXIgKz0gYnVmW29mZnNldCsrXTsgc3VtMiArPSBhZGxlcjtcclxuICAgICAgICB9IHdoaWxlICgtLW4pO1xyXG4gICAgICAgIGFkbGVyICU9IEJBU0U7XHJcbiAgICAgICAgc3VtMiAlPSBCQVNFO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGRvIHJlbWFpbmluZyBieXRlcyAobGVzcyB0aGFuIE5NQVgsIHN0aWxsIGp1c3Qgb25lIG1vZHVsbykgKi9cclxuICAgIGlmIChsZW4pIHsgICAgICAgICAgICAgICAgICAvKiBhdm9pZCBtb2R1bG9zIGlmIG5vbmUgcmVtYWluaW5nICovXHJcbiAgICAgICAgd2hpbGUgKGxlbiA+PSAxNikge1xyXG4gICAgICAgICAgICBsZW4gLT0gMTY7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgICAgIGFkbGVyICs9IGJ1ZltvZmZzZXQrK107IHN1bTIgKz0gYWRsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChsZW4tLSkge1xyXG4gICAgICAgICAgICBhZGxlciArPSBidWZbb2Zmc2V0KytdOyBzdW0yICs9IGFkbGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGxlciAlPSBCQVNFO1xyXG4gICAgICAgIHN1bTIgJT0gQkFTRTtcclxuICAgIH1cclxuXHJcbiAgICAvKiByZXR1cm4gcmVjb21iaW5lZCBzdW1zICovXHJcbiAgICByZXR1cm4gYWRsZXIgfCAoc3VtMiA8PCAxNik7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuWkxJQi5hZGxlcjMyID0gZnVuY3Rpb24oYWRsZXIsIGJ1Ziwgb2Zmc2V0LCBsZW4pXHJcbntcclxuXHRpZih0eXBlb2YgYnVmID09PSAnc3RyaW5nJykge1xyXG5cdFx0cmV0dXJuIGFkbGVyMzJfc3RyaW5nKGFkbGVyLCBidWYsIG9mZnNldCwgbGVuKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIGFkbGVyMzJfYXJyYXkoYWRsZXIsIGJ1Ziwgb2Zmc2V0LCBsZW4pO1xyXG5cdH1cclxufTtcclxuXHJcblpMSUIuYWRsZXIzMl9jb21iaW5lID0gZnVuY3Rpb24oYWRsZXIxLCBhZGxlcjIsIGxlbjIpXHJcbntcclxuICAgIHZhciBzdW0xO1xyXG4gICAgdmFyIHN1bTI7XHJcbiAgICB2YXIgcmVtO1xyXG5cclxuICAgIC8qIGZvciBuZWdhdGl2ZSBsZW4sIHJldHVybiBpbnZhbGlkIGFkbGVyMzIgYXMgYSBjbHVlIGZvciBkZWJ1Z2dpbmcgKi9cclxuICAgIGlmIChsZW4yIDwgMClcclxuICAgICAgICByZXR1cm4gMHhmZmZmZmZmZjtcclxuXHJcbiAgICAvKiB0aGUgZGVyaXZhdGlvbiBvZiB0aGlzIGZvcm11bGEgaXMgbGVmdCBhcyBhbiBleGVyY2lzZSBmb3IgdGhlIHJlYWRlciAqL1xyXG4gICAgbGVuMiAlPSBCQVNFOyAgICAgICAgICAgICAgICAvKiBhc3N1bWVzIGxlbjIgPj0gMCAqL1xyXG4gICAgcmVtID0gbGVuMjtcclxuICAgIHN1bTEgPSBhZGxlcjEgJiAweGZmZmY7XHJcbiAgICBzdW0yID0gcmVtICogc3VtMTtcclxuICAgIHN1bTIgJT0gQkFTRTtcclxuICAgIHN1bTEgKz0gKGFkbGVyMiAmIDB4ZmZmZikgKyBCQVNFIC0gMTtcclxuICAgIHN1bTIgKz0gKChhZGxlcjEgPj4gMTYpICYgMHhmZmZmKSArICgoYWRsZXIyID4+IDE2KSAmIDB4ZmZmZikgKyBCQVNFIC0gcmVtO1xyXG4gICAgaWYgKHN1bTEgPj0gQkFTRSkgc3VtMSAtPSBCQVNFO1xyXG4gICAgaWYgKHN1bTEgPj0gQkFTRSkgc3VtMSAtPSBCQVNFO1xyXG4gICAgaWYgKHN1bTIgPj0gKEJBU0UgPDwgMSkpIHN1bTIgLT0gKEJBU0UgPDwgMSk7XHJcbiAgICBpZiAoc3VtMiA+PSBCQVNFKSBzdW0yIC09IEJBU0U7XHJcbiAgICByZXR1cm4gc3VtMSB8IChzdW0yIDw8IDE2KTtcclxufVxyXG5cclxufSgpKTtcclxuLyogemxpYi1hZGxlcjMyLmpzIC0tIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gZm9yIHRoZSB6bGliIGNyYzMyLlxyXG4gIFZlcnNpb246IDAuMi4wXHJcbiAgTGFzdE1vZGlmaWVkOiBBcHIgMTIgMjAxMlxyXG4gIENvcHlyaWdodCAoQykgMjAxMiBNYXNhbmFvIEl6dW1vIDxpekBvbmljb3MuY28uanA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIEFQSSBkb2N1bWVudGF0aW9uXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5Vc2FnZTogY3JjID0gWkxJQi5jcmMzMihjcmMsIGJ1Ziwgb2Zmc2V0LCBsZW4pO1xyXG5cclxuICAgICBVcGRhdGUgYSBydW5uaW5nIENSQy0zMiB3aXRoIHRoZSBieXRlcyBidWZbb2Zmc2V0Li5vZmZzZXQrbGVuLTFdIGFuZCByZXR1cm4gdGhlXHJcbiAgIHVwZGF0ZWQgQ1JDLTMyLiAgSWYgYnVmIGlzIG51bGwsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWlyZWRcclxuICAgaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIGZvciB0aGUgY3JjLiAgUHJlLSBhbmQgcG9zdC1jb25kaXRpb25pbmcgKG9uZSdzXHJcbiAgIGNvbXBsZW1lbnQpIGlzIHBlcmZvcm1lZCB3aXRoaW4gdGhpcyBmdW5jdGlvbiBzbyBpdCBzaG91bGRuJ3QgYmUgZG9uZSBieSB0aGVcclxuICAgYXBwbGljYXRpb24uXHJcblxyXG4gICBVc2FnZSBleGFtcGxlOlxyXG5cclxuICAgICB2YXIgY3JjID0gWkxJQi5jcmMzMigwLCBudWxsLCAwLCAwKTtcclxuXHJcbiAgICAgd2hpbGUgKHJlYWRfYnVmZmVyKGJ1ZmZlciwgbGVuZ3RoKSAhPSBFT0YpIHtcclxuICAgICAgIGNyYyA9IFpMSUIuY3JjMzIoY3JjLCBidWZmZXIsIDAsIGxlbmd0aCk7XHJcbiAgICAgfVxyXG4gICAgIGlmIChjcmMgIT0gb3JpZ2luYWxfY3JjKSBlcnJvcigpO1xyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblVzYWdlOiBjcmMgPSBjcmMzMl9jb21iaW5lKGNyYzEsIGNyYzIsIGxlbjIpO1xyXG5cclxuICAgICBDb21iaW5lIHR3byBDUkMtMzIgY2hlY2sgdmFsdWVzIGludG8gb25lLiAgRm9yIHR3byBzZXF1ZW5jZXMgb2YgYnl0ZXMsXHJcbiAgIHNlcTEgYW5kIHNlcTIgd2l0aCBsZW5ndGhzIGxlbjEgYW5kIGxlbjIsIENSQy0zMiBjaGVjayB2YWx1ZXMgd2VyZVxyXG4gICBjYWxjdWxhdGVkIGZvciBlYWNoLCBjcmMxIGFuZCBjcmMyLiAgY3JjMzJfY29tYmluZSgpIHJldHVybnMgdGhlIENSQy0zMlxyXG4gICBjaGVjayB2YWx1ZSBvZiBzZXExIGFuZCBzZXEyIGNvbmNhdGVuYXRlZCwgcmVxdWlyaW5nIG9ubHkgY3JjMSwgY3JjMiwgYW5kXHJcbiAgIGxlbjIuXHJcbiovXHJcblxyXG5pZiggdHlwZW9mIFpMSUIgPT09ICd1bmRlZmluZWQnICkge1xyXG4gICAgYWxlcnQoJ1pMSUIgaXMgbm90IGRlZmluZWQuICBTUkMgemxpYi5qcyBiZWZvcmUgemxpYi1jcmMzMi5qcycpXHJcbn1cclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHJcbi8qIGNyYzMyLmMgLS0gY29tcHV0ZSB0aGUgQ1JDLTMyIG9mIGEgZGF0YSBzdHJlYW1cclxuICogQ29weXJpZ2h0IChDKSAxOTk1LTIwMDYsIDIwMTAsIDIwMTEgTWFyayBBZGxlclxyXG4gKiBGb3IgY29uZGl0aW9ucyBvZiBkaXN0cmlidXRpb24gYW5kIHVzZSwgc2VlIGNvcHlyaWdodCBub3RpY2UgaW4gemxpYi5oXHJcbiAqXHJcbiAqIFRoYW5rcyB0byBSb2RuZXkgQnJvd24gPHJicm93bjY0QGNzYy5jb20uYXU+IGZvciBoaXMgY29udHJpYnV0aW9uIG9mIGZhc3RlclxyXG4gKiBDUkMgbWV0aG9kczogZXhjbHVzaXZlLW9yaW5nIDMyIGJpdHMgb2YgZGF0YSBhdCBhIHRpbWUsIGFuZCBwcmUtY29tcHV0aW5nXHJcbiAqIHRhYmxlcyBmb3IgdXBkYXRpbmcgdGhlIHNoaWZ0IHJlZ2lzdGVyIGluIG9uZSBzdGVwIHdpdGggdGhyZWUgZXhjbHVzaXZlLW9yc1xyXG4gKiBpbnN0ZWFkIG9mIGZvdXIgc3RlcHMgd2l0aCBmb3VyIGV4Y2x1c2l2ZS1vcnMuICBUaGlzIHJlc3VsdHMgaW4gYWJvdXQgYVxyXG4gKiBmYWN0b3Igb2YgdHdvIGluY3JlYXNlIGluIHNwZWVkIG9uIGEgUG93ZXIgUEMgRzQgKFBQQzc0NTUpIHVzaW5nIGdjYyAtTzMuXHJcbiAqL1xyXG5cclxudmFyIGNyY190YWJsZSA9IFtcclxuICAgIDB4MDAwMDAwMDAsIDB4NzcwNzMwOTYsIDB4ZWUwZTYxMmMsIDB4OTkwOTUxYmEsIDB4MDc2ZGM0MTksXHJcbiAgICAweDcwNmFmNDhmLCAweGU5NjNhNTM1LCAweDllNjQ5NWEzLCAweDBlZGI4ODMyLCAweDc5ZGNiOGE0LFxyXG4gICAgMHhlMGQ1ZTkxZSwgMHg5N2QyZDk4OCwgMHgwOWI2NGMyYiwgMHg3ZWIxN2NiZCwgMHhlN2I4MmQwNyxcclxuICAgIDB4OTBiZjFkOTEsIDB4MWRiNzEwNjQsIDB4NmFiMDIwZjIsIDB4ZjNiOTcxNDgsIDB4ODRiZTQxZGUsXHJcbiAgICAweDFhZGFkNDdkLCAweDZkZGRlNGViLCAweGY0ZDRiNTUxLCAweDgzZDM4NWM3LCAweDEzNmM5ODU2LFxyXG4gICAgMHg2NDZiYThjMCwgMHhmZDYyZjk3YSwgMHg4YTY1YzllYywgMHgxNDAxNWM0ZiwgMHg2MzA2NmNkOSxcclxuICAgIDB4ZmEwZjNkNjMsIDB4OGQwODBkZjUsIDB4M2I2ZTIwYzgsIDB4NGM2OTEwNWUsIDB4ZDU2MDQxZTQsXHJcbiAgICAweGEyNjc3MTcyLCAweDNjMDNlNGQxLCAweDRiMDRkNDQ3LCAweGQyMGQ4NWZkLCAweGE1MGFiNTZiLFxyXG4gICAgMHgzNWI1YThmYSwgMHg0MmIyOTg2YywgMHhkYmJiYzlkNiwgMHhhY2JjZjk0MCwgMHgzMmQ4NmNlMyxcclxuICAgIDB4NDVkZjVjNzUsIDB4ZGNkNjBkY2YsIDB4YWJkMTNkNTksIDB4MjZkOTMwYWMsIDB4NTFkZTAwM2EsXHJcbiAgICAweGM4ZDc1MTgwLCAweGJmZDA2MTE2LCAweDIxYjRmNGI1LCAweDU2YjNjNDIzLCAweGNmYmE5NTk5LFxyXG4gICAgMHhiOGJkYTUwZiwgMHgyODAyYjg5ZSwgMHg1ZjA1ODgwOCwgMHhjNjBjZDliMiwgMHhiMTBiZTkyNCxcclxuICAgIDB4MmY2ZjdjODcsIDB4NTg2ODRjMTEsIDB4YzE2MTFkYWIsIDB4YjY2NjJkM2QsIDB4NzZkYzQxOTAsXHJcbiAgICAweDAxZGI3MTA2LCAweDk4ZDIyMGJjLCAweGVmZDUxMDJhLCAweDcxYjE4NTg5LCAweDA2YjZiNTFmLFxyXG4gICAgMHg5ZmJmZTRhNSwgMHhlOGI4ZDQzMywgMHg3ODA3YzlhMiwgMHgwZjAwZjkzNCwgMHg5NjA5YTg4ZSxcclxuICAgIDB4ZTEwZTk4MTgsIDB4N2Y2YTBkYmIsIDB4MDg2ZDNkMmQsIDB4OTE2NDZjOTcsIDB4ZTY2MzVjMDEsXHJcbiAgICAweDZiNmI1MWY0LCAweDFjNmM2MTYyLCAweDg1NjUzMGQ4LCAweGYyNjIwMDRlLCAweDZjMDY5NWVkLFxyXG4gICAgMHgxYjAxYTU3YiwgMHg4MjA4ZjRjMSwgMHhmNTBmYzQ1NywgMHg2NWIwZDljNiwgMHgxMmI3ZTk1MCxcclxuICAgIDB4OGJiZWI4ZWEsIDB4ZmNiOTg4N2MsIDB4NjJkZDFkZGYsIDB4MTVkYTJkNDksIDB4OGNkMzdjZjMsXHJcbiAgICAweGZiZDQ0YzY1LCAweDRkYjI2MTU4LCAweDNhYjU1MWNlLCAweGEzYmMwMDc0LCAweGQ0YmIzMGUyLFxyXG4gICAgMHg0YWRmYTU0MSwgMHgzZGQ4OTVkNywgMHhhNGQxYzQ2ZCwgMHhkM2Q2ZjRmYiwgMHg0MzY5ZTk2YSxcclxuICAgIDB4MzQ2ZWQ5ZmMsIDB4YWQ2Nzg4NDYsIDB4ZGE2MGI4ZDAsIDB4NDQwNDJkNzMsIDB4MzMwMzFkZTUsXHJcbiAgICAweGFhMGE0YzVmLCAweGRkMGQ3Y2M5LCAweDUwMDU3MTNjLCAweDI3MDI0MWFhLCAweGJlMGIxMDEwLFxyXG4gICAgMHhjOTBjMjA4NiwgMHg1NzY4YjUyNSwgMHgyMDZmODViMywgMHhiOTY2ZDQwOSwgMHhjZTYxZTQ5ZixcclxuICAgIDB4NWVkZWY5MGUsIDB4MjlkOWM5OTgsIDB4YjBkMDk4MjIsIDB4YzdkN2E4YjQsIDB4NTliMzNkMTcsXHJcbiAgICAweDJlYjQwZDgxLCAweGI3YmQ1YzNiLCAweGMwYmE2Y2FkLCAweGVkYjg4MzIwLCAweDlhYmZiM2I2LFxyXG4gICAgMHgwM2I2ZTIwYywgMHg3NGIxZDI5YSwgMHhlYWQ1NDczOSwgMHg5ZGQyNzdhZiwgMHgwNGRiMjYxNSxcclxuICAgIDB4NzNkYzE2ODMsIDB4ZTM2MzBiMTIsIDB4OTQ2NDNiODQsIDB4MGQ2ZDZhM2UsIDB4N2E2YTVhYTgsXHJcbiAgICAweGU0MGVjZjBiLCAweDkzMDlmZjlkLCAweDBhMDBhZTI3LCAweDdkMDc5ZWIxLCAweGYwMGY5MzQ0LFxyXG4gICAgMHg4NzA4YTNkMiwgMHgxZTAxZjI2OCwgMHg2OTA2YzJmZSwgMHhmNzYyNTc1ZCwgMHg4MDY1NjdjYixcclxuICAgIDB4MTk2YzM2NzEsIDB4NmU2YjA2ZTcsIDB4ZmVkNDFiNzYsIDB4ODlkMzJiZTAsIDB4MTBkYTdhNWEsXHJcbiAgICAweDY3ZGQ0YWNjLCAweGY5YjlkZjZmLCAweDhlYmVlZmY5LCAweDE3YjdiZTQzLCAweDYwYjA4ZWQ1LFxyXG4gICAgMHhkNmQ2YTNlOCwgMHhhMWQxOTM3ZSwgMHgzOGQ4YzJjNCwgMHg0ZmRmZjI1MiwgMHhkMWJiNjdmMSxcclxuICAgIDB4YTZiYzU3NjcsIDB4M2ZiNTA2ZGQsIDB4NDhiMjM2NGIsIDB4ZDgwZDJiZGEsIDB4YWYwYTFiNGMsXHJcbiAgICAweDM2MDM0YWY2LCAweDQxMDQ3YTYwLCAweGRmNjBlZmMzLCAweGE4NjdkZjU1LCAweDMxNmU4ZWVmLFxyXG4gICAgMHg0NjY5YmU3OSwgMHhjYjYxYjM4YywgMHhiYzY2ODMxYSwgMHgyNTZmZDJhMCwgMHg1MjY4ZTIzNixcclxuICAgIDB4Y2MwYzc3OTUsIDB4YmIwYjQ3MDMsIDB4MjIwMjE2YjksIDB4NTUwNTI2MmYsIDB4YzViYTNiYmUsXHJcbiAgICAweGIyYmQwYjI4LCAweDJiYjQ1YTkyLCAweDVjYjM2YTA0LCAweGMyZDdmZmE3LCAweGI1ZDBjZjMxLFxyXG4gICAgMHgyY2Q5OWU4YiwgMHg1YmRlYWUxZCwgMHg5YjY0YzJiMCwgMHhlYzYzZjIyNiwgMHg3NTZhYTM5YyxcclxuICAgIDB4MDI2ZDkzMGEsIDB4OWMwOTA2YTksIDB4ZWIwZTM2M2YsIDB4NzIwNzY3ODUsIDB4MDUwMDU3MTMsXHJcbiAgICAweDk1YmY0YTgyLCAweGUyYjg3YTE0LCAweDdiYjEyYmFlLCAweDBjYjYxYjM4LCAweDkyZDI4ZTliLFxyXG4gICAgMHhlNWQ1YmUwZCwgMHg3Y2RjZWZiNywgMHgwYmRiZGYyMSwgMHg4NmQzZDJkNCwgMHhmMWQ0ZTI0MixcclxuICAgIDB4NjhkZGIzZjgsIDB4MWZkYTgzNmUsIDB4ODFiZTE2Y2QsIDB4ZjZiOTI2NWIsIDB4NmZiMDc3ZTEsXHJcbiAgICAweDE4Yjc0Nzc3LCAweDg4MDg1YWU2LCAweGZmMGY2YTcwLCAweDY2MDYzYmNhLCAweDExMDEwYjVjLFxyXG4gICAgMHg4ZjY1OWVmZiwgMHhmODYyYWU2OSwgMHg2MTZiZmZkMywgMHgxNjZjY2Y0NSwgMHhhMDBhZTI3OCxcclxuICAgIDB4ZDcwZGQyZWUsIDB4NGUwNDgzNTQsIDB4MzkwM2IzYzIsIDB4YTc2NzI2NjEsIDB4ZDA2MDE2ZjcsXHJcbiAgICAweDQ5Njk0NzRkLCAweDNlNmU3N2RiLCAweGFlZDE2YTRhLCAweGQ5ZDY1YWRjLCAweDQwZGYwYjY2LFxyXG4gICAgMHgzN2Q4M2JmMCwgMHhhOWJjYWU1MywgMHhkZWJiOWVjNSwgMHg0N2IyY2Y3ZiwgMHgzMGI1ZmZlOSxcclxuICAgIDB4YmRiZGYyMWMsIDB4Y2FiYWMyOGEsIDB4NTNiMzkzMzAsIDB4MjRiNGEzYTYsIDB4YmFkMDM2MDUsXHJcbiAgICAweGNkZDcwNjkzLCAweDU0ZGU1NzI5LCAweDIzZDk2N2JmLCAweGIzNjY3YTJlLCAweGM0NjE0YWI4LFxyXG4gICAgMHg1ZDY4MWIwMiwgMHgyYTZmMmI5NCwgMHhiNDBiYmUzNywgMHhjMzBjOGVhMSwgMHg1YTA1ZGYxYixcclxuICAgIDB4MmQwMmVmOGQgXTtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuZnVuY3Rpb24gY3JjMzJfc3RyaW5nKGNyYywgYnVmLCBvZmZzZXQsIGxlbilcclxue1xyXG5cdGlmIChidWYgPT0gbnVsbCkgcmV0dXJuIDA7XHJcblxyXG4gICAgY3JjID0gY3JjIF4gMHhmZmZmZmZmZjtcclxuICAgIHdoaWxlIChsZW4gPj0gOCkge1xyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG4gICAgICAgIGxlbiAtPSA4O1xyXG4gICAgfVxyXG4gICAgaWYgKGxlbikgZG8ge1xyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWYuY2hhckNvZGVBdChvZmZzZXQrKykpICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG4gICAgfSB3aGlsZSAoLS1sZW4pO1xyXG4gICAgcmV0dXJuIGNyYyBeIDB4ZmZmZmZmZmY7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuZnVuY3Rpb24gY3JjMzJfYXJyYXkoY3JjLCBidWYsIG9mZnNldCwgbGVuKVxyXG57XHJcblx0aWYgKGJ1ZiA9PSBudWxsKSByZXR1cm4gMDtcclxuXHJcbiAgICBjcmMgPSBjcmMgXiAweGZmZmZmZmZmO1xyXG4gICAgd2hpbGUgKGxlbiA+PSA4KSB7XHJcblx0XHRjcmMgPSBjcmNfdGFibGVbKGNyYyBeIGJ1ZltvZmZzZXQrK10pICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWZbb2Zmc2V0KytdKSAmIDB4ZmZdIF4gKGNyYyA+Pj4gOClcclxuXHRcdGNyYyA9IGNyY190YWJsZVsoY3JjIF4gYnVmW29mZnNldCsrXSkgJiAweGZmXSBeIChjcmMgPj4+IDgpXHJcblx0XHRjcmMgPSBjcmNfdGFibGVbKGNyYyBeIGJ1ZltvZmZzZXQrK10pICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWZbb2Zmc2V0KytdKSAmIDB4ZmZdIF4gKGNyYyA+Pj4gOClcclxuXHRcdGNyYyA9IGNyY190YWJsZVsoY3JjIF4gYnVmW29mZnNldCsrXSkgJiAweGZmXSBeIChjcmMgPj4+IDgpXHJcblx0XHRjcmMgPSBjcmNfdGFibGVbKGNyYyBeIGJ1ZltvZmZzZXQrK10pICYgMHhmZl0gXiAoY3JjID4+PiA4KVxyXG5cdFx0Y3JjID0gY3JjX3RhYmxlWyhjcmMgXiBidWZbb2Zmc2V0KytdKSAmIDB4ZmZdIF4gKGNyYyA+Pj4gOClcclxuICAgICAgICBsZW4gLT0gODtcclxuICAgIH1cclxuICAgIGlmIChsZW4pIGRvIHtcclxuXHRcdGNyYyA9IGNyY190YWJsZVsoY3JjIF4gYnVmW29mZnNldCsrXSkgJiAweGZmXSBeIChjcmMgPj4+IDgpXHJcbiAgICB9IHdoaWxlICgtLWxlbik7XHJcbiAgICByZXR1cm4gY3JjIF4gMHhmZmZmZmZmZjtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5aTElCLmNyYzMyID0gZnVuY3Rpb24oY3JjLCBidWYsIG9mZnNldCwgbGVuKVxyXG57XHJcblx0aWYodHlwZW9mIGJ1ZiA9PT0gJ3N0cmluZycpIHtcclxuXHRcdHJldHVybiBjcmMzMl9zdHJpbmcoY3JjLCBidWYsIG9mZnNldCwgbGVuKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIGNyYzMyX2FycmF5KGNyYywgYnVmLCBvZmZzZXQsIGxlbik7XHJcblx0fVxyXG59O1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG52YXIgR0YyX0RJTSA9IDMyOyAvKiBkaW1lbnNpb24gb2YgR0YoMikgdmVjdG9ycyAobGVuZ3RoIG9mIENSQykgKi9cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuZnVuY3Rpb24gZ2YyX21hdHJpeF90aW1lcyhtYXQsIHZlYylcclxue1xyXG4gICAgdmFyIHN1bTtcclxuXHR2YXIgbWF0X2kgPSAwO1xyXG5cclxuICAgIHN1bSA9IDA7XHJcbiAgICB3aGlsZSAodmVjKSB7XHJcbiAgICAgICAgaWYgKHZlYyAmIDEpXHJcbiAgICAgICAgICAgIHN1bSBePSBtYXRbbWF0X2ldO1xyXG4gICAgICAgIHZlYyA+Pj0gMTtcclxuICAgICAgICBtYXRfaSsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1bTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5mdW5jdGlvbiBnZjJfbWF0cml4X3NxdWFyZShzcXVhcmUsIG1hdClcclxue1xyXG4gICAgdmFyIG47XHJcblxyXG4gICAgZm9yIChuID0gMDsgbiA8IEdGMl9ESU07IG4rKylcclxuICAgICAgICBzcXVhcmVbbl0gPSBnZjJfbWF0cml4X3RpbWVzKG1hdCwgbWF0W25dKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5aTElCLmNyYzMyX2NvbWJpbmUgPSBmdW5jdGlvbihjcmMxLCBjcmMyLCBsZW4yKVxyXG57XHJcbiAgICB2YXIgbjtcclxuICAgIHZhciByb3c7XHJcbiAgICB2YXIgZXZlbjsgICAgLyogZXZlbi1wb3dlci1vZi10d28gemVyb3Mgb3BlcmF0b3IgKi9cclxuICAgIHZhciBvZGQ7ICAgICAvKiBvZGQtcG93ZXItb2YtdHdvIHplcm9zIG9wZXJhdG9yICovXHJcblxyXG4gICAgLyogZGVnZW5lcmF0ZSBjYXNlIChhbHNvIGRpc2FsbG93IG5lZ2F0aXZlIGxlbmd0aHMpICovXHJcbiAgICBpZiAobGVuMiA8PSAwKVxyXG4gICAgICAgIHJldHVybiBjcmMxO1xyXG5cclxuICAgIGV2ZW4gPSBuZXcgQXJyYXkoR0YyX0RJTSk7XHJcbiAgICBvZGQgPSBuZXcgQXJyYXkoR0YyX0RJTSk7XHJcblxyXG4gICAgLyogcHV0IG9wZXJhdG9yIGZvciBvbmUgemVybyBiaXQgaW4gb2RkICovXHJcbiAgICBvZGRbMF0gPSAweGVkYjg4MzIwOyAgICAgICAgICAvKiBDUkMtMzIgcG9seW5vbWlhbCAqL1xyXG4gICAgcm93ID0gMTtcclxuICAgIGZvciAobiA9IDE7IG4gPCBHRjJfRElNOyBuKyspIHtcclxuICAgICAgICBvZGRbbl0gPSByb3c7XHJcbiAgICAgICAgcm93IDw8PSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHB1dCBvcGVyYXRvciBmb3IgdHdvIHplcm8gYml0cyBpbiBldmVuICovXHJcbiAgICBnZjJfbWF0cml4X3NxdWFyZShldmVuLCBvZGQpO1xyXG5cclxuICAgIC8qIHB1dCBvcGVyYXRvciBmb3IgZm91ciB6ZXJvIGJpdHMgaW4gb2RkICovXHJcbiAgICBnZjJfbWF0cml4X3NxdWFyZShvZGQsIGV2ZW4pO1xyXG5cclxuICAgIC8qIGFwcGx5IGxlbjIgemVyb3MgdG8gY3JjMSAoZmlyc3Qgc3F1YXJlIHdpbGwgcHV0IHRoZSBvcGVyYXRvciBmb3Igb25lXHJcbiAgICAgICB6ZXJvIGJ5dGUsIGVpZ2h0IHplcm8gYml0cywgaW4gZXZlbikgKi9cclxuICAgIGRvIHtcclxuICAgICAgICAvKiBhcHBseSB6ZXJvcyBvcGVyYXRvciBmb3IgdGhpcyBiaXQgb2YgbGVuMiAqL1xyXG4gICAgICAgIGdmMl9tYXRyaXhfc3F1YXJlKGV2ZW4sIG9kZCk7XHJcbiAgICAgICAgaWYgKGxlbjIgJiAxKVxyXG4gICAgICAgICAgICBjcmMxID0gZ2YyX21hdHJpeF90aW1lcyhldmVuLCBjcmMxKTtcclxuICAgICAgICBsZW4yID4+PSAxO1xyXG5cclxuICAgICAgICAvKiBpZiBubyBtb3JlIGJpdHMgc2V0LCB0aGVuIGRvbmUgKi9cclxuICAgICAgICBpZiAobGVuMiA9PSAwKVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLyogYW5vdGhlciBpdGVyYXRpb24gb2YgdGhlIGxvb3Agd2l0aCBvZGQgYW5kIGV2ZW4gc3dhcHBlZCAqL1xyXG4gICAgICAgIGdmMl9tYXRyaXhfc3F1YXJlKG9kZCwgZXZlbik7XHJcbiAgICAgICAgaWYgKGxlbjIgJiAxKVxyXG4gICAgICAgICAgICBjcmMxID0gZ2YyX21hdHJpeF90aW1lcyhvZGQsIGNyYzEpO1xyXG4gICAgICAgIGxlbjIgPj49IDE7XHJcblxyXG4gICAgICAgIC8qIGlmIG5vIG1vcmUgYml0cyBzZXQsIHRoZW4gZG9uZSAqL1xyXG4gICAgfSB3aGlsZSAobGVuMiAhPSAwKTtcclxuXHJcbiAgICAvKiByZXR1cm4gY29tYmluZWQgY3JjICovXHJcbiAgICBjcmMxIF49IGNyYzI7XHJcbiAgICByZXR1cm4gY3JjMTtcclxufTtcclxuXHJcbn0oKSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFpMSUIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgQU1URGVza3RvcCB9IGZyb20gJy4vQU1URGVza3RvcCdcclxuZXhwb3J0IHsgQU1US3ZtRGF0YVJlZGlyZWN0b3IgfSBmcm9tICcuL0FNVEt2bURhdGFSZWRpcmVjdG9yJ1xyXG5leHBvcnQgeyBBTVRSZWRpcmVjdG9yLCBQcm90b2NvbCB9IGZyb20gJy4vQU1UUmVkaXJlY3RvcidcclxuZXhwb3J0IHsgQW10VGVybWluYWwgfSBmcm9tICcuL0FNVFRlcm1pbmFsJ1xyXG5leHBvcnQgeyBDb25zb2xlTG9nZ2VyIH0gZnJvbSAnLi9Db25zb2xlTG9nZ2VyJ1xyXG5leHBvcnQgeyBUeXBlQ29udmVydGVyIH0gZnJvbSAnLi9Db252ZXJ0ZXInXHJcbmV4cG9ydCB7IERlc2t0b3AgfSBmcm9tICcuL0Rlc2t0b3AnXHJcbmV4cG9ydCB7IFN0YXRlUHJvY2Vzc29yRmFjdG9yeSB9IGZyb20gJy4vU3RhdGVQcm9jZXNzb3JGYWN0b3J5J1xyXG5leHBvcnQgeyBUZXJtaW5hbERhdGFQcm9jZXNzb3IgfSBmcm9tICcuL1Rlcm1pbmFsRGF0YVByb2Nlc3NvcidcclxuZXhwb3J0ICogZnJvbSAnLi9JbnRlcmZhY2VzJ1xyXG5leHBvcnQgKiBmcm9tICcuL0ltYWdlRGF0YSdcclxuZXhwb3J0ICogZnJvbSAnLi9SRkJTdGF0ZVByb2Nlc3NvcnMnXHJcbmV4cG9ydCAqIGZyb20gJy4vVXRpbGl0aWVzJ1xyXG4iXSwic291cmNlUm9vdCI6IiJ9