// api/student/thunk.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { login as loginService, signUp as signUpService } from "../services/authservice";
import { Student, LoginStudent } from "../../types/student";

export const login = createAsyncThunk(
    "auth/login",
    async (credentials: LoginStudent, { rejectWithValue }) => {
        try {
            const data = await loginService(credentials);
            return data; // { student, token }
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
            return data; // { student, token }
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || "Sign up failed");
        }
    }
);
