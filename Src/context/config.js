import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEzycpzul3Pi_zh6caTbenG7uGfIFlSmQ",
    authDomain: "lab5-43818.firebaseapp.com",
    projectId: "lab5-43818",
    storageBucket: "lab5-43818.appspot.com",
    messagingSenderId: "435371860899",
    appId: "1:435371860899:web:4bd2f9cc05350f05363016",
    measurementId: "G-S5J0YNQBVK"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };