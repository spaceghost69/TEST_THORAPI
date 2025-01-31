import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { KeyMetric } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type KeyMetricResponse = KeyMetric[]

export const KeyMetricService = createApi({
  reducerPath: 'KeyMetric', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['KeyMetric'],
  endpoints: (build) => ({
    lazyGetKeyMetrics: build.query<KeyMetricResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `KeyMetric?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'KeyMetric' as const, id })),
            { type: 'KeyMetric', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getKeyMetrics: build.query<KeyMetricResponse, void>({
      query: () => 'KeyMetric',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'KeyMetric' as const, id })),
              { type: 'KeyMetric', id: 'LIST' },
            ]
          : [{ type: 'KeyMetric', id: 'LIST' }],
    }),
    addKeyMetric: build.mutation<KeyMetric, Partial<KeyMetric>>({
      query: (body) => ({
        url: `KeyMetric`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'KeyMetric', id: 'LIST' }],
    }),
    getKeyMetric: build.query<KeyMetric, string>({
      query: (id) => `KeyMetric/${id}`,
      providesTags: (result, error, id) => [{ type: 'KeyMetric', id }],
    }),
    updateKeyMetric: build.mutation<void, Pick<KeyMetric, 'id'> & Partial<KeyMetric>>({
      query: ({ id, ...patch }) => ({
        url: `KeyMetric/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            KeyMetricService.util.updateQueryData('getKeyMetric', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'KeyMetric', id }],
    }),
    deleteKeyMetric: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `KeyMetric/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'KeyMetric', id }],
    }),
  }),
})

export const {
  useLazyGetKeyMetricsQuery,
  useGetKeyMetricQuery,
  useGetKeyMetricsQuery,
  useAddKeyMetricMutation,
  useUpdateKeyMetricMutation,
  useDeleteKeyMetricMutation,
} = KeyMetricService
