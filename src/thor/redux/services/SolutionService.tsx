import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Solution } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type SolutionResponse = Solution[]

export const SolutionService = createApi({
  reducerPath: 'Solution', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Solution'],
  endpoints: (build) => ({
    lazyGetSolutions: build.query<SolutionResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Solution?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Solution' as const, id })),
            { type: 'Solution', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getSolutions: build.query<SolutionResponse, void>({
      query: () => 'Solution',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Solution' as const, id })),
              { type: 'Solution', id: 'LIST' },
            ]
          : [{ type: 'Solution', id: 'LIST' }],
    }),
    addSolution: build.mutation<Solution, Partial<Solution>>({
      query: (body) => ({
        url: `Solution`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Solution', id: 'LIST' }],
    }),
    getSolution: build.query<Solution, string>({
      query: (id) => `Solution/${id}`,
      providesTags: (result, error, id) => [{ type: 'Solution', id }],
    }),
    updateSolution: build.mutation<void, Pick<Solution, 'id'> & Partial<Solution>>({
      query: ({ id, ...patch }) => ({
        url: `Solution/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            SolutionService.util.updateQueryData('getSolution', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Solution', id }],
    }),
    deleteSolution: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Solution/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Solution', id }],
    }),
  }),
})

export const {
  useLazyGetSolutionsQuery,
  useGetSolutionQuery,
  useGetSolutionsQuery,
  useAddSolutionMutation,
  useUpdateSolutionMutation,
  useDeleteSolutionMutation,
} = SolutionService
