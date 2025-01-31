import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SalesActivity } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type SalesActivityResponse = SalesActivity[]

export const SalesActivityService = createApi({
  reducerPath: 'SalesActivity', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['SalesActivity'],
  endpoints: (build) => ({
    lazyGetSalesActivitys: build.query<SalesActivityResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `SalesActivity?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'SalesActivity' as const, id })),
            { type: 'SalesActivity', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getSalesActivitys: build.query<SalesActivityResponse, void>({
      query: () => 'SalesActivity',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'SalesActivity' as const, id })),
              { type: 'SalesActivity', id: 'LIST' },
            ]
          : [{ type: 'SalesActivity', id: 'LIST' }],
    }),
    addSalesActivity: build.mutation<SalesActivity, Partial<SalesActivity>>({
      query: (body) => ({
        url: `SalesActivity`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'SalesActivity', id: 'LIST' }],
    }),
    getSalesActivity: build.query<SalesActivity, string>({
      query: (id) => `SalesActivity/${id}`,
      providesTags: (result, error, id) => [{ type: 'SalesActivity', id }],
    }),
    updateSalesActivity: build.mutation<void, Pick<SalesActivity, 'id'> & Partial<SalesActivity>>({
      query: ({ id, ...patch }) => ({
        url: `SalesActivity/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            SalesActivityService.util.updateQueryData('getSalesActivity', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'SalesActivity', id }],
    }),
    deleteSalesActivity: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `SalesActivity/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'SalesActivity', id }],
    }),
  }),
})

export const {
  useLazyGetSalesActivitysQuery,
  useGetSalesActivityQuery,
  useGetSalesActivitysQuery,
  useAddSalesActivityMutation,
  useUpdateSalesActivityMutation,
  useDeleteSalesActivityMutation,
} = SalesActivityService
