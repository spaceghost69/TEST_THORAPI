import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChatResponse } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type ChatResponseResponse = ChatResponse[]

export const ChatResponseService = createApi({
  reducerPath: 'ChatResponse', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['ChatResponse'],
  endpoints: (build) => ({
    lazyGetChatResponses: build.query<ChatResponseResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `ChatResponse?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'ChatResponse' as const, id })),
            { type: 'ChatResponse', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getChatResponses: build.query<ChatResponseResponse, void>({
      query: () => 'ChatResponse',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'ChatResponse' as const, id })),
              { type: 'ChatResponse', id: 'LIST' },
            ]
          : [{ type: 'ChatResponse', id: 'LIST' }],
    }),
    addChatResponse: build.mutation<ChatResponse, Partial<ChatResponse>>({
      query: (body) => ({
        url: `ChatResponse`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'ChatResponse', id: 'LIST' }],
    }),
    getChatResponse: build.query<ChatResponse, string>({
      query: (id) => `ChatResponse/${id}`,
      providesTags: (result, error, id) => [{ type: 'ChatResponse', id }],
    }),
    updateChatResponse: build.mutation<void, Pick<ChatResponse, 'id'> & Partial<ChatResponse>>({
      query: ({ id, ...patch }) => ({
        url: `ChatResponse/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            ChatResponseService.util.updateQueryData('getChatResponse', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'ChatResponse', id }],
    }),
    deleteChatResponse: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `ChatResponse/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'ChatResponse', id }],
    }),
  }),
})

export const {
  useLazyGetChatResponsesQuery,
  useGetChatResponseQuery,
  useGetChatResponsesQuery,
  useAddChatResponseMutation,
  useUpdateChatResponseMutation,
  useDeleteChatResponseMutation,
} = ChatResponseService
