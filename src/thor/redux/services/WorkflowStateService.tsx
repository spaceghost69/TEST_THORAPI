import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WorkflowState } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type WorkflowStateResponse = WorkflowState[]

export const WorkflowStateService = createApi({
  reducerPath: 'WorkflowState', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['WorkflowState'],
  endpoints: (build) => ({
    lazyGetWorkflowStates: build.query<WorkflowStateResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `WorkflowState?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'WorkflowState' as const, id })),
            { type: 'WorkflowState', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getWorkflowStates: build.query<WorkflowStateResponse, void>({
      query: () => 'WorkflowState',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'WorkflowState' as const, id })),
              { type: 'WorkflowState', id: 'LIST' },
            ]
          : [{ type: 'WorkflowState', id: 'LIST' }],
    }),
    addWorkflowState: build.mutation<WorkflowState, Partial<WorkflowState>>({
      query: (body) => ({
        url: `WorkflowState`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'WorkflowState', id: 'LIST' }],
    }),
    getWorkflowState: build.query<WorkflowState, string>({
      query: (id) => `WorkflowState/${id}`,
      providesTags: (result, error, id) => [{ type: 'WorkflowState', id }],
    }),
    updateWorkflowState: build.mutation<void, Pick<WorkflowState, 'id'> & Partial<WorkflowState>>({
      query: ({ id, ...patch }) => ({
        url: `WorkflowState/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            WorkflowStateService.util.updateQueryData('getWorkflowState', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'WorkflowState', id }],
    }),
    deleteWorkflowState: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `WorkflowState/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'WorkflowState', id }],
    }),
  }),
})

export const {
  useLazyGetWorkflowStatesQuery,
  useGetWorkflowStateQuery,
  useGetWorkflowStatesQuery,
  useAddWorkflowStateMutation,
  useUpdateWorkflowStateMutation,
  useDeleteWorkflowStateMutation,
} = WorkflowStateService
