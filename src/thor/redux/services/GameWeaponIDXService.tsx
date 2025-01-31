import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GameWeaponIDX } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type GameWeaponIDXResponse = GameWeaponIDX[]

export const GameWeaponIDXService = createApi({
  reducerPath: 'GameWeaponIDX', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['GameWeaponIDX'],
  endpoints: (build) => ({
    lazyGetGameWeaponIDXs: build.query<GameWeaponIDXResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `GameWeaponIDX?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'GameWeaponIDX' as const, id })),
            { type: 'GameWeaponIDX', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getGameWeaponIDXs: build.query<GameWeaponIDXResponse, void>({
      query: () => 'GameWeaponIDX',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'GameWeaponIDX' as const, id })),
              { type: 'GameWeaponIDX', id: 'LIST' },
            ]
          : [{ type: 'GameWeaponIDX', id: 'LIST' }],
    }),
    addGameWeaponIDX: build.mutation<GameWeaponIDX, Partial<GameWeaponIDX>>({
      query: (body) => ({
        url: `GameWeaponIDX`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'GameWeaponIDX', id: 'LIST' }],
    }),
    getGameWeaponIDX: build.query<GameWeaponIDX, string>({
      query: (id) => `GameWeaponIDX/${id}`,
      providesTags: (result, error, id) => [{ type: 'GameWeaponIDX', id }],
    }),
    updateGameWeaponIDX: build.mutation<void, Pick<GameWeaponIDX, 'id'> & Partial<GameWeaponIDX>>({
      query: ({ id, ...patch }) => ({
        url: `GameWeaponIDX/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            GameWeaponIDXService.util.updateQueryData('getGameWeaponIDX', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'GameWeaponIDX', id }],
    }),
    deleteGameWeaponIDX: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `GameWeaponIDX/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'GameWeaponIDX', id }],
    }),
  }),
})

export const {
  useLazyGetGameWeaponIDXsQuery,
  useGetGameWeaponIDXQuery,
  useGetGameWeaponIDXsQuery,
  useAddGameWeaponIDXMutation,
  useUpdateGameWeaponIDXMutation,
  useDeleteGameWeaponIDXMutation,
} = GameWeaponIDXService
