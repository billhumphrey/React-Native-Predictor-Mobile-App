// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHjr13DPvrxJOvlbIyVLgin8n4azmJ6-k",
  authDomain: "dans-project-4cc52.firebaseapp.com",
  projectId: "dans-project-4cc52",
  databaseURL: "https://dans-project-4cc52-default-rtdb.firebaseio.com",
  storageBucket: "dans-project-4cc52.firebasestorage.app",
  messagingSenderId: "618256533205",
  appId: "1:618256533205:web:5e8313396f0fea1a17045c",
  measurementId: "G-M491SMH2RM"
};


// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const database = firebase.database();

export { auth, database };
