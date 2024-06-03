// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKu5kVkjyS5JYtvsk5G_-3WcLmCFckljw",
  authDomain: "isaquedigas.firebaseapp.com",
  projectId: "isaquedigas",
  storageBucket: "isaquedigas.appspot.com",
  messagingSenderId: "663686181168",
  appId: "1:663686181168:web:b615e7ccb0272d964298f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const bancoExterno=getFirestore(app);
export {bancoExterno};