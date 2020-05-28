import { TestBed, async } from '@angular/core/testing';
import { ManageSessionServices } from '@hmcts/rpx-xui-common-lib';
import { AppComponent } from './app.component';
import { combineReducers, StoreModule, Store } from '@ngrx/store';
import {Logout, reducers} from 'src/app/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { windowToken } from '@hmcts/rpx-xui-common-lib';
import * as fromRoot from '../../store';
// import * as fromAuth from '../../../user-profile/store';
import { of } from 'rxjs';

const windowMock: Window = { gtag: () => {}} as any;

const idleServiceMock = {
  appStateChanges: () => of({
    countdown: 3,
    isVisible: true,
    type: 'modal'
  })
};

describe('AppComponent', () => {
  let store: Store<fromRoot.State>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,

        // ok we need mocks for GoogleAnalyticsService and Manage SessionServices
        StoreModule.forRoot(
          {
            ...reducers,
            userProfile: combineReducers(fromRoot.reducers)
          })
      ],
      providers: [
        {
          provide: windowToken,
          useValue: windowMock
        },
        {
          provide: ManageSessionServices,
          useValue: idleServiceMock
        },
      ],
    }).compileComponents();
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));

  // it('should have pageTitle$ Observable the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   fixture.detectChanges();
  //
  //   const expected = cold('a', { a: '' });
  //   expect(app.pageTitle$).toBeObservable(expected);
  //
  // }));
  //
  //
  // it('should have appHeaderTitle$ Observable the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   fixture.detectChanges();
  //
  //   const expected = cold('a', { a: undefined });
  //   expect(app.appHeaderTitle$).toBeObservable(expected);
  //
  // }));
  //
  // it('should have userNav$ Observable the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   fixture.detectChanges();
  //
  //   const expected = cold('a', { a: [] });
  //   expect(app.userNav$).toBeObservable(expected);
  //
  // }));
  //
  //
  // it('should have navItems$ Observable the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   fixture.detectChanges();
  //   const navItems = [
  //     {
  //       text: 'Organisation',
  //       href: '/organisation',
  //       active: true
  //     },
  //     {
  //       text: 'Users',
  //       href: '/users',
  //       active: false
  //     }];
  //   const expected = cold('a', { a: { navItems: [] } });
  //   expect(app.navItems$).toBeObservable(expected);
  //
  // }));
  //
  // it('should dispatch a logout action', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   app.onNavigate('sign-out');
  //   fixture.detectChanges();
  //
  //   expect(store.dispatch).toHaveBeenCalledWith(new Logout());
  //
  // }));

});
