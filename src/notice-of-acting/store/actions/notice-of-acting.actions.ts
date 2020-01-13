import {Action} from '@ngrx/store';

export const SUBMIT_CASE_DETAILS = '[Notice Of Acting] SUBMIT Case Details';
export const LOAD_CASE_DETAILS = '[Notice Of Acting] Load Case Details';
export const GET_CURRENT_PAGE = '[Notice Of Acting] Get Current Page';
export const CONTINUE_NEXT_PAGE = '[Notice Of Acting] Continue Next Page';

export class SubmitCaseDetails implements Action {
  readonly type = SUBMIT_CASE_DETAILS;
  constructor(public payload: {caseReference: string; emailAddress: string}) {}
}

export class GetCurrentPage implements Action {
  readonly type = GET_CURRENT_PAGE;
  constructor(public payload: string) {}
}


export type NoticeOfActingActions =
  | SubmitCaseDetails
  | GetCurrentPage;
