import React from 'react';
import './App.css';
import kleverLogo from './images/logo.svg';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header logo={ kleverLogo }/>
    </div>
  );
}

export default App;
