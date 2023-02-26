// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCPhzTn2gPXb64NP33UPRh6VGHqKy6x74Y",
  authDomain: "transitrewardsback.firebaseapp.com",
  projectId: "transitrewardsback",
  storageBucket: "transitrewardsback.appspot.com",
  messagingSenderId: "836437383412",
  appId: "1:836437383412:web:bf2646da35d4312b89a6a1",
  measurementId: "G-LZG8H78ZT2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
