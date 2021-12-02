
import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();




// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// import 'firebase/auth';
// import 'firebase/database';

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// export const auth = app.auth();
// export const database = app.database();

// Initialize Firebase
// export const auth = app.auth();
// export const database = app.database();

// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");