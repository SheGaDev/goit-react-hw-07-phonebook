import { Contact, DataRequest } from '@types';
import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://65232a22f43b17938415426c.mockapi.io/api/v1/',
});

const routes = {
  GET: () => 'contacts',
  POST: () => 'contacts/',
  DELETE: ({ id }: DataRequest) => `contacts/${id}`,
};
type Options = {
  method: string;
  data?: Contact;
};

export const fetchDataContacts = async (data: DataRequest): Promise<Contact | Contact[]> => {
  const options: Options = { method: data.type };
  if ('form' in data) options.data = data.form;
  const response = await instanse(routes[data.type](data), options);
  return response.data;
};
