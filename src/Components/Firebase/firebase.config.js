// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbypyRQAphy5o_mv-_9leTwuBT4JfijMk",
  authDomain: "carshop-46ff7.firebaseapp.com",
  projectId: "carshop-46ff7",
  storageBucket: "carshop-46ff7.appspot.com",
  messagingSenderId: "394882755960",
  appId: "1:394882755960:web:340443c9f55c5dc846ec8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);