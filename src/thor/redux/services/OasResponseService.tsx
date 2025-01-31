import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OasResponse } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type OasResponseResponse = OasResponse[]

export const OasResponseService = createApi({
  reducerPath: 'OasResponse', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['OasResponse'],
  endpoints: (build) => ({
    lazyGetOasResponses: build.query<OasResponseResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `OasResponse?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'OasResponse' as const, id })),
            { type: 'OasResponse', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getOasResponses: build.query<OasResponseResponse, void>({
      query: () => 'OasResponse',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'OasResponse' as const, id })),
              { type: 'OasResponse', id: 'LIST' },
            ]
          : [{ type: 'OasResponse', id: 'LIST' }],
    }),
    addOasResponse: build.mutation<OasResponse, Partial<OasResponse>>({
      query: (body) => ({
        url: `OasResponse`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'OasResponse', id: 'LIST' }],
    }),
    getOasResponse: build.query<OasResponse, string>({
      query: (id) => `OasResponse/${id}`,
      providesTags: (result, error, id) => [{ type: 'OasResponse', id }],
    }),
    updateOasResponse: build.mutation<void, Pick<OasResponse, 'id'> & Partial<OasResponse>>({
      query: ({ id, ...patch }) => ({
        url: `OasResponse/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            OasResponseService.util.updateQueryData('getOasResponse', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'OasResponse', id }],
    }),
    deleteOasResponse: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `OasResponse/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'OasResponse', id }],
    }),
  }),
})

export const {
  useLazyGetOasResponsesQuery,
  useGetOasResponseQuery,
  useGetOasResponsesQuery,
  useAddOasResponseMutation,
  useUpdateOasResponseMutation,
  useDeleteOasResponseMutation,
} = OasResponseService
