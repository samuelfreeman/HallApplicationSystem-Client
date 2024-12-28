import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    Authorization: "",
  },
});

api.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");
    console.log(authToken);
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    console.log(error.message);
    return Promise.reject(error);
  }
);
