import { jwtDecode } from "jwt-decode";
import { Student } from "../types/student";

interface  DecodedToken extends Student {
    iat?: number; // Issued At timestamp
    exp?: number; // Expiration timestamp
}

export const decodeToken = (token: string): DecodedToken => {
    console.log(token)
    try {
        return jwtDecode<DecodedToken >(token);
    } catch (error) {
        
        return {} as DecodedToken;
    }
};
