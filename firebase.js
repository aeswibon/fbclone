import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfRnUAClA1ajM-gWilF6ETTB739o2chrQ",
  authDomain: "clone-with-reactjs-98.firebaseapp.com",
  projectId: "clone-with-reactjs-98",
  storageBucket: "clone-with-reactjs-98.appspot.com",
  messagingSenderId: "98055504147",
  appId: "1:98055504147:web:1a206a2e1f86dc01a19ae6",
  measurementId: "G-CC3PXGBC04"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();
const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
