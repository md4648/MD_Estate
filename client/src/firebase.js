// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "md-estate.firebaseapp.com",
  projectId: "md-estate",
  storageBucket: "md-estate.appspot.com",
  messagingSenderId: "999293981485",
  appId: "1:999293981485:web:499a2b2da288872e03b9a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);