import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@types';

export const selectFilter = (state: RootState) => state.filter;
export const selectContacts = (state: RootState) => state.contacts;

export const selectFilteredItems = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return {
      ...contacts,
      items: contacts.items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())),
    };
  }
);
