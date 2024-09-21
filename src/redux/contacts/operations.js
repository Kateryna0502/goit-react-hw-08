import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../auth/operations";


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      
      const { data } = await instance.get("contacts");
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
      const { data } = await instance.post("contacts", contact);
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
      const { data } = await instance.delete(`/contacts/${contactId}`);
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);