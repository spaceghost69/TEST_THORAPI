import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Application } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type ApplicationResponse = Application[]

export const ApplicationService = createApi({
  reducerPath: 'Application', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Application'],
  endpoints: (build) => ({
    lazyGetApplications: build.query<ApplicationResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Application?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Application' as const, id })),
            { type: 'Application', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getApplications: build.query<ApplicationResponse, void>({
      query: () => 'Application',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Application' as const, id })),
              { type: 'Application', id: 'LIST' },
            ]
          : [{ type: 'Application', id: 'LIST' }],
    }),
    addApplication: build.mutation<Application, Partial<Application>>({
      query: (body) => ({
        url: `Application`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Application', id: 'LIST' }],
    }),
    getApplication: build.query<Application, string>({
      query: (id) => `Application/${id}`,
      providesTags: (result, error, id) => [{ type: 'Application', id }],
    }),
    updateApplication: build.mutation<void, Pick<Application, 'id'> & Partial<Application>>({
      query: ({ id, ...patch }) => ({
        url: `Application/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            ApplicationService.util.updateQueryData('getApplication', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Application', id }],
    }),
    deleteApplication: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Application/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Application', id }],
    }),
  }),
})

export const {
  useLazyGetApplicationsQuery,
  useGetApplicationQuery,
  useGetApplicationsQuery,
  useAddApplicationMutation,
  useUpdateApplicationMutation,
  useDeleteApplicationMutation,
} = ApplicationService
