// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIgNP0lknglB8nQcyv8JyMqrOxWaGCWw0",
  authDomain: "react-ott-gpt.firebaseapp.com",
  projectId: "react-ott-gpt",
  storageBucket: "react-ott-gpt.appspot.com",
  messagingSenderId: "44156924899",
  appId: "1:44156924899:web:81e6b33c9294f4116ce6d6",
  measurementId: "G-6RM8EY5SPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();