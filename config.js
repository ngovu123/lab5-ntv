import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAsCrP_fcWzQ2ThUBrwgraHg6hD70EQEr8",

  authDomain: "testbailab.firebaseapp.com",

  projectId: "testbailab",

  storageBucket: "testbailab.appspot.com",

  messagingSenderId: "533894034301",

  appId: "1:533894034301:web:db32c070224fc6aea21214",

  measurementId: "G-NBEM6VBENV"

  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };