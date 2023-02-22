import React from 'react';
import kleverLogo from '../assets/images/logo.svg';

function Header() {
  return (
    <header>
      <img src={ kleverLogo } alt="Klever logo" className="logo" />
    </header>
  );
}

export default Header;