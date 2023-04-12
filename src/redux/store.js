import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer, contactsReducer } from './slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
