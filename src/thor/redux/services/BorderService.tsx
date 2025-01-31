import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Border } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type BorderResponse = Border[]

export const BorderService = createApi({
  reducerPath: 'Border', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Border'],
  endpoints: (build) => ({
    lazyGetBorders: build.query<BorderResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Border?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Border' as const, id })),
            { type: 'Border', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getBorders: build.query<BorderResponse, void>({
      query: () => 'Border',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Border' as const, id })),
              { type: 'Border', id: 'LIST' },
            ]
          : [{ type: 'Border', id: 'LIST' }],
    }),
    addBorder: build.mutation<Border, Partial<Border>>({
      query: (body) => ({
        url: `Border`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Border', id: 'LIST' }],
    }),
    getBorder: build.query<Border, string>({
      query: (id) => `Border/${id}`,
      providesTags: (result, error, id) => [{ type: 'Border', id }],
    }),
    updateBorder: build.mutation<void, Pick<Border, 'id'> & Partial<Border>>({
      query: ({ id, ...patch }) => ({
        url: `Border/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            BorderService.util.updateQueryData('getBorder', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Border', id }],
    }),
    deleteBorder: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Border/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Border', id }],
    }),
  }),
})

export const {
  useLazyGetBordersQuery,
  useGetBorderQuery,
  useGetBordersQuery,
  useAddBorderMutation,
  useUpdateBorderMutation,
  useDeleteBorderMutation,
} = BorderService
