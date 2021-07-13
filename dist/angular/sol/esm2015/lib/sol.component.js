import { Component, EventEmitter, Inject, Output, ViewEncapsulation, Input } from '@angular/core';
import { Terminal } from 'xterm';
import { AmtTerminal, AMTRedirector, TerminalDataProcessor, ConsoleLogger, Protocol, LogLevel } from '@open-amt-cloud-toolkit/ui-toolkit/core';
import { C, V, SPACE } from '@angular/cdk/keycodes';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class SolComponent {
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
SolComponent.ɵfac = function SolComponent_Factory(t) { return new (t || SolComponent)(i0.ɵɵdirectiveInject('userInput'), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
SolComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SolComponent, selectors: [["amt-sol"]], inputs: { deviceConnection: "deviceConnection" }, outputs: { deviceStatus: "deviceStatus" }, decls: 2, vars: 0, consts: [[1, "container"], ["id", "terminal", 1, "xtermDisplay", 2, "width", "fit-content"]], template: function SolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementEnd();
    } }, styles: [".container{display:block;text-align:center}.xtermDisplay{display:inline-block}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SolComponent, [{
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
            }] }, { type: i1.ActivatedRoute }]; }, { deviceStatus: [{
            type: Output
        }], deviceConnection: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3Byb2plY3RzL3NvbC9zcmMvbGliL3NvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvYW5ndWxhci9wcm9qZWN0cy9zb2wvc3JjL2xpYi9zb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLE1BQU0sRUFBRSxpQkFBaUIsRUFBYSxLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFBO0FBQ25JLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFDaEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQTtBQUU5SSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTs7O0FBUW5ELE1BQU0sT0FBTyxZQUFZO0lBY3ZCLFlBQXlDLE1BQU0sRUFBbUIsY0FBOEI7UUFBdkQsV0FBTSxHQUFOLE1BQU0sQ0FBQTtRQUFtQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFiaEcsU0FBSSxHQUFXLEVBQUUsQ0FBQTtRQU9qQixXQUFNLEdBQVcsRUFBRSxDQUFBO1FBRW5CLFdBQU0sR0FBa0IsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQy9DLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUE7UUFDaEUscUJBQWdCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUE7UUFHNUUsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsR0FB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QUcsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2hCLENBQUM7O3dFQS9IVSxZQUFZLHVCQWNGLFdBQVc7aURBZHJCLFlBQVk7UUNaekIsOEJBQXVCO1FBQ25CLHlCQUEwRTtRQUM5RSxpQkFBTTs7dUZEVU8sWUFBWTtjQU54QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFdBQVcsRUFBRSxzQkFBc0I7Z0JBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNsQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7c0JBZWUsTUFBTTt1QkFBQyxXQUFXO3FEQUh0QixZQUFZO2tCQUFyQixNQUFNO1lBQ0UsZ0JBQWdCO2tCQUF4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3ksIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFRlcm1pbmFsIH0gZnJvbSAneHRlcm0nXG5pbXBvcnQgeyBBbXRUZXJtaW5hbCwgQU1UUmVkaXJlY3RvciwgVGVybWluYWxEYXRhUHJvY2Vzc29yLCBDb25zb2xlTG9nZ2VyLCBQcm90b2NvbCwgTG9nTGV2ZWwgfSBmcm9tICdAb3Blbi1hbXQtY2xvdWQtdG9vbGtpdC91aS10b29sa2l0L2NvcmUnXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IEMsIFYsIFNQQUNFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbXQtc29sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NvbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NvbC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU29sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICB1dWlkOiBzdHJpbmcgPSAnJ1xuICB0ZXJtaW5hbDogYW55XG4gIGNvbnRhaW5lciE6IGFueVxuICB0ZXJtOiBhbnlcbiAgcmVkaXJlY3RvcjogYW55XG4gIGRhdGFQcm9jZXNzb3I6IGFueVxuICB0b2tlbjogYW55XG4gIHNlcnZlcjogc3RyaW5nID0gJydcbiAgbXBzU2VydmVyOiBib29sZWFuXG4gIGxvZ2dlcjogQ29uc29sZUxvZ2dlciA9IG5ldyBDb25zb2xlTG9nZ2VyKExvZ0xldmVsLkVSUk9SKVxuICBAT3V0cHV0KCkgZGV2aWNlU3RhdHVzOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpXG4gIEBJbnB1dCgpIGRldmljZUNvbm5lY3Rpb246IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKVxuXG4gIGNvbnN0cnVjdG9yIChASW5qZWN0KCd1c2VySW5wdXQnKSBwdWJsaWMgcGFyYW1zLCBwcml2YXRlIHJlYWRvbmx5IGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIHRoaXMudG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkSW5Vc2VyJylcbiAgICB0aGlzLnNlcnZlciA9IGAke3RoaXMudXJsQ29uc3RydWN0b3IoKX0vcmVsYXlgXG4gICAgdGhpcy5tcHNTZXJ2ZXIgPSB0aGlzLnBhcmFtcy5tcHNTZXJ2ZXIuaW5jbHVkZXMoJy9tcHMnKVxuICAgIGlmICh0aGlzLm1wc1NlcnZlcikge1xuICAgICAgdGhpcy5zZXJ2ZXIgPSBgJHt0aGlzLnVybENvbnN0cnVjdG9yKCl9L3dzL3JlbGF5YFxuICAgIH1cbiAgfVxuXG4gIHVybENvbnN0cnVjdG9yICgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhcmFtcy5tcHNTZXJ2ZXIucmVwbGFjZSgnaHR0cCcsICd3cycpXG4gIH1cblxuICBuZ09uSW5pdCAoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLnV1aWQgPSBwYXJhbXMuaWRcbiAgICB9KVxuICAgIHRoaXMuZGV2aWNlQ29ubmVjdGlvbi5zdWJzY3JpYmUoKGRhdGE6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3BTb2woKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQgKCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbnRpYXRlKClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3RhcnRTb2woKVxuICAgIH0sIDQwMDApXG4gIH1cblxuICBpbnN0YW50aWF0ZSAoKTogdm9pZCB7XG4gICAgdGhpcy50ZXJtaW5hbCA9IG5ldyBBbXRUZXJtaW5hbCgpXG4gICAgdGhpcy5kYXRhUHJvY2Vzc29yID0gbmV3IFRlcm1pbmFsRGF0YVByb2Nlc3Nvcih0aGlzLnRlcm1pbmFsKVxuICAgIHRoaXMucmVkaXJlY3RvciA9IG5ldyBBTVRSZWRpcmVjdG9yKHRoaXMubG9nZ2VyLCBQcm90b2NvbC5TT0wsIG5ldyBGaWxlUmVhZGVyKCksIHRoaXMudXVpZCwgMTY5OTQsICcnLCAnJywgMCwgMCwgSlNPTi5wYXJzZSh0aGlzLnRva2VuKS50b2tlbiwgdGhpcy5zZXJ2ZXIpXG4gICAgdGhpcy50ZXJtaW5hbC5vblNlbmQgPSB0aGlzLnJlZGlyZWN0b3Iuc2VuZC5iaW5kKHRoaXMucmVkaXJlY3RvcilcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25OZXdTdGF0ZSA9IHRoaXMudGVybWluYWwuU3RhdGVDaGFuZ2UuYmluZCh0aGlzLnRlcm1pbmFsKVxuICAgIHRoaXMucmVkaXJlY3Rvci5vblN0YXRlQ2hhbmdlZCA9IHRoaXMub25UZXJtaW5hbFN0YXRlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25Qcm9jZXNzRGF0YSA9IHRoaXMuZGF0YVByb2Nlc3Nvci5wcm9jZXNzRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5kYXRhUHJvY2Vzc29yLnByb2Nlc3NEYXRhVG9YdGVybSA9IHRoaXMuaGFuZGxlV3JpdGVUb1h0ZXJtLmJpbmQodGhpcylcbiAgICB0aGlzLmRhdGFQcm9jZXNzb3IuY2xlYXJUZXJtaW5hbCA9IHRoaXMuaGFuZGxlQ2xlYXJUZXJtaW5hbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVybWluYWwnKVxuICAgIHRoaXMudGVybSA9IG5ldyBUZXJtaW5hbCh7XG4gICAgICByb3dzOiAzMCxcbiAgICAgIGNvbHM6IDEwMCxcbiAgICAgIGN1cnNvclN0eWxlOiAnYmxvY2snLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnXG4gICAgfSlcbiAgICB0aGlzLnRlcm0ub3Blbih0aGlzLmNvbnRhaW5lcilcbiAgICB0aGlzLnRlcm0ub25EYXRhKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MoZGF0YSlcbiAgICB9KVxuICAgIHRoaXMudGVybS5hdHRhY2hDdXN0b21LZXlFdmVudEhhbmRsZXIoKGU6IGFueSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZS5jdHJsS2V5ID09PSB0cnVlICYmIGUuc2hpZnRLZXkgPT09IHRydWUgJiYgZS5rZXlDb2RlID09PSBDKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0aGlzLnRlcm0uZ2V0U2VsZWN0aW9uKCkpXG4gICAgICB9IGVsc2UgaWYgKGUuY3RybEtleSA9PT0gdHJ1ZSAmJiBlLnNoaWZ0S2V5ID09PSB0cnVlICYmIGUua2V5Q29kZSA9PT0gVikge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpLnRoZW4odGV4dCA9PiB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVLZXlQcmVzcyh0ZXh0KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChlLmNvZGUgPT09IFNQQUNFKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUtleVByZXNzKGUua2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyAoZG9tRXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudGVybWluYWwuVGVybVNlbmRLZXlzKGRvbUV2ZW50KVxuICB9XG5cbiAgaGFuZGxlQ2xlYXJUZXJtaW5hbCAoKTogdm9pZCB7XG4gICAgdGhpcy50ZXJtLnJlc2V0KClcbiAgfVxuXG4gIGhhbmRsZVdyaXRlVG9YdGVybSAoc3RyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnRlcm0ud3JpdGUoc3RyKVxuICB9XG5cbiAgb25UZXJtaW5hbFN0YXRlQ2hhbmdlIChyZWRpcmVjdG9yOiBBTVRSZWRpcmVjdG9yLCBzdGF0ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5kZXZpY2VTdGF0dXMuZW1pdChzdGF0ZSlcbiAgfVxuXG4gIHN0YXJ0U29sICgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWRpcmVjdG9yICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlZGlyZWN0b3Iuc3RhcnQoV2ViU29ja2V0KVxuICAgIH1cbiAgfVxuXG4gIHN0b3BTb2wgKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZGlyZWN0b3IgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVkaXJlY3Rvci5zdG9wKClcbiAgICAgIHRoaXMuaGFuZGxlQ2xlYXJUZXJtaW5hbCgpXG4gICAgICB0aGlzLnRlcm0uZGlzcG9zZSgpXG4gICAgICB0aGlzLmNsZWFudXAoKVxuICAgIH1cbiAgfVxuXG4gIGNsZWFudXAgKCk6IHZvaWQge1xuICAgIHRoaXMudGVybWluYWwgPSBudWxsXG4gICAgdGhpcy5yZWRpcmVjdG9yID0gbnVsbFxuICAgIHRoaXMuZGF0YVByb2Nlc3NvciA9IG51bGxcbiAgICB0aGlzLnRlcm0gPSBudWxsXG4gIH1cblxuICBuZ09uRGVzdHJveSAoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wU29sKClcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBpZD1cInRlcm1pbmFsXCIgY2xhc3M9XCJ4dGVybURpc3BsYXlcIiBzdHlsZT1cIndpZHRoOiBmaXQtY29udGVudDtcIj48L2Rpdj5cclxuPC9kaXY+Il19