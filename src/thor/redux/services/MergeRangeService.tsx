import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MergeRange } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type MergeRangeResponse = MergeRange[]

export const MergeRangeService = createApi({
  reducerPath: 'MergeRange', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['MergeRange'],
  endpoints: (build) => ({
    lazyGetMergeRanges: build.query<MergeRangeResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `MergeRange?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'MergeRange' as const, id })),
            { type: 'MergeRange', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getMergeRanges: build.query<MergeRangeResponse, void>({
      query: () => 'MergeRange',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'MergeRange' as const, id })),
              { type: 'MergeRange', id: 'LIST' },
            ]
          : [{ type: 'MergeRange', id: 'LIST' }],
    }),
    addMergeRange: build.mutation<MergeRange, Partial<MergeRange>>({
      query: (body) => ({
        url: `MergeRange`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'MergeRange', id: 'LIST' }],
    }),
    getMergeRange: build.query<MergeRange, string>({
      query: (id) => `MergeRange/${id}`,
      providesTags: (result, error, id) => [{ type: 'MergeRange', id }],
    }),
    updateMergeRange: build.mutation<void, Pick<MergeRange, 'id'> & Partial<MergeRange>>({
      query: ({ id, ...patch }) => ({
        url: `MergeRange/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            MergeRangeService.util.updateQueryData('getMergeRange', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'MergeRange', id }],
    }),
    deleteMergeRange: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `MergeRange/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'MergeRange', id }],
    }),
  }),
})

export const {
  useLazyGetMergeRangesQuery,
  useGetMergeRangeQuery,
  useGetMergeRangesQuery,
  useAddMergeRangeMutation,
  useUpdateMergeRangeMutation,
  useDeleteMergeRangeMutation,
} = MergeRangeService
