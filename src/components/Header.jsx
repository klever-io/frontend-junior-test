import React from 'react';
import Logo from '../assets/logo.svg';

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" width="180px" />
    </div>
  );
}

export default Header;
