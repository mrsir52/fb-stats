import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBdhX-4waY2_mvE0JS0PaeM5-8ncSfuFIk",
    authDomain: "stats-de93e.firebaseapp.com",
    databaseURL: "https://stats-de93e.firebaseio.com",
    projectId: "stats-de93e",
    storageBucket: "stats-de93e.appspot.com",
    messagingSenderId: "320708677402",
    appId: "1:320708677402:web:966ece80ac42e50f"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase