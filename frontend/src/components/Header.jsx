import React from 'react';
import logoKlever from '../assets/logo.svg';
function Header() {
  return (
    <img 
      src={logoKlever} 
      alt="Klever"
      className="logo-image" 
    />
  );
}

export default Header;