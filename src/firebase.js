import { getDatabase } from "firebase/database"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKJ-T7Raxua25lk48Ix3He01oKukBxSUg",
  authDomain: "registration-form-5009b.firebaseapp.com",
  databaseURL: "https://registration-form-5009b-default-rtdb.firebaseio.com",
  projectId: "registration-form-5009b",
  storageBucket: "registration-form-5009b.appspot.com",
  messagingSenderId: "168323652926",
  appId: "1:168323652926:web:54ed83ea08fef68e06e06f",
  measurementId: "G-MG1ENYCYPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);