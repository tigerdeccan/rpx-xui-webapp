import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import { noticeOfActingRouting } from './notice-of-acting.routing';
import * as fromContainers from './containers';
import * as fromComponent from './components';
import * as fromServices from './services';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExuiCommonLibModule } from '@hmcts/rpx-xui-common-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    noticeOfActingRouting,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ExuiCommonLibModule.forChild()
  ],
  exports: [...fromContainers.containers, ...fromComponent.components],
  declarations: [...fromContainers.containers, ...fromComponent.components],
  providers: [...fromServices.services]
})

export class NoticeOfActingModule {

}
