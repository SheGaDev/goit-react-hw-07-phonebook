import { AsyncThunk } from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, object>;

export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
// type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export type Form = {
  name: string;
  number: string;
};

export interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface InitialStateContacts {
  items: Contact[];
  isLoading: boolean;
  error: string | null;
}

export interface RootState {
  contacts: InitialStateContacts;
  filter: string;
}

export enum TypeRequest {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
}
export interface DataRequest {
  type: TypeRequest;
  id?: string;
  form?: Contact;
}
