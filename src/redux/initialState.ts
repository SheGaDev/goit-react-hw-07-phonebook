import { InitialStateContacts, Contact } from '@types';

export const initialState: InitialStateContacts = {
  items: [] as Contact[],
  isLoading: false,
  error: null,
};
