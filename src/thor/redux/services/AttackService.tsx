import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Attack } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type AttackResponse = Attack[]

export const AttackService = createApi({
  reducerPath: 'Attack', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Attack'],
  endpoints: (build) => ({
    lazyGetAttacks: build.query<AttackResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Attack?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Attack' as const, id })),
            { type: 'Attack', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getAttacks: build.query<AttackResponse, void>({
      query: () => 'Attack',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Attack' as const, id })),
              { type: 'Attack', id: 'LIST' },
            ]
          : [{ type: 'Attack', id: 'LIST' }],
    }),
    addAttack: build.mutation<Attack, Partial<Attack>>({
      query: (body) => ({
        url: `Attack`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Attack', id: 'LIST' }],
    }),
    getAttack: build.query<Attack, string>({
      query: (id) => `Attack/${id}`,
      providesTags: (result, error, id) => [{ type: 'Attack', id }],
    }),
    updateAttack: build.mutation<void, Pick<Attack, 'id'> & Partial<Attack>>({
      query: ({ id, ...patch }) => ({
        url: `Attack/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            AttackService.util.updateQueryData('getAttack', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Attack', id }],
    }),
    deleteAttack: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Attack/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Attack', id }],
    }),
  }),
})

export const {
  useLazyGetAttacksQuery,
  useGetAttackQuery,
  useGetAttacksQuery,
  useAddAttackMutation,
  useUpdateAttackMutation,
  useDeleteAttackMutation,
} = AttackService
