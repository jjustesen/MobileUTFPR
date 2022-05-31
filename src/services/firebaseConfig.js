// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBz3ccYc-zsgrRVXNMpyaRrC9ME-MpTKUk",
  authDomain: "mais-utfpr.firebaseapp.com",
  databaseURL: "https://mais-utfpr-default-rtdb.firebaseio.com",
  projectId: "mais-utfpr",
  storageBucket: "mais-utfpr.appspot.com",
  messagingSenderId: "862394533593",
  appId: "1:862394533593:web:eb4b91b17b2289b8c660c8",
  measurementId: "G-8G4BLMJ18B",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
