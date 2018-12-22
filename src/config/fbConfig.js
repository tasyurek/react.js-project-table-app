import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAQBgZxbC1Qhes1UL64fY5OhrvZ56YFx_U",
  authDomain: "project-table-app.firebaseapp.com",
  databaseURL: "https://project-table-app.firebaseio.com",
  projectId: "project-table-app",
  storageBucket: "project-table-app.appspot.com",
  messagingSenderId: "853735011746"
};
firebase.initializeApp(config);

export default firebase;
