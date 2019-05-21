import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfig } from './case.config';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { HttpClientModule } from '@angular/common/http';

import {
  CaseUIToolkitModule, DraftService, AlertService, HttpService, AuthService as CCDAuthService, CasesService,
  HttpErrorService, AbstractAppConfig, CaseEditWizardGuard, RouterHelperService,
  DocumentManagementService, PageValidationService, PlaceholderService, RequestOptionsBuilder, SearchFiltersModule
} from '@hmcts/ccd-case-ui-toolkit';

import { casesRouting } from './case-feature.routes';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store';
import {SharedModule} from '../app/shared/shared.module';
import {HttpModule} from '@angular/http';

// from containers
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    CaseUIToolkitModule,
    HttpClientModule,
    StoreModule.forFeature('cases', reducers),
    casesRouting,
    SharedModule,
    SearchFiltersModule,
    HttpModule
  ],
  declarations: [...fromContainers.containers],
  providers: [
    PlaceholderService,
    CasesService,
    CCDAuthService,
    HttpService,
    HttpErrorService,
    AlertService,
    DraftService,
    PageValidationService,
    CaseEditWizardGuard,
    RouterHelperService,
    DocumentManagementService,
    AppConfig,
    RequestOptionsBuilder,
    {
      provide: AbstractAppConfig,
      useExisting: AppConfig
    },
    ScrollToService
  ]
})
/**
 * Entry point for Cases Module that is also lazy loaded.
 */
export class CasesModule { }
