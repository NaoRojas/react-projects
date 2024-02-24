import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
    uid: null,
    name: null,
    email: null,
    errorMessage: null,
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
    logOut: (state, action) => {
      state.status = 'not-authenticated'
      state.uid = null
      state.name = null
      state.email = null
      state.errorMessage = action.payload.errorMessage
      state.photoURL = null
      console.log(state)
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