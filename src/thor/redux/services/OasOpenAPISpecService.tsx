import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OasOpenAPISpec } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type OasOpenAPISpecResponse = OasOpenAPISpec[]

export const OasOpenAPISpecService = createApi({
  reducerPath: 'OasOpenAPISpec', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['OasOpenAPISpec'],
  endpoints: (build) => ({
    lazyGetOasOpenAPISpecs: build.query<OasOpenAPISpecResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `OasOpenAPISpec?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'OasOpenAPISpec' as const, id })),
            { type: 'OasOpenAPISpec', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getOasOpenAPISpecs: build.query<OasOpenAPISpecResponse, void>({
      query: () => 'OasOpenAPISpec',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'OasOpenAPISpec' as const, id })),
              { type: 'OasOpenAPISpec', id: 'LIST' },
            ]
          : [{ type: 'OasOpenAPISpec', id: 'LIST' }],
    }),
    addOasOpenAPISpec: build.mutation<OasOpenAPISpec, Partial<OasOpenAPISpec>>({
      query: (body) => ({
        url: `OasOpenAPISpec`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'OasOpenAPISpec', id: 'LIST' }],
    }),
    getOasOpenAPISpec: build.query<OasOpenAPISpec, string>({
      query: (id) => `OasOpenAPISpec/${id}`,
      providesTags: (result, error, id) => [{ type: 'OasOpenAPISpec', id }],
    }),
    updateOasOpenAPISpec: build.mutation<void, Pick<OasOpenAPISpec, 'id'> & Partial<OasOpenAPISpec>>({
      query: ({ id, ...patch }) => ({
        url: `OasOpenAPISpec/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            OasOpenAPISpecService.util.updateQueryData('getOasOpenAPISpec', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'OasOpenAPISpec', id }],
    }),
    deleteOasOpenAPISpec: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `OasOpenAPISpec/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'OasOpenAPISpec', id }],
    }),
  }),
})

export const {
  useLazyGetOasOpenAPISpecsQuery,
  useGetOasOpenAPISpecQuery,
  useGetOasOpenAPISpecsQuery,
  useAddOasOpenAPISpecMutation,
  useUpdateOasOpenAPISpecMutation,
  useDeleteOasOpenAPISpecMutation,
} = OasOpenAPISpecService
