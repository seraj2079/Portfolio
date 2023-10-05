import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBNyaOs1OySf5dJ2AiAgMLGuwZig2FMDAw",
  authDomain: "portfolio-9c4f4.firebaseapp.com",
  projectId: "portfolio-9c4f4",
  storageBucket: "portfolio-9c4f4.appspot.com",
  messagingSenderId: "885397005014",
  appId: "1:885397005014:web:3c90104aa6ef8b61aa9f77"
};

  firebase.initializeApp(firebaseConfig)
  const database=firebase.database();
  export default database;