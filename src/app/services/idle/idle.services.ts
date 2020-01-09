import { Injectable } from '@angular/core';
import {Idle, DocumentInterruptSource } from '@ng-idle/core';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../store';
import {
  delay,
  distinctUntilChanged,
  filter, first,
  map,
  take
} from 'rxjs/operators';
import {Keepalive} from '@ng-idle/keepalive';
import {combineLatest} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdleService {
  private timeout: number;
  constructor(
    private idle: Idle,
    private keepalive: Keepalive,
    private store: Store<fromRoot.State>
  ) {}
  // TODO refactor init to pass the timeout and idle time
  public init(): void {
    // time is set in seconds
    // TODO get this from configuration when .evn ready
    this.timeout = 10 * 60; // set to 10 minutes

    this.idle.setIdleName('idleSession');
    this.idle.setTimeout(this.timeout);

    const interrupt =
      new DocumentInterruptSource('mousedown keydown DOMMouseScroll mousewheel touchstart touchmove scroll');
    this.idle.setInterrupts([interrupt]);

    // adding delay so that user can click on sign out before the modal shuts
    this.idle.onIdleEnd.pipe(delay(250)).subscribe(() => {
      console.log('No longer idle.');
      this.dispatchModal(undefined, false);
    });

    this.idle.onTimeout.subscribe(() => {
      console.log('Timed out!');
      this.dispatchSignedOut();
      this.dispatchModal(undefined, false);
    });

    this.idle.onIdleStart.subscribe(() => {
      console.log('You\'ve gone idle!');
    });

    this.idle.onTimeoutWarning.pipe(
      map(sec => (sec > 60) ? Math.ceil(sec / 60) + ' minutes' : sec + ' seconds'),
      distinctUntilChanged()
    ).subscribe((countdown) => {
      this.dispatchModal(countdown, true);
    });

    // sets the ping interval in seconds 5 hrs
    // TODO get this from configuration when .evn ready
    this.keepalive.interval(5 * 60 * 60);
    this.keepalive.onPing.pipe(delay(250)).subscribe(() => {
      console.log('Keep alive');
      this.store.dispatch(new fromRoot.KeepAlive());
    });

    this.initWatch();
  }

  public dispatchModal(countdown = '0', isVisible): void {
    const modalConfig: any = {
      session: {
        countdown,
        isVisible
      }
    };
    this.store.dispatch(new fromRoot.SetModal(modalConfig));
  }

  public dispatchSignedOut(): void {
    this.dispatchModal(undefined, false);
    this.store.dispatch(new fromRoot.SignedOut()); // sing out BE
  }

  private initWatch(): void {
    /* setting userDetails idle time */
    const route$ = this.store.pipe(select(fromRoot.getRouterUrl));
    // TODO refactor this to pass through the init
    const userIdleSession$ =  this.store.pipe(select(fromRoot.getUserIdleTimeOut));
    combineLatest([
      route$.pipe(first(value => typeof value === 'string' )),
      userIdleSession$.pipe(filter(value => !isNaN(value)), take(1))
    ]).subscribe(([routes, idle]) => {
      const isSignedOut: boolean = routes.indexOf('signed-out') !== -1;
      if (idle && !isSignedOut) {
        const idleInSeconds = Math.floor((idle / 1000)) - this.timeout;
        console.log('idleInSeconds', idleInSeconds);
        this.idle.setIdle(idleInSeconds);
        this.idle.watch();
      }
    });
  }
}
