// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth,setPersistence,browserSessionPersistence} from "firebase/auth"
import {getStorage} from "firebase/storage"
import{getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC6vl5JFy5WeHF7b-XPcggS8Aq6OOuqmwM",
  authDomain: "baatein-karo-b105c.firebaseapp.com",
  projectId: "baatein-karo-b105c",
  storageBucket: "baatein-karo-b105c.appspot.com",
  messagingSenderId: "226392934697",
  appId: "1:226392934697:web:43b45b6add6e6662400f38",
  measurementId: "G-W0TC694HKD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth=getAuth();
export const db=getFirestore();

setPersistence(auth, browserSessionPersistence).then(()=>{

})
// .catch(error)=>{

// }