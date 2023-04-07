import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksInitialState = {
  contacts: [
    { id: nanoid().toString(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid().toString(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid().toString(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid().toString(), name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(text) {
        const { name, number } = text;

        return {
          payload: {
            id: nanoid().toString(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact(state, actions) {
      return state.filter(contact => contact.id !== actions.payload);
    },
  },
});

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    searchContacts(state, actions) {
      return (state = actions.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const { searchContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
