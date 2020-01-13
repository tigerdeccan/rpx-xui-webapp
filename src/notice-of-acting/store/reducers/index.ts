import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromNoticeOfActing from './notice-of-acting.reducer';


export interface NoticeOfActingState {
  noticeOfActing: fromNoticeOfActing.NoticeOfActingState;
}

export const reducers: ActionReducerMap<NoticeOfActingState> = {
  noticeOfActing: fromNoticeOfActing.reducer,
};

export const getRootNoaState = createFeatureSelector<NoticeOfActingState>(
  'noticeOfActing'
);
