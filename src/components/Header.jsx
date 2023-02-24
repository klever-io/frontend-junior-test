import React from 'react';
import Logo from '../assets/logo.svg';

function Header() {
  return (
    <div className='header'>
      <img src={ Logo } alt="oi" width="200px"/>
    </div>
  )
}

export default Header