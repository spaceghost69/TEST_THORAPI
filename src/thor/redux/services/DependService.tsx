import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Depend } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type DependResponse = Depend[]

export const DependService = createApi({
  reducerPath: 'Depend', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Depend'],
  endpoints: (build) => ({
    lazyGetDepends: build.query<DependResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Depend?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Depend' as const, id })),
            { type: 'Depend', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getDepends: build.query<DependResponse, void>({
      query: () => 'Depend',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Depend' as const, id })),
              { type: 'Depend', id: 'LIST' },
            ]
          : [{ type: 'Depend', id: 'LIST' }],
    }),
    addDepend: build.mutation<Depend, Partial<Depend>>({
      query: (body) => ({
        url: `Depend`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Depend', id: 'LIST' }],
    }),
    getDepend: build.query<Depend, string>({
      query: (id) => `Depend/${id}`,
      providesTags: (result, error, id) => [{ type: 'Depend', id }],
    }),
    updateDepend: build.mutation<void, Pick<Depend, 'id'> & Partial<Depend>>({
      query: ({ id, ...patch }) => ({
        url: `Depend/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            DependService.util.updateQueryData('getDepend', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Depend', id }],
    }),
    deleteDepend: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Depend/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Depend', id }],
    }),
  }),
})

export const {
  useLazyGetDependsQuery,
  useGetDependQuery,
  useGetDependsQuery,
  useAddDependMutation,
  useUpdateDependMutation,
  useDeleteDependMutation,
} = DependService
