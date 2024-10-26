// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4jVH_seDme2XsnEmlnIcMYLNbASRoz9s",
  authDomain: "exam-final-a24c3.firebaseapp.com",
  projectId: "exam-final-a24c3",
  storageBucket: "exam-final-a24c3.appspot.com",
  messagingSenderId: "29493444740",
  appId: "1:29493444740:web:fabf557ea6a42b903642d1",
  measurementId: "G-RLCJD9613V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebseDb = getDatabase(app)

export default firebseDb