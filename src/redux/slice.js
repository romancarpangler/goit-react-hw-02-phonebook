import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from 'operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContact.pending, handlePending)

      .addCase(fetchContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContact.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)

      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })

      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected),
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

export const contactsReducer = contactsSlice.reducer;
export const filtersReducer = filtersSlice.reducer;

export const { searchContacts } = filtersSlice.actions;
