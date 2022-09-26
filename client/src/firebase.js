import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyALBiAnBtlf4lWOhzLZw0N46iICeZvAjgI",
  authDomain: "video-12a64.firebaseapp.com",
  projectId: "video-12a64",
  storageBucket: "video-12a64.appspot.com",
  messagingSenderId: "545611305674",
  appId: "1:545611305674:web:74d0db1a2b595654605a33"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;

