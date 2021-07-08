import { Component, EventEmitter, Inject, Input, Output, ViewChild } from '@angular/core';
import { AMTDesktop, AMTKvmDataRedirector, ConsoleLogger, DataProcessor, KeyBoardHelper, MouseHelper, Protocol } from '@open-amt-cloud-toolkit/ui-toolkit/core';
import { fromEvent, timer } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
const _c0 = ["canvas"];
export class KvmComponent {
    constructor(params) {
        this.params = params;
        // //setting a width and height for the canvas
        this.width = 400;
        this.height = 400;
        this.deviceState = 0;
        this.deviceStatus = new EventEmitter();
        this.deviceConnection = new EventEmitter();
        this.selectedEncoding = new EventEmitter();
        this.powerState = 0;
        this.deviceId = '';
        this.selected = 1;
        this.server = '';
        this.mouseMove = null;
        this.encodings = [
            { value: 1, viewValue: 'RLE 8' },
            { value: 2, viewValue: 'RLE 16' }
        ];
        this.urlConstructor = () => {
            return this.params.server.replace('http', 'ws');
        };
        this.onConnectionStateChange = (redirector, state) => {
            this.deviceState = state;
            this.deviceStatus.emit(state);
        };
        this.reset = () => {
            this.redirector = null;
            this.module = null;
            this.dataProcessor = null;
            this.height = 400;
            this.width = 400;
            this.instantiate();
        };
        this.stopKvm = () => {
            this.redirector.stop();
            this.keyboardHelper.UnGrabKeyInput();
            this.reset();
        };
        this.deviceId = this.params.deviceId;
        this.server = `${this.urlConstructor()}/relay`;
        this.mpsServer = this.params.server.includes('/mps');
        if (this.mpsServer) {
            // handles kong route
            this.server = `${this.urlConstructor()}/ws/relay`;
        }
    }
    ngOnInit() {
        this.logger = new ConsoleLogger(1);
        this.deviceConnection.subscribe((data) => {
            if (data) {
                this.init();
            }
            else {
                this.stopKvm();
            }
        });
        this.selectedEncoding.subscribe((data) => {
            this.selected = data;
            this.onEncodingChange();
        });
    }
    ngAfterViewInit() {
        this.init();
    }
    instantiate() {
        var _a, _b;
        this.context = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.nativeElement.getContext('2d');
        this.redirector = new AMTKvmDataRedirector(this.logger, Protocol.KVM, new FileReader(), this.deviceId, 16994, '', '', 0, 0, this.params.authToken, this.server);
        this.module = new AMTDesktop(this.logger, this.context);
        this.dataProcessor = new DataProcessor(this.logger, this.redirector, this.module);
        this.mouseHelper = new MouseHelper(this.module, this.redirector, 200);
        this.keyboardHelper = new KeyBoardHelper(this.module, this.redirector);
        this.redirector.onProcessData = this.module.processData.bind(this.module);
        this.redirector.onStart = this.module.start.bind(this.module);
        this.redirector.onNewState = this.module.onStateChange.bind(this.module);
        this.redirector.onSendKvmData = this.module.onSendKvmData.bind(this.module);
        this.redirector.onStateChanged = this.onConnectionStateChange.bind(this);
        this.redirector.onError = this.onRedirectorError.bind(this);
        this.module.onSend = this.redirector.send.bind(this.redirector);
        this.module.onProcessData = this.dataProcessor.processData.bind(this.dataProcessor);
        this.module.bpp = this.selected;
        this.mouseMove = fromEvent((_b = this.canvas) === null || _b === void 0 ? void 0 : _b.nativeElement, 'mousemove');
        this.mouseMove.pipe(throttleTime(200)).subscribe((event) => {
            if (this.mouseHelper != null) {
                this.mouseHelper.mousemove(event);
            }
        });
    }
    onRedirectorError() {
        this.reset();
    }
    init() {
        this.instantiate();
        setTimeout(() => {
            this.autoConnect();
        }, 4000);
    }
    autoConnect() {
        if (this.redirector != null) {
            this.redirector.start(WebSocket);
            this.keyboardHelper.GrabKeyInput();
        }
    }
    onEncodingChange() {
        this.stopKvm();
        timer(1000).subscribe(() => {
            this.autoConnect();
        });
    }
    checkPowerStatus() {
        return this.powerState.powerstate === 2;
    }
    onMouseup(event) {
        if (this.mouseHelper != null) {
            this.mouseHelper.mouseup(event);
        }
    }
    onMousedown(event) {
        if (this.mouseHelper != null) {
            this.mouseHelper.mousedown(event);
        }
    }
    onMousemove(event) {
        if (this.mouseHelper != null) {
            this.mouseHelper.mousemove(event);
        }
    }
    ngOnDestroy() {
        this.stopKvm();
    }
}
KvmComponent.ɵfac = function KvmComponent_Factory(t) { return new (t || KvmComponent)(i0.ɵɵdirectiveInject('userInput')); };
KvmComponent.ɵcmp = i0.ɵɵdefineComponent({ type: KvmComponent, selectors: [["amt-kvm"]], viewQuery: function KvmComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvas = _t.first);
    } }, inputs: { width: "width", height: "height", deviceConnection: "deviceConnection", selectedEncoding: "selectedEncoding" }, outputs: { deviceState: "deviceState", deviceStatus: "deviceStatus" }, decls: 3, vars: 2, consts: [["oncontextmenu", "return false", 1, "canvas", 3, "width", "height", "mouseup", "mousedown", "mousemove"], ["canvas", ""]], template: function KvmComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "canvas", 0, 1);
        i0.ɵɵlistener("mouseup", function KvmComponent_Template_canvas_mouseup_1_listener($event) { return ctx.onMouseup($event); })("mousedown", function KvmComponent_Template_canvas_mousedown_1_listener($event) { return ctx.onMousedown($event); })("mousemove", function KvmComponent_Template_canvas_mousemove_1_listener($event) { return ctx.onMousemove($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("width", ctx.width)("height", ctx.height);
    } }, styles: [".canvas[_ngcontent-%COMP%]{max-height:80%;max-width:100%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KvmComponent, [{
        type: Component,
        args: [{
                selector: 'amt-kvm',
                templateUrl: './kvm.component.html',
                styleUrls: ['./kvm.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['userInput']
            }] }]; }, { canvas: [{
            type: ViewChild,
            args: ['canvas', { static: false }]
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], deviceState: [{
            type: Output
        }], deviceStatus: [{
            type: Output
        }], deviceConnection: [{
            type: Input
        }], selectedEncoding: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ZtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3Byb2plY3RzL2t2bS9zcmMvbGliL2t2bS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvYW5ndWxhci9wcm9qZWN0cy9rdm0vc3JjL2xpYi9rdm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFBO0FBQ3RCLE9BQU8sRUFDTCxVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixhQUFhLEVBR2IsY0FBYyxFQUNkLFdBQVcsRUFDWCxRQUFRLEVBQ1QsTUFBTSx5Q0FBeUMsQ0FBQTtBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQTtBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7OztBQU83QyxNQUFNLE9BQU8sWUFBWTtJQThCdkIsWUFBeUMsTUFBTTtRQUFOLFdBQU0sR0FBTixNQUFNLENBQUE7UUExQi9DLDhDQUE4QztRQUU5QixVQUFLLEdBQUcsR0FBRyxDQUFBO1FBQ1gsV0FBTSxHQUFHLEdBQUcsQ0FBQTtRQUNsQixnQkFBVyxHQUFXLENBQUMsQ0FBQTtRQUN2QixpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFBO1FBQ2hFLHFCQUFnQixHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFBO1FBQ3JFLHFCQUFnQixHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFBO1FBTzVFLGVBQVUsR0FBUSxDQUFDLENBQUE7UUFDbkIsYUFBUSxHQUFXLEVBQUUsQ0FBQTtRQUNyQixhQUFRLEdBQVcsQ0FBQyxDQUFBO1FBRXBCLFdBQU0sR0FBVyxFQUFFLENBQUE7UUFDbkIs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U0M7UUFIQyxtR0FBVyxxQkFBaUIsSUFBQywwRkFDaEIsdUJBQW1CLElBREgsMEZBRWhCLHVCQUFtQixJQUZIO1FBRzlCLGlCQUFTO1FBQ1osaUJBQU07O1FBUEYsZUFBZTtRQUFmLGlDQUFlLHNCQUFBOzt1RkQyQk4sWUFBWTtjQUx4QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFdBQVcsRUFBRSxzQkFBc0I7Z0JBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ25DOztzQkErQmUsTUFBTTt1QkFBQyxXQUFXO3dCQTdCUSxNQUFNO2tCQUE3QyxTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFLdEIsS0FBSztrQkFBcEIsS0FBSztZQUNVLE1BQU07a0JBQXJCLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNFLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7XHJcbiAgQU1URGVza3RvcCxcclxuICBBTVRLdm1EYXRhUmVkaXJlY3RvcixcclxuICBDb25zb2xlTG9nZ2VyLFxyXG4gIERhdGFQcm9jZXNzb3IsXHJcbiAgSURhdGFQcm9jZXNzb3IsXHJcbiAgSUxvZ2dlcixcclxuICBLZXlCb2FyZEhlbHBlcixcclxuICBNb3VzZUhlbHBlcixcclxuICBQcm90b2NvbFxyXG59IGZyb20gJ0BvcGVuLWFtdC1jbG91ZC10b29sa2l0L3VpLXRvb2xraXQvY29yZSdcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCB0aW1lciB9IGZyb20gJ3J4anMnXHJcbmltcG9ydCB7IHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhbXQta3ZtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4va3ZtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9rdm0uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLdm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnY2FudmFzJywgeyBzdGF0aWM6IGZhbHNlIH0pIGNhbnZhczogRWxlbWVudFJlZiB8IHVuZGVmaW5lZFxyXG4gIHB1YmxpYyBjb250ZXh0ITogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXHJcblxyXG4gIC8vIC8vc2V0dGluZyBhIHdpZHRoIGFuZCBoZWlnaHQgZm9yIHRoZSBjYW52YXNcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHdpZHRoID0gNDAwXHJcbiAgQElucHV0KCkgcHVibGljIGhlaWdodCA9IDQwMFxyXG4gIEBPdXRwdXQoKSBkZXZpY2VTdGF0ZTogbnVtYmVyID0gMFxyXG4gIEBPdXRwdXQoKSBkZXZpY2VTdGF0dXM6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KClcclxuICBASW5wdXQoKSBkZXZpY2VDb25uZWN0aW9uOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KClcclxuICBASW5wdXQoKSBzZWxlY3RlZEVuY29kaW5nOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpXHJcbiAgbW9kdWxlOiBhbnlcclxuICByZWRpcmVjdG9yOiBhbnlcclxuICBkYXRhUHJvY2Vzc29yITogSURhdGFQcm9jZXNzb3IgfCBudWxsXHJcbiAgbW91c2VIZWxwZXIhOiBNb3VzZUhlbHBlclxyXG4gIGtleWJvYXJkSGVscGVyITogS2V5Qm9hcmRIZWxwZXJcclxuICBsb2dnZXIhOiBJTG9nZ2VyXHJcbiAgcG93ZXJTdGF0ZTogYW55ID0gMFxyXG4gIGRldmljZUlkOiBzdHJpbmcgPSAnJ1xyXG4gIHNlbGVjdGVkOiBudW1iZXIgPSAxXHJcbiAgdGltZUludGVydmFsITogYW55XHJcbiAgc2VydmVyOiBzdHJpbmcgPSAnJ1xyXG4gIG1vdXNlTW92ZTogYW55ID0gbnVsbFxyXG4gIG1wc1NlcnZlcjogYm9vbGVhblxyXG4gIGVuY29kaW5ncyA9IFtcclxuICAgIHsgdmFsdWU6IDEsIHZpZXdWYWx1ZTogJ1JMRSA4JyB9LFxyXG4gICAgeyB2YWx1ZTogMiwgdmlld1ZhbHVlOiAnUkxFIDE2JyB9XHJcbiAgXVxyXG5cclxuICBjb25zdHJ1Y3RvciAoQEluamVjdCgndXNlcklucHV0JykgcHVibGljIHBhcmFtcykge1xyXG4gICAgdGhpcy5kZXZpY2VJZCA9IHRoaXMucGFyYW1zLmRldmljZUlkXHJcbiAgICB0aGlzLnNlcnZlciA9IGAke3RoaXMudXJsQ29uc3RydWN0b3IoKX0vcmVsYXlgXHJcbiAgICB0aGlzLm1wc1NlcnZlciA9IHRoaXMucGFyYW1zLnNlcnZlci5pbmNsdWRlcygnL21wcycpXHJcbiAgICBpZiAodGhpcy5tcHNTZXJ2ZXIpIHtcclxuICAgICAgLy8gaGFuZGxlcyBrb25nIHJvdXRlXHJcbiAgICAgIHRoaXMuc2VydmVyID0gYCR7dGhpcy51cmxDb25zdHJ1Y3RvcigpfS93cy9yZWxheWBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVybENvbnN0cnVjdG9yID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJhbXMuc2VydmVyLnJlcGxhY2UoJ2h0dHAnLCAnd3MnKVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQgKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgQ29uc29sZUxvZ2dlcigxKVxyXG4gICAgdGhpcy5kZXZpY2VDb25uZWN0aW9uLnN1YnNjcmliZSgoZGF0YTogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdG9wS3ZtKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMuc2VsZWN0ZWRFbmNvZGluZy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3RlZCA9IGRhdGFcclxuICAgICAgdGhpcy5vbkVuY29kaW5nQ2hhbmdlKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQgKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0KClcclxuICB9XHJcblxyXG4gIGluc3RhbnRpYXRlICgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzPy5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJylcclxuICAgIHRoaXMucmVkaXJlY3RvciA9IG5ldyBBTVRLdm1EYXRhUmVkaXJlY3RvcihcclxuICAgICAgdGhpcy5sb2dnZXIsXHJcbiAgICAgIFByb3RvY29sLktWTSxcclxuICAgICAgbmV3IEZpbGVSZWFkZXIoKSxcclxuICAgICAgdGhpcy5kZXZpY2VJZCxcclxuICAgICAgMTY5OTQsXHJcbiAgICAgICcnLFxyXG4gICAgICAnJyxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5wYXJhbXMuYXV0aFRva2VuLFxyXG4gICAgICB0aGlzLnNlcnZlclxyXG4gICAgKVxyXG4gICAgdGhpcy5tb2R1bGUgPSBuZXcgQU1URGVza3RvcCh0aGlzLmxvZ2dlciBhcyBhbnksIHRoaXMuY29udGV4dClcclxuICAgIHRoaXMuZGF0YVByb2Nlc3NvciA9IG5ldyBEYXRhUHJvY2Vzc29yKFxyXG4gICAgICB0aGlzLmxvZ2dlcixcclxuICAgICAgdGhpcy5yZWRpcmVjdG9yLFxyXG4gICAgICB0aGlzLm1vZHVsZVxyXG4gICAgKVxyXG4gICAgdGhpcy5tb3VzZUhlbHBlciA9IG5ldyBNb3VzZUhlbHBlcih0aGlzLm1vZHVsZSwgdGhpcy5yZWRpcmVjdG9yLCAyMDApXHJcbiAgICB0aGlzLmtleWJvYXJkSGVscGVyID0gbmV3IEtleUJvYXJkSGVscGVyKHRoaXMubW9kdWxlLCB0aGlzLnJlZGlyZWN0b3IpXHJcblxyXG4gICAgdGhpcy5yZWRpcmVjdG9yLm9uUHJvY2Vzc0RhdGEgPSB0aGlzLm1vZHVsZS5wcm9jZXNzRGF0YS5iaW5kKHRoaXMubW9kdWxlKVxyXG4gICAgdGhpcy5yZWRpcmVjdG9yLm9uU3RhcnQgPSB0aGlzLm1vZHVsZS5zdGFydC5iaW5kKHRoaXMubW9kdWxlKVxyXG4gICAgdGhpcy5yZWRpcmVjdG9yLm9uTmV3U3RhdGUgPSB0aGlzLm1vZHVsZS5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcy5tb2R1bGUpXHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25TZW5kS3ZtRGF0YSA9IHRoaXMubW9kdWxlLm9uU2VuZEt2bURhdGEuYmluZCh0aGlzLm1vZHVsZSlcclxuICAgIHRoaXMucmVkaXJlY3Rvci5vblN0YXRlQ2hhbmdlZCA9IHRoaXMub25Db25uZWN0aW9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5yZWRpcmVjdG9yLm9uRXJyb3IgPSB0aGlzLm9uUmVkaXJlY3RvckVycm9yLmJpbmQodGhpcylcclxuICAgIHRoaXMubW9kdWxlLm9uU2VuZCA9IHRoaXMucmVkaXJlY3Rvci5zZW5kLmJpbmQodGhpcy5yZWRpcmVjdG9yKVxyXG4gICAgdGhpcy5tb2R1bGUub25Qcm9jZXNzRGF0YSA9IHRoaXMuZGF0YVByb2Nlc3Nvci5wcm9jZXNzRGF0YS5iaW5kKFxyXG4gICAgICB0aGlzLmRhdGFQcm9jZXNzb3JcclxuICAgIClcclxuICAgIHRoaXMubW9kdWxlLmJwcCA9IHRoaXMuc2VsZWN0ZWRcclxuICAgIHRoaXMubW91c2VNb3ZlID0gZnJvbUV2ZW50KHRoaXMuY2FudmFzPy5uYXRpdmVFbGVtZW50LCAnbW91c2Vtb3ZlJylcclxuICAgIHRoaXMubW91c2VNb3ZlLnBpcGUodGhyb3R0bGVUaW1lKDIwMCkpLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5tb3VzZUhlbHBlciAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZUhlbHBlci5tb3VzZW1vdmUoZXZlbnQpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkNvbm5lY3Rpb25TdGF0ZUNoYW5nZSA9IChyZWRpcmVjdG9yOiBhbnksIHN0YXRlOiBudW1iZXIpOiBhbnkgPT4ge1xyXG4gICAgdGhpcy5kZXZpY2VTdGF0ZSA9IHN0YXRlXHJcbiAgICB0aGlzLmRldmljZVN0YXR1cy5lbWl0KHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgb25SZWRpcmVjdG9yRXJyb3IgKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNldCgpXHJcbiAgfVxyXG5cclxuICBpbml0ICgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5zdGFudGlhdGUoKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXV0b0Nvbm5lY3QoKVxyXG4gICAgfSwgNDAwMClcclxuICB9XHJcblxyXG4gIGF1dG9Db25uZWN0ICgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJlZGlyZWN0b3IgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJlZGlyZWN0b3Iuc3RhcnQoV2ViU29ja2V0KVxyXG4gICAgICB0aGlzLmtleWJvYXJkSGVscGVyLkdyYWJLZXlJbnB1dCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkVuY29kaW5nQ2hhbmdlICgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcEt2bSgpXHJcbiAgICB0aW1lcigxMDAwKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmF1dG9Db25uZWN0KClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjaGVja1Bvd2VyU3RhdHVzICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBvd2VyU3RhdGUucG93ZXJzdGF0ZSA9PT0gMlxyXG4gIH1cclxuXHJcbiAgcmVzZXQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICB0aGlzLnJlZGlyZWN0b3IgPSBudWxsXHJcbiAgICB0aGlzLm1vZHVsZSA9IG51bGxcclxuICAgIHRoaXMuZGF0YVByb2Nlc3NvciA9IG51bGxcclxuICAgIHRoaXMuaGVpZ2h0ID0gNDAwXHJcbiAgICB0aGlzLndpZHRoID0gNDAwXHJcbiAgICB0aGlzLmluc3RhbnRpYXRlKClcclxuICB9XHJcblxyXG4gIHN0b3BLdm0gPSAoKTogdm9pZCA9PiB7XHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iuc3RvcCgpXHJcbiAgICB0aGlzLmtleWJvYXJkSGVscGVyLlVuR3JhYktleUlucHV0KClcclxuICAgIHRoaXMucmVzZXQoKVxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZXVwIChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW91c2VIZWxwZXIgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm1vdXNlSGVscGVyLm1vdXNldXAoZXZlbnQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlZG93biAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1vdXNlSGVscGVyICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5tb3VzZUhlbHBlci5tb3VzZWRvd24oZXZlbnQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlbW92ZSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1vdXNlSGVscGVyICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5tb3VzZUhlbHBlci5tb3VzZW1vdmUoZXZlbnQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3BLdm0oKVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2PlxyXG4gIDxjYW52YXNcclxuICAgIGNsYXNzPVwiY2FudmFzXCJcclxuICAgICNjYW52YXNcclxuICAgIFt3aWR0aF09XCJ3aWR0aFwiXHJcbiAgICBbaGVpZ2h0XT1cImhlaWdodFwiXHJcbiAgICBvbmNvbnRleHRtZW51PVwicmV0dXJuIGZhbHNlXCJcclxuICAgIChtb3VzZXVwKT1cIm9uTW91c2V1cCgkZXZlbnQpXCJcclxuICAgIChtb3VzZWRvd24pPVwib25Nb3VzZWRvd24oJGV2ZW50KVwiXHJcbiAgICAobW91c2Vtb3ZlKT1cIm9uTW91c2Vtb3ZlKCRldmVudClcIlxyXG4gID48L2NhbnZhcz5cclxuPC9kaXY+XHJcbiJdfQ==