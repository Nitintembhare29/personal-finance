// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_H_8W64-nXwj9uk2XdYBJ8uFgt0XkQUU",
    authDomain: "finance-tracker-9a645.firebaseapp.com",
    projectId: "finance-tracker-9a645",
    storageBucket: "finance-tracker-9a645.appspot.com",
    messagingSenderId: "1098941810562",
    appId: "1:1098941810562:web:ae311b41c49df5c7fbb19b",
    measurementId: "G-4X6YC433DC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };