import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NamedRange } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type NamedRangeResponse = NamedRange[]

export const NamedRangeService = createApi({
  reducerPath: 'NamedRange', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['NamedRange'],
  endpoints: (build) => ({
    lazyGetNamedRanges: build.query<NamedRangeResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `NamedRange?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'NamedRange' as const, id })),
            { type: 'NamedRange', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getNamedRanges: build.query<NamedRangeResponse, void>({
      query: () => 'NamedRange',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'NamedRange' as const, id })),
              { type: 'NamedRange', id: 'LIST' },
            ]
          : [{ type: 'NamedRange', id: 'LIST' }],
    }),
    addNamedRange: build.mutation<NamedRange, Partial<NamedRange>>({
      query: (body) => ({
        url: `NamedRange`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'NamedRange', id: 'LIST' }],
    }),
    getNamedRange: build.query<NamedRange, string>({
      query: (id) => `NamedRange/${id}`,
      providesTags: (result, error, id) => [{ type: 'NamedRange', id }],
    }),
    updateNamedRange: build.mutation<void, Pick<NamedRange, 'id'> & Partial<NamedRange>>({
      query: ({ id, ...patch }) => ({
        url: `NamedRange/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            NamedRangeService.util.updateQueryData('getNamedRange', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'NamedRange', id }],
    }),
    deleteNamedRange: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `NamedRange/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'NamedRange', id }],
    }),
  }),
})

export const {
  useLazyGetNamedRangesQuery,
  useGetNamedRangeQuery,
  useGetNamedRangesQuery,
  useAddNamedRangeMutation,
  useUpdateNamedRangeMutation,
  useDeleteNamedRangeMutation,
} = NamedRangeService
