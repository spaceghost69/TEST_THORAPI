import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SheetColumn } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type SheetColumnResponse = SheetColumn[]

export const SheetColumnService = createApi({
  reducerPath: 'SheetColumn', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['SheetColumn'],
  endpoints: (build) => ({
    lazyGetSheetColumns: build.query<SheetColumnResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `SheetColumn?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'SheetColumn' as const, id })),
            { type: 'SheetColumn', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getSheetColumns: build.query<SheetColumnResponse, void>({
      query: () => 'SheetColumn',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'SheetColumn' as const, id })),
              { type: 'SheetColumn', id: 'LIST' },
            ]
          : [{ type: 'SheetColumn', id: 'LIST' }],
    }),
    addSheetColumn: build.mutation<SheetColumn, Partial<SheetColumn>>({
      query: (body) => ({
        url: `SheetColumn`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'SheetColumn', id: 'LIST' }],
    }),
    getSheetColumn: build.query<SheetColumn, string>({
      query: (id) => `SheetColumn/${id}`,
      providesTags: (result, error, id) => [{ type: 'SheetColumn', id }],
    }),
    updateSheetColumn: build.mutation<void, Pick<SheetColumn, 'id'> & Partial<SheetColumn>>({
      query: ({ id, ...patch }) => ({
        url: `SheetColumn/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            SheetColumnService.util.updateQueryData('getSheetColumn', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'SheetColumn', id }],
    }),
    deleteSheetColumn: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `SheetColumn/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'SheetColumn', id }],
    }),
  }),
})

export const {
  useLazyGetSheetColumnsQuery,
  useGetSheetColumnQuery,
  useGetSheetColumnsQuery,
  useAddSheetColumnMutation,
  useUpdateSheetColumnMutation,
  useDeleteSheetColumnMutation,
} = SheetColumnService
