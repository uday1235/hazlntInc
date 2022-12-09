import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  // your config goes hconst firebaseConfig = {
  apiKey: "AIzaSyA7******************8",
  authDomain: "ether-af94c.firebaseapp.com",
  projectId: "ether-af94c",
  storageBucket: "ether-af94c.appspot.com",
  messagingSenderId: "135994131115",
  appId: "1:135994131115:we******************88",
  measurementId: "G-WWPY0YF1ZK",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
