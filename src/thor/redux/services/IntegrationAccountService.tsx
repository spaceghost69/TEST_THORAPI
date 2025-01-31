import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IntegrationAccount } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type IntegrationAccountResponse = IntegrationAccount[]

export const IntegrationAccountService = createApi({
  reducerPath: 'IntegrationAccount', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['IntegrationAccount'],
  endpoints: (build) => ({
    lazyGetIntegrationAccounts: build.query<IntegrationAccountResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `IntegrationAccount?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'IntegrationAccount' as const, id })),
            { type: 'IntegrationAccount', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getIntegrationAccounts: build.query<IntegrationAccountResponse, void>({
      query: () => 'IntegrationAccount',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'IntegrationAccount' as const, id })),
              { type: 'IntegrationAccount', id: 'LIST' },
            ]
          : [{ type: 'IntegrationAccount', id: 'LIST' }],
    }),
    addIntegrationAccount: build.mutation<IntegrationAccount, Partial<IntegrationAccount>>({
      query: (body) => ({
        url: `IntegrationAccount`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'IntegrationAccount', id: 'LIST' }],
    }),
    getIntegrationAccount: build.query<IntegrationAccount, string>({
      query: (id) => `IntegrationAccount/${id}`,
      providesTags: (result, error, id) => [{ type: 'IntegrationAccount', id }],
    }),
    updateIntegrationAccount: build.mutation<void, Pick<IntegrationAccount, 'id'> & Partial<IntegrationAccount>>({
      query: ({ id, ...patch }) => ({
        url: `IntegrationAccount/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            IntegrationAccountService.util.updateQueryData('getIntegrationAccount', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'IntegrationAccount', id }],
    }),
    deleteIntegrationAccount: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `IntegrationAccount/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'IntegrationAccount', id }],
    }),
  }),
})

export const {
  useLazyGetIntegrationAccountsQuery,
  useGetIntegrationAccountQuery,
  useGetIntegrationAccountsQuery,
  useAddIntegrationAccountMutation,
  useUpdateIntegrationAccountMutation,
  useDeleteIntegrationAccountMutation,
} = IntegrationAccountService
