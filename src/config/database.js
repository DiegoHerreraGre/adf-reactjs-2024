import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: 'AIzaSyDwHxnb0Bg0PrR2Il9xQPRj5VFhcXMRckY',
    authDomain: "adf-react-2024.firebaseapp.com",
    projectId: "adf-react-2024",
    storageBucket: "adf-react-2024.appspot.com",
    messagingSenderId: "302967974350",
    appId: "1:302967974350:web:5ae6bb0c0936589dbfe39f",
    measurementId: "G-SYH20P18LT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

const analytics = getAnalytics(app);