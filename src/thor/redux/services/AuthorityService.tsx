import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Authority } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type AuthorityResponse = Authority[]

export const AuthorityService = createApi({
  reducerPath: 'Authority', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Authority'],
  endpoints: (build) => ({
    lazyGetAuthoritys: build.query<AuthorityResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Authority?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Authority' as const, id })),
            { type: 'Authority', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getAuthoritys: build.query<AuthorityResponse, void>({
      query: () => 'Authority',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Authority' as const, id })),
              { type: 'Authority', id: 'LIST' },
            ]
          : [{ type: 'Authority', id: 'LIST' }],
    }),
    addAuthority: build.mutation<Authority, Partial<Authority>>({
      query: (body) => ({
        url: `Authority`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Authority', id: 'LIST' }],
    }),
    getAuthority: build.query<Authority, string>({
      query: (id) => `Authority/${id}`,
      providesTags: (result, error, id) => [{ type: 'Authority', id }],
    }),
    updateAuthority: build.mutation<void, Pick<Authority, 'id'> & Partial<Authority>>({
      query: ({ id, ...patch }) => ({
        url: `Authority/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            AuthorityService.util.updateQueryData('getAuthority', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Authority', id }],
    }),
    deleteAuthority: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Authority/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Authority', id }],
    }),
  }),
})

export const {
  useLazyGetAuthoritysQuery,
  useGetAuthorityQuery,
  useGetAuthoritysQuery,
  useAddAuthorityMutation,
  useUpdateAuthorityMutation,
  useDeleteAuthorityMutation,
} = AuthorityService
