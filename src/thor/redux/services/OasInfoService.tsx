import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OasInfo } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type OasInfoResponse = OasInfo[]

export const OasInfoService = createApi({
  reducerPath: 'OasInfo', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['OasInfo'],
  endpoints: (build) => ({
    lazyGetOasInfos: build.query<OasInfoResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `OasInfo?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'OasInfo' as const, id })),
            { type: 'OasInfo', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getOasInfos: build.query<OasInfoResponse, void>({
      query: () => 'OasInfo',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'OasInfo' as const, id })),
              { type: 'OasInfo', id: 'LIST' },
            ]
          : [{ type: 'OasInfo', id: 'LIST' }],
    }),
    addOasInfo: build.mutation<OasInfo, Partial<OasInfo>>({
      query: (body) => ({
        url: `OasInfo`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'OasInfo', id: 'LIST' }],
    }),
    getOasInfo: build.query<OasInfo, string>({
      query: (id) => `OasInfo/${id}`,
      providesTags: (result, error, id) => [{ type: 'OasInfo', id }],
    }),
    updateOasInfo: build.mutation<void, Pick<OasInfo, 'id'> & Partial<OasInfo>>({
      query: ({ id, ...patch }) => ({
        url: `OasInfo/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            OasInfoService.util.updateQueryData('getOasInfo', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'OasInfo', id }],
    }),
    deleteOasInfo: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `OasInfo/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'OasInfo', id }],
    }),
  }),
})

export const {
  useLazyGetOasInfosQuery,
  useGetOasInfoQuery,
  useGetOasInfosQuery,
  useAddOasInfoMutation,
  useUpdateOasInfoMutation,
  useDeleteOasInfoMutation,
} = OasInfoService
