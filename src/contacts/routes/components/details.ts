import { IContact } from "../../models/contact";
import { ContactsInMemoryService } from "../../services/contacts-service";
import { autoinject, computedFrom } from "aurelia-framework";

@autoinject()
export class ContactDetails {

  // contact: IContact;
  @computedFrom('contactService.currentContact')
  get contact(){
    return this.contactService.currentContact;
  }

  constructor(private contactService: ContactsInMemoryService) { }

  async activate(params: any) {
    return this.contactService.getContact(params.id)
      .then(contact => {
        this.contactService.currentContact = contact;
      });

  }

}
