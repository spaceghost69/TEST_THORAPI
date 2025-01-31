import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AclObjectIdentity } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type AclObjectIdentityResponse = AclObjectIdentity[]

export const AclObjectIdentityService = createApi({
  reducerPath: 'AclObjectIdentity', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['AclObjectIdentity'],
  endpoints: (build) => ({
    lazyGetAclObjectIdentitys: build.query<AclObjectIdentityResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `AclObjectIdentity?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'AclObjectIdentity' as const, id })),
            { type: 'AclObjectIdentity', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getAclObjectIdentitys: build.query<AclObjectIdentityResponse, void>({
      query: () => 'AclObjectIdentity',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'AclObjectIdentity' as const, id })),
              { type: 'AclObjectIdentity', id: 'LIST' },
            ]
          : [{ type: 'AclObjectIdentity', id: 'LIST' }],
    }),
    addAclObjectIdentity: build.mutation<AclObjectIdentity, Partial<AclObjectIdentity>>({
      query: (body) => ({
        url: `AclObjectIdentity`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'AclObjectIdentity', id: 'LIST' }],
    }),
    getAclObjectIdentity: build.query<AclObjectIdentity, string>({
      query: (id) => `AclObjectIdentity/${id}`,
      providesTags: (result, error, id) => [{ type: 'AclObjectIdentity', id }],
    }),
    updateAclObjectIdentity: build.mutation<void, Pick<AclObjectIdentity, 'id'> & Partial<AclObjectIdentity>>({
      query: ({ id, ...patch }) => ({
        url: `AclObjectIdentity/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            AclObjectIdentityService.util.updateQueryData('getAclObjectIdentity', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'AclObjectIdentity', id }],
    }),
    deleteAclObjectIdentity: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `AclObjectIdentity/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'AclObjectIdentity', id }],
    }),
  }),
})

export const {
  useLazyGetAclObjectIdentitysQuery,
  useGetAclObjectIdentityQuery,
  useGetAclObjectIdentitysQuery,
  useAddAclObjectIdentityMutation,
  useUpdateAclObjectIdentityMutation,
  useDeleteAclObjectIdentityMutation,
} = AclObjectIdentityService
