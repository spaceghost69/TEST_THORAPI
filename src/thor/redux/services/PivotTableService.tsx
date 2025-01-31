import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PivotTable } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type PivotTableResponse = PivotTable[]

export const PivotTableService = createApi({
  reducerPath: 'PivotTable', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['PivotTable'],
  endpoints: (build) => ({
    lazyGetPivotTables: build.query<PivotTableResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `PivotTable?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'PivotTable' as const, id })),
            { type: 'PivotTable', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getPivotTables: build.query<PivotTableResponse, void>({
      query: () => 'PivotTable',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'PivotTable' as const, id })),
              { type: 'PivotTable', id: 'LIST' },
            ]
          : [{ type: 'PivotTable', id: 'LIST' }],
    }),
    addPivotTable: build.mutation<PivotTable, Partial<PivotTable>>({
      query: (body) => ({
        url: `PivotTable`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'PivotTable', id: 'LIST' }],
    }),
    getPivotTable: build.query<PivotTable, string>({
      query: (id) => `PivotTable/${id}`,
      providesTags: (result, error, id) => [{ type: 'PivotTable', id }],
    }),
    updatePivotTable: build.mutation<void, Pick<PivotTable, 'id'> & Partial<PivotTable>>({
      query: ({ id, ...patch }) => ({
        url: `PivotTable/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            PivotTableService.util.updateQueryData('getPivotTable', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'PivotTable', id }],
    }),
    deletePivotTable: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `PivotTable/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'PivotTable', id }],
    }),
  }),
})

export const {
  useLazyGetPivotTablesQuery,
  useGetPivotTableQuery,
  useGetPivotTablesQuery,
  useAddPivotTableMutation,
  useUpdatePivotTableMutation,
  useDeletePivotTableMutation,
} = PivotTableService
