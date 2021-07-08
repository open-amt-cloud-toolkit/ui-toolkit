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
            return this.params.mpsServer.replace('http', 'ws');
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
        this.token = localStorage.getItem('loggedInUser');
        this.deviceId = window.location.pathname.split('/')[2];
        this.server = `${this.urlConstructor()}/relay`;
        this.mpsServer = this.params.mpsServer.includes('/mps');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ZtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3Byb2plY3RzL2t2bS9zcmMvbGliL2t2bS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvYW5ndWxhci9wcm9qZWN0cy9rdm0vc3JjL2xpYi9rdm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFBO0FBQ3RCLE9BQU8sRUFDTCxVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixhQUFhLEVBR2IsY0FBYyxFQUNkLFdBQVcsRUFDWCxRQUFRLEVBQ1QsTUFBTSx5Q0FBeUMsQ0FBQTtBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQTtBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7OztBQU83QyxNQUFNLE9BQU8sWUFBWTtJQStCdkIsWUFBeUMsTUFBTTtRQUFOLFdBQU0sR0FBTixNQUFNLENBQUE7UUEzQi9DLDhDQUE4QztRQUU5QixVQUFLLEdBQUcsR0FBRyxDQUFBO1FBQ1gsV0FBTSxHQUFHLEdBQUcsQ0FBQTtRQUNsQixnQkFBVyxHQUFXLENBQUMsQ0FBQTtRQUN2QixpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFBO1FBQ2hFLHFCQUFnQixHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFBO1FBQ3JFLHFCQUFnQixHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFBO1FBUTVFLGVBQVUsR0FBUSxDQUFDLENBQUE7UUFDbkIsYUFBUSxHQUFXLEVBQUUsQ0FBQTtRQUNyQixhQUFRLEdBQVcsQ0FBQyxDQUFBO1FBRXBCLFdBQU0sR0FBVyxFQUFFLENBQUE7UUFDbkIs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O0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEIsQ0FBQzs7d0VBakxVLFlBQVksdUJBK0JGLFdBQVc7aURBL0JyQixZQUFZOzs7Ozs7UUMvQnpCLDJCQUFLO1FBQ0gsb0NBU0M7UUFIQyxtR0FBVyxxQkFBaUIsSUFBQywwRkFDaEIsdUJBQW1CLElBREgsMEZBRWhCLHVCQUFtQixJQUZIO1FBRzlCLGlCQUFTO1FBQ1osaUJBQU07O1FBUEYsZUFBZTtRQUFmLGlDQUFlLHNCQUFBOzt1RkQyQk4sWUFBWTtjQUx4QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFdBQVcsRUFBRSxzQkFBc0I7Z0JBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ25DOztzQkFnQ2UsTUFBTTt1QkFBQyxXQUFXO3dCQTlCUSxNQUFNO2tCQUE3QyxTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFLdEIsS0FBSztrQkFBcEIsS0FBSztZQUNVLE1BQU07a0JBQXJCLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNFLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7XHJcbiAgQU1URGVza3RvcCxcclxuICBBTVRLdm1EYXRhUmVkaXJlY3RvcixcclxuICBDb25zb2xlTG9nZ2VyLFxyXG4gIERhdGFQcm9jZXNzb3IsXHJcbiAgSURhdGFQcm9jZXNzb3IsXHJcbiAgSUxvZ2dlcixcclxuICBLZXlCb2FyZEhlbHBlcixcclxuICBNb3VzZUhlbHBlcixcclxuICBQcm90b2NvbFxyXG59IGZyb20gJ0BvcGVuLWFtdC1jbG91ZC10b29sa2l0L3VpLXRvb2xraXQvY29yZSdcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCB0aW1lciB9IGZyb20gJ3J4anMnXHJcbmltcG9ydCB7IHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhbXQta3ZtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4va3ZtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9rdm0uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLdm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnY2FudmFzJywgeyBzdGF0aWM6IGZhbHNlIH0pIGNhbnZhczogRWxlbWVudFJlZiB8IHVuZGVmaW5lZFxyXG4gIHB1YmxpYyBjb250ZXh0ITogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXHJcblxyXG4gIC8vIC8vc2V0dGluZyBhIHdpZHRoIGFuZCBoZWlnaHQgZm9yIHRoZSBjYW52YXNcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHdpZHRoID0gNDAwXHJcbiAgQElucHV0KCkgcHVibGljIGhlaWdodCA9IDQwMFxyXG4gIEBPdXRwdXQoKSBkZXZpY2VTdGF0ZTogbnVtYmVyID0gMFxyXG4gIEBPdXRwdXQoKSBkZXZpY2VTdGF0dXM6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KClcclxuICBASW5wdXQoKSBkZXZpY2VDb25uZWN0aW9uOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KClcclxuICBASW5wdXQoKSBzZWxlY3RlZEVuY29kaW5nOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpXHJcbiAgdG9rZW46IGFueVxyXG4gIG1vZHVsZTogYW55XHJcbiAgcmVkaXJlY3RvcjogYW55XHJcbiAgZGF0YVByb2Nlc3NvciE6IElEYXRhUHJvY2Vzc29yIHwgbnVsbFxyXG4gIG1vdXNlSGVscGVyITogTW91c2VIZWxwZXJcclxuICBrZXlib2FyZEhlbHBlciE6IEtleUJvYXJkSGVscGVyXHJcbiAgbG9nZ2VyITogSUxvZ2dlclxyXG4gIHBvd2VyU3RhdGU6IGFueSA9IDBcclxuICBkZXZpY2VJZDogc3RyaW5nID0gJydcclxuICBzZWxlY3RlZDogbnVtYmVyID0gMVxyXG4gIHRpbWVJbnRlcnZhbCE6IGFueVxyXG4gIHNlcnZlcjogc3RyaW5nID0gJydcclxuICBtb3VzZU1vdmU6IGFueSA9IG51bGxcclxuICBtcHNTZXJ2ZXI6IGJvb2xlYW5cclxuICBlbmNvZGluZ3MgPSBbXHJcbiAgICB7IHZhbHVlOiAxLCB2aWV3VmFsdWU6ICdSTEUgOCcgfSxcclxuICAgIHsgdmFsdWU6IDIsIHZpZXdWYWx1ZTogJ1JMRSAxNicgfVxyXG4gIF1cclxuXHJcbiAgY29uc3RydWN0b3IgKEBJbmplY3QoJ3VzZXJJbnB1dCcpIHB1YmxpYyBwYXJhbXMpIHtcclxuICAgIHRoaXMudG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkSW5Vc2VyJylcclxuICAgIHRoaXMuZGV2aWNlSWQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsyXVxyXG4gICAgdGhpcy5zZXJ2ZXIgPSBgJHt0aGlzLnVybENvbnN0cnVjdG9yKCl9L3JlbGF5YFxyXG4gICAgdGhpcy5tcHNTZXJ2ZXIgPSB0aGlzLnBhcmFtcy5tcHNTZXJ2ZXIuaW5jbHVkZXMoJy9tcHMnKVxyXG4gICAgaWYgKHRoaXMubXBzU2VydmVyKSB7XHJcbiAgICAgIC8vIGhhbmRsZXMga29uZyByb3V0ZVxyXG4gICAgICB0aGlzLnNlcnZlciA9IGAke3RoaXMudXJsQ29uc3RydWN0b3IoKX0vd3MvcmVsYXlgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cmxDb25zdHJ1Y3RvciA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyYW1zLm1wc1NlcnZlci5yZXBsYWNlKCdodHRwJywgJ3dzJylcclxuICB9XHJcblxyXG4gIG5nT25Jbml0ICgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nZ2VyID0gbmV3IENvbnNvbGVMb2dnZXIoMSlcclxuICAgIHRoaXMuZGV2aWNlQ29ubmVjdGlvbi5zdWJzY3JpYmUoKGRhdGE6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3RvcEt2bSgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICB0aGlzLnNlbGVjdGVkRW5jb2Rpbmcuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRhXHJcbiAgICAgIHRoaXMub25FbmNvZGluZ0NoYW5nZSgpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0ICgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdCgpXHJcbiAgfVxyXG5cclxuICBpbnN0YW50aWF0ZSAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcz8ubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpXHJcbiAgICB0aGlzLnJlZGlyZWN0b3IgPSBuZXcgQU1US3ZtRGF0YVJlZGlyZWN0b3IoXHJcbiAgICAgIHRoaXMubG9nZ2VyLFxyXG4gICAgICBQcm90b2NvbC5LVk0sXHJcbiAgICAgIG5ldyBGaWxlUmVhZGVyKCksXHJcbiAgICAgIHRoaXMuZGV2aWNlSWQsXHJcbiAgICAgIDE2OTk0LFxyXG4gICAgICAnJyxcclxuICAgICAgJycsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIEpTT04ucGFyc2UodGhpcy50b2tlbikudG9rZW4sXHJcbiAgICAgIHRoaXMuc2VydmVyXHJcbiAgICApXHJcbiAgICB0aGlzLm1vZHVsZSA9IG5ldyBBTVREZXNrdG9wKHRoaXMubG9nZ2VyIGFzIGFueSwgdGhpcy5jb250ZXh0KVxyXG4gICAgdGhpcy5kYXRhUHJvY2Vzc29yID0gbmV3IERhdGFQcm9jZXNzb3IoXHJcbiAgICAgIHRoaXMubG9nZ2VyLFxyXG4gICAgICB0aGlzLnJlZGlyZWN0b3IsXHJcbiAgICAgIHRoaXMubW9kdWxlXHJcbiAgICApXHJcbiAgICB0aGlzLm1vdXNlSGVscGVyID0gbmV3IE1vdXNlSGVscGVyKHRoaXMubW9kdWxlLCB0aGlzLnJlZGlyZWN0b3IsIDIwMClcclxuICAgIHRoaXMua2V5Ym9hcmRIZWxwZXIgPSBuZXcgS2V5Qm9hcmRIZWxwZXIodGhpcy5tb2R1bGUsIHRoaXMucmVkaXJlY3RvcilcclxuXHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25Qcm9jZXNzRGF0YSA9IHRoaXMubW9kdWxlLnByb2Nlc3NEYXRhLmJpbmQodGhpcy5tb2R1bGUpXHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25TdGFydCA9IHRoaXMubW9kdWxlLnN0YXJ0LmJpbmQodGhpcy5tb2R1bGUpXHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25OZXdTdGF0ZSA9IHRoaXMubW9kdWxlLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzLm1vZHVsZSlcclxuICAgIHRoaXMucmVkaXJlY3Rvci5vblNlbmRLdm1EYXRhID0gdGhpcy5tb2R1bGUub25TZW5kS3ZtRGF0YS5iaW5kKHRoaXMubW9kdWxlKVxyXG4gICAgdGhpcy5yZWRpcmVjdG9yLm9uU3RhdGVDaGFuZ2VkID0gdGhpcy5vbkNvbm5lY3Rpb25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnJlZGlyZWN0b3Iub25FcnJvciA9IHRoaXMub25SZWRpcmVjdG9yRXJyb3IuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5tb2R1bGUub25TZW5kID0gdGhpcy5yZWRpcmVjdG9yLnNlbmQuYmluZCh0aGlzLnJlZGlyZWN0b3IpXHJcbiAgICB0aGlzLm1vZHVsZS5vblByb2Nlc3NEYXRhID0gdGhpcy5kYXRhUHJvY2Vzc29yLnByb2Nlc3NEYXRhLmJpbmQoXHJcbiAgICAgIHRoaXMuZGF0YVByb2Nlc3NvclxyXG4gICAgKVxyXG4gICAgdGhpcy5tb2R1bGUuYnBwID0gdGhpcy5zZWxlY3RlZFxyXG4gICAgdGhpcy5tb3VzZU1vdmUgPSBmcm9tRXZlbnQodGhpcy5jYW52YXM/Lm5hdGl2ZUVsZW1lbnQsICdtb3VzZW1vdmUnKVxyXG4gICAgdGhpcy5tb3VzZU1vdmUucGlwZSh0aHJvdHRsZVRpbWUoMjAwKSkuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm1vdXNlSGVscGVyICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLm1vdXNlSGVscGVyLm1vdXNlbW92ZShldmVudClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uQ29ubmVjdGlvblN0YXRlQ2hhbmdlID0gKHJlZGlyZWN0b3I6IGFueSwgc3RhdGU6IG51bWJlcik6IGFueSA9PiB7XHJcbiAgICB0aGlzLmRldmljZVN0YXRlID0gc3RhdGVcclxuICAgIHRoaXMuZGV2aWNlU3RhdHVzLmVtaXQoc3RhdGUpXHJcbiAgfVxyXG5cclxuICBvblJlZGlyZWN0b3JFcnJvciAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0KClcclxuICB9XHJcblxyXG4gIGluaXQgKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnN0YW50aWF0ZSgpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hdXRvQ29ubmVjdCgpXHJcbiAgICB9LCA0MDAwKVxyXG4gIH1cclxuXHJcbiAgYXV0b0Nvbm5lY3QgKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucmVkaXJlY3RvciAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMucmVkaXJlY3Rvci5zdGFydChXZWJTb2NrZXQpXHJcbiAgICAgIHRoaXMua2V5Ym9hcmRIZWxwZXIuR3JhYktleUlucHV0KClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRW5jb2RpbmdDaGFuZ2UgKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdG9wS3ZtKClcclxuICAgIHRpbWVyKDEwMDApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXV0b0Nvbm5lY3QoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNoZWNrUG93ZXJTdGF0dXMgKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucG93ZXJTdGF0ZS5wb3dlcnN0YXRlID09PSAyXHJcbiAgfVxyXG5cclxuICByZXNldCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHRoaXMucmVkaXJlY3RvciA9IG51bGxcclxuICAgIHRoaXMubW9kdWxlID0gbnVsbFxyXG4gICAgdGhpcy5kYXRhUHJvY2Vzc29yID0gbnVsbFxyXG4gICAgdGhpcy5oZWlnaHQgPSA0MDBcclxuICAgIHRoaXMud2lkdGggPSA0MDBcclxuICAgIHRoaXMuaW5zdGFudGlhdGUoKVxyXG4gIH1cclxuXHJcbiAgc3RvcEt2bSA9ICgpOiB2b2lkID0+IHtcclxuICAgIHRoaXMucmVkaXJlY3Rvci5zdG9wKClcclxuICAgIHRoaXMua2V5Ym9hcmRIZWxwZXIuVW5HcmFiS2V5SW5wdXQoKVxyXG4gICAgdGhpcy5yZXNldCgpXHJcbiAgfVxyXG5cclxuICBvbk1vdXNldXAgKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb3VzZUhlbHBlciAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMubW91c2VIZWxwZXIubW91c2V1cChldmVudClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTW91c2Vkb3duIChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW91c2VIZWxwZXIgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm1vdXNlSGVscGVyLm1vdXNlZG93bihldmVudClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTW91c2Vtb3ZlIChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW91c2VIZWxwZXIgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm1vdXNlSGVscGVyLm1vdXNlbW92ZShldmVudClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95ICgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcEt2bSgpXHJcbiAgfVxyXG59XHJcbiIsIjxkaXY+XHJcbiAgPGNhbnZhc1xyXG4gICAgY2xhc3M9XCJjYW52YXNcIlxyXG4gICAgI2NhbnZhc1xyXG4gICAgW3dpZHRoXT1cIndpZHRoXCJcclxuICAgIFtoZWlnaHRdPVwiaGVpZ2h0XCJcclxuICAgIG9uY29udGV4dG1lbnU9XCJyZXR1cm4gZmFsc2VcIlxyXG4gICAgKG1vdXNldXApPVwib25Nb3VzZXVwKCRldmVudClcIlxyXG4gICAgKG1vdXNlZG93bik9XCJvbk1vdXNlZG93bigkZXZlbnQpXCJcclxuICAgIChtb3VzZW1vdmUpPVwib25Nb3VzZW1vdmUoJGV2ZW50KVwiXHJcbiAgPjwvY2FudmFzPlxyXG48L2Rpdj5cclxuIl19