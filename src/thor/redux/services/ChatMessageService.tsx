import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChatMessage } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type ChatMessageResponse = ChatMessage[]

export const ChatMessageService = createApi({
  reducerPath: 'ChatMessage', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['ChatMessage'],
  endpoints: (build) => ({
    lazyGetChatMessages: build.query<ChatMessageResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `ChatMessage?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'ChatMessage' as const, id })),
            { type: 'ChatMessage', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getChatMessages: build.query<ChatMessageResponse, void>({
      query: () => 'ChatMessage',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'ChatMessage' as const, id })),
              { type: 'ChatMessage', id: 'LIST' },
            ]
          : [{ type: 'ChatMessage', id: 'LIST' }],
    }),
    addChatMessage: build.mutation<ChatMessage, Partial<ChatMessage>>({
      query: (body) => ({
        url: `ChatMessage`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'ChatMessage', id: 'LIST' }],
    }),
    getChatMessage: build.query<ChatMessage, string>({
      query: (id) => `ChatMessage/${id}`,
      providesTags: (result, error, id) => [{ type: 'ChatMessage', id }],
    }),
    updateChatMessage: build.mutation<void, Pick<ChatMessage, 'id'> & Partial<ChatMessage>>({
      query: ({ id, ...patch }) => ({
        url: `ChatMessage/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            ChatMessageService.util.updateQueryData('getChatMessage', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'ChatMessage', id }],
    }),
    deleteChatMessage: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `ChatMessage/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'ChatMessage', id }],
    }),
  }),
})

export const {
  useLazyGetChatMessagesQuery,
  useGetChatMessageQuery,
  useGetChatMessagesQuery,
  useAddChatMessageMutation,
  useUpdateChatMessageMutation,
  useDeleteChatMessageMutation,
} = ChatMessageService
