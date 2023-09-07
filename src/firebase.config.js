// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9_yvVhFDz4lwxrrOTTjhEtQYYcXaeh_k",
  authDomain: "crud-node-ad775.firebaseapp.com",
  projectId: "crud-node-ad775",
  storageBucket: "crud-node-ad775.appspot.com",
  messagingSenderId: "504766478821",
  appId: "1:504766478821:web:116af718b4d6600c38d70c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app