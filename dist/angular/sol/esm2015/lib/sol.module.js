import { NgModule } from '@angular/core';
import { SolComponent } from './sol.component';
import * as i0 from "@angular/core";
export class SolModule {
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
SolModule.ɵmod = i0.ɵɵdefineNgModule({ type: SolModule });
SolModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SolModule, { declarations: [SolComponent], exports: [SolComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SolModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SolComponent
                ],
                imports: [],
                exports: [
                    SolComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3Byb2plY3RzL3NvbC9zcmMvbGliL3NvbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBOztBQVk5QyxNQUFNLE9BQU8sU0FBUztJQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUUsS0FBVTtRQUMvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxXQUFXO29CQUNwQixRQUFRLEVBQUUsS0FBSztpQkFDaEI7YUFDRjtTQUNGLENBQUE7SUFDSCxDQUFDOztrRUFYVSxTQUFTOzZDQUFULFNBQVM7aURBTlgsRUFDUjt3RkFLVSxTQUFTLG1CQVJsQixZQUFZLGFBS1osWUFBWTt1RkFHSCxTQUFTO2NBVnJCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsRUFDUjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgU29sQ29tcG9uZW50IH0gZnJvbSAnLi9zb2wuY29tcG9uZW50J1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTb2xDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU29sQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU29sTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290IChwYXJhbTogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxTb2xNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNvbE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogJ3VzZXJJbnB1dCcsXG4gICAgICAgICAgdXNlVmFsdWU6IHBhcmFtXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdfQ==