
import { initializeApp, getApps,getApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfdAu3H0STf1xW9I__Wwndx1G6ScLvmZ0",
  authDomain: "interviewprep-fdf44.firebaseapp.com",
  projectId: "interviewprep-fdf44",
  storageBucket: "interviewprep-fdf44.firebasestorage.app",
  messagingSenderId: "777337786734",
  appId: "1:777337786734:web:e308a7b55901711a3db17f",
  measurementId: "G-XBV9EST1ME"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)