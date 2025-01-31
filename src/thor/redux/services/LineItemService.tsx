import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LineItem } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type LineItemResponse = LineItem[]

export const LineItemService = createApi({
  reducerPath: 'LineItem', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['LineItem'],
  endpoints: (build) => ({
    lazyGetLineItems: build.query<LineItemResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `LineItem?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'LineItem' as const, id })),
            { type: 'LineItem', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getLineItems: build.query<LineItemResponse, void>({
      query: () => 'LineItem',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'LineItem' as const, id })),
              { type: 'LineItem', id: 'LIST' },
            ]
          : [{ type: 'LineItem', id: 'LIST' }],
    }),
    addLineItem: build.mutation<LineItem, Partial<LineItem>>({
      query: (body) => ({
        url: `LineItem`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'LineItem', id: 'LIST' }],
    }),
    getLineItem: build.query<LineItem, string>({
      query: (id) => `LineItem/${id}`,
      providesTags: (result, error, id) => [{ type: 'LineItem', id }],
    }),
    updateLineItem: build.mutation<void, Pick<LineItem, 'id'> & Partial<LineItem>>({
      query: ({ id, ...patch }) => ({
        url: `LineItem/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            LineItemService.util.updateQueryData('getLineItem', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'LineItem', id }],
    }),
    deleteLineItem: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `LineItem/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'LineItem', id }],
    }),
  }),
})

export const {
  useLazyGetLineItemsQuery,
  useGetLineItemQuery,
  useGetLineItemsQuery,
  useAddLineItemMutation,
  useUpdateLineItemMutation,
  useDeleteLineItemMutation,
} = LineItemService
