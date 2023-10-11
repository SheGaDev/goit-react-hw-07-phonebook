import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsThunk';
import { initialState } from './initialState';
import { CasePending, isPendingAction, isRejectedAction } from './cases';
import { Contact } from '@types';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload as Contact[];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const pl = payload as Contact;
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((contact) => contact.id !== pl.id);
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload as Contact);
      })
      .addCase(deleteContact.pending, CasePending)
      .addMatcher(isPendingAction, CasePending)
      .addMatcher(isRejectedAction, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
