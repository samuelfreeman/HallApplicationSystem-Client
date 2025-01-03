import { z } from 'zod'

export const contactUsSchema = z.object({
    name: z.string().max(30, "Name is too long"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message is too short")
})

export type ContactUsInput = z.infer<typeof contactUsSchema>