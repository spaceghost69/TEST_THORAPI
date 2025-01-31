import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Campaign } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type CampaignResponse = Campaign[]

export const CampaignService = createApi({
  reducerPath: 'Campaign', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Campaign'],
  endpoints: (build) => ({
    lazyGetCampaigns: build.query<CampaignResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Campaign?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Campaign' as const, id })),
            { type: 'Campaign', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getCampaigns: build.query<CampaignResponse, void>({
      query: () => 'Campaign',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Campaign' as const, id })),
              { type: 'Campaign', id: 'LIST' },
            ]
          : [{ type: 'Campaign', id: 'LIST' }],
    }),
    addCampaign: build.mutation<Campaign, Partial<Campaign>>({
      query: (body) => ({
        url: `Campaign`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Campaign', id: 'LIST' }],
    }),
    getCampaign: build.query<Campaign, string>({
      query: (id) => `Campaign/${id}`,
      providesTags: (result, error, id) => [{ type: 'Campaign', id }],
    }),
    updateCampaign: build.mutation<void, Pick<Campaign, 'id'> & Partial<Campaign>>({
      query: ({ id, ...patch }) => ({
        url: `Campaign/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            CampaignService.util.updateQueryData('getCampaign', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Campaign', id }],
    }),
    deleteCampaign: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Campaign/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Campaign', id }],
    }),
  }),
})

export const {
  useLazyGetCampaignsQuery,
  useGetCampaignQuery,
  useGetCampaignsQuery,
  useAddCampaignMutation,
  useUpdateCampaignMutation,
  useDeleteCampaignMutation,
} = CampaignService
