import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD4ekRwjhjbB9RjC9b8JRkcilac0HPR8ic",
  authDomain: "presencecontrolapp.firebaseapp.com",
  projectId: "presencecontrolapp",
  storageBucket: "presencecontrolapp.appspot.com",
  messagingSenderId: "1007903590419",
  appId: "1:1007903590419:web:f180a72f512f618dd757e6",
  measurementId: "G-BG372L5RPD"
};  


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)