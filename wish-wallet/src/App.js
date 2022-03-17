import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/wallet" /> } />
        <Route path="/wallet" element={ <Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
