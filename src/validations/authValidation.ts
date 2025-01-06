import { z } from 'zod'

export const loginSchema = z.object({
    studentId: z.string().min(10, "Student's Id must be 10 characters long"),
    password: z.string().min(8, "Password must be atleast 8 characters long"),
})




export const signUpSchema = z.object({
    studentId: z.string().min(10, "Student's Id must be 10 characters long"),
    fullName: z.string().min(5, "Student's Fullname must be atleast 5 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be atleast 8 characters long"),
    gender: z.string().max(6).nonempty("Must have a value"),
    level: z.number().min(2, "level of student must be 3 characters long"),
    telephone: z.string().min(10, "Phonenumber must be 10 characters long ").startsWith("0", "Phonenumber must start with 0"),
    department: z.string().nonempty("This field must not be Empty"),
})



export type LoginInput = z.infer<typeof loginSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
