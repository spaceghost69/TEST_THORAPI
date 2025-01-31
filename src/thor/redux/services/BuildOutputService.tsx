import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BuildOutput } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type BuildOutputResponse = BuildOutput[]

export const BuildOutputService = createApi({
  reducerPath: 'BuildOutput', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['BuildOutput'],
  endpoints: (build) => ({
    lazyGetBuildOutputs: build.query<BuildOutputResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `BuildOutput?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'BuildOutput' as const, id })),
            { type: 'BuildOutput', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getBuildOutputs: build.query<BuildOutputResponse, void>({
      query: () => 'BuildOutput',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'BuildOutput' as const, id })),
              { type: 'BuildOutput', id: 'LIST' },
            ]
          : [{ type: 'BuildOutput', id: 'LIST' }],
    }),
    addBuildOutput: build.mutation<BuildOutput, Partial<BuildOutput>>({
      query: (body) => ({
        url: `BuildOutput`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'BuildOutput', id: 'LIST' }],
    }),
    getBuildOutput: build.query<BuildOutput, string>({
      query: (id) => `BuildOutput/${id}`,
      providesTags: (result, error, id) => [{ type: 'BuildOutput', id }],
    }),
    updateBuildOutput: build.mutation<void, Pick<BuildOutput, 'id'> & Partial<BuildOutput>>({
      query: ({ id, ...patch }) => ({
        url: `BuildOutput/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            BuildOutputService.util.updateQueryData('getBuildOutput', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'BuildOutput', id }],
    }),
    deleteBuildOutput: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `BuildOutput/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'BuildOutput', id }],
    }),
  }),
})

export const {
  useLazyGetBuildOutputsQuery,
  useGetBuildOutputQuery,
  useGetBuildOutputsQuery,
  useAddBuildOutputMutation,
  useUpdateBuildOutputMutation,
  useDeleteBuildOutputMutation,
} = BuildOutputService
