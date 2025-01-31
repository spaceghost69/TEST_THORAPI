import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Task } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type TaskResponse = Task[]

export const TaskService = createApi({
  reducerPath: 'Task', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Task'],
  endpoints: (build) => ({
    lazyGetTasks: build.query<TaskResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Task?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Task' as const, id })),
            { type: 'Task', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getTasks: build.query<TaskResponse, void>({
      query: () => 'Task',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Task' as const, id })),
              { type: 'Task', id: 'LIST' },
            ]
          : [{ type: 'Task', id: 'LIST' }],
    }),
    addTask: build.mutation<Task, Partial<Task>>({
      query: (body) => ({
        url: `Task`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Task', id: 'LIST' }],
    }),
    getTask: build.query<Task, string>({
      query: (id) => `Task/${id}`,
      providesTags: (result, error, id) => [{ type: 'Task', id }],
    }),
    updateTask: build.mutation<void, Pick<Task, 'id'> & Partial<Task>>({
      query: ({ id, ...patch }) => ({
        url: `Task/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            TaskService.util.updateQueryData('getTask', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Task', id }],
    }),
    deleteTask: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Task/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Task', id }],
    }),
  }),
})

export const {
  useLazyGetTasksQuery,
  useGetTaskQuery,
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = TaskService
