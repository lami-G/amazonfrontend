// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";

// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfhLV1MWzeSS--J7Z-n9CQuLJITiDgucY",
  authDomain: "clone-27fc0.firebaseapp.com",
  projectId: "clone-27fc0",
  storageBucket: "clone-27fc0.firebasestorage.app",
  messagingSenderId: "879188509788",
  appId: "1:879188509788:web:49ae1f1aedd1c1bc73d299"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=app.firestore();