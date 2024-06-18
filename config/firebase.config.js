import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCu6VlFuA46n2d8fHdjHcjUP5khU5s0rLY",
  authDomain: "chatapp-4776c.firebaseapp.com",
  projectId: "chatapp-4776c",
  storageBucket: "chatapp-4776c.appspot.com",
  messagingSenderId: "32999235807",
  appId: "1:32999235807:web:fcf7b5229a06c887fb096a"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB };
