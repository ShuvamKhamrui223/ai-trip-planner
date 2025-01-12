// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIWG_7dDg2CAabvlKuT0m6f30IW_CRc_E",
    authDomain: "travel-guide-genertor.firebaseapp.com",
    projectId: "travel-guide-genertor",
    storageBucket: "travel-guide-genertor.firebasestorage.app",
    messagingSenderId: "156743276758",
    appId: "1:156743276758:web:6956d98f9f8ecddbaf1177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)

export const googleAuthProvider = new GoogleAuthProvider()