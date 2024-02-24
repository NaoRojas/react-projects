import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

export const startGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    const { displayName, email, photoURL, uid } = result.user
    return {
      displayName,
      email,
      photoURL,
      uid,
      ok: true
    }
  } catch (error) {
    return {
      ok: false,
      error
    }
  }
}

export const register = async ({ email, password, displayName }) => {

  try {
    const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    console.log(result)
    const { uid, photoURL } = result.user
    await updateProfile(FirebaseAuth.currentUser, { displayName })
    return {
      displayName,
      email,
      photoURL,
      uid,
      ok: true
    }

  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}