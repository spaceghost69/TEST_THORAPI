import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { EventLog } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type EventLogResponse = EventLog[]

export const EventLogService = createApi({
  reducerPath: 'EventLog', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['EventLog'],
  endpoints: (build) => ({
    lazyGetEventLogs: build.query<EventLogResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `EventLog?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'EventLog' as const, id })),
            { type: 'EventLog', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getEventLogs: build.query<EventLogResponse, void>({
      query: () => 'EventLog',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'EventLog' as const, id })),
              { type: 'EventLog', id: 'LIST' },
            ]
          : [{ type: 'EventLog', id: 'LIST' }],
    }),
    addEventLog: build.mutation<EventLog, Partial<EventLog>>({
      query: (body) => ({
        url: `EventLog`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'EventLog', id: 'LIST' }],
    }),
    getEventLog: build.query<EventLog, string>({
      query: (id) => `EventLog/${id}`,
      providesTags: (result, error, id) => [{ type: 'EventLog', id }],
    }),
    updateEventLog: build.mutation<void, Pick<EventLog, 'id'> & Partial<EventLog>>({
      query: ({ id, ...patch }) => ({
        url: `EventLog/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            EventLogService.util.updateQueryData('getEventLog', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'EventLog', id }],
    }),
    deleteEventLog: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `EventLog/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'EventLog', id }],
    }),
  }),
})

export const {
  useLazyGetEventLogsQuery,
  useGetEventLogQuery,
  useGetEventLogsQuery,
  useAddEventLogMutation,
  useUpdateEventLogMutation,
  useDeleteEventLogMutation,
} = EventLogService
