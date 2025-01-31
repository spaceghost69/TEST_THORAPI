import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Customer } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type CustomerResponse = Customer[]

export const CustomerService = createApi({
  reducerPath: 'Customer', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Customer'],
  endpoints: (build) => ({
    lazyGetCustomers: build.query<CustomerResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Customer?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Customer' as const, id })),
            { type: 'Customer', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getCustomers: build.query<CustomerResponse, void>({
      query: () => 'Customer',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Customer' as const, id })),
              { type: 'Customer', id: 'LIST' },
            ]
          : [{ type: 'Customer', id: 'LIST' }],
    }),
    addCustomer: build.mutation<Customer, Partial<Customer>>({
      query: (body) => ({
        url: `Customer`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Customer', id: 'LIST' }],
    }),
    getCustomer: build.query<Customer, string>({
      query: (id) => `Customer/${id}`,
      providesTags: (result, error, id) => [{ type: 'Customer', id }],
    }),
    updateCustomer: build.mutation<void, Pick<Customer, 'id'> & Partial<Customer>>({
      query: ({ id, ...patch }) => ({
        url: `Customer/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            CustomerService.util.updateQueryData('getCustomer', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Customer', id }],
    }),
    deleteCustomer: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Customer/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Customer', id }],
    }),
  }),
})

export const {
  useLazyGetCustomersQuery,
  useGetCustomerQuery,
  useGetCustomersQuery,
  useAddCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
} = CustomerService
