

import { configureStore } from '@reduxjs/toolkit'
import { journalSlice } from './journal/journalSlice'
import { authSlice } from './auth/authSlice'
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
  },
})
