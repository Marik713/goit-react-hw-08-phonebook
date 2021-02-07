import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.tasks.items;

const getLoading = (state) => state.tasks.loading;

const getFilter = (state) => state.tasks.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const getContactById = createSelector(
  [(state, contactId) => contactId, getContacts],
  (contactId, contacts) => contacts.find((contact) => contact.id === contactId)
);

export default {
  getContacts,
  getLoading,
  getFilter,
  getVisibleContacts,
  getContactById,
};
