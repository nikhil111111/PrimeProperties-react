// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Corrected function name
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj-8ixRcOu1eR0bJFG-_3_-o9JFxyqrdk",
    authDomain: "property-purchase-63437.firebaseapp.com",
    projectId: "property-purchase-63437",
    storageBucket: "property-purchase-63437.appspot.com",
    messagingSenderId: "147918295449",
    appId: "1:147918295449:web:8a5a97cb37941100460308"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();  