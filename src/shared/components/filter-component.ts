import { bindable, bindingMode } from "aurelia-framework";

export class FilterComponent {

  @bindable({ defaultBindingMode: bindingMode.twoWay }) filter: string;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) focus: boolean = true;
  // @bindable({ defaultBindingMode: bindingMode.oneTime }) onFilterChanged: Function;

  // private filterChanged(value: string) {
  //   if (this.onFilterChanged) {
  //     this.onFilterChanged({ value: value });
  //   }

  // }

}
