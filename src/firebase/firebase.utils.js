import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCIJl2tgxN9IZ_BkK0rxk1s3mz7SS9J5rY",
    authDomain: "mialbums.firebaseapp.com",
    databaseURL: "https://mialbums.firebaseio.com",
    projectId: "mialbums",
    storageBucket: "mialbums.appspot.com",
    messagingSenderId: "905260544089",
    appId: "1:905260544089:web:2b8c79ae6b56af30f50148",
    measurementId: "G-BDV2KV8NEK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);