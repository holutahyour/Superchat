import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  // Your web app's Firebase configuration
  apiKey: "AIzaSyA4mujPx0UVLlSI8d1KJQBqVBfEE7m_voE",
  authDomain: "superchat-holutahyour.firebaseapp.com",
  projectId: "superchat-holutahyour",
  storageBucket: "superchat-holutahyour.appspot.com",
  messagingSenderId: "402347797237",
  appId: "1:402347797237:web:fe34cc2ab2de7de2bdb3bc",
  measurementId: "G-KK5C9JDN65",
});

const auth = firebase.auth();
const firestore = firebase.firestore;

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
