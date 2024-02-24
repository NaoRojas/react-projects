import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
    uid: null,
    name: null,
    email: null,
    errorMesage: null,
    photoURL: null
  },
  reducers: {
    login: (state, action) => {
      state.status = 'authenticated'
      state.uid = action.payload.uid
      state.name = action.payload.displayName
      state.email = action.payload.email
      state.photoURL = action.payload.photoURL
    },
    logOut: (state) => {
      state.status = 'not-authenticated'
      state.uid = null
      state.name = null
      state.email = null
      state.errorMesage = null
      state.photoURL = null
    },
    checkingCredentials: (state) => {
      state.status = 'checking'

    },
  },
})

export const {
  login,
  logOut,
  checkingCredentials
} = authSlice.actions
export default authSlice.reducer