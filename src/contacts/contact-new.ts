import { autoinject } from "aurelia-framework";
import { ContactsInMemoryService } from "./services/contacts-service";
import { IContact } from "./models/contact";

@autoinject()
export class ContactNew {

  private isNew: boolean = false;
  private contact: IContact = null;

  constructor(private contactService: ContactsInMemoryService) { }

  activate(params) {
    console.log(params);

    if (params && params.id) {
      this.contactService.getContact(Number(params.id))
        .then(found => {
          this.isNew = false;
          this.contact = found;
        });
    }
    else {
      this.isNew = true;
      this.clearContact();
    }
  }

  private clearContact(): void {
    this.contact = {
      id: -1,
      name: '',
      family: '',
      email: '', website: '', phone: ''
    };
  }


}
