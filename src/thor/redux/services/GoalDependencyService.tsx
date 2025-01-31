import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GoalDependency } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type GoalDependencyResponse = GoalDependency[]

export const GoalDependencyService = createApi({
  reducerPath: 'GoalDependency', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['GoalDependency'],
  endpoints: (build) => ({
    lazyGetGoalDependencys: build.query<GoalDependencyResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `GoalDependency?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'GoalDependency' as const, id })),
            { type: 'GoalDependency', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getGoalDependencys: build.query<GoalDependencyResponse, void>({
      query: () => 'GoalDependency',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'GoalDependency' as const, id })),
              { type: 'GoalDependency', id: 'LIST' },
            ]
          : [{ type: 'GoalDependency', id: 'LIST' }],
    }),
    addGoalDependency: build.mutation<GoalDependency, Partial<GoalDependency>>({
      query: (body) => ({
        url: `GoalDependency`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'GoalDependency', id: 'LIST' }],
    }),
    getGoalDependency: build.query<GoalDependency, string>({
      query: (id) => `GoalDependency/${id}`,
      providesTags: (result, error, id) => [{ type: 'GoalDependency', id }],
    }),
    updateGoalDependency: build.mutation<void, Pick<GoalDependency, 'id'> & Partial<GoalDependency>>({
      query: ({ id, ...patch }) => ({
        url: `GoalDependency/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            GoalDependencyService.util.updateQueryData('getGoalDependency', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'GoalDependency', id }],
    }),
    deleteGoalDependency: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `GoalDependency/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'GoalDependency', id }],
    }),
  }),
})

export const {
  useLazyGetGoalDependencysQuery,
  useGetGoalDependencyQuery,
  useGetGoalDependencysQuery,
  useAddGoalDependencyMutation,
  useUpdateGoalDependencyMutation,
  useDeleteGoalDependencyMutation,
} = GoalDependencyService
