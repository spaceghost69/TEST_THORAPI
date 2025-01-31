import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ThorUXMeta } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type ThorUXMetaResponse = ThorUXMeta[]

export const ThorUXMetaService = createApi({
  reducerPath: 'ThorUXMeta', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['ThorUXMeta'],
  endpoints: (build) => ({
    lazyGetThorUXMetas: build.query<ThorUXMetaResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `ThorUXMeta?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'ThorUXMeta' as const, id })),
            { type: 'ThorUXMeta', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getThorUXMetas: build.query<ThorUXMetaResponse, void>({
      query: () => 'ThorUXMeta',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'ThorUXMeta' as const, id })),
              { type: 'ThorUXMeta', id: 'LIST' },
            ]
          : [{ type: 'ThorUXMeta', id: 'LIST' }],
    }),
    addThorUXMeta: build.mutation<ThorUXMeta, Partial<ThorUXMeta>>({
      query: (body) => ({
        url: `ThorUXMeta`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'ThorUXMeta', id: 'LIST' }],
    }),
    getThorUXMeta: build.query<ThorUXMeta, string>({
      query: (id) => `ThorUXMeta/${id}`,
      providesTags: (result, error, id) => [{ type: 'ThorUXMeta', id }],
    }),
    updateThorUXMeta: build.mutation<void, Pick<ThorUXMeta, 'id'> & Partial<ThorUXMeta>>({
      query: ({ id, ...patch }) => ({
        url: `ThorUXMeta/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            ThorUXMetaService.util.updateQueryData('getThorUXMeta', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'ThorUXMeta', id }],
    }),
    deleteThorUXMeta: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `ThorUXMeta/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'ThorUXMeta', id }],
    }),
  }),
})

export const {
  useLazyGetThorUXMetasQuery,
  useGetThorUXMetaQuery,
  useGetThorUXMetasQuery,
  useAddThorUXMetaMutation,
  useUpdateThorUXMetaMutation,
  useDeleteThorUXMetaMutation,
} = ThorUXMetaService
