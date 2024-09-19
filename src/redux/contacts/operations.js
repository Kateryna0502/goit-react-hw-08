import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      
      const { data } = await axios.get("https://66de1828f7bcc0bbdcdfd310.mockapi.io/contacts");
      return data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post("https://66de1828f7bcc0bbdcdfd310.mockapi.io/contacts", contact);
        return data;
            } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      console.log(contactId);
      const { data } = await axios.delete(`https://66de1828f7bcc0bbdcdfd310.mockapi.io/contacts/${contactId}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);