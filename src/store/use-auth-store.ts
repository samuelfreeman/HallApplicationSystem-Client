import { create } from "zustand";

export const useAuthTokenStore = create<AuthToken>((set) => ({
  token: localStorage.getItem("token") || "null",
  setToken: (token: string) =>
     JSON.stringify(localStorage.setItem("token",token)),
  clearToken: () => {
    localStorage.removeItem("token");
    set({ token: "" });
  },
}));

export const useVerifyUser = create<VerifyUser>((set) => ({
  id: JSON.parse(localStorage.getItem("id") || "null"),
  setId: (id: string) => {
    localStorage.setItem("id", JSON.stringify(id));
    set({ id });
  },
  clearId: () => {
    localStorage.removeItem("id");
    set({ id: "" });
  },
}));



export const useStudentName = create<setName>((set) => ({
  fullName: localStorage.getItem("fullName") ||"",
  setName: (fullName: string) => {
    localStorage.setItem("fullName", JSON.stringify(fullName));
    set({ fullName });
  },
  clearName: () => {
    localStorage.removeItem("fullName");
    set({ fullName: "" });
  },
}));