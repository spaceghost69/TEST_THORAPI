import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Weapon } from '../../model'
import { BASE_PATH } from '../../src'
import customBaseQuery from '../customBaseQuery'; // Import the custom base query

type WeaponResponse = Weapon[]

export const WeaponService = createApi({
  reducerPath: 'Weapon', // This should remain unique
  baseQuery: customBaseQuery,
  tagTypes: ['Weapon'],
  endpoints: (build) => ({
    lazyGetWeapons: build.query<WeaponResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 20 }) => `Weapon?page=${page}&limit=${limit}`,
      providesTags: (result, page) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Weapon' as const, id })),
            { type: 'Weapon', id: `PAGE_${page}` },
          ]
          : [],
    }),
    getWeapons: build.query<WeaponResponse, void>({
      query: () => 'Weapon',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Weapon' as const, id })),
              { type: 'Weapon', id: 'LIST' },
            ]
          : [{ type: 'Weapon', id: 'LIST' }],
    }),
    addWeapon: build.mutation<Weapon, Partial<Weapon>>({
      query: (body) => ({
        url: `Weapon`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Weapon', id: 'LIST' }],
    }),
    getWeapon: build.query<Weapon, string>({
      query: (id) => `Weapon/${id}`,
      providesTags: (result, error, id) => [{ type: 'Weapon', id }],
    }),
    updateWeapon: build.mutation<void, Pick<Weapon, 'id'> & Partial<Weapon>>({
      query: ({ id, ...patch }) => ({
        url: `Weapon/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (id) {
          const patchResult = dispatch(
            WeaponService.util.updateQueryData('getWeapon', id, (draft) => {
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Weapon', id }],
    }),
    deleteWeapon: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Weapon/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Weapon', id }],
    }),
  }),
})

export const {
  useLazyGetWeaponsQuery,
  useGetWeaponQuery,
  useGetWeaponsQuery,
  useAddWeaponMutation,
  useUpdateWeaponMutation,
  useDeleteWeaponMutation,
} = WeaponService
