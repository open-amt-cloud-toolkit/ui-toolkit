(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@open-amt-cloud-toolkit/ui-toolkit/core'), require('rxjs'), require('rxjs/operators'), require('@angular/router'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/flex-layout'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('kvm', ['exports', '@angular/core', '@open-amt-cloud-toolkit/ui-toolkit/core', 'rxjs', 'rxjs/operators', '@angular/router', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/flex-layout', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.kvm = {}, global.ng.core, global['@open-amt-cloud-toolkit']['ui-toolkit'].core, global.rxjs, global.rxjs.operators, global.ng.router, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.flexLayout, global.ng.common.http));
}(this, (function (exports, i0, core, rxjs, operators, i1, platformBrowser, animations, flexLayout, http) { 'use strict';

    var _c0 = ["canvas"];
    var _c1 = ["device"];
    var KvmComponent = /** @class */ (function () {
        function KvmComponent(params, activatedRoute) {
            var _this = this;
            this.params = params;
            this.activatedRoute = activatedRoute;
            // //setting a width and height for the canvas
            this.width = 400;
            this.height = 400;
            this.deviceStatus = new i0.EventEmitter();
            this.deviceConnection = new i0.EventEmitter();
            this.selectedEncoding = new i0.EventEmitter();
            this.powerState = 0;
            this.deviceId = '';
            this.selected = 1;
            this.server = '';
            this.mouseMove = null;
            this.encodings = [
                { value: 1, viewValue: 'RLE 8' },
                { value: 2, viewValue: 'RLE 16' }
            ];
            this.urlConstructor = function () {
                return _this.params.mpsServer.replace('http', 'ws');
            };
            this.onConnectionStateChange = function (redirector, state) {
                _this.deviceStatus.emit(state);
            };
            this.reset = function () {
                _this.redirector = null;
                _this.module = null;
                _this.dataProcessor = null;
                _this.height = 400;
                _this.width = 400;
                _this.instantiate();
            };
            this.stopKvm = function () {
                _this.redirector.stop();
                _this.keyboardHelper.UnGrabKeyInput();
                _this.reset();
            };
            this.token = localStorage.getItem('loggedInUser');
            this.server = this.urlConstructor() + "/relay";
            this.mpsServer = this.params.mpsServer.includes('/mps');
            if (this.mpsServer) {
                // handles kong route
                this.server = this.urlConstructor() + "/ws/relay";
            }
        }
        KvmComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.params.subscribe(function (params) {
                _this.deviceId = params.id;
            });
            this.logger = new core.ConsoleLogger(1);
            this.deviceConnection.subscribe(function (data) {
                if (data) {
                    _this.init();
                }
                else {
                    _this.stopKvm();
                }
            });
            this.selectedEncoding.subscribe(function (data) {
                _this.selected = data;
                _this.onEncodingChange();
            });
        };
        KvmComponent.prototype.ngAfterViewInit = function () {
            this.init();
        };
        KvmComponent.prototype.instantiate = function () {
            var _this = this;
            var _a, _b;
            this.context = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.nativeElement.getContext('2d');
            this.redirector = new core.AMTKvmDataRedirector(this.logger, core.Protocol.KVM, new FileReader(), this.deviceId, 16994, '', '', 0, 0, JSON.parse(this.token).token, this.server);
            this.module = new core.AMTDesktop(this.logger, this.context);
            this.dataProcessor = new core.DataProcessor(this.logger, this.redirector, this.module);
            this.mouseHelper = new core.MouseHelper(this.module, this.redirector, 200);
            this.keyboardHelper = new core.KeyBoardHelper(this.module, this.redirector);
            this.redirector.onProcessData = this.module.processData.bind(this.module);
            this.redirector.onStart = this.module.start.bind(this.module);
            this.redirector.onNewState = this.module.onStateChange.bind(this.module);
            this.redirector.onSendKvmData = this.module.onSendKvmData.bind(this.module);
            this.redirector.onStateChanged = this.onConnectionStateChange.bind(this);
            this.redirector.onError = this.onRedirectorError.bind(this);
            this.module.onSend = this.redirector.send.bind(this.redirector);
            this.module.onProcessData = this.dataProcessor.processData.bind(this.dataProcessor);
            this.module.bpp = this.selected;
            this.mouseMove = rxjs.fromEvent((_b = this.canvas) === null || _b === void 0 ? void 0 : _b.nativeElement, 'mousemove');
            this.mouseMove.pipe(operators.throttleTime(200)).subscribe(function (event) {
                if (_this.mouseHelper != null) {
                    _this.mouseHelper.mousemove(event);
                }
            });
        };
        KvmComponent.prototype.onRedirectorError = function () {
            this.reset();
        };
        KvmComponent.prototype.init = function () {
            var _this = this;
            this.instantiate();
            setTimeout(function () {
                _this.autoConnect();
            }, 4000);
        };
        KvmComponent.prototype.autoConnect = function () {
            if (this.redirector != null) {
                this.redirector.start(WebSocket);
                this.keyboardHelper.GrabKeyInput();
            }
        };
        KvmComponent.prototype.onEncodingChange = function () {
            var _this = this;
            this.stopKvm();
            rxjs.timer(1000).subscribe(function () {
                _this.autoConnect();
            });
        };
        KvmComponent.prototype.onMouseup = function (event) {
            if (this.mouseHelper != null) {
                this.mouseHelper.mouseup(event);
            }
        };
        KvmComponent.prototype.onMousedown = function (event) {
            if (this.mouseHelper != null) {
                this.mouseHelper.mousedown(event);
            }
        };
        KvmComponent.prototype.onMousemove = function (event) {
            if (this.mouseHelper != null) {
                this.mouseHelper.mousemove(event);
            }
        };
        KvmComponent.prototype.ngOnDestroy = function () {
            this.stopKvm();
        };
        return KvmComponent;
    }());
    KvmComponent.ɵfac = function KvmComponent_Factory(t) { return new (t || KvmComponent)(i0.ɵɵdirectiveInject('userInput'), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
    KvmComponent.ɵcmp = i0.ɵɵdefineComponent({ type: KvmComponent, selectors: [["amt-kvm"]], viewQuery: function KvmComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, 1);
                i0.ɵɵviewQuery(_c1, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvas = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.device = _t.first);
            }
        }, inputs: { width: "width", height: "height", deviceConnection: "deviceConnection", selectedEncoding: "selectedEncoding" }, outputs: { deviceStatus: "deviceStatus" }, decls: 3, vars: 2, consts: [["oncontextmenu", "return false", 1, "canvas", 3, "width", "height", "mouseup", "mousedown", "mousemove"], ["canvas", ""]], template: function KvmComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "canvas", 0, 1);
                i0.ɵɵlistener("mouseup", function KvmComponent_Template_canvas_mouseup_1_listener($event) { return ctx.onMouseup($event); })("mousedown", function KvmComponent_Template_canvas_mousedown_1_listener($event) { return ctx.onMousedown($event); })("mousemove", function KvmComponent_Template_canvas_mousemove_1_listener($event) { return ctx.onMousemove($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("width", ctx.width)("height", ctx.height);
            }
        }, styles: [".canvas[_ngcontent-%COMP%]{max-height:80%;max-width:100%}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KvmComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'amt-kvm',
                        templateUrl: './kvm.component.html',
                        styleUrls: ['./kvm.component.css']
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['userInput']
                        }] }, { type: i1.ActivatedRoute }];
        }, { canvas: [{
                    type: i0.ViewChild,
                    args: ['canvas', { static: false }]
                }], device: [{
                    type: i0.ViewChild,
                    args: ['device', { static: false }]
                }], width: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }], deviceStatus: [{
                    type: i0.Output
                }], deviceConnection: [{
                    type: i0.Input
                }], selectedEncoding: [{
                    type: i0.Input
                }] });
    })();

    var KvmModule = /** @class */ (function () {
        function KvmModule() {
        }
        KvmModule.forRoot = function (param) {
            return {
                ngModule: KvmModule,
                providers: [
                    {
                        provide: 'userInput',
                        useValue: param
                    }
                ]
            };
        };
        return KvmModule;
    }());
    KvmModule.ɵfac = function KvmModule_Factory(t) { return new (t || KvmModule)(); };
    KvmModule.ɵmod = i0.ɵɵdefineNgModule({ type: KvmModule });
    KvmModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                http.HttpClientModule,
                flexLayout.FlexLayoutModule,
                platformBrowser.BrowserModule,
                animations.BrowserAnimationsModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(KvmModule, { declarations: [KvmComponent], imports: [http.HttpClientModule,
                flexLayout.FlexLayoutModule,
                platformBrowser.BrowserModule,
                animations.BrowserAnimationsModule], exports: [KvmComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KvmModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [KvmComponent],
                        imports: [
                            http.HttpClientModule,
                            flexLayout.FlexLayoutModule,
                            platformBrowser.BrowserModule,
                            animations.BrowserAnimationsModule
                        ],
                        exports: [KvmComponent],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of kvm
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.KvmComponent = KvmComponent;
    exports.KvmModule = KvmModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=kvm.umd.js.map
