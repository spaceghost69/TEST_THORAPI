import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Reaction } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type ReactionResponse = Reaction[]

export const ReactionService = createApi({
  reducerPath: 'Reaction', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Reaction'],
  endpoints: (build) => ({
    lazyGetReactions: build.query<ReactionResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Reaction?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Reaction' as const, id })),
            { type: 'Reaction', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getReactions: build.query<ReactionResponse, void>({
      query: () => 'Reaction',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Reaction' as const, id })),
              { type: 'Reaction', id: 'LIST' },
            ]
          : [{ type: 'Reaction', id: 'LIST' }],
    }),
    addReaction: build.mutation<Reaction, Partial<Reaction>>({
      query: (body) => ({
        url: `Reaction`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Reaction', id: 'LIST' }],
    }),
    getReaction: build.query<Reaction, string>({
      query: (id) => `Reaction/${id}`,
      providesTags: (result, error, id) => [{ type: 'Reaction', id }],
    }),
    updateReaction: build.mutation<void, Pick<Reaction, 'id'> & Partial<Reaction>>({
      query: ({ id, ...patch }) => ({
        url: `Reaction/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            ReactionService.util.updateQueryData('getReaction', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Reaction', id }],
    }),
    deleteReaction: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Reaction/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Reaction', id }],
    }),
  }),
})

export const {
  useLazyGetReactionsQuery,
  useGetReactionQuery,
  useGetReactionsQuery,
  useAddReactionMutation,
  useUpdateReactionMutation,
  useDeleteReactionMutation,
} = ReactionService
