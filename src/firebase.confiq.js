// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAs0-NQaP8LATjA5EcyCzzmJLooeik7oVM",

  authDomain: "examfdr.firebaseapp.com",

  projectId: "examfdr",

  storageBucket: "examfdr.appspot.com",

  messagingSenderId: "744716038163",

  appId: "1:744716038163:web:44ffada4d77a8f9d050fe6",

  measurementId: "G-QMZ34QZQG6",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default firebaseConfig;
