import { api } from "@/api/interceptor";

export const studentLogin = async (data: LoginStudent) => {
    const response = await api.post("/auth/student/login", data);
    return response.data;
};

export const studentSignUp = async (data: CreateStudent) => {
    const response = await api.post("/student/register", data);
    console.log(response.data)
    return response.data;
}

export const studentAuth = async (params: FindStudent)=>{
    let str = params.id;  // Or '""Hello""'

// Removing quotes from the start and end
const id = str.replace(/^["']|["']$/g, '');
    const response = await api.get(`/student/${id}`)
    return response.data
}


///

// export const verifyAdminLogin = async (data: {
//   email: string;
//   otp: string;
// }) => {
//   const response = await api.post("/admins/verifyOtp", data);
//   return response.data;
// };

// export const forgotPassword = async (data: { email: string }) => {
//   const response = await api.post("/admins/forgotPassword", data);
//   return response.data;
// };

// export const resetPassword = async (data: ResetPassword) => {
//   const response = await api.post(`/admins/resetPassword/${data.token}`, data);
//   return response.data;
// };