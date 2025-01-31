import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PersistentLogin } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type PersistentLoginResponse = PersistentLogin[]

export const PersistentLoginService = createApi({
  reducerPath: 'PersistentLogin', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['PersistentLogin'],
  endpoints: (build) => ({
    lazyGetPersistentLogins: build.query<PersistentLoginResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `PersistentLogin?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'PersistentLogin' as const, id })),
            { type: 'PersistentLogin', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getPersistentLogins: build.query<PersistentLoginResponse, void>({
      query: () => 'PersistentLogin',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'PersistentLogin' as const, id })),
              { type: 'PersistentLogin', id: 'LIST' },
            ]
          : [{ type: 'PersistentLogin', id: 'LIST' }],
    }),
    addPersistentLogin: build.mutation<PersistentLogin, Partial<PersistentLogin>>({
      query: (body) => ({
        url: `PersistentLogin`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'PersistentLogin', id: 'LIST' }],
    }),
    getPersistentLogin: build.query<PersistentLogin, string>({
      query: (id) => `PersistentLogin/${id}`,
      providesTags: (result, error, id) => [{ type: 'PersistentLogin', id }],
    }),
    updatePersistentLogin: build.mutation<void, Pick<PersistentLogin, 'id'> & Partial<PersistentLogin>>({
      query: ({ id, ...patch }) => ({
        url: `PersistentLogin/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            PersistentLoginService.util.updateQueryData('getPersistentLogin', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'PersistentLogin', id }],
    }),
    deletePersistentLogin: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `PersistentLogin/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'PersistentLogin', id }],
    }),
  }),
})

export const {
  useLazyGetPersistentLoginsQuery,
  useGetPersistentLoginQuery,
  useGetPersistentLoginsQuery,
  useAddPersistentLoginMutation,
  useUpdatePersistentLoginMutation,
  useDeletePersistentLoginMutation,
} = PersistentLoginService
