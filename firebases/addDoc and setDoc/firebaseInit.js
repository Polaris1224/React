// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//Open Docs and go to build and open add Data
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Open Docs and go to build and open add Data
export const db = getFirestore(app);
