(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('xterm'), require('@open-amt-cloud-toolkit/ui-toolkit/core'), require('@angular/cdk/keycodes'), require('@angular/router'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/flex-layout'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('sol', ['exports', '@angular/core', 'xterm', '@open-amt-cloud-toolkit/ui-toolkit/core', '@angular/cdk/keycodes', '@angular/router', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/flex-layout', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.sol = {}, global.ng.core, global.xterm, global['@open-amt-cloud-toolkit']['ui-toolkit'].core, global.ng.cdk.keycodes, global.ng.router, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.flexLayout, global.ng.common.http));
}(this, (function (exports, i0, xterm, core, keycodes, i1, platformBrowser, animations, flexLayout, http) { 'use strict';

    var SolComponent = /** @class */ (function () {
        function SolComponent(params, activatedRoute) {
            this.params = params;
            this.activatedRoute = activatedRoute;
            this.uuid = '';
            this.server = '';
            this.logger = new core.ConsoleLogger(core.LogLevel.ERROR);
            this.deviceStatus = new i0.EventEmitter();
            this.deviceConnection = new i0.EventEmitter();
            this.token = localStorage.getItem('loggedInUser');
            this.server = this.urlConstructor() + "/relay";
            this.mpsServer = this.params.mpsServer.includes('/mps');
            if (this.mpsServer) {
                this.server = this.urlConstructor() + "/ws/relay";
            }
        }
        SolComponent.prototype.urlConstructor = function () {
            return this.params.mpsServer.replace('http', 'ws');
        };
        SolComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.params.subscribe(function (params) {
                _this.uuid = params.id;
            });
            this.deviceConnection.subscribe(function (data) {
                if (data) {
                    _this.init();
                }
                else {
                    _this.stopSol();
                }
            });
        };
        SolComponent.prototype.ngAfterViewInit = function () {
            this.init();
        };
        SolComponent.prototype.init = function () {
            var _this = this;
            this.instantiate();
            setTimeout(function () {
                _this.startSol();
            }, 4000);
        };
        SolComponent.prototype.instantiate = function () {
            var _this = this;
            this.terminal = new core.AmtTerminal();
            this.dataProcessor = new core.TerminalDataProcessor(this.terminal);
            this.redirector = new core.AMTRedirector(this.logger, core.Protocol.SOL, new FileReader(), this.uuid, 16994, '', '', 0, 0, JSON.parse(this.token).token, this.server);
            this.terminal.onSend = this.redirector.send.bind(this.redirector);
            this.redirector.onNewState = this.terminal.StateChange.bind(this.terminal);
            this.redirector.onStateChanged = this.onTerminalStateChange.bind(this);
            this.redirector.onProcessData = this.dataProcessor.processData.bind(this);
            this.dataProcessor.processDataToXterm = this.handleWriteToXterm.bind(this);
            this.dataProcessor.clearTerminal = this.handleClearTerminal.bind(this);
            this.container = document.getElementById('terminal');
            this.term = new xterm.Terminal({
                rows: 30,
                cols: 100,
                cursorStyle: 'block',
                fontWeight: 'bold'
            });
            this.term.open(this.container);
            this.term.onData(function (data) {
                _this.handleKeyPress(data);
            });
            this.term.attachCustomKeyEventHandler(function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (e.ctrlKey === true && e.shiftKey === true && e.keyCode === keycodes.C) {
                    return navigator.clipboard.writeText(_this.term.getSelection());
                }
                else if (e.ctrlKey === true && e.shiftKey === true && e.keyCode === keycodes.V) {
                    return navigator.clipboard.readText().then(function (text) {
                        _this.handleKeyPress(text);
                    });
                }
                else if (e.code === keycodes.SPACE) {
                    return _this.handleKeyPress(e.key);
                }
            });
        };
        SolComponent.prototype.handleKeyPress = function (domEvent) {
            this.terminal.TermSendKeys(domEvent);
        };
        SolComponent.prototype.handleClearTerminal = function () {
            this.term.reset();
        };
        SolComponent.prototype.handleWriteToXterm = function (str) {
            this.term.write(str);
        };
        SolComponent.prototype.onTerminalStateChange = function (redirector, state) {
            this.deviceStatus.emit(state);
        };
        SolComponent.prototype.startSol = function () {
            if (this.redirector !== null) {
                this.redirector.start(WebSocket);
            }
        };
        SolComponent.prototype.stopSol = function () {
            if (this.redirector !== null) {
                this.redirector.stop();
                this.handleClearTerminal();
                this.term.dispose();
                this.cleanup();
            }
        };
        SolComponent.prototype.cleanup = function () {
            this.terminal = null;
            this.redirector = null;
            this.dataProcessor = null;
            this.term = null;
        };
        SolComponent.prototype.ngOnDestroy = function () {
            this.stopSol();
        };
        return SolComponent;
    }());
    SolComponent.ɵfac = function SolComponent_Factory(t) { return new (t || SolComponent)(i0.ɵɵdirectiveInject('userInput'), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
    SolComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SolComponent, selectors: [["amt-sol"]], inputs: { deviceConnection: "deviceConnection" }, outputs: { deviceStatus: "deviceStatus" }, decls: 2, vars: 0, consts: [[1, "container"], ["id", "terminal", 1, "xtermDisplay", 2, "width", "fit-content"]], template: function SolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelement(1, "div", 1);
                i0.ɵɵelementEnd();
            }
        }, styles: [".container{display:block;text-align:center}.xtermDisplay{display:inline-block}"], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'amt-sol',
                        templateUrl: './sol.component.html',
                        styleUrls: ['./sol.component.css'],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['userInput']
                        }] }, { type: i1.ActivatedRoute }];
        }, { deviceStatus: [{
                    type: i0.Output
                }], deviceConnection: [{
                    type: i0.Input
                }] });
    })();

    var SolModule = /** @class */ (function () {
        function SolModule() {
        }
        SolModule.forRoot = function (param) {
            return {
                ngModule: SolModule,
                providers: [
                    {
                        provide: 'userInput',
                        useValue: param
                    }
                ]
            };
        };
        return SolModule;
    }());
    SolModule.ɵfac = function SolModule_Factory(t) { return new (t || SolModule)(); };
    SolModule.ɵmod = i0.ɵɵdefineNgModule({ type: SolModule });
    SolModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                http.HttpClientModule,
                flexLayout.FlexLayoutModule,
                platformBrowser.BrowserModule,
                animations.BrowserAnimationsModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SolModule, { declarations: [SolComponent], imports: [http.HttpClientModule,
                flexLayout.FlexLayoutModule,
                platformBrowser.BrowserModule,
                animations.BrowserAnimationsModule], exports: [SolComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SolModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SolComponent
                        ],
                        imports: [
                            http.HttpClientModule,
                            flexLayout.FlexLayoutModule,
                            platformBrowser.BrowserModule,
                            animations.BrowserAnimationsModule
                        ],
                        exports: [
                            SolComponent
                        ],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of sol
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SolComponent = SolComponent;
    exports.SolModule = SolModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sol.umd.js.map
