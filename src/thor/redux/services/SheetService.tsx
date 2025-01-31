import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Sheet } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type SheetResponse = Sheet[]

export const SheetService = createApi({
  reducerPath: 'Sheet', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Sheet'],
  endpoints: (build) => ({
    lazyGetSheets: build.query<SheetResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Sheet?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Sheet' as const, id })),
            { type: 'Sheet', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getSheets: build.query<SheetResponse, void>({
      query: () => 'Sheet',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Sheet' as const, id })),
              { type: 'Sheet', id: 'LIST' },
            ]
          : [{ type: 'Sheet', id: 'LIST' }],
    }),
    addSheet: build.mutation<Sheet, Partial<Sheet>>({
      query: (body) => ({
        url: `Sheet`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Sheet', id: 'LIST' }],
    }),
    getSheet: build.query<Sheet, string>({
      query: (id) => `Sheet/${id}`,
      providesTags: (result, error, id) => [{ type: 'Sheet', id }],
    }),
    updateSheet: build.mutation<void, Pick<Sheet, 'id'> & Partial<Sheet>>({
      query: ({ id, ...patch }) => ({
        url: `Sheet/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            SheetService.util.updateQueryData('getSheet', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Sheet', id }],
    }),
    deleteSheet: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Sheet/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Sheet', id }],
    }),
  }),
})

export const {
  useLazyGetSheetsQuery,
  useGetSheetQuery,
  useGetSheetsQuery,
  useAddSheetMutation,
  useUpdateSheetMutation,
  useDeleteSheetMutation,
} = SheetService
