import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API, token } from '../../../Api/Axios';


export const circularApi = createApi({
    reducerPath: 'circularApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API}/jobCircular` }),
    tagTypes: ['circular'],
    endpoints: (builder) => ({
        postCircular: builder.mutation({
            query: (data) => ({
                url: `/postJobCircular`,
                method: 'POST',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['circular']
        }),
        getMyJobCircular: builder.query({
            query: () => ({
                url: `/getMyJobCircular`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['circular']
        }),

        getAllCircular: builder.query({
            query: () => ({
                url: `/getAllJobCircular`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['circular']
        }),
        getSingleJobCircular: builder.query({
            query: ({ id }) => ({
                url: `/getSingleJobCircular/${id}`,
                method: 'GET',
                headers: { 'Authorization': token },

            }),
            providesTags: ['circular']
        }),
        deleteJobCircular: builder.mutation({
            query: ({ id }) => ({
                url: `/deleteJobCircular/${id}`,
                method: 'DELETE',
                headers: { 'Authorization': token },

            }),
            invalidatesTags: ['circular']
        }),
        apply: builder.mutation({
            query: ({ id }) => ({
                url: `/apply/${id}`,
                method: 'PATCH',
                headers: { 'Authorization': token },

            }),
            invalidatesTags: ['user']
        }),
        updateJobCircular: builder.mutation({
            query: ({ data, id }) => ({
                url: `/updateJobCircular/${id}`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['user']
        }),
    })

});

export const {
    useGetAllCircularQuery,
    useGetMyJobCircularQuery,
    useGetSingleJobCircularQuery,
    usePostCircularMutation,
    useDeleteJobCircularMutation,
    useApplyMutation,
    useUpdateJobCircularMutation
} = circularApi;