import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OasObjectSchema } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type OasObjectSchemaResponse = OasObjectSchema[]

export const OasObjectSchemaService = createApi({
  reducerPath: 'OasObjectSchema', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['OasObjectSchema'],
  endpoints: (build) => ({
    lazyGetOasObjectSchemas: build.query<OasObjectSchemaResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `OasObjectSchema?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'OasObjectSchema' as const, id })),
            { type: 'OasObjectSchema', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getOasObjectSchemas: build.query<OasObjectSchemaResponse, void>({
      query: () => 'OasObjectSchema',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'OasObjectSchema' as const, id })),
              { type: 'OasObjectSchema', id: 'LIST' },
            ]
          : [{ type: 'OasObjectSchema', id: 'LIST' }],
    }),
    addOasObjectSchema: build.mutation<OasObjectSchema, Partial<OasObjectSchema>>({
      query: (body) => ({
        url: `OasObjectSchema`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'OasObjectSchema', id: 'LIST' }],
    }),
    getOasObjectSchema: build.query<OasObjectSchema, string>({
      query: (id) => `OasObjectSchema/${id}`,
      providesTags: (result, error, id) => [{ type: 'OasObjectSchema', id }],
    }),
    updateOasObjectSchema: build.mutation<void, Pick<OasObjectSchema, 'id'> & Partial<OasObjectSchema>>({
      query: ({ id, ...patch }) => ({
        url: `OasObjectSchema/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            OasObjectSchemaService.util.updateQueryData('getOasObjectSchema', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'OasObjectSchema', id }],
    }),
    deleteOasObjectSchema: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `OasObjectSchema/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'OasObjectSchema', id }],
    }),
  }),
})

export const {
  useLazyGetOasObjectSchemasQuery,
  useGetOasObjectSchemaQuery,
  useGetOasObjectSchemasQuery,
  useAddOasObjectSchemaMutation,
  useUpdateOasObjectSchemaMutation,
  useDeleteOasObjectSchemaMutation,
} = OasObjectSchemaService
