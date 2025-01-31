import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Ptg } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type PtgResponse = Ptg[]

export const PtgService = createApi({
  reducerPath: 'Ptg', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Ptg'],
  endpoints: (build) => ({
    lazyGetPtgs: build.query<PtgResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Ptg?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Ptg' as const, id })),
            { type: 'Ptg', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getPtgs: build.query<PtgResponse, void>({
      query: () => 'Ptg',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Ptg' as const, id })),
              { type: 'Ptg', id: 'LIST' },
            ]
          : [{ type: 'Ptg', id: 'LIST' }],
    }),
    addPtg: build.mutation<Ptg, Partial<Ptg>>({
      query: (body) => ({
        url: `Ptg`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Ptg', id: 'LIST' }],
    }),
    getPtg: build.query<Ptg, string>({
      query: (id) => `Ptg/${id}`,
      providesTags: (result, error, id) => [{ type: 'Ptg', id }],
    }),
    updatePtg: build.mutation<void, Pick<Ptg, 'id'> & Partial<Ptg>>({
      query: ({ id, ...patch }) => ({
        url: `Ptg/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            PtgService.util.updateQueryData('getPtg', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Ptg', id }],
    }),
    deletePtg: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Ptg/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Ptg', id }],
    }),
  }),
})

export const {
  useLazyGetPtgsQuery,
  useGetPtgQuery,
  useGetPtgsQuery,
  useAddPtgMutation,
  useUpdatePtgMutation,
  useDeletePtgMutation,
} = PtgService
