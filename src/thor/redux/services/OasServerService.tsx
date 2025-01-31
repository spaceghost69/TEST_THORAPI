import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OasServer } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type OasServerResponse = OasServer[]

export const OasServerService = createApi({
  reducerPath: 'OasServer', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['OasServer'],
  endpoints: (build) => ({
    lazyGetOasServers: build.query<OasServerResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `OasServer?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'OasServer' as const, id })),
            { type: 'OasServer', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getOasServers: build.query<OasServerResponse, void>({
      query: () => 'OasServer',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'OasServer' as const, id })),
              { type: 'OasServer', id: 'LIST' },
            ]
          : [{ type: 'OasServer', id: 'LIST' }],
    }),
    addOasServer: build.mutation<OasServer, Partial<OasServer>>({
      query: (body) => ({
        url: `OasServer`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'OasServer', id: 'LIST' }],
    }),
    getOasServer: build.query<OasServer, string>({
      query: (id) => `OasServer/${id}`,
      providesTags: (result, error, id) => [{ type: 'OasServer', id }],
    }),
    updateOasServer: build.mutation<void, Pick<OasServer, 'id'> & Partial<OasServer>>({
      query: ({ id, ...patch }) => ({
        url: `OasServer/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            OasServerService.util.updateQueryData('getOasServer', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'OasServer', id }],
    }),
    deleteOasServer: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `OasServer/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'OasServer', id }],
    }),
  }),
})

export const {
  useLazyGetOasServersQuery,
  useGetOasServerQuery,
  useGetOasServersQuery,
  useAddOasServerMutation,
  useUpdateOasServerMutation,
  useDeleteOasServerMutation,
} = OasServerService
