import { Injectable, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LDClient, LDFlagSet, initialize, createConsoleLogger} from 'launchdarkly-js-client-sdk';
import { FeatureToggleService} from 'src/app/models/feature-toggle.model';

export const  LAUNCH_DARKLY_IMPL = new InjectionToken<FeatureToggleService>('LaunchDarklyImpl');

@Injectable()
export class LaunchDarklyService implements FeatureToggleService {
  private ldClient: LDClient;

  // tslint:disable-next-line: variable-name
  private _featureToggleData: LDFlagSet;
  public get featureToggleData(): LDFlagSet {
    return this._featureToggleData;
  }
  public set featureToggleData(ft: LDFlagSet) {
    this._featureToggleData = ft;

    for (const feature of Object.keys(this._featureToggleData)) {
      const val = this.ldClient.variation(feature);
      if(typeof val !== 'boolean') {
        this._featureToggleData[val] = true;
      }
    }
    console.log(this._featureToggleData);
  }


  constructor() {
  }

  connectService(): Promise<any> {
    const user = {
      key: 'aa0ceb'
    };
    this.ldClient = initialize('5d836a7f96e6020857332f2c', user);

    return new Promise((resolve, reject) => {
         this.ldClient.on('ready', () => {
            resolve(this.ldClient.allFlags());
         });
    });
  }



}
