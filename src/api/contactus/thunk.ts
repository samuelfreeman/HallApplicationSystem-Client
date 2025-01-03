import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactUs as contactusservice } from "../services/contactusservice";
import { ContactUSInfo } from "../../types/contactus";

export const contactUs = createAsyncThunk(
    "contactus/contact",
    async (credentials: ContactUSInfo, { rejectWithValue }) => {
        try {
            const data = await contactusservice(credentials)
            return data
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || "Contact failed!")
        }
    }
);

