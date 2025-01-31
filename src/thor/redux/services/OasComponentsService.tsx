import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OasComponents } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type OasComponentsResponse = OasComponents[]

export const OasComponentsService = createApi({
  reducerPath: 'OasComponents', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['OasComponents'],
  endpoints: (build) => ({
    lazyGetOasComponentss: build.query<OasComponentsResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `OasComponents?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'OasComponents' as const, id })),
            { type: 'OasComponents', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getOasComponentss: build.query<OasComponentsResponse, void>({
      query: () => 'OasComponents',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'OasComponents' as const, id })),
              { type: 'OasComponents', id: 'LIST' },
            ]
          : [{ type: 'OasComponents', id: 'LIST' }],
    }),
    addOasComponents: build.mutation<OasComponents, Partial<OasComponents>>({
      query: (body) => ({
        url: `OasComponents`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'OasComponents', id: 'LIST' }],
    }),
    getOasComponents: build.query<OasComponents, string>({
      query: (id) => `OasComponents/${id}`,
      providesTags: (result, error, id) => [{ type: 'OasComponents', id }],
    }),
    updateOasComponents: build.mutation<void, Pick<OasComponents, 'id'> & Partial<OasComponents>>({
      query: ({ id, ...patch }) => ({
        url: `OasComponents/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            OasComponentsService.util.updateQueryData('getOasComponents', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'OasComponents', id }],
    }),
    deleteOasComponents: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `OasComponents/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'OasComponents', id }],
    }),
  }),
})

export const {
  useLazyGetOasComponentssQuery,
  useGetOasComponentsQuery,
  useGetOasComponentssQuery,
  useAddOasComponentsMutation,
  useUpdateOasComponentsMutation,
  useDeleteOasComponentsMutation,
} = OasComponentsService
