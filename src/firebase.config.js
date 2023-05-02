// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyoBJZXCr6k_i9bkrzEk6YTSgymJRCULk",
    authDomain: "mr-foody-client-site.firebaseapp.com",
    projectId: "mr-foody-client-site",
    storageBucket: "mr-foody-client-site.appspot.com",
    messagingSenderId: "177392601641",
    appId: "1:177392601641:web:7a6421f307614ce62bea38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;