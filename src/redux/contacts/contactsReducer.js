import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import contactsActions from "./contactsActions";

const addContact = (state, action) => [action.payload, ...state];

const removeContact = (state, action) =>
  state.filter((task) => task.id !== action.payload);

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactSuccess]: removeContact,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, { payload }) => (state = payload),
});

const loading = createReducer(false, {
  [contactsActions.fetchContactRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
