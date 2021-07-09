import { Component, EventEmitter, Inject, Input, Output, ViewChild } from '@angular/core';
import { AMTDesktop, AMTKvmDataRedirector, ConsoleLogger, DataProcessor, KeyBoardHelper, MouseHelper, Protocol } from '@open-amt-cloud-toolkit/ui-toolkit/core';
import { fromEvent, timer } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = ["canvas"];
const _c1 = ["device"];
export class KvmComponent {
    constructor(params, activatedRoute) {
        this.params = params;
        this.activatedRoute = activatedRoute;
        // //setting a width and height for the canvas
        this.width = 400;
        this.height = 400;
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
            return this.params.mpsServer.replace('http', 'ws');
        };
        this.onConnectionStateChange = (redirector, state) => {
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
        this.token = localStorage.getItem('loggedInUser');
        this.server = `${this.urlConstructor()}/relay`;
        this.mpsServer = this.params.mpsServer.includes('/mps');
        if (this.mpsServer) {
            // handles kong route
            this.server = `${this.urlConstructor()}/ws/relay`;
        }
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.deviceId = params.id;
        });
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
        this.redirector = new AMTKvmDataRedirector(this.logger, Protocol.KVM, new FileReader(), this.deviceId, 16994, '', '', 0, 0, JSON.parse(this.token).token, this.server);
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
KvmComponent.ɵfac = function KvmComponent_Factory(t) { return new (t || KvmComponent)(i0.ɵɵdirectiveInject('userInput'), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
KvmComponent.ɵcmp = i0.ɵɵdefineComponent({ type: KvmComponent, selectors: [["amt-kvm"]], viewQuery: function KvmComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvas = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.device = _t.first);
    } }, inputs: { width: "width", height: "height", deviceConnection: "deviceConnection", selectedEncoding: "selectedEncoding" }, outputs: { deviceStatus: "deviceStatus" }, decls: 3, vars: 2, consts: [["oncontextmenu", "return false", 1, "canvas", 3, "width", "height", "mouseup", "mousedown", "mousemove"], ["canvas", ""]], template: function KvmComponent_Template(rf, ctx) { if (rf & 1) {
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
            }] }, { type: i1.ActivatedRoute }]; }, { canvas: [{
            type: ViewChild,
            args: ['canvas', { static: false }]
        }], device: [{
            type: ViewChild,
            args: ['device', { static: false }]
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], deviceStatus: [{
            type: Output
        }], deviceConnection: [{
            type: Input
        }], selectedEncoding: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ZtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3Byb2plY3RzL2t2bS9zcmMvbGliL2t2bS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvYW5ndWxhci9wcm9qZWN0cy9rdm0vc3JjL2xpYi9rdm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFBO0FBQ3RCLE9BQU8sRUFDTCxVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixhQUFhLEVBR2IsY0FBYyxFQUNkLFdBQVcsRUFDWCxRQUFRLEVBQ1QsTUFBTSx5Q0FBeUMsQ0FBQTtBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQTtBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7Ozs7O0FBUTdDLE1BQU0sT0FBTyxZQUFZO0lBK0J2QixZQUF5QyxNQUFNLEVBQVMsY0FBOEI7UUFBN0MsV0FBTSxHQUFOLE1BQU0sQ0FBQTtRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTFCdEYsOENBQThDO1FBRTlCLFVBQUssR0FBRyxHQUFHLENBQUE7UUFDWCxXQUFNLEdBQUcsR0FBRyxDQUFBO1FBQ2xCLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUE7UUFDaEUscUJBQWdCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUE7UUFDckUscUJBQWdCLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUE7UUFRNUUsZUFBVSxHQUFRLENBQUMsQ0FBQTtRQUNuQixhQUFRLEdBQVcsRUFBRSxDQUFBO1FBQ3JCLGFBQVEsR0FBVyxDQUFDLENBQUE7UUFFcEIsV0FBTSxHQUFXLEVB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RUE3S1UsWUFBWSx1QkErQkYsV0FBVztpREEvQnJCLFlBQVk7Ozs7Ozs7O1FDaEN6QiwyQkFBSztRQUNILG9DQVNDO1FBSEMsbUdBQVcscUJBQWlCLElBQUMsMEZBQ2hCLHVCQUFtQixJQURILDBGQUVoQix1QkFBbUIsSUFGSDtRQUc5QixpQkFBUztRQUNaLGlCQUFNOztRQVBGLGVBQWU7UUFBZixpQ0FBZSxzQkFBQTs7dUZENEJOLFlBQVk7Y0FMeEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO2dCQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNuQzs7c0JBZ0NlLE1BQU07dUJBQUMsV0FBVztxREE5QlEsTUFBTTtrQkFBN0MsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ0UsTUFBTTtrQkFBN0MsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBS3RCLEtBQUs7a0JBQXBCLEtBQUs7WUFDVSxNQUFNO2tCQUFyQixLQUFLO1lBQ0ksWUFBWTtrQkFBckIsTUFBTTtZQUNFLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7XHJcbiAgQU1URGVza3RvcCxcclxuICBBTVRLdm1EYXRhUmVkaXJlY3RvcixcclxuICBDb25zb2xlTG9nZ2VyLFxyXG4gIERhdGFQcm9jZXNzb3IsXHJcbiAgSURhdGFQcm9jZXNzb3IsXHJcbiAgSUxvZ2dlcixcclxuICBLZXlCb2FyZEhlbHBlcixcclxuICBNb3VzZUhlbHBlcixcclxuICBQcm90b2NvbFxyXG59IGZyb20gJ0BvcGVuLWFtdC1jbG91ZC10b29sa2l0L3VpLXRvb2xraXQvY29yZSdcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCB0aW1lciB9IGZyb20gJ3J4anMnXHJcbmltcG9ydCB7IHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW10LWt2bScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2t2bS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4va3ZtLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgS3ZtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbnZhcycsIHsgc3RhdGljOiBmYWxzZSB9KSBjYW52YXM6IEVsZW1lbnRSZWYgfCB1bmRlZmluZWRcclxuICBAVmlld0NoaWxkKCdkZXZpY2UnLCB7IHN0YXRpYzogZmFsc2UgfSkgZGV2aWNlOiBzdHJpbmdcclxuICBwdWJsaWMgY29udGV4dCE6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxyXG5cclxuICAvLyAvL3NldHRpbmcgYSB3aWR0aCBhbmQgaGVpZ2h0IGZvciB0aGUgY2FudmFzXHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyB3aWR0aCA9IDQwMFxyXG4gIEBJbnB1dCgpIHB1YmxpYyBoZWlnaHQgPSA0MDBcclxuICBAT3V0cHV0KCkgZGV2aWNlU3RhdHVzOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpXHJcbiAgQElucHV0KCkgZGV2aWNlQ29ubmVjdGlvbjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpXHJcbiAgQElucHV0KCkgc2VsZWN0ZWRFbmNvZGluZzogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKVxyXG4gIHRva2VuOiBhbnlcclxuICBtb2R1bGU6IGFueVxyXG4gIHJlZGlyZWN0b3I6IGFueVxyXG4gIGRhdGFQcm9jZXNzb3IhOiBJRGF0YVByb2Nlc3NvciB8IG51bGxcclxuICBtb3VzZUhlbHBlciE6IE1vdXNlSGVscGVyXHJcbiAga2V5Ym9hcmRIZWxwZXIhOiBLZXlCb2FyZEhlbHBlclxyXG4gIGxvZ2dlciE6IElMb2dnZXJcclxuICBwb3dlclN0YXRlOiBhbnkgPSAwXHJcbiAgZGV2aWNlSWQ6IHN0cmluZyA9ICcnXHJcbiAgc2VsZWN0ZWQ6IG51bWJlciA9IDFcclxuICB0aW1lSW50ZXJ2YWwhOiBhbnlcclxuICBzZXJ2ZXI6IHN0cmluZyA9ICcnXHJcbiAgbW91c2VNb3ZlOiBhbnkgPSBudWxsXHJcbiAgbXBzU2VydmVyOiBib29sZWFuXHJcbiAgZW5jb2RpbmdzID0gW1xyXG4gICAgeyB2YWx1ZTogMSwgdmlld1ZhbHVlOiAnUkxFIDgnIH0sXHJcbiAgICB7IHZhbHVlOiAyLCB2aWV3VmFsdWU6ICdSTEUgMTYnIH1cclxuICBdXHJcblxyXG4gIGNvbnN0cnVjdG9yIChASW5qZWN0KCd1c2VySW5wdXQnKSBwdWJsaWMgcGFyYW1zLCBwdWJsaWMgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICB0aGlzLnRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2dlZEluVXNlcicpXHJcbiAgICB0aGlzLnNlcnZlciA9IGAke3RoaXMudXJsQ29uc3RydWN0b3IoKX0vcmVsYXlgXHJcbiAgICB0aGlzLm1wc1NlcnZlciA9IHRoaXMucGFyYW1zLm1wc1NlcnZlci5pbmNsdWRlcygnL21wcycpXHJcbiAgICBpZiAodGhpcy5tcHNTZXJ2ZXIpIHtcclxuICAgICAgLy8gaGFuZGxlcyBrb25nIHJvdXRlXHJcbiAgICAgIHRoaXMuc2VydmVyID0gYCR7dGhpcy51cmxDb25zdHJ1Y3RvcigpfS93cy9yZWxheWBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVybENvbnN0cnVjdG9yID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJhbXMubXBzU2VydmVyLnJlcGxhY2UoJ2h0dHAnLCAnd3MnKVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQgKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgIHRoaXMuZGV2aWNlSWQgPSBwYXJhbXMuaWRcclxuICAgIH0pXHJcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBDb25zb2xlTG9nZ2VyKDEpXHJcbiAgICB0aGlzLmRldmljZUNvbm5lY3Rpb24uc3Vic2NyaWJlKChkYXRhOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN0b3BLdm0oKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZWxlY3RlZEVuY29kaW5nLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkID0gZGF0YVxyXG4gICAgICB0aGlzLm9uRW5jb2RpbmdDaGFuZ2UoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXQoKVxyXG4gIH1cclxuXHJcbiAgaW5zdGFudGlhdGUgKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXM/Lm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKVxyXG4gICAgdGhpcy5yZWRpcmVjdG9yID0gbmV3IEFNVEt2bURhdGFSZWRpcmVjdG9yKFxyXG4gICAgICB0aGlzLmxvZ2dlcixcclxuICAgICAgUHJvdG9jb2wuS1ZNLFxyXG4gICAgICBuZXcgRmlsZVJlYWRlcigpLFxyXG4gICAgICB0aGlzLmRldmljZUlkLFxyXG4gICAgICAxNjk5NCxcclxuICAgICAgJycsXHJcbiAgICAgICcnLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBKU09OLnBhcnNlKHRoaXMudG9rZW4pLnRva2VuLFxyXG4gICAgICB0aGlzLnNlcnZlclxyXG4gICAgKVxyXG4gICAgdGhpcy5tb2R1bGUgPSBuZXcgQU1URGVza3RvcCh0aGlzLmxvZ2dlciBhcyBhbnksIHRoaXMuY29udGV4dClcclxuICAgIHRoaXMuZGF0YVByb2Nlc3NvciA9IG5ldyBEYXRhUHJvY2Vzc29yKFxyXG4gICAgICB0aGlzLmxvZ2dlcixcclxuICAgICAgdGhpcy5yZWRpcmVjdG9yLFxyXG4gICAgICB0aGlzLm1vZHVsZVxyXG4gICAgKVxyXG4gICAgdGhpcy5tb3VzZUhlbHBlciA9IG5ldyBNb3VzZUhlbHBlcih0aGlzLm1vZHVsZSwgdGhpcy5yZWRpcmVjdG9yLCAyMDApXHJcbiAgICB0aGlzLmtleWJvYXJkSGVscGVyID0gbmV3IEtleUJvYXJkSGVscGVyKHRoaXMubW9kdWxlLCB0aGlzLnJlZGlyZWN0b3IpXHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25Qcm9jZXNzRGF0YSA9IHRoaXMubW9kdWxlLnByb2Nlc3NEYXRhLmJpbmQodGhpcy5tb2R1bGUpXHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25TdGFydCA9IHRoaXMubW9kdWxlLnN0YXJ0LmJpbmQodGhpcy5tb2R1bGUpXHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25OZXdTdGF0ZSA9IHRoaXMubW9kdWxlLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzLm1vZHVsZSlcclxuICAgIHRoaXMucmVkaXJlY3Rvci5vblNlbmRLdm1EYXRhID0gdGhpcy5tb2R1bGUub25TZW5kS3ZtRGF0YS5iaW5kKHRoaXMubW9kdWxlKVxyXG4gICAgdGhpcy5yZWRpcmVjdG9yLm9uU3RhdGVDaGFuZ2VkID0gdGhpcy5vbkNvbm5lY3Rpb25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25FcnJvciA9IHRoaXMub25SZWRpcmVjdG9yRXJyb3IuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5tb2R1bGUub25TZW5kID0gdGhpcy5yZWRpcmVjdG9yLnNlbmQuYmluZCh0aGlzLnJlZGlyZWN0b3IpXHJcbiAgICB0aGlzLm1vZHVsZS5vblByb2Nlc3NEYXRhID0gdGhpcy5kYXRhUHJvY2Vzc29yLnByb2Nlc3NEYXRhLmJpbmQoXHJcbiAgICAgIHRoaXMuZGF0YVByb2Nlc3NvclxyXG4gICAgKVxyXG4gICAgdGhpcy5tb2R1bGUuYnBwID0gdGhpcy5zZWxlY3RlZFxyXG4gICAgdGhpcy5tb3VzZU1vdmUgPSBmcm9tRXZlbnQodGhpcy5jYW52YXM/Lm5hdGl2ZUVsZW1lbnQsICdtb3VzZW1vdmUnKVxyXG4gICAgdGhpcy5tb3VzZU1vdmUucGlwZSh0aHJvdHRsZVRpbWUoMjAwKSkuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm1vdXNlSGVscGVyICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLm1vdXNlSGVscGVyLm1vdXNlbW92ZShldmVudClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uQ29ubmVjdGlvblN0YXRlQ2hhbmdlID0gKHJlZGlyZWN0b3I6IGFueSwgc3RhdGU6IG51bWJlcik6IGFueSA9PiB7XHJcbiAgICB0aGlzLmRldmljZVN0YXR1cy5lbWl0KHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgb25SZWRpcmVjdG9yRXJyb3IgKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNldCgpXHJcbiAgfVxyXG5cclxuICBpbml0ICgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5zdGFudGlhdGUoKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXV0b0Nvbm5lY3QoKVxyXG4gICAgfSwgNDAwMClcclxuICB9XHJcblxyXG4gIGF1dG9Db25uZWN0ICgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJlZGlyZWN0b3IgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJlZGlyZWN0b3Iuc3RhcnQoV2ViU29ja2V0KVxyXG4gICAgICB0aGlzLmtleWJvYXJkSGVscGVyLkdyYWJLZXlJbnB1dCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkVuY29kaW5nQ2hhbmdlICgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcEt2bSgpXHJcbiAgICB0aW1lcigxMDAwKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmF1dG9Db25uZWN0KClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXNldCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHRoaXMucmVkaXJlY3RvciA9IG51bGxcclxuICAgIHRoaXMubW9kdWxlID0gbnVsbFxyXG4gICAgdGhpcy5kYXRhUHJvY2Vzc29yID0gbnVsbFxyXG4gICAgdGhpcy5oZWlnaHQgPSA0MDBcclxuICAgIHRoaXMud2lkdGggPSA0MDBcclxuICAgIHRoaXMuaW5zdGFudGlhdGUoKVxyXG4gIH1cclxuXHJcbiAgc3RvcEt2bSA9ICgpOiB2b2lkID0+IHtcclxuICAgIHRoaXMucmVkaXJlY3Rvci5zdG9wKClcclxuICAgIHRoaXMua2V5Ym9hcmRIZWxwZXIuVW5HcmFiS2V5SW5wdXQoKVxyXG4gICAgdGhpcy5yZXNldCgpXHJcbiAgfVxyXG5cclxuICBvbk1vdXNldXAgKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb3VzZUhlbHBlciAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMubW91c2VIZWxwZXIubW91c2V1cChldmVudClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTW91c2Vkb3duIChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW91c2VIZWxwZXIgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm1vdXNlSGVscGVyLm1vdXNlZG93bihldmVudClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTW91c2Vtb3ZlIChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW91c2VIZWxwZXIgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm1vdXNlSGVscGVyLm1vdXNlbW92ZShldmVudClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95ICgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcEt2bSgpXHJcbiAgfVxyXG59XHJcbiIsIjxkaXY+XHJcbiAgPGNhbnZhc1xyXG4gICAgY2xhc3M9XCJjYW52YXNcIlxyXG4gICAgI2NhbnZhc1xyXG4gICAgW3dpZHRoXT1cIndpZHRoXCJcclxuICAgIFtoZWlnaHRdPVwiaGVpZ2h0XCJcclxuICAgIG9uY29udGV4dG1lbnU9XCJyZXR1cm4gZmFsc2VcIlxyXG4gICAgKG1vdXNldXApPVwib25Nb3VzZXVwKCRldmVudClcIlxyXG4gICAgKG1vdXNlZG93bik9XCJvbk1vdXNlZG93bigkZXZlbnQpXCJcclxuICAgIChtb3VzZW1vdmUpPVwib25Nb3VzZW1vdmUoJGV2ZW50KVwiXHJcbiAgPjwvY2FudmFzPlxyXG48L2Rpdj5cclxuIl19