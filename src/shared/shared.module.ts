import { NgModule } from '@angular/core'
import {GovUiModule} from '../../projects/gov-ui/src/lib/gov-ui.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule( {
  imports: [
    ReactiveFormsModule,
    GovUiModule
  ],
  exports: [
    ReactiveFormsModule,
    GovUiModule,
  ],
  providers: [
  ]
})
export class SharedModule {
}
