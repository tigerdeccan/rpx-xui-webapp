import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Params,
  Data,
} from '@angular/router';
import { createFeatureSelector, ActionReducerMap, createSelector } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

import * as fromApp from './app-config.reducer';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
  data: Data;
}

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
  appConfig: fromApp.AppConfigState;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
  appConfig: fromApp.reducer
};

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;
    const data = state.data ? state.data : {};

    return { url, queryParams, params, data };
  }
}


export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
  >('routerReducer');


export const getRouterUrl = createSelector(
  getRouterState,
  router => router.state.url
);


export const getRouterData = createSelector(
  getRouterState,
  router => router ? (router.state ? router.state.data : false) : false
);

export const getAppConfigState = createFeatureSelector<any>( 'appConfig' );

