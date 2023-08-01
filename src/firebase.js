/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";

// firebase configuration
const app = initializeApp({
    apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_APP_ID,
//       apiKey: "AIzaSyBM4TDowE5OmJsnQ8IwJhWpseOvZjAO01Y",
//   authDomain: "react-quiz-dev-bf801.firebaseapp.com",
//   projectId: "react-quiz-dev-bf801",
//   storageBucket: "react-quiz-dev-bf801.appspot.com",
//   messagingSenderId: "140552950187",
//   appId: "1:140552950187:web:0e4b370eab11af40cd02ee"
});

export default app;
