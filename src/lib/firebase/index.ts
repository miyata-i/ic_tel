import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
const config = {
  apiKey: "AIzaSyAmOA25V1lExJe_XiBXYx5rbO5LTt3zIMg",
  authDomain: "ic-tel-c2a9b.firebaseapp.com",
  databaseURL: "https://ic-tel-c2a9b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ic-tel-c2a9b",
  storageBucket: "ic-tel-c2a9b.appspot.com",
  messagingSenderId: "38708947460",
  appId: "1:38708947460:web:2d1fcefe5f5c7dd546e351",
};

const firebaseApp =
  firebase.apps.length === 0 ? firebase.initializeApp(config) : firebase;

export const firestore = firebaseApp.firestore && firebaseApp.firestore();

export const database = firebaseApp.database && firebaseApp.database();
