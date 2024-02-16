'use client'

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { loginAPI } from './apiMiddleware/loginAPI';
import { otpVerifyAPI } from './apiMiddleware/otpVerifyAPI';

export const store = configureStore({
    reducer: {
        [loginAPI.reducerPath]: loginAPI.reducer,
        [otpVerifyAPI.reducerPath]: otpVerifyAPI.reducer
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        loginAPI.middleware,
        otpVerifyAPI.middleware
    )
})

setupListeners(store.dispatch)