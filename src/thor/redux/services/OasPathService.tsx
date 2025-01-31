import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OasPath } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type OasPathResponse = OasPath[]

export const OasPathService = createApi({
  reducerPath: 'OasPath', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['OasPath'],
  endpoints: (build) => ({
    lazyGetOasPaths: build.query<OasPathResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `OasPath?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'OasPath' as const, id })),
            { type: 'OasPath', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getOasPaths: build.query<OasPathResponse, void>({
      query: () => 'OasPath',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'OasPath' as const, id })),
              { type: 'OasPath', id: 'LIST' },
            ]
          : [{ type: 'OasPath', id: 'LIST' }],
    }),
    addOasPath: build.mutation<OasPath, Partial<OasPath>>({
      query: (body) => ({
        url: `OasPath`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'OasPath', id: 'LIST' }],
    }),
    getOasPath: build.query<OasPath, string>({
      query: (id) => `OasPath/${id}`,
      providesTags: (result, error, id) => [{ type: 'OasPath', id }],
    }),
    updateOasPath: build.mutation<void, Pick<OasPath, 'id'> & Partial<OasPath>>({
      query: ({ id, ...patch }) => ({
        url: `OasPath/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            OasPathService.util.updateQueryData('getOasPath', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'OasPath', id }],
    }),
    deleteOasPath: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `OasPath/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'OasPath', id }],
    }),
  }),
})

export const {
  useLazyGetOasPathsQuery,
  useGetOasPathQuery,
  useGetOasPathsQuery,
  useAddOasPathMutation,
  useUpdateOasPathMutation,
  useDeleteOasPathMutation,
} = OasPathService
