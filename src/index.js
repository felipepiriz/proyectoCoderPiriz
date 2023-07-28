import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || '',
  authDomain: "proyecto-coder-21edf.firebaseapp.com",
  projectId: "proyecto-coder-21edf",
  storageBucket: "proyecto-coder-21edf.appspot.com",
  messagingSenderId: "108255314151",
  appId: "1:108255314151:web:364a28138aae3ce2c52242",
  measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID || ''
 };

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
