// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrJr9S9jDzJOvQGs12bEkLZZ6_gJQQhAI",
  authDomain: "redux-4230e.firebaseapp.com",
  projectId: "redux-4230e",
  storageBucket: "redux-4230e.appspot.com",
  messagingSenderId: "844430039525",
  appId: "1:844430039525:web:d823e025a45b45944bb70c",
  measurementId: "G-FKJE7WNGG0"
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
