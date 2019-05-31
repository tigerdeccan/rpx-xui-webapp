import * as fromCases from '../actions/create-cases.action';

// todo this is just a place holder
export interface CasesState {
  caseState: any;
  loading: boolean;
  loaded: boolean;
}

export const initialState: CasesState = {
  caseState: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromCases.CreateCasesAction
): CasesState {
  switch (action.type) {

    case fromCases.RESET_CHANGE: {
      // tbc
      return {
        ...state,
        loading: true,
      };
    }

  }

  return state;
}