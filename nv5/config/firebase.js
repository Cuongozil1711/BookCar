import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDXkceASDf3vk-vU6hjeHBsAmwmkPV3ZAg",
    authDomain: "chatapp-nsmv.firebaseapp.com",
    projectId: "chatapp-nsmv",
    storageBucket: "chatapp-nsmv.appspot.com",
    messagingSenderId: "246567091201",
    appId: "1:246567091201:web:b5b165631fd70d98535400",
    databaseURL: "noreply@chatapp-nsmv.firebaseapp.com"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();