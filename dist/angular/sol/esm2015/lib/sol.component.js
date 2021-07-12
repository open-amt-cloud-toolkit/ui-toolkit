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
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.uuid = params.id;
        });
    }
    init() {
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
        this.redirector.start(WebSocket);
    }
    stopSol() {
        this.redirector.stop();
        this.handleClearTerminal();
        this.term.dispose();
        this.cleanup();
    }
    cleanup() {
        this.terminal = null;
        this.redirector = null;
        this.dataProcessor = null;
        this.term = null;
    }
    ngOnDestroy() {
        this.redirector.stop();
        this.cleanup();
    }
}
SolComponent.ɵfac = function SolComponent_Factory(t) { return new (t || SolComponent)(i0.ɵɵdirectiveInject('userInput'), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
SolComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SolComponent, selectors: [["amt-sol"]], inputs: { deviceConnection: "deviceConnection" }, outputs: { deviceStatus: "deviceStatus" }, decls: 2, vars: 0, consts: [[1, "container"], ["id", "terminal", 1, "xtermDisplay", 2, "width", "fit-content"]], template: function SolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementEnd();
    } }, styles: ["@import \"xterm/css/xterm.css\";.container{display:block;text-align:center}.xtermDisplay{display:inline-block}"], encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3Byb2plY3RzL3NvbC9zcmMvbGliL3NvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvYW5ndWxhci9wcm9qZWN0cy9zb2wvc3JjL2xpYi9zb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLE1BQU0sRUFBRSxpQkFBaUIsRUFBYSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDcEgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQUNoQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLHlDQUF5QyxDQUFBO0FBRTlJLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFBOzs7QUFRbkQsTUFBTSxPQUFPLFlBQVk7SUFhdkIsWUFBeUMsTUFBTSxFQUFtQixjQUE4QjtRQUF2RCxXQUFNLEdBQU4sTUFBTSxDQUFBO1FBQW1CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVpoRyxTQUFJLEdBQVcsRUFBRSxDQUFBO1FBT2pCLFdBQU0sR0FBVyxFQUFFLENBQUE7UUFDbkIsV0FBTSxHQUFrQixJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDL0MsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQTtRQUNoRSxxQkFBZ0IsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQTtRQUc1RSxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJ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R0FBRyxJQUFJLENBQUE7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUE7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDbEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNoQixDQUFDOzt3RUFoR1UsWUFBWSx1QkFhRixXQUFXO2lEQWJyQixZQUFZO1FDWnpCLDhCQUF1QjtRQUNuQix5QkFBMEU7UUFDOUUsaUJBQU07O3VGRFVPLFlBQVk7Y0FOeEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO2dCQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDbEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O3NCQWNlLE1BQU07dUJBQUMsV0FBVztxREFIdEIsWUFBWTtrQkFBckIsTUFBTTtZQUNFLGdCQUFnQjtrQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE9uSW5pdCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBUZXJtaW5hbCB9IGZyb20gJ3h0ZXJtJ1xuaW1wb3J0IHsgQW10VGVybWluYWwsIEFNVFJlZGlyZWN0b3IsIFRlcm1pbmFsRGF0YVByb2Nlc3NvciwgQ29uc29sZUxvZ2dlciwgUHJvdG9jb2wsIExvZ0xldmVsIH0gZnJvbSAnQG9wZW4tYW10LWNsb3VkLXRvb2xraXQvdWktdG9vbGtpdC9jb3JlJ1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBDLCBWLCBTUEFDRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2RlcydcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW10LXNvbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zb2wuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zb2wuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgdXVpZDogc3RyaW5nID0gJydcbiAgdGVybWluYWw6IGFueVxuICBjb250YWluZXIhOiBhbnlcbiAgdGVybTogYW55XG4gIHJlZGlyZWN0b3I6IGFueVxuICBkYXRhUHJvY2Vzc29yOiBhbnlcbiAgdG9rZW46IGFueVxuICBzZXJ2ZXI6IHN0cmluZyA9ICcnXG4gIGxvZ2dlcjogQ29uc29sZUxvZ2dlciA9IG5ldyBDb25zb2xlTG9nZ2VyKExvZ0xldmVsLkVSUk9SKVxuICBAT3V0cHV0KCkgZGV2aWNlU3RhdHVzOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpXG4gIEBJbnB1dCgpIGRldmljZUNvbm5lY3Rpb246IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKVxuXG4gIGNvbnN0cnVjdG9yIChASW5qZWN0KCd1c2VySW5wdXQnKSBwdWJsaWMgcGFyYW1zLCBwcml2YXRlIHJlYWRvbmx5IGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIHRoaXMudG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkSW5Vc2VyJylcbiAgfVxuXG4gIG5nT25Jbml0ICgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMudXVpZCA9IHBhcmFtcy5pZFxuICAgIH0pXG4gIH1cblxuICBpbml0ICgpOiB2b2lkIHtcbiAgICB0aGlzLnRlcm1pbmFsID0gbmV3IEFtdFRlcm1pbmFsKClcbiAgICB0aGlzLmRhdGFQcm9jZXNzb3IgPSBuZXcgVGVybWluYWxEYXRhUHJvY2Vzc29yKHRoaXMudGVybWluYWwpXG4gICAgdGhpcy5yZWRpcmVjdG9yID0gbmV3IEFNVFJlZGlyZWN0b3IodGhpcy5sb2dnZXIsIFByb3RvY29sLlNPTCwgbmV3IEZpbGVSZWFkZXIoKSwgdGhpcy51dWlkLCAxNjk5NCwgJycsICcnLCAwLCAwLCBKU09OLnBhcnNlKHRoaXMudG9rZW4pLnRva2VuLCB0aGlzLnNlcnZlcilcbiAgICB0aGlzLnRlcm1pbmFsLm9uU2VuZCA9IHRoaXMucmVkaXJlY3Rvci5zZW5kLmJpbmQodGhpcy5yZWRpcmVjdG9yKVxuICAgIHRoaXMucmVkaXJlY3Rvci5vbk5ld1N0YXRlID0gdGhpcy50ZXJtaW5hbC5TdGF0ZUNoYW5nZS5iaW5kKHRoaXMudGVybWluYWwpXG4gICAgdGhpcy5yZWRpcmVjdG9yLm9uU3RhdGVDaGFuZ2VkID0gdGhpcy5vblRlcm1pbmFsU3RhdGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMucmVkaXJlY3Rvci5vblByb2Nlc3NEYXRhID0gdGhpcy5kYXRhUHJvY2Vzc29yLnByb2Nlc3NEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmRhdGFQcm9jZXNzb3IucHJvY2Vzc0RhdGFUb1h0ZXJtID0gdGhpcy5oYW5kbGVXcml0ZVRvWHRlcm0uYmluZCh0aGlzKVxuICAgIHRoaXMuZGF0YVByb2Nlc3Nvci5jbGVhclRlcm1pbmFsID0gdGhpcy5oYW5kbGVDbGVhclRlcm1pbmFsLmJpbmQodGhpcylcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXJtaW5hbCcpXG4gICAgdGhpcy50ZXJtID0gbmV3IFRlcm1pbmFsKHtcbiAgICAgIHJvd3M6IDMwLFxuICAgICAgY29sczogMTAwLFxuICAgICAgY3Vyc29yU3R5bGU6ICdibG9jaycsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCdcbiAgICB9KVxuICAgIHRoaXMudGVybS5vcGVuKHRoaXMuY29udGFpbmVyKVxuICAgIHRoaXMudGVybS5vbkRhdGEoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVLZXlQcmVzcyhkYXRhKVxuICAgIH0pXG4gICAgdGhpcy50ZXJtLmF0dGFjaEN1c3RvbUtleUV2ZW50SGFuZGxlcigoZTogYW55KSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmIChlLmN0cmxLZXkgPT09IHRydWUgJiYgZS5zaGlmdEtleSA9PT0gdHJ1ZSAmJiBlLmtleUNvZGUgPT09IEMpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRoaXMudGVybS5nZXRTZWxlY3Rpb24oKSlcbiAgICAgIH0gZWxzZSBpZiAoZS5jdHJsS2V5ID09PSB0cnVlICYmIGUuc2hpZnRLZXkgPT09IHRydWUgJiYgZS5rZXlDb2RlID09PSBWKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCkudGhlbih0ZXh0ID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUtleVByZXNzKHRleHQpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGUuY29kZSA9PT0gU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlS2V5UHJlc3MoZS5rZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzIChkb21FdmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy50ZXJtaW5hbC5UZXJtU2VuZEtleXMoZG9tRXZlbnQpXG4gIH1cblxuICBoYW5kbGVDbGVhclRlcm1pbmFsICgpOiB2b2lkIHtcbiAgICB0aGlzLnRlcm0ucmVzZXQoKVxuICB9XG5cbiAgaGFuZGxlV3JpdGVUb1h0ZXJtIChzdHI6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudGVybS53cml0ZShzdHIpXG4gIH1cblxuICBvblRlcm1pbmFsU3RhdGVDaGFuZ2UgKHJlZGlyZWN0b3I6IEFNVFJlZGlyZWN0b3IsIHN0YXRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmRldmljZVN0YXR1cy5lbWl0KHN0YXRlKVxuICB9XG5cbiAgc3RhcnRTb2wgKCk6IHZvaWQge1xuICAgIHRoaXMucmVkaXJlY3Rvci5zdGFydChXZWJTb2NrZXQpXG4gIH1cblxuICBzdG9wU29sICgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZGlyZWN0b3Iuc3RvcCgpXG4gICAgdGhpcy5oYW5kbGVDbGVhclRlcm1pbmFsKClcbiAgICB0aGlzLnRlcm0uZGlzcG9zZSgpXG4gICAgdGhpcy5jbGVhbnVwKClcbiAgfVxuXG4gIGNsZWFudXAgKCk6IHZvaWQge1xuICAgIHRoaXMudGVybWluYWwgPSBudWxsXG4gICAgdGhpcy5yZWRpcmVjdG9yID0gbnVsbFxuICAgIHRoaXMuZGF0YVByb2Nlc3NvciA9IG51bGxcbiAgICB0aGlzLnRlcm0gPSBudWxsXG4gIH1cblxuICBuZ09uRGVzdHJveSAoKTogdm9pZCB7XG4gICAgdGhpcy5yZWRpcmVjdG9yLnN0b3AoKVxuICAgIHRoaXMuY2xlYW51cCgpXG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgaWQ9XCJ0ZXJtaW5hbFwiIGNsYXNzPVwieHRlcm1EaXNwbGF5XCIgc3R5bGU9XCJ3aWR0aDogZml0LWNvbnRlbnQ7XCI+PC9kaXY+XHJcbjwvZGl2PiJdfQ==