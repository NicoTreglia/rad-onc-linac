import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCox9PW7HyUyAhd4vhvYSCWtRB7oxtZKik",
    authDomain: "radonc-linac.firebaseapp.com",
    databaseURL: "https://radonc-linac.firebaseio.com",
    projectId: "radonc-linac",
    storageBucket: "radonc-linac.appspot.com",
    messagingSenderId: "107720480654"
  };

let app = firebase.initializeApp(config);
export const db = app.database()
export const Networks = db.ref('Navigation')
export const Midnight = db.ref('Midnight')
export const Switch   = db.ref('Networks')


