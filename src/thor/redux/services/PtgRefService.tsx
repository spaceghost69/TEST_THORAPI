import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PtgRef } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type PtgRefResponse = PtgRef[]

export const PtgRefService = createApi({
  reducerPath: 'PtgRef', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['PtgRef'],
  endpoints: (build) => ({
    lazyGetPtgRefs: build.query<PtgRefResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `PtgRef?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'PtgRef' as const, id })),
            { type: 'PtgRef', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getPtgRefs: build.query<PtgRefResponse, void>({
      query: () => 'PtgRef',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'PtgRef' as const, id })),
              { type: 'PtgRef', id: 'LIST' },
            ]
          : [{ type: 'PtgRef', id: 'LIST' }],
    }),
    addPtgRef: build.mutation<PtgRef, Partial<PtgRef>>({
      query: (body) => ({
        url: `PtgRef`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'PtgRef', id: 'LIST' }],
    }),
    getPtgRef: build.query<PtgRef, string>({
      query: (id) => `PtgRef/${id}`,
      providesTags: (result, error, id) => [{ type: 'PtgRef', id }],
    }),
    updatePtgRef: build.mutation<void, Pick<PtgRef, 'id'> & Partial<PtgRef>>({
      query: ({ id, ...patch }) => ({
        url: `PtgRef/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            PtgRefService.util.updateQueryData('getPtgRef', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'PtgRef', id }],
    }),
    deletePtgRef: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `PtgRef/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'PtgRef', id }],
    }),
  }),
})

export const {
  useLazyGetPtgRefsQuery,
  useGetPtgRefQuery,
  useGetPtgRefsQuery,
  useAddPtgRefMutation,
  useUpdatePtgRefMutation,
  useDeletePtgRefMutation,
} = PtgRefService
