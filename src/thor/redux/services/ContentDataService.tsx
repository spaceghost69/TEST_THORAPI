import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ContentData } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type ContentDataResponse = ContentData[]

export const ContentDataService = createApi({
  reducerPath: 'ContentData', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['ContentData'],
  endpoints: (build) => ({
    lazyGetContentDatas: build.query<ContentDataResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `ContentData?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'ContentData' as const, id })),
            { type: 'ContentData', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getContentDatas: build.query<ContentDataResponse, void>({
      query: () => 'ContentData',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'ContentData' as const, id })),
              { type: 'ContentData', id: 'LIST' },
            ]
          : [{ type: 'ContentData', id: 'LIST' }],
    }),
    addContentData: build.mutation<ContentData, Partial<ContentData>>({
      query: (body) => ({
        url: `ContentData`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'ContentData', id: 'LIST' }],
    }),
    getContentData: build.query<ContentData, string>({
      query: (id) => `ContentData/${id}`,
      providesTags: (result, error, id) => [{ type: 'ContentData', id }],
    }),
    updateContentData: build.mutation<void, Pick<ContentData, 'id'> & Partial<ContentData>>({
      query: ({ id, ...patch }) => ({
        url: `ContentData/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            ContentDataService.util.updateQueryData('getContentData', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'ContentData', id }],
    }),
    deleteContentData: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `ContentData/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'ContentData', id }],
    }),
  }),
})

export const {
  useLazyGetContentDatasQuery,
  useGetContentDataQuery,
  useGetContentDatasQuery,
  useAddContentDataMutation,
  useUpdateContentDataMutation,
  useDeleteContentDataMutation,
} = ContentDataService
