import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KvmComponent } from './kvm.component';
import { HttpClientModule } from '@angular/common/http';
import * as i0 from "@angular/core";
export class KvmModule {
    static forRoot(param) {
        return {
            ngModule: KvmModule,
            providers: [
                {
                    provide: 'userInput',
                    useValue: param
                }
            ]
        };
    }
}
KvmModule.ɵfac = function KvmModule_Factory(t) { return new (t || KvmModule)(); };
KvmModule.ɵmod = i0.ɵɵdefineNgModule({ type: KvmModule });
KvmModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            HttpClientModule,
            FlexLayoutModule,
            BrowserModule,
            BrowserAnimationsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(KvmModule, { declarations: [KvmComponent], imports: [HttpClientModule,
        FlexLayoutModule,
        BrowserModule,
        BrowserAnimationsModule], exports: [KvmComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KvmModule, [{
        type: NgModule,
        args: [{
                declarations: [KvmComponent],
                imports: [
                    HttpClientModule,
                    FlexLayoutModule,
                    BrowserModule,
                    BrowserAnimationsModule
                ],
                exports: [KvmComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ZtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2t2bS9zcmMvbGliL2t2bS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFFBQVEsRUFDUixzQkFBc0IsRUFFdkIsTUFBTSxlQUFlLENBQUE7QUFDdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBQ3pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFBO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTs7QUFhdkQsTUFBTSxPQUFPLFNBQVM7SUFDYixNQUFNLENBQUMsT0FBTyxDQUFFLEtBQVU7UUFDL0IsT0FBTztZQUNMLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsV0FBVztvQkFDcEIsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2FBQ0Y7U0FDRixDQUFBO0lBQ0gsQ0FBQzs7a0VBWFUsU0FBUzs2Q0FBVCxTQUFTO2lEQVZYO1lBQ1AsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsdUJBQXVCO1NBQ3hCO3dGQUtVLFNBQVMsbUJBWEwsWUFBWSxhQUV6QixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYix1QkFBdUIsYUFFZixZQUFZO3VGQUlYLFNBQVM7Y0FackIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUVsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgTmdNb2R1bGUsXHJcbiAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSxcclxuICBNb2R1bGVXaXRoUHJvdmlkZXJzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInXHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJ1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnXHJcbmltcG9ydCB7IEt2bUNvbXBvbmVudCB9IGZyb20gJy4va3ZtLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0t2bUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtLdm1Db21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEt2bU1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290IChwYXJhbTogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxLdm1Nb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBLdm1Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6ICd1c2VySW5wdXQnLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IHBhcmFtXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==