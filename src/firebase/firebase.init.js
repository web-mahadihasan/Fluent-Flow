// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp44Egi4rzNvgcSBLBtJWQ0FJA7Ol0XWg",
  authDomain: "fluent-flow-bd.firebaseapp.com",
  projectId: "fluent-flow-bd",
  storageBucket: "fluent-flow-bd.firebasestorage.app",
  messagingSenderId: "1073896037340",
  appId: "1:1073896037340:web:4b13ebc2b0f29f010dcd19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;