import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxN1_7xD95pz7Q0IM8gBJ5MzcLOhbOXcE",
  authDomain: "uber-clone-8510f.firebaseapp.com",
  projectId: "uber-clone-8510f",
  storageBucket: "uber-clone-8510f.appspot.com",
  messagingSenderId: "976595840313",
  appId: "1:976595840313:web:b21226af00863bfddf8ce8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const googleProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const database = firebase.firestore();
const storage = firebase.storage();

export { database, auth, storage, googleProvider };
