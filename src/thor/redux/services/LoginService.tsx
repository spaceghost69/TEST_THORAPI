import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Login } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type LoginResponse = Login[]

export const LoginService = createApi({
  reducerPath: 'Login', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Login'],
  endpoints: (build) => ({
    lazyGetLogins: build.query<LoginResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Login?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Login' as const, id })),
            { type: 'Login', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getLogins: build.query<LoginResponse, void>({
      query: () => 'Login',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Login' as const, id })),
              { type: 'Login', id: 'LIST' },
            ]
          : [{ type: 'Login', id: 'LIST' }],
    }),
    addLogin: build.mutation<Login, Partial<Login>>({
      query: (body) => ({
        url: `Login`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Login', id: 'LIST' }],
    }),
    getLogin: build.query<Login, string>({
      query: (id) => `Login/${id}`,
      providesTags: (result, error, id) => [{ type: 'Login', id }],
    }),
    updateLogin: build.mutation<void, Pick<Login, 'id'> & Partial<Login>>({
      query: ({ id, ...patch }) => ({
        url: `Login/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            LoginService.util.updateQueryData('getLogin', id, (draft) => {
              Object.assign(draft, patch)
            }),
          )
          try {
            await queryFulfilled
          } catch {
            patchResult.undo()
          }
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Login', id }],
    }),
    deleteLogin: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Login/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Login', id }],
    }),
  }),
})

export const {
  useLazyGetLoginsQuery,
  useGetLoginQuery,
  useGetLoginsQuery,
  useAddLoginMutation,
  useUpdateLoginMutation,
  useDeleteLoginMutation,
} = LoginService
