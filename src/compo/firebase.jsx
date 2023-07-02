// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvoYqmZikOH87Gv268r_AE8sf93BeVZAE",
  authDomain: "blogcom-backend--new.firebaseapp.com",
  projectId: "blogcom-backend--new",
  storageBucket: "blogcom-backend--new.appspot.com",
  messagingSenderId: "330440202388",
  appId: "1:330440202388:web:cc4974b53999dc03ec3c81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
