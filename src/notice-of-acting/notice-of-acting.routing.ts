import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { NoticeOfActingComponent } from './containers/notice-of-acting/notice-of-acting.component';

export const ROUTES: Routes = [
  {
    path: 'notice-of-acting',
    component: NoticeOfActingComponent,
  }
];

export const noticeOfActingRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);
