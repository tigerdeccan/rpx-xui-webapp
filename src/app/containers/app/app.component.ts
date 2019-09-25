import { LaunchDarklyService, LAUNCH_DARKLY_IMPL } from '../../shared/services/launch-darkly.service';
import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { LoggerService } from '../../services/logger/logger.service';
import * as fromActions from '../../store';
import { Store } from '@ngrx/store';
import {NavItemsModel} from '../../models/nav-item.model';
import {AppTitleModel} from '../../models/app-title.model';
import {UserNavModel} from '../../models/user-nav.model';
import {AppConstants} from '../../app.constants';
import { FeatureToggleService } from 'src/app/models/feature-toggle.model';
@Component({
  selector: 'exui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: LAUNCH_DARKLY_IMPL ,  useClass: LaunchDarklyService   }]
})
export class AppComponent implements OnInit {
  navItems: NavItemsModel[];
  appHeaderTitle: AppTitleModel;
  userNav: UserNavModel;
  componentName = 'App Component';
  featureToggleData = null;
  constructor(
    private logger: LoggerService,
    private store: Store<fromActions.State>,
    @Inject(LAUNCH_DARKLY_IMPL) private featureToggleService: FeatureToggleService
    ) {
      this.featureToggleData = this.featureToggleService.getFeatureToggleData();
      console.log(this.featureToggleData);
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
