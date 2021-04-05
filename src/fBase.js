import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD0PxSmXIKDvTiYEmEa2wCWaapi-MchMEU",
    authDomain: "react-firebase-1-f7a69.firebaseapp.com",
    projectId: "react-firebase-1-f7a69",
    storageBucket: "react-firebase-1-f7a69.appspot.com",
    messagingSenderId: "1036758110229",
    appId: "1:1036758110229:web:7089e1023b8b4f9b187e1c"
  };

  var fire = firebase.initializeApp(firebaseConfig);

  export default fire;