export interface FeatureToggleService {
  featureToggleData: any;
  connectService(): Promise<any>;
}
