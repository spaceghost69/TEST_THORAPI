import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChartSeries } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type ChartSeriesResponse = ChartSeries[]

export const ChartSeriesService = createApi({
  reducerPath: 'ChartSeries', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['ChartSeries'],
  endpoints: (build) => ({
    lazyGetChartSeriess: build.query<ChartSeriesResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `ChartSeries?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'ChartSeries' as const, id })),
            { type: 'ChartSeries', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getChartSeriess: build.query<ChartSeriesResponse, void>({
      query: () => 'ChartSeries',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'ChartSeries' as const, id })),
              { type: 'ChartSeries', id: 'LIST' },
            ]
          : [{ type: 'ChartSeries', id: 'LIST' }],
    }),
    addChartSeries: build.mutation<ChartSeries, Partial<ChartSeries>>({
      query: (body) => ({
        url: `ChartSeries`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'ChartSeries', id: 'LIST' }],
    }),
    getChartSeries: build.query<ChartSeries, string>({
      query: (id) => `ChartSeries/${id}`,
      providesTags: (result, error, id) => [{ type: 'ChartSeries', id }],
    }),
    updateChartSeries: build.mutation<void, Pick<ChartSeries, 'id'> & Partial<ChartSeries>>({
      query: ({ id, ...patch }) => ({
        url: `ChartSeries/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            ChartSeriesService.util.updateQueryData('getChartSeries', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'ChartSeries', id }],
    }),
    deleteChartSeries: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `ChartSeries/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'ChartSeries', id }],
    }),
  }),
})

export const {
  useLazyGetChartSeriessQuery,
  useGetChartSeriesQuery,
  useGetChartSeriessQuery,
  useAddChartSeriesMutation,
  useUpdateChartSeriesMutation,
  useDeleteChartSeriesMutation,
} = ChartSeriesService
