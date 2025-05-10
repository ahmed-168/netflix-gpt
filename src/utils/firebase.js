// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATgPxR6_gbI1Iz9cH8hLjqkMO3n0vywcg",
  authDomain: "netflix-gpt-c86aa.firebaseapp.com",
  projectId: "netflix-gpt-c86aa",
  storageBucket: "netflix-gpt-c86aa.firebasestorage.app",
  messagingSenderId: "307091503304",
  appId: "1:307091503304:web:2c9cba7b6e4f76ea768dfd",
  measurementId: "G-570XWM5EPQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
