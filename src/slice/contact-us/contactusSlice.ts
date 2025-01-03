import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactUSInfo } from "../../types/contactus";
import { contactUs } from "../../api/contactus/thunk";

interface ContactUsState {
    feedback: ContactUSInfo | null
    loading: boolean
    error: string | null

}
const initialState: ContactUsState = {
    feedback: null,
    loading: false,
    error: null
}


const contactUsSlice = createSlice({
    name: "contactus",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(contactUs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(contactUs.fulfilled,
                (state, action: PayloadAction<ContactUSInfo>) => {
                    state.loading = false;
                    state.feedback = action.payload;
                }
            ).addCase(contactUs.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload || "Failed to contact us";

            })

    }
})

export default contactUsSlice.reducer;