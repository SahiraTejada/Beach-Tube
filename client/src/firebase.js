import { initializeApp } from "firebase/app";
//import firebase from 'firebase';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROYECTID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID 
};


const app = initializeApp(firebaseConfig);
//export const auth = getAuth();
//export const provider = new GoogleAuthProvider();
//export const storage = getStorage(app)
//export const db = firebase.firestore();
//export const storage = firebase.storage();
export default app;

//const db = firebaseConfig.firestore();
//export default db;
