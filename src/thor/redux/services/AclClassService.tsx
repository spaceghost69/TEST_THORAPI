import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AclClass } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type AclClassResponse = AclClass[]

export const AclClassService = createApi({
  reducerPath: 'AclClass', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['AclClass'],
  endpoints: (build) => ({
    lazyGetAclClasss: build.query<AclClassResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `AclClass?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'AclClass' as const, id })),
            { type: 'AclClass', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getAclClasss: build.query<AclClassResponse, void>({
      query: () => 'AclClass',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'AclClass' as const, id })),
              { type: 'AclClass', id: 'LIST' },
            ]
          : [{ type: 'AclClass', id: 'LIST' }],
    }),
    addAclClass: build.mutation<AclClass, Partial<AclClass>>({
      query: (body) => ({
        url: `AclClass`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'AclClass', id: 'LIST' }],
    }),
    getAclClass: build.query<AclClass, string>({
      query: (id) => `AclClass/${id}`,
      providesTags: (result, error, id) => [{ type: 'AclClass', id }],
    }),
    updateAclClass: build.mutation<void, Pick<AclClass, 'id'> & Partial<AclClass>>({
      query: ({ id, ...patch }) => ({
        url: `AclClass/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            AclClassService.util.updateQueryData('getAclClass', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'AclClass', id }],
    }),
    deleteAclClass: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `AclClass/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'AclClass', id }],
    }),
  }),
})

export const {
  useLazyGetAclClasssQuery,
  useGetAclClassQuery,
  useGetAclClasssQuery,
  useAddAclClassMutation,
  useUpdateAclClassMutation,
  useDeleteAclClassMutation,
} = AclClassService
