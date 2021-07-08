import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders
} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'
import { KvmComponent } from './kvm.component'
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [KvmComponent],
  imports: [
    HttpClientModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [KvmComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class KvmModule {
  public static forRoot (param: any): ModuleWithProviders<KvmModule> {
    return {
      ngModule: KvmModule,
      providers: [
        {
          provide: 'userInput',
          useValue: param
        }
      ]
    }
  }
}
