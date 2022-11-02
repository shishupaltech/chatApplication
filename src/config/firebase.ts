// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVPUWrJ4FrUT2l2o0UlurW1jqvxdd78EU",
  authDomain: "chat-application-e0771.firebaseapp.com",
  projectId: "chat-application-e0771",
  storageBucket: "chat-application-e0771.appspot.com",
  messagingSenderId: "701507083230",
  appId: "1:701507083230:web:bab0782fa7a0b24e459b4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);