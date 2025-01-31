import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MediaObject } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type MediaObjectResponse = MediaObject[]

export const MediaObjectService = createApi({
  reducerPath: 'MediaObject', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['MediaObject'],
  endpoints: (build) => ({
    lazyGetMediaObjects: build.query<MediaObjectResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `MediaObject?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'MediaObject' as const, id })),
            { type: 'MediaObject', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getMediaObjects: build.query<MediaObjectResponse, void>({
      query: () => 'MediaObject',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'MediaObject' as const, id })),
              { type: 'MediaObject', id: 'LIST' },
            ]
          : [{ type: 'MediaObject', id: 'LIST' }],
    }),
    addMediaObject: build.mutation<MediaObject, Partial<MediaObject>>({
      query: (body) => ({
        url: `MediaObject`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'MediaObject', id: 'LIST' }],
    }),
    getMediaObject: build.query<MediaObject, string>({
      query: (id) => `MediaObject/${id}`,
      providesTags: (result, error, id) => [{ type: 'MediaObject', id }],
    }),
    updateMediaObject: build.mutation<void, Pick<MediaObject, 'id'> & Partial<MediaObject>>({
      query: ({ id, ...patch }) => ({
        url: `MediaObject/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            MediaObjectService.util.updateQueryData('getMediaObject', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'MediaObject', id }],
    }),
    deleteMediaObject: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `MediaObject/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'MediaObject', id }],
    }),
  }),
})

export const {
  useLazyGetMediaObjectsQuery,
  useGetMediaObjectQuery,
  useGetMediaObjectsQuery,
  useAddMediaObjectMutation,
  useUpdateMediaObjectMutation,
  useDeleteMediaObjectMutation,
} = MediaObjectService
