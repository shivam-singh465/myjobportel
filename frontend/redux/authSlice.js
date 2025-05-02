
import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({

    name: "auth",
    initialState: {
        loading: false,
        user: null,
    },
    reducers: {
        setLoading: (state, actions) => {
            state.loading = actions.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})
export const { setLoading,setUser } = authSlice.actions
export default authSlice.reducer