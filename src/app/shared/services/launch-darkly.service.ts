import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LDClient, LDFlagSet, initialize} from 'launchdarkly-js-client-sdk';

@Injectable()
export class LaunchDarklyService {
  private ldClient: LDClient;
  public flags: LDFlagSet;
  constructor() {
    // TODO: client side key nd user key needs to be configured
    this.ldClient = initialize('YOUR-CLIENT-SIDE-ID', { key: 'SAMPLE-USER-KEY', anonymous: true });
    this.flags = this.ldClient.allFlags();
  }
}
