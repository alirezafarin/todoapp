import firebase from 'firebase/app';
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAsEIYyR2edG4EQlG7EljYucDhZ3jRShkw",
  authDomain: "todos-5da84.firebaseapp.com",
  databaseURL: "https://todos-5da84.firebaseio.com",
  projectId: "todos-5da84",
  storageBucket: "todos-5da84.appspot.com",
  messagingSenderId: "190492061432",
  appId: "1:190492061432:web:d2ec713473a3b0571e150d",
  measurementId: "G-73J79CCV8L"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });

export default db;