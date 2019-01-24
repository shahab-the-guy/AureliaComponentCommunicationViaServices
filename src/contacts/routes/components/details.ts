import { IContact } from "../../models/contact";
import { ContactsInMemoryService } from "../../services/contacts-service";
import { autoinject } from "aurelia-framework";

@autoinject()
export class ContactDetails {

  contact: IContact;

  constructor(private contactService: ContactsInMemoryService) { }

  async activate(params: any) {
    return this.contactService.getContact(params.id)
      .then(contact => {
        this.contact = contact;
      });

  }

}
