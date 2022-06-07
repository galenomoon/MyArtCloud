// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAtxAbWXOCzLtUja09XrHjJmNj1mYAQwgk",
  authDomain: "myartcloud-19708.firebaseapp.com",
  databaseURL: "https://myartcloud-19708-default-rtdb.firebaseio.com",
  projectId: "myartcloud-19708",
  storageBucket: "myartcloud-19708.appspot.com",
  messagingSenderId: "390075843444",
  appId: "1:390075843444:web:3f816e9b8a0747bd8b6221",
  measurementId: "G-T56GKQXVK5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;