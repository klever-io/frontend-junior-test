import React from 'react';
import ShootingStar from '../assets/shooting-star.svg';

 function Header() {
  return (
    <div>
        <img className="shooting-star" src={ ShootingStar } alt="Shooting-star" />
        <h1>Whish Wallet</h1>
    </div>
  )
}
export default Header