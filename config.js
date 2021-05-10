import * as firebase from "firebase"
var firebaseConfig = {
  apiKey: "AIzaSyBJUoxJP9mnmkdmpt1MiWEMXD1RruE7V7E",
  authDomain: "barter-system-b594b.firebaseapp.com",
  projectId: "barter-system-b594b",
  storageBucket: "barter-system-b594b.appspot.com",
  messagingSenderId: "1053083614618",
  appId: "1:1053083614618:web:119de20c19310d2162ce23"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()