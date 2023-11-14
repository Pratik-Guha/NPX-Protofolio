import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVn2zr78kc4_gH2o7_Q0suld4-nf0oEF4",
  authDomain: "react-npx-protofolio.firebaseapp.com",
  projectId: "react-npx-protofolio",
  storageBucket: "react-npx-protofolio.appspot.com",
  messagingSenderId: "93067786649",
  appId: "1:93067786649:web:d1b85468a9ac04e40cbb08",
  measurementId: "G-JHBPV5R0QW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore()