import firebase from 'firebase/app';
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBJtcUxmKjwMnPz0wv1o4GTDYOobHB14Xs",
  authDomain: "lists-b59d4.firebaseapp.com",
  databaseURL: "https://lists-b59d4.firebaseio.com",
  projectId: "lists-b59d4",
  storageBucket: "lists-b59d4.appspot.com",
  messagingSenderId: "933084123577",
  appId: "1:933084123577:web:5d499fcba055e477ec2668",
  measurementId: "G-WQM7B1ZK2N"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;