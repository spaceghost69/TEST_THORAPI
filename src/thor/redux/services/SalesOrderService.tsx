import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SalesOrder } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type SalesOrderResponse = SalesOrder[]

export const SalesOrderService = createApi({
  reducerPath: 'SalesOrder', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['SalesOrder'],
  endpoints: (build) => ({
    lazyGetSalesOrders: build.query<SalesOrderResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `SalesOrder?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'SalesOrder' as const, id })),
            { type: 'SalesOrder', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getSalesOrders: build.query<SalesOrderResponse, void>({
      query: () => 'SalesOrder',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'SalesOrder' as const, id })),
              { type: 'SalesOrder', id: 'LIST' },
            ]
          : [{ type: 'SalesOrder', id: 'LIST' }],
    }),
    addSalesOrder: build.mutation<SalesOrder, Partial<SalesOrder>>({
      query: (body) => ({
        url: `SalesOrder`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'SalesOrder', id: 'LIST' }],
    }),
    getSalesOrder: build.query<SalesOrder, string>({
      query: (id) => `SalesOrder/${id}`,
      providesTags: (result, error, id) => [{ type: 'SalesOrder', id }],
    }),
    updateSalesOrder: build.mutation<void, Pick<SalesOrder, 'id'> & Partial<SalesOrder>>({
      query: ({ id, ...patch }) => ({
        url: `SalesOrder/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            SalesOrderService.util.updateQueryData('getSalesOrder', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'SalesOrder', id }],
    }),
    deleteSalesOrder: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `SalesOrder/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'SalesOrder', id }],
    }),
  }),
})

export const {
  useLazyGetSalesOrdersQuery,
  useGetSalesOrderQuery,
  useGetSalesOrdersQuery,
  useAddSalesOrderMutation,
  useUpdateSalesOrderMutation,
  useDeleteSalesOrderMutation,
} = SalesOrderService
