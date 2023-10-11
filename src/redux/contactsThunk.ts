import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataContacts } from '../services/api';
import { Contact, TypeRequest } from '../types/index';
import { useDispatch } from 'react-redux';
import { store } from './store';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', () =>
  fetchDataContacts({ type: TypeRequest.GET })
);
export const addContact = createAsyncThunk('contacts/addContact', (form: Contact) =>
  fetchDataContacts({ type: TypeRequest.POST, form })
);
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id: string) =>
  fetchDataContacts({ type: TypeRequest.DELETE, id })
);

export const useAppDispatch = useDispatch<typeof store.dispatch>;
