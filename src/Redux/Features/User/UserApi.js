import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API, token } from '../../../Api/Axios';


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API}/users` }),
    tagTypes: ['circular'],
    endpoints: (builder) => ({
        updateProfile: builder.mutation({
            query: (data) => ({
                url: `/updateProfile`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['user']
        }),
        getMe: builder.query({
            query: () => ({
                url: `/getMe`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['user']
        }),
        getAllUser: builder.query({
            query: ({ role }) => ({
                url: `/getAllUser?role=${role}`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['user']
        }),
        getSingleUser: builder.query({
            query: ({ id }) => ({
                url: `/getSingleUser/${id}`,
                method: 'GET',
                headers: { 'Authorization': token },

            }),
            providesTags: ['user']
        }),
       
    })

});

export const {
    useUpdateProfileMutation,
    useGetMeQuery,
    useGetAllUserQuery,
    useGetSingleUserQuery,
} = userApi;