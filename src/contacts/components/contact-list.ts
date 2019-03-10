import { bindable, autoinject } from "aurelia-framework";
import { IContact } from "contacts/models/contact";
import { ContactsInMemoryService } from "contacts/services/contacts-service";

import { Store, connectTo } from 'aurelia-store';
import { IState } from "shared/states/state";

@autoinject()
@connectTo()
export class ContactList {

  @bindable() contacts: IContact[];

  constructor(private contactService: ContactsInMemoryService) { }

  private selectContact(selected: IContact) {
    this.contactService.selectContact(selected);
  }

}
