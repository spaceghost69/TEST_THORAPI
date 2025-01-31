import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OasParameter } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type OasParameterResponse = OasParameter[]

export const OasParameterService = createApi({
  reducerPath: 'OasParameter', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['OasParameter'],
  endpoints: (build) => ({
    lazyGetOasParameters: build.query<OasParameterResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `OasParameter?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'OasParameter' as const, id })),
            { type: 'OasParameter', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getOasParameters: build.query<OasParameterResponse, void>({
      query: () => 'OasParameter',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'OasParameter' as const, id })),
              { type: 'OasParameter', id: 'LIST' },
            ]
          : [{ type: 'OasParameter', id: 'LIST' }],
    }),
    addOasParameter: build.mutation<OasParameter, Partial<OasParameter>>({
      query: (body) => ({
        url: `OasParameter`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'OasParameter', id: 'LIST' }],
    }),
    getOasParameter: build.query<OasParameter, string>({
      query: (id) => `OasParameter/${id}`,
      providesTags: (result, error, id) => [{ type: 'OasParameter', id }],
    }),
    updateOasParameter: build.mutation<void, Pick<OasParameter, 'id'> & Partial<OasParameter>>({
      query: ({ id, ...patch }) => ({
        url: `OasParameter/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            OasParameterService.util.updateQueryData('getOasParameter', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'OasParameter', id }],
    }),
    deleteOasParameter: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `OasParameter/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'OasParameter', id }],
    }),
  }),
})

export const {
  useLazyGetOasParametersQuery,
  useGetOasParameterQuery,
  useGetOasParametersQuery,
  useAddOasParameterMutation,
  useUpdateOasParameterMutation,
  useDeleteOasParameterMutation,
} = OasParameterService
