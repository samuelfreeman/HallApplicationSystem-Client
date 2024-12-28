export interface Student {
    id?: string
    studentId?: string;
    profile?: string; 
    fullName?: string;
    email?: string;
    password?: string;
    gender?: string;
    level?: number;
    telephone?: string;
    department?: string;
    resetCode?: string;
    disabled?: boolean;
    resetCodeExpiry?: Date;
}

export interface LoginStudent {
    studentId: string;
    password: string;
}