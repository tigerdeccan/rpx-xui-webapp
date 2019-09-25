import { Injectable, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LDClient, LDFlagSet, initialize} from 'launchdarkly-js-client-sdk';
import { FeatureToggleService} from 'src/app/models/feature-toggle.model';

export const  LAUNCH_DARKLY_IMPL = new InjectionToken<FeatureToggleService>('LaunchDarklyImpl');

@Injectable()
export class LaunchDarklyService implements FeatureToggleService {
  private ldClient: LDClient;
  public featureToggleData: LDFlagSet;
  constructor() {
    this.connectService();
  }

  connectService() {
    const user = {
      key: 'aa0ceb'
    };
    this.ldClient = initialize('5d836a7f96e6020857332f2c', user);
  }

  getFeatureToggleData() {
    return this.ldClient.allFlags();
  }
}
