import { EventEmitter, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵsetClassMetadata, Component, ViewEncapsulation, Inject, Output, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Terminal } from 'xterm';
import { ConsoleLogger, LogLevel, AmtTerminal, TerminalDataProcessor, AMTRedirector, Protocol } from '@open-amt-cloud-toolkit/ui-toolkit/core';
import { C, V, SPACE } from '@angular/cdk/keycodes';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

class SolComponent {
    constructor(params, activatedRoute) {
        this.params = params;
        this.activatedRoute = activatedRoute;
        this.uuid = '';
        this.server = '';
        this.logger = new ConsoleLogger(LogLevel.ERROR);
        this.deviceStatus = new EventEmitter();
        this.deviceConnection = new EventEmitter();
        this.token = localStorage.getItem('loggedInUser');
        this.server = `${this.urlConstructor()}/relay`;
        this.mpsServer = this.params.mpsServer.includes('/mps');
        if (this.mpsServer) {
            this.server = `${this.urlConstructor()}/ws/relay`;
        }
    }
    urlConstructor() {
        return this.params.mpsServer.replace('http', 'ws');
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.uuid = params.id;
        });
        this.deviceConnection.subscribe((data) => {
            if (data) {
                this.init();
            }
            else {
                this.stopSol();
            }
        });
    }
    ngAfterViewInit() {
        this.init();
    }
    init() {
        this.instantiate();
        setTimeout(() => {
            this.startSol();
        }, 4000);
    }
    instantiate() {
        this.terminal = new AmtTerminal();
        this.dataProcessor = new TerminalDataProcessor(this.terminal);
        this.redirector = new AMTRedirector(this.logger, Protocol.SOL, new FileReader(), this.uuid, 16994, '', '', 0, 0, JSON.parse(this.token).token, this.server);
        this.terminal.onSend = this.redirector.send.bind(this.redirector);
        this.redirector.onNewState = this.terminal.StateChange.bind(this.terminal);
        this.redirector.onStateChanged = this.onTerminalStateChange.bind(this);
        this.redirector.onProcessData = this.dataProcessor.processData.bind(this);
        this.dataProcessor.processDataToXterm = this.handleWriteToXterm.bind(this);
        this.dataProcessor.clearTerminal = this.handleClearTerminal.bind(this);
        this.container = document.getElementById('terminal');
        this.term = new Terminal({
            rows: 30,
            cols: 100,
            cursorStyle: 'block',
            fontWeight: 'bold'
        });
        this.term.open(this.container);
        this.term.onData((data) => {
            this.handleKeyPress(data);
        });
        this.term.attachCustomKeyEventHandler((e) => {
            e.stopPropagation();
            e.preventDefault();
            if (e.ctrlKey === true && e.shiftKey === true && e.keyCode === C) {
                return navigator.clipboard.writeText(this.term.getSelection());
            }
            else if (e.ctrlKey === true && e.shiftKey === true && e.keyCode === V) {
                return navigator.clipboard.readText().then(text => {
                    this.handleKeyPress(text);
                });
            }
            else if (e.code === SPACE) {
                return this.handleKeyPress(e.key);
            }
        });
    }
    handleKeyPress(domEvent) {
        this.terminal.TermSendKeys(domEvent);
    }
    handleClearTerminal() {
        this.term.reset();
    }
    handleWriteToXterm(str) {
        this.term.write(str);
    }
    onTerminalStateChange(redirector, state) {
        this.deviceStatus.emit(state);
    }
    startSol() {
        if (this.redirector !== null) {
            this.redirector.start(WebSocket);
        }
    }
    stopSol() {
        if (this.redirector !== null) {
            this.redirector.stop();
            this.handleClearTerminal();
            this.term.dispose();
            this.cleanup();
        }
    }
    cleanup() {
        this.terminal = null;
        this.redirector = null;
        this.dataProcessor = null;
        this.term = null;
    }
    ngOnDestroy() {
        this.stopSol();
    }
}
SolComponent.ɵfac = function SolComponent_Factory(t) { return new (t || SolComponent)(ɵɵdirectiveInject('userInput'), ɵɵdirectiveInject(ActivatedRoute)); };
SolComponent.ɵcmp = ɵɵdefineComponent({ type: SolComponent, selectors: [["amt-sol"]], inputs: { deviceConnection: "deviceConnection" }, outputs: { deviceStatus: "deviceStatus" }, decls: 2, vars: 0, consts: [[1, "container"], ["id", "terminal", 1, "xtermDisplay", 2, "width", "fit-content"]], template: function SolComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div", 1);
        ɵɵelementEnd();
    } }, styles: [".container{display:block;text-align:center}.xtermDisplay{display:inline-block}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SolComponent, [{
        type: Component,
        args: [{
                selector: 'amt-sol',
                templateUrl: './sol.component.html',
                styleUrls: ['./sol.component.css'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['userInput']
            }] }, { type: ActivatedRoute }]; }, { deviceStatus: [{
            type: Output
        }], deviceConnection: [{
            type: Input
        }] }); })();

class SolModule {
    static forRoot(param) {
        return {
            ngModule: SolModule,
            providers: [
                {
                    provide: 'userInput',
                    useValue: param
                }
            ]
        };
    }
}
SolModule.ɵfac = function SolModule_Factory(t) { return new (t || SolModule)(); };
SolModule.ɵmod = ɵɵdefineNgModule({ type: SolModule });
SolModule.ɵinj = ɵɵdefineInjector({ imports: [[
            HttpClientModule,
            FlexLayoutModule,
            BrowserModule,
            BrowserAnimationsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SolModule, { declarations: [SolComponent], imports: [HttpClientModule,
        FlexLayoutModule,
        BrowserModule,
        BrowserAnimationsModule], exports: [SolComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SolModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SolComponent
                ],
                imports: [
                    HttpClientModule,
                    FlexLayoutModule,
                    BrowserModule,
                    BrowserAnimationsModule
                ],
                exports: [
                    SolComponent
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();

/*
 * Public API Surface of sol
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SolComponent, SolModule };
//# sourceMappingURL=sol.js.map
