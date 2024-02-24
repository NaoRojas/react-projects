import { startGoogleSignIn } from '../../firebase/providers'
import { checkingCredentials, logOut, login } from './authSlice'

export const checkingAuth = (email, password) => {
  return async (dispatch) => {
    // Here we would make a request to the server
    // to check the credentials
    // and dispatch the login action
    // if the credentials are correct
    dispatch(checkingCredentials())
  }
}

export const startGoogleLogin = () => {
  return async (dispatch) => {
    // Here we would make a request to the server
    // to start the google login
    // and dispatch the login action
    // if the credentials are correct
    dispatch(checkingCredentials())
    const result = await startGoogleSignIn()
    if (!result.ok) {
      dispatch(logOut())
    }

    dispatch(login(result))

    console.log({ result })

  }
}