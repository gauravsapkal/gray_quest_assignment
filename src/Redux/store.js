import { configureStore } from '@reduxjs/toolkit'
import LoadingSlice from './LoadingSlice'
import userListSlice from './userListSlice'

export const store = configureStore({
  reducer: {
    users: userListSlice,
    loader: LoadingSlice
  },
})