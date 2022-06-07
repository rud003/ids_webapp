// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9gufKaYPUpkDAie4vwFsKXm5qQhTkcXo",
  authDomain: "house-market-place-4fe3d.firebaseapp.com",
  projectId: "house-market-place-4fe3d",
  storageBucket: "house-market-place-4fe3d.appspot.com",
  messagingSenderId: "811847348622",
  appId: "1:811847348622:web:4bf6f85826c35c75cff4df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()