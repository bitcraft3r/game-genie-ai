// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// https://firebase.google.com/docs/projects/api-keys#api-keys-for-firebase-are-different
// "API keys for Firebase services are ok to include in code or checked-in config files."

const firebaseConfig = {
  apiKey: "AIzaSyCqouT4-ZKwOs32O3nuezBBp9yYOqKd-XQ",
  authDomain: "gamegenieai.firebaseapp.com",
  projectId: "gamegenieai",
  storageBucket: "gamegenieai.appspot.com",
  messagingSenderId: "449128070424",
  appId: "1:449128070424:web:6a2dccc74bf7e49d15326d",
  measurementId: "G-WEKQH0FHG0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);