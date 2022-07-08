import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCTRwxoCFAjlDU6crZLggVmqNpVArhA5WI",
    authDomain: "walletfy-db.firebaseapp.com",
    projectId: "walletfy-db",
    storageBucket: "walletfy-db.appspot.com",
    messagingSenderId: "161680589919",
    appId: "1:161680589919:web:7fdcf702b795ae03cfc7ea"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)



export {db, auth, storage}
