import React from 'react';
import WishStar from '../assets/shooting-star.svg';

function WishWallet() {
  return (
    <div className="wish-wallet-container">
      <div className="star-container">
        <img 
          src={WishStar} 
          alt="Wish Wallet"
          className="star-logo" 
        />
        <span className="wish-label">Wish Wallet</span>
      </div>
      <div className="button-container">
        <button className="button-add">Add Token</button>
      </div>
    </div>
  )
}

export default WishWallet;