import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromNoticeOfActing from '../reducers/notice-of-acting.reducer';

export const getNoticeOfActingState = createSelector(
  fromFeature.getRootNoaState,
  (state: fromFeature.NoticeOfActingState) => state.noticeOfActing
);


export const getCurrentPageId = createSelector(
  getNoticeOfActingState,
  fromNoticeOfActing.getCurrentPageId
);

