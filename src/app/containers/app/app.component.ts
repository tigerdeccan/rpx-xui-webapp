import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import { LoggerService } from '../../services/logger/logger.service';
import * as fromActions from '../../store';
import { Store } from '@ngrx/store';
import {NavItemsModel} from '../../models/nav-item.model';
import {AppTitleModel} from '../../models/app-title.model';
import {UserNavModel} from '../../models/user-nav.model';
import {AppConstants} from '../../app.constants';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'exui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  navItems: NavItemsModel[];
  appHeaderTitle: AppTitleModel;
  userNav: UserNavModel;
  currentURL = 'currentURL';
  componentName = 'App Component';

  @HostListener('window:beforeunload')
  setUrl() {
    localStorage.setItem(this.currentURL, this.router.url );
  }

  constructor(
    private logger: LoggerService,
    private store: Store<fromActions.State> ,
    private router: Router) {
      const urlTobeReloaded = localStorage.getItem(this.currentURL);
      console.log(urlTobeReloaded);
      if (urlTobeReloaded && urlTobeReloaded !== this.router.url) {
        this.router.navigate([urlTobeReloaded]);
        localStorage.removeItem(this.currentURL );
      }
  }

  ngOnInit(): void {
    this.appHeaderTitle = AppConstants.APP_HEADER_TITLE;
    this.navItems = AppConstants.NAV_ITEMS;
    this.userNav = AppConstants.USER_NAV;
  }

  onNavigate(event): void {
    if (event === 'sign-out') {
      return this.store.dispatch(new fromActions.Logout());
    }
  }

}
