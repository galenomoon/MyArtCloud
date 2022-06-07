import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import 'firebase/database'

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;