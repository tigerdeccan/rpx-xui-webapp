export interface FeatureToggleService {
  connectService(): void;
  getFeatureToggleData(): {[ key: string]: any};
}
