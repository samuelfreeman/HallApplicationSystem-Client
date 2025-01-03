import { configureStore } from '@reduxjs/toolkit'
import studentSlice from '../slice/student/studentSlice'
import contactUsSlice from '../slice/contact-us/contactusSlice'
export const store = configureStore({
    reducer: {
        student: studentSlice,
        feedback: contactUsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch