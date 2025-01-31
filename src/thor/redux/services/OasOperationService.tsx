import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OasOperation } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type OasOperationResponse = OasOperation[]

export const OasOperationService = createApi({
  reducerPath: 'OasOperation', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['OasOperation'],
  endpoints: (build) => ({
    lazyGetOasOperations: build.query<OasOperationResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `OasOperation?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'OasOperation' as const, id })),
            { type: 'OasOperation', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getOasOperations: build.query<OasOperationResponse, void>({
      query: () => 'OasOperation',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'OasOperation' as const, id })),
              { type: 'OasOperation', id: 'LIST' },
            ]
          : [{ type: 'OasOperation', id: 'LIST' }],
    }),
    addOasOperation: build.mutation<OasOperation, Partial<OasOperation>>({
      query: (body) => ({
        url: `OasOperation`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'OasOperation', id: 'LIST' }],
    }),
    getOasOperation: build.query<OasOperation, string>({
      query: (id) => `OasOperation/${id}`,
      providesTags: (result, error, id) => [{ type: 'OasOperation', id }],
    }),
    updateOasOperation: build.mutation<void, Pick<OasOperation, 'id'> & Partial<OasOperation>>({
      query: ({ id, ...patch }) => ({
        url: `OasOperation/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            OasOperationService.util.updateQueryData('getOasOperation', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'OasOperation', id }],
    }),
    deleteOasOperation: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `OasOperation/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'OasOperation', id }],
    }),
  }),
})

export const {
  useLazyGetOasOperationsQuery,
  useGetOasOperationQuery,
  useGetOasOperationsQuery,
  useAddOasOperationMutation,
  useUpdateOasOperationMutation,
  useDeleteOasOperationMutation,
} = OasOperationService
