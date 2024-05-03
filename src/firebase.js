import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDwSaJKN11CvNyU0idZMf1QAq79NQNFiPw",
    authDomain: "diamonds-direct-3d3d6.firebaseapp.com",
    projectId: "diamonds-direct-3d3d6",
    storageBucket: "diamonds-direct-3d3d6.appspot.com",
    messagingSenderId: "190402468598",
    appId: "1:190402468598:web:392dc750499349c4a9aad7",
    measurementId: "G-LKKTRTQFLG",
    databaseURL:'https://diamonds-direct-3d3d6-default-rtdb.firebaseio.com/'
  };

export const app = initializeApp(firebaseConfig);
