import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { apiLogout } from "../auth/operations";
// import { selectNameFilter } from "./filtersSlice";

// export const selectContacts = (state) => state.contacts.items;
// export const selectLoading = (state) => state.contacts.loading;
// export const selectError = (state) => state.contacts.error;

const INITIAL_STATE = {
  contacts: [],
  // items: [],
// name: "",
loading: false,
error: null,
};

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact => 
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );

const contactsSlice = createSlice({
    name: "contacts",
  initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id!== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
    .addCase(apiLogout.fulfilled, (state) => {
        state.contacts = [];
        state.error = null;
        state.loading = false;
      }),
});


export const contactsReducer = contactsSlice.reducer;
