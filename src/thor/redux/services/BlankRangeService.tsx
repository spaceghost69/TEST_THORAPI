import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BlankRange } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type BlankRangeResponse = BlankRange[]

export const BlankRangeService = createApi({
  reducerPath: 'BlankRange', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['BlankRange'],
  endpoints: (build) => ({
    lazyGetBlankRanges: build.query<BlankRangeResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `BlankRange?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'BlankRange' as const, id })),
            { type: 'BlankRange', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getBlankRanges: build.query<BlankRangeResponse, void>({
      query: () => 'BlankRange',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'BlankRange' as const, id })),
              { type: 'BlankRange', id: 'LIST' },
            ]
          : [{ type: 'BlankRange', id: 'LIST' }],
    }),
    addBlankRange: build.mutation<BlankRange, Partial<BlankRange>>({
      query: (body) => ({
        url: `BlankRange`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'BlankRange', id: 'LIST' }],
    }),
    getBlankRange: build.query<BlankRange, string>({
      query: (id) => `BlankRange/${id}`,
      providesTags: (result, error, id) => [{ type: 'BlankRange', id }],
    }),
    updateBlankRange: build.mutation<void, Pick<BlankRange, 'id'> & Partial<BlankRange>>({
      query: ({ id, ...patch }) => ({
        url: `BlankRange/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            BlankRangeService.util.updateQueryData('getBlankRange', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'BlankRange', id }],
    }),
    deleteBlankRange: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `BlankRange/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'BlankRange', id }],
    }),
  }),
})

export const {
  useLazyGetBlankRangesQuery,
  useGetBlankRangeQuery,
  useGetBlankRangesQuery,
  useAddBlankRangeMutation,
  useUpdateBlankRangeMutation,
  useDeleteBlankRangeMutation,
} = BlankRangeService
