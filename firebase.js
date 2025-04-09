// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCEvH8gKeunn4uOz5v56eM8dnT3g-zYud4",
    authDomain: "photochain-571c7.firebaseapp.com",
    projectId: "photochain-571c7",
    storageBucket: "photochain-571c7.firebasestorage.app",
    messagingSenderId: "590784253577",
    appId: "1:590784253577:web:7bbeeca978fac1b6370058"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);