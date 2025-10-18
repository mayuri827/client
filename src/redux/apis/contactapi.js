import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const contactapi = createApi({
    reducerPath: "contactapi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/contact`, credentials: "include" }),
    tagTypes: ["contactapi"],
    endpoints: (builder) => {
        return {
            sendContact: builder.mutation({
                query: (formData) => ({
                    url: "/contact",
                    method: "POST",
                    body: formData,
                }),
                invalidatesTags: ["contactapi"],
            }),

            getAllContacts: builder.query({
                query: () => ({
                    url: "/contacts-get",
                    method: "GET",
                }),
                providesTags: ["contactapi"],
            }),


            deleteContact: builder.mutation({
                query: (id) => ({
                    url: `/contact-delete/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: ["contactapi"],
            }),




        }
    }
})

export const {
    useGetAllContactsQuery, useSendContactMutation, useDeleteContactMutation
} = contactapi
