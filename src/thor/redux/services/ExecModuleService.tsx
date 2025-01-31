import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ExecModule } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type ExecModuleResponse = ExecModule[]

export const ExecModuleService = createApi({
  reducerPath: 'ExecModule', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['ExecModule'],
  endpoints: (build) => ({
    lazyGetExecModules: build.query<ExecModuleResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `ExecModule?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'ExecModule' as const, id })),
            { type: 'ExecModule', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getExecModules: build.query<ExecModuleResponse, void>({
      query: () => 'ExecModule',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'ExecModule' as const, id })),
              { type: 'ExecModule', id: 'LIST' },
            ]
          : [{ type: 'ExecModule', id: 'LIST' }],
    }),
    addExecModule: build.mutation<ExecModule, Partial<ExecModule>>({
      query: (body) => ({
        url: `ExecModule`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'ExecModule', id: 'LIST' }],
    }),
    getExecModule: build.query<ExecModule, string>({
      query: (id) => `ExecModule/${id}`,
      providesTags: (result, error, id) => [{ type: 'ExecModule', id }],
    }),
    updateExecModule: build.mutation<void, Pick<ExecModule, 'id'> & Partial<ExecModule>>({
      query: ({ id, ...patch }) => ({
        url: `ExecModule/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            ExecModuleService.util.updateQueryData('getExecModule', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'ExecModule', id }],
    }),
    deleteExecModule: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `ExecModule/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'ExecModule', id }],
    }),
  }),
})

export const {
  useLazyGetExecModulesQuery,
  useGetExecModuleQuery,
  useGetExecModulesQuery,
  useAddExecModuleMutation,
  useUpdateExecModuleMutation,
  useDeleteExecModuleMutation,
} = ExecModuleService
