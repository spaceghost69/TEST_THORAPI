import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SheetRow } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type SheetRowResponse = SheetRow[]

export const SheetRowService = createApi({
  reducerPath: 'SheetRow', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['SheetRow'],
  endpoints: (build) => ({
    lazyGetSheetRows: build.query<SheetRowResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `SheetRow?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'SheetRow' as const, id })),
            { type: 'SheetRow', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getSheetRows: build.query<SheetRowResponse, void>({
      query: () => 'SheetRow',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'SheetRow' as const, id })),
              { type: 'SheetRow', id: 'LIST' },
            ]
          : [{ type: 'SheetRow', id: 'LIST' }],
    }),
    addSheetRow: build.mutation<SheetRow, Partial<SheetRow>>({
      query: (body) => ({
        url: `SheetRow`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'SheetRow', id: 'LIST' }],
    }),
    getSheetRow: build.query<SheetRow, string>({
      query: (id) => `SheetRow/${id}`,
      providesTags: (result, error, id) => [{ type: 'SheetRow', id }],
    }),
    updateSheetRow: build.mutation<void, Pick<SheetRow, 'id'> & Partial<SheetRow>>({
      query: ({ id, ...patch }) => ({
        url: `SheetRow/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            SheetRowService.util.updateQueryData('getSheetRow', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'SheetRow', id }],
    }),
    deleteSheetRow: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `SheetRow/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'SheetRow', id }],
    }),
  }),
})

export const {
  useLazyGetSheetRowsQuery,
  useGetSheetRowQuery,
  useGetSheetRowsQuery,
  useAddSheetRowMutation,
  useUpdateSheetRowMutation,
  useDeleteSheetRowMutation,
} = SheetRowService
