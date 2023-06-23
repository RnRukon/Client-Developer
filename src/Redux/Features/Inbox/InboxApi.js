import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API, token } from '../../../Api/Axios';


export const inboxApi = createApi({
    reducerPath: 'inboxApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API}/chat` }),
    tagTypes: ['inbox'],
    endpoints: (builder) => ({
        getChats: builder.query({
            query: () => ({
                url: `/getChat/`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['inbox']
        }),

        createChat: builder.mutation({
            query: ({ sender_id, receiver_id, message }) => ({
                url: `/createChat/?receiver_id=${receiver_id}&sender_id=${sender_id}`,
                method: 'POST',
                headers: { 'Authorization': token },
            }),
            invalidatesTags: ['inbox']
        }),



    })

});

export const {
    useGetChatsQuery,
    useCreateChatMutation
} = inboxApi;