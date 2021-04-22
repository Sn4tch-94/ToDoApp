import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjHsmreLnSECDhQuYvs0igSvibQtkxt0I",
    authDomain: "todo-app-d9d15.firebaseapp.com",
    projectId: "todo-app-d9d15",
    storageBucket: "todo-app-d9d15.appspot.com",
    messagingSenderId: "1018978959678",
    appId: "1:1018978959678:web:b36dd46438187e39f5ec6f",
    measurementId: "G-NPR9VVR02R"
})

const db = firebaseApp.firestore();

export default db;