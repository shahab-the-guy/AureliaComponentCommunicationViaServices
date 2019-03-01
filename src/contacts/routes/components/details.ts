import { IContact } from "../../models/contact";
import { ContactsInMemoryService } from "../../services/contacts-service";
import { autoinject, computedFrom } from "aurelia-framework";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { ISubscription } from "aurelia-router";

@autoinject()
export class ContactDetails {

  contact: IContact;
  subscription: Subscription;
  // @computedFrom('contactService.currentContact')
  // get contact(){
  //   return this.contactService.currentContact;
  // }

  constructor(private contactService: ContactsInMemoryService, ea: EventAggregator) {

    this.subscription = ea.subscribe('selected-contact-changed', (contact: IContact) => {
      this.contact = contact;
    });

  }

  async activate(params: any) {
    return this.contactService.getContact(params.id)
      .then(contact => {
        this.contactService.selectContact(contact);
      });

  }

  deactivate() {
    this.subscription.dispose();
  }

}
