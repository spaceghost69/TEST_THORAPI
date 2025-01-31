import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ThorUXComponent } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type ThorUXComponentResponse = ThorUXComponent[]

export const ThorUXComponentService = createApi({
  reducerPath: 'ThorUXComponent', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['ThorUXComponent'],
  endpoints: (build) => ({
    lazyGetThorUXComponents: build.query<ThorUXComponentResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `ThorUXComponent?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'ThorUXComponent' as const, id })),
            { type: 'ThorUXComponent', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getThorUXComponents: build.query<ThorUXComponentResponse, void>({
      query: () => 'ThorUXComponent',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'ThorUXComponent' as const, id })),
              { type: 'ThorUXComponent', id: 'LIST' },
            ]
          : [{ type: 'ThorUXComponent', id: 'LIST' }],
    }),
    addThorUXComponent: build.mutation<ThorUXComponent, Partial<ThorUXComponent>>({
      query: (body) => ({
        url: `ThorUXComponent`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'ThorUXComponent', id: 'LIST' }],
    }),
    getThorUXComponent: build.query<ThorUXComponent, string>({
      query: (id) => `ThorUXComponent/${id}`,
      providesTags: (result, error, id) => [{ type: 'ThorUXComponent', id }],
    }),
    updateThorUXComponent: build.mutation<void, Pick<ThorUXComponent, 'id'> & Partial<ThorUXComponent>>({
      query: ({ id, ...patch }) => ({
        url: `ThorUXComponent/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            ThorUXComponentService.util.updateQueryData('getThorUXComponent', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'ThorUXComponent', id }],
    }),
    deleteThorUXComponent: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `ThorUXComponent/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'ThorUXComponent', id }],
    }),
  }),
})

export const {
  useLazyGetThorUXComponentsQuery,
  useGetThorUXComponentQuery,
  useGetThorUXComponentsQuery,
  useAddThorUXComponentMutation,
  useUpdateThorUXComponentMutation,
  useDeleteThorUXComponentMutation,
} = ThorUXComponentService
