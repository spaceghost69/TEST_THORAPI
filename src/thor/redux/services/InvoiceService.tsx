import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Invoice } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type InvoiceResponse = Invoice[]

export const InvoiceService = createApi({
  reducerPath: 'Invoice', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Invoice'],
  endpoints: (build) => ({
    lazyGetInvoices: build.query<InvoiceResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Invoice?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Invoice' as const, id })),
            { type: 'Invoice', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getInvoices: build.query<InvoiceResponse, void>({
      query: () => 'Invoice',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Invoice' as const, id })),
              { type: 'Invoice', id: 'LIST' },
            ]
          : [{ type: 'Invoice', id: 'LIST' }],
    }),
    addInvoice: build.mutation<Invoice, Partial<Invoice>>({
      query: (body) => ({
        url: `Invoice`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Invoice', id: 'LIST' }],
    }),
    getInvoice: build.query<Invoice, string>({
      query: (id) => `Invoice/${id}`,
      providesTags: (result, error, id) => [{ type: 'Invoice', id }],
    }),
    updateInvoice: build.mutation<void, Pick<Invoice, 'id'> & Partial<Invoice>>({
      query: ({ id, ...patch }) => ({
        url: `Invoice/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            InvoiceService.util.updateQueryData('getInvoice', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Invoice', id }],
    }),
    deleteInvoice: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Invoice/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Invoice', id }],
    }),
  }),
})

export const {
  useLazyGetInvoicesQuery,
  useGetInvoiceQuery,
  useGetInvoicesQuery,
  useAddInvoiceMutation,
  useUpdateInvoiceMutation,
  useDeleteInvoiceMutation,
} = InvoiceService
