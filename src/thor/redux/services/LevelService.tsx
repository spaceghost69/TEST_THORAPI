import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Level } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type LevelResponse = Level[]

export const LevelService = createApi({
  reducerPath: 'Level', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Level'],
  endpoints: (build) => ({
    lazyGetLevels: build.query<LevelResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Level?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Level' as const, id })),
            { type: 'Level', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getLevels: build.query<LevelResponse, void>({
      query: () => 'Level',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Level' as const, id })),
              { type: 'Level', id: 'LIST' },
            ]
          : [{ type: 'Level', id: 'LIST' }],
    }),
    addLevel: build.mutation<Level, Partial<Level>>({
      query: (body) => ({
        url: `Level`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Level', id: 'LIST' }],
    }),
    getLevel: build.query<Level, string>({
      query: (id) => `Level/${id}`,
      providesTags: (result, error, id) => [{ type: 'Level', id }],
    }),
    updateLevel: build.mutation<void, Pick<Level, 'id'> & Partial<Level>>({
      query: ({ id, ...patch }) => ({
        url: `Level/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            LevelService.util.updateQueryData('getLevel', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Level', id }],
    }),
    deleteLevel: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Level/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Level', id }],
    }),
  }),
})

export const {
  useLazyGetLevelsQuery,
  useGetLevelQuery,
  useGetLevelsQuery,
  useAddLevelMutation,
  useUpdateLevelMutation,
  useDeleteLevelMutation,
} = LevelService
