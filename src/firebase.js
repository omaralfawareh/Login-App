import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDaDrKp0-q0MZFBQcjDOj2jtUYx6fK2vEw",
  authDomain: "loginapp-dev-9fe6f.firebaseapp.com",
  projectId: "loginapp-dev-9fe6f",
  storageBucket: "loginapp-dev-9fe6f.appspot.com",
  messagingSenderId: "560281261369",
  appId: "1:560281261369:web:edf3b406a2b5bd4b5644e8"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)