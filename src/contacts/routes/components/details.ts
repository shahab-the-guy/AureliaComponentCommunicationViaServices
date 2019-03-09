import { IContact } from "../../models/contact";
import { ContactsInMemoryService } from "../../services/contacts-service";
import { autoinject, computedFrom } from "aurelia-framework";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { ISubscription } from "aurelia-router";
import { connectTo } from "aurelia-store";
import { IState } from "shared/states/state";

@connectTo()
@autoinject()
export class ContactDetails {

  get contact(): IContact {
    return this.state.contacts.selected;
  }

  private state: IState;

  constructor(private contactService: ContactsInMemoryService) {
  }

  async activate(params: any) {
    return this.contactService.getContact(params.id)
      .then(contact => {
        this.contactService.selectContact(contact);
      });
  }

}
