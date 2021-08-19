import firebase from "firebase";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsWvpFYbWIwWvIc2_3mU1LPW_mP9OQb34",
    authDomain: "hotel-booking-app-3b831.firebaseapp.com",
    projectId: "hotel-booking-app-3b831",
    storageBucket: "hotel-booking-app-3b831.appspot.com",
    messagingSenderId: "806069271692",
    appId: "1:806069271692:web:54116cfaa892c61d754fa9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();