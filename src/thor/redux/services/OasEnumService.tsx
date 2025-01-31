import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OasEnum } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type OasEnumResponse = OasEnum[]

export const OasEnumService = createApi({
  reducerPath: 'OasEnum', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['OasEnum'],
  endpoints: (build) => ({
    lazyGetOasEnums: build.query<OasEnumResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `OasEnum?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'OasEnum' as const, id })),
            { type: 'OasEnum', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getOasEnums: build.query<OasEnumResponse, void>({
      query: () => 'OasEnum',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'OasEnum' as const, id })),
              { type: 'OasEnum', id: 'LIST' },
            ]
          : [{ type: 'OasEnum', id: 'LIST' }],
    }),
    addOasEnum: build.mutation<OasEnum, Partial<OasEnum>>({
      query: (body) => ({
        url: `OasEnum`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'OasEnum', id: 'LIST' }],
    }),
    getOasEnum: build.query<OasEnum, string>({
      query: (id) => `OasEnum/${id}`,
      providesTags: (result, error, id) => [{ type: 'OasEnum', id }],
    }),
    updateOasEnum: build.mutation<void, Pick<OasEnum, 'id'> & Partial<OasEnum>>({
      query: ({ id, ...patch }) => ({
        url: `OasEnum/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            OasEnumService.util.updateQueryData('getOasEnum', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'OasEnum', id }],
    }),
    deleteOasEnum: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `OasEnum/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'OasEnum', id }],
    }),
  }),
})

export const {
  useLazyGetOasEnumsQuery,
  useGetOasEnumQuery,
  useGetOasEnumsQuery,
  useAddOasEnumMutation,
  useUpdateOasEnumMutation,
  useDeleteOasEnumMutation,
} = OasEnumService
