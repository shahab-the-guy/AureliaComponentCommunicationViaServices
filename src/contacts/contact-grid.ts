import { bindable } from "aurelia-framework";
import { IContact } from "./models/contact";

export class ContactGrid {

  @bindable() contacts: IContact[];

  attached() {
    this.contacts = [
      {
        id: 1, name: 'saeed', family: 'ganji',
        phone: '09125072548', email: 'shahabganji@gmail.com',
        website: 'http://shahabganji.me'
      }];
  }

}
