import React from 'react';
import ShootingStar from '../assets/shooting-star.svg';
import Logo from '../assets/logo.svg';

 function Header() {
  return (
    <div>
      <img className='logo' src={ Logo } alt='Logo Klever' />
   
      <div className='div-header'>
        <img className='shooting-star' src={ ShootingStar } alt='Shooting-star' />
        <h1 className='h1-header'>Wish Wallet</h1>
    </div>
    </div>
  )
}
export default Header;