import { apiSlice } from './apiSlice';

const USERS_API_ENDPOINT = 'api/users';

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: `${USERS_API_ENDPOINT}/auth`,
                method: 'POST',
                body: { email, password },
            }),
            invalidatesTags: ['User'],
        }),
        register: builder.mutation({
            query: ({ name, email, password }) => ({
                url: `${USERS_API_ENDPOINT}/register`,
                method: 'POST',
                body: { name, email, password },
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = usersApi;