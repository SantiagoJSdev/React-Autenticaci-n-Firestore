
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'




const firebaseConfig = {
    apiKey: "AIzaSyDuzHEWNKnSMLzAc1F2TfC-UzPoAy9-370",
    authDomain: "react-app-cursos-a6596.firebaseapp.com",
    projectId: "react-app-cursos-a6596",
    storageBucket: "react-app-cursos-a6596.appspot.com",
    messagingSenderId: "811013699333",
    appId: "1:811013699333:web:6387256751673c0a87a96c"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const gooogleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export {
      db,
      gooogleAuthProvider,
      firebase

  }