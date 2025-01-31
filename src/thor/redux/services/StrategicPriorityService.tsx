import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { StrategicPriority } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type StrategicPriorityResponse = StrategicPriority[]

export const StrategicPriorityService = createApi({
  reducerPath: 'StrategicPriority', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['StrategicPriority'],
  endpoints: (build) => ({
    lazyGetStrategicPrioritys: build.query<StrategicPriorityResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `StrategicPriority?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'StrategicPriority' as const, id })),
            { type: 'StrategicPriority', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getStrategicPrioritys: build.query<StrategicPriorityResponse, void>({
      query: () => 'StrategicPriority',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'StrategicPriority' as const, id })),
              { type: 'StrategicPriority', id: 'LIST' },
            ]
          : [{ type: 'StrategicPriority', id: 'LIST' }],
    }),
    addStrategicPriority: build.mutation<StrategicPriority, Partial<StrategicPriority>>({
      query: (body) => ({
        url: `StrategicPriority`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'StrategicPriority', id: 'LIST' }],
    }),
    getStrategicPriority: build.query<StrategicPriority, string>({
      query: (id) => `StrategicPriority/${id}`,
      providesTags: (result, error, id) => [{ type: 'StrategicPriority', id }],
    }),
    updateStrategicPriority: build.mutation<void, Pick<StrategicPriority, 'id'> & Partial<StrategicPriority>>({
      query: ({ id, ...patch }) => ({
        url: `StrategicPriority/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            StrategicPriorityService.util.updateQueryData('getStrategicPriority', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'StrategicPriority', id }],
    }),
    deleteStrategicPriority: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `StrategicPriority/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'StrategicPriority', id }],
    }),
  }),
})

export const {
  useLazyGetStrategicPrioritysQuery,
  useGetStrategicPriorityQuery,
  useGetStrategicPrioritysQuery,
  useAddStrategicPriorityMutation,
  useUpdateStrategicPriorityMutation,
  useDeleteStrategicPriorityMutation,
} = StrategicPriorityService
