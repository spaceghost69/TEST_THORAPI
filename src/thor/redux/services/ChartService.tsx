import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Chart } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type ChartResponse = Chart[]

export const ChartService = createApi({
  reducerPath: 'Chart', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Chart'],
  endpoints: (build) => ({
    lazyGetCharts: build.query<ChartResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Chart?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Chart' as const, id })),
            { type: 'Chart', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getCharts: build.query<ChartResponse, void>({
      query: () => 'Chart',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Chart' as const, id })),
              { type: 'Chart', id: 'LIST' },
            ]
          : [{ type: 'Chart', id: 'LIST' }],
    }),
    addChart: build.mutation<Chart, Partial<Chart>>({
      query: (body) => ({
        url: `Chart`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Chart', id: 'LIST' }],
    }),
    getChart: build.query<Chart, string>({
      query: (id) => `Chart/${id}`,
      providesTags: (result, error, id) => [{ type: 'Chart', id }],
    }),
    updateChart: build.mutation<void, Pick<Chart, 'id'> & Partial<Chart>>({
      query: ({ id, ...patch }) => ({
        url: `Chart/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            ChartService.util.updateQueryData('getChart', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Chart', id }],
    }),
    deleteChart: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Chart/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Chart', id }],
    }),
  }),
})

export const {
  useLazyGetChartsQuery,
  useGetChartQuery,
  useGetChartsQuery,
  useAddChartMutation,
  useUpdateChartMutation,
  useDeleteChartMutation,
} = ChartService
