import { bindable } from "aurelia-framework";
import { IContact } from "./models/contact";

export class ContactGrid {

  @bindable() contacts: IContact[];

}
