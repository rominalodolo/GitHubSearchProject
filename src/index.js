import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import * as firebase from 'firebase';

// var config = {
//     apiKey: "AIzaSyBN9WlmRc3SedmC4agM1G-rYqezGR22iZE",
//     authDomain: "crudproject-45834.firebase app.com",
//     databaseURL: "https://crudproject-45834.firebaseio.com",
//     projectId: "crudproject-45834",
//     storageBucket: "crudproject-45834.appspot.com",
//     messagingSenderId: "590481645308"
//     appId: “…”
//   };

// firebase.initializeApp(config);  
ReactDOM.render(
  <App />, document.getElementById('root'));
registerServiceWorker();


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAH4CjXrXm51t8ZeaKUfAB1XYPpFxKpzOo",
//   authDomain: "crudbeginningreact.firebaseapp.com",
//   projectId: "crudbeginningreact",
//   storageBucket: "crudbeginningreact.appspot.com",
//   messagingSenderId: "536739765095",
//   appId: "1:536739765095:web:1f1a2b5128492fe9b8adc2",
//   measurementId: "G-FCSG8N2B79"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);