import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AclSid } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type AclSidResponse = AclSid[]

export const AclSidService = createApi({
  reducerPath: 'AclSid', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['AclSid'],
  endpoints: (build) => ({
    lazyGetAclSids: build.query<AclSidResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `AclSid?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'AclSid' as const, id })),
            { type: 'AclSid', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getAclSids: build.query<AclSidResponse, void>({
      query: () => 'AclSid',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'AclSid' as const, id })),
              { type: 'AclSid', id: 'LIST' },
            ]
          : [{ type: 'AclSid', id: 'LIST' }],
    }),
    addAclSid: build.mutation<AclSid, Partial<AclSid>>({
      query: (body) => ({
        url: `AclSid`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'AclSid', id: 'LIST' }],
    }),
    getAclSid: build.query<AclSid, string>({
      query: (id) => `AclSid/${id}`,
      providesTags: (result, error, id) => [{ type: 'AclSid', id }],
    }),
    updateAclSid: build.mutation<void, Pick<AclSid, 'id'> & Partial<AclSid>>({
      query: ({ id, ...patch }) => ({
        url: `AclSid/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            AclSidService.util.updateQueryData('getAclSid', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'AclSid', id }],
    }),
    deleteAclSid: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `AclSid/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'AclSid', id }],
    }),
  }),
})

export const {
  useLazyGetAclSidsQuery,
  useGetAclSidQuery,
  useGetAclSidsQuery,
  useAddAclSidMutation,
  useUpdateAclSidMutation,
  useDeleteAclSidMutation,
} = AclSidService
