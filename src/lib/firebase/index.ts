import firebase from "firebase/app"
import "firebase/database"
import "firebase/firestore"
const config = {
    apiKey: "AIzaSyACsEjJsK4H5cLrb5nD69w69IKO0PEdxX0",
    authDomain: "tell-ic-2021.firebaseapp.com",
    projectId: "tell-ic-2021",
    storageBucket: "tell-ic-2021.appspot.com",
    messagingSenderId: "156830715150",
    appId: "1:156830715150:web:3e1c1a6fde9ef764971b5f",
    measurementId: "G-K5K1R7ZW2L"
};

const firebaseApp = firebase.apps.length === 0 ? firebase.initializeApp(config) : firebase;


export const firestore = firebaseApp.firestore && firebaseApp.firestore();

export const database = firebaseApp.database && firebaseApp.database()