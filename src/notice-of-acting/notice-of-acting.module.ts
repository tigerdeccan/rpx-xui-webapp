import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { noticeOfActingRouting } from './notice-of-acting.routing';
import * as fromContainers from './containers';
import * as fromComponent from './components';
import * as fromServices from './services';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExuiCommonLibModule } from '@hmcts/rpx-xui-common-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    noticeOfActingRouting,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ExuiCommonLibModule.forChild(),
    StoreModule.forFeature('noticeOfActing', reducers),
  ],
  exports: [...fromContainers.containers, ...fromComponent.components],
  declarations: [...fromContainers.containers, ...fromComponent.components],
  providers: [...fromServices.services]
})

export class NoticeOfActingModule {

}
