import { IContact } from "contacts/models/contact";
import { singleton } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";

let id_counter = 4;
const contacts: IContact[] = [
  {
    id: 1,
    name: 'Saeed', family: 'Ganji',
    phone: '+98 912 111 1111',
    email: 'saeed@email.com',
    website: 'http://shahabganji.me'
  },
  {
    id: 2,
    name: 'Hamed', family: 'Fathi',
    phone: '+98 912 222 222',
    email: 'hamed@email.com'
  }, {
    id: 3,
    name: 'Jane', family: 'Doe',
    phone: '+98 935 333 3333',
    email: 'jane@email.com'
  },
  {
    id: 4,
    name: 'John', family: 'Doe',
    phone: '+98 922 444 4444',
    email: 'john@email.com'
  }];

@singleton()
export class ContactsInMemoryService {

  // currentContact: IContact | null;

  constructor(private ea: EventAggregator) { }

  selectContact(selected: IContact) {
    this.ea.publish('selected-contact-changed', selected);
  }

  getContacts(): Promise<IContact[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(contacts.map(c => Object.assign({}, c)));
      }, 500);
    });
  }

  getContact(id: number): Promise<IContact> {
    id = Number(id);
    return new Promise(resolve => {
      setTimeout(() => {
        const found = contacts.find(c => c.id === id);
        resolve(Object.assign({}, found));
      }, 500);
    });
  }

  saveContact(id: number | null, contact: IContact): Promise<IContact> {
    return (id === null)
      ? this.addContact(contact)
      : this.updateContact(id, contact);
  }

  private addContact(contact: IContact): Promise<IContact> {
    return new Promise(resolve => {
      setTimeout(() => {

        const contactToAdd = Object.assign({}, contact);

        contactToAdd.id = ++id_counter;
        contacts.push(contactToAdd);

        this.selectContact(contactToAdd);

        resolve(contactToAdd);

      }, 500);
    });
  }

  deleteContact(id: number): Promise<IContact> {
    id = Number(id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundIndex = contacts.findIndex(c => c.id === id);

        if (foundIndex < 0) {
          reject({ errorCode: 1, errorMessage: `There is no such contact with id: ${id}` });
        }

        const deleted = contacts.splice(foundIndex, 1);
        this.selectContact(null);
        resolve(Object.assign({}, deleted[0]));

      }, 500);
    });
  }

  private updateContact(id: number, contact: IContact): Promise<IContact> {
    id = Number(id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundIndex = contacts.findIndex(c => c.id === id);

        if (foundIndex < 0) {
          reject({ errorCode: 1, errorMessage: `There is no such contact with id: ${id}` });
        }

        contact.id = contacts[foundIndex].id;
        contacts.splice(foundIndex, 1, contact);

        const updatedContact = Object.assign({}, contact);

        this.selectContact(updatedContact);

        resolve(updatedContact);

      }, 500);
    });
  }

}
