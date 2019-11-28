import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyAb0-V5_7Mjh9bDPVxHGVMCLRAz2sL_MOo",
    authDomain: "fir-webapp-f662a.firebaseapp.com",
    databaseURL: "https://fir-webapp-f662a.firebaseio.com",
    projectId: "fir-webapp-f662a",
    storageBucket: "fir-webapp-f662a.appspot.com",
    messagingSenderId: "196884796063",
    appId: "1:196884796063:web:eb0d7988772b20292188aa",
    measurementId: "G-MC9SZ1BJC6"
  };

firebase.initializeApp(config);

export default firebase;
