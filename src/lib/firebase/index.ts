import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
const config = {
  apiKey: 'AIzaSyAi0Iu6w1LPv8EoaHNYxOFD_erxApzp6sA',
  authDomain: 'ic-tel.firebaseapp.com',
  projectId: 'ic-tel',
  storageBucket: 'ic-tel.appspot.com',
  messagingSenderId: '491194826467',
  appId: '1:491194826467:web:f9c32e17e1221b3b8e0fd6',
  measurementId: 'G-NLXVDW4785',
};

const firebaseApp =
  firebase.apps.length === 0 ? firebase.initializeApp(config) : firebase;

export const firestore = firebaseApp.firestore && firebaseApp.firestore();

export const database = firebaseApp.database && firebaseApp.database();
