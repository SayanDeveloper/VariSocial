import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBny7gBsyzMSIjme4DQ3VXTudinQQCDIKc",
    authDomain: "varisocial.firebaseapp.com",
    projectId: "varisocial",
    storageBucket: "varisocial.appspot.com",
    messagingSenderId: "797900852075",
    appId: "1:797900852075:web:9a05168bea16a0cc679a2e"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};