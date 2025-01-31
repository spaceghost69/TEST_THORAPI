import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Format } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type FormatResponse = Format[]

export const FormatService = createApi({
  reducerPath: 'Format', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Format'],
  endpoints: (build) => ({
    lazyGetFormats: build.query<FormatResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Format?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Format' as const, id })),
            { type: 'Format', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getFormats: build.query<FormatResponse, void>({
      query: () => 'Format',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Format' as const, id })),
              { type: 'Format', id: 'LIST' },
            ]
          : [{ type: 'Format', id: 'LIST' }],
    }),
    addFormat: build.mutation<Format, Partial<Format>>({
      query: (body) => ({
        url: `Format`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Format', id: 'LIST' }],
    }),
    getFormat: build.query<Format, string>({
      query: (id) => `Format/${id}`,
      providesTags: (result, error, id) => [{ type: 'Format', id }],
    }),
    updateFormat: build.mutation<void, Pick<Format, 'id'> & Partial<Format>>({
      query: ({ id, ...patch }) => ({
        url: `Format/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            FormatService.util.updateQueryData('getFormat', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Format', id }],
    }),
    deleteFormat: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Format/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Format', id }],
    }),
  }),
})

export const {
  useLazyGetFormatsQuery,
  useGetFormatQuery,
  useGetFormatsQuery,
  useAddFormatMutation,
  useUpdateFormatMutation,
  useDeleteFormatMutation,
} = FormatService
