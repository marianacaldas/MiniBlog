import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6uOqFr0lL_v1HJxHh_ogQvQ-FJcX15BM",
  authDomain: "miniblog-94fee.firebaseapp.com",
  projectId: "miniblog-94fee",
  storageBucket: "miniblog-94fee.appspot.com",
  messagingSenderId: "121601931313",
  appId: "1:121601931313:web:bd4a887a065c9fa2fb3d10"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };