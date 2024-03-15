import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDeEynycdDYN6NJLa0UW08X3BOD1oXgrtQ",
  authDomain: "hotel-1f947.firebaseapp.com",
  projectId: "hotel-1f947",
  storageBucket: "hotel-1f947.appspot.com",
  messagingSenderId: "722411790139",
  appId: "1:722411790139:web:81fc644ef274b68edd211e",
  measurementId: "G-XV6YHXZZMK"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)