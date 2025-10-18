import { createSlice } from "@reduxjs/toolkit"
import { adminApi } from "../Apis/adminapi"




const adminslice = createSlice({
    name: "adminslice",
    initialState: {
        admin: JSON.parse(localStorage.getItem("admin")),

    },
    reducers: {
        AdminLogout: (state, { payload }) => {
            localStorage.removeItem("admin")
            state.admin = null
        },

    },
    extraReducers: builder => builder


        .addMatcher(adminApi.endpoints.LoginAdmin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(adminApi.endpoints.LogoutAdmin.matchFulfilled, (state, { payload }) => {
            state.admin = null
        })




})

export const { invalidate } = adminslice.actions
export default adminslice.reducer