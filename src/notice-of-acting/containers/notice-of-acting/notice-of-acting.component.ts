import {Component, OnDestroy, OnInit, AfterViewInit} from '@angular/core';
import * as fromStore from '../../store';
import * as fromRoot from '../../../app/store/';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'exui-notice-of-acting',
  templateUrl: './notice-of-acting.component.html',
})
export class NoticeOfActingComponent implements OnInit, OnDestroy, AfterViewInit {

  public currentPageId$: Observable<string>;
  constructor(private store: Store<fromStore.NoticeOfActingState>) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.resetFocus();
  }

  // Set to focus to the title when the page/next route url started for accessibility
  resetFocus(): void {
    const focusElement = document.getElementsByTagName('h1')[0];
    if (focusElement) {
      focusElement.setAttribute('tabindex', '-1');
      focusElement.focus();
    }
  }

  ngOnDestroy(): void {
    // this.store.dispatch(new fromStore.ResetErrorMessage({}));
  }

  onSubmitData(): void {
    // const pageValues = {
    //   ...this.pageValues,
    //   jurisdictions: this.jurisdictions
    // };
    // this.store.dispatch( new fromStore.SubmitFormData(pageValues));
  }

  onGoBack(event) {
    // this.store.dispatch(new fromStore.ResetNextUrl());
    // this.store.dispatch(new fromRoot.Back());
  }
}

