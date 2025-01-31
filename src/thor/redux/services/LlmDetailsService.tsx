import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LlmDetails } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type LlmDetailsResponse = LlmDetails[]

export const LlmDetailsService = createApi({
  reducerPath: 'LlmDetails', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['LlmDetails'],
  endpoints: (build) => ({
    lazyGetLlmDetailss: build.query<LlmDetailsResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `LlmDetails?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'LlmDetails' as const, id })),
            { type: 'LlmDetails', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getLlmDetailss: build.query<LlmDetailsResponse, void>({
      query: () => 'LlmDetails',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'LlmDetails' as const, id })),
              { type: 'LlmDetails', id: 'LIST' },
            ]
          : [{ type: 'LlmDetails', id: 'LIST' }],
    }),
    addLlmDetails: build.mutation<LlmDetails, Partial<LlmDetails>>({
      query: (body) => ({
        url: `LlmDetails`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'LlmDetails', id: 'LIST' }],
    }),
    getLlmDetails: build.query<LlmDetails, string>({
      query: (id) => `LlmDetails/${id}`,
      providesTags: (result, error, id) => [{ type: 'LlmDetails', id }],
    }),
    updateLlmDetails: build.mutation<void, Pick<LlmDetails, 'id'> & Partial<LlmDetails>>({
      query: ({ id, ...patch }) => ({
        url: `LlmDetails/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            LlmDetailsService.util.updateQueryData('getLlmDetails', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'LlmDetails', id }],
    }),
    deleteLlmDetails: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `LlmDetails/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'LlmDetails', id }],
    }),
  }),
})

export const {
  useLazyGetLlmDetailssQuery,
  useGetLlmDetailsQuery,
  useGetLlmDetailssQuery,
  useAddLlmDetailsMutation,
  useUpdateLlmDetailsMutation,
  useDeleteLlmDetailsMutation,
} = LlmDetailsService
