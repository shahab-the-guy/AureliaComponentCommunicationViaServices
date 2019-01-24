import { bindable, autoinject } from "aurelia-framework";
import { IContact } from "../models/contact";
import { ContactsInMemoryService } from "contacts/services/contacts-service";
import { ModalHelpers } from "shared/modals/helpers/modal-helpers";
import { IConfirmModel } from "shared/models/confirm-model";

@autoinject()
export class ContactGrid {

  @bindable() contacts: IContact[];

  constructor(private modalHelpers: ModalHelpers, private contactService: ContactsInMemoryService) { }

  private deleteContact(contact: IContact) {

    const model: IConfirmModel = {
      title: `Delete Contact`,
      message: `Are you sure you want to delete, ${contact.name} ${contact.family}?`
    };

    this.modalHelpers.confirm(model)
      .whenClosed(result => {

        if (!result.wasCancelled) {
          this.contactService.deleteContact(contact.id)
            .then(c => {
              const index = this.contacts.indexOf(contact);
              this.contacts.splice(index, 1);
            });
        }
      });
  }
}
