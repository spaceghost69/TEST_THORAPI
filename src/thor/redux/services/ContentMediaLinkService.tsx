import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ContentMediaLink } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type ContentMediaLinkResponse = ContentMediaLink[]

export const ContentMediaLinkService = createApi({
  reducerPath: 'ContentMediaLink', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['ContentMediaLink'],
  endpoints: (build) => ({
    lazyGetContentMediaLinks: build.query<ContentMediaLinkResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `ContentMediaLink?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'ContentMediaLink' as const, id })),
            { type: 'ContentMediaLink', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getContentMediaLinks: build.query<ContentMediaLinkResponse, void>({
      query: () => 'ContentMediaLink',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'ContentMediaLink' as const, id })),
              { type: 'ContentMediaLink', id: 'LIST' },
            ]
          : [{ type: 'ContentMediaLink', id: 'LIST' }],
    }),
    addContentMediaLink: build.mutation<ContentMediaLink, Partial<ContentMediaLink>>({
      query: (body) => ({
        url: `ContentMediaLink`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'ContentMediaLink', id: 'LIST' }],
    }),
    getContentMediaLink: build.query<ContentMediaLink, string>({
      query: (id) => `ContentMediaLink/${id}`,
      providesTags: (result, error, id) => [{ type: 'ContentMediaLink', id }],
    }),
    updateContentMediaLink: build.mutation<void, Pick<ContentMediaLink, 'id'> & Partial<ContentMediaLink>>({
      query: ({ id, ...patch }) => ({
        url: `ContentMediaLink/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            ContentMediaLinkService.util.updateQueryData('getContentMediaLink', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'ContentMediaLink', id }],
    }),
    deleteContentMediaLink: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `ContentMediaLink/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'ContentMediaLink', id }],
    }),
  }),
})

export const {
  useLazyGetContentMediaLinksQuery,
  useGetContentMediaLinkQuery,
  useGetContentMediaLinksQuery,
  useAddContentMediaLinkMutation,
  useUpdateContentMediaLinkMutation,
  useDeleteContentMediaLinkMutation,
} = ContentMediaLinkService
