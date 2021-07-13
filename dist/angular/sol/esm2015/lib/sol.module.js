import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SolComponent } from './sol.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
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
SolModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            HttpClientModule,
            FlexLayoutModule,
            BrowserModule,
            BrowserAnimationsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SolModule, { declarations: [SolComponent], imports: [HttpClientModule,
        FlexLayoutModule,
        BrowserModule,
        BrowserAnimationsModule], exports: [SolComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SolModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3Byb2plY3RzL3NvbC9zcmMvbGliL3NvbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQTtBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQTtBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTtBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTs7QUFpQnZELE1BQU0sT0FBTyxTQUFTO0lBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBRSxLQUFVO1FBQy9CLE9BQU87WUFDTCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFFBQVEsRUFBRSxLQUFLO2lCQUNoQjthQUNGO1NBQ0YsQ0FBQTtJQUNILENBQUM7O2tFQVhVLFNBQVM7NkNBQVQsU0FBUztpREFYWDtZQUNQLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLHVCQUF1QjtTQUN4Qjt3RkFNVSxTQUFTLG1CQWJsQixZQUFZLGFBR1osZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsdUJBQXVCLGFBR3ZCLFlBQVk7dUZBSUgsU0FBUztjQWZyQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBTb2xDb21wb25lbnQgfSBmcm9tICcuL3NvbC5jb21wb25lbnQnXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcidcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJ1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0J1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTb2xDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRmxleExheW91dE1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTb2xDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFNvbE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCAocGFyYW06IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U29sTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTb2xNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICd1c2VySW5wdXQnLFxuICAgICAgICAgIHVzZVZhbHVlOiBwYXJhbVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG59XG4iXX0=