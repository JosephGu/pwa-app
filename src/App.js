import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Clock></Clock>
      <Timer></Timer>
    </div>
  );
}

export default App;
