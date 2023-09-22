import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUdKrMB2Afy-a1wu55h7JX6LrMCa2Y61c",
    authDomain: "proyectocoder-c1628.firebaseapp.com",
    projectId: "proyectocoder-c1628",
    storageBucket: "proyectocoder-c1628.appspot.com",
    messagingSenderId: "433968594739",
    appId: "1:433968594739:web:45f32f6b2e2be9d2614846"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
