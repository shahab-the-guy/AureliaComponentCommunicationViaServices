import { FrameworkConfiguration } from 'aurelia-framework';
import { FilterComponent } from './components/filter-component';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([FilterComponent]);
}
