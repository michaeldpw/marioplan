import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDYIeII_oN2hr00XMJIoxEGb1ZSTXtOD5I",
    authDomain: "marioplan-70ac0.firebaseapp.com",
    databaseURL: "https://marioplan-70ac0.firebaseio.com",
    projectId: "marioplan-70ac0",
    storageBucket: "marioplan-70ac0.appspot.com",
    messagingSenderId: "368273643694"
  };

  firebase.initializeApp(config);
  //firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;
