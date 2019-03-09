import { IState } from "./state";
import { IContact } from "contacts/models/contact";

const selectContactAction = (state: IState, selectedContact: IContact) => {

  const new_State = Object.assign({}, state);

  new_State.contacts.selected = selectedContact;

  return new_State;

};

export {
  selectContactAction
}
