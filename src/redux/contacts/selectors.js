// import { createSelector } from "@reduxjs/toolkit";
// import { selectNameFilter } from "./components/re"


export const selectUserContacts = (state) => state.contacts.contacts;
export const selectUserContactsIsLoading = (state) => state.contacts.isLoading;
export const selectUserContactsError = (state) => state.contacts.error;




// export const selectContacts = (state) => state.contacts.items;
// export const selectLoading = (state) => state.contacts.loading;
// export const selectError = (state) => state.contacts.error;



// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact => 
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );