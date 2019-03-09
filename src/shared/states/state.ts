import { IContact } from "contacts/models/contact";

export interface IContactState {
  selected?: IContact;
}

export interface IState {
  contacts: IContactState;
}

export const initialState: IState = {
  contacts: {
    selected: null
  }
}
