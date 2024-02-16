'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface LoginResponse {
  message: string;
  success: boolean;
}

interface LoginPayload {
  email: string;
}

export const loginAPI = createApi({
  reducerPath: "loginAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  endpoints: (builder) => ({
    apiLogin: builder.mutation<LoginResponse, LoginPayload>({
      query: (payload: object) => ({
        url: `/api/v1/userLogin`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useApiLoginMutation } = loginAPI;
