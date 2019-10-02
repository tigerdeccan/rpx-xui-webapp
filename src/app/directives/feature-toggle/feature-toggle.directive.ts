import { FeatureToggleService } from 'src/app/models/feature-toggle.model';
import { LaunchDarklyService, LAUNCH_DARKLY_IMPL } from '../../shared/services/launch-darkly.service';
import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, Inject } from '@angular/core';
import {ConfigurationModel} from '../../models/configuration.model';
import {AppConfigService} from '../../services/config/configuration.services';

@Directive({
  selector: '[exuiFeatureToggle]'
})
export class ExuiFeatureToggleDirective implements OnInit {
  @Input() exuiFeatureToggle: string;
  config: ConfigurationModel;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    @Inject(LAUNCH_DARKLY_IMPL) private launchDarklyService: FeatureToggleService,
  ) {}

  ngOnInit() {
    // this.config = this.appConfigService.getFeatureToggle() || {};
    if (this.isEnabled()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  isEnabled() {
    return this.launchDarklyService.featureToggleData[this.exuiFeatureToggle];
  }
}
