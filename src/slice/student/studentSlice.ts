import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "../../types/student";
import { login, signUp } from "../../api/student/thunk";

// Define the auth state
interface AuthState {
  student: Student | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  student: JSON.parse(localStorage.getItem("student") || "null"),
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
};

// Utility functions for localStorage
const saveToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

// Create the slice
const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    logout: (state) => {
      state.student = null;
      state.token = null;
      removeFromLocalStorage("student");
      removeFromLocalStorage("token");
    },
  },
  extraReducers: (builder) => {
    // Login actions
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ student: Student; token: string }>) => {
          state.loading = false;
          state.student = action.payload.student;
          state.token = action.payload.token;
          saveToLocalStorage("student", action.payload.student);
          saveToLocalStorage("token", action.payload.token);
        }
      )
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });

    // Signup actions
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        signUp.fulfilled,
        (state, action: PayloadAction<{ student: Student; token: string }>) => {
          state.loading = false;
          state.student = action.payload.student;
          state.token = action.payload.token;
          saveToLocalStorage("student", action.payload.student);
          saveToLocalStorage("token", action.payload.token);
        }
      )
      .addCase(signUp.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload || "Signup failed";
      });
  },
});

export const { logout } = studentSlice.actions;

export default studentSlice.reducer;
