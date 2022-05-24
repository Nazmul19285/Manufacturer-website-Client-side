// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW4KPg4Y1dIRa81H_5rWc-Quf4HRTNlvM",
  authDomain: "pedaler-b750e.firebaseapp.com",
  projectId: "pedaler-b750e",
  storageBucket: "pedaler-b750e.appspot.com",
  messagingSenderId: "8346761355",
  appId: "1:8346761355:web:e12c5b571a3f071861bc8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;