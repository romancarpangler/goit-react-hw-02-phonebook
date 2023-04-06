import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer, contactsReducer } from './slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filtersReducer,
  },
});

export const persistor = persistStore(store);
