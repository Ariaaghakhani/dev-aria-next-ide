// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmQUKceUiiF0-FTDCnUs3EE8OPgOtZPrM",
    authDomain: "dev-aria.firebaseapp.com",
    projectId: "dev-aria",
    storageBucket: "dev-aria.firebasestorage.app",
    messagingSenderId: "408359191295",
    appId: "1:408359191295:web:ab4a2804386c40ab4e42ca",
    measurementId: "G-2TLB1XNR1E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)