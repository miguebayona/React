// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIyL1ZY2g-lD1-YaTI7hndhftoc8umxT4",
  authDomain: "agile-airship-360302.firebaseapp.com",
  projectId: "agile-airship-360302",
  storageBucket: "agile-airship-360302.appspot.com",
  messagingSenderId: "665292825843",
  appId: "1:665292825843:web:fdac403cea2feaa6780386",
  measurementId: "G-KM0RJHSDMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);