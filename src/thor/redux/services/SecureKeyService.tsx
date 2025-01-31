import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SecureKey } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type SecureKeyResponse = SecureKey[]

export const SecureKeyService = createApi({
  reducerPath: 'SecureKey', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['SecureKey'],
  endpoints: (build) => ({
    lazyGetSecureKeys: build.query<SecureKeyResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `SecureKey?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'SecureKey' as const, id })),
            { type: 'SecureKey', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getSecureKeys: build.query<SecureKeyResponse, void>({
      query: () => 'SecureKey',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'SecureKey' as const, id })),
              { type: 'SecureKey', id: 'LIST' },
            ]
          : [{ type: 'SecureKey', id: 'LIST' }],
    }),
    addSecureKey: build.mutation<SecureKey, Partial<SecureKey>>({
      query: (body) => ({
        url: `SecureKey`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'SecureKey', id: 'LIST' }],
    }),
    getSecureKey: build.query<SecureKey, string>({
      query: (id) => `SecureKey/${id}`,
      providesTags: (result, error, id) => [{ type: 'SecureKey', id }],
    }),
    updateSecureKey: build.mutation<void, Pick<SecureKey, 'id'> & Partial<SecureKey>>({
      query: ({ id, ...patch }) => ({
        url: `SecureKey/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            SecureKeyService.util.updateQueryData('getSecureKey', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'SecureKey', id }],
    }),
    deleteSecureKey: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `SecureKey/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'SecureKey', id }],
    }),
  }),
})

export const {
  useLazyGetSecureKeysQuery,
  useGetSecureKeyQuery,
  useGetSecureKeysQuery,
  useAddSecureKeyMutation,
  useUpdateSecureKeyMutation,
  useDeleteSecureKeyMutation,
} = SecureKeyService
