import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Goal } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type GoalResponse = Goal[]

export const GoalService = createApi({
  reducerPath: 'Goal', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Goal'],
  endpoints: (build) => ({
    lazyGetGoals: build.query<GoalResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Goal?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Goal' as const, id })),
            { type: 'Goal', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getGoals: build.query<GoalResponse, void>({
      query: () => 'Goal',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Goal' as const, id })),
              { type: 'Goal', id: 'LIST' },
            ]
          : [{ type: 'Goal', id: 'LIST' }],
    }),
    addGoal: build.mutation<Goal, Partial<Goal>>({
      query: (body) => ({
        url: `Goal`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Goal', id: 'LIST' }],
    }),
    getGoal: build.query<Goal, string>({
      query: (id) => `Goal/${id}`,
      providesTags: (result, error, id) => [{ type: 'Goal', id }],
    }),
    updateGoal: build.mutation<void, Pick<Goal, 'id'> & Partial<Goal>>({
      query: ({ id, ...patch }) => ({
        url: `Goal/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            GoalService.util.updateQueryData('getGoal', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Goal', id }],
    }),
    deleteGoal: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Goal/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Goal', id }],
    }),
  }),
})

export const {
  useLazyGetGoalsQuery,
  useGetGoalQuery,
  useGetGoalsQuery,
  useAddGoalMutation,
  useUpdateGoalMutation,
  useDeleteGoalMutation,
} = GoalService
