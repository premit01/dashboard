// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.meta.evn.VITE_APIKEY,
    authDomain: process.meta.evn.VITE_AUTHDOMAIN,
    projectId: process.meta.evn.VITE_PROJECTID,
    storageBucket: process.meta.evn.VITE_STORAGEBUCKET,
    messagingSenderId: process.meta.evn.VITE_MESSAGINGSENDERID,
    appId: process.meta.evn.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app