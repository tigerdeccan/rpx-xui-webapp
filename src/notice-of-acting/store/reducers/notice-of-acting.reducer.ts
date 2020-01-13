import * as fromNoticeOfActing from '../actions/notice-of-acting.actions';

export const pageIds = [ 'case-details', 'confirmation-success'];

export interface NoticeOfActingState {
  currentPageId: string;
  caseDetails: {
    caseReference: string,
    emailAddress: string,
    valid: boolean
  };
}

export const initialState = {
  currentPageId: pageIds[0],
  caseDetails: {
    caseReference: '',
    emailAddress: '',
    valid: false
  }
};


export function reducer(state = initialState, action: fromNoticeOfActing.NoticeOfActingActions): NoticeOfActingState {
  switch (action.type) {
    case fromNoticeOfActing.SUBMIT_CASE_DETAILS: {
      const caseDetails = {
        ...state.caseDetails,
        caseReference: action.payload.caseReference,
        emailAddress: action.payload.emailAddress,
        valid: true
      };
      return {
        ...state,
        caseDetails,
        currentPageId: pageIds[1]
      };
    }
  }

  return state;
}

export const getCurrentPageId = (state: NoticeOfActingState) => state.currentPageId;

