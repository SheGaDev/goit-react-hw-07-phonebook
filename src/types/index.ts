export type Form = {
  name: string;
  number: string;
};

export interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface RootState {
  contacts: Contact[];
  filter: string;
}
