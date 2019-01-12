import { FrameworkConfiguration } from 'aurelia-framework';
import { FilterComponent } from './elements/filter-component';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([FilterComponent]);
}
