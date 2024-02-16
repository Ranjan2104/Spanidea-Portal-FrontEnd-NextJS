'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface otpResponse {
  message: string;
  success: boolean;
  token: string;
}

interface otpPayload {
  email: string | any;
  otp: string
}

export const otpVerifyAPI = createApi({
  reducerPath: "otpVerifyAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  endpoints: (builder) => ({
    apiotpVerify: builder.mutation<otpResponse, otpPayload>({
      query: (payload: object) => ({
        url: `/api/v1/otpVerify`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useApiotpVerifyMutation } = otpVerifyAPI;
