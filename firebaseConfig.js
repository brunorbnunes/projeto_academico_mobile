// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlc162TaAq8R-K8NQEmpqjL6M-0mdfT9A",
  authDomain: "projeto-mobile-6f319.firebaseapp.com",
  projectId: "projeto-mobile-6f319",
  storageBucket: "projeto-mobile-6f319.firebasestorage.app",
  messagingSenderId: "210667419478",
  appId: "1:210667419478:web:f0feff6d56c656d912c8f7",
  measurementId: "G-D0PVBM0MNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);