// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcJ_BoKm77oCNUwv8aU_Z5jo8rvzkJYZk",
  authDomain: "tinzer-a4c24.firebaseapp.com",
  projectId: "tinzer-a4c24",
  storageBucket: "tinzer-a4c24.appspot.com",
  messagingSenderId: "1022253022609",
  appId: "1:1022253022609:web:242b7d93716601d4ac6e30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
