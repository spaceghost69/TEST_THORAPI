import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AclEntry } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type AclEntryResponse = AclEntry[]

export const AclEntryService = createApi({
  reducerPath: 'AclEntry', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['AclEntry'],
  endpoints: (build) => ({
    lazyGetAclEntrys: build.query<AclEntryResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `AclEntry?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'AclEntry' as const, id })),
            { type: 'AclEntry', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getAclEntrys: build.query<AclEntryResponse, void>({
      query: () => 'AclEntry',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'AclEntry' as const, id })),
              { type: 'AclEntry', id: 'LIST' },
            ]
          : [{ type: 'AclEntry', id: 'LIST' }],
    }),
    addAclEntry: build.mutation<AclEntry, Partial<AclEntry>>({
      query: (body) => ({
        url: `AclEntry`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'AclEntry', id: 'LIST' }],
    }),
    getAclEntry: build.query<AclEntry, string>({
      query: (id) => `AclEntry/${id}`,
      providesTags: (result, error, id) => [{ type: 'AclEntry', id }],
    }),
    updateAclEntry: build.mutation<void, Pick<AclEntry, 'id'> & Partial<AclEntry>>({
      query: ({ id, ...patch }) => ({
        url: `AclEntry/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            AclEntryService.util.updateQueryData('getAclEntry', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'AclEntry', id }],
    }),
    deleteAclEntry: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `AclEntry/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'AclEntry', id }],
    }),
  }),
})

export const {
  useLazyGetAclEntrysQuery,
  useGetAclEntryQuery,
  useGetAclEntrysQuery,
  useAddAclEntryMutation,
  useUpdateAclEntryMutation,
  useDeleteAclEntryMutation,
} = AclEntryService
