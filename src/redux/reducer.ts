import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const rootConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const combinedReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const reducer = persistReducer(rootConfig, combinedReducer);
