import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type GameResponse = Game[]

export const GameService = createApi({
  reducerPath: 'Game', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Game'],
  endpoints: (build) => ({
    lazyGetGames: build.query<GameResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Game?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Game' as const, id })),
            { type: 'Game', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getGames: build.query<GameResponse, void>({
      query: () => 'Game',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Game' as const, id })),
              { type: 'Game', id: 'LIST' },
            ]
          : [{ type: 'Game', id: 'LIST' }],
    }),
    addGame: build.mutation<Game, Partial<Game>>({
      query: (body) => ({
        url: `Game`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Game', id: 'LIST' }],
    }),
    getGame: build.query<Game, string>({
      query: (id) => `Game/${id}`,
      providesTags: (result, error, id) => [{ type: 'Game', id }],
    }),
    updateGame: build.mutation<void, Pick<Game, 'id'> & Partial<Game>>({
      query: ({ id, ...patch }) => ({
        url: `Game/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            GameService.util.updateQueryData('getGame', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Game', id }],
    }),
    deleteGame: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Game/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Game', id }],
    }),
  }),
})

export const {
  useLazyGetGamesQuery,
  useGetGameQuery,
  useGetGamesQuery,
  useAddGameMutation,
  useUpdateGameMutation,
  useDeleteGameMutation,
} = GameService
