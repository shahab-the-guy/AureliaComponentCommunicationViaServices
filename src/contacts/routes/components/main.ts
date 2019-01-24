import { ContactsInMemoryService } from '../../services/contacts-service';
import { autoinject, bindable } from 'aurelia-framework';
import { IContact } from '../../models/contact';
import { ContactGrid } from '../../components/contact-grid';


@autoinject()
export class ContactMain {

  private contacts: IContact[];
  private filteredContacts: IContact[];

  private _criteria: string;

  get criteria() {
    return this._criteria;
  }
  set criteria(value: string) {
    this._criteria = value;
    this.applyFilter(value);
  }

  // refController;
  // refViewModel: ContactGrid;

  constructor(private contactService: ContactsInMemoryService) { }

  async attached() {
    return this.contactService.getContacts()
      .then(contacts => {
        this.contacts = contacts;
        this.applyFilter(this.criteria);
      });
  }

  private applyFilter(filter: string) {
    if (!this.criteria) {
      this.filteredContacts = this.contacts;
      return;
    }

    this.filteredContacts = this.contacts.filter(
      c => {
        return c.name.toLowerCase().includes(filter.toLowerCase()) ||
          c.family.toLowerCase().includes(filter.toLowerCase());
      }
    );

  }



  // private criteriaChanged(value: string) {
  //   this.applyFilter(value);
  // }

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
