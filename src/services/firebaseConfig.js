import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDHx8QPNYMNftilE5JyiKnybaz3rRTZ1hM",
  authDomain: "clone-netflix-1d436.firebaseapp.com",
  projectId: "clone-netflix-1d436",
  storageBucket: "clone-netflix-1d436.firebasestorage.app",
  messagingSenderId: "639909982053",
  appId: "1:639909982053:web:1a0591f90800b61c7efb8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { auth }