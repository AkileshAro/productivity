import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAb1aVDIrwh58lH499R4zCTxgfSTJu8Bds",
    authDomain: "productivity-e49de.firebaseapp.com",
    databaseURL: "https://productivity-e49de.firebaseio.com",
    projectId: "productivity-e49de",
    storageBucket: "productivity-e49de.appspot.com",
    messagingSenderId: "1027751998621",
    appId: "1:1027751998621:web:f459110ef1be9174899074"
});

export default app;