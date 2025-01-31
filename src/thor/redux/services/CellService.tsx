import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cell } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type CellResponse = Cell[]

export const CellService = createApi({
  reducerPath: 'Cell', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Cell'],
  endpoints: (build) => ({
    lazyGetCells: build.query<CellResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Cell?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Cell' as const, id })),
            { type: 'Cell', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getCells: build.query<CellResponse, void>({
      query: () => 'Cell',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Cell' as const, id })),
              { type: 'Cell', id: 'LIST' },
            ]
          : [{ type: 'Cell', id: 'LIST' }],
    }),
    addCell: build.mutation<Cell, Partial<Cell>>({
      query: (body) => ({
        url: `Cell`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Cell', id: 'LIST' }],
    }),
    getCell: build.query<Cell, string>({
      query: (id) => `Cell/${id}`,
      providesTags: (result, error, id) => [{ type: 'Cell', id }],
    }),
    updateCell: build.mutation<void, Pick<Cell, 'id'> & Partial<Cell>>({
      query: ({ id, ...patch }) => ({
        url: `Cell/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            CellService.util.updateQueryData('getCell', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Cell', id }],
    }),
    deleteCell: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Cell/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Cell', id }],
    }),
  }),
})

export const {
  useLazyGetCellsQuery,
  useGetCellQuery,
  useGetCellsQuery,
  useAddCellMutation,
  useUpdateCellMutation,
  useDeleteCellMutation,
} = CellService
