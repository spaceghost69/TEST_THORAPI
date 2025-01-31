import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Workbook } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type WorkbookResponse = Workbook[]

export const WorkbookService = createApi({
  reducerPath: 'Workbook', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Workbook'],
  endpoints: (build) => ({
    lazyGetWorkbooks: build.query<WorkbookResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Workbook?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Workbook' as const, id })),
            { type: 'Workbook', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getWorkbooks: build.query<WorkbookResponse, void>({
      query: () => 'Workbook',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Workbook' as const, id })),
              { type: 'Workbook', id: 'LIST' },
            ]
          : [{ type: 'Workbook', id: 'LIST' }],
    }),
    addWorkbook: build.mutation<Workbook, Partial<Workbook>>({
      query: (body) => ({
        url: `Workbook`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Workbook', id: 'LIST' }],
    }),
    getWorkbook: build.query<Workbook, string>({
      query: (id) => `Workbook/${id}`,
      providesTags: (result, error, id) => [{ type: 'Workbook', id }],
    }),
    updateWorkbook: build.mutation<void, Pick<Workbook, 'id'> & Partial<Workbook>>({
      query: ({ id, ...patch }) => ({
        url: `Workbook/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            WorkbookService.util.updateQueryData('getWorkbook', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Workbook', id }],
    }),
    deleteWorkbook: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Workbook/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Workbook', id }],
    }),
  }),
})

export const {
  useLazyGetWorkbooksQuery,
  useGetWorkbookQuery,
  useGetWorkbooksQuery,
  useAddWorkbookMutation,
  useUpdateWorkbookMutation,
  useDeleteWorkbookMutation,
} = WorkbookService
