import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserPreferences } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type UserPreferencesResponse = UserPreferences[]

export const UserPreferencesService = createApi({
  reducerPath: 'UserPreferences', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['UserPreferences'],
  endpoints: (build) => ({
    lazyGetUserPreferencess: build.query<UserPreferencesResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `UserPreferences?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'UserPreferences' as const, id })),
            { type: 'UserPreferences', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getUserPreferencess: build.query<UserPreferencesResponse, void>({
      query: () => 'UserPreferences',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'UserPreferences' as const, id })),
              { type: 'UserPreferences', id: 'LIST' },
            ]
          : [{ type: 'UserPreferences', id: 'LIST' }],
    }),
    addUserPreferences: build.mutation<UserPreferences, Partial<UserPreferences>>({
      query: (body) => ({
        url: `UserPreferences`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'UserPreferences', id: 'LIST' }],
    }),
    getUserPreferences: build.query<UserPreferences, string>({
      query: (id) => `UserPreferences/${id}`,
      providesTags: (result, error, id) => [{ type: 'UserPreferences', id }],
    }),
    updateUserPreferences: build.mutation<void, Pick<UserPreferences, 'id'> & Partial<UserPreferences>>({
      query: ({ id, ...patch }) => ({
        url: `UserPreferences/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            UserPreferencesService.util.updateQueryData('getUserPreferences', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'UserPreferences', id }],
    }),
    deleteUserPreferences: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `UserPreferences/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'UserPreferences', id }],
    }),
  }),
})

export const {
  useLazyGetUserPreferencessQuery,
  useGetUserPreferencesQuery,
  useGetUserPreferencessQuery,
  useAddUserPreferencesMutation,
  useUpdateUserPreferencesMutation,
  useDeleteUserPreferencesMutation,
} = UserPreferencesService
