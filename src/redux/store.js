import {configureStore } from '@reduxjs/toolkit'
import storeReducer from './StoreSlice'

export const store = configureStore({
    reducer: {
        store:storeReducer
    }
  })