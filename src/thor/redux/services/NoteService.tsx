import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Note } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type NoteResponse = Note[]

export const NoteService = createApi({
  reducerPath: 'Note', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Note'],
  endpoints: (build) => ({
    lazyGetNotes: build.query<NoteResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Note?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Note' as const, id })),
            { type: 'Note', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getNotes: build.query<NoteResponse, void>({
      query: () => 'Note',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Note' as const, id })),
              { type: 'Note', id: 'LIST' },
            ]
          : [{ type: 'Note', id: 'LIST' }],
    }),
    addNote: build.mutation<Note, Partial<Note>>({
      query: (body) => ({
        url: `Note`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Note', id: 'LIST' }],
    }),
    getNote: build.query<Note, string>({
      query: (id) => `Note/${id}`,
      providesTags: (result, error, id) => [{ type: 'Note', id }],
    }),
    updateNote: build.mutation<void, Pick<Note, 'id'> & Partial<Note>>({
      query: ({ id, ...patch }) => ({
        url: `Note/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            NoteService.util.updateQueryData('getNote', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Note', id }],
    }),
    deleteNote: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Note/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Note', id }],
    }),
  }),
})

export const {
  useLazyGetNotesQuery,
  useGetNoteQuery,
  useGetNotesQuery,
  useAddNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = NoteService
