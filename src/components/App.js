import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../utils/firebaseConfig';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import './App.css';

function App() {
  useEffect(() => {
    initializeApp(firebaseConfig);
  }, [])
  return (
    <div className="App">
      <h1>ОСП СПБ</h1>
    </div>
  );
}

export default App;
