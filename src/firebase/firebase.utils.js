import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCZrLxg1A3_8pjh3LilIOqeo6oO8ZGeyeI",
  authDomain: "crwn-db-abbae.firebaseapp.com",
  projectId: "crwn-db-abbae",
  storageBucket: "crwn-db-abbae.appspot.com",
  messagingSenderId: "115408400120",
  appId: "1:115408400120:web:1033ecd8a21d5f2d52d50d",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
