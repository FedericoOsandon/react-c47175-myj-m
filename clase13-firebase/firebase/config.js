import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAWCPN84Al6208s5bPDYzaVYqphZKXHnY",
  authDomain: "comision47175.firebaseapp.com",
  projectId: "comision47175",
  storageBucket: "comision47175.appspot.com",
  messagingSenderId: "201090534207",
  appId: "1:201090534207:web:7a42085ef0a9819e38a18a"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirebase = () => app