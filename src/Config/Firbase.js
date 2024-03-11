import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDhZK5wessjY5vriv7ihWQcLVbsdFr4h-8",
  authDomain: "shop-ani.firebaseapp.com",
  projectId: "shop-ani",
  storageBucket: "shop-ani.appspot.com",
  messagingSenderId: "478151586069",
  appId: "1:478151586069:web:e831b4abcd696796b3391c",
  measurementId: "G-ZMTRCH8PW0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
