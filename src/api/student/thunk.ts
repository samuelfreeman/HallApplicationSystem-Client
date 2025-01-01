// api/student/thunk.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { login as loginService, signUp as signUpService } from "../services/authservice";
import { Student, LoginStudent } from "../../types/student";
import { decodeToken } from "../../utils/decode";

export const login = createAsyncThunk(
    "auth/login",
    async (credentials: LoginStudent, { rejectWithValue }) => {
        try {
            const data = await loginService(credentials);
            const student = decodeToken(data)
            
            
            return { student, token: data } 
        } catch (error: any) {
         
            return rejectWithValue(error.response?.data?.message || "Login failed");
        }
    }
);

export const signUp = createAsyncThunk(
    "auth/signUp",
    async (credentials: Student, { rejectWithValue }) => {
        try {
            const data = await signUpService(credentials);
            return data
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || "Sign up failed");
        }
    }
);
