import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Stack } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type StackResponse = Stack[]

export const StackService = createApi({
  reducerPath: 'Stack', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Stack'],
  endpoints: (build) => ({
    lazyGetStacks: build.query<StackResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Stack?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Stack' as const, id })),
            { type: 'Stack', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getStacks: build.query<StackResponse, void>({
      query: () => 'Stack',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Stack' as const, id })),
              { type: 'Stack', id: 'LIST' },
            ]
          : [{ type: 'Stack', id: 'LIST' }],
    }),
    addStack: build.mutation<Stack, Partial<Stack>>({
      query: (body) => ({
        url: `Stack`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Stack', id: 'LIST' }],
    }),
    getStack: build.query<Stack, string>({
      query: (id) => `Stack/${id}`,
      providesTags: (result, error, id) => [{ type: 'Stack', id }],
    }),
    updateStack: build.mutation<void, Pick<Stack, 'id'> & Partial<Stack>>({
      query: ({ id, ...patch }) => ({
        url: `Stack/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            StackService.util.updateQueryData('getStack', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Stack', id }],
    }),
    deleteStack: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Stack/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Stack', id }],
    }),
  }),
})

export const {
  useLazyGetStacksQuery,
  useGetStackQuery,
  useGetStacksQuery,
  useAddStackMutation,
  useUpdateStackMutation,
  useDeleteStackMutation,
} = StackService
