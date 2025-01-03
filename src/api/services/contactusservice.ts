import { ContactUSInfo } from "../../types/contactus";
import { api } from "../interceptor";


export const contactUs = async (credentials: ContactUSInfo) => {
    const response = await api.post('/contact-us', credentials)
    console.log(response)
    if (!response) {
        throw new Error("Failed to contact us")
    }
    return response.data
}