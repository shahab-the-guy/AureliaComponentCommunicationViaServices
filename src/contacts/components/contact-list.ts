import { bindable } from "aurelia-framework";
import { IContact } from "contacts/models/contact";

export class ContactList {

  @bindable() contacts: IContact[];


  private selectContact(selected: IContact) {
    console.log(selected);
  }


}
