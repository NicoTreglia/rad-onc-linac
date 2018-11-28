import firebase from 'firebase'
//Connecting to Firebase instance --> All creditials can be found of Firebase Website.
const config = {
    apiKey: "AIzaSyCox9PW7HyUyAhd4vhvYSCWtRB7oxtZKik",
    authDomain: "radonc-linac.firebaseapp.com",
    databaseURL: "https://radonc-linac.firebaseio.com",
    projectId: "radonc-linac",
    storageBucket: "radonc-linac.appspot.com",
    messagingSenderId: "107720480654"
  };
//Intializing connection to Firebase
let app = firebase.initializeApp(config);
export const db = app.database() //Generic Connections to Database
export const Networks = db.ref('Navigation') //Connection to Navigation --> Hold all path names for patient facing and admin
export const Midnight = db.ref('Midnight') //Connection to Midnight --> Node that will reset each Site to "On Time" with the first visit on a new day
export const Switch   = db.ref('Networks') //Connection to Networks --> Holds all status infomation and common name for every machine 


