import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';

import { Contact, Form } from '@types';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [] as Contact[],
  reducers: {
    addContact: {
      reducer(state, action: PayloadAction<Contact>) {
        state.push(action.payload);
      },
      prepare(form: Form) {
        return {
          payload: {
            ...form,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action: PayloadAction<string>): Contact[] => {
      return (state = [...state.filter((contact) => contact.id !== action.payload)]);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
