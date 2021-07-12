import { ModuleWithProviders, NgModule } from '@angular/core'
import { SolComponent } from './sol.component'

@NgModule({
  declarations: [
    SolComponent
  ],
  imports: [
  ],
  exports: [
    SolComponent
  ]
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
