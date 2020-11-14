import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBcps5-AtrGtLMuPDyeoJFt4hHiENJsCFs",
    authDomain: "tinder-react-2020.firebaseapp.com",
    databaseURL: "https://tinder-react-2020.firebaseio.com",
    projectId: "tinder-react-2020",
    storageBucket: "tinder-react-2020.appspot.com",
    messagingSenderId: "475048218929",
    appId: "1:475048218929:web:9b23f458ecf0865821a010",
    measurementId: "G-EGXX9R81WW"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export default db;