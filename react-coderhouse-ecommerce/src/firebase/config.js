import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyBJ-bCPPRzt6-C_wp35sYTyRdYr9BoAE",
  authDomain: "react-coderhouse-ecommerce-3.firebaseapp.com",
  projectId: "react-coderhouse-ecommerce-3",
  storageBucket: "react-coderhouse-ecommerce-3.appspot.com",
  messagingSenderId: "297831833773",
  appId: "1:297831833773:web:baeafcd2ef01536576a624"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);