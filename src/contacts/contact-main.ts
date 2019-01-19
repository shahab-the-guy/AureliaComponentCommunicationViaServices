import { ContactsInMemoryService } from './services/contacts-service';
import { autoinject } from 'aurelia-framework';
import { IContact } from './models/contact';
import { ContactGrid } from './contact-grid';
import { settings } from 'cluster';


@autoinject()
export class ContactMain {

  private contacts: IContact[];
  private criteria: string;

  // refController;
  // refViewModel: ContactGrid;

  constructor(private contactService: ContactsInMemoryService) { }

  attached() {
    return this.contactService.getContacts()
      .then(contacts => this.contacts = contacts);
  }

  // bind() {
  //   console.log(this.refController);
  //   console.log(this.refViewModel);

  //   setTimeout(() => {
  //     console.log('adding');
  //     this.refViewModel.contacts.push({ id: 5, name: 'test', family: 'test', email: '', phone: '' })
  //     console.log('added');
  //   }, 1000);
  // }

}
