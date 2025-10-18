import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/admin`, credentials: "include" }),
    tagTypes: ["adminApi"],
    endpoints: (builder) => {
        return {
            RegisterAdmin: builder.mutation({
                query: (formData) => {
                    return {
                        url: "/admin-Register",
                        method: "POST",
                        body: formData
                    }
                },
                providesTags: ["adminApi"]
            }),
            LoginAdmin: builder.mutation({
                query: (userData) => {
                    return {
                        url: "/admin-Login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("admin", JSON.stringify(data.result))
                    return data.result
                },
                invalidatesTags: ["adminApi"]
            }),
            LogoutAdmin: builder.mutation({
                query: userData => {
                    return {
                        url: "/admin-Logout",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("admin")
                    return data.result
                },
                invalidatesTags: ["adminApi"]
            }),



            GetAdminData: builder.query({
                query: () => {
                    return {
                        url: "/fetch-profile",
                        method: "GET"
                    }
                },
                transformResponse: data => data.admin,
                providesTags: ["adminApi"]
            }),








        }
    }
})

export const {
    useLoginAdminMutation, useRegisterAdminMutation, useLogoutAdminMutation, useGetAdminDataQuery
} = adminApi
