// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBybapFCPWxAhJ-1ZSLrJz8zCryT9_7txA",
  authDomain: "kenbi-s-imaginarium.firebaseapp.com",
  projectId: "kenbi-s-imaginarium",
  storageBucket: "kenbi-s-imaginarium.firebasestorage.app",
  messagingSenderId: "196647583280",
  appId: "1:196647583280:web:846e8b71d24d1960a877f5",
  measurementId: "G-83GWRV1R9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };