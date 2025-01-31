import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Organization } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type OrganizationResponse = Organization[]

export const OrganizationService = createApi({
  reducerPath: 'Organization', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Organization'],
  endpoints: (build) => ({
    lazyGetOrganizations: build.query<OrganizationResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Organization?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Organization' as const, id })),
            { type: 'Organization', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getOrganizations: build.query<OrganizationResponse, void>({
      query: () => 'Organization',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Organization' as const, id })),
              { type: 'Organization', id: 'LIST' },
            ]
          : [{ type: 'Organization', id: 'LIST' }],
    }),
    addOrganization: build.mutation<Organization, Partial<Organization>>({
      query: (body) => ({
        url: `Organization`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Organization', id: 'LIST' }],
    }),
    getOrganization: build.query<Organization, string>({
      query: (id) => `Organization/${id}`,
      providesTags: (result, error, id) => [{ type: 'Organization', id }],
    }),
    updateOrganization: build.mutation<void, Pick<Organization, 'id'> & Partial<Organization>>({
      query: ({ id, ...patch }) => ({
        url: `Organization/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            OrganizationService.util.updateQueryData('getOrganization', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Organization', id }],
    }),
    deleteOrganization: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Organization/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Organization', id }],
    }),
  }),
})

export const {
  useLazyGetOrganizationsQuery,
  useGetOrganizationQuery,
  useGetOrganizationsQuery,
  useAddOrganizationMutation,
  useUpdateOrganizationMutation,
  useDeleteOrganizationMutation,
} = OrganizationService
