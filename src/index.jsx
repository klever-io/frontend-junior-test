import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AssetsProvider from './context/AssetsProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <AssetsProvider>
    <App />
  </AssetsProvider>,
);
