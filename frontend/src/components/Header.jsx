import React from 'react';
import logoKlever from '../assets/logo.svg';

function Header() {
  return (
    <div className="logo-container">
      <img
        src={ logoKlever }
        alt="Klever"
        className="logo-image"
      />
    </div>
  );
}

export default Header;
