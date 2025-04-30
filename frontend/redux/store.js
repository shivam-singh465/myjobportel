import authSlice from "./authSlice";

import {configureStore} from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        // Add your reducers here
        auth: authSlice,
    },
})

export default store;