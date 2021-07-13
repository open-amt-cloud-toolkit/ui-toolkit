import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core'
import { SolComponent } from './sol.component'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
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
})
export class SolModule {
  public static forRoot (param: any): ModuleWithProviders<SolModule> {
    return {
      ngModule: SolModule,
      providers: [
        {
          provide: 'userInput',
          useValue: param
        }
      ]
    }
  }
}
