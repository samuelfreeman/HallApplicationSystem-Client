import axios from "axios";
const prod = "https://hallapplicationsystem.onrender.com/"
// const dev = "http://localhost:3000"
export const api = axios.create({
  baseURL: prod,
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
    const authToken = localStorage.getItem("token");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  async (error) => {
    console.log(error)
    return await Promise.reject(error);
  }
);
