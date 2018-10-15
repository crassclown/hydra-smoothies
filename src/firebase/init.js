import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
let config = {
  apiKey: "AIzaSyBOKFhV0FhmtN3NeJkRIlCjzi51vmq-sC4",
  authDomain: "hydra-smoothies.firebaseapp.com",
  databaseURL: "https://hydra-smoothies.firebaseio.com",
  projectId: "hydra-smoothies",
  storageBucket: "hydra-smoothies.appspot.com",
  messagingSenderId: "815262670591"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firebase database
export default firebaseApp.firestore()
