import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA713qH6o0DBNhDv-vip4m_ufQFZ1kpgA0",
  authDomain: "polinaturor-9cbed.firebaseapp.com",
  projectId: "polinaturor-9cbed",
  storageBucket: "polinaturor-9cbed.firebasestorage.app",
  messagingSenderId: "1098663234442",
  appId: "1:1098663234442:web:71d5c4c2bff00474eb1673",
  measurementId: "G-HG2T64K5C1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
