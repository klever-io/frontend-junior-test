import React from 'react';
import Header from '../components/Header';
import WishWallet from '../components/WishWallet';
import Tokens from '../components/Tokens';

function Home() {
  return (
    <div className="formContainer">
      <Header />
      <WishWallet />
      <Tokens />
    </div>
  );
}

export default Home;
