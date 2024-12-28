import { Student } from "../../types/student";
import { api } from "../interceptor";


export const signUp = async ( credentials:Student)=>{
    const response = await api.post('/student/register', credentials)
    return response.data
}
export const login = async(credentials :Student)=>{
const response = await api.post('/auth/student/login',credentials)
return response.data
}

