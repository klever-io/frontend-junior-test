import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AddToken from './pages/AddToken';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/wallet" /> } />
        <Route path="/wallet" element={ <Home /> } />
        <Route path="/wallet/register-token" element={ <AddToken /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
