import * as firebase from 'firebase/app';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDeOwLeWqY9Yp0OGiHCuNITuQ81_dCS2KU",
  authDomain: "rough-note-richardjob.firebaseapp.com",
  databaseURL: "https://rough-note-richardjob.firebaseio.com",
  projectId: "rough-note-richardjob",
  storageBucket: "rough-note-richardjob.appspot.com",
  messagingSenderId: "538656529287",
  appId: "1:538656529287:web:515379774d208cbd801122"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;