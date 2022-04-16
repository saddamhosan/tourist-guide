// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBunVsJ8lPESchIWW5CPQ4RJHiGYqeLWbw",
  authDomain: "tourist-guide-ae9d0.firebaseapp.com",
  projectId: "tourist-guide-ae9d0",
  storageBucket: "tourist-guide-ae9d0.appspot.com",
  messagingSenderId: "121856219580",
  appId: "1:121856219580:web:e7247ce6f1b0888a0c73b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth