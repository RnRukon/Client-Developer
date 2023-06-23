import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API, token } from '../../../Api/Axios';


export const messageApi = createApi({
    reducerPath: 'messageApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API}/message` }),
    tagTypes: ['message'],
    endpoints: (builder) => ({

        getMessage: builder.query({
            query: ({ id }) => ({
                url: `/getMessage/${id}`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['message']
        }),
        sendMessage: builder.mutation({
            query: ({ id, message }) => ({
                url: `/sendMessage/${id}`,
                method: 'POST',
                headers: { 'Authorization': token },
                body: { message }
            }),
            invalidatesTags: ['message']
        }),



    })

});

export const {
    useGetMessageQuery,
    useSendMessageMutation
} = messageApi;