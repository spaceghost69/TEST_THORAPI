import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OasRequired } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type OasRequiredResponse = OasRequired[]

export const OasRequiredService = createApi({
  reducerPath: 'OasRequired', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['OasRequired'],
  endpoints: (build) => ({
    lazyGetOasRequireds: build.query<OasRequiredResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `OasRequired?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'OasRequired' as const, id })),
            { type: 'OasRequired', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getOasRequireds: build.query<OasRequiredResponse, void>({
      query: () => 'OasRequired',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'OasRequired' as const, id })),
              { type: 'OasRequired', id: 'LIST' },
            ]
          : [{ type: 'OasRequired', id: 'LIST' }],
    }),
    addOasRequired: build.mutation<OasRequired, Partial<OasRequired>>({
      query: (body) => ({
        url: `OasRequired`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'OasRequired', id: 'LIST' }],
    }),
    getOasRequired: build.query<OasRequired, string>({
      query: (id) => `OasRequired/${id}`,
      providesTags: (result, error, id) => [{ type: 'OasRequired', id }],
    }),
    updateOasRequired: build.mutation<void, Pick<OasRequired, 'id'> & Partial<OasRequired>>({
      query: ({ id, ...patch }) => ({
        url: `OasRequired/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            OasRequiredService.util.updateQueryData('getOasRequired', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'OasRequired', id }],
    }),
    deleteOasRequired: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `OasRequired/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'OasRequired', id }],
    }),
  }),
})

export const {
  useLazyGetOasRequiredsQuery,
  useGetOasRequiredQuery,
  useGetOasRequiredsQuery,
  useAddOasRequiredMutation,
  useUpdateOasRequiredMutation,
  useDeleteOasRequiredMutation,
} = OasRequiredService
