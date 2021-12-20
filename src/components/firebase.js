// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnKZ4Pr-Q7JvVz1gMDBVq-0R98SwAmB1I",
  authDomain: "linkedin-clone-react-793f5.firebaseapp.com",
  projectId: "linkedin-clone-react-793f5",
  storageBucket: "linkedin-clone-react-793f5.appspot.com",
  messagingSenderId: "944513482767",
  appId: "1:944513482767:web:80b775038437bd909d237a"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth }