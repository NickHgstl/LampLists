import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDiGd55TvvYCtcJJhbhDLA2kjH_vphkcdQ",
  authDomain: "lightify-8cdd2.firebaseapp.com",
  projectId: "lightify-8cdd2",
  storageBucket: "lightify-8cdd2.appspot.com",
  messagingSenderId: "220253245876",
  appId: "1:220253245876:web:877ae88aa4af646444e2e1",
  measurementId: "G-4D7V8P207J"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
export const storage = getStorage(app)
