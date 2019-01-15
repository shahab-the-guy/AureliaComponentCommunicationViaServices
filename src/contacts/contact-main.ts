import { ContactsInMemoryService } from './services/contacts-service';
import { autoinject } from 'aurelia-framework';
import { IContact } from './models/contact';


@autoinject()
export class ContactMain{
  
  private contacts: IContact[];
  private criteria: string;

  constructor(private contactService: ContactsInMemoryService) { }

  attached() {
    return this.contactService.getContacts()
    .then( contacts => this.contacts = contacts );
  }

}
