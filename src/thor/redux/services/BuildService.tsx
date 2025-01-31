import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Build } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type BuildResponse = Build[]

export const BuildService = createApi({
  reducerPath: 'Build', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Build'],
  endpoints: (build) => ({
    lazyGetBuilds: build.query<BuildResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Build?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Build' as const, id })),
            { type: 'Build', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getBuilds: build.query<BuildResponse, void>({
      query: () => 'Build',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Build' as const, id })),
              { type: 'Build', id: 'LIST' },
            ]
          : [{ type: 'Build', id: 'LIST' }],
    }),
    addBuild: build.mutation<Build, Partial<Build>>({
      query: (body) => ({
        url: `Build`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Build', id: 'LIST' }],
    }),
    getBuild: build.query<Build, string>({
      query: (id) => `Build/${id}`,
      providesTags: (result, error, id) => [{ type: 'Build', id }],
    }),
    updateBuild: build.mutation<void, Pick<Build, 'id'> & Partial<Build>>({
      query: ({ id, ...patch }) => ({
        url: `Build/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            BuildService.util.updateQueryData('getBuild', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Build', id }],
    }),
    deleteBuild: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Build/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Build', id }],
    }),
  }),
})

export const {
  useLazyGetBuildsQuery,
  useGetBuildQuery,
  useGetBuildsQuery,
  useAddBuildMutation,
  useUpdateBuildMutation,
  useDeleteBuildMutation,
} = BuildService
