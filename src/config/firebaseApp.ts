// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClQe99-O7B6p1ePaNBVmG-nTdIabO0g-s",
  authDomain: "texus-mindfulmoves.firebaseapp.com",
  projectId: "texus-mindfulmoves",
  storageBucket: "texus-mindfulmoves.appspot.com",
  messagingSenderId: "613391839589",
  appId: "1:613391839589:web:3d6c55c32d1b39a1baf18c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;