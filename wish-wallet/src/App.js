import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import kleverLogo from './images/logo.svg';
import { Header } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/wallet" /> } />
        <Route path="/wallet" element={ <Header logo={ kleverLogo }/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
