import { configureStore } from "@reduxjs/toolkit"
import adminslice from "./slices/adminslice"
import { adminApi } from "./apis/adminapi"
import { contactapi } from "./apis/contactapi"


const reduxStore = configureStore({
    reducer: {
        [adminApi.reducerPath]: adminApi.reducer,
        [contactapi.reducerPath]: contactapi.reducer,
        adminauth: adminslice
    },
    middleware: def => [...def(), adminApi.middleware, contactapi.middleware,]
})

export default reduxStore