import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth' 

const firebaseConfig = {
    apiKey: "AIzaSyA6vN54gADAQuQdTkLr1tddzmRdOHZlpyU",
    authDomain: "curso-5f920.firebaseapp.com",
    projectId: "curso-5f920",
    storageBucket: "curso-5f920.appspot.com",
    messagingSenderId: "615891920314",
    appId: "1:615891920314:web:09e6cef61a161a76dbe983",
    measurementId: "G-4J1QV8QKEP"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp); 
  const auth = getAuth(firebaseApp)

  export { db, auth }; 