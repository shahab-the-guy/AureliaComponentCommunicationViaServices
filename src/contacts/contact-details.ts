import { IContact } from "./models/contact";
import { ContactsInMemoryService } from "./services/contacts-service";

export class ContactDetails {

  contact: IContact;

  constructor(private contactServies: ContactsInMemoryService) { }

  activate(params) {

    return this.contactServies.getContact(params.id);
    
  }

}
