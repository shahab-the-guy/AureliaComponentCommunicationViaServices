import { bindable, bindingMode } from "aurelia-framework";

export class FilterComponent {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) filter: string;
}
